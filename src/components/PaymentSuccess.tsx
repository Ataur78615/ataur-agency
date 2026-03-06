"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, MessageSquare, X, ArrowRight, ExternalLink, Send, Loader2 } from "lucide-react";
import { useState } from "react";

interface PaymentSuccessProps {
    isOpen: boolean;
    onClose: () => void;
    packageName: string;
    amount: number;
    transactionId?: string;
    utrNumber?: string;
    whatsappUrl?: string;
    // New optional props for full data handling
    userData?: {
        name: string;
        email: string;
        phone: string;
        whatsapp: string;
        utr: string;
    };
}

export default function PaymentSuccess({
    isOpen,
    onClose,
    packageName,
    amount,
    transactionId: initialTransactionId,
    utrNumber: initialUtr,
    whatsappUrl: initialWhatsappUrl,
    userData
}: PaymentSuccessProps) {
    const [loading, setLoading] = useState(false);
    const [sent, setSent] = useState(false);
    const [finalTransactionId, setFinalTransactionId] = useState(initialTransactionId);
    const [finalWhatsappUrl, setFinalWhatsappUrl] = useState(initialWhatsappUrl);

    const handleSendToOwner = async () => {
        if (!userData) return;
        setLoading(true);
        try {
            const res = await fetch("/api/payment/manual", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    userData: userData,
                    packageName: packageName,
                    amount: amount
                })
            });
            const data = await res.json();
            if (res.ok) {
                setSent(true);
                setFinalTransactionId(data.paymentId);
                setFinalWhatsappUrl(data.whatsappUrl);
                
                // Automatically open WhatsApp after a short delay
                setTimeout(() => {
                    if (data.whatsappUrl) {
                        window.open(data.whatsappUrl, "_blank");
                    }
                }, 1000);
            } else {
                alert(data.error || "Failed to send details. Please try again.");
            }
        } catch (error) {
            alert("Connection error. Please check your internet.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-md"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative bg-white w-full max-w-[90%] md:max-w-lg rounded-[2rem] md:rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-100 mx-auto"
                    >
                        {/* Success Header with Animation */}
                        <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-8 md:p-12 text-center relative overflow-hidden">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring", damping: 15, delay: 0.2 }}
                                className="w-20 h-20 md:w-24 md:h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl relative z-10"
                            >
                                <CheckCircle2 className="w-10 h-10 md:w-12 md:h-12 text-white" />
                            </motion.div>
                            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-2 relative z-10">Payment Confirmed!</h2>
                            <p className="text-emerald-700 font-bold relative z-10 tracking-tight text-sm md:text-lg px-4">
                                Your payment to Ataur Agency has been successfully processed.
                            </p>

                            {/* Decorative background circles */}
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-green-200/30 rounded-full blur-3xl" />
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-emerald-200/30 rounded-full blur-3xl" />
                        </div>

                        <div className="p-6 md:p-10">
                            <div className="space-y-4 mb-6">
                                <div className="flex justify-between items-center py-3 md:py-4 border-b border-gray-50">
                                    <span className="text-gray-500 font-medium text-sm md:text-base">Package</span>
                                    <span className="text-gray-900 font-bold text-right text-sm md:text-base">{packageName}</span>
                                </div>
                                <div className="flex justify-between items-center py-3 md:py-4 border-b border-gray-50">
                                    <span className="text-gray-500 font-medium text-sm md:text-base">Amount Paid</span>
                                    <span className="text-xl md:text-2xl font-black text-blue-600">₹{amount}</span>
                                </div>
                                <div className="flex justify-between items-center py-3 border-b border-gray-50">
                                    <span className="text-gray-500 font-medium text-sm">UTR Number</span>
                                    <span className="text-sm font-bold text-gray-900">{userData?.utr || initialUtr || "N/A"}</span>
                                </div>
                                {finalTransactionId && (
                                    <div className="flex justify-between items-center py-3 border-b border-gray-50">
                                        <span className="text-gray-500 font-medium text-sm">Transaction ID</span>
                                        <span className="text-[10px] font-mono bg-gray-100 px-3 py-1 rounded-full text-gray-600 uppercase">
                                            {finalTransactionId}
                                        </span>
                                    </div>
                                )}
                            </div>

                            <div className="bg-blue-50/50 p-5 md:p-6 rounded-3xl border border-blue-100 mb-6 md:mb-8">
                                <h4 className="font-bold text-blue-900 mb-2 flex items-center">
                                    <MessageSquare className="w-4 h-4 mr-2" />
                                    Final Step
                                </h4>
                                <p className="text-blue-700 text-xs md:text-sm leading-relaxed">
                                    Click the button below to send your details to the owner via Email and WhatsApp for immediate confirmation.
                                </p>
                            </div>

                            <div className="flex flex-col gap-3">
                                {!sent ? (
                                    <button
                                        onClick={handleSendToOwner}
                                        disabled={loading}
                                        className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-100 flex items-center justify-center gap-3 transform active:scale-95"
                                    >
                                        {loading ? (
                                            <>
                                                <Loader2 className="w-6 h-6 animate-spin" />
                                                SENDING...
                                            </>
                                        ) : (
                                            <>
                                                <Send className="w-6 h-6" />
                                                SEND DETAILS TO OWNER
                                            </>
                                        )}
                                    </button>
                                ) : (
                                    <div className="text-center py-4 bg-green-50 text-green-700 rounded-2xl font-bold border border-green-100 mb-2 flex items-center justify-center gap-2">
                                        <CheckCircle2 className="w-5 h-5" />
                                        DETAILS SENT SUCCESSFULLY ✅
                                    </div>
                                )}

                                <div className="flex flex-col sm:flex-row gap-3">
                                    <button
                                        onClick={onClose}
                                        className="flex-1 py-4 bg-gray-100 text-gray-900 hover:bg-gray-200 rounded-2xl font-bold transition-all text-sm md:text-base flex items-center justify-center gap-2"
                                    >
                                        Close Window
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                    {(finalWhatsappUrl || (initialWhatsappUrl && !sent)) && (
                                        <a
                                            href={(sent ? finalWhatsappUrl : initialWhatsappUrl) || "#"}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 py-4 bg-[#25D366] text-white rounded-2xl font-bold hover:bg-[#128C7E] transition-all shadow-lg hover:shadow-green-100 flex items-center justify-center gap-2 text-sm md:text-base"
                                        >
                                            <MessageSquare className="w-5 h-5 text-white" />
                                            WhatsApp Chat
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 p-2 rounded-full bg-white/50 hover:bg-white text-gray-500 hover:text-gray-900 transition-all z-20"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
