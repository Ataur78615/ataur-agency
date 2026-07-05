import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top SEO Company Noida Delhi | React Node.js Development | Ataur Agency India",
  description: "Ataur Agency - Best digital marketing agency in Patna, Noida, Delhi, Jharkhand & Pan India. Expert SEO, PPC, SMM, React/Node.js web development, UGC ads for top leads & growth.",
  alternates: { canonical: "/services/web-design-development" },
  openGraph: {
    title: "Top SEO Company Noida Delhi | React Node.js Development | Ataur Agency India",
    description: "Ataur Agency - Best digital marketing agency in Patna, Noida, Delhi, Jharkhand & Pan India. Expert SEO, PPC, SMM, React/Node.js web development, UGC ads for top leads & growth.",
    url: "/services/web-design-development",
  }
};

export default function WebDesignDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
