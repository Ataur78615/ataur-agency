"use client";
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import ServiceSchema from "@/components/ServiceSchema";
import Footer from "@/components/Footer";
import PaymentForm from "@/components/PaymentForm";
import PaymentSuccess from "@/components/PaymentSuccess";
import FAQSection from "@/components/FAQSection";

const webDesignFaqs = [
  {
    question: "Why do you use Next.js and React for web development?",
    answer: "Next.js provides server-side rendering (SSR) and static site generation (SSG). This means your website will load incredibly fast, rank higher on Google (due to better Core Web Vitals), and offer a seamless app-like experience."
  },
  {
    question: "Do you use pre-made templates or custom code?",
    answer: "We design and develop 100% custom websites from scratch. We don't rely on bloated WordPress templates. Every line of code is tailored to your brand's unique UI/UX requirements."
  },
  {
    question: "How long does it take to build a custom business website?",
    answer: "A standard landing page or startup website usually takes 1-2 weeks. For more complex, multi-page corporate websites or custom web applications, the timeframe is typically 3-5 weeks."
  },
  {
    question: "Will my website be mobile-friendly and responsive?",
    answer: "Yes. We use a mobile-first approach using Tailwind CSS. Your website will adapt flawlessly across all screen sizes, from large desktop monitors to smartphones and tablets."
  },
  {
    question: "Do you provide SEO setup with the web design package?",
    answer: "Absolutely. Every website we build comes with foundational technical SEO, including optimized meta tags, JSON-LD structured data, fast image loading, and semantic HTML architecture."
  },
  {
    question: "Can I update the website content myself after launch?",
    answer: "Yes, we can integrate a headless Content Management System (CMS) like Sanity or Strapi, allowing you to easily update text, add blog posts, or change images without touching any code."
  }
];

const packages = [
    {
        name: "Landing Page / Startup Website",
        price: 10000,
        marketPrice: 20000,
        bestFor: "Startups, product launches, personal brands",
        includes: ["Responsive design", "1-3 pages", "Contact form", "Basic SEO setup"]
    },
    {
        name: "Business Website (Next.js / React)",
        price: 30000,
        marketPrice: 60000,
        bestFor: "Companies, service providers, agencies",
        includes: ["5-10 pages website", "Responsive design", "SEO friendly structure", "Admin content update support"]
    },
    {
        name: "MERN Stack Custom Website",
        price: 60000,
        marketPrice: 120000,
        bestFor: "Startups needing dynamic platforms",
        includes: ["React frontend", "Node.js backend", "MongoDB database", "Authentication system", "Admin dashboard"]
    },
    {
        name: "E-commerce Website",
        price: 75000,
        marketPrice: 150000,
        bestFor: "Online stores & retail businesses",
        includes: ["Product catalog", "Payment gateway integration", "Shopping cart", "Order management system", "Admin dashboard"]
    },
    {
        name: "Advanced E-commerce Platform",
        price: 150000,
        marketPrice: 300000,
        bestFor: "Large online stores or brands",
        includes: ["Advanced product filters", "Inventory system", "Coupon & discount system", "Customer dashboard", "SEO optimized architecture"]
    },
    {
        name: "CRM / Enterprise Web Application",
        price: 200000,
        marketPrice: 400000,
        bestFor: "Companies needing internal management systems",
        includes: ["Role-based user system", "Admin & sub-admin panels", "Data dashboard & analytics", "API integrations", "Secure database architecture"]
    }
];

const addOns = [
    { name: "SEO Optimization", price: 5000, marketPrice: 10000 },
    { name: "AI Chatbot Integration", price: 10000, marketPrice: 20000 },
    { name: "WhatsApp API Integration", price: 7500, marketPrice: 15000 },
    { name: "Maintenance & Support", price: 5000, marketPrice: 10000, unit: "/month" }
];

