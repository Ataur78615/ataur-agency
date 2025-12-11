import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Projects - MD Ataur Ansari",
  description: "Explore the projects by MD Ataur Ansari, including UGC, CGI ads, and full-stack web development.",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <Projects />
      </div>
      <Footer />
    </div>
  );
}
