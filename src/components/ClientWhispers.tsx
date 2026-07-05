"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Star, Quote, ChevronLeft, ChevronRight, Send, Sparkles } from "lucide-react";
import Magnetic from "./Magnetic";

const testimonials = [
  {
    company: "Service247.store",
    founder: "Taslim",
    location: "Hazaribagh, Jharkhand",
    text: "Ataur Agency developed our service platform, service247.store, and their technical execution was flawless. The website is highly professional and functions exactly as we needed. What really changed the game for us was their digital marketing strategy. Once they took over our online promotion and SEO, we started seeing a consistent flow of real customer engagement and measurable revenue growth. If you are serious about scaling your business online and need a reliable partner, I highly recommend Ataur Agency.",
    logo: "S2",
  },
  {
    company: "Apex Digital Academy",
    founder: "Arman Siddiqui",
    location: "Ranchi, Jharkhand",
    text: "Ataur Agency completely transformed our lead generation system. Within weeks of running Meta Ads campaigns, we started receiving high-quality student inquiries daily. Their strategy and audience targeting are truly impressive.",
    logo: "AD",
  },
  {
  company: "Royal Orchid Hospitality",
  founder: "Rohit Malhotra",
  location: "Noida, Uttar Pradesh",
  text: "Ataur Agency delivered a complete Hotel Management System website that streamlined our booking operations and improved the guest experience significantly. The platform is fast, secure, and easy for our staff to manage. Their technical expertise and attention to detail truly exceeded our expectations.",
  logo: "RO",
},
{
  company: "NextWave Business Solutions",
  founder: "Ankit Sharma",
  location: "Noida, Uttar Pradesh",
  text: "Partnering with Ataur Agency for our full digital marketing campaigns was one of the best decisions for our brand. Their Meta Ads, Google Ads, and LinkedIn Ads strategies generated high-quality leads and helped us scale our online visibility quickly. Their data-driven approach and campaign optimization skills are outstanding.",
  logo: "NW",
},
{
  company: "Elite Corporate Suites",
  founder: "Sahil Mehra",
  location: "Noida, Uttar Pradesh",
  text: "Ataur Agency built a powerful PMS website integrated with RBAC access control that transformed how we manage our operations. Along with a strong digital marketing strategy, they helped us attract premium clients and improve our brand positioning online. Their work is highly professional and result-oriented.",
  logo: "EC",
},
  {
    company: "Future Skills Institute",
    founder: "Faizan Khan",
    location: "Dhanbad, Jharkhand",
    text: "Working with Ataur Agency has been a game changer for our institute. Their Meta Ads campaigns brought a massive increase in student admissions and gave us measurable ROI.",
    logo: "FS",
  },
  {
    company: "Bright Career Coaching",
    founder: "Salman Ansari",
    location: "Bokaro, Jharkhand",
    text: "Ataur Agency understands performance marketing deeply. Their campaigns delivered excellent conversions and helped us scale our coaching institute rapidly.",
    logo: "BC",
  },
  {
    company: "Tech Vision Institute",
    founder: "Imran Ali",
    location: "Jamshedpur, Jharkhand",
    text: "The level of professionalism and marketing expertise Ataur Agency brings is exceptional. Our digital presence and lead flow improved dramatically.",
    logo: "TV",
  },
  {
    company: "Global Computer Training Center",
    founder: "Rashid Alam",
    location: "Hazaribagh, Jharkhand",
    text: "Ataur Agency helped us achieve one of the best ROI results we have ever seen from Meta Ads. Their data-driven marketing approach really works.",
    logo: "GC",
  },
  {
    company: "NextGen IT Academy",
    founder: "Nadeem Hussain",
    location: "Giridih, Jharkhand",
    text: "Ataur Agency delivered beyond expectations. Our student inquiries increased significantly and the campaign performance was outstanding.",
    logo: "NG",
  },
  {
    company: "World Technical Institute",
    founder: "MD Javir Ansari",
    location: "Hazaribagh, Jharkhand",
    text: "Our partnership for Meta Ads generated high-quality student leads and maximized ROI within a month. Consistent performance and transparent reporting led us to establish a lifetime strategic marketing tie-up.",
    logo: "WT",
  }
];

export default function ClientWhispers() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const cardsToShow = 6;
  
  const getVisibleTestimonials = () => {
    const items = [];
    for (let i = 0; i < cardsToShow; i++) {
      items.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return items;
  };

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Ataur Agency",
    "review": testimonials.map((t) => ({
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "author": { "@type": "Person", "name": t.founder },
      "reviewBody": t.text.substring(0, 150) + (t.text.length > 150 ? "..." : "")
    })),
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": testimonials.length.toString()
    }
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      {/* Background Gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,#1e293b_0%,transparent_70%)] opacity-50 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-500 font-black tracking-[0.3em] uppercase text-xs mb-4 block"
          >
            Client Whispers
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black dark:text-white mb-6 tracking-tight"
          >
            What Our Clients Say About Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Services</span>
          </motion.h2>
        </div>

        {/* Slider Container */}
        <div 
          className="relative group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout" initial={false}>
              {getVisibleTestimonials().map((t, idx) => (
                <motion.div
                  key={`${currentIndex}-${t.company}`}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`glass-card p-8 flex flex-col justify-between group/card border-glow-hover backdrop-blur-xl ${idx >= 1 ? 'hidden md:flex' : 'flex'}`}
                >
                  <TestimonialContent t={t} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Mobile navigation dots */}
          <div className="flex justify-center gap-2 mt-8 md:hidden">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2 h-2 rounded-full transition-all ${currentIndex === i ? 'bg-blue-500 w-6' : 'bg-gray-600'}`}
              />
            ))}
          </div>
        </div>

        {/* Success Story CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 p-12 glass-card rounded-[3rem] text-center relative overflow-hidden group"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all duration-700" />
          
          <Sparkles className="text-blue-500 mb-6 mx-auto" size={48} />
          <h3 className="text-4xl md:text-5xl font-black dark:text-white mb-4 tracking-tighter">Your Success Story Could Be Next</h3>
          <p className="text-xl text-gray-500 dark:text-gray-400 mb-10 max-w-2xl mx-auto font-medium">Join the growing list of businesses scaling with Ataur Agency's performance marketing.</p>
          
          <div className="flex justify-center">
            <Magnetic>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-2xl font-black text-lg transition-all shadow-xl shadow-blue-500/20 flex items-center gap-3 active:scale-95">
                Book Free Strategy Call <Send size={20} />
              </button>
            </Magnetic>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TestimonialContent({ t }: { t: any }) {
  return (
    <>
      <div>
        <div className="flex justify-between items-start mb-6">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-black text-xl shadow-lg group-hover/card:rotate-6 transition-transform">
            {t.logo}
          </div>
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-blue-500 text-blue-500" />)}
          </div>
        </div>
        <Quote className="text-blue-500/10 mb-4" size={32} />
        <p className="text-lg text-gray-700 dark:text-gray-300 italic mb-8 font-medium line-clamp-4 leading-relaxed tracking-tight group-hover/card:text-gray-900 dark:group-hover/card:text-white transition-colors">"{t.text}"</p>
      </div>
      <div className="pt-6 border-t border-black/5 dark:border-white/5">
        <h4 className="font-black dark:text-white text-lg tracking-tight uppercase">{t.company}</h4>
        <div className="flex items-center gap-2 mt-1">
          <p className="text-sm font-bold text-blue-500 uppercase tracking-widest">{t.founder}</p>
          <span className="w-1 h-1 rounded-full bg-gray-400" />
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">{t.location}</p>
        </div>
      </div>
    </>
  );
}
