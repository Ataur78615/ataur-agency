import { NextRequest, NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Agreement from '@/models/Agreement';

export async function POST(request: NextRequest) {
    try {
        const { name, company, websiteUrl, email, digitalSignature, service } = await request.json();

        if (!name || !company || !websiteUrl || !email || !digitalSignature) {
            return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
        }

        await connectToDatabase();

        const agreement = new Agreement({
            name,
            company,
            websiteUrl,
            email,
            digitalSignature,
            service: service || 'cyber-security'
        });

        await agreement.save();

        return NextResponse.json({ message: 'Agreement submitted successfully', id: agreement._id }, { status: 201 });
    } catch (error) {
        console.error('Error submitting agreement:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
