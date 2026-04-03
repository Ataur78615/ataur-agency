import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FreeWebAuditForm from "@/components/FreeWebAuditForm";

export const metadata = {
  title: "Free Web Audit - Ataur Agency | Professional Website Performance Review",
  description: "Get a free professional technical and performance review of your website. Identify bottlenecks and unlock your business potential with Ataur Agency.",
};

export default function FreeAuditPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24">
        <FreeWebAuditForm />
      </div>
      <Footer />
    </div>
  );
}
