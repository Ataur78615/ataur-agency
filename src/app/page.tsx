import Navbar from "@/components/Navbar";
import ImageSlider from "@/components/ImageSlider";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import VideoDemo from "@/components/VideoDemo";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Digital Marketing Agency Patna | SEO PPC Web Development - Ataur Agency",
  description: "Ataur Agency - Best digital marketing agency in Patna, Noida, Delhi, Jharkhand & Pan India. Expert SEO, PPC, SMM, React/Node.js web development, UGC ads for top leads & growth.",
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Services />
      <Pricing />
      <VideoDemo />
      <Contact />
      <Footer />
    </div>
  );
}
