"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Rocket, 
  Code, 
  BrainCircuit, 
  ShieldCheck, 
  Sparkles,
  Database,
  ArrowUpRight,
  Share2,
  MapPin
} from "lucide-react";

const services = [
  {
    title: "Digital Marketing Services",
    description: "Drive high-intent traffic, capture leads, and scale revenue with our result-driven digital marketing services, including advanced SEO, PPC campaigns, and social media handling.",
    icon: <Rocket size={32} />,
    tags: ["Meta & Google Ads", "SEO Services", "Social Media Growth"],
    color: "from-blue-500 to-indigo-600",
    href: "/services/performance-advertising",
    size: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Website Design & Dev Agency",
    description: "As a premier website design and development agency, we build responsive, lightning-fast custom websites, e-commerce platforms, and MERN/Next.js systems optimized for conversions.",
    icon: <Code size={32} />,
    tags: ["Next.js & React", "E-commerce", "Website Design"],
    color: "from-emerald-500 to-teal-600",
    href: "/services/web-design-development",
    size: "md:col-span-2 md:row-span-1",
  },
  {
    title: "AI & Automation",
    description: "24/7 AI agents and n8n workflow automation to nurture leads.",
    icon: <BrainCircuit size={32} />,
    tags: ["WhatsApp AI", "n8n", "LLMs"],
    color: "from-orange-500 to-red-600",
    href: "/services/ai-automation",
    size: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Cyber Security",
    description: "Penetration testing, security audits, and asset protection.",
    icon: <ShieldCheck size={32} />,
    tags: ["Audit", "VAPT", "Protection"],
    color: "from-red-500 to-pink-600",
    href: "/services/cyber-security",
    size: "md:col-span-1 md:row-span-1",
  },
  {
    title: "UGC & CGI Ads",
    description: "Immersive content and CGI ads that captivate modern audiences.",
    icon: <Sparkles size={32} />,
    tags: ["UGC", "CGI", "Viral"],
    color: "from-purple-500 to-blue-600",
    href: "/services/ugc-cgi-ads",
    size: "md:col-span-2 md:row-span-1",
  },
  {
    title: "Enterprise Systems",
    description: "Multi-tenant CRM & business management systems for growth.",
    icon: <Database size={32} />,
    tags: ["CRM", "RBAC", "SaaS"],
    color: "from-indigo-500 to-purple-600",
    href: "/services/enterprise-systems",
    size: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Social Media Handling",
    description: "Professional social media management, content creation, and growth.",
    icon: <Share2 size={32} />,
    tags: ["Instagram", "Meta", "Growth"],
    color: "from-pink-500 to-orange-500",
    href: "/services/social-media-handling",
    size: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Google Business Profile Setup",
    description: "Dominate Google Maps & Local search. Professional GMB & GMP Geo-Optimization.",
    icon: <MapPin size={32} />,
    tags: ["Google Maps", "Local SEO", "GEO Setup"],
    color: "from-blue-600 to-indigo-700",
    href: "/services/google-business-profile",
    size: "md:col-span-2 md:row-span-1",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 dark:text-blue-400 font-black tracking-widest uppercase text-xs mb-4 block">Our Expertise</span>
          <h2 className="text-5xl md:text-6xl font-black dark:text-white mb-6 tracking-tight">
            Services That Drive <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Growth</span>
          </h2>
          <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto font-medium">
            Complete Digital Growth, Automation, and Security Solutions for the Next Gen of Businesses.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${service.size} group`}
            >
              <Link
                href={service.href}
                className="block h-full glass-card p-8 group-hover:bg-white/20 dark:group-hover:bg-black/40 transition-all duration-300 border-glow-hover relative overflow-hidden flex flex-col justify-between"
              >
                {/* Background Accent */}
                <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500`} />

                <div>
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-8 shadow-lg group-hover:scale-110 transition-all duration-500 group-hover:rotate-6`}>
                    {service.icon}
                  </div>

                  <h3 className="text-2xl font-bold dark:text-white mb-4 group-hover:text-blue-500 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed font-medium">
                    {service.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100 dark:border-white/5">
                  {service.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest bg-black/5 dark:bg-white/5 text-gray-500 dark:text-gray-400">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                   <ArrowUpRight className="text-blue-500" size={24} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}