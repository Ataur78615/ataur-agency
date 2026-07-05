import React from 'react';

export default function OrganizationSchema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Ataur Agency",
    "image": "https://atauragency.in/img/Ataur Agency.png",
    "url": "https://atauragency.in",
    "telephone": "+91-7250570798",
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "[YOUR STREET ADDRESS]",
      "addressLocality": "Jamshedpur",
      "addressRegion": "Jharkhand",
      "postalCode": "[YOUR PIN CODE]",
      "addressCountry": "IN"
    },
    "areaServed": ["Jharkhand", "Delhi", "Noida", "India"],
    "founder": {
      "@type": "Person",
      "name": "MD Ataur Ansari"
    },
    "sameAs": [
      "https://www.linkedin.com/in/md-ataur-ansari-b18790271/",
      "https://www.instagram.com/ataurway/",
      "https://github.com/Ataur78615",
      "https://www.youtube.com/@Ataurtechbca"
    ],
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AI Automation & n8n Workflow Development"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "MERN & Next.js Website Development"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "SEO, GEO & AEO Optimization"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Cybersecurity Audits"
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
