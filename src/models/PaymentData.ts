import mongoose from 'mongoose';

const PaymentDataSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name'],
    },
    email: {
        type: String,
        required: [true, 'Please provide an email'],
    },
    phone: {
        type: String,
        required: [true, 'Please provide a phone number'],
    },
    whatsappNumber: {
        type: String,
        required: [true, 'Please provide a WhatsApp number'],
    },
    serviceType: {
        type: String,
        required: [true, 'Service type is required'],
    },
    amount: {
        type: Number,
        required: true,
    },
    paymentId: {
        type: String,
        required: true,
    },
    orderId: {
        type: String,
        required: false,
    },
    utrNumber: {
        type: String,
        required: false, // Optional initially, filled during verification
    },
    status: {
        type: String,
        default: 'manual_pending',
    },
}, {
    timestamps: true,
});

export default mongoose.models.PaymentData || mongoose.model('PaymentData', PaymentDataSchema);
