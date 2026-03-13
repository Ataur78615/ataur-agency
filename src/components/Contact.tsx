"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send, Phone, Mail, MapPin } from "lucide-react";
import TrustBar from "./TrustBar";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#3b82f6,transparent_70%)]" />
      </div>

      <TrustBar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        {/* Contact Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-black dark:text-white mb-8 tracking-tight">Let's Build Something <span className="text-blue-500">Legendary.</span></h2>
            <p className="text-xl text-gray-500 dark:text-gray-400 mb-12 font-medium">
              Whether you need to scale your ads, automate your sales, or build an enterprise system - we're here to make it happen.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500">
                  <Mail size={24} />
                </div>
                <div>
                   <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-1">Email Us</p>
                   <p className="text-xl font-bold dark:text-white">atauragency@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-500 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-500">
                  <Phone size={24} />
                </div>
                <div>
                   <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-1">Call Us</p>
                   <p className="text-xl font-bold dark:text-white">+91 72505 70798</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-all duration-500">
                  <MapPin size={24} />
                </div>
                <div>
                   <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-1">Our Base</p>
                   <p className="text-xl font-bold dark:text-white">Jharkhand, Noida, Delhi - India</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card p-8 md:p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-500 ml-1">Your Name</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all dark:text-white font-medium"
                    placeholder="John Doe"
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-500 ml-1">Email Address</label>
                  <input
                    type="email"
                    required
                    className="w-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all dark:text-white font-medium"
                    placeholder="john@example.com"
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-500 ml-1">Your Message</label>
                <textarea
                  rows={4}
                  required
                  className="w-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all dark:text-white font-medium resize-none"
                  placeholder="Tell us about your project..."
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>
              <button
                type="submit"
                className="w-full group bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-2xl font-black transition-all flex items-center justify-center gap-3 shadow-xl shadow-blue-500/20"
              >
                INITIATE GROWTH <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
