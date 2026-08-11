"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import ServiceSchema from "@/components/ServiceSchema";
import Link from "next/link";

const automationFaqs = [
  {
    question: "What is n8n and why use it over Zapier?",
    answer: "n8n is a powerful workflow automation tool. We prefer it because it allows for more complex, custom integrations and is highly cost-effective at scale compared to Zapier's pricing model."
  },
  {
    question: "Can you automate WhatsApp messages for new leads?",
    answer: "Yes, we can instantly trigger a personalized WhatsApp message to any lead that fills out a form on your website or Meta Ads, drastically improving response times."
  },
  {
    question: "Is my business data secure?",
    answer: "Absolutely. We use secure API integrations and can even self-host n8n on your servers to ensure complete data privacy and compliance."
  }
];

export default function AutomationPage() {
  return (
    <div className="min-h-screen bg-[#030303] text-white">
      <Navbar />

      <main className="pt-32 pb-20 overflow-hidden">
        {/* Hero Section */}
        <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24 text-center">
          <div className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-purple-900/20 blur-[120px] pointer-events-none" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              AI-Powered <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Lead & Workflow Automation</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
              Stop doing manual data entry. We use AI and n8n to instantly capture leads, trigger WhatsApp follow-ups, and sync your CRM—running your business on autopilot 24/7.
            </p>
            <Link href="/contact" className="inline-block bg-white text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform">
              Automate Your Business
            </Link>
          </motion.div>
        </section>

        {/* Features */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "WhatsApp Automation", desc: "Instantly greet new leads, send booking links, and follow up via automated WhatsApp flows." },
              { title: "CRM Syncing", desc: "Never lose a lead. Automatically send data from your ads straight to Google Sheets, Hubspot, or any CRM." },
              { title: "AI Assistants", desc: "Connect OpenAI to your workflows to categorize leads, draft emails, and answer queries automatically." }
            ].map(item => (
              <div key={item.title} className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm">
                <h3 className="text-xl font-bold text-purple-400 mb-4">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Automation Process */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24">
          <div className="bg-gradient-to-br from-purple-900/20 to-black p-10 rounded-[3rem] border border-purple-900/30 text-center">
            <h2 className="text-3xl font-bold mb-12">How We Implement Automation</h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4">
              <span className="px-6 py-3 bg-white/5 rounded-full">1. System Audit</span>
              <span className="text-purple-500">→</span>
              <span className="px-6 py-3 bg-white/5 rounded-full">2. Map Workflow</span>
              <span className="text-purple-500">→</span>
              <span className="px-6 py-3 bg-white/5 rounded-full">3. Build (n8n/Make)</span>
              <span className="text-purple-500">→</span>
              <span className="px-6 py-3 bg-white/5 rounded-full">4. Test & Deploy</span>
            </div>
          </div>
        </section>

      </main>

      <FAQSection faqs={automationFaqs} title="Automation FAQs" />
      <Footer />
      <ServiceSchema serviceType="AI & n8n Lead Automation" description="Business workflow automation, WhatsApp bots, and AI integrations." url="https://atauragency.in/services/ai-n8n-lead-automation" />
    </div>
  );
}
