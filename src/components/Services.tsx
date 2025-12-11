"use client";

import { motion } from "framer-motion";

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">My Services</h2>
          <p className="text-xl text-gray-600">
            Professional services to bring your ideas to life
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: UGC Video Creation */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0 }}
            className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow border border-gray-100"
          >
            <div className="mb-6 flex justify-center">
              <div className="p-4 bg-purple-50 rounded-full text-purple-600">
                {/* Video Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 7l-7 5 7 5V7z"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              UGC Video Creation
            </h3>
            <p className="text-gray-600">
              Create engaging user-generated content videos that resonate with your audience and drive conversions.
            </p>
          </motion.div>

          {/* Card 2: CGI Advertising */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow border border-gray-100"
          >
             <div className="mb-6 flex justify-center">
              <div className="p-4 bg-indigo-50 rounded-full text-indigo-600">
                {/* Clapperboard Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/><line x1="7" y1="2" x2="7" y2="22"/><line x1="17" y1="2" x2="17" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="2" y1="7" x2="7" y2="7"/><line x1="2" y1="17" x2="7" y2="17"/><line x1="17" y1="17" x2="22" y2="17"/><line x1="17" y1="7" x2="22" y2="7"/></svg>
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              CGI-Style Advertising
            </h3>
            <p className="text-gray-600">
              Produce high-quality CGI advertisements that captivate viewers and elevate your brand image.
            </p>
          </motion.div>

          {/* Card 3: Social Media Marketing */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow border border-gray-100"
          >
            <div className="mb-6 flex justify-center">
              <div className="p-4 bg-blue-50 rounded-full text-blue-600">
                {/* Target Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 12h5" /><path d="M17 12h5" /><path d="M9 12h6" />
                  <path d="M12 2v5" /><path d="M12 17v5" />
                  <circle cx="12" cy="12" r="10" className="opacity-25" />
                  <circle cx="12" cy="12" r="4" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">
              Social Media Marketing
            </h3>
            <p className="text-gray-600 mb-6">
              Scale your business with precision targeting. We specialize in high-conversion campaigns.
            </p>
            <div className="flex justify-center gap-3">
              <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                Meta Ads
              </span>
              <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                Google Ads
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                LinkedIn
              </span>
            </div>
          </motion.div>

          {/* Card 4: MERN Stack Developer (NEW) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow border border-gray-100"
          >
            <div className="mb-6 flex justify-center">
              <div className="p-4 bg-emerald-50 rounded-full text-emerald-600">
                {/* Database/Stack Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2c5.523 0 10 2.239 10 5s-4.477 5-10 5S2 9.761 2 7s4.477-5 10-5z" />
                  <path d="M2 7v5c0 2.761 4.477 5 10 5s10-2.239 10-5V7" />
                  <path d="M2 12v5c0 2.761 4.477 5 10 5s10-2.239 10-5v-5" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">
              MERN Stack Developer
            </h3>
            <p className="text-gray-600 mb-6">
              Building robust and scalable web applications using the power of MongoDB, Express, React, and Node.js.
            </p>
            <div className="flex justify-center gap-2 flex-wrap">
              <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-full">
                MongoDB
              </span>
              <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-full">
                Expres.js
              </span>
              <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-full">
                React Js
              </span>
               <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-full">
                Node js
              </span>
            </div>
          </motion.div>

          {/* Card 5: Next.js + Typescript (NEW) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow border border-gray-100"
          >
            <div className="mb-6 flex justify-center">
              <div className="p-4 bg-slate-100 rounded-full text-slate-800">
                {/* Code/Layers Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">
              Next.js Full Stack
            </h3>
            <p className="text-gray-600 mb-6">
              High-performance, server-side rendered applications built with Next.js and type-safe TypeScript.
            </p>
            <div className="flex justify-center gap-2 flex-wrap">
              <span className="px-3 py-1 bg-slate-200 text-slate-800 text-xs font-semibold rounded-full">
                Next.js 14
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                TypeScript
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}