export default function WebDesignDevelopmentPage() {
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
                <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                            Web Design & <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Development</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
                            Responsive, high-performance websites built with modern technologies. From startup websites to enterprise CRM systems, we develop scalable and secure platforms.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4 mb-12">
                            {["MERN Stack", "Next.js", "E-commerce Development", "Custom CRM & Web Applications"].map((tech) => (
                                <span key={tech} className="px-6 py-2 bg-emerald-50 text-emerald-700 rounded-full font-bold border border-emerald-100 shadow-sm">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="bg-emerald-600 text-white p-6 rounded-3xl inline-block shadow-xl">
                            <p className="font-bold flex items-center justify-center">
                                <span className="mr-2 text-2xl">⚡</span>
                                Our focus is speed, security, SEO optimization, and scalable architecture.
                            </p>
                        </div>
                    </motion.div>
                </section>

                {/* Development Process */}
                <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24">
                    <div className="bg-gray-50 p-8 md:p-16 rounded-[3rem] border border-gray-100">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-gray-900">Our Development Process</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative">
                            {[
                                { title: "Requirement Analysis", steps: ["Business goal understanding", "Feature planning", "Technology stack selection"] },
                                { title: "UI/UX Design", steps: ["Modern responsive design", "Mobile-first interface", "Conversion-focused layout"] },
                                { title: "Development", steps: ["Frontend (React / Next.js)", "Backend (Node.js / Express)", "Database (MongoDB / MySQL)"] },
                                { title: "Testing", steps: ["Performance testing", "Security checks", "Mobile responsiveness"] },
                                { title: "Deployment", steps: ["Domain + hosting setup", "SSL security", "SEO basic setup"] }
                            ].map((step, i) => (
                                <div key={step.title} className="relative">
                                    <div className="flex flex-col items-center">
                                        <div className="w-12 h-12 bg-emerald-600 text-white rounded-2xl flex items-center justify-center font-bold text-xl mb-6 shadow-lg relative z-10">
                                            {i + 1}
                                        </div>
                                        <h4 className="font-bold text-gray-900 mb-4 text-center h-12 flex items-center">{step.title}</h4>
                                        <ul className="space-y-2 text-sm text-gray-500 text-center">
                                            {step.steps.map(s => <li key={s}>{s}</li>)}
                                        </ul>
                                    </div>
                                    {i < 4 && (
                                        <div className="hidden lg:block absolute top-6 left-full w-full h-[2px] bg-emerald-100 -translate-x-6 z-0" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Pricing Section */}
                <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Website Development Pricing</h2>
                        <span className="inline-block bg-red-100 text-red-600 px-6 py-2 rounded-full font-black text-lg animate-bounce">
                            50% OFF LAUNCH OFFER
                        </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {packages.map((pkg, idx) => (
                            <motion.div
                                key={pkg.name}
                                whileHover={{ y: -10 }}
                                className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all p-8 flex flex-col h-full group"
                            >
                                <div className="mb-6">
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="text-3xl font-bold text-gray-300 group-hover:text-emerald-500 transition-colors">0{idx + 1}</span>
                                        <span className="bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Premium</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                                    <p className="text-gray-500 text-sm italic mb-6">Best for: {pkg.bestFor}</p>
                                </div>

                                <div className="bg-gray-50/50 rounded-3xl p-6 mb-8 flex-grow">
                                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">What's Included</h4>
                                    <ul className="space-y-3">
                                        {pkg.includes.map(item => (
                                            <li key={item} className="flex items-start text-sm text-gray-600">
                                                <span className="text-emerald-500 mr-2">✔</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mt-auto pt-6 border-t border-gray-50 text-center">
                                    <div className="flex flex-col items-center mb-6">
                                        <span className="text-gray-400 line-through text-sm">Market Price: ₹{pkg.marketPrice.toLocaleString()}</span>
                                        <span className="text-3xl font-black text-emerald-600 mt-1">₹{pkg.price.toLocaleString()}</span>
                                        <span className="bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-md font-bold mt-2">🔥 LAUNCH OFFER</span>
                                    </div>
                                    <button
                                        onClick={() => handleOpenForm(pkg)}
                                        className="w-full py-4 bg-gray-900 text-white rounded-2xl font-bold hover:bg-emerald-600 transition-all flex items-center justify-center gap-2 group/btn"
                                    >
                                        CLAIM NOW
                                        <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Add-ons Section */}
                <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24">
                    <div className="bg-emerald-900 text-white p-12 rounded-[3.5rem] shadow-2xl relative overflow-hidden">
                        {/* Decoration */}
                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-800 rounded-full blur-3xl opacity-50" />
                        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-teal-800 rounded-full blur-3xl opacity-50" />

                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold mb-12 text-center">Optional Add-Ons (50% OFF)</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {addOns.map(addon => (
                                    <div key={addon.name} className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 text-center flex flex-col items-center">
                                        <h4 className="font-bold mb-4">{addon.name}</h4>
                                        <div className="flex flex-col items-center">
                                            <span className="line-through text-white/50 text-xs mb-1">₹{addon.marketPrice.toLocaleString()}</span>
                                            <span className="text-xl font-bold text-emerald-300">₹{addon.price.toLocaleString()}{addon.unit}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* What You Get */}
                <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20 text-center">
                    <h2 className="text-3xl font-bold mb-12">What You Get</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {[
                            "Modern UI/UX design", "Fast loading website", "Mobile responsive design",
                            "Secure backend architecture", "SEO friendly structure", "Future scalability"
                        ].map(benefit => (
                            <div key={benefit} className="bg-white border border-gray-100 px-8 py-4 rounded-2xl shadow-sm flex items-center gap-3">
                                <span className="w-8 h-8 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center font-bold">✓</span>
                                <span className="font-bold text-gray-700">{benefit}</span>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
            <div className="bg-[#030303]">
                <FAQSection faqs={webDesignFaqs} title="Web Design & Development FAQs" subtitle="Common questions about our Next.js web services" />
            </div>
            <Footer />
        
            <ServiceSchema serviceType="Custom Web Design and Development" description="Professional web design and development services using modern technologies like Next.js and React to build high-performance, SEO-friendly websites." url="https://atauragency.in/services/web-design-development" />
        </div>);
}
