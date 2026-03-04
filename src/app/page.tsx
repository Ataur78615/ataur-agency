import Navbar from "@/components/Navbar";
import ImageSlider from "@/components/ImageSlider";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import VideoDemo from "@/components/VideoDemo";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <ImageSlider />
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
