import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI & n8n Lead Automation Services | Ataur Agency",
  description: "Automate your business with AI and n8n workflows. Seamlessly capture leads, automate WhatsApp follow-ups, and integrate CRMs to save time and boost conversions.",
  alternates: {
    canonical: "https://atauragency.in/services/ai-n8n-lead-automation",
  },
  openGraph: {
    title: "AI & n8n Lead Automation Services | Ataur Agency",
    description: "Automate your business with AI and n8n workflows. Seamlessly capture leads, automate WhatsApp follow-ups, and integrate CRMs to save time and boost conversions.",
    url: "https://atauragency.in/services/ai-n8n-lead-automation",
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
