"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PaymentForm from "@/components/PaymentForm";
import PaymentSuccess from "@/components/PaymentSuccess";

const packages = [
    {
        name: "Website Security Audit",
        price: 10000,
        marketPrice: 20000,
        bestFor: "Small business websites and startups.",
        includes: [
            "Website vulnerability scan",
            "Security configuration analysis",
            "Malware detection",
            "Basic security recommendations",
            "Security report"
        ]
    },
    {
        name: "Website Penetration Testing",
        price: 30000,
        marketPrice: 60000,
        bestFor: "Businesses that want to test their website security against hackers.",
        includes: [
            "Manual penetration testing",
            "Vulnerability detection",
            "OWASP security testing",
            "Detailed vulnerability report",
            "Fix recommendations"
        ]
    },
    {
        name: "Advanced Security Audit + Protection",
        price: 50000,
        marketPrice: 100000,
        bestFor: "Businesses handling customer data or online payments.",
        includes: [
            "Web application security testing",
            "Database security analysis",
            "Authentication security review",
            "Server security audit",
            "Security improvement implementation"
        ]
    },
    {
        name: "Full Cyber Security Protection Package",
        price: 100000,
        marketPrice: 200000,
        bestFor: "Companies and startups needing complete digital protection.",
        includes: [
            "Full penetration testing",
            "Website + server security audit",
            "API security testing",
            "Security hardening",
            "Threat monitoring setup",
            "Security improvement implementation"
        ]
    },
    {
        name: "Social Media Security Protection",
        price: 5000,
        marketPrice: 10000,
        bestFor: "Influencers, brands, and companies.",
        includes: [
            "Account security audit",
            "2FA security setup",
            "Phishing protection",
            "Recovery & protection setup",
            "Security monitoring guidance"
        ]
    }
];

