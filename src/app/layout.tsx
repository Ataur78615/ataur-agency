import type { Metadata } from "next";
import { Inter, Poppins, Space_Grotesk, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const interAccess = Inter({ subsets: ["latin"], variable: "--font-inter" });
const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-plus-jakarta" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata: Metadata = {
  title: "Best Digital Marketing Agency Jharkhand | SEO PPC Web Development - Ataur Agency",
  description: "Ataur Agency - Best digital marketing agency in Jharkhand, Noida, Delhi, Patna & Pan India. Expert SEO, PPC, SMM, React/Node.js web development, UGC ads for top leads & growth.",
  keywords: [
    "digital marketing agency India", "best digital marketing agency", "digital marketing agency near me",
    "best SEO company in India", "PPC agency India", "social media marketing India",
    "web development company India", "lead generation agency India", "content marketing agency India",
    "best digital marketing agency India", "website development agency", "top digital marketing company",
    "digital marketing services India", "SEO services near me", "best website designer India",
    "digital marketing company Patna", "SEO agency Bihar", "popular digital marketing agency",
    "affordable digital marketing India", "best agency for SEO", "website development near me",
    "digital marketing expert India", "Google Ads agency India", "Facebook marketing agency",
    "Instagram marketing services", "React development company India", "Node.js development India",
    "Python web development", "hire digital marketer India", "best digital marketing in Jharkhand",
    "local SEO services India", "e-commerce website development", "WordPress development agency",
    "mobile app development India", "influencer marketing agency", "email marketing services India",
    "video marketing agency", "best web developer near me", "digital marketing course India",
    "ORM services India", "online reputation management", "SMO services India",
    "SEM agency near me", "programmatic advertising India", "voice search optimization",
    "hyperlocal SEO Patna", "Hindi SEO keywords", "bilingual digital marketing",
    "SEO company Kankarbagh", "digital marketing Boring Road Patna", "custom website design India",
    "landing page development", "Shopify development agency", "WooCommerce expert India",
    "Next.js development services", "TypeScript developer India", "MongoDB development agency",
    "AWS hosting services India", "performance marketing agency", "ROI focused digital agency",
    "cheap SEO packages India", "digital marketing for small business", "startup marketing agency",
    "hospitality website development", "hotel booking website India", "restaurant website designer",
    "SEO for hospitality India", "lead generation for hotels", "Google My Business optimization",
    "top rated agency near me", "digital strategy consultant", "growth hacking agency India",
    "conversion rate optimization", "A/B testing services", "analytics setup Google",
    "Facebook Ads expert Patna", "LinkedIn marketing India", "YouTube SEO services",
    "TikTok marketing agency", "reels engagement strategy", "programmatic targeting India",
    "retargeting campaigns", "AI personalization marketing", "chatbots for websites India",
    "automation tools marketing", "n8n automation agency", "Vercel deployment services",
    "GitHub portfolio developer", "VS Code expert", "cloud SEO optimization",
    "best agency Bihar", "Patna digital marketing", "Bihar SEO company",
    "India top marketing agency", "near me web developer", "popular SEO services",
    "website agency Patna", "digital marketing Jharkhand", "Noida digital agency",
    "best full stack agency India"
  ],
  authors: [{ name: "MD Ataur Ansari" }],
  creator: "MD Ataur Ansari",
  openGraph: {
    title: "Ataur Agency - Leading Digital Marketing & Tech Solutions",
    description: "Expert digital marketing, SEO, and web development services to scale your business. Jharkhand's top-rated agency.",
    url: "https://ataur-ansari.vercel.app",
    siteName: "Ataur Agency",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ataur Agency - Digital Marketing Excellence",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ataur Agency | Grow Your Business with Digital Excellence",
    description: "Specializing in UGC ads, CGI campaigns, and high-performance Web Apps (Next.js/React).",
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
      <body className={`${interAccess.variable} ${plusJakartaSans.variable} font-sans antialiased`}>
        <div id="google_translate_element" style={{ display: "none" }}></div>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              function googleTranslateElementInit() {
                new google.translate.TranslateElement({pageLanguage: 'en', autoDisplay: false}, 'google_translate_element');
              }
            `,
          }}
        />
        <script src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit" async defer />
        {children}
        <WhatsAppButton />
        <Chatbot />
      </body>
    </html>
  );
}
