import { NextResponse } from "next/server";
import crypto from "crypto";
import connectToDatabase from "@/lib/mongodb";
import PaymentData from "@/models/PaymentData";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    console.log(">>> VERIFY API: Received request");
    try {
        const bodyText = await req.text();
        const data = JSON.parse(bodyText);
        const {
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature,
            userData,
            packageName,
            amount
        } = data;

        console.log(">>> VERIFY API: Data parsed", { razorpay_order_id, razorpay_payment_id, packageName });

        // 1. Verify Signature
        const authBody = razorpay_order_id + "|" + razorpay_payment_id;
        const expectedSignature = crypto
            .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
            .update(authBody.toString())
            .digest("hex");

        const isAuthentic = expectedSignature === razorpay_signature;

        if (!isAuthentic) {
            console.error(">>> VERIFY API: Signature mismatch");
            return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
        }

        console.log(">>> VERIFY API: Signature verified");

        // 2. Save to MongoDB
        let dbSaved = false;
        try {
            console.log(">>> VERIFY API: Connecting to DB...");
            await connectToDatabase();
            const payment = new PaymentData({
                name: userData.name,
                email: userData.email,
                phone: userData.phone,
                serviceType: packageName,
                amount: amount,
                paymentId: razorpay_payment_id,
                orderId: razorpay_order_id,
                status: "paid",
            });
            await payment.save();
            dbSaved = true;
            console.log(">>> VERIFY API: Saved to MongoDB");
        } catch (dbError) {
            console.error(">>> VERIFY API: MongoDB Save Failed", dbError);
            // We continue even if DB fails to ensure WhatsApp link is returned
        }

        // 3. Send Email Notification (Non-blocking)
        const emailUser = process.env.EMAIL_USER || "atauragency@gmail.com";
        const emailPass = process.env.EMAIL_PASS;

        if (emailPass) {
            console.log(">>> VERIFY API: Attempting email notification...");
            try {
                const transporter = nodemailer.createTransport({
                    service: "gmail",
                    auth: {
                        user: emailUser,
                        pass: emailPass,
                    },
                });

                const mailOptions = {
                    from: emailUser,
                    to: "atauragency@gmail.com",
                    subject: `New Payment Received: ${packageName}`,
                    text: `
            New Payment Details:
            --------------------
            Name: ${userData.name}
            Email: ${userData.email}
            Phone: ${userData.phone}
            Service: ${packageName}
            Amount: ₹${amount}
            Payment ID: ${razorpay_payment_id}
            Order ID: ${razorpay_order_id}
            DB Saved: ${dbSaved ? "Yes" : "No"}
          `,
                };

                await transporter.sendMail(mailOptions);
                console.log(">>> VERIFY API: Email sent");
            } catch (emailError) {
                console.error(">>> VERIFY API: Email failed", emailError);
            }
        } else {
            console.warn(">>> VERIFY API: EMAIL_PASS not set, skipping email");
        }

        const whatsappUrl = `https://wa.me/917250570798?text=New%20Payment%20Received!%0A%0AName:%20${encodeURIComponent(userData.name)}%0AEmail:%20${encodeURIComponent(userData.email)}%0APhone:%20${encodeURIComponent(userData.phone)}%0AService:%20${encodeURIComponent(packageName)}%0AAmount:%20₹${amount}`;

        return NextResponse.json({
            message: "Payment verification process completed",
            dbSaved,
            whatsappUrl
        });

    } catch (error: any) {
        console.error(">>> VERIFY API: Global catch", error);
        return NextResponse.json(
            { error: error.message || "Failed to verify payment" },
            { status: 500 }
        );
    }
}
