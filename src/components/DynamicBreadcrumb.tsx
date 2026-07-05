"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function DynamicBreadcrumb() {
  const pathname = usePathname();
  
  if (pathname === "/") return null; // Don't show on homepage

  const segments = pathname.split("/").filter(Boolean);
  
  const breadcrumbList = segments.map((segment, index) => {
    const url = `/${segments.slice(0, index + 1).join("/")}`;
    // Format the segment to be human-readable (e.g., "ai-automation" -> "AI Automation")
    const name = segment
      .split("-")
      .map((word) => {
        // Handle special cases
        if (word.toLowerCase() === 'ai') return 'AI';
        if (word.toLowerCase() === 'seo') return 'SEO';
        if (word.toLowerCase() === 'ugc') return 'UGC';
        if (word.toLowerCase() === 'cgi') return 'CGI';
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
      
    return { name, url };
  });

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://atauragency.in/"
      },
      ...breadcrumbList.map((crumb, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": crumb.name,
        "item": `https://atauragency.in${crumb.url}`
      }))
    ]
  };

  return (
    <div className="absolute top-[100px] left-0 w-full z-40 pointer-events-none">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-start">
        <nav className="flex items-center space-x-2 text-sm font-medium text-gray-500 dark:text-gray-400 bg-white/40 dark:bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-black/5 dark:border-white/10 shadow-sm pointer-events-auto transition-colors">
          <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</Link>
          {breadcrumbList.map((crumb, index) => {
            const isLast = index === breadcrumbList.length - 1;
            return (
              <div key={crumb.url} className="flex items-center space-x-2">
                <ChevronRight size={14} className="text-gray-400 dark:text-gray-600" />
                {isLast ? (
                  <span className="text-gray-900 dark:text-gray-100 font-bold">{crumb.name}</span>
                ) : (
                  <Link href={crumb.url} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    {crumb.name}
                  </Link>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