export default function CyberSecurityPage() {
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
        <div className="min-h-screen bg-[#050505] text-white relative">
            <Navbar />

            {/* Background Image Container */}
            <div className="fixed inset-0 z-0">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 scale-105 transition-transform duration-[10000ms] ease-in-out"
                    style={{ backgroundImage: "url('/img/CS img.jpg')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90" />
                <div className="absolute inset-0 backdrop-blur-[1px]" />
            </div>

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

            <main className="pt-32 pb-20 relative z-10">
                {/* Hero Section */}
                <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20 text-center">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-red-900/10 blur-[120px] rounded-full -z-10" />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter text-white drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]">
                            Cyber <span className="text-red-600">Security</span>
                        </h1>
                        <h2 className="text-xl md:text-2xl font-bold text-red-100/90 mb-8 max-w-3xl mx-auto drop-shadow-lg">
                            Protect Your Digital Assets with Advanced Security Testing
                        </h2>
                        <p className="text-lg text-gray-200 max-w-4xl mx-auto mb-12 leading-relaxed font-medium drop-shadow-md">
                            Secure your business against hackers, data leaks, and cyber attacks using advanced penetration testing, security audits, and digital protection systems.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4 mb-16">
                            {[
                                "Websites", "Web applications", "Servers & networks",
                                "Social media accounts", "Business data"
                            ].map((item) => (
                                <span key={item} className="px-5 py-2 bg-red-950/30 text-red-400 rounded-full font-bold border border-red-900/30 shadow-2xl backdrop-blur-sm">
                                    {item}
                                </span>
                            ))}
                        </div>

                        <div className="inline-grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8 bg-white/5 p-6 rounded-[2.5rem] border border-white/10 backdrop-blur-xl">
                            {["VAPT", "Audits", "Social Protection", "Vulnerability", "Threat Detection"].map(t => (
                                <div key={t} className="text-xs font-black uppercase tracking-widest text-gray-400">{t}</div>
                            ))}
                        </div>
                    </motion.div>
                </section>

                {/* Security Process */}
                <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-32">
                    <div className="text-center mb-20">
                        <h3 className="text-3xl font-bold text-white drop-shadow-md">Our Security Process</h3>
                        <div className="h-1 w-20 bg-red-600 mx-auto mt-4 rounded-full shadow-[0_0_10px_rgba(220,38,38,0.5)]" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            {
                                title: "Security Assessment",
                                desc: "Analyzing your digital infrastructure to identify potential vulnerabilities."
                            },
                            {
                                title: "Penetration Testing",
                                desc: "Experts simulate real-world hacking to detect system weaknesses."
                            },
                            {
                                title: "Vulnerability Report",
                                desc: "Detailed report explaining flaws, risk levels, and fix recommendations."
                            },
                            {
                                title: "Security Hardening",
                                desc: "Implementing measures to protect against future attacks."
                            }
                        ].map((step, i) => (
                            <div key={step.title} className="bg-black/40 backdrop-blur-md p-10 rounded-[2.5rem] border border-white/10 hover:border-red-900/50 hover:bg-red-950/20 transition-all group">
                                <div className="text-4xl font-black text-red-600/40 mb-6 group-hover:text-red-600 transition-colors">0{i + 1}</div>
                                <h4 className="font-bold text-xl mb-4 text-white">{step.title}</h4>
                                <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-100 transition-colors">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Pricing Section */}
                <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-32">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Security Service Packages</h2>
                        <div className="inline-flex items-center gap-3 bg-red-600 text-white px-8 py-2 rounded-full font-black text-xl animate-bounce shadow-[0_0_30px_rgba(220,38,38,0.5)]">
                            <span>🔥</span> 50% OFF LAUNCH OFFER <span>🔥</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {packages.map((pkg) => (
                            <motion.div
                                key={pkg.name}
                                whileHover={{ y: -10 }}
                                className="bg-[#111] rounded-[3rem] border border-white/5 p-8 flex flex-col h-full hover:shadow-[0_20px_50px_rgba(220,38,38,0.1)] transition-all relative overflow-hidden group"
                            >
                                <div className="absolute top-0 left-0 w-full h-1 bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity" />

                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold mb-2 group-hover:text-red-500 transition-colors">{pkg.name}</h3>
                                    <p className="text-red-400/60 text-xs font-bold uppercase tracking-widest italic">{pkg.bestFor}</p>
                                </div>

                                <div className="flex-grow space-y-4 mb-10">
                                    {pkg.includes.map(item => (
                                        <div key={item} className="flex items-start gap-3 text-sm text-gray-400 group-hover:text-gray-200 transition-colors">
                                            <span className="text-red-600 mt-1">▶</span>
                                            {item}
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-auto pt-8 border-t border-white/5 text-center">
                                    <div className="mb-6">
                                        <div className="text-gray-600 line-through text-xs font-bold">MARKET: ₹{pkg.marketPrice.toLocaleString()}</div>
                                        <div className="text-4xl font-black text-white mt-1">₹{pkg.price.toLocaleString()}</div>
                                    </div>
                                    <button
                                        onClick={() => handleOpenForm(pkg)}
                                        className="w-full py-5 bg-emerald-600 text-white rounded-2xl font-black hover:bg-emerald-700 transition-all flex items-center justify-center gap-3 active:scale-95 shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)]"
                                    >
                                        CLAIM OFFER <span>🛡️</span>
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Example Scenario */}
                <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-32">
                    <div className="bg-gradient-to-br from-red-600 to-red-900 rounded-[4rem] p-12 md:p-20 text-white relative overflow-hidden shadow-2xl">
                        <div className="absolute right-0 bottom-0 opacity-10 translate-x-1/4 translate-y-1/4">
                            <svg width="400" height="400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-4xl font-black mb-10">Case Study: E-commerce Security</h2>
                                <div className="space-y-8">
                                    {[
                                        { t: "Audit", d: "Security audit identifies vulnerabilities" },
                                        { t: "Testing", d: "Penetration testing simulates hacker attacks" },
                                        { t: "Hardening", d: "Security fixes implemented" },
                                        { t: "Protection", d: "Website protected against threats" }
                                    ].map((step, i) => (
                                        <div key={i} className="flex gap-6 items-start">
                                            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center font-black flex-shrink-0 backdrop-blur-md border border-white/20">{i + 1}</div>
                                            <div>
                                                <h4 className="font-bold text-lg mb-1">{step.t}</h4>
                                                <p className="text-white/70 font-medium">{step.d}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-black/20 backdrop-blur-xl p-10 rounded-[3rem] border border-white/10">
                                <h3 className="text-2xl font-black mb-8 text-center uppercase tracking-tighter">Mission Results</h3>
                                <div className="space-y-4">
                                    {["Stronger security", "Protected customer data", "Reduced hacking risk"].map(r => (
                                        <div key={r} className="bg-white/10 px-8 py-5 rounded-3xl font-bold flex items-center justify-between group">
                                            {r} <span className="text-red-400 group-hover:scale-125 transition-transform">✓</span>
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
                        <div className="bg-white/5 p-12 rounded-[3.5rem] border border-white/5">
                            <h3 className="text-2xl font-black mb-8 text-red-500 uppercase">Why Security is Mandatory</h3>
                            <div className="space-y-4">
                                {[
                                    "Prevent data breaches", "Protect customer info",
                                    "Secure business reputation", "Avoid financial loss",
                                    "Build trust with customers"
                                ].map(item => (
                                    <div key={item} className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl">
                                        <span className="w-2 h-2 bg-red-600 rounded-full" />
                                        <span className="font-bold text-gray-300">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-red-600/10 p-12 rounded-[3.5rem] border border-red-600/20 flex flex-col justify-center text-center">
                            <h3 className="text-4xl font-black mb-6">Stay Secure, <br /><span className="text-red-500">Stay Ahead.</span></h3>
                            <p className="text-gray-400 font-medium leading-relaxed mb-10">
                                Hackers never sleep. Our team works round the clock to ensure your digital fortress remains unbreachable.
                            </p>
                            <a href="/contact" className="bg-white text-black px-12 py-5 rounded-full font-black hover:scale-105 transition-transform inline-block">
                                GET FREE SECURITY ADVICE
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
