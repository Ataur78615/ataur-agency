import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Agreement from "@/models/Agreement";
import { verifyAdmin } from "@/lib/adminAuth";

export async function GET(req: Request) {
    try {
        const authHeader = req.headers.get("x-admin-auth");
        if (!(await verifyAdmin(authHeader))) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        await connectToDatabase();
        const agreements = await Agreement.find({}).sort({ createdAt: -1 });
        return NextResponse.json(agreements);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
