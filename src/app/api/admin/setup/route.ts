import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Admin from "@/models/Admin";

export async function GET() {
    try {
        await connectToDatabase();

        // Check if admin already exists
        const existingAdmin = await Admin.findOne({ email: "atauragency@gmail.com" });

        if (existingAdmin) {
            return NextResponse.json({ message: "Admin already exists" });
        }

        // Create initial admin
        const admin = new Admin({
            email: "atauragency@gmail.com",
            password: "AtaurA@@26",
            role: "admin",
        });

        await admin.save();

        return NextResponse.json({ message: "Admin created successfully" });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
