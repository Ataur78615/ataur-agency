"use client";

import { motion } from "framer-motion";

const keywordGroups = [
  {
    title: "Global Reach",
    keywords: [
      "USA", "Australia", "Dubai", "Canada", 
      "London", "Singapore", "Europe", "Egypt",
      "Malaysia", "Pakistan", "Philippines", "Thailand",
      "UAE", "UK", "Global"
    ]
  },
  {
    title: "Major Indian Hubs",
    keywords: [
      "India", "Bangalore", "Chennai", "Delhi",
      "Hyderabad", "Kolkata", "Mumbai", "Pune",
      "Noida", "Gurgaon"
    ]
  },
  {
    title: "Regional Expertise",
    keywords: [
      "Ahmedabad", "Jaipur", "Lucknow", "Surat",
      "Vadodara", "Vizag", "Indore", "Bhopal",
      "Ranchi", "Patna", "Kochi", "Trivandrum"
    ]
  },
  {
    title: "Niche Specializations",
    keywords: [
      "Real Estate", "Doctors", "Ecommerce", "Startups",
      "Healthcare", "Luxury Brands", "Education", "Small Business",
      "Website Design", "Social Media Marketing"
    ]
  },
  {
    title: "Future Focused",
    keywords: [
      "2024 Trends", "2025 Vision", "2026 Ready",
      "Innovation", "Next-Gen Strategies"
    ]
  },
  {
    title: "IT & Tech Excellence",
    keywords: [
      "IT Solutions", "Solution Architect", "IT Consulting",
      "Cloud Solutions", "Cyber Security",
      "Enterprise IT", "Smart Solutions"
    ]
  }
];

export default function SEOKeywords() {
  return (
    <section className="bg-[#080808] py-20 relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Global Presence & <span className="text-blue-500">Service Network</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Ataur Agency is a top-rated digital partner serving businesses across the globe. From major metropolitan hubs to niche industries, we deliver excellence.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {keywordGroups.map((group, idx) => (
            <motion.div 
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-blue-400 font-bold uppercase tracking-widest text-xs flex items-center">
                <span className="w-4 h-[1px] bg-blue-500 mr-2"></span>
                {group.title}
              </h3>
              <ul className="space-y-2">
                {group.keywords.map((kw) => (
                  <li key={kw} className="text-gray-500 text-sm hover:text-gray-300 transition-colors cursor-default capitalize">
                    {kw}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative background element */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />
    </section>
  );
}

