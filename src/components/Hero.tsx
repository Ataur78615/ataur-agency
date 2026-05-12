"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, Globe, Moon, Gift, Star } from "lucide-react";
import Magnetic from "./Magnetic";

const rotatingServices = [
  "Digital Growth",
  "Digital Marketing",
  "IT Solutions",
  "AI Automation",
  "Branding",
  "Web Development",
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505] pt-24 pb-16">
      {/* Premium Cinematic Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-blue-900/20 via-purple-900/10 to-transparent rounded-full blur-[120px] opacity-70" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[100px] opacity-50" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
        
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-md shadow-xl shadow-white/5"
          >
            <Globe size={14} className="text-blue-400 shrink-0" />
            <span>Trusted by Growing Brands Across India & International Markets</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter text-white mb-6 leading-[1.1] drop-shadow-2xl"
          >
            India’s Next-Generation <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500">
              AI-Powered
            </span> <br />
            <div className="h-[1.2em] relative overflow-hidden inline-block w-full align-bottom">
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={serviceIndex}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute left-0 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500"
                >
                  {rotatingServices[serviceIndex]}
                </motion.span>
              </AnimatePresence>
              <span className="opacity-0">Web Development</span> {/* Layout Spacer */}
            </div>
            <span className="block mt-2">Agency</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-2xl text-gray-200 font-bold max-w-2xl mb-4 leading-relaxed drop-shadow-md"
          >
            We don’t just market businesses — we build digital systems that generate growth, automate operations, and attract customers worldwide.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm md:text-base text-gray-500 font-medium max-w-2xl mb-10 leading-relaxed bg-black/20 p-4 rounded-xl border border-white/5 backdrop-blur-sm"
          >
            From SEO and social media growth to AI automation and high-performance web platforms — Ataur Agency helps startups, hotels, clinics, IT companies, and brands scale faster with modern digital strategies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Magnetic>
              <Link href="#contact" className="w-full sm:w-auto flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white px-8 py-5 rounded-2xl font-black hover:shadow-[0_0_40px_rgba(79,70,229,0.4)] transition-all group/btn">
                Get Free Strategy Audit <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </Magnetic>
            <Magnetic>
              <Link href="#services" className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white/5 border border-white/10 text-white px-8 py-5 rounded-2xl font-bold hover:bg-white/10 transition-colors backdrop-blur-md">
                Explore Services
              </Link>
            </Magnetic>
          </motion.div>
        </div>

        {/* Right Column - Premium Eid-ul-Adha Offer Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
          className="w-full lg:w-[450px] shrink-0"
          style={{ perspective: 1000 }}
        >
          <div className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-[#0A2619] via-[#05140D] to-black border border-[#D4AF37]/30 shadow-[0_0_50px_rgba(212,175,55,0.15)] group p-8 lg:p-10 hover:-translate-y-2 transition-transform duration-500">
            
            {/* Animated Golden Particles & Glow */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-[80px] group-hover:bg-[#D4AF37]/20 transition-colors duration-700" />
              <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#14532D]/40 to-transparent" />
              
              {/* Floating Festival Stars */}
              {mounted && [...Array(8)].map((_, i) => (
                <motion.div
                  key={`star-${i}`}
                  animate={{ 
                    y: [0, -20, 0],
                    opacity: [0.2, 0.8, 0.2],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 3 + Math.random() * 2, 
                    repeat: Infinity,
                    delay: Math.random() * 2
                  }}
                  className="absolute text-[#D4AF37]"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                >
                  <Star size={Math.random() * 8 + 6} className="fill-[#D4AF37] opacity-60" />
                </motion.div>
              ))}
            </div>

            <div className="relative z-10 flex flex-col items-center text-center">
              {/* Glowing Crescent Moon */}
              <motion.div 
                animate={{ rotate: [-5, 5, -5] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="mb-8 drop-shadow-[0_0_20px_rgba(212,175,55,0.5)]"
              >
                <Moon size={72} className="text-[#D4AF37] fill-[#D4AF37]/30" />
              </motion.div>

              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-black uppercase tracking-widest mb-4 shadow-inner shadow-[#D4AF37]/20">
                <Sparkles size={14} />
                Eid-ul-Adha Special Offer
              </div>

              <h3 className="text-3xl font-black text-white mb-2 leading-tight">
                Up to <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#FFF2B2] text-6xl drop-shadow-md">
                  50% OFF
                </span>
              </h3>
              
              <h4 className="text-sm font-bold text-[#A7F3D0] uppercase tracking-wider mb-6">
                On Digital Marketing, Web Dev & Automation Services
              </h4>

              <p className="text-gray-400 text-sm mb-10 leading-relaxed font-medium">
                Celebrate Eid-ul-Adha with business growth. Ataur Agency is offering limited-time festival discounts for startups, local businesses, hotels, clinics, and international brands.
              </p>

              <Magnetic>
                <Link href="#contact" className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-[#D4AF37] via-[#FDE047] to-[#D4AF37] text-[#064E3B] px-6 py-5 rounded-2xl font-black uppercase tracking-widest hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all duration-300">
                  <Gift size={20} />
                  Claim Festival Offer
                </Link>
              </Magnetic>
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
