import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact - MD Ataur Ansari",
  description: "Get in touch with MD Ataur Ansari for UGC creation, CGI ads, and full-stack development services.",
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
