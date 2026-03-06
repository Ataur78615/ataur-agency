import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cyber Security Services - Advanced Penetration Testing & Protection | Ataur Agency",
  description: "Protect your digital assets with professional cyber security services. We offer penetration testing, security audits, and digital protection for businesses in India & Patna.",
};

export default function CyberSecurityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
