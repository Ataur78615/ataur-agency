"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

const carouselImages = [
  "/img/AtaAgen.jpg",
  "/img/Ataur Agency temp.png",
  "/img/Ataur Agency.png",
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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
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
