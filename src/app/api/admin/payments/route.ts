import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import PaymentData from "@/models/PaymentData";

export async function GET(req: Request) {
    try {
        const authHeader = req.headers.get("x-admin-auth");
        if (authHeader !== "AtaurA@@26") {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        await connectToDatabase();
        const payments = await PaymentData.find({}).sort({ createdAt: -1 });
        return NextResponse.json(payments);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
