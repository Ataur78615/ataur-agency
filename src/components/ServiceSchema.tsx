import React from 'react';

interface ServiceSchemaProps {
  serviceType: string;
  description: string;
  url: string;
}

export default function ServiceSchema({ serviceType, description, url }: ServiceSchemaProps) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": serviceType,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Ataur Agency",
      "url": "https://atauragency.in"
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "description": description,
    "url": url
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
