import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import SEOKeywords from "@/components/SEOKeywords";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Ataur Agency | Best IT Solutions & Digital Marketing Services India",
  description: "Comprehensive IT solutions, digital marketing, and web development services by Ataur Agency. We provide SEO, Performance Marketing, Custom Web Apps, and AI Automation to businesses all over India.",
  keywords: [
    "IT Solutions", "Managed IT Services", "IT Solutions Architect", 
    "IT Solutions Company India", "IT Solutions Consulting", "Cloud IT Solution",
    "Digital Marketing Services", "SEO Services", "Web Development India"
  ],
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <SEOKeywords />
        <Services />
      </div>
      <Footer />
    </div>
  );
}
