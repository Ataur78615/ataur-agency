import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social Media Handling Services | Ataur Agency",
  description: "Grow your brand, attract customers, and increase engagement with professional social media management by Ataur Agency.",
  alternates: { canonical: "/services/social-media-handling" },
  openGraph: {
    title: "Social Media Handling Services | Ataur Agency",
    description: "Grow your brand, attract customers, and increase engagement with professional social media management by Ataur Agency.",
    url: "/services/social-media-handling",
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
