"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface PaymentFormProps {
    isOpen: boolean;
    onClose: () => void;
    serviceType: string;
    amount: number;
    onSubmit: (userData: { name: string; email: string; phone: string }) => void;
}

export default function PaymentForm({ isOpen, onClose, serviceType, amount, onSubmit }: PaymentFormProps) {
    const [step, setStep] = useState<"details" | "qr" | "verify">("qr");
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        whatsapp: "",
        utr: "",
    });
    const [isAgreed, setIsAgreed] = useState(false);
    const [showAgreementError, setShowAgreementError] = useState(false);

    const upiId = "www.mdataur7250570798@ybl";
    const upiLink = `upi://pay?pa=${upiId}&pn=MD%20ATAUR&am=${amount}&cu=INR&tn=Payment%20for%20${encodeURIComponent(serviceType)}`;
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(upiLink)}`;

    const whatsappAdmin = "7250570798";
    const directWhatsappUrl = `https://wa.me/91${whatsappAdmin}?text=I%20am%20interested%20in%20${encodeURIComponent(serviceType)}%20package%20worth%20₹${amount}.%20I%20am%20making%20the%20payment.`;

    const handleSubmitDetails = (e: React.FormEvent) => {
        e.preventDefault();
        setStep("qr");
    };

    const handleVerifyPayment = () => {
        // Instead of API call, we just pass the data back to the parent
        // The parent will open the Success modal, and the Success modal will handle the API call
        onSubmit({
            ...formData,
            packageName: serviceType,
            amount: amount,
            isManual: true // Flag to indicate this needs manual verification on the success page
        } as any);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative bg-white w-full max-w-md rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-100"
                    >
                        <div className="p-8 md:p-10">
                            {step === "details" ? (
                                <>
                                    <div className="text-center mb-8">
                                        <h2 className="text-3xl font-bold text-gray-900 mb-2">Claim Offer</h2>
                                        <p className="text-gray-500">Enter your details to proceed</p>
                                    </div>

                                    <form onSubmit={handleSubmitDetails} className="space-y-5">
                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-2">Service Type</label>
                                            <input
                                                type="text"
                                                value={serviceType}
                                                readOnly
                                                className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl text-gray-500 font-medium focus:outline-none cursor-not-allowed"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-2">Full Name <span className="text-red-500">*</span></label>
                                            <input
                                                type="text"
                                                required
                                                placeholder="Enter your full name"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="w-full px-5 py-4 bg-white border border-gray-200 rounded-2xl text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                            />
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-bold text-gray-700 mb-2">Email Address <span className="text-red-500">*</span></label>
                                                <input
                                                    type="email"
                                                    required
                                                    placeholder="Email"
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    className="w-full px-4 py-4 bg-white border border-gray-200 rounded-2xl text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-bold text-gray-700 mb-2">Phone <span className="text-red-500">*</span></label>
                                                <input
                                                    type="tel"
                                                    required
                                                    placeholder="Phone"
                                                    value={formData.phone}
                                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                    className="w-full px-4 py-4 bg-white border border-gray-200 rounded-2xl text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-2">WhatsApp Number <span className="text-red-500">*</span></label>
                                            <input
                                                type="tel"
                                                required
                                                placeholder="Enter your WhatsApp number"
                                                value={formData.whatsapp}
                                                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                                                className="w-full px-5 py-4 bg-white border border-gray-200 rounded-2xl text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                            />
                                        </div>

                                        <div className="pt-2 text-center">
                                            <div className="text-xl font-black text-blue-600 mb-4 flex justify-between items-center bg-blue-50 p-4 rounded-2xl">
                                                <span className="text-xs text-blue-400 uppercase tracking-widest">Total Amount</span>
                                                <span>₹{amount}</span>
                                            </div>
                                            <button
                                                type="submit"
                                                className="w-full py-5 bg-gray-900 text-white rounded-2xl font-black text-lg hover:bg-blue-600 transition-all shadow-xl hover:shadow-blue-200 transform hover:-translate-y-1"
                                            >
                                                PROCEED TO PAYMENT
                                            </button>
                                        </div>
                                </form>
                                </>
                            ) : step === "qr" ? (
                                <div className="text-center">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Scan & Pay Now</h2>
                                    <p className="text-gray-500 mb-6 text-sm">Pay <span className="text-blue-600 font-bold">₹{amount}</span> for {serviceType}</p>

                                    <div className="bg-white p-4 rounded-3xl border-2 border-dashed border-blue-100 inline-block mb-6 shadow-inner relative group">
                                        <img
                                            src={qrCodeUrl}
                                            alt="UPI QR Code"
                                            className="w-64 h-64 rounded-xl shadow-lg transition-transform group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-white/10 backdrop-blur-[2px] rounded-xl">
                                            <span className="bg-white px-4 py-2 rounded-full text-xs font-bold text-blue-600 shadow-lg border border-blue-50">Scan with any UPI App</span>
                                        </div>
                                    </div>

                                    <div className="mb-8">
                                        <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-3">Or Pay Directly to UPI ID</p>
                                        <a
                                            href={upiLink}
                                            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-50 text-blue-700 rounded-xl font-bold border border-blue-100 hover:bg-blue-100 transition-all"
                                        >
                                            {upiId}
                                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" /></svg>
                                        </a>
                                    </div>

                                    <div className="bg-yellow-50 p-4 rounded-2xl border border-yellow-100 mb-6 text-left">
                                        <p className="text-yellow-800 text-xs leading-relaxed font-bold">
                                            Important: After payment, click "Notify on WhatsApp" or "I Have Paid" for verification.
                                        </p>
                                    </div>

                                    {/* Agreement Checkbox for Cyber Security */}
                                    {(serviceType.toLowerCase().includes("security") || serviceType.toLowerCase().includes("penetration")) && (
                                        <div className="mb-6 px-4 py-3 bg-red-50 rounded-2xl border border-red-100 text-left">
                                            <label className="flex items-start gap-3 cursor-pointer group">
                                                <input
                                                    type="checkbox"
                                                    checked={isAgreed}
                                                    onChange={(e) => {
                                                        setIsAgreed(e.target.checked);
                                                        if (e.target.checked) setShowAgreementError(false);
                                                    }}
                                                    className="mt-1 w-4 h-4 rounded border-red-300 text-red-600 focus:ring-red-500"
                                                />
                                                <span className="text-[11px] leading-tight text-red-900 font-medium">
                                                    I confirm that I am the legal owner or authorized administrator of the system and authorize Ataur Agency to perform penetration testing on the specified assets. 
                                                    <a 
                                                        href="/services/cyber-security/agreement" 
                                                        target="_blank" 
                                                        className="ml-1 text-red-600 font-bold underline hover:text-red-700"
                                                    >
                                                        Read more
                                                    </a>
                                                </span>
                                            </label>
                                            {showAgreementError && (
                                                <p className="text-[10px] text-red-600 font-bold mt-1 ml-7 italic underline animate-pulse">
                                                    Required: Please read and agree to continue
                                                </p>
                                            )}
                                        </div>
                                    )}

                                    <div className="flex flex-col gap-3">
                                        <a
                                            href={directWhatsappUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full py-4 bg-[#25D366] text-white rounded-2xl font-black text-lg hover:bg-[#128C7E] transition-all shadow-xl flex items-center justify-center gap-2"
                                        >
                                            NOTIFY ON WHATSAPP 📱
                                        </a>

                                        <button
                                            onClick={() => {
                                                if ((serviceType.toLowerCase().includes("security") || serviceType.toLowerCase().includes("penetration")) && !isAgreed) {
                                                    setShowAgreementError(true);
                                                    return;
                                                }
                                                setStep("verify");
                                            }}
                                            className="w-full py-4 bg-gray-900 hover:bg-black text-white rounded-2xl font-black text-lg transition-all shadow-xl flex items-center justify-center gap-2"
                                        >
                                            I HAVE PAID & VERIFY ✅
                                        </button>
                                    </div>

                                    <button
                                        disabled={loading}
                                        onClick={() => setStep("details")}
                                        className="mt-6 text-blue-600 hover:text-blue-700 font-bold transition-colors text-sm"
                                    >
                                        ← Fill Details manually
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <div className="text-center mb-8">
                                        <h2 className="text-3xl font-bold text-gray-900 mb-2">Verify Payment</h2>
                                        <p className="text-gray-500">Enter your details and UTR number</p>
                                    </div>

                                    <form onSubmit={(e) => { e.preventDefault(); handleVerifyPayment(); }} className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-1">Full Name <span className="text-red-500">*</span></label>
                                            <input
                                                type="text"
                                                required
                                                placeholder="Enter your name"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="w-full px-5 py-3 bg-white border border-gray-200 rounded-2xl text-gray-900 focus:ring-2 focus:ring-blue-500 transition-all text-sm"
                                            />
                                        </div>

                                        <div className="grid grid-cols-2 gap-3">
                                            <div>
                                                <label className="block text-sm font-bold text-gray-700 mb-1">Email <span className="text-red-500">*</span></label>
                                                <input
                                                    type="email"
                                                    required
                                                    placeholder="Email"
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-2xl text-gray-900 focus:ring-2 focus:ring-blue-500 transition-all text-sm"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-bold text-gray-700 mb-1">Phone <span className="text-red-500">*</span></label>
                                                <input
                                                    type="tel"
                                                    required
                                                    placeholder="Phone"
                                                    value={formData.phone}
                                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-2xl text-gray-900 focus:ring-2 focus:ring-blue-500 transition-all text-sm"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-1">UTR Number (12 Digits) <span className="text-red-500">*</span></label>
                                            <input
                                                type="text"
                                                required
                                                placeholder="Enter 12-digit UTR number"
                                                value={formData.utr}
                                                onChange={(e) => setFormData({ ...formData, utr: e.target.value })}
                                                className="w-full px-5 py-3 bg-white border border-blue-200 rounded-2xl text-gray-900 focus:ring-2 focus:ring-blue-500 transition-all font-mono font-bold"
                                            />
                                        </div>

                                        <div className="pt-4">
                                            <button
                                                type="submit"
                                                disabled={loading}
                                                className={`w-full py-4 ${loading ? 'bg-gray-400' : 'bg-green-600 hover:bg-green-700'} text-white rounded-2xl font-black text-lg transition-all shadow-xl flex items-center justify-center gap-2`}
                                            >
                                                {loading ? (
                                                    <>
                                                        <div className="w-5 h-5 border-4 border-white border-t-transparent rounded-full animate-spin" />
                                                        VERIFYING...
                                                    </>
                                                ) : (
                                                    "PAYMENT DONE ✅"
                                                )}
                                            </button>
                                        </div>

                                        <button
                                            type="button"
                                            disabled={loading}
                                            onClick={() => setStep("qr")}
                                            className="w-full text-center text-gray-400 hover:text-gray-600 font-medium transition-colors text-sm"
                                        >
                                            ← Back to QR
                                        </button>
                                    </form>
                                </>
                            )}

                            <button
                                type="button"
                                onClick={onClose}
                                className="mt-4 w-full text-gray-400 hover:text-gray-600 font-medium transition-colors text-sm"
                            >
                                Cancel
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
