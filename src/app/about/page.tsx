import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import { Metadata } from "next";

const aboutFaqs = [
  {
    question: "Who is the founder of Ataur Agency?",
    answer: "Ataur Agency was founded by MD Ataur Ansari, a digital marketing expert and full-stack developer passionate about helping businesses scale through technology and data-driven strategies."
  },
  {
    question: "Where is Ataur Agency located?",
    answer: "We are headquartered in Jamshedpur, Jharkhand. However, our digital capabilities allow us to serve a global clientele, with a strong focus on Noida, Delhi, and Pan-India markets."
  },
  {
    question: "What makes Ataur Agency different from other tech agencies?",
    answer: "We focus on a modern tech stack like Next.js for extreme web performance, combined with advanced AI Automation systems to not just build websites, but create scalable business ecosystems."
  },
  {
    question: "What industries does Ataur Agency specialize in?",
    answer: "We partner with diverse industries including real estate, local clinics, retail, e-commerce, and fast-growing startups looking for aggressive digital growth and automation."
  },
  {
    question: "How does Ataur Agency ensure client success?",
    answer: "Client success is guaranteed through transparent data reporting, ROI-focused performance advertising, and continuous optimization of both organic SEO and paid media campaigns."
  }
];

export const metadata: Metadata = {
  title: "Ataur Agency | About India's Leading Digital Marketing Agency",
  description: "Ataur Agency, founded by MD Ataur Ansari, is a premier digital agency in India specializing in performance marketing and full-stack development.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "Ataur Agency | About India's Leading Digital Marketing Agency",
    description: "Ataur Agency, founded by MD Ataur Ansari, is a premier digital agency in India specializing in performance marketing and full-stack development.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <About />
      <div className="bg-[#030303]">
        <FAQSection faqs={aboutFaqs} title="About Ataur Agency FAQs" subtitle="Learn more about our mission and operations" />
      </div>
      <Footer />
    </div>
  );
}
