import type { Metadata, Viewport } from "next";
import { Space_Grotesk, JetBrains_Mono, Archivo_Black } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { yearsOfExperience } from "@/lib/yoe";
import { siteUrl, siteName } from "@/lib/site";
import ServiceWorkerRegister from "@/components/sw-register";
import CursorFollower from "@/components/CursorFollower";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const sans = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const display = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-display",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

const yoe = yearsOfExperience();
const siteDescription = `Engineering Manager / Technical Delivery Manager with ${yoe}+ years building enterprise-scale digital platforms across e-commerce, retail, travel, content, and mobile. Leading 20+ engineers at PwC India, shipping with Next.js, React, React Native, AEM, and Magento.`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: siteName, template: "%s | Ajith Lal R" },
  description: siteDescription,
  applicationName: "Ajith Lal R Portfolio",
  category: "technology",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Ajith Lal R",
    "Ajith Lal",
    "Ajithlal",
    "Engineering Manager",
    "Technical Delivery Manager",
    "Frontend Architect",
    "PwC India",
    "Chennai",
    "Next.js Developer",
    "React Developer",
    "React Native Developer",
    "Cross-platform Mobile",
    "Adobe Experience Manager",
    "AEM Developer",
    "Magento Frontend",
    "Headless CMS",
    "Frontend Architecture",
    "Adobe Certified Expert",
    "Engineering Leadership",
    "Technical Delivery",
    "E-commerce Architecture",
    "Enterprise Frontend",
  ],
  authors: [{ name: "Ajith Lal R", url: siteUrl }],
  creator: "Ajith Lal R",
  publisher: "Ajith Lal R",
  formatDetection: { email: false, address: false, telephone: false },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-icon.svg", type: "image/svg+xml" }],
    shortcut: ["/favicon.ico"],
  },
  openGraph: {
    type: "profile",
    url: siteUrl,
    title: siteName,
    description: siteDescription,
    siteName: "Ajith Lal R Portfolio",
    locale: "en_US",
    // og:image is auto-injected from app/opengraph-image.tsx as a real 1200x630 PNG
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    creator: "@ajithlalr",
    site: "@ajithlalr",
    // twitter:image is auto-injected from app/twitter-image.tsx
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  appleWebApp: {
    capable: true,
    title: "Ajith Lal R",
    statusBarStyle: "black-translucent",
  },
  other: {
    "profile:first_name": "Ajith Lal",
    "profile:last_name": "R",
    "profile:gender": "male",
    "mobile-web-app-capable": "yes",
    "application-name": "Ajith Lal R",
  },
  verification: {
    google: "4Yg68Lm_iwGxrnIk9J4nGot2pEU7XVcJ408F4jyyDAo",
  },
};

export const viewport: Viewport = {
  themeColor: "#C8334A",
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
};

const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteUrl}/#person`,
  name: "Ajith Lal R",
  alternateName: ["Ajith Lal", "Ajithlal R", "Ajith Lal Raghavan"],
  url: siteUrl,
  image: {
    "@type": "ImageObject",
    url: `${siteUrl}/opengraph-image`,
    width: 1200,
    height: 630,
    caption: "Ajith Lal R — Engineering Manager & Technical Delivery Manager",
  },
  jobTitle: "Engineering Manager / Technical Delivery Manager",
  description: siteDescription,
  worksFor: {
    "@type": "Organization",
    name: "PwC India",
    url: "https://www.pwc.in",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Chennai",
    addressRegion: "Tamil Nadu",
    addressCountry: "IN",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "St. Xavier's Catholic College of Engineering",
    sameAs: "https://www.sxcce.edu.in",
  },
  knowsAbout: [
    "Engineering Management",
    "Technical Delivery",
    "Frontend Architecture",
    "Next.js",
    "React",
    "React Native",
    "Cross-platform Mobile Development",
    "Adobe Experience Manager",
    "Magento",
    "Headless CMS",
    "Agile / Scrum",
    "Stakeholder Management",
    "Team Mentoring",
  ],
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      name: "Adobe Certified Expert — Commerce Frontend Developer",
      credentialCategory: "certification",
      recognizedBy: { "@type": "Organization", name: "Adobe", url: "https://www.adobe.com" },
      dateCreated: "2023-01-01",
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "Adobe Certified Professional — Commerce Business Practitioner",
      credentialCategory: "certification",
      recognizedBy: { "@type": "Organization", name: "Adobe", url: "https://www.adobe.com" },
      dateCreated: "2023-01-01",
    },
  ],
  sameAs: [
    "https://linkedin.com/in/ajithlalrg",
    "https://github.com/ajithlalrg",
  ],
};

const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: siteName,
  description: siteDescription,
  inLanguage: "en-US",
  publisher: { "@id": `${siteUrl}/#person` },
};

// Site-wide entities only. Page-specific JSON-LD (ProfilePage + FAQPage, case studies) lives with each page.
const jsonLd = { "@context": "https://schema.org", "@graph": [personLd, websiteLd] };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <link rel="alternate" type="text/html" href="/sitemap.html" title="HTML Sitemap" />
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content="Chennai" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${sans.variable} ${display.variable} ${mono.variable} font-sans grain`}>
        <CursorFollower />
        {children}
        <ServiceWorkerRegister />
        <Analytics />
        <SpeedInsights />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
