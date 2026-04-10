import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Ataur Agency | About India's Leading Digital Marketing Agency",
  description: "Ataur Agency, founded by MD Ataur Ansari, is a premier digital agency in India specializing in performance marketing and full-stack development. We help brands nationwide achieve exponential growth.",
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
