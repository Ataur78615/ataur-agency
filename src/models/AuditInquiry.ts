import mongoose, { Schema, Document } from 'mongoose';

export interface IAuditInquiry extends Document {
  websiteName: string;
  category: string;
  whatsappNumber: string;
  websiteUrl: string;
  status: string;
  createdAt: Date;
}

const AuditInquirySchema: Schema = new Schema({
  websiteName: { type: String, required: true },
  category: { type: String, required: true },
  whatsappNumber: { type: String, required: true },
  websiteUrl: { type: String, required: true },
  status: { type: String, default: 'pending' },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.AuditInquiry || mongoose.model<IAuditInquiry>('AuditInquiry', AuditInquirySchema);
