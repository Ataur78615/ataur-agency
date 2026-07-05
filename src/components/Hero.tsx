"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, Globe, TrendingUp, Cpu, CheckCircle, Zap } from "lucide-react";
import Magnetic from "./Magnetic";

const rotatingServices = [
  "Digital Marketing",
  "Website Design",
  "SEO & Local SEO",
  "Web Development",
  "AI Automation",
  "Lead Generation"
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [serviceIndex, setServiceIndex] = useState(0);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setServiceIndex((prev) => (prev + 1) % rotatingServices.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent pt-24 pb-16">
      {/* Premium Cinematic Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-blue-900/10 via-purple-900/5 to-transparent dark:from-blue-900/20 dark:via-purple-900/10 dark:to-transparent rounded-full blur-[120px] opacity-70" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-900/5 dark:bg-indigo-900/10 rounded-full blur-[100px] opacity-50" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] dark:opacity-[0.03] mix-blend-overlay" />
        
        {/* Subtle Floating AI Grid / Particles */}
        {mounted && [...Array(10)].map((_, i) => (
          <motion.div
            key={`bg-particle-${i}`}
            animate={{ 
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{ 
              duration: 5 + Math.random() * 5, 
              repeat: Infinity,
              delay: Math.random() * 2
            }}
            className="absolute w-1 h-1 bg-blue-500/30 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Content Column - Cinematic Hook */}
        <div className="flex-1 flex flex-col items-start text-left z-20">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-gray-650 dark:text-gray-300 text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-md shadow-xl shadow-black/5 dark:shadow-white/5"
          >
            <Globe size={14} className="text-blue-550 dark:text-blue-400 shrink-0" />
            <span>Trusted by Growing Brands Across India & International Markets</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter text-gray-900 dark:text-white mb-6 leading-[1.1] drop-shadow-2xl"
          >
            Scale Your Brand with a <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-650 dark:from-blue-500 dark:via-indigo-500 dark:to-purple-500">
              Premium SEO &
            </span> <br />
            <div className="h-[1.2em] relative overflow-hidden inline-block w-full align-bottom">
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={serviceIndex}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute left-0 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-500"
                >
                  {rotatingServices[serviceIndex]}
                </motion.span>
              </AnimatePresence>
              <span className="opacity-0 font-black">Digital Marketing</span> {/* Layout Spacer */}
            </div>
            <span className="block mt-2 text-gray-900 dark:text-white">Agency</span>
          </motion.h1>

          <motion.a
            href="https://www.aiscamchecker.in/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="inline-flex items-center gap-2 mb-8 px-8 py-3.5 bg-gradient-to-r from-blue-700 to-indigo-900 text-white font-black text-sm md:text-base rounded-full shadow-[0_8px_30px_rgba(37,99,235,0.3)] hover:shadow-[0_10px_40px_rgba(37,99,235,0.5)] hover:-translate-y-1 transition-all border border-blue-400/20 w-fit"
          >
            Try AiScamChecker Now & Stay Secure
          </motion.a>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-2xl text-gray-800 dark:text-gray-200 font-bold max-w-2xl mb-4 leading-relaxed drop-shadow-md"
          >
            High-impact digital marketing services, custom website design, and AI automation built to drive organic traffic and dominate search results.
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm md:text-base text-gray-650 dark:text-gray-400 font-medium max-w-2xl mb-10 leading-relaxed bg-black/5 dark:bg-black/20 p-4 rounded-xl border border-black/5 dark:border-white/5 backdrop-blur-sm"
          >
            Looking for a top-tier digital marketing agency near me or a high-performance website agency near me? From expert SEO to advanced web platforms, we engineer high-converting digital solutions. Claim your free strategy audit today to accelerate your business growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Magnetic>
              <Link href="#contact" className="w-full sm:w-auto flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white px-8 py-5 rounded-2xl font-black hover:shadow-[0_0_40px_rgba(79,70,229,0.3)] transition-all group/btn">
                Get Free Strategy Audit <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </Magnetic>
            <Magnetic>
              <Link href="#services" className="w-full sm:w-auto flex items-center justify-center gap-3 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-gray-800 dark:text-white px-8 py-5 rounded-2xl font-bold hover:bg-black/10 dark:hover:bg-white/10 transition-colors backdrop-blur-md">
                Explore Services
              </Link>
            </Magnetic>
          </motion.div>
        </div>

        {/* Right Column - Premium AI & Analytics Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full lg:w-[480px] shrink-0 z-20"
        >
          <div className="relative rounded-[2rem] overflow-hidden bg-white/60 dark:bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur-xl shadow-[0_0_50px_rgba(99,102,241,0.08)] dark:shadow-[0_0_50px_rgba(99,102,241,0.15)] p-6 md:p-8 hover:border-black/20 dark:hover:border-white/20 transition-all duration-500 group">
            {/* Ambient Background Glow inside the dashboard */}
            <div className="absolute top-[-20%] right-[-20%] w-[250px] h-[250px] bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-[80px] group-hover:bg-purple-500/20 transition-colors duration-700 pointer-events-none" />
            <div className="absolute bottom-[-20%] left-[-20%] w-[250px] h-[250px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[80px] group-hover:bg-blue-500/20 transition-colors duration-700 pointer-events-none" />
            
            {/* Header / Control Bar */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-black/5 dark:border-white/5">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 block" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 block" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80 block" />
                </div>
                <span className="text-[10px] sm:text-xs text-gray-400 dark:text-gray-500 font-mono ml-2">ataur-agency-analytics-v2.0</span>
              </div>
              <div className="flex items-center gap-1.5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] px-2 py-0.5 rounded-full border border-emerald-500/20 dark:border-emerald-500/25 font-bold uppercase tracking-wider animate-pulse">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400" />
                Live API Connected
              </div>
            </div>

            {/* Dashboard grid */}
            <div className="space-y-6">
              
              {/* Stat card 1: Business Growth with SVG graph */}
              <div className="bg-white/80 dark:bg-black/40 border border-black/5 dark:border-white/5 rounded-2xl p-5 hover:bg-white/90 dark:hover:bg-black/60 transition-all">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-xs text-gray-550 dark:text-gray-400 font-semibold uppercase tracking-wider">Estimated Client ROI</p>
                    <h4 className="text-3xl font-black text-gray-900 dark:text-white mt-1">340% <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold font-mono">↑ 48.2%</span></h4>
                  </div>
                  <span className="p-2 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                    <TrendingUp size={18} />
                  </span>
                </div>
                
                {/* SVG Line Chart */}
                <div className="h-20 w-full mt-2 relative overflow-hidden">
                  <svg className="w-full h-full" viewBox="0 0 100 30" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="chart-gradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#818cf8" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#818cf8" stopOpacity="0.0" />
                      </linearGradient>
                      <linearGradient id="chart-gradient-stroke" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="50%" stopColor="#818cf8" />
                        <stop offset="100%" stopColor="#ec4899" />
                      </linearGradient>
                    </defs>
                    {/* Path */}
                    <motion.path
                      d="M0,25 Q15,18 30,22 T60,8 T90,12 L100,5"
                      fill="none"
                      stroke="url(#chart-gradient-stroke)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, ease: "easeInOut" }}
                    />
                    <path
                      d="M0,25 Q15,18 30,22 T60,8 T90,12 L100,5 L100,30 L0,30 Z"
                      fill="url(#chart-gradient)"
                    />
                  </svg>
                  {/* Glowing anchor point */}
                  <motion.div 
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute right-0 top-[10%] w-2 h-2 rounded-full bg-pink-500 shadow-[0_0_10px_#ec4899]" 
                  />
                </div>
              </div>

              {/* Two Column Section */}
              <div className="grid grid-cols-2 gap-4">
                {/* AI automation step cards */}
                <div className="bg-white/80 dark:bg-black/40 border border-black/5 dark:border-white/5 rounded-2xl p-4 flex flex-col justify-between hover:bg-white/90 dark:hover:bg-black/60 transition-all">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] text-gray-550 dark:text-gray-400 font-semibold uppercase tracking-wider">AI Operations</span>
                    <Cpu size={14} className="text-purple-650 dark:text-purple-400" />
                  </div>
                  <div className="space-y-1.5 py-1">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle size={10} className="text-emerald-500 dark:text-emerald-400 shrink-0" />
                      <span className="text-[10px] text-gray-700 dark:text-gray-300 font-mono truncate">Audit generated</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle size={10} className="text-emerald-500 dark:text-emerald-400 shrink-0" />
                      <span className="text-[10px] text-gray-700 dark:text-gray-300 font-mono truncate">SEO optimized</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 border-2 border-t-transparent border-indigo-650 dark:border-indigo-400 rounded-full animate-spin shrink-0" />
                      <span className="text-[10px] text-indigo-600 dark:text-indigo-300 font-mono truncate">Leads scaling...</span>
                    </div>
                  </div>
                </div>

                {/* Performance Speed card */}
                <div className="bg-white/80 dark:bg-black/40 border border-black/5 dark:border-white/5 rounded-2xl p-4 flex flex-col justify-between items-center text-center hover:bg-white/90 dark:hover:bg-black/60 transition-all group/vitals">
                  <div className="w-full flex justify-between items-center mb-1">
                    <span className="text-[10px] text-gray-555 dark:text-gray-400 font-semibold uppercase tracking-wider">Core Vitals</span>
                    <Zap size={14} className="text-amber-600 dark:text-amber-400" />
                  </div>
                  <div className="relative flex items-center justify-center my-1.5">
                    {/* Ring background */}
                    <svg className="w-16 h-16 transform -rotate-90">
                      <circle cx="32" cy="32" r="28" className="stroke-black/5 dark:stroke-white/5" strokeWidth="4" fill="transparent" />
                      <motion.circle 
                        cx="32" 
                        cy="32" 
                        r="28" 
                        className="stroke-emerald-500 dark:stroke-emerald-400" 
                        strokeWidth="4" 
                        fill="transparent"
                        strokeDasharray={175}
                        initial={{ strokeDashoffset: 175 }}
                        animate={{ strokeDashoffset: 0 }}
                        transition={{ duration: 1.5, delay: 0.2 }}
                      />
                    </svg>
                    <span className="absolute text-sm font-black text-gray-900 dark:text-white font-mono group-hover/vitals:scale-110 transition-transform">100/100</span>
                  </div>
                  <span className="text-[10px] text-gray-500 dark:text-gray-400 font-medium">Page Speed Optimize</span>
                </div>
              </div>

              {/* Bottom Interactive Trigger button */}
              <Magnetic>
                <Link href="#contact" className="w-full flex items-center justify-between bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:border-indigo-500/30 hover:bg-indigo-500/5 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white px-5 py-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-300 group/audit">
                  <span className="flex items-center gap-2">
                    <Sparkles size={14} className="text-indigo-650 dark:text-indigo-400 group-hover/audit:animate-spin" />
                    Get your free strategy audit
                  </span>
                  <ArrowRight size={14} className="group-hover/audit:translate-x-1 transition-transform" />
                </Link>
              </Magnetic>
              
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
