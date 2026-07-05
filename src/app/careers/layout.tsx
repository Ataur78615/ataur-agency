import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ataur Agency | Careers - Best Digital Marketing & Tech Jobs India",
  description: "Join Ataur Agency, India's fast-growing digital agency. Explore careers in Performance Marketing, Web Development (MERN/Next.js), AI Automation, and CGI Advertising.",
  alternates: { canonical: "/careers" },
  openGraph: {
    title: "Ataur Agency | Careers - Best Digital Marketing & Tech Jobs India",
    description: "Join Ataur Agency, India's fast-growing digital agency. Explore careers in Performance Marketing, Web Development (MERN/Next.js), AI Automation, and CGI Advertising.",
    url: "/careers",
  }
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
