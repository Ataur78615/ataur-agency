import type { Metadata } from "next";
import { Inter, Poppins, Space_Grotesk, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const interAccess = Inter({ subsets: ["latin"], variable: "--font-inter" });
const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-plus-jakarta" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.atauragency.in"),
  title: "Ataur Agency | Best Digital Marketing & Web Development Agency in India",
  description: "Ataur Agency is India's leading digital marketing and web development agency. Scale your business with our data-driven growth strategies and custom web solutions.",
  authors: [{ name: "MD Ataur Ansari" }],
  creator: "MD Ataur Ansari",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ataur Agency - Leading Digital Marketing & Tech Solutions",
    description: "Expert digital marketing, SEO, and web development services to scale your business. Jharkhand's top-rated agency.",
    url: "/",
    siteName: "Ataur Agency",
    images: [
      {
        url: "/img/Ataur Agency.png",
        width: 1200,
        height: 630,
        alt: "Ataur Agency - Digital Marketing Excellence",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ataur Agency | Grow Your Business with Digital Excellence",
    description: "Specializing in UGC ads, CGI campaigns, and high-performance Web Apps (Next.js/React).",
    images: ["/img/Ataur Agency.png"],
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
import OrganizationSchema from "@/components/OrganizationSchema";
import DynamicBreadcrumb from "@/components/DynamicBreadcrumb";
import Script from "next/script";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <OrganizationSchema />
      </head>
      <body className={`${interAccess.variable} ${plusJakartaSans.variable} font-sans antialiased`}>
        <div id="google_translate_element" style={{ display: "none" }}></div>
        <Script id="google-translate-init" strategy="afterInteractive">
          {`
            function googleTranslateElementInit() {
              new google.translate.TranslateElement({pageLanguage: 'en', autoDisplay: false}, 'google_translate_element');
            }
          `}
        </Script>
        <Script src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit" strategy="afterInteractive" />
        {children}
        <DynamicBreadcrumb />
        <WhatsAppButton />
        <Chatbot />
      </body>
    </html>
  );
}
