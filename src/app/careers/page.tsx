"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  TrendingUp, 
  Code, 
  Bot, 
  ShieldCheck, 
  Video, 
  Rocket, 
  CheckCircle2, 
  ArrowRight,
  Mail,
  Smartphone,
  Briefcase
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const JobRole = ({ title, description, responsibilities, skills, icon: Icon, color }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-blue-500/30 transition-all group relative overflow-hidden h-full"
  >
    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${color} opacity-10 rounded-full -mr-16 -mt-16 blur-2xl group-hover:scale-150 transition-transform duration-700`} />
    
    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mb-6 shadow-xl`}>
      <Icon className="w-8 h-8 text-white" />
    </div>
    
    <h3 className="text-xl sm:text-2xl font-black text-white mb-4">{title}</h3>
    <p className="text-gray-400 text-sm mb-6 leading-relaxed">{description}</p>
    
    <div className="space-y-6">
      <div>
        <h4 className="text-[10px] font-black text-blue-400 uppercase tracking-[0.2em] mb-3">Responsibilities</h4>
        <ul className="space-y-2">
          {responsibilities.map((item: string, idx: number) => (
            <li key={idx} className="flex items-center gap-2 text-xs text-gray-300">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
      
      <div>
        <h4 className="text-[10px] font-black text-purple-400 uppercase tracking-[0.2em] mb-3">Skills Required</h4>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill: string, idx: number) => (
            <span key={idx} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-[10px] font-bold text-gray-400">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

export default function CareerPage() {
  const jobs = [
    {
      title: "Performance Advertising Specialist",
      description: "Help brands scale through high-converting advertising campaigns.",
      responsibilities: [
        "Manage Meta Ads and Google Ads campaigns",
        "Optimize campaigns for lead generation and ROI",
        "Create performance-focused ad strategies",
        "Analyze ad performance and improve conversion rates"
      ],
      skills: ["Meta Ads", "Google Ads", "LinkedIn Ads", "Lead Generation", "WhatsApp Marketing"],
      icon: TrendingUp,
      color: "from-blue-600 to-indigo-600"
    },
    {
      title: "Web Design & Development (MERN / Next.js)",
      description: "Build modern, responsive, and high-performance websites for startups and businesses.",
      responsibilities: [
        "Develop responsive websites and landing pages",
        "Build full-stack applications using modern frameworks",
        "Optimize websites for performance and SEO",
        "Work on e-commerce and CRM systems"
      ],
      skills: ["MERN Stack", "Next.js", "E-commerce Development", "CRM Systems", "Responsive UI/UX"],
      icon: Code,
      color: "from-purple-600 to-pink-600"
    },
    {
      title: "AI & Automation Specialist",
      description: "Automate business workflows and build intelligent systems.",
      responsibilities: [
        "Build AI automation workflows",
        "Integrate APIs and automation tools",
        "Create WhatsApp automation systems",
        "Develop lead nurturing automation"
      ],
      skills: ["WhatsApp API", "Automation Tools", "Workflow Automation", "AI Integration", "n8n Automation"],
      icon: Bot,
      color: "from-amber-500 to-orange-600"
    },
    {
      title: "Cyber Security Specialist",
      description: "Protect businesses from vulnerabilities and digital threats.",
      responsibilities: [
        "Perform penetration testing",
        "Conduct vulnerability assessments",
        "Identify security risks in web applications",
        "Provide detailed security reports"
      ],
      skills: ["Penetration Testing", "Security Audits", "Web Application Security", "Ethical Hacking"],
      icon: ShieldCheck,
      color: "from-emerald-500 to-teal-600"
    },
    {
      title: "UGC & CGI Ads Creator",
      description: "Create engaging video advertisements and marketing content.",
      responsibilities: [
        "Create UGC style ad videos",
        "Develop CGI advertising visuals",
        "Produce high-converting social media ads",
        "Work with brands on video marketing campaigns"
      ],
      skills: ["UGC Content Creation", "CGI Ads", "Video Marketing", "Social Media Ads"],
      icon: Video,
      color: "from-red-500 to-rose-600"
    },
    {
      title: "Enterprise Systems Developer",
      description: "Build complex systems for growing businesses.",
      responsibilities: [
        "Develop multi-tenant platforms",
        "Build admin dashboards and management systems",
        "Implement RBAC security models",
        "Create scalable enterprise solutions"
      ],
      skills: ["RBAC Security", "Multi-Tenant Systems", "Admin Panels", "Enterprise Software Development"],
      icon: Rocket,
      color: "from-cyan-500 to-blue-600"
    }
  ];

  return (
    <div className="bg-[#050505] min-h-screen selection:bg-blue-500/30 selection:text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-black uppercase tracking-[0.3em] mb-8 inline-block">
              We Are Hiring
            </span>
            <h1 className="text-4xl sm:text-6xl font-black text-white mb-8 leading-[1.1]">
              Careers at <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Ataur Agency</span>
            </h1>
            <p className="text-gray-400 text-lg sm:text-xl font-medium leading-relaxed mb-10">
              Build the Future of Digital Growth With Us. We help businesses grow through advanced technology, marketing, and security.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#openings" className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all flex items-center gap-2 shadow-xl shadow-blue-600/20 active:scale-95">
                View Openings <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#apply" className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-2xl font-bold hover:bg-white/10 transition-all active:scale-95">
                Apply Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-5xl font-black text-white mb-8">
                Why Work With <br /> <span className="text-blue-500">Ataur Agency?</span>
              </h2>
              <div className="space-y-6">
                {[
                  "Work on real-world international projects",
                  "Flexible remote work environment",
                  "Performance-based payments",
                  "Opportunity to work with startups and businesses",
                  "Grow your portfolio with professional projects"
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-blue-500" />
                    </div>
                    <span className="text-gray-300 font-bold">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600/20 blur-[100px] rounded-full" />
              <div className="relative bg-white/5 border border-white/10 rounded-[3rem] p-10 backdrop-blur-sm">
                <Briefcase className="w-20 h-20 text-blue-500 mb-8" />
                <p className="text-2xl font-serif italic text-white leading-relaxed mb-6">
                  "We are expanding rapidly and looking for skilled freelancers, developers, and creators who want to build the future."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gray-800 border border-white/10 overflow-hidden">
                    <img src="/img/brand-logo.jpg" alt="Ataur" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-white font-black uppercase text-xs tracking-widest">Team Ataur</p>
                    <p className="text-blue-500 text-[10px] font-bold">Fast-Growing Digital Agency</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Opportunities */}
      <section id="openings" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">Open Opportunities</h2>
            <p className="text-gray-400 font-medium">Join our mission to help brands scale with high-performance digital solutions.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobs.map((job, idx) => (
              <JobRole key={idx} {...job} />
            ))}
          </div>
        </div>
      </section>

      {/* Apply Section */}
      <section id="apply" className="py-32 bg-gradient-to-b from-transparent to-blue-900/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-[3rem] p-10 sm:p-20 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[80px] rounded-full -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/10 blur-[80px] rounded-full -ml-32 -mb-32" />
            
            <Rocket className="w-16 h-16 text-blue-500 mx-auto mb-8" />
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-6">📩 Apply Now</h2>
            <p className="text-gray-400 text-lg font-medium mb-12">
              We are urgently hiring talented freelancers. Send your Resume / CV through any of the following and mention the position you are applying for.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="https://wa.me/917250570798" 
                target="_blank" 
                className="flex items-center justify-center gap-3 px-10 py-5 bg-green-500 text-white rounded-2xl font-black hover:bg-green-600 transition-all shadow-xl shadow-green-500/10 active:scale-95"
              >
                <Smartphone className="w-6 h-6" /> WhatsApp
              </a>
              <a 
                href="mailto:atauragency@gmail.com" 
                className="flex items-center justify-center gap-3 px-10 py-5 bg-blue-600 text-white rounded-2xl font-black hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/10 active:scale-95"
              >
                <Mail className="w-6 h-6" /> Email CV
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
