import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About - MD Ataur Ansari",
  description: "Learn more about MD Ataur Ansari, a UGC Creator, CGI Ads Specialist, and MERN & Next.js Developer.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <About />
      <Footer />
    </div>
  );
}
