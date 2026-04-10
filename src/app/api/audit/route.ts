import { NextRequest, NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import AuditInquiry from '@/models/AuditInquiry';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { 
      websiteName, 
      category, 
      whatsappNumber, 
      websiteUrl, 
      email, 
      plan, 
      amount, 
      paymentStatus = 'pending',
      paymentId = '',
      orderId = ''
    } = await request.json();

    if (!websiteName || !category || !whatsappNumber || !websiteUrl || !email || !plan || !amount) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    await connectToDatabase();

    const auditInquiry = new AuditInquiry({
      websiteName,
      category,
      whatsappNumber,
      email,
      websiteUrl,
      plan,
      amount,
      paymentStatus,
      paymentId,
      orderId
    });

    await auditInquiry.save();

    // Send Email Notification to Admin
    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;

    if (emailUser && emailPass) {
      try {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: emailUser,
            pass: emailPass,
          },
        });

        const mailOptions = {
          from: emailUser,
          to: emailUser, // Send to admin
          subject: `💰 New Revenue Leakage Audit Request: ${websiteName}`,
          html: `
            <div style="font-family: sans-serif; padding: 20px; color: #333; border: 1px solid #eee; border-radius: 10px;">
              <h2 style="color: #2563eb;">New Revenue Leakage Audit Submission</h2>
              <p>You have received a new Audit request from your website.</p>
              <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
              <p><strong>Website Name:</strong> ${websiteName}</p>
              <p><strong>Category:</strong> ${category}</p>
              <p><strong>Email Address:</strong> ${email}</p>
              <p><strong>WhatsApp Number:</strong> ${whatsappNumber}</p>
              <p><strong>Website URL:</strong> <a href="${websiteUrl}" style="color: #2563eb;">${websiteUrl}</a></p>
              <p><strong>Selection Plan:</strong> ${plan} (₹${amount})</p>
              <p><strong>Payment Status:</strong> ${paymentStatus}</p>
              <p><strong>Payment ID:</strong> ${paymentId}</p>
              <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
              <p style="font-size: 12px; color: #666;">This is an automated notification from Ataur Agency.</p>
            </div>
          `,
        };

        await transporter.sendMail(mailOptions);
        console.log('Audit notification email sent');
      } catch (emailError) {
        console.error('Error sending audit email:', emailError);
      }
    }

    return NextResponse.json({ message: 'Audit inquiry submitted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error processing audit form:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
