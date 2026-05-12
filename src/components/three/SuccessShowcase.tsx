"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Rocket, Globe, TrendingUp, Search, ArrowRight } from "lucide-react";
import StatCounter from "../ui/StatCounter";
import SuccessStoryCard from "../ui/SuccessStoryCard";
import Magnetic from "../Magnetic";
import Link from "next/link";

// Dynamically import the 3D Scene with ssr disabled to prevent hydration errors
const Scene = dynamic(() => import("./Scene"), { 
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 flex items-center justify-center bg-[#0a0a0a]">
      <div className="w-16 h-16 border-4 border-purple-500/20 border-t-purple-500 rounded-full animate-spin" />
    </div>
  )
});

export default function SuccessShowcase() {
  return (
    <section className="relative w-full bg-[#0a0a0a] overflow-hidden min-h-screen">
      {/* 3D Canvas Background - Sticky to stay in view while scrolling over it */}
      <div className="absolute inset-0 z-0 h-screen sticky top-0">
        <Scene />
      </div>

      {/* HTML Content Overlay */}
      <div className="relative z-10 w-full pt-32 pb-24 pointer-events-none">
        
        {/* HERO SECTION */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[70vh] flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl pointer-events-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-purple-400 font-bold uppercase tracking-widest text-xs mb-8 backdrop-blur-md shadow-xl shadow-purple-500/10">
              <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
              Advanced Tech & Growth
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-tight drop-shadow-2xl">
              Notable Success & <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                Digital Growth
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 font-medium leading-relaxed max-w-2xl mb-10 drop-shadow-md bg-black/20 p-4 rounded-xl backdrop-blur-sm border border-white/5">
              We help businesses scale through AI-powered marketing, SEO, branding, web development, and social media growth. Drag the interactive 3D carousel to explore our services.
            </p>
          </motion.div>
        </div>

        {/* SPACER FOR 3D CAROUSEL TO BE FULLY VISIBLE IN THE CENTER */}
        <div className="h-[60vh] w-full" />

        {/* COUNTER SECTION */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32 mb-40 pointer-events-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCounter end={120} suffix="+" label="Projects Completed" icon={<Rocket size={32} />} />
            <StatCounter end={15} suffix="+" label="International Clients" icon={<Globe size={32} />} />
            <StatCounter end={300} suffix="%" label="Growth Campaigns" icon={<TrendingUp size={32} />} />
            <StatCounter end={100} suffix="%" label="Client Satisfaction" icon={<Search size={32} />} />
          </div>
        </div>

        {/* SUCCESS STORIES SECTION */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-40 pointer-events-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center md:text-left"
          >
            <h3 className="text-4xl md:text-5xl font-black text-white mb-4 drop-shadow-lg">Client Success Stories</h3>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto md:mx-0">Real results from our strategic partnerships across the globe.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SuccessStoryCard 
              clientName="service247.store"
              projectType="Web Dev & Marketing"
              result="Revenue growth started immediately after marketing campaigns launched. Scaled their local service business."
              delay={0}
            />
            <SuccessStoryCard 
              clientName="Apex Digital Academy"
              projectType="Performance Ads"
              result="Generated consistent high-quality student leads daily, reducing cost per acquisition by 40%."
              delay={0.1}
            />
            <SuccessStoryCard 
              clientName="Royal Orchid"
              projectType="Hospitality ERP"
              result="Streamlined booking operations and improved guest experience with a custom, fast Next.js portal."
              delay={0.2}
            />
          </div>
        </div>

        {/* CTA SECTION */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32 pointer-events-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[3rem] p-12 md:p-20 text-center glass-card border border-purple-500/30 group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-purple-500/20 rounded-full blur-[80px] group-hover:bg-purple-500/40 transition-colors duration-700" />
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight leading-tight drop-shadow-2xl">
                Ready to Scale Your Business with Ataur Agency?
              </h2>
              
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Magnetic>
                  <Link href="#services" className="inline-flex items-center justify-center gap-3 bg-white text-purple-900 px-10 py-5 rounded-2xl font-black text-lg hover:scale-105 transition-transform shadow-2xl shadow-white/10 group/btn w-full sm:w-auto">
                    Explore Services <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Magnetic>
                <Magnetic>
                  <Link href="#contact" className="inline-flex items-center justify-center gap-3 bg-white/10 border border-white/20 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-white/20 transition-colors w-full sm:w-auto backdrop-blur-md">
                    Contact Now
                  </Link>
                </Magnetic>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
