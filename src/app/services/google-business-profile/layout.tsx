import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Google Business Profile (GBP) Setup & Optimization | Ataur Agency",
  description: "Rank higher on Google Maps & Local Search. Ataur Agency offers professional Google My Business setup, geo-tagging, and local SEO for just ₹6,999.",
  alternates: { canonical: "/services/google-business-profile" },
  openGraph: {
    title: "Google Business Profile (GBP) Setup & Optimization | Ataur Agency",
    description: "Rank higher on Google Maps & Local Search. Ataur Agency offers professional Google My Business setup, geo-tagging, and local SEO for just ₹6,999.",
    url: "/services/google-business-profile",
  }
};

export default function GoogleBusinessProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
