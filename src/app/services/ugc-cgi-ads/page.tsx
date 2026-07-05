"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import ServiceSchema from "@/components/ServiceSchema";
import Footer from "@/components/Footer";
import PaymentForm from "@/components/PaymentForm";
import PaymentSuccess from "@/components/PaymentSuccess";

const packages = [
    {
        name: "Basic UGC Ad Video",
        price: 5000,
        marketPrice: 10000,
        bestFor: "Startups and small businesses testing ads.",
        includes: [
            "1 UGC style ad video (30–45 sec)",
            "Script writing",
            "Basic editing",
            "Captions & subtitles"
        ]
    },
    {
        name: "UGC Ad Campaign Package",
        price: 15000,
        marketPrice: 30000,
        bestFor: "Brands running social media ads.",
        includes: [
            "3 UGC video ads",
            "Hook variations for A/B testing",
            "Professional editing",
            "Social media optimized format"
        ]
    },
    {
        name: "Premium UGC Video Marketing",
        price: 30000,
        marketPrice: 60000,
        bestFor: "E-commerce brands and product marketing.",
        includes: [
            "5 UGC ad videos",
            "Script strategy",
            "Multiple hooks",
            "Product storytelling",
            "Ad-ready format for Meta / TikTok"
        ]
    },
    {
        name: "CGI Product Advertisement",
        price: 40000,
        marketPrice: 80000,
        bestFor: "Tech brands, luxury products, and high-end marketing.",
        includes: [
            "3D product animation",
            "Cinematic product showcase",
            "Motion graphics",
            "High-end marketing visuals"
        ]
    },
    {
        name: "Advanced CGI Advertising Campaign",
        price: 75000,
        marketPrice: 150000,
        bestFor: "Large product launches and brand campaigns.",
        includes: [
            "Advanced CGI animation",
            "3D product visualization",
            "Cinematic storytelling",
            "Multiple video formats"
        ]
    }
];

