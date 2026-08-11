import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Next.js Web Development Services | Ataur Agency",
  description: "Build ultra-fast, SEO-optimized, and scalable websites with our custom Next.js and React web development services. High-performance architecture for startups and enterprises.",
  alternates: {
    canonical: "https://atauragency.in/services/nextjs-web-development",
  },
  openGraph: {
    title: "Custom Next.js Web Development Services | Ataur Agency",
    description: "Build ultra-fast, SEO-optimized, and scalable websites with our custom Next.js and React web development services. High-performance architecture for startups and enterprises.",
    url: "https://atauragency.in/services/nextjs-web-development",
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
