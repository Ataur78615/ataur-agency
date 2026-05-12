"use client";

import { motion } from "framer-motion";
import { 
  Instagram, 
  Facebook, 
  Linkedin, 
  Youtube, 
  MessageCircle, 
  Twitter, 
  CheckCircle2, 
  Phone, 
  Globe, 
  Mail, 
  Sparkles,
  Rocket,
  Star
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Magnetic from "@/components/Magnetic";

export default function SocialMediaHandling() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-24 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-orange-500/20 rounded-full blur-[100px] opacity-60 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-blue-500/20 via-indigo-500/20 to-purple-500/20 rounded-full blur-[100px] opacity-60 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header Section */}
          <div className="text-center max-w-4xl mx-auto mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-pink-500 font-bold uppercase tracking-widest text-xs mb-8 shadow-xl shadow-pink-500/10 backdrop-blur-md"
            >
              <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
              Social Media Handling Services
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-black dark:text-white mb-6 tracking-tight leading-tight"
            >
              Dominate <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500">Social Media</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-500 dark:text-gray-400 font-medium leading-relaxed mb-10 max-w-3xl mx-auto"
            >
              Grow your brand, attract customers, and increase engagement with professional social media management by Ataur Agency. We help startups, hotels, IT companies, clinics, restaurants, and businesses build a strong online presence through strategic content, branding, and digital marketing.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex justify-center flex-wrap gap-6 text-gray-400"
            >
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-pink-500/50 hover:bg-pink-500/10 transition-all cursor-pointer group">
                <Instagram className="group-hover:text-pink-500 transition-colors" size={32} />
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all cursor-pointer group">
                <Facebook className="group-hover:text-blue-500 transition-colors" size={32} />
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-600/50 hover:bg-blue-600/10 transition-all cursor-pointer group">
                <Linkedin className="group-hover:text-blue-600 transition-colors" size={32} />
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-sky-500/50 hover:bg-sky-500/10 transition-all cursor-pointer group">
                <Twitter className="group-hover:text-sky-500 transition-colors" size={32} />
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-red-500/50 hover:bg-red-500/10 transition-all cursor-pointer group">
                <Youtube className="group-hover:text-red-500 transition-colors" size={32} />
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-green-500/50 hover:bg-green-500/10 transition-all cursor-pointer group">
                <MessageCircle className="group-hover:text-green-500 transition-colors" size={32} />
              </div>
            </motion.div>
          </div>

          {/* Pricing Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 items-start pt-10">
            
            {/* Basic Plan */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-[2rem] border-glow-hover relative group flex flex-col h-full hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="mb-8">
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center mb-6">
                  <Star size={24} className="fill-orange-500" />
                </div>
                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2">
                  🥉 Basic Plan
                </h3>
                <p className="text-gray-500 dark:text-gray-400 font-medium text-sm">For startups & local businesses</p>
              </div>
              <div className="mb-8">
                <div className="flex items-end gap-2 mb-2">
                  <span className="text-4xl font-black text-gray-900 dark:text-white">₹7,999</span>
                  <span className="text-gray-500 dark:text-gray-400 font-medium mb-1">/month</span>
                </div>
                <div className="text-xs font-bold text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-white/5 inline-block px-3 py-1.5 rounded-lg border border-black/5 dark:border-white/5">
                  🌍 International: $149/month
                </div>
              </div>
              <ul className="space-y-4 mb-10 flex-1">
                {[
                  "Handling up to 2 social media platforms",
                  "12 professional posts/month",
                  "Basic graphic designing",
                  "Caption writing with hashtags",
                  "Basic audience engagement",
                  "Monthly performance report",
                  "Profile optimization",
                  "Reels posting support"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="text-orange-500 shrink-0 mt-0.5" size={20} />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              <Magnetic>
                <Link href="#contact" className="w-full py-4 rounded-xl font-bold bg-white/5 border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-gray-900 dark:text-white flex items-center justify-center">
                  Start Growing
                </Link>
              </Magnetic>
            </motion.div>

            {/* Intermediate Plan */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card p-8 rounded-[2rem] border-glow-hover relative group flex flex-col h-full transform md:-translate-y-8 shadow-2xl shadow-purple-500/10 bg-white/10 dark:bg-white/[0.03] border-purple-500/30"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest flex items-center gap-1.5 shadow-lg shadow-purple-500/30 whitespace-nowrap">
                <Star size={12} className="fill-white" /> Most Popular
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent rounded-[2rem] pointer-events-none" />
              
              <div className="mb-8 relative z-10">
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 text-purple-500 flex items-center justify-center mb-6 shadow-inner shadow-purple-500/20">
                  <Rocket size={24} />
                </div>
                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2">
                  🥈 Intermediate Plan
                </h3>
                <p className="text-gray-500 dark:text-gray-400 font-medium text-sm">Best for growing businesses</p>
              </div>
              <div className="mb-8 relative z-10">
                <div className="flex items-end gap-2 mb-2">
                  <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">₹14,999</span>
                  <span className="text-gray-500 dark:text-gray-400 font-medium mb-1">/month</span>
                </div>
                <div className="text-xs font-bold text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-white/5 inline-block px-3 py-1.5 rounded-lg border border-black/5 dark:border-white/5">
                  🌍 International: $299/month
                </div>
              </div>
              <ul className="space-y-4 mb-10 flex-1 relative z-10">
                {[
                  "Handling up to 4 social media platforms",
                  "20 premium posts/month",
                  "Custom branding graphics",
                  "Reels editing & publishing",
                  "SEO-friendly captions & hashtags",
                  "Story management",
                  "Competitor analysis",
                  "Audience engagement & reply handling",
                  "Monthly analytics report",
                  "Lead-focused content strategy"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="text-purple-500 shrink-0 mt-0.5" size={20} />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              <Magnetic>
                <Link href="#contact" className="w-full py-4 rounded-xl font-black bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white hover:opacity-90 transition-opacity shadow-lg shadow-purple-500/25 relative z-10 flex items-center justify-center">
                  Boost My Brand
                </Link>
              </Magnetic>
            </motion.div>

            {/* Advanced Plan */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card p-8 rounded-[2rem] border-glow-hover relative group flex flex-col h-full hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="mb-8">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center mb-6">
                  <Globe size={24} />
                </div>
                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2">
                  🥇 Advanced Plan
                </h3>
                <p className="text-gray-500 dark:text-gray-400 font-medium text-sm">For companies & international brands</p>
              </div>
              <div className="mb-8">
                <div className="flex items-end gap-2 mb-2">
                  <span className="text-4xl font-black text-gray-900 dark:text-white">₹29,999</span>
                  <span className="text-gray-500 dark:text-gray-400 font-medium mb-1">/month</span>
                </div>
                <div className="text-xs font-bold text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-white/5 inline-block px-3 py-1.5 rounded-lg border border-black/5 dark:border-white/5">
                  🌍 International: $599/month
                </div>
              </div>
              <ul className="space-y-4 mb-10 flex-1">
                {[
                  "Full social media management",
                  "Unlimited platform handling",
                  "30+ premium posts/month",
                  "Advanced reels/video editing",
                  "Viral content strategy",
                  "Personal branding strategy",
                  "AI-powered content planning",
                  "Social media ads strategy",
                  "Daily audience engagement",
                  "Lead generation optimization",
                  "Advanced analytics dashboard",
                  "Dedicated account manager",
                  "International branding support"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="text-blue-500 shrink-0 mt-0.5" size={20} />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              <Magnetic>
                <Link href="#contact" className="w-full py-4 rounded-xl font-bold bg-white/5 border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-gray-900 dark:text-white flex items-center justify-center">
                  Scale My Business
                </Link>
              </Magnetic>
            </motion.div>

          </div>

          {/* Trust Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24 p-8 md:p-12 rounded-[3rem] glass-card border-glow-hover relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl group-hover:bg-pink-500/10 transition-colors duration-500" />
            <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
              <div className="flex-1">
                <h3 className="text-3xl md:text-4xl font-black dark:text-white mb-8 flex items-center gap-3">
                  <Rocket className="text-pink-500" size={36} />
                  Why Businesses Choose Ataur Agency?
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    "International client handling experience",
                    "Professional branding & viral content strategy",
                    "SEO + Social Media growth combined",
                    "Fast response & dedicated support",
                    "AI-powered marketing solutions",
                    "Experience with hotels, startups, IT companies & local businesses"
                  ].map((reason, i) => (
                    <div key={i} className="flex items-start gap-4 glass-card p-4 rounded-2xl hover:bg-white/5 transition-colors">
                      <div className="w-8 h-8 rounded-full bg-indigo-500/10 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="text-indigo-500" size={16} />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium text-sm pt-1.5">{reason}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="hidden md:block w-px h-64 bg-gradient-to-b from-transparent via-black/10 dark:via-white/10 to-transparent" />
              <div className="w-full md:w-auto text-center md:text-left flex flex-col items-center md:items-start">
                <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 flex items-center justify-center text-white mb-6 shadow-2xl shadow-purple-500/30 group-hover:rotate-6 transition-transform duration-500">
                  <Sparkles size={48} />
                </div>
                <h4 className="text-2xl font-black dark:text-white mb-3">Proven Results</h4>
                <p className="text-gray-500 dark:text-gray-400 font-medium max-w-[200px] text-center md:text-left">We don't just post. We build brands and drive revenue.</p>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div 
            id="contact"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[3rem] p-12 md:p-20 text-center group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/20 rounded-full blur-3xl group-hover:bg-white/30 transition-all duration-700" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/20 rounded-full blur-3xl group-hover:bg-white/30 transition-all duration-700" />
            
            <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
                Want your business to grow on Instagram, Facebook, LinkedIn & other platforms?
              </h2>
              <p className="text-white/80 text-lg md:text-xl font-medium mb-12 max-w-2xl">
                Let's discuss how we can transform your social media presence.
              </p>
              
              <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 bg-white/10 p-6 md:p-8 rounded-3xl backdrop-blur-md border border-white/20 w-full md:w-auto shadow-2xl">
                <a href="tel:+917250570798" className="flex items-center justify-center gap-3 text-white hover:text-pink-200 transition-colors group/link">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover/link:bg-white/20 transition-colors">
                    <Phone size={18} className="text-pink-300" />
                  </div>
                  <span className="font-bold text-lg">+91 7250570798</span>
                </a>
                <div className="hidden md:block w-px bg-white/20" />
                <a href="https://atauragency.in" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 text-white hover:text-purple-200 transition-colors group/link">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover/link:bg-white/20 transition-colors">
                    <Globe size={18} className="text-purple-300" />
                  </div>
                  <span className="font-bold text-lg">atauragency.in</span>
                </a>
                <div className="hidden md:block w-px bg-white/20" />
                <a href="mailto:atauragency@gmail.com" className="flex items-center justify-center gap-3 text-white hover:text-indigo-200 transition-colors group/link">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover/link:bg-white/20 transition-colors">
                    <Mail size={18} className="text-indigo-300" />
                  </div>
                  <span className="font-bold text-lg">atauragency@gmail.com</span>
                </a>
              </div>
              
              <div className="mt-12">
                <Magnetic>
                  <a href="tel:+917250570798" className="inline-flex items-center gap-3 bg-white text-purple-600 px-10 py-5 rounded-2xl font-black text-lg hover:scale-105 transition-transform shadow-2xl shadow-black/20 group/btn">
                    Contact Ataur Agency Today <Phone size={20} className="group-hover/btn:rotate-12 transition-transform" />
                  </a>
                </Magnetic>
              </div>
            </div>
          </motion.div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
