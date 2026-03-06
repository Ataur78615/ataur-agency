import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import PaymentData from "@/models/PaymentData";

export async function POST(req: Request) {
    try {
        const authHeader = req.headers.get("x-admin-auth");
        if (authHeader !== "AtaurA@@26") {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const { paymentId } = await req.json();
        if (!paymentId) {
            return NextResponse.json({ error: "Payment ID is required" }, { status: 400 });
        }

        await connectToDatabase();
        
        const updatedPayment = await PaymentData.findOneAndUpdate(
            { paymentId: paymentId },
            { status: "approved" },
            { new: true }
        );

        if (!updatedPayment) {
            return NextResponse.json({ error: "Payment not found" }, { status: 404 });
        }

        return NextResponse.json({ 
            message: "Payment approved successfully",
            payment: updatedPayment 
        });

    } catch (error: any) {
        return NextResponse.json(
            { error: error.message || "Failed to approve payment" },
            { status: 500 }
        );
    }
}
