"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AgreementPage() {
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        websiteUrl: "",
        email: "",
        digitalSignature: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isAgreed, setIsAgreed] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!isAgreed) return;

        setIsSubmitting(true);
        try {
            const response = await fetch('/api/agreements', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...formData, service: 'cyber-security' }),
            });

            if (response.ok) {
                setIsSubmitted(true);
                // After 2 seconds, redirect back or show success
                setTimeout(() => {
                   window.close(); // If opened in a new tab
                   // Or redirect back
                   // window.location.href = '/services/cyber-security';
                }, 2000);
            }
        } catch (error) {
            console.error('Submission error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#050505] text-white">
            <Navbar />
            <main className="pt-32 pb-20 px-4 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-zinc-900/50 border border-zinc-800 rounded-[2.5rem] p-8 md:p-12 backdrop-blur-xl"
                >
                    <div className="text-center mb-12">
                        <h1 className="text-3xl md:text-4xl font-black mb-4 tracking-tighter">
                            Penetration Testing <span className="text-red-500">Authorization Agreement</span>
                        </h1>
                        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                            Before Ataur Agency performs any penetration testing or vulnerability assessment, 
                            the client must provide written authorization confirming ownership or administrative control over the system.
                        </p>
                    </div>

                    <div className="space-y-10 prose prose-invert max-w-none text-zinc-300">
                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">1. Introduction</h2>
                            <p>Ataur Agency provides cybersecurity services including penetration testing and vulnerability assessments for websites, applications, and servers.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">2. Authorization Requirement</h2>
                            <p>Clients must provide written approval before any testing begins.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">3. Scope of Testing</h2>
                            <p>Testing may include vulnerability scanning, SQL injection testing, cross-site scripting testing, authentication security checks, and configuration analysis.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">4. Liability Disclaimer</h2>
                            <p>Ataur Agency’s liability is limited to audit findings at the time of testing. We are not responsible for client-side negligence or changes made after the audit report.</p>
                        </section>

                        <section className="border-t border-zinc-800 pt-10">
                            <h2 className="text-xl font-bold text-white mb-6">5. Client Consent</h2>
                            <label className="flex items-start gap-4 cursor-pointer group">
                                <input
                                    type="checkbox"
                                    checked={isAgreed}
                                    onChange={(e) => setIsAgreed(e.target.checked)}
                                    className="mt-1 w-5 h-5 rounded border-zinc-700 bg-zinc-800 text-red-600 focus:ring-red-500"
                                />
                                <span className="text-sm md:text-base group-hover:text-white transition-colors">
                                    I confirm that I am the legal owner or authorized administrator of the system and authorize Ataur Agency to perform penetration testing.
                                </span>
                            </label>
                        </section>

                        <section className="border-t border-zinc-800 pt-10">
                            <h2 className="text-xl font-bold text-white mb-8">6. Consent Form</h2>
                            {isSubmitted ? (
                                <div className="bg-emerald-500/10 border border-emerald-500/20 p-8 rounded-2xl text-center">
                                    <div className="text-4xl mb-4">✅</div>
                                    <h3 className="text-xl font-bold text-emerald-400 mb-2">Agreement Submitted!</h3>
                                    <p className="text-zinc-400">Your authorization has been recorded. You can now proceed with the payment.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold text-zinc-400 mb-2">Full Name</label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                                            className="w-full px-5 py-4 bg-zinc-800 border border-zinc-700 rounded-2xl focus:ring-2 focus:ring-red-500 outline-none transition-all"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-zinc-400 mb-2">Company</label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.company}
                                            onChange={(e) => setFormData({...formData, company: e.target.value})}
                                            className="w-full px-5 py-4 bg-zinc-800 border border-zinc-700 rounded-2xl focus:ring-2 focus:ring-red-500 outline-none transition-all"
                                            placeholder="Your Company Name"
                                        />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-bold text-zinc-400 mb-2">Website URL</label>
                                        <input
                                            type="url"
                                            required
                                            value={formData.websiteUrl}
                                            onChange={(e) => setFormData({...formData, websiteUrl: e.target.value})}
                                            className="w-full px-5 py-4 bg-zinc-800 border border-zinc-700 rounded-2xl focus:ring-2 focus:ring-red-500 outline-none transition-all"
                                            placeholder="https://example.com"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-zinc-400 mb-2">Email</label>
                                        <input
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                                            className="w-full px-5 py-4 bg-zinc-800 border border-zinc-700 rounded-2xl focus:ring-2 focus:ring-red-500 outline-none transition-all"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-zinc-400 mb-2">Digital Signature</label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.digitalSignature}
                                            onChange={(e) => setFormData({...formData, digitalSignature: e.target.value})}
                                            className="w-full px-5 py-4 bg-zinc-800 border border-zinc-700 rounded-2xl focus:ring-2 focus:ring-red-500 outline-none transition-all italic font-serif"
                                            placeholder="Type your full name to sign"
                                        />
                                    </div>
                                    <div className="md:col-span-2 pt-4">
                                        <button
                                            type="submit"
                                            disabled={!isAgreed || isSubmitting}
                                            className={`w-full py-5 rounded-2xl font-black text-lg transition-all shadow-xl ${
                                                isAgreed 
                                                ? 'bg-red-600 hover:bg-red-700 text-white shadow-red-900/20' 
                                                : 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
                                            }`}
                                        >
                                            {isSubmitting ? 'SUBMITTING...' : 'SUBMIT AGREEMENT & AUTHORIZE'}
                                        </button>
                                    </div>
                                </form>
                            )}
                        </section>
                    </div>

                    <div className="mt-12 text-center text-zinc-500 text-sm font-medium">
                        Ataur Agency – Cyber Security & Digital Solutions
                    </div>
                </motion.div>
            </main>
            <Footer />
        </div>
    );
}
