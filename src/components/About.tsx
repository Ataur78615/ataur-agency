"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 bg-transparent text-gray-900 dark:text-white relative z-10 border-y border-black/5 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-blue-650 dark:text-blue-500 font-black tracking-[0.2em] uppercase text-xs mb-4 block">About Our Agency</span>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">Why Choose Ataur Agency?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-medium">
            Ataur Agency provides industry-leading digital marketing and development specialized for businesses in Jharkhand, Noida, Delhi, and Pan India.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Core Services List */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-black text-gray-900 dark:text-white mb-10 flex items-center tracking-tight">
              <span className="mr-3">🚀</span> Ataur Agency – Core Services
            </h3>

            <div className="space-y-10">
              {/* Service Category 1 */}
              <div className="group">
                <h4 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-4 flex items-center transition-colors group-hover:text-blue-500">
                  <span className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 p-2.5 rounded-xl mr-3 block">📢</span>
                  Performance Advertising
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-14 text-gray-700 dark:text-gray-300 font-medium">
                  <div className="flex items-center space-x-2"><span>•</span> <span>Meta Ads (FB & IG)</span></div>
                  <div className="flex items-center space-x-2"><span>•</span> <span>Google Ads</span></div>
                  <div className="flex items-center space-x-2"><span>•</span> <span>LinkedIn Ads</span></div>
                  <div className="flex items-center space-x-2"><span>•</span> <span>Instagram Ads</span></div>
                  <div className="flex items-center space-x-2"><span>•</span> <span>WhatsApp Ads</span></div>
                  <div className="flex items-center space-x-2 font-semibold text-emerald-600 dark:text-emerald-400"><span>✅</span> <span>Direct WhatsApp Inquiries</span></div>
                </div>
              </div>

              {/* Service Category 2 */}
              <div className="group">
                <h4 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-4 flex items-center transition-colors group-hover:text-blue-500">
                  <span className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 p-2.5 rounded-xl mr-3 block">💻</span>
                  Website Design & Development
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-14 text-gray-700 dark:text-gray-300 font-medium">
                  <div className="flex items-center space-x-2"><span>•</span> <span>E-commerce</span></div>
                  <div className="flex items-center space-x-2"><span>•</span> <span>CRM Systems</span></div>
                  <div className="flex items-center space-x-2"><span>•</span> <span>RBAC-Based Secure Sites</span></div>
                  <div className="flex items-center space-x-2"><span>•</span> <span>Multi-Tenant Admin Panels</span></div>
                  <div className="flex items-center space-x-2"><span>•</span> <span>Business Management</span></div>
                  <div className="flex items-center space-x-2"><span>•</span> <span>Corporate & Startup Sites</span></div>
                </div>
              </div>

              {/* Service Category 3 */}
              <div className="group">
                <h4 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-4 flex items-center transition-colors group-hover:text-blue-500">
                  <span className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 p-2.5 rounded-xl mr-3 block">🤖</span>
                  AI Automation & Lead Follow-Up
                </h4>
                <div className="grid grid-cols-1 gap-3 pl-14 text-gray-700 dark:text-gray-300 font-medium">
                  <div className="flex items-center space-x-2"><span>•</span> <span>WhatsApp Automation</span></div>
                  <div className="flex items-center space-x-2"><span>•</span> <span>24/7 AI Follow-Up (n8n based)</span></div>
                  <div className="flex items-center space-x-2"><span>•</span> <span>Lead Nurturing & Conversion</span></div>
                </div>
              </div>

              {/* Service Category 4 */}
              <div className="group">
                <h4 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-4 flex items-center transition-colors group-hover:text-blue-500">
                  <span className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 p-2.5 rounded-xl mr-3 block">🔐</span>
                  Cyber Security & Protection
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-14 text-gray-700 dark:text-gray-300 font-medium">
                  <div className="flex items-center space-x-2"><span>•</span> <span>Security Audits</span></div>
                  <div className="flex items-center space-x-2"><span>•</span> <span>Penetration Testing</span></div>
                  <div className="flex items-center space-x-2"><span>•</span> <span>Social Media Security</span></div>
                  <div className="flex items-center space-x-2"><span>•</span> <span>Vulnerability Testing</span></div>
                </div>
              </div>
            </div>

            {/* Mission Statement */}
            <div className="mt-12 p-8 bg-blue-50/50 dark:bg-blue-950/20 rounded-3xl border border-blue-100 dark:border-blue-500/20 shadow-[0_0_30px_rgba(59,130,246,0.03)] dark:shadow-[0_0_30px_rgba(59,130,246,0.05)]">
              <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-3 flex items-center">
                <span className="mr-3">🎯</span> Our Mission
              </h3>
              <p className="text-xl text-blue-600 dark:text-blue-400 font-bold italic tracking-tight">
                "Grow Your Business. Automate Your Leads. Secure Your Brand."
              </p>
            </div>
          </motion.div>

          {/* Right Column: Key Results & Success list */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10 lg:pl-8"
          >
            {/* 3 Grid Card features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white/60 dark:bg-white/5 border border-black/10 dark:border-white/10 p-6 rounded-2xl backdrop-blur-md">
                <h4 className="font-bold text-lg mb-2 text-blue-600 dark:text-blue-400">Proven SEO</h4>
                <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed font-medium">Rank #1 for local searches with our advanced metadata architectures.</p>
              </div>
              <div className="bg-white/60 dark:bg-white/5 border border-black/10 dark:border-white/10 p-6 rounded-2xl backdrop-blur-md">
                <h4 className="font-bold text-lg mb-2 text-purple-650 dark:text-purple-400">Next-Gen Dev</h4>
                <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed font-medium">React, Node.js, Next.js setups optimized for lightning speed performance.</p>
              </div>
              <div className="bg-white/60 dark:bg-white/5 border border-black/10 dark:border-white/10 p-6 rounded-2xl backdrop-blur-md">
                <h4 className="font-bold text-lg mb-2 text-indigo-600 dark:text-indigo-400">UGC/CGI Ads</h4>
                <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed font-medium">High conversion visual assets mapped to generate inbound inquiries.</p>
              </div>
            </div>

            <h3 className="text-3xl font-black text-gray-900 dark:text-white mb-6 flex items-center tracking-tight">
              <span className="mr-3">✔️</span> Notable Successes
            </h3>
            <ul className="space-y-4">
              {[
                "HotelUpWala – List. Book. Manage. Grow. (Complete hotel solution platform)",
                "Stayzzy Bloom (Hotel website — Next.js + TypeScript)",
                "College Notes Creator Website (MERN stack)",
                "E-commerce Website (MERN)",
                "Code Fixer AI Website (MERN + Gemini API)",
                "Programming Error Solver Website (MERN)"
              ].map((success, index) => (
                <li 
                  key={index}
                  className="flex items-start bg-white/60 dark:bg-white/5 p-4 rounded-2xl border border-black/10 dark:border-white/10 shadow-sm transition-transform hover:scale-[1.02] group"
                >
                  <span className="text-emerald-500 dark:text-emerald-400 font-bold mr-3 mt-0.5 group-hover:scale-125 transition-transform">✓</span>
                  <span className="text-gray-800 dark:text-gray-200 font-bold text-sm leading-relaxed">{success}</span>
                </li>
              ))}
            </ul>

            {/* Social media connections */}
            <div className="flex flex-wrap gap-4 mt-8 pt-6 border-t border-black/5 dark:border-white/5">
              <a href="https://www.youtube.com/@Ataurtechbca" target="_blank" rel="noopener noreferrer" className="text-red-650 hover:text-red-500 font-bold tracking-wider text-sm uppercase">
                YouTube
              </a>
              <a href="https://www.facebook.com/profile.php?id=100075557272259" target="_blank" rel="noopener noreferrer" className="text-blue-650 hover:text-blue-500 font-bold tracking-wider text-sm uppercase">
                Facebook
              </a>
              <a href="https://www.instagram.com/ataurway/" target="_blank" rel="noopener noreferrer" className="text-pink-650 hover:text-pink-500 font-bold tracking-wider text-sm uppercase">
                Instagram
              </a>
              <a href="https://github.com/Ataur78615" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white font-bold tracking-wider text-sm uppercase">
                GitHub
              </a>
              <a href="https://vercel.com/md-ataur-ansaris-projects" target="_blank" rel="noopener noreferrer" className="group shrink-0">
                <div className="h-6 w-6 overflow-hidden rounded-full border border-black/10 dark:border-white/20 transition-all duration-300 group-hover:scale-110">
                  <Image
                    src="/img/brand-logo.jpg"
                    alt="MD Ataur Ansari - Founder of Ataur Agency"
                    width={24}
                    height={24}
                    className="h-full w-full object-cover"
                  />
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
