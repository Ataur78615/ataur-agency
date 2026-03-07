"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="group flex items-center">
              <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-blue-500 shadow-md transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:border-blue-600">
                <img
                  src="/img/brand-logo.jpg"
                  alt="Ataur Agency Logo"
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="ml-3 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 tracking-tight group-hover:scale-105 transition-transform duration-300">
                Ataur-Agency
              </span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-gray-900">Home</Link>
            <Link href="/about" className="text-gray-700 hover:text-gray-900">About</Link>
            <Link href="/projects" className="text-gray-700 hover:text-gray-900">Projects</Link>
            <Link href="/services" className="text-gray-700 hover:text-gray-900">Services</Link>
            <Link href="/#pricing" className="text-gray-700 hover:text-gray-900">Pricing</Link>
            <Link href="/contact" className="text-gray-700 hover:text-gray-900">Contact</Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://www.youtube.com/@Ataurtechbca" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800">
              📺
            </a>
            <a href="https://www.facebook.com/profile.php?id=100075557272259" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
              📘
            </a>
            <a href="https://www.instagram.com/ataurway/" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800">
              📷
            </a>
            <a href="https://github.com/Ataur78615" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-gray-700">
              💻
            </a>
            <a href="https://www.linkedin.com/in/md-ataur-ansari-b18790271/recent-activity/all/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900">
              👔
            </a>
            <Link href="/admin/login" className="px-4 py-1.5 rounded-full bg-gray-900 text-white text-xs font-bold hover:bg-blue-600 transition-all shadow-md">
              Admin
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-gray-900">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, backdropFilter: "blur(0px)" }}
              animate={{ opacity: 1, height: "auto", backdropFilter: "blur(12px)" }}
              exit={{ opacity: 0, height: 0, backdropFilter: "blur(0px)" }}
              className="md:hidden overflow-hidden bg-white/90 border-t border-gray-100/50 sticky top-16 left-0 w-full shadow-2xl z-50"
            >
              <div className="px-5 pt-4 pb-12 space-y-4 max-h-[calc(100vh-5rem)] overflow-y-auto custom-scrollbar">
                <div className="grid grid-cols-1 gap-1.5">
                  {[
                    { href: "/", label: "Home", icon: "🏠", color: "blue" },
                    { href: "/about", label: "About", icon: "ℹ️", color: "indigo" },
                    { href: "/projects", label: "Projects", icon: "🚀", color: "purple" },
                    { href: "/services", label: "Services", icon: "🛠️", color: "emerald" },
                    { href: "/#pricing", label: "Pricing", icon: "💰", color: "amber" },
                    { href: "/contact", label: "Contact", icon: "📞", color: "rose" },
                  ].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-4 px-5 py-4 text-[17px] font-bold text-gray-800 hover:text-${item.color}-600 hover:bg-${item.color}-50/40 rounded-[1.5rem] transition-all border border-transparent hover:border-${item.color}-100 active:scale-[0.98]`}
                    >
                      <span className={`w-11 h-11 bg-${item.color}-50 rounded-2xl flex items-center justify-center text-xl shadow-sm border border-${item.color}-100/50`}>
                        {item.icon}
                      </span>
                      {item.label}
                    </Link>
                  ))}
                </div>

                <div className="pt-6 mt-2 border-t border-gray-100">
                  <Link 
                    href="/admin/login" 
                    onClick={() => setIsOpen(false)} 
                    className="flex items-center justify-between px-7 py-5 bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 text-white rounded-[2rem] font-black text-lg shadow-xl shadow-blue-900/10 active:scale-[0.97] transition-all group"
                  >
                    <span>Admin Dashboard</span>
                    <span className="bg-white/20 p-2.5 rounded-full group-hover:rotate-12 transition-transform">🔐</span>
                  </Link>
                </div>

                <div className="pt-8 text-center bg-gray-50/50 rounded-[2.5rem] pb-6 border border-gray-100/50">
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-6">Connect With Us</p>
                  <div className="flex items-center justify-center gap-3 px-4">
                    {[
                      { href: "https://www.youtube.com/@Ataurtechbca", icon: "📺", color: "red", bg: "bg-red-50", text: "text-red-600" },
                      { href: "https://www.facebook.com/profile.php?id=100075557272259", icon: "📘", color: "blue", bg: "bg-blue-50", text: "text-blue-600" },
                      { href: "https://www.instagram.com/ataurway/", icon: "📷", color: "pink", bg: "bg-pink-50", text: "text-pink-600" },
                      { href: "https://github.com/Ataur78615", icon: "💻", color: "gray", bg: "bg-gray-100", text: "text-gray-900" },
                      { href: "https://www.linkedin.com/in/md-ataur-ansari-b18790271/recent-activity/all/", icon: "👔", color: "linkedin", bg: "bg-blue-100", text: "text-blue-700" },
                    ].map((social, i) => (
                      <a
                        key={i}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-12 h-12 ${social.bg} ${social.text} rounded-2xl flex items-center justify-center text-xl shadow-sm hover:scale-110 active:scale-90 transition-all border border-black/5`}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </nav>
  );
}

