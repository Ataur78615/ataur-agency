import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Ataur Agency | Hire India's Top Digital Marketing & Web Agency",
  description: "Ready to scale your business? Get in touch with Ataur Agency - India's best for SEO, Web Development, and Digital Strategy. Serving clients nationwide with excellence.",
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
