"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

const packages = [
    {
        name: "Admin Panel Development",
        price: 150000,
        marketPrice: 300000,
        bestFor: "Businesses needing internal management dashboards.",
        includes: [
            "Custom admin dashboard",
            "User management system",
            "Data analytics panel",
            "Role management system"
        ]
    },
    {
        name: "RBAC Security System",
        price: 100000,
        marketPrice: 200000,
        bestFor: "Applications requiring secure role-based access control.",
        includes: [
            "Role hierarchy system",
            "Permission management",
            "Secure authentication",
            "Audit logs"
        ]
    },
    {
        name: "Multi-Tenant SaaS Platform",
        price: 500000,
        marketPrice: 1000000,
        bestFor: "Startups building SaaS platforms with multiple teams.",
        includes: [
            "Multi-tenant architecture",
            "Organization management",
            "Team collaboration system",
            "Billing and subscription support",
            "Admin control panel"
        ]
    },
    {
        name: "Enterprise Business Management System",
        price: 1000000,
        marketPrice: 2000000,
        bestFor: "Large companies managing multiple departments.",
        includes: [
            "Custom CRM / ERP features",
            "Department management modules",
            "Reporting & analytics dashboards",
            "Workflow automation"
        ]
    },
    {
        name: "Full Enterprise Platform Development",
        price: 2500000,
        marketPrice: 5000000,
        bestFor: "Companies launching large-scale SaaS products.",
        includes: [
            "Multi-tenant architecture",
            "RBAC security system",
            "Admin panels & dashboards",
            "API integrations",
            "Analytics & reporting",
            "High-scale cloud deployment"
        ]
    }
];

