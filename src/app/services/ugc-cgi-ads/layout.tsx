import { Metadata } from "next";

export const metadata: Metadata = {
  title: "UGC & CGI Ads - High-Converting Video Marketing | Ataur Agency",
  description: "Boost your brand with authentic UGC video ads and cinematic CGI product advertisements. Specialized video marketing for modern social media brands.",
};

export default function UGCDAdsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
