import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ataur Agency | Terms of Agreement & Service Policy India",
  description: "Read the official terms and service policies of Ataur Agency India. Transparency and clarity in our Digital Marketing and Web Development agreements.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Ataur Agency | Terms of Agreement & Service Policy India",
    description: "Read the official terms and service policies of Ataur Agency India. Transparency and clarity in our Digital Marketing and Web Development agreements.",
    url: "/terms",
  }
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
