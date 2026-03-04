"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <main className="pt-32 pb-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4 block">Ataur Agency Official</span>
                        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                            Service Policy & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Terms of Agreement</span>
                        </h1>
                        <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full" />
                    </motion.div>

                    {/* Content Sections */}
                    <div className="space-y-12">
                        {/* Section 1: Payment & Refund */}
                        <motion.section
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-gray-50 p-8 md:p-10 rounded-[2.5rem] border border-gray-100 shadow-sm"
                        >
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                <span className="bg-blue-600 text-white w-10 h-10 rounded-xl flex items-center justify-center mr-4 shadow-lg shadow-blue-100">1</span>
                                Payment & Refund Policy (Strict)
                            </h2>
                            <div className="space-y-6 text-gray-700 leading-relaxed">
                                <div className="bg-white p-6 rounded-2xl border border-red-100">
                                    <h3 className="font-bold text-red-600 mb-2 italic">⚠️ No Refund Policy</h3>
                                    <p>Once a payment is processed and the project/service has commenced, no refunds will be issued under any circumstances. This applies to both upfront deposits and full payments.</p>
                                </div>
                                <ul className="space-y-4 list-disc pl-5">
                                    <li><span className="font-bold text-gray-900">Payment Milestones:</span> For project-based services (Web Dev/Cyber Security), a 50% advance is required to initiate work. The remaining 50% must be cleared before the final handover or website migration.</li>
                                    <li><span className="font-bold text-gray-900">Late Fees:</span> Payments delayed by more than 7 days from the invoice due date will incur a 5% late fee per week.</li>
                                </ul>
                            </div>
                        </motion.section>

                        {/* Section 2: Service Policies */}
                        <motion.section
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center pl-4 border-l-4 border-blue-600">
                                2. Service-Specific Policies
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Ads Component */}
                                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl hover:shadow-2xl transition-all border-t-4 border-t-blue-500">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4 items-center flex">
                                        <span className="mr-3">📢</span> Performance Ads
                                    </h3>
                                    <ul className="space-y-3 text-sm text-gray-600">
                                        <li>• Ad Spend (Budget) is paid directly by the client to Meta/Google.</li>
                                        <li>• Minimum 3-month commitment recommended.</li>
                                        <li>• No ROI guarantees due to market variables.</li>
                                    </ul>
                                </div>

                                {/* Web Dev Component */}
                                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl hover:shadow-2xl transition-all border-t-4 border-t-emerald-500">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4 items-center flex">
                                        <span className="mr-3">💻</span> Web Development
                                    </h3>
                                    <ul className="space-y-3 text-sm text-gray-600">
                                        <li>• Extra features outside initial proposal are charged as Add-ons.</li>
                                        <li>• Client delays of 14+ days may incur a Restart Fee.</li>
                                        <li>• 30 Days free post-launch technical support.</li>
                                    </ul>
                                </div>

                                {/* AI Component */}
                                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl hover:shadow-2xl transition-all border-t-4 border-t-orange-500">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4 items-center flex">
                                        <span className="mr-3">🤖</span> AI Automation
                                    </h3>
                                    <ul className="space-y-3 text-sm text-gray-600">
                                        <li>• API costs (n8n, OpenAI, Meta) are borne by the client.</li>
                                        <li>• Includes 1 month of monitoring.</li>
                                        <li>• Maintenance plans available for long-term updates.</li>
                                    </ul>
                                </div>

                                {/* Security Component */}
                                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl hover:shadow-2xl transition-all border-t-4 border-t-red-500">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4 items-center flex">
                                        <span className="mr-3">🔐</span> Cyber Security
                                    </h3>
                                    <ul className="space-y-3 text-sm text-gray-600">
                                        <li>• Liability limited to audit findings at a specific point in time.</li>
                                        <li>• Client side negligence is not our liability.</li>
                                        <li>• Written authorization required before testing.</li>
                                    </ul>
                                </div>
                            </div>
                        </motion.section>

                        {/* Section 3: General Terms */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-blue-600 p-8 md:p-12 rounded-[3rem] text-white shadow-2xl relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                            <h2 className="text-2xl font-bold mb-8 flex items-center">
                                <span className="bg-white text-blue-600 w-10 h-10 rounded-xl flex items-center justify-center mr-4">3</span>
                                General Terms & Agreement
                            </h2>
                            <div className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <h4 className="font-bold text-blue-200 mb-2 uppercase text-xs tracking-widest">Confidentiality</h4>
                                        <p className="text-sm leading-relaxed">Both parties agree to keep all business data, strategies, and login credentials strictly confidential.</p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-blue-200 mb-2 uppercase text-xs tracking-widest">Termination</h4>
                                        <p className="text-sm leading-relaxed">We reserve the right to terminate services due to unethical practices, non-payment, or harassment.</p>
                                    </div>
                                </div>
                                <div className="pt-8 border-t border-white/20 text-center">
                                    <p className="text-blue-100 italic">"All official communication must be conducted via Email or our designated Management Tool for proper record-keeping."</p>
                                </div>
                            </div>
                        </motion.section>
                    </div>

                    {/* CTA Section */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-center mt-20"
                    >
                        <p className="text-gray-500 mb-8">By initiating a project with us, you acknowledge and agree to these terms.</p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center space-x-3 bg-gray-900 text-white px-10 py-4 rounded-full font-bold hover:bg-gray-800 transition-all shadow-xl"
                        >
                            Got Questions? Contact Us
                        </Link>
                    </motion.div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
