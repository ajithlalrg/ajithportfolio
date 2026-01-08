import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const siteUrl = "https://ajithlal-red.vercel.app";
const siteName = "Ajith Lal R | Engineering Manager & Technical Delivery Manager";
const siteDescription = "Engineering Manager / Technical Delivery Manager with 9+ years of experience delivering enterprise-scale digital platforms across e-commerce, retail, travel, and content ecosystems. Proven expertise in leading cross-functional teams (20+ engineers), owning end-to-end delivery, and driving scalable frontend architectures using Next.js, React, Adobe Experience Manager (AEM), and Magento. Currently at PwC India. Open to relocation and remote opportunities.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: "%s | Ajith Lal R",
  },
  description: siteDescription,
  keywords: [
    "Ajith Lal R",
    "Engineering Manager",
    "Technical Delivery Manager",
    "PwC India Manager",
    "Frontend Developer Chennai",
    "Technical Lead India",
    "React Developer",
    "Next.js Developer",
    "TypeScript Expert",
    "Adobe Experience Manager Developer",
    "AEM Developer",
    "Magento 2 Developer",
    "E-commerce Frontend Developer",
    "Frontend Architecture",
    "Senior Frontend Developer",
    "Team Leadership",
    "Agile Delivery",
    "PwC Engineer",
    "Enterprise Projects",
    "Enterprise Frontend Development",
    "Digital Platform Development",
    "Adobe Certified Expert",
  ],
  authors: [{ name: "Ajith Lal R", url: siteUrl }],
  creator: "Ajith Lal R",
  publisher: "Ajith Lal R",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.svg",
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: siteName,
    description: siteDescription,
    siteName: "Ajith Lal R Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ajith Lal R - Engineering Manager & Technical Delivery Manager",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    images: ["/og-image.png"],
    creator: "@ajithlalr",
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
  category: "technology",
  classification: "Portfolio",
  referrer: "origin-when-cross-origin",
  verification: {
    // Add your verification codes here when you have them
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  colorScheme: "light dark",
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Ajith Lal R Portfolio",
      description: siteDescription,
      publisher: { "@id": `${siteUrl}/#person` },
      inLanguage: "en-US",
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Ajith Lal R",
      url: siteUrl,
      image: {
        "@type": "ImageObject",
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
      },
      sameAs: [
        "https://linkedin.com/in/ajithlalrg",
        "https://github.com/ajithlalrg",
      ],
      jobTitle: "Engineering Manager / Technical Delivery Manager",
      worksFor: {
        "@type": "Organization",
        name: "PwC India",
        url: "https://www.pwc.in",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Chennai",
        addressCountry: "India",
      },
      knowsAbout: [
        "Engineering Management",
        "Technical Delivery",
        "React",
        "Next.js",
        "TypeScript",
        "Adobe Experience Manager",
        "Magento 2",
        "E-commerce Development",
        "Agile/Scrum",
        "Team Leadership",
      ],
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          name: "Adobe Certified Expert - Adobe Commerce Frontend Developer",
          credentialCategory: "certification",
          dateCreated: "2023",
        },
        {
          "@type": "EducationalOccupationalCredential",
          name: "Adobe Certified Professional - Adobe Commerce Business Practitioner",
          credentialCategory: "certification",
          dateCreated: "2023",
        },
      ],
      alumniOf: {
        "@type": "EducationalOrganization",
        name: "St. Xavier's Catholic College of Engineering",
      },
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: siteName,
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#person` },
      description: siteDescription,
      inLanguage: "en-US",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [siteUrl],
        },
      ],
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#profilepage`,
      url: siteUrl,
      name: siteName,
      mainEntity: { "@id": `${siteUrl}/#person` },
      dateCreated: "2024-01-01",
      dateModified: new Date().toISOString().split("T")[0],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
