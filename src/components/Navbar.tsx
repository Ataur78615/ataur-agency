"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="group">
              <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-primary-500 shadow-md transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:border-primary-600">
                <img
                  src="/img/Ataur Agency.png"
                  alt="Ataur Agency Logo"
                  className="h-full w-full object-cover"
                />
              </div>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-gray-900">Home</Link>
            <Link href="/about" className="text-gray-700 hover:text-gray-900">About</Link>
            <Link href="/projects" className="text-gray-700 hover:text-gray-900">Projects</Link>
            <Link href="/services" className="text-gray-700 hover:text-gray-900">Services</Link>
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

          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-gray-900">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Home</Link>
              <Link href="/about" className="block px-3 py-2 text-gray-700 hover:text-gray-900">About</Link>
              <Link href="/projects" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Projects</Link>
              <Link href="/services" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Services</Link>
              <Link href="/contact" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Contact</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

