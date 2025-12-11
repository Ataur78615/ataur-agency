"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600">Passionate about creating impactful digital experiences</p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Who I Am</h3>
            <p className="text-gray-600 mb-6">
              I am MD Ataur Ansari, a skilled UGC Creator, CGI Ads Specialist, and full-stack developer specializing in MERN Stack and Next.js with TypeScript.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="text-2xl mr-4">🎥</span>
                <span className="text-gray-700">Strong UGC Creator</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-4">🎬</span>
                <span className="text-gray-700">CGI Ads Video Maker</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-4">💻</span>
                <span className="text-gray-700">MERN Stack Developer</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-4">⚛️</span>
                <span className="text-gray-700">Next.js + TypeScript Developer</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Projects Completed</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span className="text-gray-700">Stayzzy Bloom (Hotel website — Next.js + TypeScript)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span className="text-gray-700">College Notes Creator Website (MERN stack)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span className="text-gray-700">E-commerce Website (MERN)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span className="text-gray-700">Code Fixer AI Website (MERN + Gemini API)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span className="text-gray-700">Programming Error Solver Website (MERN)</span>
              </li>
            </ul>
            <div className="flex flex-wrap gap-4 mt-8">
              <a href="https://www.youtube.com/@Ataurtechbca" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800 font-medium">
                YouTube
              </a>
              <a href="https://www.facebook.com/profile.php?id=100075557272259" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">
                Facebook
              </a>
              <a href="https://www.instagram.com/ataurway/" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 font-medium">
                Instagram
              </a>
              <a href="https://github.com/Ataur78615" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-gray-700 font-medium">
                GitHub
              </a>
              <a href="https://vercel.com/md-ataur-ansaris-projects" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-700 font-medium">
                Vercel
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
