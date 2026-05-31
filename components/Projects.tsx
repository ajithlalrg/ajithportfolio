"use client";

import { motion } from "framer-motion";
import TiltCard from "./TiltCard";
import Marquee from "./Marquee";
import SplitText from "./SplitText";

type Category = "e-commerce" | "enterprise" | "marketing" | "branding" | "mobile";

type Project = {
  name: string;
  client: string;
  role: string;
  problem: string;
  contributions: string[];
  technologies: string[];
  category: Category;
};

const categoryStyle: Record<Category, { bg: string; text: string; label: string; tilt: number }> = {
  enterprise: { bg: "bg-ink", text: "text-bone", label: "ENTERPRISE", tilt: -1.5 },
  "e-commerce": { bg: "bg-canvas", text: "text-bone", label: "E-COMMERCE", tilt: 1.5 },
  mobile: { bg: "bg-blood", text: "text-bone", label: "MOBILE", tilt: -2 },
  marketing: { bg: "bg-neon", text: "text-ink", label: "MARKETING", tilt: -2 },
  branding: { bg: "bg-canvas-hi", text: "text-bone", label: "BRANDING", tilt: 2 },
};

const projects: Project[] = [
  {
    name: "RE-Bridge (RE-Market-Place)",
    client: "Royal Enfield",
    role: "Engineering Lead / Technical Delivery Manager",
    problem:
      "Centralised dealer analytics, business KPIs, and per-user app access with secure auth — at enterprise scale.",
    contributions: [
      "Designed and implemented SAML 2.0 SSO with IdP integration and JWT-based session management",
      "Delivered Power BI Embedded analytics with Row-Level Security for personalised dashboards",
      "Integrated MyApps for single-click access to authorised enterprise applications",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Redux Toolkit", "SAML 2.0", "JWT", "Power BI", "Tailwind"],
    category: "enterprise",
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
    technologies: ["React Native", "TypeScript", "Redux", "REST", "Maps SDK", "Push Notifications", "Payments"],
    category: "mobile",
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
    name: "GKB Optical E-commerce",
    client: "GKB Optical",
    role: "Tech Lead | Next.js Developer",
    problem: "Scalable eyewear e-commerce supporting large catalogues with optimal performance.",
    contributions: [
      "Responsive UI components and GraphQL APIs for product/inventory data",
      "Improved performance, stability, and omnichannel UX",
      "Scaled to support large catalogues",
    ],
    technologies: ["Next.js", "Tailwind", "JavaScript", "Redux", "GraphQL"],
    category: "e-commerce",
  },
  {
    name: "Calvert & Eaton Vance",
    client: "Morgan Stanley",
    role: "AEM Frontend Developer",
    problem: "Component-driven microsite architecture with subscription management for a marketing platform.",
    contributions: [
      "Component-driven microsite arch using JSON-based rendering in AEM",
      "Subscription centre + enhanced product and resource pages",
      "Partnered with marketing and business on campaign alignment",
    ],
    technologies: ["Adobe Experience Manager", "React", "JavaScript", "HTML", "CSS"],
    category: "marketing",
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
      "Integrated GA4 — contributed to 30% lift in online sales post-launch",
      "Responsive storefront with advanced filtering",
    ],
    technologies: ["Magento 2", "HTML5", "CSS3", "JavaScript", "jQuery", "GA4"],
    category: "e-commerce",
  },
  {
    name: "B2B Pharma E-commerce",
    client: "Dr. Reddy's Laboratories",
    role: "Magento Frontend Developer (Enterprise)",
    problem: "End-to-end UI for a B2B pharma commerce platform spanning homepage to checkout, integrated with SAP ERP.",
    contributions: [
      "Built custom PLP pages, customer approval flow, notification, and service modules wired to SAP ERP",
      "Implemented Magento PDF invoice design and custom layouts via Page Builder",
      "Translated Adobe XD wireframes into a production storefront UI",
    ],
    technologies: ["Magento 2 (Enterprise)", "SAP ERP", "HTML5", "CSS3", "JavaScript", "Adobe XD"],
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
  {
    name: "Fit For Growth (FFG) Central",
    client: "PwC US (Internal)",
    role: "Magento Frontend Developer (Community)",
    problem: "Internal B2C template-purchasing platform for global PwC (US), delivered end-to-end.",
    contributions: [
      "Delivered the UI end-to-end from homepage to checkout",
      "Built mobile-responsive layouts across the full purchase journey",
      "Shipped on Magento 2 Community for an internal enterprise audience",
    ],
    technologies: ["Magento 2 (Community)", "HTML5", "CSS3", "JavaScript"],
    category: "enterprise",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-24 px-4 sm:px-6 bg-bone text-ink border-y-[3px] border-ink overflow-hidden"
    >
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" aria-hidden />

      {/* full-bleed marquee on top */}
      <div className="absolute top-0 left-0 right-0 bg-canvas text-bone py-2 border-b-[3px] border-ink overflow-hidden">
        <Marquee
          items={[
            <span key="a" className="display text-xl">15 PLATFORMS</span>,
            <span key="b" className="display text-xl text-neon">★</span>,
            <span key="c" className="display text-xl">10+ GLOBAL CLIENTS</span>,
            <span key="d" className="display text-xl text-neon">★</span>,
            <span key="e" className="display text-xl">ENTERPRISE / E-COMMERCE / MOBILE / MARKETING / BRANDING</span>,
            <span key="f" className="display text-xl text-neon">★</span>,
          ]}
          separator={<span className="mx-5 display text-xl">/</span>}
        />
      </div>

      <div className="relative max-w-7xl mx-auto pt-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex flex-wrap items-end justify-between gap-4"
        >
          <div>
            <div className="inline-block bg-canvas text-bone px-3 py-1 mono uppercase text-[11px] tracking-widest mb-3">
              05 / Work
            </div>
            <h2 className="display text-5xl sm:text-7xl">
              <SplitText text="THE BRAG" />{" "}
              <SplitText text="WALL." delay={0.12} className="bg-ink text-neon border-[3px] border-ink inline-block px-3" />
            </h2>
          </div>
          <p className="mono text-sm uppercase tracking-widest max-w-md">
            Real shipped. Real revenue. Real bugs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-7" style={{ perspective: "1400px" }}>
          {projects.map((p, i) => {
            const style = categoryStyle[p.category];
            return (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: (i % 4) * 0.07 }}
              >
                <TiltCard max={8} className="brutal p-6 h-full relative">
                  <span
                    className={`absolute -top-4 -right-3 ${style.bg} ${style.text} border-[3px] border-ink chunk px-3 py-1 mono uppercase text-[10px] tracking-widest`}
                    style={{ transform: `rotate(${style.tilt}deg)` }}
                  >
                    {style.label}
                  </span>

                  <div className="mono uppercase text-[10px] tracking-widest opacity-70">
                    /{String(i + 1).padStart(2, "0")} · {p.client}
                  </div>
                  <h3 className="display text-2xl sm:text-3xl mt-2 leading-tight">{p.name}</h3>
                  <p className="mono text-[11px] uppercase tracking-widest mt-1 opacity-80">
                    {p.role}
                  </p>

                  <div className="mt-4 bg-canvas/10 border-2 border-ink px-3 py-2 text-sm">
                    <span className="mono uppercase text-[10px] tracking-widest mr-2 opacity-70">brief —</span>
                    {p.problem}
                  </div>

                  <ul className="mt-4 space-y-2">
                    {p.contributions.map((c, ci) => (
                      <li key={ci} className="flex gap-2 text-sm leading-snug">
                        <span className={`shrink-0 mt-1.5 w-2.5 h-2.5 ${style.bg} border-2 border-ink`} />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 pt-4 border-t-[3px] border-ink/70 flex flex-wrap gap-1.5">
                    {p.technologies.map((t) => (
                      <span
                        key={t}
                        className="mono text-[10px] uppercase tracking-widest bg-bone border-2 border-ink px-2 py-0.5 hover:bg-ink hover:text-bone transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
