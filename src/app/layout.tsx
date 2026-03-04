import type { Metadata } from "next";
import { Inter, Poppins, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata: Metadata = {
  title: "Ataur Agency",
  description: "Portfolio of MD Ataur Ansari, a UGC Creator, CGI Ads Specialist, and MERN & Next.js Developer. View projects, services, and contact for high-converting ads and full-stack websites.",
  keywords: ["UGC Creator", "CGI Ads", "MERN Stack", "Next.js", "Full-Stack Developer", "Portfolio"],
  authors: [{ name: "MD Ataur Ansari" }],
  creator: "MD Ataur Ansari",
  openGraph: {
    title: "Ataur Agency",
    description: "Portfolio showcasing UGC/CGI ads and full-stack development skills.",
    url: "https://ataur-ansari.vercel.app",
    siteName: "Ataur Agency Portfolio",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MD Ataur Ansari Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ataur Agency",
    description: "Portfolio showcasing UGC/CGI ads and full-stack development skills.",
    images: ["/images/og-image.jpg"],
    creator: "@ataurway",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification-code",
  },
};

import WhatsAppButton from "@/components/WhatsAppButton";
import Chatbot from "@/components/Chatbot";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
        <WhatsAppButton />
        <Chatbot />
      </body>
    </html>
  );
}
