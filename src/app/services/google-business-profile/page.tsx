"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import ServiceSchema from "@/components/ServiceSchema";
import Footer from "@/components/Footer";
import PaymentForm from "@/components/PaymentForm";
import PaymentSuccess from "@/components/PaymentSuccess";
import { CheckCircle2, XCircle, MapPin, Search, Navigation, Compass, Star, Shield, Sparkles, Flame, Clock, Landmark, MessageSquareText, Layers } from "lucide-react";
import Magnetic from "@/components/Magnetic";

export default function GoogleBusinessProfilePage() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [paymentData, setPaymentData] = useState<any>(null);

  const pkg = {
    name: "Google Business Profile Setup & Optimization",
    price: 6999,
    marketPrice: 14999
  };

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  const handleFormSubmit = (data: any) => {
    setPaymentData(data);
    setIsFormOpen(false);
    setIsSuccessOpen(true);
  };

  const inclusions = [
    {
      title: "Profile Creation & Verification Guidance",
      desc: "Step-by-step compliant verification setup with Google’s latest verification algorithms to guarantee 100% profile authorization.",
      icon: <Compass className="text-blue-600 dark:text-blue-500" size={24} />
    },
    {
      title: "Hyper-Local SEO Optimization",
      desc: "In-depth regional intent research mapping key terms directly into description copy, attributes, metadata, and services list.",
      icon: <Search className="text-purple-600 dark:text-purple-500" size={24} />
    },
    {
      title: "Advanced GEO-Targeting (Geo-Tagging)",
      desc: "Coding exact geographical coordinates (latitude & longitude) into target image metadata to assert your coordinates to Google search spiders.",
      icon: <MapPin className="text-emerald-600 dark:text-emerald-500" size={24} />
    },
    {
      title: "Category & Service Mapping",
      desc: "Flawless structured categorizations aligned with user intent so you display when clients search adjacent matching words.",
      icon: <Layers className="text-indigo-650 dark:text-indigo-500" size={24} />
    },
    {
      title: "Review Strategy & Q&A Setup",
      desc: "Custom review routing links generation combined with seeding pre-populated FAQs to drive conversions instantly.",
      icon: <MessageSquareText className="text-pink-600 dark:text-pink-500" size={24} />
    },
    {
      title: "NAP Consistency & Local Citations Audit",
      desc: "Aligning matching listings (Name, Address, Phone Number) across public web portals to boost regional business domain authority.",
      icon: <Landmark className="text-amber-600 dark:text-amber-500" size={24} />
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#030303] text-gray-900 dark:text-white selection:bg-blue-500/30 selection:text-white relative overflow-hidden transition-colors duration-300">
      <Navbar />

      {/* Background decoration grid */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-100 dark:opacity-30" />
        <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-blue-500/5 dark:bg-blue-900/10 blur-[150px] opacity-70" />
        <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-purple-500/5 dark:bg-purple-900/10 blur-[150px] opacity-70" />
      </div>

      <PaymentForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        serviceType={pkg.name}
        amount={pkg.price}
        onSubmit={handleFormSubmit}
      />

      <PaymentSuccess
        isOpen={isSuccessOpen}
        onClose={() => setIsSuccessOpen(false)}
        packageName={pkg.name}
        amount={pkg.price}
        userData={paymentData}
      />

      <main className="pt-32 pb-24 relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        {/* Header Hero Section */}
        <section className="text-center max-w-4xl mx-auto mb-20 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-b from-blue-500/5 via-purple-500/5 to-transparent dark:from-blue-500/10 dark:via-purple-500/5 dark:to-transparent rounded-full blur-[100px] -z-10" />
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-blue-600 dark:text-blue-400 font-bold uppercase tracking-widest text-xs mb-6 backdrop-blur-md shadow-xl shadow-black/5 dark:shadow-blue-500/5">
              <Sparkles size={14} className="animate-spin-slow" />
              <span>Google Business Profile (GBP/GMB) Optimization</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-gray-900 dark:text-white tracking-tighter leading-[1.1] mb-6 drop-shadow-2xl">
              Dominating Local Search: <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-650 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400">
                GMB & GBP Setup
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-blue-700 dark:text-blue-100/90 font-bold max-w-3xl mx-auto mb-8 leading-relaxed">
              Get Discovered. Rank Higher. Outsmart Competitors for just ₹6,999!
            </p>

            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
              Are you losing local customers to competitors because your business doesn't show up on Google Maps? We engineer high-converting local citation listings that dominate regional Map packs.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              {["Verify Listing", "Hyper-Local SEO", "Advanced Geo-tagging", "Review Strategy"].map((tag, i) => (
                <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-gray-700 dark:text-gray-300 text-sm font-semibold backdrop-blur-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  {tag}
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Core Value Statement Section */}
        <section className="mb-24">
          <div className="relative rounded-[2rem] overflow-hidden bg-white/60 dark:bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur-xl p-8 sm:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.03)] dark:shadow-[0_0_50px_rgba(99,102,241,0.05)]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-4">Engines built for local conversion.</h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-medium mb-6">
                  At Ataur Agency, we don’t just "create" a profile; we engineer a local lead-generation machine for your business. We provide GMB & GMP setups with geo-targeting configurations to rank your shop at the top.
                </p>
                <div className="space-y-3">
                  {["Attract highly targeted local queries", "Maximize visibility on Google Maps listings", "Prepopulated FAQs packed with keywords"].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="text-emerald-500 shrink-0" size={18} />
                      <span className="text-gray-800 dark:text-gray-200 text-sm font-bold">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white dark:bg-black/40 border border-black/5 dark:border-white/5 rounded-3xl p-6 relative overflow-hidden group">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
                
                {/* Visual mockup of Google Search Results */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 border-b border-black/10 dark:border-white/10 pb-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white"><MapPin size={16} /></div>
                    <span className="text-xs font-mono text-gray-500 dark:text-gray-400">Google Map Pack Preview</span>
                  </div>
                  <div className="bg-white/80 dark:bg-white/5 border border-black/10 dark:border-white/10 p-4 rounded-xl relative">
                    <div className="absolute right-4 top-4 bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-[10px] font-black uppercase px-2 py-0.5 rounded border border-emerald-500/30">#1 Local Pack</div>
                    <h4 className="font-black text-gray-900 dark:text-white text-sm">Your Business Name</h4>
                    <div className="flex items-center gap-1 text-amber-550 dark:text-amber-400 mt-1">
                      {[...Array(5)].map((_, i) => <Star key={i} size={12} className="fill-amber-500 dark:fill-amber-400" />)}
                      <span className="text-gray-500 dark:text-gray-400 text-xs ml-1">(4.9 • Verified)</span>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-300 mt-2">Open Now • Services Noida, Delhi & Jharkhand</p>
                    <div className="mt-3 flex gap-2">
                      <span className="px-2.5 py-1 bg-blue-500/10 border border-blue-550/20 text-blue-600 dark:text-blue-400 rounded-md text-[10px] font-bold">Call Now</span>
                      <span className="px-2.5 py-1 bg-black/5 border border-black/10 text-gray-600 dark:text-gray-300 rounded-md text-[10px] font-bold">Directions</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What's Included Card Grid */}
        <section className="mb-28">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-black text-gray-900 dark:text-white mb-4">What's Included in GMB Premium?</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {inclusions.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                className="bg-white/60 dark:bg-white/5 border border-black/10 dark:border-white/10 p-8 rounded-3xl backdrop-blur-xl relative overflow-hidden flex flex-col justify-between group transition-all duration-300 shadow-[0_4px_25px_rgba(0,0,0,0.02)] dark:shadow-none"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="mb-6">
                  <div className="w-12 h-12 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-3 group-hover:text-blue-655 dark:group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Why Choose Comparison Table */}
        <section className="mb-28">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-black text-gray-900 dark:text-white mb-4">The Strategic Difference</h2>
            <p className="text-gray-550 dark:text-gray-400 max-w-xl mx-auto mt-2 font-medium">Why choosing Ataur Agency secures local market dominance.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* The Mistake Card */}
            <div className="bg-red-500/5 dark:bg-red-950/10 border border-red-200 dark:border-red-500/20 p-8 sm:p-12 rounded-[2.5rem] relative overflow-hidden flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <XCircle className="text-red-500 shrink-0" size={32} />
                  <h3 className="font-black text-2xl text-gray-900 dark:text-white">Basic Profile Setup</h3>
                </div>
                <p className="text-red-750 dark:text-red-300/80 mb-8 font-bold">Most agencies just fill out standard forms and stop there.</p>
                <ul className="space-y-4 text-gray-600 dark:text-gray-400 text-sm font-medium">
                  <li className="flex items-center gap-3"><span>❌</span> Basic data filling with zero SEO tags</li>
                  <li className="flex items-center gap-3"><span>❌</span> Plain photos uploaded without geo-metadata</li>
                  <li className="flex items-center gap-3"><span>❌</span> No optimization for target local areas</li>
                  <li className="flex items-center gap-3"><span>❌</span> Out-of-the-box templates with no FAQ strategy</li>
                </ul>
              </div>
              <div className="mt-8 border-t border-red-500/10 pt-6 text-red-650 dark:text-red-400 font-bold text-sm">Result: Your profile exists, but struggles to rank.</div>
            </div>

            {/* Our Approach Card */}
            <div className="bg-emerald-500/5 dark:bg-emerald-950/10 border border-emerald-200 dark:border-emerald-500/20 p-8 sm:p-12 rounded-[2.5rem] relative overflow-hidden flex flex-col justify-between shadow-[0_10px_40px_rgba(16,185,129,0.02)] dark:shadow-[0_0_50px_rgba(16,185,129,0.05)]">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <CheckCircle2 className="text-emerald-600 dark:text-emerald-400 shrink-0" size={32} />
                  <h3 className="font-black text-2xl text-gray-900 dark:text-white">Ataur Agency Approach</h3>
                </div>
                <p className="text-emerald-750 dark:text-emerald-300/80 mb-8 font-bold">We treat GMB as a strategic digital storefront.</p>
                <ul className="space-y-4 text-gray-700 dark:text-gray-300 text-sm font-medium">
                  <li className="flex items-center gap-3"><span>✔️</span> High-density keyword mapping (Local intent)</li>
                  <li className="flex items-center gap-3"><span>✔️</span> Strict GEO-tagging coordinates on key visual assets</li>
                  <li className="flex items-center gap-3"><span>✔️</span> NAP audit alignment across directory databases</li>
                  <li className="flex items-center gap-3"><span>✔️</span> Review triggers + pre-seeded FAQ listings</li>
                </ul>
              </div>
              <div className="mt-8 border-t border-emerald-500/10 pt-6 text-emerald-650 dark:text-emerald-400 font-bold text-sm">Result: Rank high and capture inbound inquiries.</div>
            </div>
            
          </div>
        </section>

        {/* Pricing Offer Section */}
        <section className="mb-20 max-w-4xl mx-auto">
          <div className="relative rounded-[3rem] overflow-hidden bg-white dark:bg-gradient-to-b dark:from-[#111] dark:to-black border-2 border-blue-200 dark:border-blue-500/30 p-8 sm:p-16 text-center shadow-[0_10px_50px_rgba(59,130,246,0.05)] dark:shadow-[0_0_80px_rgba(59,130,246,0.15)] group">
            {/* Visual Flare Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5 dark:from-blue-500/10 dark:via-purple-500/10 dark:to-blue-500/10 opacity-30 group-hover:opacity-50 transition-opacity duration-700 pointer-events-none" />
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-600 text-white px-6 py-2 rounded-full font-black text-sm uppercase tracking-wider mb-6 shadow-xl shadow-blue-500/20">
                <Flame size={16} className="animate-pulse" />
                <span>Limited Launch Offer</span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white mb-6">Invest in Local Market Dominance</h2>
              <p className="text-gray-700 dark:text-gray-300 font-bold mb-10">Get a 100% Fully Configured, Geo-Optimized Profile + 30 Days of Post-Setup Support.</p>

              <div className="bg-black/5 dark:bg-black/60 border border-black/5 dark:border-white/5 rounded-3xl p-8 mb-10 max-w-sm mx-auto">
                <span className="text-gray-500 dark:text-gray-400 line-through text-lg font-bold block mb-1">Valued at: ₹14,999</span>
                <span className="text-gray-500 dark:text-gray-400 font-bold text-xs uppercase tracking-widest block">One-Time Investment</span>
                <span className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600 dark:from-blue-400 dark:to-emerald-400 block mt-2">₹6,999</span>
                <div className="flex items-center justify-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-black text-xs uppercase tracking-widest mt-4">
                  <Shield size={14} strokeWidth={2.5} />
                  <span>100% Satisfaction Guarantee</span>
                </div>
              </div>

              <div className="space-y-4 max-w-sm mx-auto flex flex-col items-center">
                <Magnetic>
                  <button
                    onClick={handleOpenForm}
                    className="w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-black text-lg py-5 px-10 rounded-2xl hover:shadow-[0_0_40px_rgba(79,70,229,0.3)] transition-all cursor-pointer active:scale-95"
                  >
                    Claim Your Top Spot on Google Now
                  </button>
                </Magnetic>
                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-500 text-xs font-semibold">
                  <Clock size={14} />
                  <span>Setup starts within 24 hours of booking</span>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    
            <ServiceSchema serviceType="Google Business Profile Optimization" description="Enhance your local search visibility and attract more customers with our expert Google Business Profile setup and optimization services." url="https://atauragency.in/services/google-business-profile" />
        </div>);
}
