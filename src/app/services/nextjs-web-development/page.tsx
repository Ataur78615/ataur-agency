"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import ServiceSchema from "@/components/ServiceSchema";
import Link from "next/link";

const nextjsFaqs = [
  {
    question: "Why do you use Next.js instead of WordPress?",
    answer: "Next.js provides Server-Side Rendering (SSR) and Static Site Generation (SSG). This ensures incredibly fast load times, superior SEO (Core Web Vitals), and advanced security compared to traditional WordPress templates."
  },
  {
    question: "Will my Next.js website be mobile-responsive?",
    answer: "Yes. Every website we develop follows a mobile-first design philosophy using Tailwind CSS, ensuring pixel-perfect responsiveness across all devices."
  },
  {
    question: "Do you build e-commerce stores with Next.js?",
    answer: "Absolutely. We build highly scalable headless e-commerce platforms using Next.js, allowing for custom product pages, fast checkouts, and seamless payment gateway integrations."
  }
];

export default function NextJsWebDevPage() {
  return (
    <div className="min-h-screen bg-[#030303] text-white">
      <Navbar />

      <main className="pt-32 pb-20 overflow-hidden">
        {/* Hero Section */}
        <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24 text-center">
          <div className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-emerald-900/20 blur-[120px] pointer-events-none" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              High-Performance <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">Next.js Web Development</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
              We build ultra-fast, secure, and scalable web applications. Say goodbye to bloated templates and hello to a custom-coded digital experience designed for maximum conversion and SEO performance.
            </p>
            <Link href="/contact" className="inline-block bg-white text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform">
              Book a Free Audit
            </Link>
          </motion.div>
        </section>

        {/* Why Custom Next.js */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Next.js Architecture?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Blazing Fast Speeds", desc: "Server-side rendering ensures your pages load instantly, drastically improving user retention." },
              { title: "Technical SEO Superiority", desc: "Perfect Google Lighthouse scores and optimized metadata natively supported out of the box." },
              { title: "Enterprise Security", desc: "No plugins, no vulnerabilities. Headless architecture keeps your backend data secure." }
            ].map(item => (
              <div key={item.title} className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm">
                <h3 className="text-xl font-bold text-emerald-400 mb-4">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Development Process */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24">
          <div className="bg-white/5 p-10 md:p-16 rounded-[3rem] border border-white/10">
            <h2 className="text-3xl font-bold text-center mb-16">Our Development Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Strategy & UI/UX" },
                { step: "02", title: "Frontend (Next.js)" },
                { step: "03", title: "Backend & API" },
                { step: "04", title: "Launch & SEO" }
              ].map(process => (
                <div key={process.step} className="text-center">
                  <span className="text-4xl font-black text-emerald-900 mb-4 block">{process.step}</span>
                  <h4 className="text-lg font-bold">{process.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <FAQSection faqs={nextjsFaqs} title="Next.js Development FAQs" />
      <Footer />
      <ServiceSchema serviceType="Next.js Web Development" description="Custom Next.js and React web development services for high performance and SEO." url="https://atauragency.in/services/nextjs-web-development" />
    </div>
  );
}
