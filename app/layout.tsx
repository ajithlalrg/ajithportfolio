import type { Metadata, Viewport } from "next";
import { Space_Grotesk, JetBrains_Mono, Archivo_Black } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { yearsOfExperience } from "@/lib/yoe";
import ServiceWorkerRegister from "@/components/sw-register";
import CursorFollower from "@/components/CursorFollower";

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
const siteUrl = "https://ajithlalr.vercel.app";
const siteName = "Ajith Lal R — Engineering Manager & Technical Delivery Manager";
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
    types: { "application/rss+xml": `${siteUrl}/feed.xml` },
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
  alternateName: ["Ajith Lal", "Ajithlal R"],
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
  potentialAction: {
    "@type": "SearchAction",
    target: `${siteUrl}/?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

const webPageLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${siteUrl}/#webpage`,
  url: siteUrl,
  name: siteName,
  isPartOf: { "@id": `${siteUrl}/#website` },
  about: { "@id": `${siteUrl}/#person` },
  mainEntity: { "@id": `${siteUrl}/#person` },
  primaryImageOfPage: { "@type": "ImageObject", url: `${siteUrl}/opengraph-image` },
  inLanguage: "en-US",
  breadcrumb: { "@id": `${siteUrl}/#breadcrumb` },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": `${siteUrl}/#breadcrumb`,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Profile", item: `${siteUrl}/#about` },
    { "@type": "ListItem", position: 3, name: "Experience", item: `${siteUrl}/#experience` },
    { "@type": "ListItem", position: 4, name: "Projects", item: `${siteUrl}/#projects` },
    { "@type": "ListItem", position: 5, name: "Contact", item: `${siteUrl}/#contact` },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${siteUrl}/#faq`,
  mainEntity: [
    {
      "@type": "Question",
      name: "Who is Ajith Lal R?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `Ajith Lal R is an Engineering Manager and Technical Delivery Manager with ${yoe}+ years of experience building enterprise-scale digital platforms. He currently leads 20+ engineers at PwC India, shipping work across e-commerce, retail, travel, content, and mobile using Next.js, React, React Native, Adobe Experience Manager (AEM), and Magento.`,
      },
    },
    {
      "@type": "Question",
      name: "What does Ajith Lal R do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ajith Lal R runs delivery and frontend architecture for large web platforms. He manages engineering teams, owns technical roadmaps, drives stakeholder alignment, and architects headless-CMS, commerce, and cross-platform mobile systems on Next.js, React, React Native, AEM, and Magento.",
      },
    },
    {
      "@type": "Question",
      name: "Where is Ajith Lal R based?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ajith Lal R is based in Chennai, Tamil Nadu, India, and is open to remote engagements.",
      },
    },
    {
      "@type": "Question",
      name: "What technologies and tools does Ajith Lal R specialize in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "His core stack is Next.js, React, React Native, TypeScript, Adobe Experience Manager (AEM), and Magento. He also works across headless CMS architectures, cross-platform mobile, frontend performance, design systems, and CI/CD delivery practices.",
      },
    },
    {
      "@type": "Question",
      name: "What certifications does Ajith Lal R hold?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ajith Lal R is an Adobe Certified Expert — Commerce Frontend Developer and an Adobe Certified Professional — Commerce Business Practitioner.",
      },
    },
    {
      "@type": "Question",
      name: "Is Ajith Lal R available for hire?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Ajith Lal R is open to Engineering Manager, Technical Delivery Manager, and Frontend Architect roles — full-time, contract, or consulting — based in Chennai or remote.",
      },
    },
  ],
};

const jsonLd = { "@context": "https://schema.org", "@graph": [personLd, websiteLd, webPageLd, breadcrumbLd, faqLd] };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
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
      </body>
    </html>
  );
}
