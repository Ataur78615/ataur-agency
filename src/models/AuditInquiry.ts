import mongoose, { Schema, Document } from 'mongoose';

export interface IAuditInquiry extends Document {
  websiteName: string;
  category: string;
  whatsappNumber: string;
  email: string;
  websiteUrl: string;
  plan: string;
  amount: number;
  paymentStatus: string;
  paymentId: string;
  orderId: string;
  status: string;
  createdAt: Date;
}

const AuditInquirySchema: Schema = new Schema({
  websiteName: { type: String, required: true },
  category: { type: String, required: true },
  whatsappNumber: { type: String, required: true },
  email: { type: String, required: true },
  websiteUrl: { type: String, required: true },
  plan: { type: String, required: true },
  amount: { type: Number, required: true },
  paymentStatus: { type: String, default: 'pending' },
  paymentId: { type: String, default: '' },
  orderId: { type: String, default: '' },
  status: { type: String, default: 'pending' },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.AuditInquiry || mongoose.model<IAuditInquiry>('AuditInquiry', AuditInquirySchema);
