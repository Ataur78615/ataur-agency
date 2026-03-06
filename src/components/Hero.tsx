"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

const carouselImages = [
  "/img/brand-logo.jpg",
  "/img/AtaAgen.jpg",
  "/img/Ataur Agency slider 1.jpg",
  "/img/Ataur Agency slider 4.jpg",
  "/img/Ataur Agency slider 5.jpg",
  "/img/Ataur Agency temp.png",
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
    }, 3000);
    return () => clearInterval(timer);
  }, []);
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900"></div>

        {/* Animated Particles/Shapes */}
        <div className="absolute inset-0">
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-purple-500 rounded-full opacity-30 animate-bounce" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-green-500 rounded-full opacity-25 animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/3 right-10 w-24 h-24 bg-indigo-500 rounded-full opacity-15 animate-bounce" style={{ animationDelay: '0.5s' }}></div>

          {/* Code-like Elements */}
          <div className="absolute top-16 right-1/4 text-white opacity-10 text-6xl animate-pulse" style={{ animationDelay: '1.5s' }}>{'{ }'}</div>
          <div className="absolute bottom-20 left-16 text-white opacity-10 text-4xl animate-bounce" style={{ animationDelay: '2.5s' }}>{'</>'}</div>
          <div className="absolute top-1/2 left-8 text-white opacity-10 text-5xl animate-pulse" style={{ animationDelay: '0.8s' }}>{'⚛️'}</div>
        </div>

        {/* Moving Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-5 animate-pulse transform -skew-x-12"></div>
      </div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>

      {/* Full-Screen Image Carousel */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={activeImage}
            src={carouselImages[activeImage]}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* Overlay for depth */}
        <div className="absolute inset-0 bg-black/30 z-20"></div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex gap-3 z-30">
          {carouselImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveImage(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${activeImage === idx ? 'bg-white w-8' : 'bg-white/40 hover:bg-white/60'}`}
            />
          ))}
        </div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-30 container mx-auto px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            Best Digital Marketing Agency in <span className="text-blue-400">Patna & Pan India</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-medium mb-8 text-blue-100">
            Ataur Agency provides result-driven SEO, PPC, social media marketing, and modern web development using React, Node.js, Next.js for businesses across Jharkhand, Noida, Delhi.
          </h2>
          
          <div className="bg-black/40 backdrop-blur-md p-6 md:p-8 rounded-3xl border border-white/10 mb-10">
            <p className="text-lg md:text-xl leading-relaxed text-gray-200">
              Ataur Agency aapka trusted partner hai best digital marketing services ke liye Patna, Noida, Delhi, Jharkhand aur pan India. Humare SEO experts high-traffic keywords target karte hain, PPC campaigns maximum ROI dete hain, aur React/Node.js web development modern, fast websites banate hain. Social media marketing aur UGC/CGI ads se aapke business ko explosive growth milega.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105 shadow-xl">
              Get Started Now
            </Link>
            <Link href="/services" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105">
              Explore Services
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
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
