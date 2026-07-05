import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing Jharkhand Pan India | Lead Generation Experts - Ataur Agency",
  description: "Ataur Agency - Best digital marketing agency in Patna, Noida, Delhi, Jharkhand & Pan India. Expert SEO, PPC, SMM, React/Node.js web development, UGC ads for top leads & growth.",
  alternates: { canonical: "/services/performance-advertising" },
  openGraph: {
    title: "Digital Marketing Jharkhand Pan India | Lead Generation Experts - Ataur Agency",
    description: "Ataur Agency - Best digital marketing agency in Patna, Noida, Delhi, Jharkhand & Pan India. Expert SEO, PPC, SMM, React/Node.js web development, UGC ads for top leads & growth.",
    url: "/services/performance-advertising",
  }
};

export default function PerformanceAdvertisingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
