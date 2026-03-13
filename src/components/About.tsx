"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Ataur Agency?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ataur Agency provides industry-leading digital marketing and development specialized for businesses in Jharkhand, Noida, Delhi, and Pan India.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <span className="mr-3">🚀</span> Ataur Agency – Core Services
            </h3>

            <div className="space-y-8">
              {/* Service Category 1 */}
              <div>
                <h4 className="text-xl font-bold text-primary-600 mb-4 flex items-center">
                  <span className="bg-primary-100 p-2 rounded-lg mr-3">📢</span>
                  Performance Advertising
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-12 text-gray-700">
                  <div className="flex items-center space-x-2"><span>•</span> <span>Meta Ads (FB & IG)</span></div>
                  <div className="flex items-center space-x-2"><span>•</span> <span>Google Ads</span></div>
                  <div className="flex items-center space-x-2"><span>•</span> <span>LinkedIn Ads</span></div>
                  <div className="flex items-center space-x-2"><span>•</span> <span>Instagram Ads</span></div>
                  <div className="flex items-center space-x-2"><span>•</span> <span>WhatsApp Ads</span></div>
                  <div className="flex items-center space-x-2 font-semibold text-green-600"><span>✅</span> <span>Direct WhatsApp Inquiries</span></div>
                </div>
              </div>

              {/* Service Category 2 */}
              <div>
                <h4 className="text-xl font-bold text-primary-600 mb-4 flex items-center">
                  <span className="bg-primary-100 p-2 rounded-lg mr-3">💻</span>
                  Website Design & Development
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-12 text-gray-700">
                  <div className="flex items-center space-x-2"><span>•</span> <span>E-commerce</span></div>
                  <div className="flex items-center space-x-2"><span>•</span> <span>CRM Systems</span></div>
                  <div className="flex items-center space-x-2"><span>•</span> <span>RBAC-Based Secure Sites</span></div>
                  <div className="flex items-center space-x-2"><span>•</span> <span>Multi-Tenant Admin Panels</span></div>
                  <div className="flex items-center space-x-2"><span>•</span> <span>Business Management</span></div>
                  <div className="flex items-center space-x-2"><span>•</span> <span>Corporate & Startup Sites</span></div>
                </div>
              </div>

              {/* Service Category 3 */}
              <div>
                <h4 className="text-xl font-bold text-primary-600 mb-4 flex items-center">
                  <span className="bg-primary-100 p-2 rounded-lg mr-3">🤖</span>
                  AI Automation & Lead Follow-Up
                </h4>
                <div className="grid grid-cols-1 gap-3 pl-12 text-gray-700">
                  <div className="flex items-center space-x-2"><span>•</span> <span>WhatsApp Automation</span></div>
                  <div className="flex items-center space-x-2"><span>•</span> <span>24/7 AI Follow-Up (n8n based)</span></div>
                  <div className="flex items-center space-x-2"><span>•</span> <span>Lead Nurturing & Conversion</span></div>
                </div>
              </div>

              {/* Service Category 4 */}
              <div>
                <h4 className="text-xl font-bold text-primary-600 mb-4 flex items-center">
                  <span className="bg-primary-100 p-2 rounded-lg mr-3">🔐</span>
                  Cyber Security & Protection
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-12 text-gray-700">
                  <div className="flex items-center space-x-2"><span>•</span> <span>Security Audits</span></div>
                  <div className="flex items-center space-x-2"><span>•</span> <span>Penetration Testing</span></div>
                  <div className="flex items-center space-x-2"><span>•</span> <span>Social Media Security</span></div>
                  <div className="flex items-center space-x-2"><span>•</span> <span>Vulnerability Testing</span></div>
                </div>
              </div>
            </div>

            {/* Mission Statement */}
            <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center">
                <span className="mr-3">🎯</span> Our Mission
              </h3>
              <p className="text-lg text-primary-700 font-medium italic">
                "Grow Your Business. Automate Your Leads. Secure Your Brand."
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 lg:ml-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                <h4 className="font-bold text-xl mb-2 text-blue-900">Proven SEO Results</h4>
                <p className="text-gray-600 text-sm">Rank #1 for "digital marketing near me" searches with our expert optimization.</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-2xl border border-purple-100">
                <h4 className="font-bold text-xl mb-2 text-purple-900">Expert Web Development</h4>
                <p className="text-gray-600 text-sm">React, Node.js, Next.js for fast, modern, and high-performance websites.</p>
              </div>
              <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100">
                <h4 className="font-bold text-xl mb-2 text-indigo-900">UGC/CGI Ads</h4>
                <p className="text-gray-600 text-sm">High ROI campaigns for lead generation using cutting-edge video tech.</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="mr-3">✔️</span> Notable Successes
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start bg-green-50 p-4 rounded-xl border border-green-100 shadow-sm transition-transform hover:scale-[1.02]">
                <span className="text-green-500 font-bold mr-3 mt-1">✓</span>
                <span className="text-gray-800 font-semibold text-sm md:text-base">HotelUpWala – List. Book. Manage. Grow. (Complete hotel solution platform)</span>
              </li>
              <li className="flex items-start bg-green-50 p-4 rounded-xl border border-green-100 shadow-sm transition-transform hover:scale-[1.02]">
                <span className="text-green-500 font-bold mr-3 mt-1">✓</span>
                <span className="text-gray-800 font-semibold">Stayzzy Bloom (Hotel website — Next.js + TypeScript)</span>
              </li>
              <li className="flex items-start bg-green-50 p-4 rounded-xl border border-green-100 shadow-sm transition-transform hover:scale-[1.02]">
                <span className="text-green-500 font-bold mr-3 mt-1">✓</span>
                <span className="text-gray-800 font-semibold">College Notes Creator Website (MERN stack)</span>
              </li>
              <li className="flex items-start bg-green-50 p-4 rounded-xl border border-green-100 shadow-sm transition-transform hover:scale-[1.02]">
                <span className="text-green-500 font-bold mr-3 mt-1">✓</span>
                <span className="text-gray-800 font-semibold">E-commerce Website (MERN)</span>
              </li>
              <li className="flex items-start bg-green-50 p-4 rounded-xl border border-green-100 shadow-sm transition-transform hover:scale-[1.02]">
                <span className="text-green-500 font-bold mr-3 mt-1">✓</span>
                <span className="text-gray-800 font-semibold">Code Fixer AI Website (MERN + Gemini API)</span>
              </li>
              <li className="flex items-start bg-green-50 p-4 rounded-xl border border-green-100 shadow-sm transition-transform hover:scale-[1.02]">
                <span className="text-green-500 font-bold mr-3 mt-1">✓</span>
                <span className="text-gray-800 font-semibold">Programming Error Solver Website (MERN)</span>
              </li>
            </ul>
            <div className="flex flex-wrap gap-4 mt-8 pt-6 border-t border-gray-100">
              <a href="https://www.youtube.com/@Ataurtechbca" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800 font-medium">
                YouTube
              </a>
              <a href="https://www.facebook.com/profile.php?id=100075557272259" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">
                Facebook
              </a>
              <a href="https://www.instagram.com/ataurway/" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 font-medium">
                Instagram
              </a>
              <a href="https://github.com/Ataur78615" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-gray-700 font-medium">
                GitHub
              </a>
              <a href="https://vercel.com/md-ataur-ansaris-projects" target="_blank" rel="noopener noreferrer" className="group">
                <div className="h-6 w-6 overflow-hidden rounded-full border border-gray-200 transition-all duration-300 group-hover:scale-110">
                  <img
                    src="/img/brand-logo.jpg"
                    alt="Ataur Agency"
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
