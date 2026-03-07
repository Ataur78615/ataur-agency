import mongoose, { Schema, Document } from 'mongoose';

export interface IAgreement extends Document {
    name: string;
    company: string;
    websiteUrl: string;
    email: string;
    digitalSignature: string;
    service: string;
    createdAt: Date;
}

const AgreementSchema: Schema = new Schema({
    name: { type: String, required: true },
    company: { type: String, required: true },
    websiteUrl: { type: String, required: true },
    email: { type: String, required: true },
    digitalSignature: { type: String, required: true },
    service: { type: String, default: 'cyber-security' },
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Agreement || mongoose.model<IAgreement>('Agreement', AgreementSchema);
