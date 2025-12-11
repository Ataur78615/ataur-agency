import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Services - MD Ataur Ansari",
  description: "Professional services offered by MD Ataur Ansari: UGC Video Creation, CGI Advertising, and Full-Stack Development.",
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
