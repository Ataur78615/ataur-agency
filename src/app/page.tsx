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
import FAQSection from "@/components/FAQSection";
import { Metadata } from "next";

const homepageFaqs = [
  {
    question: "What digital marketing services does Ataur Agency provide?",
    answer: "We offer end-to-end digital solutions including AI automation, custom Next.js web development, performance advertising (Meta & Google Ads), SEO, and CGI advertising campaigns."
  },
  {
    question: "Why choose Ataur Agency over a traditional marketing freelancer?",
    answer: "Unlike solo freelancers, we provide a full-stack team of developers, automation experts, and performance marketers. This means you get enterprise-grade execution, faster turnarounds, and guaranteed ROI tracking."
  },
  {
    question: "Do you provide services outside of Jharkhand?",
    answer: "Absolutely. While we are headquartered in Jamshedpur, Jharkhand, we serve clients globally and have a strong presence across Noida, Delhi NCR, and Pan-India."
  },
  {
    question: "How long does it take to see results from your performance marketing campaigns?",
    answer: "Lead generation through Meta and Google Ads typically begins within 48 to 72 hours of campaign launch. For organic SEO and AEO growth, you can expect noticeable ranking improvements within 3 to 6 months."
  },
  {
    question: "Do you offer customized packages for small businesses?",
    answer: "Yes, we build highly scalable solutions tailored to your budget. Whether you need a simple lead-capture landing page or a full e-commerce ecosystem, we customize the scope to fit your business."
  }
];

export const metadata: Metadata = {
  title: "Ataur Agency | Top Digital Marketing & Web Agency in India",
  description: "Boost your online presence with Ataur Agency. We offer expert digital marketing services and custom website agency solutions to scale your business globally.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ataur Agency | Top Digital Marketing & Web Agency in India",
    description: "Boost your online presence with Ataur Agency. We offer expert digital marketing services and custom website agency solutions to scale your business globally.",
    url: "/",
  },
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
        <FAQSection faqs={homepageFaqs} title="Homepage FAQs" subtitle="Common questions about partnering with Ataur Agency" />
        <Footer />
      </div>
    </div>
  );
}