export default function EnterpriseSystemsPage() {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const [selectedPkg, setSelectedPkg] = useState<any>(null);

    const handleOpenContact = (pkg: any) => {
        setSelectedPkg(pkg);
        setIsContactModalOpen(true);
    };

    const phoneNumber = "7250570798";
    const whatsappMessage = selectedPkg
        ? `Hi, I'm interested in the "${selectedPkg.name}" for Enterprise Systems. Please provide more details.`
        : "Hi, I'm interested in your Enterprise Systems services.";

    return (
        <div className="min-h-screen bg-[#f8fafc]">
            <Navbar />

            <main className="pt-32 pb-20">
                {/* Hero Section */}
                <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24 text-center">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-100/50 blur-[120px] rounded-full -z-10" />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="px-4 py-1.5 bg-blue-600 text-white text-xs font-black uppercase tracking-[0.2em] rounded-full mb-6 inline-block">Enterprise Solutions</span>
                        <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tight">
                            Enterprise <span className="text-blue-600">Systems</span>
                        </h1>
                        <h2 className="text-xl md:text-2xl font-bold text-slate-600 mb-8 max-w-3xl mx-auto">
                            Scalable Platforms for Modern Businesses
                        </h2>
                        <p className="text-lg text-slate-600 max-w-4xl mx-auto mb-12 leading-relaxed">
                            Build powerful enterprise-grade systems designed to manage complex workflows, teams, and large-scale business operations.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4 mb-16">
                            {[
                                "Multi-Tenant SaaS", "RBAC Security", "Enterprise Admin Panels",
                                "Business Management", "CRM / ERP Platforms"
                            ].map((item) => (
                                <span key={item} className="px-6 py-2 bg-white text-blue-600 rounded-xl font-bold border border-blue-100 shadow-sm">
                                    {item}
                                </span>
                            ))}
                        </div>

                        <div className="bg-slate-900 text-white p-8 rounded-[3rem] inline-flex flex-col md:flex-row items-center gap-8 shadow-2xl">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="w-12 h-12 rounded-full border-4 border-slate-900 bg-blue-500 overflow-hidden flex items-center justify-center text-xs font-bold">
                                        MERN
                                    </div>
                                ))}
                            </div>
                            <div className="text-left">
                                <p className="font-black text-xl mb-1">Built with Modern Tech</p>
                                <p className="text-slate-400 text-sm">MERN Stack • Next.js • Cloud Architecture • Secure RBAC</p>
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* Development Process */}
                <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-32">
                    <div className="bg-white rounded-[4rem] p-12 md:p-20 shadow-xl border border-blue-50 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-20 opacity-5">
                            <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                        </div>

                        <div className="text-center mb-20">
                            <h3 className="text-3xl font-black text-slate-900">Our Enterprise Development Process</h3>
                            <div className="h-1.5 w-24 bg-blue-600 mx-auto mt-4 rounded-full" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
                            {[
                                {
                                    title: "Requirement Analysis",
                                    desc: "Analyzing workflows, user roles, and system architecture for the best structure.",
                                    icon: "📊"
                                },
                                {
                                    title: "Architecture Design",
                                    desc: "Scalable multi-tenant designs, RBAC structures, and high-perf backend APIs.",
                                    icon: "🧱"
                                },
                                {
                                    title: "Platform Development",
                                    desc: "Secure auth, admin dashboards, and custom data management modules.",
                                    icon: "💻"
                                },
                                {
                                    title: "Testing & Deployment",
                                    desc: "Rigorous security and performance testing before cloud deployment.",
                                    icon: "☁️"
                                }
                            ].map((step, i) => (
                                <div key={step.title} className="group">
                                    <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                        {step.icon}
                                    </div>
                                    <h4 className="font-bold text-xl mb-3 text-slate-900">{step.title}</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Pricing Section */}
                <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-32">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black text-slate-900 mb-4">Enterprise System Packages</h2>
                        <div className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-2.5 rounded-full font-black text-xl animate-bounce shadow-xl">
                            <span>🔥</span> 50% OFF LAUNCH OFFER <span>🔥</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {packages.map((pkg, idx) => (
                            <motion.div
                                key={pkg.name}
                                whileHover={{ y: -10 }}
                                className="bg-white rounded-[3rem] border border-slate-100 p-10 flex flex-col h-full hover:shadow-2xl transition-all group relative overflow-hidden"
                            >
                                <div className="absolute top-0 left-0 w-full h-2 bg-blue-600 opacity-0 group-hover:opacity-100 transition-all" />

                                <div className="mb-8">
                                    <h3 className="text-2xl font-black text-slate-950 mb-3 leading-tight">{pkg.name}</h3>
                                    <p className="text-blue-600 text-xs font-black uppercase tracking-widest">{pkg.bestFor}</p>
                                </div>

                                <div className="flex-grow space-y-4 mb-10">
                                    {pkg.includes.map(item => (
                                        <div key={item} className="flex items-start gap-4 text-sm text-slate-600">
                                            <span className="text-blue-600 font-bold">●</span>
                                            {item}
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-auto pt-8 border-t border-slate-50">
                                    <div className="mb-8 text-center">
                                        <div className="text-slate-300 line-through text-xs font-bold mb-1">MARKET PRICE: ₹{pkg.marketPrice.toLocaleString()}</div>
                                        <div className="text-4xl font-black text-slate-900">₹{pkg.price.toLocaleString()}</div>
                                    </div>
                                    <button
                                        onClick={() => handleOpenContact(pkg)}
                                        className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black hover:bg-blue-700 transition-all flex items-center justify-center gap-3 active:scale-95 shadow-lg"
                                    >
                                        CLAIM OFFER <span>💼</span>
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Example Scenario */}
                <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-32">
                    <div className="bg-slate-900 rounded-[4rem] p-12 md:p-20 text-white relative overflow-hidden shadow-2xl">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent opacity-50" />

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
                            <div>
                                <h2 className="text-4xl font-black mb-10">Case Study: Logistics Operations</h2>
                                <p className="text-slate-400 mb-10 text-lg">A logistics company manages operations digitally with a centralized system.</p>
                                <div className="space-y-6">
                                    {[
                                        "Multi-branch management",
                                        "Employee access roles (RBAC)",
                                        "Customer order tracking",
                                        "Admin dashboards"
                                    ].map((feature, i) => (
                                        <div key={i} className="flex gap-4 items-center bg-white/5 p-5 rounded-2xl border border-white/5">
                                            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center font-black">{i + 1}</div>
                                            <p className="font-bold">{feature}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-white p-12 rounded-[3.5rem] shadow-2xl text-slate-900">
                                <h3 className="text-2xl font-black mb-10 text-center uppercase tracking-tighter">Business Impact</h3>
                                <div className="space-y-4">
                                    {[
                                        { t: "Automated operations", v: "100%" },
                                        { t: "Better team management", v: "High" },
                                        { t: "Scalable platform", v: "Ready" }
                                    ].map(r => (
                                        <div key={r.t} className="bg-slate-50 px-8 py-6 rounded-3xl font-black flex items-center justify-between group hover:bg-blue-600 hover:text-white transition-all">
                                            {r.t} <span className="text-blue-600 group-hover:text-white">{r.v}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Need & Benefits */}
                <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        <div className="bg-white p-12 rounded-[3.5rem] border border-slate-100 shadow-xl">
                            <h3 className="text-2xl font-black mb-10 text-blue-600 uppercase tracking-tight font-serif">Why Enterprise Systems Are Important</h3>
                            <div className="space-y-4">
                                {[
                                    "Manage complex business operations",
                                    "Secure data with role-based access",
                                    "Automate workflows efficiently",
                                    "Scale business without limits",
                                    "Centralized business control"
                                ].map(item => (
                                    <div key={item} className="flex items-center gap-5 bg-slate-50 p-5 rounded-2xl">
                                        <span className="w-3 h-3 bg-blue-600 rounded-full" />
                                        <span className="font-bold text-slate-700">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-blue-600 p-12 rounded-[3.5rem] text-white flex flex-col justify-center shadow-2xl relative overflow-hidden group">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.2),transparent)]" />
                            <h3 className="text-4xl font-black mb-8 relative z-10">Scalability. Security. <br />Success.</h3>
                            <p className="text-blue-50 mb-12 relative z-10 leading-relaxed font-medium text-lg">
                                Stop struggling with manual processes. Build a system that grows with your business and protects your data.
                            </p>
                            <button
                                onClick={() => handleOpenContact({ name: "General Inquiry" })}
                                className="bg-white text-blue-600 px-12 py-5 rounded-2xl font-black hover:scale-105 transition-transform relative z-10 shadow-xl"
                            >
                                GET FREE CONSULTATION
                            </button>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />

            {/* Contact Modal */}
            <AnimatePresence>
                {isContactModalOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsContactModalOpen(false)}
                            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="bg-white rounded-[3rem] p-10 md:p-12 max-w-md w-full relative z-110 shadow-3xl text-center"
                        >
                            <button
                                onClick={() => setIsContactModalOpen(false)}
                                className="absolute top-6 right-8 text-slate-400 hover:text-slate-900 text-2xl font-bold"
                            >✕</button>

                            <div className="w-20 h-20 bg-blue-100 rounded-3xl flex items-center justify-center text-4xl mb-8 mx-auto">💼</div>

                            <h3 className="text-2xl font-black text-slate-900 mb-4">Claim Your Offer</h3>
                            <p className="text-slate-500 font-medium mb-10">
                                Contact us directly to claim your 50% discount on <span className="text-blue-600 font-bold">"{selectedPkg?.name}"</span>.
                            </p>

                            <div className="grid grid-cols-1 gap-4">
                                <a
                                    href={`tel:${phoneNumber}`}
                                    className="flex items-center justify-center gap-4 py-6 bg-slate-900 text-white rounded-2xl font-black hover:bg-slate-800 transition-all shadow-xl"
                                >
                                    <span>📞</span> Direct Call
                                </a>
                                <a
                                    href={`https://wa.me/91${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-4 py-6 bg-emerald-500 text-white rounded-2xl font-black hover:bg-emerald-600 transition-all shadow-xl"
                                >
                                    <span>💬</span> WhatsApp Chat
                                </a>
                            </div>

                            <p className="mt-8 text-xs font-bold text-slate-400 uppercase tracking-widest leading-loose">
                                Availability: 24/7 Priority Support
                            </p>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
