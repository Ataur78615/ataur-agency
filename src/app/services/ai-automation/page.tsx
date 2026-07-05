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

const aiFaqs = [
  {
    question: "What is an AI WhatsApp Chatbot and how does it generate leads?",
    answer: "An AI WhatsApp Chatbot acts as a 24/7 digital assistant. It instantly replies to customer inquiries, qualifies leads by asking specific questions, and captures their contact information automatically, syncing it to your CRM."
  },
  {
    question: "Do you use n8n for workflow automation?",
    answer: "Yes, we specialize in n8n for workflow automation. It allows us to build powerful, custom integrations between your apps without relying on expensive monthly SaaS subscriptions like Zapier."
  },
  {
    question: "Will AI automation replace my sales team?",
    answer: "No, AI automation empowers your sales team. By handling repetitive tasks, answering basic FAQs, and pre-qualifying leads, your team can focus exclusively on closing high-value deals."
  },
  {
    question: "Are there ongoing monthly fees for your AI setups?",
    answer: "Our core AI and automation setup is a one-time development fee. However, you will be responsible for minimal API usage costs (like Meta's WhatsApp API or OpenAI). We also offer optional monthly maintenance plans."
  },
  {
    question: "Can your AI chatbots integrate with my existing CRM?",
    answer: "Absolutely. We can integrate our custom AI chatbots with almost any modern CRM, database, or Google Sheets to ensure your data flows seamlessly across your business ecosystem."
  }
];

const packages = [
    {
        name: "WhatsApp AI Lead Capture System",
        price: 15000,
        marketPrice: 30000,
        bestFor: "Small businesses, service providers, local businesses",
        maintenance: { price: 2000, marketPrice: 4000 },
        includes: [
            "WhatsApp AI chatbot",
            "Lead capture automation",
            "Basic workflow automation",
            "FAQ responses",
            "CRM integration"
        ]
    },
    {
        name: "AI Lead Qualification System",
        price: 25000,
        marketPrice: 50000,
        bestFor: "Businesses running ads and generating many leads.",
        maintenance: { price: 3000, marketPrice: 6000 },
        includes: [
            "AI chatbot with smart responses",
            "Lead scoring system",
            "Instant alerts to sales team",
            "Automated follow-up messages",
            "WhatsApp + Email integration"
        ]
    },
    {
        name: "AI Lead Nurturing Automation (n8n)",
        price: 35000,
        marketPrice: 70000,
        bestFor: "High-ticket businesses like real estate, education, SaaS, agencies.",
        maintenance: { price: 4000, marketPrice: 8000 },
        includes: [
            "n8n workflow automation",
            "Multi-step follow-up sequences",
            "Personalized AI messages",
            "Behavior-based triggers",
            "Appointment booking automation"
        ]
    },
    {
        name: "Complete AI Sales Automation System",
        price: 60000,
        marketPrice: 120000,
        bestFor: "Startups and businesses wanting full automation of leads and sales funnel.",
        maintenance: { price: 5000, marketPrice: 10000 },
        includes: [
            "WhatsApp AI Agent",
            "n8n workflow automation",
            "CRM integration",
            "AI lead scoring",
            "Automated follow-ups",
            "Appointment booking system",
            "Analytics dashboard"
        ]
    }
];

