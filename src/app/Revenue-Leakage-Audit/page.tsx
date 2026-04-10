import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RevenueLeakageAuditForm from "@/components/RevenueLeakageAuditForm";

export const metadata = {
  title: "Ataur Agency | Revenue Leakage Audit India - Maximize ROI",
  description: "Stop losing money on inefficient marketing! Get a professional Revenue Leakage Audit from Ataur Agency India. We identify hidden gaps and unlock growth nationwide.",
};

export default function FreeAuditPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24">
        <RevenueLeakageAuditForm />
      </div>
      <Footer />
    </div>
  );
}
