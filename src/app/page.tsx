import Navbar from "@/components/Navbar";
import ImageSlider from "@/components/ImageSlider";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import VideoDemo from "@/components/VideoDemo";
import ClientWhispers from "@/components/ClientWhispers";
import Contact from "@/components/Contact";
import SEOKeywords from "@/components/SEOKeywords";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import SuccessShowcase from "@/components/three/SuccessShowcase";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ataur Agency | Digital Marketing & Website Agency Services",
  description: "Boost your online presence with Ataur Agency. We offer expert digital marketing services and custom website agency solutions to scale your business globally.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#030303] text-gray-900 dark:text-white selection:bg-blue-500/30 selection:text-white relative overflow-hidden transition-colors duration-300">
      {/* Unified Technology Theme Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* SVG Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-100 dark:opacity-30" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.015)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e1b4b_1px,transparent_1px),linear-gradient(to_bottom,#1e1b4b_1px,transparent_1px)] bg-[size:16rem_16rem] opacity-100 dark:opacity-[0.05]" />
        
        {/* Technology Glow Blobs */}
        <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-blue-500/5 dark:bg-blue-900/10 blur-[150px] opacity-70" />
        <div className="absolute top-[50%] right-[-10%] w-[650px] h-[650px] rounded-full bg-purple-500/5 dark:bg-purple-900/10 blur-[150px] opacity-70" />
        <div className="absolute bottom-[20%] left-[5%] w-[600px] h-[600px] rounded-full bg-indigo-500/5 dark:bg-indigo-900/10 blur-[150px] opacity-60" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <SEOKeywords />
        <SuccessShowcase />
        <Projects />
        <Services />
        <Pricing />
        <VideoDemo />
        <ClientWhispers />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
