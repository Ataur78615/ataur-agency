import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const projects = [
  {
    slug: "stayzzy-bloom",
    title: "Stayzzy Bloom",
    description: "Hotel website built with Next.js and TypeScript",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/projects/stayzzy-bloom.jpg",
    live: "#",
    source: "#",
    details: "A modern hotel booking website with responsive design and smooth user experience.",
  },
  {
    slug: "college-notes-creator",
    title: "College Notes Creator",
    description: "MERN stack application for creating college notes",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    image: "/projects/college-notes.jpg",
    live: "#",
    source: "#",
    details: "A platform for students to create, share, and access college notes collaboratively.",
  },
  {
    slug: "ecommerce-website",
    title: "E-commerce Website",
    description: "Full-stack e-commerce platform",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    image: "/projects/ecommerce.jpg",
    live: "#",
    source: "#",
    details: "Complete e-commerce solution with payment integration and admin panel.",
  },
  {
    slug: "code-fixer-ai",
    title: "Code Fixer AI",
    description: "AI-powered code fixing tool with Gemini API",
    tech: ["MongoDB", "Express", "React", "Node.js", "Gemini API"],
    image: "/projects/code-fixer.jpg",
    live: "#",
    source: "#",
    details: "An AI tool that helps developers fix code errors and improve code quality.",
  },
  {
    slug: "programming-error-solver",
    title: "Programming Error Solver",
    description: "Website to solve programming errors",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    image: "/projects/error-solver.jpg",
    live: "#",
    source: "#",
    details: "A resource for programmers to find solutions to common programming errors.",
  },
];

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  return {
    title: `${project?.title} - MD Ataur Ansari`,
    description: project?.description,
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-64 bg-gray-300 flex items-center justify-center">
              <span className="text-6xl">🖼️</span>
            </div>
            <div className="p-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{project.title}</h1>
              <p className="text-xl text-gray-600 mb-6">{project.description}</p>
              <p className="text-gray-700 mb-6">{project.details}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span key={tech} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a href={project.live} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium transition-colors">
                  Live Demo
                </a>
                <a href={project.source} className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-full font-medium transition-colors">
                  Source Code
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link href="/projects" className="text-blue-600 hover:text-blue-800 font-medium">
              ← Back to Projects
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
