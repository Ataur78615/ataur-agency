import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Google Business Profile (GBP) Setup & Optimization | Ataur Agency",
  description: "Rank higher on Google Maps & Local Search. Ataur Agency offers professional Google My Business setup, geo-tagging, and local SEO for just ₹6,999.",
};

export default function GoogleBusinessProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
