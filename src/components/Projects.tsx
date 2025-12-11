"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "Stayzzy Bloom",
    description: "Hotel website built with Next.js and TypeScript",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/715096269.jpg?k=e8422d11e731649ea72da6b8f7e569d8882c5900321f71010f0e3beeb4621881&o=",
    slug: "stayzzy-bloom",
    live: "https://www.stayzzy.com/",
    source: "#",
  },
  {
    title: "B2B Trips Bulk booking",
    description: "Website for Bulk Booking Of B2B Trips",
    tech: ["Next.js", "typeScript", "Tailwind css"],
    image: "https://images.trvl-media.com/lodging/119000000/118800000/118799200/118799109/w1150h1733x45y0-94c39c92.jpg?impolicy=fcrop&w=357&h=201&p=1&q=medium",
    slug: "b2b-trips-bulk-booking",
    live: "https://www.b2btrips.in/",
    source: "#",
  },
  {
    title: "College Notes Creator",
    description: "MERN stack application for creating college notes",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    image: "https://images.paperturn.com/f/f2/Flipbook-Example.png",
    slug: "college-notes-creator",
    live: "https://ai-flipbook-notes-lib.vercel.app/",
    source: "#",
  },
  {
    title: "E-commerce Website",
    description: "Full-stack e-commerce platform",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    image: "https://media.istockphoto.com/id/1428709516/photo/shopping-online-woman-hand-online-shopping-on-laptop-computer-with-virtual-graphic-icon.jpg?s=612x612&w=0&k=20&c=ROAncmFL4lbSQdU4VOhyXu-43ngzfEqHE5ZZAw5FtYk=",
    slug: "ecommerce-website",
    live: "#",
    source: "#",
  },
  {
    title: "Code Fixer AI",
    description: "AI-powered code fixing tool with Gemini API",
    tech: ["MongoDB", "Express", "React", "Node.js", "Gemini API"],
    image: "https://www.shutterstock.com/image-vector/software-testing-web-concept-flat-260nw-2562454535.jpg",
    slug: "code-fixer-ai",
    live: "#",
    source: "#",
  },
  {
    title: "Programming Error Solver",
    description: "Website to solve programming errors",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBN1EJTa1V0v65UxtxGW2BgOXXjAm-i9i0tQ&s",
    slug: "programming-error-solver",
    live: "#",
    source: "#",
  },

];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">My Projects</h2>
          <p className="text-xl text-gray-600">Showcasing my work in UGC, CGI, and full-stack development</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="h-48 bg-gray-300 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={192}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a href={project.live} className="text-blue-600 hover:text-blue-800 font-medium">
                    Live Demo
                  </a>
                  <a href={project.source} className="text-gray-600 hover:text-gray-800 font-medium">
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/projects" className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-full font-semibold transition-colors">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
