import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Ataur Agency | Best Digital Marketing & Web Development Services India",
  description: "Comprehensive digital marketing and web development services by Ataur Agency. We provide SEO, Performance Marketing, Custom Web Apps, and AI Automation to businesses all over India.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <Services />
      </div>
      <Footer />
    </div>
  );
}
