import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import PaymentData from "@/models/PaymentData";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { userData, packageName, amount } = body;
        const { name, email, phone, whatsapp, utr } = userData;

        // 1. Generate local Payment ID
        const paymentId = `ATAUR_PAY_${Date.now()}_${Math.random().toString(36).substring(7).toUpperCase()}`;

        // 2. Save to MongoDB
        let dbSaved = false;
        try {
            await connectToDatabase();
            const payment = new PaymentData({
                name: name,
                email: email,
                phone: phone,
                whatsappNumber: whatsapp || phone,
                serviceType: packageName,
                amount: amount,
                paymentId: paymentId,
                utrNumber: utr,
                status: "manual_pending",
            });
            await payment.save();
            dbSaved = true;
        } catch (dbError) {
            console.error(">>> MANUAL API: MongoDB Save Failed", dbError);
        }

        // 3. Send Email Notification
        const emailUser = process.env.EMAIL_USER || "atauragency@gmail.com";
        const emailPass = process.env.EMAIL_PASS;

        if (emailPass) {
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
                    subject: `New Manual QR Payment: ${packageName}`,
                    text: `
            New Manual Payment Details (Pending Verification):
            --------------------
            Service: ${packageName}
            Amount: ₹${amount}
            UTR Number: ${utr}
            
            Client Details:
            - Name: ${name}
            - Email: ${email}
            - Phone: ${phone}
            
            Agency Payment ID: ${paymentId}
            DB Saved: ${dbSaved ? "Yes" : "No"}
          `,
                };

                await transporter.sendMail(mailOptions);
            } catch (emailError) {
                console.error(">>> MANUAL API: Email failed", emailError);
            }
        }

        // 4. Generate WhatsApp Link
        const whatsappEnv = process.env.WHATSAPP_NUMBER || "7250570798";
        // Clean the number (remove +, spaces, etc.) for wa.me
        const whatsappClean = whatsappEnv.replace(/\D/g, "");
        // If it Doesn't start with a country code, assume India (91)
        const whatsappFinal = whatsappClean.length === 10 ? `91${whatsappClean}` : whatsappClean;

        const whatsappMessage = `New QR Payment Done!%0A%0AService:%20${encodeURIComponent(packageName)}%0AAmount:%20₹${amount}%0AUTR:%20${utr}%0A%0AClient%20Details:%0AName:%20${encodeURIComponent(name)}%0AEmail:%20${encodeURIComponent(email)}%0APhone:%20${phone}%0A%0APayment%20ID:%20${paymentId}`;
        const whatsappUrl = `https://wa.me/${whatsappFinal}?text=${whatsappMessage}`;

        return NextResponse.json({
            message: "Success",
            paymentId,
            whatsappUrl
        });

    } catch (error: any) {
        console.error(">>> MANUAL API: Global catch", error);
        return NextResponse.json(
            { error: error.message || "Failed to process payment" },
            { status: 500 }
        );
    }
}
