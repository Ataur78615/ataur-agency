import React from 'react';

export default function OrganizationSchema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://atauragency.in/#organization",
        "name": "Ataur Agency",
        "url": "https://atauragency.in",
        "logo": "https://atauragency.in/img/Ataur Agency.png",
        "image": "https://atauragency.in/img/Ataur Agency.png",
        "telephone": "+91-7250570798",
        "areaServed": ["Jharkhand", "Delhi", "Noida", "India", "Global"],
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
      },
      {
        "@type": "WebSite",
        "@id": "https://atauragency.in/#website",
        "url": "https://atauragency.in",
        "name": "Ataur Agency",
        "publisher": {
          "@id": "https://atauragency.in/#organization"
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
