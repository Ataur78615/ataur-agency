import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Ataur Agency | Case Studies & Projects Portfolio India",
  description: "Browse our portfolio of high-impact Digital Marketing campaigns and advanced Web Development projects successfully delivered to clients across India.",
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