export default function UGCDAdsPage() {
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
                    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-50" />

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">
                            UGC & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">CGI Ads</span>
                        </h1>
                        <h2 className="text-xl md:text-2xl font-bold text-gray-600 mb-8">
                            High-Converting Video Marketing for Modern Brands
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
                            Capture attention and drive conversions with authentic UGC videos and high-end CGI advertisements designed for social media and paid ads.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4 mb-12">
                            {[
                                "Meta Ads", "TikTok / Reels / Shorts", "Google Ads Video", "E-commerce Product Ads"
                            ].map((platform) => (
                                <span key={platform} className="px-6 py-2 bg-purple-50 text-purple-700 rounded-full font-bold border border-purple-100 shadow-sm">
                                    {platform}
                                </span>
                            ))}
                        </div>

                        <div className="bg-purple-600 text-white p-6 rounded-[2rem] inline-block shadow-2xl relative">
                            <div className="absolute -top-3 -right-3 w-8 h-8 bg-pink-500 rounded-full animate-ping opacity-75" />
                            <p className="font-medium flex items-center gap-3">
                                <span className="text-2xl">🎬</span>
                                Our videos combine storytelling, product demonstration, and strong hooks.
                            </p>
                        </div>
                    </motion.div>
                </section>

                {/* Video Marketing Process */}
                <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24">
                    <div className="bg-indigo-950 rounded-[3.5rem] p-12 md:p-20 text-white relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(139,92,246,0.1),transparent)]" />

                        <div className="relative z-10">
                            <div className="text-center mb-16">
                                <h3 className="text-3xl font-bold">Our Video Marketing Process</h3>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                                {[
                                    {
                                        title: "Creative Strategy",
                                        desc: "Audience analysis and high-converting ad scripts using Hook + Problem + Solution + CTA.",
                                        icon: "🧠"
                                    },
                                    {
                                        title: "Video Production",
                                        desc: "Creating UGC style (real people), AI Generated UGC, or cinematic CGI Product Ads.",
                                        icon: "📽️"
                                    },
                                    {
                                        title: "Editing & Optimization",
                                        desc: "Captions, product highlights, and multiple variations for data-driven testing.",
                                        icon: "✂️"
                                    },
                                    {
                                        title: "Ad Ready Delivery",
                                        desc: "Social media optimized videos ready for Reels, TikTok, Shorts, and Facebook.",
                                        icon: "🚀"
                                    }
                                ].map((step, i) => (
                                    <div key={step.title} className="flex flex-col items-center text-center group">
                                        <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:bg-purple-600/30 transition-all duration-300 backdrop-blur-sm">
                                            {step.icon}
                                        </div>
                                        <div className="text-purple-400 font-black text-sm mb-2">STEP 0{i + 1}</div>
                                        <h4 className="font-bold text-xl mb-4">{step.title}</h4>
                                        <p className="text-indigo-200/60 text-sm leading-relaxed">{step.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pricing Section */}
                <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black text-gray-900 mb-4">Video Marketing Packages</h2>
                        <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-600 px-6 py-2 rounded-full font-black text-lg animate-pulse">
                            <span className="text-2xl">🔥</span> 50% OFF LAUNCH OFFER
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {packages.map((pkg, idx) => (
                            <motion.div
                                key={pkg.name}
                                whileHover={{ y: -10 }}
                                className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all p-8 flex flex-col h-full group relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-8 text-6xl font-black text-gray-50 group-hover:text-purple-50 transition-colors -z-0 select-none">
                                    0{idx + 1}
                                </div>

                                <div className="relative z-10 flex-grow">
                                    <div className="mb-6">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2 leading-tight">{pkg.name}</h3>
                                        <p className="text-purple-600/70 text-xs font-black uppercase tracking-widest">{pkg.bestFor}</p>
                                    </div>

                                    <div className="space-y-4 mb-10">
                                        {pkg.includes.map(item => (
                                            <div key={item} className="flex items-start gap-3 text-sm text-gray-600">
                                                <span className="w-5 h-5 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-[10px] font-bold mt-0.5">✓</span>
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="relative z-10 mt-auto pt-8 border-t border-gray-50 bg-gray-50/50 -mx-8 -mb-8 p-8 rounded-b-[2.5rem]">
                                    <div className="text-center mb-6">
                                        <div className="text-gray-400 line-through text-xs font-bold">MARKET PRICE: ₹{pkg.marketPrice.toLocaleString()}</div>
                                        <div className="text-4xl font-black text-purple-600 mt-1">₹{pkg.price.toLocaleString()}</div>
                                    </div>
                                    <button
                                        onClick={() => handleOpenForm(pkg)}
                                        className="w-full py-4 bg-gray-900 text-white rounded-2xl font-bold hover:bg-purple-600 transition-all flex items-center justify-center gap-3 group/btn"
                                    >
                                        CLAIM 50% OFF
                                        <span className="group-hover/btn:translate-x-1 transition-transform">➜</span>
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Example Client Campaign */}
                <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24">
                    <div className="bg-gradient-to-r from-purple-600 to-indigo-700 rounded-[3rem] p-10 md:p-16 text-white shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-black mb-8">Client Campaign: Skincare Brand Launch</h2>
                                <div className="space-y-6">
                                    {[
                                        "5 UGC videos showing real user experiences",
                                        "1 CGI product animation showing ingredients",
                                        "Videos used in Meta Ads campaign"
                                    ].map((step, i) => (
                                        <div key={i} className="flex gap-4 items-center">
                                            <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center font-bold">{i + 1}</div>
                                            <p className="font-medium">{step}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl text-center">
                                <h3 className="text-gray-900 text-2xl font-black mb-8 uppercase tracking-widest">Growth Results</h3>
                                <div className="grid grid-cols-1 gap-4">
                                    {["Higher engagement", "Authentic product trust", "Better ad conversion"].map(r => (
                                        <div key={r} className="bg-purple-50 text-purple-700 px-6 py-4 rounded-2xl font-black flex items-center justify-center gap-3">
                                            <span className="text-xl">⭐</span> {r}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why It Works & Benefits */}
                <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="space-y-8">
                            <h3 className="text-3xl font-black text-gray-900">Why UGC & CGI Ads Work</h3>
                            <div className="grid grid-cols-1 gap-4">
                                {[
                                    "Authentic content builds trust", "Higher engagement on social media",
                                    "Better ad conversion rates", "Scalable video marketing strategy"
                                ].map(benefit => (
                                    <div key={benefit} className="flex items-center gap-4 bg-gray-50 p-5 rounded-2xl group hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-purple-100">
                                        <div className="w-10 h-10 bg-purple-600 text-white rounded-xl flex items-center justify-center font-bold">✓</div>
                                        <span className="font-bold text-gray-700">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-indigo-900 rounded-[3rem] p-10 md:p-12 text-white flex flex-col justify-center relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <h3 className="text-3xl font-black mb-6 relative z-10">Stop the Scroll. <br />Start the Sale.</h3>
                            <p className="text-indigo-200 mb-10 relative z-10 leading-relaxed font-medium">
                                We help brands break through the noise with video content that people actually want to watch and engage with.
                            </p>
                            <a href="/contact" className="bg-white text-indigo-950 px-10 py-4 rounded-2xl font-black hover:scale-105 transition-transform text-center relative z-10 shadow-xl">
                                START YOUR CAMPAIGN
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        
            <ServiceSchema serviceType="UGC & CGI Advertising Campaigns" description="Engaging User Generated Content (UGC) and cutting-edge CGI advertising campaigns designed to capture attention and drive conversions." url="https://atauragency.in/services/ugc-cgi-ads" />
        </div>);
}
