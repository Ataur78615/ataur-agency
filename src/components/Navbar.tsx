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
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden bg-white border-t border-gray-100"
            >
              <div className="px-4 pt-2 pb-6 space-y-2">
                <Link href="/" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all">Home</Link>
                <Link href="/about" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all">About</Link>
                <Link href="/projects" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all">Projects</Link>
                <Link href="/services" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all">Services</Link>
                <Link href="/#pricing" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all">Pricing</Link>
                <Link href="/contact" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all">Contact</Link>
                <Link href="/admin/login" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-medium text-blue-600 hover:bg-blue-50 rounded-xl transition-all">Admin Dashboard</Link>

                <div className="pt-4 flex items-center space-x-6 justify-center border-t border-gray-50 mt-4">
                  <a href="https://www.youtube.com/@Ataurtechbca" target="_blank" rel="noopener noreferrer" className="text-2xl">📺</a>
                  <a href="https://www.facebook.com/profile.php?id=100075557272259" target="_blank" rel="noopener noreferrer" className="text-2xl">📘</a>
                  <a href="https://www.instagram.com/ataurway/" target="_blank" rel="noopener noreferrer" className="text-2xl">📷</a>
                  <a href="https://github.com/Ataur78615" target="_blank" rel="noopener noreferrer" className="text-2xl">💻</a>
                  <a href="https://www.linkedin.com/in/md-ataur-ansari-b18790271/recent-activity/all/" target="_blank" rel="noopener noreferrer" className="text-2xl">👔</a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

