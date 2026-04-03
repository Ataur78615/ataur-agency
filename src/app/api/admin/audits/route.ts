import { NextRequest, NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import AuditInquiry from '@/models/AuditInquiry';

export async function GET(request: NextRequest) {
  try {
    const adminAuthHeader = request.headers.get('x-admin-auth');
    if (!adminAuthHeader) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectToDatabase();

    const auditInquiries = await AuditInquiry.find().sort({ createdAt: -1 });

    return NextResponse.json(auditInquiries, { status: 200 });
  } catch (error) {
    console.error('Error fetching audit inquiries:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
