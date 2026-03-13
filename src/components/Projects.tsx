"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, ChevronRight, Layout, Zap, Trophy, ShieldCheck } from "lucide-react";

const projects = [
  {
    title: "Hotel UP Wala",
    description: "Hotel Booking & listing website built with Next.js and TypeScript",
    problem: "Hotel owners struggled with manual bookings and fragmented listings in the local region.",
    solution: "A unified platform with real-time availability tracking and a seamless booking UX.",
    result: "40% increase in direct bookings and streamlined management for 50+ local hotels.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/img/hotel-up-wala-logo.jpeg",
    slug: "stayzzy-bloom",
    live: "https://www.hotelupwala.com/",
    color: "from-blue-600 to-indigo-600",
  },
  {
    title: "B2B Trips Bulk booking",
    description: "Website for Bulk Booking Of B2B Trips",
    problem: "B2B agents found it slow to book group trips with dynamic pricing and inventory.",
    solution: "A bulk-booking engine that calculates group discounts and manages sub-agent accounts.",
    result: "Reduced booking time by 70% for repeat B2B clients.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "https://images.trvl-media.com/lodging/119000000/118800000/118799200/118799109/w1150h1733x45y0-94c39c92.jpg?impolicy=fcrop&w=357&h=201&p=1&q=medium",
    slug: "b2b-trips-bulk-booking",
    live: "https://www.b2btrips.in/",
    color: "from-emerald-600 to-teal-600",
  },
  {
    title: "College Notes Creator",
    description: "MERN stack application for creating college notes",
    problem: "Students lacked a centralized, collaborative way to organize and share high-quality study notes.",
    solution: "A collaborative MERN platform with real-time editing and PDF generation.",
    result: "Successfully used by 200+ students during finals week.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    image: "https://images.paperturn.com/f/f2/Flipbook-Example.png",
    slug: "college-notes-creator",
    live: "https://ai-flipbook-notes-lib.vercel.app/",
    color: "from-orange-600 to-red-600",
  },
  {
    title: "Code Fixer AI",
    description: "AI-powered code fixing tool with Gemini API",
    problem: "Junior developers wasting hours on small syntax errors and logic bugs.",
    solution: "An AI-enhanced debugger that suggests fixes and explains the underlying issues.",
    result: "Average debugging time reduced by 50% for common React/Next.js errors.",
    tech: ["MongoDB", "Express", "React", "Node.js", "Gemini API"],
    image: "https://www.shutterstock.com/image-vector/software-testing-web-concept-flat-260nw-2562454535.jpg",
    slug: "code-fixer-ai",
    live: "#",
    color: "from-indigo-600 to-purple-600",
  },
];

const ProjectCard = ({ project, index }: { project: any, index: number }) => {
  const [activeTab, setActiveTab] = useState<"problem" | "solution" | "result">("problem");
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
      <motion.div 
        style={{ scale, opacity }}
        className="w-full max-w-6xl glass-card rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row shadow-2xl border-white/20 dark:border-white/10"
      >
        {/* Image Section */}
        <div className="md:w-1/2 relative h-64 md:h-auto overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
          <div className="absolute bottom-8 left-8">
            <div className={`p-4 rounded-2xl bg-gradient-to-br ${project.color} text-white shadow-xl mb-4 w-fit`}>
               <Trophy size={24} />
            </div>
            <h3 className="text-3xl font-black text-white drop-shadow-lg">{project.title}</h3>
          </div>
        </div>

        {/* Content Section */}
        <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-between bg-white/50 dark:bg-black/50 backdrop-blur-md">
          <div>
            {/* Tabs Toggle */}
            <div className="flex gap-2 mb-8 bg-black/5 dark:bg-white/5 p-1 rounded-2xl w-fit">
              {(["problem", "solution", "result"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${
                    activeTab === tab 
                    ? `bg-gradient-to-br ${project.color} text-white shadow-lg` 
                    : "text-gray-500 hover:bg-black/5 dark:hover:bg-white/5"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="min-h-[120px]"
              >
                <h4 className="text-sm font-black text-gray-400 uppercase tracking-[0.2em] mb-3">
                  {activeTab === "problem" ? "The Challenge" : activeTab === "solution" ? "Our Approach" : "The Impact"}
                </h4>
                <p className="text-xl md:text-2xl text-gray-800 dark:text-gray-200 font-medium leading-relaxed">
                  {project[activeTab]}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="flex flex-wrap gap-2 mt-8">
              {project.tech.map((tech: string) => (
                <span key={tech} className="px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/10">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between pt-8 border-t border-black/5 dark:border-white/5 mt-8">
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn-primary group flex items-center gap-2 text-blue-600 dark:text-blue-400 font-black">
              LIVE PREVIEW <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
            <Link href={`/projects/${project.slug}`} className="text-gray-500 dark:text-gray-400 text-sm font-bold flex items-center gap-1 hover:text-gray-900 dark:hover:text-white transition-colors">
              Case Study <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default function Projects() {
  const container = useRef(null);

  return (
    <section id="projects" className="bg-background relative" ref={container}>
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="sticky top-0 h-screen flex flex-col justify-center pointer-events-none z-0">
         <div className="max-w-7xl mx-auto px-4 w-full opacity-10">
            <h2 className="text-[15vw] font-black text-gray-900 dark:text-white uppercase leading-none tracking-tighter">
              Notable <br /> Success
            </h2>
         </div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 py-20 text-center mb-[-100px]">
           <span className="text-blue-600 dark:text-blue-400 font-black tracking-[0.3em] uppercase text-xs mb-4 block">Our Portfolio</span>
           <h2 className="text-5xl md:text-6xl font-black dark:text-white mb-6 tracking-tight">Immersive Case Studies</h2>
        </div>
        
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>

      <div className="h-[20vh]" /> {/* Spacer at the end */}
    </section>
  );
}