export default function AIAutomationPage() {
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
                            AI & <span className="text-orange-600">Automation</span>
                        </h1>
                        <h2 className="text-2xl md:text-3xl font-medium text-gray-600 mb-8">
                            WhatsApp AI Agents + n8n Workflow Automation
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
                            Deploy 24/7 AI-powered follow-up agents that capture leads, nurture prospects, and automatically convert them into customers.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4 mb-12">
                            {[
                                "WhatsApp AI Agents", "n8n Workflow Automation", "CRM Systems",
                                "Google Sheets / Databases", "Email & SMS Automation"
                            ].map((tech) => (
                                <span key={tech} className="px-6 py-2 bg-orange-50 text-orange-700 rounded-full font-bold border border-orange-100 shadow-sm">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="bg-gray-900 text-white p-6 rounded-3xl inline-block shadow-xl">
                            <p className="font-medium">
                                These systems automatically respond to leads, send follow-ups, and push prospects toward conversion without manual work.
                            </p>
                        </div>
                    </motion.div>
                </section>

                {/* How It Works */}
                <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24">
                    <div className="text-center mb-16">
                        <h3 className="text-3xl font-bold text-gray-900">How Our AI Automation Works</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                title: "Lead Capture",
                                desc: "Automatically captures name, phone, and interest from website forms, ads, and WhatsApp.",
                                icon: "📥"
                            },
                            {
                                title: "AI Conversation Agent",
                                desc: "Responds instantly, qualifes leads, and answers FAQs 24/7 like a virtual sales pro.",
                                icon: "🤖"
                            },
                            {
                                title: "Nurturing Automation",
                                desc: "n8n workflows send follow-ups via WhatsApp and Email to increase conversion rates.",
                                icon: "🔄"
                            },
                            {
                                title: "CRM & Data Sync",
                                desc: "All leads sync to Google Sheets or CRM for real-time tracking by your sales team.",
                                icon: "📊"
                            }
                        ].map((step, i) => (
                            <div key={step.title} className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-lg transition-all relative group">
                                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">{step.icon}</div>
                                <div className="absolute top-8 right-8 text-6xl font-black text-gray-50 -z-10">0{i + 1}</div>
                                <h4 className="font-bold text-xl mb-4 text-gray-900">{step.title}</h4>
                                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Pricing Section */}
                <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">AI & Automation Pricing</h2>
                        <span className="inline-block bg-red-100 text-red-600 px-6 py-2 rounded-full font-black text-lg animate-pulse">
                            50% OFF LAUNCH OFFER
                        </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {packages.map((pkg, idx) => (
                            <motion.div
                                key={pkg.name}
                                whileHover={{ scale: 1.02 }}
                                className="bg-white rounded-[3rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all p-10 flex flex-col md:flex-row gap-10"
                            >
                                <div className="flex-1">
                                    <div className="flex items-center gap-4 mb-6">
                                        <span className="w-10 h-10 bg-orange-600 text-white rounded-xl flex items-center justify-center font-bold">{idx + 1}</span>
                                        <h3 className="text-2xl font-bold text-gray-900">{pkg.name}</h3>
                                    </div>
                                    <p className="text-gray-500 text-sm italic mb-8">Best for: {pkg.bestFor}</p>

                                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Includes</h4>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                                        {pkg.includes.map(item => (
                                            <li key={item} className="flex items-start text-sm text-gray-600">
                                                <span className="text-orange-500 mr-2">✦</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="w-full md:w-72 bg-gray-50 rounded-[2.5rem] p-8 flex flex-col justify-center text-center">
                                    <div className="mb-6">
                                        <span className="text-gray-400 line-through text-sm">Market Price: ₹{pkg.marketPrice.toLocaleString()}</span>
                                        <div className="text-4xl font-black text-orange-600 mt-1">₹{pkg.price.toLocaleString()}</div>
                                        <div className="text-xs font-bold text-red-500 mt-2 uppercase tracking-tighter">Limited Launch Offer</div>
                                    </div>

                                    {pkg.maintenance && (
                                        <div className="mb-8 p-3 bg-white rounded-2xl border border-gray-200">
                                            <div className="text-[10px] text-gray-400 uppercase font-black mb-1">Monthly Maintenance</div>
                                            <div className="text-xs line-through text-gray-400">₹{pkg.maintenance.marketPrice.toLocaleString()}</div>
                                            <div className="text-sm font-bold text-gray-700">₹{pkg.maintenance.price.toLocaleString()}/mo</div>
                                        </div>
                                    )}

                                    <button
                                        onClick={() => handleOpenForm(pkg)}
                                        className="w-full py-4 bg-gray-900 text-white rounded-2xl font-bold hover:bg-orange-600 transition-all flex items-center justify-center gap-2 group/btn"
                                    >
                                        CLAIM NOW
                                        <span className="group-hover/btn:translate-x-1 transition-transform">🔥</span>
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Client Use Case */}
                <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24">
                    <div className="bg-orange-600 rounded-[3rem] p-12 text-white shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-12 opacity-10">
                            <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                        </div>
                        <div className="max-w-4xl mx-auto relative z-10">
                            <h2 className="text-3xl font-bold mb-8">Example Client Use Case</h2>
                            <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 mb-10">
                                <h4 className="text-xl font-bold mb-6">Workflow: Meta Ads to Appointment</h4>
                                <div className="space-y-6">
                                    {[
                                        "Lead clicks ad → opens WhatsApp",
                                        "AI agent replies instantly",
                                        "Collects lead information",
                                        "n8n automation sends follow-up messages",
                                        "Appointment scheduled automatically",
                                        "Sales team gets qualified lead"
                                    ].map((step, i) => (
                                        <div key={i} className="flex items-center gap-4">
                                            <div className="w-8 h-8 bg-white text-orange-600 rounded-full flex items-center justify-center font-bold flex-shrink-0">{i + 1}</div>
                                            <p className="font-medium text-lg">{step}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                                {["Faster response time", "Higher conversion rate", "No manual follow-up"].map(r => (
                                    <div key={r} className="bg-white text-orange-600 px-6 py-4 rounded-2xl font-bold flex items-center justify-center gap-2">
                                        <span className="text-xl">✔</span> {r}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Benefits & Notes */}
                <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-2xl font-bold mb-8 text-gray-900 border-l-4 border-orange-600 pl-4">Benefits of AI Automation</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    "24/7 customer response", "No missed leads", "Faster conversions",
                                    "Reduced manual work", "Scalable sales system"
                                ].map(benefit => (
                                    <div key={benefit} className="bg-gray-50 p-4 rounded-xl flex items-center gap-3">
                                        <span className="text-orange-500 font-bold">✓</span>
                                        <span className="font-bold text-gray-700">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-gray-900 rounded-[2.5rem] p-10 text-white">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                                <span className="text-yellow-400">⚠</span> Important Notes
                            </h3>
                            <ul className="space-y-4 text-gray-400 text-sm">
                                <li className="flex gap-3">
                                    <span className="text-orange-500 font-bold mt-1">•</span>
                                    <p>WhatsApp API conversation charges are paid directly to Meta.</p>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-orange-500 font-bold mt-1">•</span>
                                    <p>AI API usage cost (OpenAI/Gemini) depends on your message volume.</p>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-orange-500 font-bold mt-1">•</span>
                                    <p>Automation setup is a one-time fee; maintenance and monthly support is optional but recommended.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </main>
            <div className="bg-[#030303]">
                <FAQSection faqs={aiFaqs} title="AI Automation FAQs" subtitle="Clear answers on how AI scales your business" />
            </div>
            <Footer />
        
            <ServiceSchema serviceType="AI Automation and Workflow Development" description="Streamline your business operations with advanced AI automation, n8n workflows, and custom chatbots tailored to your specific needs." url="https://atauragency.in/services/ai-automation" />
        </div>);
}
