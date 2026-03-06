"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PaymentForm from "@/components/PaymentForm";
import PaymentSuccess from "@/components/PaymentSuccess";

const packages = {
    meta: [
        { name: "Meta Ads - 5 Days Campaign", price: 6000, marketPrice: 12000, duration: "5 Days", services: ["Ad Video Creation", "Audience Targeting", "Facebook + Instagram Placement", "Lead Generation Setup", "Click Optimization"] },
        { name: "Meta Ads - 10 Days Campaign", price: 10000, marketPrice: 20000, duration: "10 Days", services: ["2 Ad Creatives", "Advanced Targeting", "Lead Generation Form Setup", "Ad Optimization"] },
        { name: "Meta Ads - 30 Days Campaign", price: 20000, marketPrice: 40000, duration: "30 Days", services: ["4 Ad Creatives", "Retargeting Setup", "Advanced Audience Strategy", "Performance Optimization", "Weekly Report"] },
    ],
    google: [
        { name: "Google Ads - 5 Days PPC Campaign", price: 8000, marketPrice: 16000, duration: "5 Days", services: ["Search Ads Setup", "Keyword Research", "Ad Copywriting", "Click Optimization"] },
        { name: "Google Ads - 15 Days Campaign", price: 15000, marketPrice: 30000, duration: "15 Days", services: ["Keyword Strategy", "Landing Page Optimization Suggestion", "Search + Display Ads"] },
        { name: "Google Ads - 30 Days Campaign", price: 25000, marketPrice: 50000, duration: "30 Days", services: ["Advanced Keyword Strategy", "Search + Display + Remarketing", "Weekly Performance Report"] },
    ],
    linkedin: [
        { name: "LinkedIn Ads - 7 Days Campaign", price: 9000, marketPrice: 18000, duration: "7 Days", services: ["LinkedIn Sponsored Ads Setup", "B2B Audience Targeting", "Professional Ad Copy"] },
        { name: "LinkedIn Ads - 30 Days Campaign", price: 30000, marketPrice: 60000, duration: "30 Days", services: ["Advanced B2B Targeting", "Lead Form Ads", "Campaign Optimization", "Weekly Reports"] },
    ],
    special: [
        {
            name: "Example Campaign Package - 5 Days Performance PPC Campaign",
            price: 7500,
            marketPrice: 14000,
            duration: "5 Days",
            platform: "Meta Ads OR Google Ads OR LinkedIn Ads (Any one)",
            services: [
                "1 High-Conversion Ad Video (AI or Real Video)",
                "Professional Ad Editing",
                "Audience Research & Targeting",
                "Campaign Setup",
                "Click Optimization",
                "Lead / Registration Tracking",
                "Daily Monitoring"
            ]
        }
    ]
};

