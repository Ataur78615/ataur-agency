"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Moon, Sun, Monitor, Menu, X, Youtube, Facebook, Instagram, Github, Linkedin, Lock, Globe, ChevronDown, SearchCheck } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [hidden, setHidden] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('en');

  const languages = [
    { code: 'zh-CN', name: 'Chinese (Mandarin)' },
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'Hindi' },
    { code: 'es', name: 'Spanish' },
    { code: 'ar', name: 'Arabic' },
    { code: 'fr', name: 'French' },
    { code: 'bn', name: 'Bengali' },
    { code: 'pt', name: 'Portuguese' },
    { code: 'ru', name: 'Russian' },
    { code: 'ur', name: 'Urdu' }
  ];

  useEffect(() => {
    if (typeof document !== 'undefined') {
      const match = document.cookie.match(/googtrans=\/[a-zA-Z-]+\/([a-zA-Z-]+)/);
      if (match) {
        setCurrentLang(match[1]);
      }
    }
  }, []);

  const changeLanguage = (langCode: string) => {
    setCurrentLang(langCode);
    setIsLangOpen(false);
    setIsOpen(false);
    const domain = window.location.hostname;
    document.cookie = `googtrans=/en/${langCode}; path=/;`;
    if (domain !== 'localhost') {
      document.cookie = `googtrans=/en/${langCode}; path=/; domain=${domain};`;
    }
    window.location.reload();
  };
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark");
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/services", label: "Services" },
    { href: "/#pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 w-full z-50 px-4 pt-4"
    >
      <div className="max-w-7xl mx-auto backdrop-blur-md bg-white/70 dark:bg-black/70 border border-white/20 dark:border-white/10 rounded-2xl shadow-xl transition-colors duration-300">
        <div className="px-4 py-2 flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="group flex items-center">
              <div className="relative h-10 w-10 overflow-hidden rounded-xl border-2 border-blue-500 shadow-md transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                <img
                  src="/img/brand-logo.jpg"
                  alt="Ataur Agency Logo"
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="ml-3 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 tracking-tight group-hover:bg-gradient-to-l transition-all duration-500">
                Ataur-Agency
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-all"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link 
              href="/free-audit" 
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-black hover:bg-blue-500 hover:text-white transition-all border border-blue-500/20 shadow-lg shadow-blue-500/5 active:scale-95"
            >
              <SearchCheck size={16} />
              Free Web Audit
            </Link>

            <div className="relative">
               <button
                 onClick={() => setIsLangOpen(!isLangOpen)}
                 className="flex items-center gap-1 p-2 rounded-xl bg-black/5 dark:bg-white/5 text-gray-700 dark:text-gray-200 hover:bg-black/10 dark:hover:bg-white/10 transition-all border border-transparent hover:border-black/5 dark:hover:border-white/5"
                 aria-label="Toggle Language"
               >
                 <Globe size={20} />
                 <ChevronDown size={14} className={`transition-transform duration-300 ${isLangOpen ? 'rotate-180' : ''}`} />
               </button>
               
               <AnimatePresence>
                 {isLangOpen && (
                   <motion.div
                     initial={{ opacity: 0, y: 10, scale: 0.95 }}
                     animate={{ opacity: 1, y: 0, scale: 1 }}
                     exit={{ opacity: 0, y: 10, scale: 0.95 }}
                     transition={{ duration: 0.2 }}
                     className="absolute top-[120%] right-0 min-w-[200px] bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-xl overflow-hidden py-2 z-50 flex flex-col"
                   >
                     {languages.map((lang) => (
                       <button
                         key={lang.code}
                         onClick={() => changeLanguage(lang.code)}
                         className={`px-4 py-2.5 text-left text-sm font-medium hover:bg-blue-50 dark:hover:bg-blue-500/10 transition-colors ${currentLang === lang.code ? 'bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'}`}
                       >
                         {lang.name}
                       </button>
                     ))}
                   </motion.div>
                 )}
               </AnimatePresence>
            </div>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-black/5 dark:bg-white/5 text-gray-700 dark:text-gray-200 hover:bg-black/10 dark:hover:bg-white/10 transition-all border border-transparent hover:border-black/5 dark:hover:border-white/5"
              aria-label="Toggle Theme"
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            
            <Link href="/admin/login" className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-bold hover:scale-105 active:scale-95 transition-all shadow-lg shadow-blue-500/20">
              <Lock size={14} />
              Admin
            </Link>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <Link 
              href="/free-audit" 
              className="p-2 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 transition-all active:scale-90"
              title="Free Web Audit"
            >
              <SearchCheck size={20} />
            </Link>
            <button
               onClick={() => setIsLangOpen(!isLangOpen)}
               className="p-2 rounded-lg bg-black/5 dark:bg-white/5 text-gray-700 dark:text-gray-200 transition-all relative"
            >
               <Globe size={20} />
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-black/5 dark:bg-white/5 text-gray-700 dark:text-gray-200 transition-all"
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 text-gray-700 dark:text-gray-200 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg transition-all"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-white/10 dark:border-white/5"
            >
              <div className="px-4 py-6 space-y-2">
                
                {/* Mobile Language Dropdown */}
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="flex flex-col gap-1 bg-black/5 dark:bg-white/5 rounded-xl p-2 mb-4"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        className={`text-left px-4 py-2 font-medium rounded-lg text-sm w-full ${currentLang === lang.code ? 'bg-blue-500/20 text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'}`}
                      >
                        {lang.name}
                      </button>
                    ))}
                  </motion.div>
                )}

                {navLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-4 px-4 py-3 text-lg font-semibold text-gray-800 dark:text-gray-100 hover:bg-blue-500/10 rounded-xl transition-all"
                  >
                    {item.label}
                  </Link>
                ))}
                
                <div className="pt-4 flex gap-2">
                  <a href="https://github.com/Ataur78615" className="p-3 bg-black/5 dark:bg-white/5 rounded-xl hover:bg-blue-500/10 transition-all">
                    <Github size={20} />
                  </a>
                  <a href="https://www.linkedin.com/in/md-ataur-ansari-b18790271/" className="p-3 bg-black/5 dark:bg-white/5 rounded-xl hover:bg-blue-500/10 transition-all">
                    <Linkedin size={20} className="text-blue-600" />
                  </a>
                  <a href="https://www.instagram.com/ataurway/" className="p-3 bg-black/5 dark:bg-white/5 rounded-xl hover:bg-blue-500/10 transition-all">
                    <Instagram size={20} className="text-pink-600" />
                  </a>
                </div>
                <div className="pt-6 space-y-3">
                  <Link 
                    href="/free-audit" 
                    onClick={() => setIsOpen(false)} 
                    className="flex items-center justify-center gap-3 px-6 py-4 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-2xl font-black text-lg border border-blue-500/20 active:scale-95 transition-all"
                  >
                    <SearchCheck size={22} />
                    Free Web Audit
                  </Link>

                  <Link 
                    href="/admin/login" 
                    onClick={() => setIsOpen(false)} 
                    className="flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl font-bold text-lg shadow-lg active:scale-95 transition-all"
                  >
                    <Lock size={20} />
                    Admin Dashboard
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}

