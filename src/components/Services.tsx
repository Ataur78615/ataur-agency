"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    title: "Performance Advertising",
    description: "Scale your business with high-conversion campaigns across all major platforms. Lead generation and sales focused.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="7.5 4.21 12 6.81 16.5 4.21" />
        <polyline points="7.5 19.79 7.5 14.6 3 12" />
        <polyline points="21 12 16.5 14.6 16.5 19.79" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
    tags: ["Meta Ads", "Google Ads", "LinkedIn", "WhatsApp"],
    color: "bg-blue-50 text-blue-600 border-blue-100",
  },
  {
    title: "Web Design & Dev",
    description: "Responsive, high-performance websites built with modern stacks. From E-commerce to Enterprise CRM systems.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    tags: ["MERN Stack", "Next.js", "E-commerce", "CRM"],
    color: "bg-emerald-50 text-emerald-600 border-emerald-100",
  },
  {
    title: "AI & Automation",
    description: "24/7 AI follow-up agents and workflow automation (n8n) to nurture leads and boost conversion rates.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4" /><path d="m16.2 7.8 2.9-2.9" /><path d="M18 12h4" /><path d="m16.2 16.2 2.9 2.9" /><path d="M12 18v4" /><path d="m7.8 16.2-2.9 2.9" /><path d="M2 12h4" /><path d="m7.8 7.8-2.9-2.9" /><circle cx="12" cy="12" r="3" />
      </svg>
    ),
    tags: ["WhatsApp AI", "n8n", "Lead Nurturing"],
    color: "bg-orange-50 text-orange-600 border-orange-100",
  },
  {
    title: "Cyber Security",
    description: "Protect your digital assets with advanced penetration testing, audits, and social media protection.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    tags: ["Penetration Testing", "Security Audit", "Protection"],
    color: "bg-red-50 text-red-600 border-red-100",
  },
  {
    title: "UGC & CGI Ads",
    description: "Engaging user-generated content and high-end CGI advertisements that captivate and convert.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m22 8-6 4 6 4V8Z" /><rect width="14" height="12" x="2" y="6" rx="2" ry="2" />
      </svg>
    ),
    tags: ["UGC", "CGI Ads", "Video Marketing"],
    color: "bg-purple-50 text-purple-600 border-purple-100",
  },
  {
    title: "Enterprise Systems",
    description: "Multi-tenant platforms, RBAC security, and complex business management systems for growth.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    tags: ["RBAC", "Multi-Tenant", "Admin Panels"],
    color: "bg-indigo-50 text-indigo-600 border-indigo-100",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-purple-50 rounded-full blur-3xl opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4 block">Our Expertise</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Services That Drive <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Growth</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We provide complete Digital Growth, Automation, and Security Solutions for modern businesses.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const isPerformanceAds = service.title === "Performance Advertising";

            const cardContent = (
              <>
                {/* Accent line */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.color.includes('blue') ? 'from-blue-400 to-indigo-500' : service.color.includes('emerald') ? 'from-emerald-400 to-teal-500' : service.color.includes('orange') ? 'from-orange-400 to-red-500' : service.color.includes('red') ? 'from-red-400 to-pink-500' : service.color.includes('purple') ? 'from-purple-400 to-blue-500' : 'from-indigo-400 to-purple-500'} opacity-0 group-hover:opacity-100 transition-opacity`} />

                <div className={`w-16 h-16 rounded-2xl ${service.color.split(' ')[0]} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className={service.color.split(' ')[1]}>
                    {service.icon}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-8 leading-relaxed">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.tags.map(tag => (
                    <span key={tag} className={`px-3 py-1 rounded-full text-xs font-bold ${service.color.split(' ')[0]} ${service.color.split(' ')[1]} border ${service.color.split(' ')[2]}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </>
            );

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                {isPerformanceAds ? (
                  <Link
                    href="/services/performance-advertising"
                    className="block h-full bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
                  >
                    {cardContent}
                  </Link>
                ) : service.title === "Web Design & Dev" ? (
                  <Link
                    href="/services/web-design-development"
                    className="block h-full bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
                  >
                    {cardContent}
                  </Link>
                ) : service.title === "AI & Automation" ? (
                  <Link
                    href="/services/ai-automation"
                    className="block h-full bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
                  >
                    {cardContent}
                  </Link>
                ) : service.title === "Cyber Security" ? (
                  <Link
                    href="/services/cyber-security"
                    className="block h-full bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
                  >
                    {cardContent}
                  </Link>
                ) : service.title === "UGC & CGI Ads" ? (
                  <Link
                    href="/services/ugc-cgi-ads"
                    className="block h-full bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
                  >
                    {cardContent}
                  </Link>
                ) : service.title === "Enterprise Systems" ? (
                  <Link
                    href="/services/enterprise-systems"
                    className="block h-full bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
                  >
                    {cardContent}
                  </Link>
                ) : (
                  <div className="block h-full bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
                    {cardContent}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}