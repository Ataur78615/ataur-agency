"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import ServiceSchema from "@/components/ServiceSchema";
import Link from "next/link";

const marketingFaqs = [
  {
    question: "How soon can I expect leads from Google/Meta Ads?",
    answer: "Once the campaigns are launched, you can typically expect to start seeing initial traffic and leads within 48 to 72 hours. However, the first 2-4 weeks are crucial for algorithmic learning and optimization."
  },
  {
    question: "Do you manage both B2B and B2C campaigns?",
    answer: "Yes, we handle Meta Ads for B2C e-commerce and visual products, and Google Ads for intent-driven B2B lead generation and high-ticket local services."
  },
  {
    question: "How do you track conversions?",
    answer: "We set up advanced tracking using Google Tag Manager, Meta Conversions API (CAPI), and Google Analytics 4 (GA4) to ensure every lead and sale is accurately attributed."
  }
];

export default function PerformanceMarketingPage() {
  return (
    <div className="min-h-screen bg-[#030303] text-white">
      <Navbar />

      <main className="pt-32 pb-20 overflow-hidden">
        {/* Hero Section */}
        <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24 text-center">
          <div className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-blue-900/20 blur-[120px] pointer-events-none" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Data-Driven <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Performance Marketing</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
              We don't just drive traffic; we drive revenue. Maximize your ROI with highly targeted Google Ads and Meta Ads campaigns designed specifically for high-quality lead generation.
            </p>
            <Link href="/contact" className="inline-block bg-white text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform">
              Get a Free Marketing Audit
            </Link>
          </motion.div>
        </section>

        {/* Ads Section */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-900/40 to-black border border-blue-900/30 p-10 rounded-3xl">
              <h3 className="text-3xl font-bold mb-4 text-blue-400">Google Ads</h3>
              <p className="text-gray-400 mb-6">Capture high-intent search traffic. When your customers are searching for your exact services, we make sure you appear at the very top.</p>
              <ul className="space-y-3 text-sm text-gray-300">
                <li>✓ Search & Performance Max Campaigns</li>
                <li>✓ Keyword Optimization</li>
                <li>✓ Local Service Leads</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-indigo-900/40 to-black border border-indigo-900/30 p-10 rounded-3xl">
              <h3 className="text-3xl font-bold mb-4 text-indigo-400">Meta Ads (FB/IG)</h3>
              <p className="text-gray-400 mb-6">Build brand awareness and generate impulse leads. We use scroll-stopping creatives and precise audience targeting to lower your Cost Per Acquisition.</p>
              <ul className="space-y-3 text-sm text-gray-300">
                <li>✓ Lead Generation Forms</li>
                <li>✓ Retargeting Campaigns</li>
                <li>✓ Conversion API Setup</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Campaign Process */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24 text-center">
          <h2 className="text-3xl font-bold mb-12">Our Campaign Process</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {["Audience Research", "Creative Strategy", "Tracking Setup", "Launch & Optimize", "Scale"].map((step, idx) => (
              <div key={step} className="bg-white/5 border border-white/10 px-6 py-4 rounded-full text-sm font-bold">
                <span className="text-blue-500 mr-2">{idx + 1}.</span> {step}
              </div>
            ))}
          </div>
        </section>

      </main>

      <FAQSection faqs={marketingFaqs} title="Performance Marketing FAQs" />
      <Footer />
      <ServiceSchema serviceType="Performance Marketing & Leads" description="ROI-focused Google Ads and Meta Ads for lead generation and e-commerce." url="https://atauragency.in/services/performance-marketing" />
    </div>
  );
}
