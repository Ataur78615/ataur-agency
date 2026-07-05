import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://atauragency.in';

  const staticRoutes = [
    { url: '', priority: 1.0, changeFrequency: 'weekly' },
    { url: '/about', priority: 0.9, changeFrequency: 'monthly' },
    { url: '/contact', priority: 0.9, changeFrequency: 'yearly' },
    { url: '/projects', priority: 0.9, changeFrequency: 'weekly' },
    { url: '/services', priority: 0.9, changeFrequency: 'weekly' },
    { url: '/careers', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/Revenue-Leakage-Audit', priority: 0.8, changeFrequency: 'monthly' },
  ] as const;

  const serviceRoutes = [
    '/services/ai-automation',
    '/services/cyber-security',
    '/services/digital-growth-solutions',
    '/services/enterprise-systems',
    '/services/google-business-profile',
    '/services/performance-advertising',
    '/services/social-media-handling',
    '/services/ugc-cgi-ads',
    '/services/web-design-development'
  ];

  const projectSlugs = [
    'my-next-trip',
    'invest-secure',
    'stayzzy-bloom',
    'b2b-trips-bulk-booking',
    'college-notes-creator',
    'code-fixer-ai',
    'service-247',
    'ai-scam-checker',
    'oxy-hotel'
  ];

  const sitemap: MetadataRoute.Sitemap = [
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}${route.url}`,
      lastModified: new Date(),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...serviceRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...projectSlugs.map((slug) => ({
      url: `${baseUrl}/projects/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  ];

  return sitemap;
}
