"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900"></div>

        {/* Animated Particles/Shapes */}
        <div className="absolute inset-0">
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-purple-500 rounded-full opacity-30 animate-bounce" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-green-500 rounded-full opacity-25 animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/3 right-10 w-24 h-24 bg-indigo-500 rounded-full opacity-15 animate-bounce" style={{animationDelay: '0.5s'}}></div>

          {/* Code-like Elements */}
          <div className="absolute top-16 right-1/4 text-white opacity-10 text-6xl animate-pulse" style={{animationDelay: '1.5s'}}>{'{ }'}</div>
          <div className="absolute bottom-20 left-16 text-white opacity-10 text-4xl animate-bounce" style={{animationDelay: '2.5s'}}>{'</>'}</div>
          <div className="absolute top-1/2 left-8 text-white opacity-10 text-5xl animate-pulse" style={{animationDelay: '0.8s'}}>{'⚛️'}</div>
        </div>

        {/* Moving Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-5 animate-pulse transform -skew-x-12"></div>
      </div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 max-w-7xl mx-auto min-h-screen flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 sm:mb-8"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Digital Marketing &
            <br className="hidden sm:block" />
            <span className="block sm:inline text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Full Stack Development
            </span>
          </h1>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 sm:mb-8">
            <span className="bg-blue-500 bg-opacity-80 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm md:text-base font-semibold whitespace-nowrap">
              MERN Stack
            </span>
            <span className="bg-purple-500 bg-opacity-80 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm md:text-base font-semibold whitespace-nowrap">
              Next.js
            </span>
            <span className="bg-green-500 bg-opacity-80 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm md:text-base font-semibold whitespace-nowrap">
              UGC/CGI Ads
            </span>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-2"
        >
          Transform your business with cutting-edge digital marketing strategies and
          powerful full-stack web applications built with MERN and Next.js technologies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12"
        >
          <a
            href="https://wa.me/7250570798"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base whitespace-nowrap"
          >
            🚀 Start Your Project
          </a>
          <Link
            href="/projects"
            className="bg-white bg-opacity-10 hover:bg-opacity-20 text-white border-2 border-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 backdrop-blur-sm text-sm sm:text-base whitespace-nowrap"
          >
            View Portfolio
          </Link>
        </motion.div>

        {/* Services Preview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto px-2"
        >
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">📱</div>
            <h3 className="text-white font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Digital Marketing</h3>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">Social media campaigns, SEO, content marketing</p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">⚛️</div>
            <h3 className="text-white font-semibold mb-1 sm:mb-2 text-sm sm:text-base">MERN Stack</h3>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">MongoDB, Express, React, Node.js applications</p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 sm:col-span-2 lg:col-span-1">
            <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">🚀</div>
            <h3 className="text-white font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Next.js</h3>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">Server-side rendering, SEO-optimized websites</p>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
