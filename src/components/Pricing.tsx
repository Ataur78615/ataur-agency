"use client";

import { motion } from "framer-motion";

const pricingData = [
    {
        category: "Performance Advertising",
        services: [
            { name: "Meta/Google Ads (Setup + Management)", market: 90000, ataur: 45000, marketUSD: 1080, ataurUSD: 540 },
            { name: "LinkedIn Ads (B2B Specialized)", market: 135000, ataur: 67500, marketUSD: 1620, ataurUSD: 810 },
            { name: "WhatsApp Ads & Lead Gen Funnel", market: 60000, ataur: 30000, marketUSD: 720, ataurUSD: 360 },
        ]
    },
    {
        category: "Website Design & Development",
        services: [
            { name: "Corporate/Startup Website", market: 120000, ataur: 60000, marketUSD: 1440, ataurUSD: 720 },
            { name: "E-commerce / CRM System Website", market: 240000, ataur: 120000, marketUSD: 2880, ataurUSD: 1440 },
            { name: "RBAC Secure / Multi-Tenant Systems", market: 450000, ataur: 225000, marketUSD: 5400, ataurUSD: 2700 },
        ]
    },
    {
        category: "AI Automation & Lead Follow-Up",
        services: [
            { name: "n8n Based AI Follow-up System", market: 180000, ataur: 90000, marketUSD: 2160, ataurUSD: 1080 },
            { name: "WhatsApp Automation Setup", market: 75000, ataur: 37500, marketUSD: 900, ataurUSD: 450 },
        ]
    },
    {
        category: "Cyber Security & Protection",
        services: [
            { name: "Website Security Audit", market: 150000, ataur: 75000, marketUSD: 1800, ataurUSD: 900 },
            { name: "Penetration Testing (Web/Social)", market: 300000, ataur: 150000, marketUSD: 3600, ataurUSD: 1800 },
        ]
    }
];

export default function Pricing() {
    return (
        <section id="pricing" className="py-24 bg-gray-50 relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100 rounded-full blur-[120px] opacity-40 pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-100 rounded-full blur-[120px] opacity-40 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4 inline-block shadow-lg shadow-blue-200">
                        Exclusive Value
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Services <span className="text-blue-600">Pricing Pool</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Get high-end agency results at half the cost. Prices calculated for a <span className="font-bold text-gray-900">3-Month Strategic Package</span>.
                    </p>
                </motion.div>

                <div className="space-y-16">
                    {pricingData.map((category, idx) => (
                        <motion.div
                            key={category.category}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                        >
                            <h3 className="text-2xl font-bold text-gray-900 mb-8 pl-4 border-l-4 border-blue-600 flex items-center justify-between">
                                <span>{idx + 1}. {category.category}</span>
                                <span className="text-sm font-normal text-gray-500 hidden md:block italic">Market vs Ataur Agency (3 Months)</span>
                            </h3>

                            <div className="grid grid-cols-1 gap-6">
                                {category.services.map((service) => (
                                    <div
                                        key={service.name}
                                        className="bg-white p-6 md:p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
                                    >
                                        <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                                            {/* Service Info */}
                                            <div className="lg:w-1/3">
                                                <h4 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                                                    {service.name}
                                                </h4>
                                                <div className="flex items-center space-x-2">
                                                    <span className="text-xs font-bold text-orange-500 bg-orange-50 px-2 py-0.5 rounded">SAVE 50%</span>
                                                    <span className="text-xs text-gray-400">Fixed Support</span>
                                                </div>
                                            </div>

                                            {/* Bar Graph Section */}
                                            <div className="flex-1 space-y-4">
                                                {/* Market Rate Bar */}
                                                <div className="space-y-2">
                                                    <div className="flex justify-between text-xs font-bold text-gray-400 uppercase tracking-tight">
                                                        <span>Avg. Market Rate</span>
                                                        <span>₹{service.market.toLocaleString()} / ${service.marketUSD}</span>
                                                    </div>
                                                    <div className="h-2.5 w-full bg-gray-100 rounded-full overflow-hidden">
                                                        <motion.div
                                                            initial={{ width: 0 }}
                                                            whileInView={{ width: "100%" }}
                                                            viewport={{ once: true }}
                                                            transition={{ duration: 1.5, ease: "easeOut" }}
                                                            className="h-full bg-gray-300 rounded-full"
                                                        />
                                                    </div>
                                                </div>

                                                {/* Ataur Agency Bar */}
                                                <div className="space-y-2">
                                                    <div className="flex justify-between text-xs font-bold text-blue-600 uppercase tracking-tight">
                                                        <span>Ataur Agency (50% OFF)</span>
                                                        <span className="text-sm font-black">₹{service.ataur.toLocaleString()} / ${service.ataurUSD}</span>
                                                    </div>
                                                    <div className="h-4 w-full bg-blue-50 rounded-full overflow-hidden border border-blue-100 p-0.5">
                                                        <motion.div
                                                            initial={{ width: 0 }}
                                                            whileInView={{ width: "50%" }}
                                                            viewport={{ once: true }}
                                                            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                                                            className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full shadow-lg shadow-blue-200"
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* CTA / Value */}
                                            <div className="lg:w-48 flex flex-col items-center justify-center border-t lg:border-t-0 lg:border-l border-gray-100 pt-6 lg:pt-0 lg:pl-8 text-center">
                                                <div className="text-2xl font-black text-gray-900 mb-1 leading-none italic">
                                                    - ₹{(service.market - service.ataur).toLocaleString()}
                                                </div>
                                                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">
                                                    Net Savings
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Closing Notice */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-20 p-8 rounded-3xl bg-blue-600 text-white text-center shadow-2xl shadow-blue-200 relative overflow-hidden"
                >
                    {/* Decorative Circle */}
                    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-48 h-48 bg-white/10 rounded-full blur-2xl" />

                    <h3 className="text-2xl font-bold mb-4 italic">"Growth is an investment, but it shouldn't be a gamble."</h3>
                    <p className="text-blue-100 max-w-xl mx-auto mb-8">
                        Starting with Ataur Agency means getting the high-end expertise your brand deserves at a price that actually allows you to scale.
                    </p>
                    <a
                        href="https://wa.me/917250570798"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-3 bg-white text-blue-600 px-8 py-4 rounded-full font-black hover:bg-blue-50 transition-colors shadow-xl"
                    >
                        <span>CLAIM 50% DISCOUNT NOW</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
