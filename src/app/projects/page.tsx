import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Our Projects - Ataur Agency | Portfolio of CGI, UGC & Web Apps",
  description: "Explore our successful projects in digital marketing, cinematic CGI advertisements, and advanced full-stack web applications developed by Ataur Agency.",
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
