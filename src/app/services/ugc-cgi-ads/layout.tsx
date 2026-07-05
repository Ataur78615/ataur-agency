import { Metadata } from "next";

export const metadata: Metadata = {
  title: "UGC & CGI Ads - High-Converting Video Marketing | Ataur Agency",
  description: "Boost your brand with authentic UGC video ads and cinematic CGI product advertisements. Specialized video marketing for modern social media brands.",
  alternates: { canonical: "/services/ugc-cgi-ads" },
  openGraph: {
    title: "UGC & CGI Ads - High-Converting Video Marketing | Ataur Agency",
    description: "Boost your brand with authentic UGC video ads and cinematic CGI product advertisements. Specialized video marketing for modern social media brands.",
    url: "/services/ugc-cgi-ads",
  }
};

export default function UGCDAdsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
