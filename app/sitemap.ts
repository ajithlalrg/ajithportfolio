import { MetadataRoute } from 'next';

// Google REJECTS fragment URLs (#about, #experience, etc.) in sitemaps because they
// are anchors on the same page, not separate URLs. Only real, crawlable URLs belong
// here. /sitemap.html is also excluded — it's a human HTML page, not a sitemap entry
// worth indexing on its own.
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ajithlal-red.vercel.app';
  const lastModified = new Date();

  return [
    { url: baseUrl, lastModified, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/resume.pdf`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
  ];
}
