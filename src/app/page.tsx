import Navbar from "@/components/Navbar";
import ImageSlider from "@/components/ImageSlider";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import VideoDemo from "@/components/VideoDemo";
import ClientWhispers from "@/components/ClientWhispers";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import SuccessShowcase from "@/components/three/SuccessShowcase";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ataur Agency | Best Digital Marketing & Web Development Agency in India",
  description: "Transform your business with Ataur Agency - India's premium Digital Marketing and Web Development solutions. Expertise in SEO, Meta Ads, and High-Performance Web Apps for pan-India growth.",
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <SuccessShowcase />
      <Projects />
      <Services />
      <Pricing />
      <VideoDemo />
      <ClientWhispers />
      <Contact />
      <Footer />
    </div>
  );
}
