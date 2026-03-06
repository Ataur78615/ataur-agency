import connectToDatabase from "./mongodb";
import Admin from "@/models/Admin";

export async function verifyAdmin(authHeader: string | null) {
    if (!authHeader) return false;

    try {
        await connectToDatabase();
        const admin = await Admin.findOne({ password: authHeader });
        return !!admin;
    } catch (error) {
        console.error("Admin verification error:", error);
        return false;
    }
}