export default function PerformanceAdvertisingPage() {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [isSuccessOpen, setIsSuccessOpen] = useState(false);
    const [paymentData, setPaymentData] = useState<any>(null);
    const [selectedPkg, setSelectedPkg] = useState<any>(null);

    const handleOpenForm = (pkg: any) => {
        setSelectedPkg(pkg);
        setIsFormOpen(true);
    };

    const handleFormSubmit = (data: any) => {
        setPaymentData(data);
        setIsFormOpen(false);
        setIsSuccessOpen(true);
    };

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <PaymentForm
                isOpen={isFormOpen}
                onClose={() => setIsFormOpen(false)}
                serviceType={selectedPkg?.name || ""}
                amount={selectedPkg?.price || 0}
                onSubmit={handleFormSubmit}
            />

            <PaymentSuccess
                isOpen={isSuccessOpen}
                onClose={() => setIsSuccessOpen(false)}
                packageName={selectedPkg?.name || ""}
                amount={selectedPkg?.price || 0}
                userData={paymentData}
            />

            <main className="pt-32 pb-20 overflow-hidden">
                {/* Hero Section */}
                <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                            Performance Advertising <br />
                            <span className="text-blue-600">Pricing</span>
                            <span className="text-xl inline-block ml-4 text-red-600 font-bold bg-red-50 px-4 py-1 rounded-full border border-red-100 animate-pulse">
                                50% OFF Launch Offer
                            </span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
                            Scale your business with high-conversion performance campaigns across the world&apos;s most powerful platforms. Our campaigns are focused on leads, registrations, and sales using data-driven targeting and optimized ads.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="flex flex-wrap justify-center gap-4 mb-12"
                    >
                        {["Meta Ads", "Google Ads", "LinkedIn Ads", "WhatsApp Lead Campaigns"].map((platform) => (
                            <span key={platform} className="px-6 py-2 bg-blue-50 text-blue-700 rounded-full font-bold border border-blue-100 shadow-sm">
                                {platform}
                            </span>
                        ))}
                    </motion.div>
                </section>

                {/* Info Grid */}
                <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-gray-50 p-8 md:p-12 rounded-[2.5rem] border border-gray-100">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">What We Do</h2>
                            <p className="text-gray-600 text-lg mb-8">
                                Our team creates AI-powered or real video ads, edits them professionally, and runs optimized campaigns to drive clicks, leads, and registrations.
                            </p>
                            <div className="space-y-4">
                                {[
                                    { title: "Meta Ads", sub: "Facebook & Instagram" },
                                    { title: "Google Ads", sub: "Search & Display" },
                                    { title: "LinkedIn Ads", sub: "B2B Focus" },
                                    { title: "WhatsApp", sub: "Lead Campaigns" }
                                ].map((item) => (
                                    <div key={item.title} className="flex items-center space-x-4 bg-white p-4 rounded-2xl shadow-sm">
                                        <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center font-bold">✓</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">{item.title}</h4>
                                            <p className="text-gray-500 text-sm">{item.sub}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
                            <h2 className="text-2xl font-bold mb-8 flex items-center">
                                <span className="w-10 h-10 bg-indigo-600 rounded-xl mr-4 flex items-center justify-center text-white">★</span>
                                Our Process
                            </h2>
                            <div className="space-y-8 relative">
                                <div className="absolute left-[19px] top-10 bottom-10 w-[2px] bg-gradient-to-b from-blue-600 to-indigo-600 opacity-20" />
                                {[
                                    { title: "Requirement Analysis", desc: "Target audience & Goal identification" },
                                    { title: "Ad Creative Production", desc: "AI/Real video with professional editing" },
                                    { title: "Campaign Setup", desc: "Audience targeting & Copywriting" },
                                    { title: "Ad Launch", desc: "Optimization & Tracking setup" },
                                    { title: "Performance Monitoring", desc: "Daily review & Data-driven optimization" }
                                ].map((step, i) => (
                                    <div key={step.title} className="flex space-x-6 relative z-10">
                                        <div className="w-10 h-10 bg-blue-600 border-4 border-white rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                                            {i + 1}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 mb-1">{step.title}</h4>
                                            <p className="text-gray-500 text-sm">{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pricing Sections */}
                <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-24">

                    {/* 5 Days Special Package */}
                    <div className="text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-12">Recommended Launch Package</h2>
                        <div className="max-w-4xl mx-auto">
                            {packages.special.map((pkg) => (
                                <div key={pkg.name} className="relative overflow-hidden group bg-gradient-to-br from-indigo-600 to-blue-700 text-white p-8 md:p-12 rounded-[3rem] shadow-2xl transition-transform hover:-translate-y-2 duration-300">
                                    <div className="absolute top-0 right-0 p-8">
                                        <span className="bg-white/20 backdrop-blur-md px-6 py-2 rounded-full font-bold text-sm tracking-widest uppercase">Special</span>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-left">
                                        <div>
                                            <h3 className="text-2xl md:text-3xl font-bold mb-4">{pkg.name}</h3>
                                            <p className="text-blue-100 mb-6 font-medium">{pkg.platform}</p>
                                            <div className="flex items-baseline space-x-4 mb-8">
                                                <span className="text-5xl font-bold">₹{pkg.price}</span>
                                                <span className="text-xl line-through opacity-60">₹{pkg.marketPrice}</span>
                                                <span className="bg-red-500 text-white px-3 py-1 rounded-lg font-bold">50% OFF</span>
                                            </div>
                                            <button
                                                onClick={() => handleOpenForm(pkg)}
                                                className="w-full md:w-auto px-10 py-5 bg-white text-blue-600 rounded-2xl font-black text-lg hover:scale-105 transition-transform flex items-center justify-center shadow-lg"
                                            >
                                                CLAIM 50% OFF
                                                <span className="ml-3 text-2xl">🔥</span>
                                            </button>
                                        </div>
                                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl">
                                            <h4 className="font-bold text-lg mb-4 text-white uppercase tracking-wider">Service Includes:</h4>
                                            <ul className="space-y-3">
                                                {pkg.services.map((s) => (
                                                    <li key={s} className="flex items-start">
                                                        <span className="text-green-400 mr-2 text-xl">✓</span>
                                                        <span className="text-blue-50 leading-tight">{s}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Platform Packages */}
                    {[
                        { id: "meta", title: "Meta Ads Campaign Packages", sub: "Facebook & Instagram", data: packages.meta, color: "from-blue-50 to-indigo-50", accent: "blue" },
                        { id: "google", title: "Google Ads Campaign Packages", sub: "Search & Display", data: packages.google, color: "from-gray-50 to-blue-50", accent: "gray" },
                        { id: "linkedin", title: "LinkedIn Ads Campaign Packages", sub: "B2B Specialists", data: packages.linkedin, color: "from-indigo-50 to-blue-50", accent: "indigo" }
                    ].map((section) => (
                        <div key={section.id} id={section.id} className="pt-20">
                            <div className="text-center mb-16">
                                <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4 block">{section.sub}</span>
                                <h2 className="text-4xl font-bold text-gray-900">{section.title}</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {section.data.map((pkg, idx) => (
                                    <motion.div
                                        key={pkg.name}
                                        whileHover={{ y: -10 }}
                                        transition={{ duration: 0.3 }}
                                        className="bg-white rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all p-8 flex flex-col h-full"
                                    >
                                        <div className="flex justify-between items-start mb-6">
                                            <span className="px-4 py-1 bg-blue-50 text-blue-600 rounded-full font-bold text-xs">
                                                {pkg.duration}
                                            </span>
                                            <span className="text-xs font-black text-red-500 animate-pulse uppercase">Offer</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-6">{pkg.name}</h3>
                                        <div className="flex items-baseline space-x-3 mb-8">
                                            <span className="text-3xl font-bold text-blue-600">₹{pkg.price}</span>
                                            <span className="text-lg line-through text-gray-400">₹{pkg.marketPrice}</span>
                                        </div>
                                        <div className="flex-grow">
                                            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">What&apos;s Included</h4>
                                            <ul className="space-y-4 mb-8">
                                                {pkg.services.map((s) => (
                                                    <li key={s} className="flex items-start text-sm text-gray-600 leading-relaxed">
                                                        <span className="text-blue-500 mr-2">✦</span>
                                                        {s}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <button
                                            onClick={() => handleOpenForm(pkg)}
                                            className="w-full py-4 bg-gray-900 text-white rounded-2xl font-bold hover:bg-blue-600 transition-colors flex items-center justify-center group"
                                        >
                                            CLAIM 50% OFF
                                            <span className="ml-2 transform group-hover:scale-125 transition-transform">🔥</span>
                                        </button>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </section>

                {/* Footer Notes */}
                <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mt-32 py-20 bg-gray-50 rounded-[3rem] border border-gray-100">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-2xl font-bold mb-6">Important Notes</h3>
                            <ul className="space-y-4">
                                {[
                                    "Ad budget is not included (Client pays directly to platform).",
                                    "We manage creative, setup, optimization, and monitoring.",
                                    "Campaign platform will be selected based on client requirement.",
                                    "Goal: Maximum Clicks, Leads, and Registrations."
                                ].map((note) => (
                                    <li key={note} className="flex items-start">
                                        <span className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold mr-3 mt-1">!</span>
                                        <span className="text-gray-600 leading-relaxed font-medium">{note}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex flex-col justify-center">
                            <div className="bg-blue-600 p-8 rounded-3xl text-white shadow-2xl">
                                <h3 className="text-2xl font-bold mb-4">Start Scaling Today</h3>
                                <p className="mb-8 opacity-90 leading-relaxed">
                                    Have specific requirements? Our team is ready to build a customized high-performance strategy for your business.
                                </p>
                                <div className="flex gap-4">
                                    <a href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-xl font-bold hover:scale-105 transition-transform">
                                        Contact Us
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
