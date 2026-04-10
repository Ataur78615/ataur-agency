"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ArrowUpRight, Sparkles, Rocket, Zap, Target, TrendingUp } from "lucide-react";
import Magnetic from "./Magnetic";

const carouselImages = [
  "/img/brand-logo.jpg",
  "/img/AtaAgen.jpg",
  "/img/Ataur Agency slider 1.jpg",
  "/img/Ataur Agency slider 4.jpg",
  "/img/Ataur Agency slider 5.jpg",
  "/img/Ataur Agency.png",
  "/img/Ataur Agnecy slider 2.jpg",
  "/img/Ataur Agnecy slider 3.jpg",
  "/img/ataur agen2.png",
  "/img/ataur agen3.png",
];

export default function Hero() {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen pt-24 pb-12 px-4 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto h-full">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 min-h-[calc(100vh-160px)]">
          
          {/* Main Headline - Big Typography - Span 3 cols, 3 rows */}
          <div className="md:col-span-3 md:row-span-3 glass-card p-6 md:p-12 flex flex-col justify-center relative overflow-hidden group min-h-[350px]">
            <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none group-hover:rotate-12 transition-transform duration-700">
               <Sparkles size={120} className="text-blue-500" />
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-[10px] md:text-sm font-bold w-fit mb-4 md:mb-6"
            >
              <Zap size={14} className="fill-current" />
              <span>India's Top-Rated Digital Agency</span>
            </motion.div>
            
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] dark:text-white mb-4 md:mb-6 kinetic-text uppercase break-words">
              Best Digital <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                Marketing
              </span> <br className="hidden md:block" />
              Agency in <span className="text-blue-600 dark:text-blue-400">India</span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
              Result-driven SEO, PPC, and High-Performance Web Apps. Scaling businesses across 
              <span className="font-bold text-gray-900 dark:text-white"> All India.</span>
            </p>
          </div>

          {/* 50% Savings Badge - Span 1 col, 1 row */}
          <div className="md:col-span-1 md:row-span-1 bg-gradient-to-br from-orange-500 to-red-600 p-6 rounded-[2rem] flex flex-col items-center justify-center text-white shadow-xl shadow-orange-500/20 relative overflow-hidden group min-h-[160px]">
            <motion.div 
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-white/20 p-8 rounded-full blur-2xl" 
            />
            <span className="text-[10px] font-bold uppercase tracking-widest opacity-80">Limited Offer</span>
            <div className="text-4xl md:text-5xl font-black">50%</div>
            <span className="text-sm md:text-lg font-bold">SAVINGS</span>
            <div className="mt-2 text-[10px] text-center font-medium opacity-90">On all Enterprise Systems & CRM Solutions</div>
          </div>

          {/* Quick CTA Box - Span 1 col, 2 rows */}
          <div className="md:col-span-1 md:row-span-2 glass-card p-6 flex flex-col justify-between group cursor-pointer hover:border-blue-500/50 transition-all border-glow-hover min-h-[200px]">
            <div className="w-12 h-12 rounded-2xl bg-blue-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
               <Rocket size={24} />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-2">Ready to Scale?</h3>
              <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mb-4">Start your journey with a free strategy audit.</p>
              <Magnetic>
                <Link href="/contact" className="flex items-center gap-2 text-blue-600 font-bold group/btn text-sm md:text-base">
                  Get Started <ArrowUpRight size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </Link>
              </Magnetic>
            </div>
          </div>

          {/* Image Carousel Bento Item - Span 2 cols, 3 rows */}
          <div className="md:col-span-2 md:row-span-3 glass-card relative overflow-hidden group min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeImage}
                src={carouselImages[activeImage]}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
              <div>
                <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest mb-1">Our Showcase</p>
                <h4 className="text-white text-lg md:text-xl font-bold">Successful Projects & Brands</h4>
              </div>
              <div className="flex gap-1.5">
                {carouselImages.slice(0, 5).map((_, idx) => (
                  <div key={idx} className={`w-2 h-2 rounded-full transition-all ${Math.floor(activeImage/2) === idx ? 'bg-white w-6' : 'bg-white/30'}`} />
                ))}
              </div>
            </div>
          </div>

          {/* Trust Meter/Stats - Span 2 cols, 1 row */}
          <div className="md:col-span-2 md:row-span-1 glass-card p-6 flex items-center justify-around border-glow-hover min-h-[120px]">
             <div className="text-center">
               <div className="text-2xl md:text-3xl font-black text-blue-600">500+</div>
               <div className="text-[10px] font-bold text-gray-500 uppercase tracking-tighter">Leads Generated</div>
             </div>
             <div className="w-px h-10 bg-gray-200 dark:bg-gray-800" />
             <div className="text-center">
               <div className="text-2xl md:text-3xl font-black text-indigo-600">100+</div>
               <div className="text-[10px] font-bold text-gray-500 uppercase tracking-tighter">Projects Delivered</div>
             </div>
             <div className="w-px h-10 bg-gray-200 dark:bg-gray-800" />
             <div className="text-center">
               <div className="text-2xl md:text-3xl font-black text-purple-600">98%</div>
               <div className="text-[10px] font-bold text-gray-500 uppercase tracking-tighter">Client Satisfaction</div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
