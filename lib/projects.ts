export type Category = "e-commerce" | "enterprise" | "marketing" | "branding" | "mobile";

// Long-form write-up for /work/[slug]. Only projects with real, checkable detail get one.
export type CaseStudy = {
  summary: string;
  challenge: string;
  sections: { heading: string; points: string[] }[];
  stack: { group: string; items: string[] }[];
};

export type Project = {
  name: string;
  client: string;
  role: string;
  problem: string;
  contributions: string[];
  technologies: string[];
  category: Category;
  slug?: string;
  caseStudy?: CaseStudy;
};

export const projects: Project[] = [
  {
    name: "Westside Mobile App",
    client: "Westside",
    role: "Technical Delivery Lead | React Native",
    problem:
      "Fashion retail shopping app for iOS and Android on a Shopify storefront, built for India plus a multi-country GCC edition.",
    contributions: [
      "Led delivery and hands-on build of search, PLP/PDP, wishlist, cart, checkout, orders, returns, and tracking",
      "Rendered Shopify CMS pages natively, so new pages go live from the CMS without an app release",
      "Built loyalty, wallet, gift cards, store finder, and barcode-scan search, plus country and locale switching for GCC",
    ],
    technologies: ["React Native", "TypeScript", "Expo Modules", "Shopify", "Firebase", "MoEngage", "AppsFlyer", "OTA Updates"],
    category: "mobile",
    slug: "westside-mobile-app",
    caseStudy: {
      summary:
        "A native iOS and Android shopping app for Westside, the fashion retailer, built in React Native on a Shopify storefront, with an India app and a multi-country GCC edition.",
      challenge:
        "Bring the full westside.com shopping experience into a fast native app, keep the website's header and footer out of it, and let the business publish new content without waiting for an app-store release.",
      sections: [
        {
          heading: "The shopping journey",
          points: [
            "Search with voice input and barcode scanning, plus product listing and product detail pages",
            "Wishlist, cart, and checkout, then orders, returns, and order tracking",
            "Store finder for shoppers who want to visit in person",
          ],
        },
        {
          heading: "Content without app releases",
          points: [
            "Shopify CMS pages render natively inside the app's own header and footer, never as an embedded website",
            "A page added in the CMS opens natively in the app with no code change",
            "Over-the-air JavaScript updates ship fixes to installed apps without a store release",
          ],
        },
        {
          heading: "Loyalty and retail features",
          points: [
            "Loyalty points, wallet, and gift cards inside the app",
            "Member sign-up and profile, addresses, and support screens",
          ],
        },
        {
          heading: "The GCC edition",
          points: [
            "A separate build for the Gulf storefront, with country, locale, and currency switching",
            "CMS pages resolve per selected country, using the same native rendering approach",
          ],
        },
        {
          heading: "Measurement and engagement",
          points: [
            "Firebase Analytics, Crashlytics, and push notifications",
            "MoEngage for customer engagement, AppsFlyer for install attribution, and Meta app events",
          ],
        },
      ],
      stack: [
        { group: "App", items: ["React Native", "TypeScript", "Expo Modules", "Reanimated", "MMKV"] },
        { group: "Commerce", items: ["Shopify"] },
        { group: "Engagement", items: ["Firebase", "MoEngage", "AppsFlyer", "Meta SDK"] },
        { group: "Delivery", items: ["OTA updates", "iOS", "Android"] },
      ],
    },
  },
  {
    name: "Starquik Quick-Commerce App",
    client: "Starquik",
    role: "Technical Delivery Lead | React Native",
    problem:
      "Hyperlocal quick-commerce app (Blinkit / Zomato-style) shipped cross-platform to iOS and Android from a single React Native codebase.",
    contributions: [
      "Led end-to-end delivery and hands-on build of the full browse, cart, and checkout journey with reusable, performant components",
      "Implemented live order tracking with maps and real-time delivery status updates",
      "Integrated secure payments and push notifications for confirmations, promotions, and delivery alerts",
    ],
    technologies: ["React Native", "TypeScript", "Redux Toolkit", "GraphQL", "REST", "Mappls Maps", "Razorpay", "Firebase"],
    category: "mobile",
    slug: "starquik-quick-commerce-app",
    caseStudy: {
      summary:
        "A hyperlocal quick-commerce app for Starquik on iOS and Android, built from a single React Native codebase, covering location-aware shopping, delivery slots, payments, and live order tracking.",
      challenge:
        "Make ordering fast on any phone: find what's available at the shopper's location, pick a delivery slot, pay, and follow the order to the door, on both platforms from one codebase.",
      sections: [
        {
          heading: "Shopping",
          points: [
            "Home banners and recommendations, categories, search, and product listing and detail pages",
            "Wishlist, Buy Again, coupons, cart, and checkout",
          ],
        },
        {
          heading: "Location and delivery",
          points: [
            "Mappls maps and device location for picking and saving delivery addresses",
            "Delivery slot selection and live product availability",
            "Live order tracking with real-time delivery status and notifications",
          ],
        },
        {
          heading: "Payments and account",
          points: [
            "Razorpay and Cashfree payments, plus an in-app wallet",
            "Orders, invoices, saved addresses, and a notification inbox",
          ],
        },
        {
          heading: "Release and growth",
          points: [
            "React Native New Architecture with Hermes, in TypeScript",
            "GraphQL through Apollo Client with a persisted cache, alongside REST services",
            "Firebase Analytics, Crashlytics, push, and Remote Config; Branch deep links; Adjust attribution",
            "Over-the-air JavaScript updates and Android in-app updates, across QA, stage, and production environments",
          ],
        },
      ],
      stack: [
        { group: "App", items: ["React Native", "TypeScript", "Hermes", "React Navigation", "Redux Toolkit", "MMKV"] },
        { group: "Data", items: ["GraphQL", "Apollo Client", "REST"] },
        { group: "Maps and payments", items: ["Mappls Maps", "Razorpay", "Cashfree"] },
        { group: "Growth", items: ["Firebase", "Branch", "Adjust", "OTA updates"] },
      ],
    },
  },
  {
    name: "GKB Opticals E-commerce",
    client: "GKB Opticals",
    role: "Tech Lead | Next.js Developer",
    problem: "Headless eyewear storefront on Magento, supporting large catalogues with lens configuration and store discovery.",
    contributions: [
      "Led the Next.js App Router storefront on Magento GraphQL: catalogue, lens configuration, cart, and checkout",
      "Delivered a store locator with Google Maps and Leaflet, customer accounts, and CMS-driven marketing pages",
      "Integrated Paytm payments and GA4 analytics via Google Tag Manager",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Redux Toolkit", "GraphQL", "Magento 2 (Headless)", "Tailwind", "Paytm"],
    category: "e-commerce",
    slug: "gkb-opticals-ecommerce",
    caseStudy: {
      summary:
        "A headless e-commerce storefront for GKB Opticals, the eyewear retailer, built on the Next.js App Router with a Magento commerce backend over GraphQL.",
      challenge:
        "Sell eyewear online, where shoppers need the right lenses, a valid prescription, and a good fit, while keeping a large catalogue fast and search-friendly.",
      sections: [
        {
          heading: "The storefront",
          points: [
            "Category and product pages, search, cart, and checkout on Magento GraphQL",
            "Customer accounts with orders, addresses, saved prescriptions, appointments, and wishlist",
          ],
        },
        {
          heading: "Lenses and prescriptions",
          points: [
            "A lens flow on the product page for choosing the lens type",
            "Prescription upload as part of that flow",
            "Virtual try-on for frames",
          ],
        },
        {
          heading: "Services beyond the shop",
          points: [
            "Store locator with Google Maps and Leaflet",
            "Pages for the home eye-test service, audiology, and gift cards",
            "A blog and brand campaign pages",
          ],
        },
        {
          heading: "Engineering",
          points: [
            "Next.js App Router on React 19 and TypeScript, with Redux Toolkit for state",
            "Tailwind CSS with Radix UI primitives; forms on React Hook Form and Zod",
            "Paytm payments, and GA4 through Google Tag Manager",
            "Runtime environment config and managed SEO redirects",
          ],
        },
      ],
      stack: [
        { group: "Frontend", items: ["Next.js", "React", "TypeScript", "Redux Toolkit", "Tailwind CSS", "Radix UI"] },
        { group: "Commerce", items: ["Magento 2 (Headless)", "GraphQL", "Apollo Client", "Paytm"] },
        { group: "Maps and forms", items: ["Google Maps", "Leaflet", "React Hook Form", "Zod"] },
        { group: "Analytics", items: ["GA4", "Google Tag Manager"] },
      ],
    },
  },
  {
    name: "Global E-commerce Web Portal",
    client: "Royal Enfield",
    role: "Tech Lead | Next.js Developer",
    problem: "Scalable, SEO-optimised e-commerce platform with dynamic product flows and personalised experiences.",
    contributions: [
      "Led frontend delivery of a scalable, SEO-optimised commerce platform",
      "Built dynamic PLP/PDP flows, personalised accounts, and responsive checkout journeys",
      "Integrated 360° product visualisation; optimised perf with SSR and GraphQL",
    ],
    technologies: ["Next.js", "React", "Tailwind", "Redux", "GraphQL", "JIRA"],
    category: "e-commerce",
  },
  {
    name: "Digital Jewellery Savings Platform",
    client: "Aditya Birla Jewellery",
    role: "Tech Lead | AEM Frontend",
    problem: "Secure e-commerce and savings platform with parent–child portal architecture and KYC onboarding.",
    contributions: [
      "Delivered parent–child portal architecture with shared identity",
      "Implemented SSO, Aadhaar/PAN KYC, dashboards, and payments",
      "Improved SEO/perf via SSR and optimised GraphQL",
    ],
    technologies: ["AEM (React on AEM)", "JavaScript", "Redux", "GraphQL", "REST", "Bootstrap 5"],
    category: "e-commerce",
  },
  {
    name: "Garden Vareli E-commerce",
    client: "Garden Vareli",
    role: "Tech Lead | Next.js Developer",
    problem: "Modern, responsive e-commerce frontend to enhance discovery and online visibility.",
    contributions: [
      "Reusable UI components, API integrations, and global state management",
      "Smooth browsing and purchasing across all devices",
      "Responsive design tuned for every screen size",
    ],
    technologies: ["Next.js", "Tailwind", "JavaScript", "Redux", "GraphQL"],
    category: "e-commerce",
  },
  {
    name: "Firststop Multi-Country",
    client: "Bridgestone",
    role: "Tech Lead | AEM Frontend",
    problem: "Multi-country digital commerce and marketing rollout with shared global components.",
    contributions: [
      "Multi-country rollout architecture with shared global components",
      "Reusable React components + Magento 2 for commerce and bookings",
      "Adobe Analytics for behaviour and conversion tracking",
    ],
    technologies: ["AEM", "React on AEM", "JavaScript", "REST", "Magento 2", "Adobe Analytics"],
    category: "enterprise",
  },
  {
    name: "Corporate Branding",
    client: "Bekaert Dramix Constructions",
    role: "Tech Lead | AEM Frontend",
    problem: "Responsive branding website showcasing products, case studies, and technical resources.",
    contributions: [
      "Custom AEM components and lead-gen forms via REST APIs",
      "SEO, performance, and engagement via analytics-driven optimisation",
      "Responsive branding site with case study modules",
    ],
    technologies: ["AEM", "HTML5", "CSS3", "JavaScript", "REST", "Adobe Analytics"],
    category: "branding",
  },
  {
    name: "OMA Living E-commerce",
    client: "OMA Living",
    role: "Tech Lead | Magento Frontend",
    problem: "Responsive Magento 2 storefront supporting large product catalogues and advanced filtering.",
    contributions: [
      "Optimised frontend performance and UI interactions",
      "Integrated GA4 for behaviour and conversion tracking",
      "Responsive storefront with advanced filtering",
    ],
    technologies: ["Magento 2", "HTML5", "CSS3", "JavaScript", "jQuery", "GA4"],
    category: "e-commerce",
  },
  {
    name: "B2B Pharma E-commerce",
    client: "Dr. Reddy's Laboratories",
    role: "Magento Frontend Developer (Enterprise)",
    problem: "End-to-end UI for a B2B pharma commerce platform spanning homepage to checkout.",
    contributions: [
      "Built custom PLP pages, customer approval flow, notification, and service modules",
      "Implemented Magento PDF invoice design and custom layouts via Page Builder",
      "Translated Adobe XD wireframes into a production storefront UI",
    ],
    technologies: ["Magento 2 (Enterprise)", "HTML5", "CSS3", "JavaScript", "Adobe XD"],
    category: "e-commerce",
  },
  {
    name: "CASA OMA Booking Platform",
    client: "CASA OMA",
    role: "Tech Lead | Next.js Developer",
    problem: "Premium branding site focused on consultation bookings with headless CMS integration.",
    contributions: [
      "Headless Magento 2 for content and backend management",
      "Custom appointment booking flow",
      "Performance tuned across devices",
    ],
    technologies: ["Next.js", "Magento 2 (Headless)", "HTML5", "CSS3"],
    category: "branding",
  },
  {
    name: "ITC Brand Websites",
    client: "ITC Limited",
    role: "AEM Frontend Developer | Tech Lead",
    problem: "Multiple AEM-based brand websites with interactive and gamified experiences.",
    contributions: [
      "Led frontend delivery for select brands (Dark Fantasy, Yippee, Aashirvaad, B Natural, Bingo)",
      "Reusable components improved engagement, SEO, and authoring efficiency",
      "Coordinated designers, content, backend, and QA",
    ],
    technologies: ["Adobe Experience Manager", "React.js", "JavaScript", "HTML5", "CSS3"],
    category: "marketing",
  },
  {
    name: "E-commerce Platform Revamp",
    client: "Butterfly Marketing Ltd",
    role: "Magento Frontend Developer (Enterprise)",
    problem: "Revamped an existing B2C/B2B commerce site to modern standards from homepage to checkout.",
    contributions: [
      "Customised all cart and module UIs from UX wireframes, including external plugin integration",
      "Supported integrations with ERP, Google Analytics, and Salesforce Marketing",
      "Modernised the full storefront experience end-to-end",
    ],
    technologies: ["Magento 2 (Enterprise)", "HTML5", "CSS3", "JavaScript", "ERP", "Salesforce Marketing"],
    category: "e-commerce",
  },
];

export const caseStudies = projects.filter(
  (p): p is Project & { slug: string; caseStudy: CaseStudy } => Boolean(p.slug && p.caseStudy),
);
