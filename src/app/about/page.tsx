import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About Us - Ataur Agency | Top Digital Marketing Experts in India",
  description: "Learn about Ataur Agency and MD Ataur Ansari, a leader in UGC creation, CGI advertising, and full-stack web development (MERN/Next.js) based in Patna, India.",
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
