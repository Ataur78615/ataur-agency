import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI & Automation Services - WhatsApp AI Agents & n8n Workflows | Ataur Agency",
  description: "Scale your business with AI-powered WhatsApp agents and n8n workflow automation. Capture and nurture leads automatically with Ataur Agency's AI solutions.",
};

export default function AIAutomationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
