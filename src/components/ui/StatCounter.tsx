"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";

interface StatCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
  icon?: React.ReactNode;
}

export default function StatCounter({ end, suffix = "", prefix = "", label, duration = 2.5, icon }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest));

  useEffect(() => {
    if (isInView) {
      animate(count, end, { duration, ease: "easeOut" });
    }
  }, [isInView, count, end, duration]);

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="glass-card p-8 rounded-[2rem] border-glow-hover flex flex-col items-center justify-center text-center relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300 bg-white/5 border border-white/10"
    >
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-colors duration-700 pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-colors duration-700 pointer-events-none" />
      
      <div className="relative z-10 flex flex-col items-center">
        {icon && (
          <div className="mb-4 text-gray-400 group-hover:text-blue-400 transition-colors duration-300">
            {icon}
          </div>
        )}
        <div className="flex items-baseline justify-center gap-1 mb-3">
          {prefix && <span className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">{prefix}</span>}
          <motion.span className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500 tracking-tighter">
            {rounded}
          </motion.span>
          {suffix && <span className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">{suffix}</span>}
        </div>
        <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">{label}</p>
      </div>
    </motion.div>
  );
}
