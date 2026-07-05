import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ataur Agency | Case Studies & Projects Portfolio India",
  description: "Browse our portfolio of high-impact Digital Marketing campaigns and advanced Web Development projects successfully delivered to clients.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Ataur Agency | Case Studies & Projects Portfolio India",
    description: "Browse our portfolio of high-impact Digital Marketing campaigns and advanced Web Development projects successfully delivered to clients.",
    url: "/projects",
  },
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
