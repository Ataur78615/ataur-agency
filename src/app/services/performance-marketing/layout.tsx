import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Performance Marketing & Lead Generation Agency (Meta & Google Ads) | Ataur Agency",
  description: "Maximize your ROI with data-driven performance marketing. We manage profitable Google Ads and Meta Ads campaigns to generate high-quality leads and scale revenue.",
  alternates: {
    canonical: "https://atauragency.in/services/performance-marketing",
  },
  openGraph: {
    title: "Performance Marketing & Lead Generation Agency (Meta & Google Ads) | Ataur Agency",
    description: "Maximize your ROI with data-driven performance marketing. We manage profitable Google Ads and Meta Ads campaigns to generate high-quality leads and scale revenue.",
    url: "https://atauragency.in/services/performance-marketing",
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
