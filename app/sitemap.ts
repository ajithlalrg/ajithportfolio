import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ajithlal-red.vercel.app';
  const lastModified = new Date();

  return [
    { url: baseUrl, lastModified, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/#about`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/#experience`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/#projects`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/#skills`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/#contact`, lastModified, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${baseUrl}/sitemap.html`, lastModified, changeFrequency: 'monthly', priority: 0.4 },
    { url: `${baseUrl}/resume.pdf`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
  ];
}
