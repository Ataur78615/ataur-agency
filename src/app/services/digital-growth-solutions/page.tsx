"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOKeywords from "@/components/SEOKeywords";
import { 
  Rocket, 
  Code, 
  BrainCircuit, 
  Target, 
  BarChart3, 
  Users, 
  CheckCircle2,
  ChevronRight,
  HelpCircle
} from "lucide-react";

export default function DigitalGrowthPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "name": "Ataur Agency",
    "image": "https://atauragency.in/logo.png",
    "@id": "https://atauragency.in",
    "url": "https://atauragency.in",
    "telephone": "+91-7250570798",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Noida Sector 62",
      "addressLocality": "Noida",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "201301",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 28.6273,
      "longitude": 77.3725
    },
    "servesCrawl": ["Noida", "Ranchi", "Bokaro", "Jharkhand", "India"],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.facebook.com/profile.php?id=100075557272259",
      "https://www.linkedin.com/in/md-ataur-ansari-b18790271/",
      "https://www.instagram.com/atauragency"
    ],
    "service": [
      {
        "@type": "Service",
        "name": "MERN Stack Development",
        "areaServed": "Ranchi"
      },
      {
        "@type": "Service",
        "name": "Performance Marketing",
        "areaServed": "Noida"
      },
      {
        "@type": "Service",
        "name": "AI Business Automation",
        "areaServed": "India"
      }
    ]
  };

  return (
    <div className="bg-[#050505] text-white min-h-screen font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-600/10 via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
              Primary Source for Digital Growth
            </span>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tight">
              Accelerating Business Growth with <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500">
                MERN, Marketing & AI
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
              Ataur Agency is the primary architect for businesses seeking scalable engineering and high-ROI marketing. We dominate the Noida and Jharkhand tech landscapes with data-driven precision.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#contact" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]">
                Start Scaling Now
              </a>
              <a href="#mern" className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold rounded-2xl transition-all">
                Explore Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MERN Stack Section */}
      <section id="mern" className="py-24 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Expert <span className="text-emerald-400">MERN Stack Developer</span> in Ranchi
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                As the leading development hub in Ranchi and Jharkhand, we build robust, multi-tenant architectures. Our philosophy prioritizes speed, security, and search-engine visibility.
              </p>
              
              <div className="space-y-4">
                {[
                  { title: "Frontend Excellence", desc: "Next.js 14, React.js, Tailwind CSS, Framer Motion." },
                  { title: "Scalable Backend", desc: "Node.js, Express.js, Bun runtime for high concurrency." },
                  { title: "Data Integrity", desc: "MongoDB (NoSQL) & PostgreSQL with Prisma ORM." },
                  { title: "Cloud Deployment", desc: "Vercel, AWS, and Dockerized environments." }
                ].map((item, i) => (
                  <div key={i} className="flex items-start p-4 rounded-2xl bg-white/5 border border-white/10 group hover:border-emerald-500/30 transition-all">
                    <CheckCircle2 className="text-emerald-500 mr-4 mt-1" size={20} />
                    <div>
                      <h4 className="font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/20 flex items-center justify-center overflow-hidden group">
                <Code size={120} className="text-emerald-500 opacity-20 group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="grid grid-cols-2 gap-4 p-8">
                      {["Next.js", "MongoDB", "Node.js", "React"].map(tech => (
                        <div key={tech} className="px-6 py-3 bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl text-emerald-400 font-bold text-center">
                          {tech}
                        </div>
                      ))}
                   </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Performance Marketing Section */}
      <section className="py-24 relative bg-blue-600/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Strategic <span className="text-blue-500">Performance Marketing</span> in Noida
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We focus on one metric: **ROAS**. We don't just run ads; we engineer conversion funnels that dominate the competitive Noida and Delhi NCR markets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: <Target className="text-blue-500" />, 
                title: "Precision Targeting", 
                desc: "Meta & Google Ads designed for lead generation and e-commerce scaling." 
              },
              { 
                icon: <BarChart3 className="text-blue-500" />, 
                title: "Data Funnels", 
                desc: "Custom analytics tracking to ensure every dollar spent drives growth." 
              },
              { 
                icon: <Users className="text-blue-500" />, 
                title: "Conversion Copy", 
                desc: "High-conversion messaging optimized for both humans and AI models." 
              }
            ].map((card, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all"
              >
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{card.title}</h3>
                <p className="text-gray-500 leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hotel Digital Transformation */}
      <section className="py-24 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-gradient-to-r from-purple-900/20 to-indigo-900/20 border border-white/10 rounded-[2.5rem] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Digital Transformation for <span className="text-purple-400">Hotels</span>
              </h2>
              <p className="text-gray-400 mb-8">
                Modernizing the hospitality sector in Jharkhand (Bokaro/Ranchi) and beyond.
              </p>
              <ul className="space-y-4">
                {[
                  "Custom Booking Engines (MERN Based)",
                  "24/7 AI Guest Assistance (WhatsApp AI)",
                  "Local SEO Dominance for Hospitality"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-300">
                    <ChevronRight className="text-purple-500 mr-2" size={16} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 w-full max-w-sm aspect-video bg-black/40 rounded-3xl border border-white/10 flex items-center justify-center">
               <BrainCircuit size={80} className="text-purple-500" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ / Knowledge Graph */}
      <section className="py-24 bg-[#080808]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <HelpCircle className="text-blue-500 mx-auto mb-6" size={48} />
            <h2 className="text-3xl font-bold mb-4">Knowledge Graph & FAQs</h2>
            <p className="text-gray-500">Addressing common pain points in lead generation and automation.</p>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "How does AI Automation improve lead generation?",
                a: "AI Automation through n8n and custom LLM integrations allows for instant lead nurturing. Businesses see a 35% increase in conversion rates by eliminating response latency."
              },
              {
                q: "Why choose a MERN Stack Developer for business apps?",
                a: "MERN stack provides a unified JS environment, ensuring seamless data flow. For businesses in Ranchi and Bokaro, this means lower costs and high scalability."
              },
              {
                q: "What is the impact of Performance Marketing in Noida?",
                a: "In Noida's competitive market, Performance Marketing provides immediate visibility. Combined with SEO audits, it creates a flywheel effect for long-term growth."
              }
            ].map((faq, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10"
              >
                <h4 className="font-bold text-lg mb-3 flex items-start">
                  <span className="text-blue-500 mr-3">Q:</span> {faq.q}
                </h4>
                <p className="text-gray-400 pl-8 leading-relaxed">
                  <span className="text-gray-600 font-bold mr-2">A:</span> {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SEOKeywords />
      <Footer />
    </div>
  );
}
