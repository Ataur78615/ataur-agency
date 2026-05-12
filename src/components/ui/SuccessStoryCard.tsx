"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star, TrendingUp } from "lucide-react";
import Link from "next/link";

interface SuccessStoryCardProps {
  clientName: string;
  projectType: string;
  result: string;
  delay?: number;
}

export default function SuccessStoryCard({ clientName, projectType, result, delay = 0 }: SuccessStoryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="glass-card p-8 rounded-[2rem] border-glow-hover relative overflow-hidden group hover:-translate-y-2 transition-all duration-500 bg-white/5 border border-white/10 flex flex-col h-full"
    >
      <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-500 pointer-events-none">
        <ArrowRight className="text-blue-500" size={24} />
      </div>
      
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700 pointer-events-none" />

      <div className="mb-6 flex items-center justify-between relative z-10">
        <div className="flex items-center gap-2 text-yellow-500">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} className="fill-yellow-500" />
          ))}
        </div>
        <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-gray-400">
          <TrendingUp size={20} className="text-green-400" />
        </div>
      </div>

      <h3 className="text-2xl font-black text-white mb-2 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all">
        {clientName}
      </h3>
      
      <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6 w-fit">
        {projectType}
      </div>

      <p className="text-gray-400 font-medium leading-relaxed flex-1 relative z-10">
        "{result}"
      </p>
      
      <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3 group/link cursor-pointer relative z-10 w-fit">
        <span className="text-sm font-bold text-white group-hover/link:text-blue-400 transition-colors uppercase tracking-wider">Read Case Study</span>
        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover/link:bg-blue-500/20 transition-colors">
          <ArrowRight size={14} className="text-white group-hover/link:text-blue-400" />
        </div>
      </div>
    </motion.div>
  );
}
