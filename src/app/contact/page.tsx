import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact Us - Ataur Agency | Digital Marketing & Web Development Patna",
  description: "Get in touch with Ataur Agency for top-rated SEO, PPC, and individual web development services. Contact our experts in Patna, India for high-converting ads and websites.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
