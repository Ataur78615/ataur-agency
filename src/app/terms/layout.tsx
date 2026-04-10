import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ataur Agency | Terms of Agreement & Service Policy India",
  description: "Read the official terms and service policies of Ataur Agency India. Transparency and clarity in our Digital Marketing and Web Development agreements.",
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
