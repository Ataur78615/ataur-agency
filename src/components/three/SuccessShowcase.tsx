"use client";

import { motion } from "framer-motion";
import { Rocket, Globe, TrendingUp, Search, ArrowRight } from "lucide-react";
import StatCounter from "../ui/StatCounter";
import SuccessStoryCard from "../ui/SuccessStoryCard";
import Magnetic from "../Magnetic";
import Link from "next/link";

export default function SuccessShowcase() {
  return (
    <section className="relative w-full bg-transparent overflow-hidden">
      
      {/* HTML Content Overlay */}
      <div className="relative z-10 w-full pt-20 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        {/* HERO SECTION */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-purple-650 dark:text-purple-400 font-bold uppercase tracking-widest text-xs mb-8 backdrop-blur-md shadow-xl shadow-purple-550/5 dark:shadow-purple-500/10">
              <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
              Advanced Tech & Growth
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white mb-6 tracking-tight leading-tight drop-shadow-2xl">
              Notable Success & <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
                Digital Growth
              </span>
            </h2>
            
            <p className="text-lg text-gray-650 dark:text-gray-300 font-medium leading-relaxed max-w-2xl mb-10 drop-shadow-md bg-black/5 dark:bg-black/20 p-4 rounded-xl backdrop-blur-sm border border-black/5 dark:border-white/5">
              We help businesses scale through AI-powered marketing, SEO, branding, web development, and social media growth with custom digital strategies.
            </p>
          </motion.div>
        </div>

        {/* COUNTER SECTION */}
        <div className="mb-32">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCounter end={120} suffix="+" label="Projects Completed" icon={<Rocket size={32} />} />
            <StatCounter end={15} suffix="+" label="International Clients" icon={<Globe size={32} />} />
            <StatCounter end={300} suffix="%" label="Growth Campaigns" icon={<TrendingUp size={32} />} />
            <StatCounter end={100} suffix="%" label="Client Satisfaction" icon={<Search size={32} />} />
          </div>
        </div>

        {/* SUCCESS STORIES SECTION */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center md:text-left"
          >
            <h3 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4 drop-shadow-lg">Client Success Stories</h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto md:mx-0 font-medium">Real results from our strategic partnerships across the globe.</p>
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
        <div className="mb-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[3rem] p-12 md:p-20 text-center bg-white/60 dark:bg-white/5 border border-black/10 dark:border-purple-500/30 group shadow-[0_10px_50px_rgba(0,0,0,0.02)] dark:shadow-none transition-colors duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 dark:from-blue-600/20 dark:via-purple-600/20 dark:to-pink-600/20 opacity-50 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px] group-hover:bg-purple-500/30 transition-colors duration-700 pointer-events-none" />
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-8 tracking-tight leading-tight drop-shadow-2xl">
                Ready to Scale Your Business with Ataur Agency?
              </h2>
              
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Magnetic>
                  <Link href="#services" className="inline-flex items-center justify-center gap-3 bg-blue-650 dark:bg-white text-white dark:text-purple-900 px-10 py-5 rounded-2xl font-black text-lg hover:scale-105 transition-all shadow-2xl shadow-blue-550/10 dark:shadow-white/10 group/btn w-full sm:w-auto">
                    Explore Services <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Magnetic>
                <Magnetic>
                  <Link href="#contact" className="inline-flex items-center justify-center gap-3 bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/20 text-gray-800 dark:text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-black/10 dark:hover:bg-white/20 transition-colors w-full sm:w-auto backdrop-blur-md">
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
