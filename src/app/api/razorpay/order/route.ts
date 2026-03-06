import { NextResponse } from "next/server";
import Razorpay from "razorpay";

export async function POST(req: Request) {
    try {
        const { amount, currency = "INR", receipt } = await req.json();

        if (!amount) {
            return NextResponse.json(
                { error: "Amount is required" },
                { status: 400 }
            );
        }

        // Initialize Razorpay inside the handler to avoid build-time errors when environment variables are missing
        const key_id = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
        const key_secret = process.env.RAZORPAY_KEY_SECRET;

        if (!key_id || !key_secret) {
            console.error("Razorpay environment variables are missing");
            return NextResponse.json(
                { error: "Payment gateway configuration error" },
                { status: 500 }
            );
        }

        const razorpay = new Razorpay({
            key_id,
            key_secret,
        });

        const options = {
            amount: Math.round(amount * 100), // Razorpay expects amount in paise
            currency,
            receipt,
        };

        const order = await razorpay.orders.create(options);

        return NextResponse.json(order);
    } catch (error: any) {
        console.error("Razorpay order creation error:", error);
        return NextResponse.json(
            { error: error.message || "Failed to create order" },
            { status: 500 }
        );
    }
}
