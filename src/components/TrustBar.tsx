"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
  { name: "World Technical Institute", src: "/img/Ataur Agency.png" }, // Using agency logo or placeholder for now
  { name: "Hotel UP Wala", src: "/img/hotel-up-wala-logo.jpeg" },
  { name: "B2B Trips", src: "https://www.b2btrips.in/favicon.ico" }, // Fallback to favicon if no logo
  { name: "Brand 3", src: "/img/brand-logo.jpg" },
  { name: "Ataur Agency", src: "/img/Ataur Agency.png" },
  { name: "Client 5", src: "/img/Ataur Agnecy slider 2.jpg" },
  { name: "Client 6", src: "/img/ataur agen2.png" },
];

export default function TrustBar() {
  return (
    <div className="py-12 bg-white/5 dark:bg-black/5 backdrop-blur-sm border-y border-black/5 dark:border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
         <p className="text-xs font-black uppercase tracking-[0.3em] text-gray-400 dark:text-gray-500">Trusted by Forward-Thinking Brands</p>
      </div>
      
      <div className="flex relative items-center">
        {/* Gradients for smooth fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-12 items-center whitespace-nowrap"
          animate={{
            x: [0, -1035], // Adjust based on content width
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {/* Double the logos for seamless loop */}
          {[...logos, ...logos, ...logos].map((logo, idx) => (
            <div key={idx} className="flex items-center gap-4 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer">
              <div className="w-12 h-12 relative rounded-xl overflow-hidden bg-white shadow-sm">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  className="object-contain p-2"
                />
              </div>
              <span className="text-xl font-black text-gray-900 dark:text-white tracking-tighter uppercase">{logo.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
