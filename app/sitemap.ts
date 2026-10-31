import { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/site';
import { caseStudies } from '@/lib/projects';

// Google REJECTS fragment URLs (#about, #experience, etc.) in sitemaps because they
// are anchors on the same page, not separate URLs. Only real, crawlable URLs belong
// here. /sitemap.html is also excluded — it's a human HTML page, not a sitemap entry
// worth indexing on its own.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: siteUrl, lastModified, changeFrequency: 'weekly', priority: 1.0 },
    ...caseStudies.map((p) => ({
      url: `${siteUrl}/work/${p.slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    { url: `${siteUrl}/resume.pdf`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
  ];
}
