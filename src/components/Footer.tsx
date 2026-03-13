"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] text-white pt-24 pb-12 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">

          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8 col-span-1 md:col-span-2 lg:col-span-1"
          >
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-xl overflow-hidden border-2 border-blue-500/30 p-0.5 bg-white/5 backdrop-blur-sm shadow-xl">
                <img src="/img/brand-logo.jpg" alt="Ataur Agency" className="w-full h-full object-cover rounded-lg" />
              </div>
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 tracking-tight">
                Ataur Agency
              </h3>
            </div>

            <div className="space-y-4">
              <p className="text-gray-400 leading-relaxed text-sm lg:text-base">
                <span className="text-white font-semibold">Digital Growth & Security Partner.</span> We help Hotels, Retail Brands, Startups, and Growing Businesses generate more leads and sales through high-converting ads and secure digital solutions.
              </p>
              <p className="text-blue-400 font-medium italic text-sm">
                Grow faster. Stay secure. Convert better.
              </p>
            </div>

            <div className="flex items-center space-x-2 text-green-400 font-bold bg-green-500/5 border border-green-500/20 px-4 py-3 rounded-2xl w-fit">
              <span className="text-xl">📲</span>
              <span className="text-sm">WhatsApp: 7250570798</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-white font-bold mb-8 flex items-center text-lg">
              <span className="w-1.5 h-6 bg-blue-500 rounded-full mr-3 shadow-[0_0_15px_rgba(59,130,246,0.5)]"></span>
              Navigation
            </h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Projects', 'Services', 'Terms', 'Career', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    href={item === 'Home' ? '/' : item === 'Terms' ? '/terms' : item === 'Career' ? '/careers' : `/#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-all duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-blue-500 mr-0 group-hover:mr-2 transition-all"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-white font-bold mb-8 flex items-center text-lg">
              <span className="w-1.5 h-6 bg-green-500 rounded-full mr-3 shadow-[0_0_15px_rgba(34,197,94,0.5)]"></span>
              Connect
            </h4>
            <ul className="space-y-6">
              <li className="flex items-start group">
                <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform border border-blue-500/20">
                  <span className="text-xl">📧</span>
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Email Agency</p>
                  <a href="mailto:atauragency@gmail.com" className="text-gray-300 hover:text-blue-400 transition-colors break-all">
                    atauragency@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start group">
                <div className="w-10 h-10 bg-green-500/10 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform border border-green-500/20">
                  <span className="text-xl">📱</span>
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Direct Call/WA</p>
                  <a href="tel:+917250570798" className="text-gray-300 hover:text-green-400 transition-colors">
                    +91 7250570798
                  </a>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Social Presence */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-white font-bold mb-8 flex items-center text-lg">
              <span className="w-1.5 h-6 bg-purple-500 rounded-full mr-3 shadow-[0_0_15px_rgba(168,85,247,0.5)]"></span>
              Social Media
            </h4>
            <div className="flex flex-wrap gap-4">
              {[
                { name: 'YT', color: 'hover:bg-red-600', link: 'https://www.youtube.com/@Ataurtechbca' },
                { name: 'FB', color: 'hover:bg-blue-600', link: 'https://www.facebook.com/profile.php?id=100075557272259' },
                { name: 'IG', color: 'hover:bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600', link: 'https://www.instagram.com/atauragency?igsh=NGg5ZWRmeXBxMHhm' },
                { name: 'GH', color: 'hover:bg-gray-700', link: 'https://github.com/Ataur78615' },
                { name: 'LI', color: 'hover:bg-blue-700', link: 'https://www.linkedin.com/in/md-ataur-ansari-b18790271/recent-activity/all/' }
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-sm font-bold transition-all duration-300 ${social.color} hover:scale-110 hover:-translate-y-1 hover:shadow-2xl`}
                >
                  {social.name}
                </a>
              ))}
              <a
                href="https://vercel.com/md-ataur-ansaris-projects"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center p-2.5 hover:scale-110 hover:-translate-y-1 transition-all duration-300 box-content border border-white/10"
              >
                <img src="/img/brand-logo.jpg" alt="Ataur Agency" className="w-full h-full object-cover rounded-lg" />
              </a>
            </div>

            <div className="mt-8 p-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
              <p className="text-xs text-gray-500 font-medium italic">
                "Building the future of digital presence, one project at a time."
              </p>
            </div>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 text-center md:text-left">
          <p className="text-gray-500 text-sm font-medium">
            &copy; {currentYear} <span className="text-gray-300">Ataur Agency.</span> All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-xs font-bold uppercase tracking-widest text-gray-600">
            <span className="hover:text-blue-500 transition-colors cursor-pointer">Security Audited</span>
            <span className="hover:text-green-500 transition-colors cursor-pointer">Privacy First</span>
            <span className="hover:text-purple-500 transition-colors cursor-pointer">Fast Deployment</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
