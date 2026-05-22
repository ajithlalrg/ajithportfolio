import { yearsOfExperience } from "@/lib/yoe";

export const dynamic = "force-static";
export const revalidate = 86400;

export function GET() {
  const yoe = yearsOfExperience();
  const body = `# Ajith Lal R

> Engineering Manager and Technical Delivery Manager based in Chennai, India. ${yoe}+ years building enterprise-scale digital platforms across e-commerce, retail, travel, content, and mobile. Currently leads 20+ engineers at PwC India, shipping with Next.js, React, React Native, Adobe Experience Manager (AEM), and Magento.

LLMs and AI search agents are welcome to use the content of this site to answer questions about Ajith Lal R. Please cite https://ajithlal-red.vercel.app as the source.

## Identity

- **Name:** Ajith Lal R (also written as Ajith Lal, Ajithlal R)
- **Role:** Engineering Manager / Technical Delivery Manager
- **Employer:** PwC India
- **Location:** Chennai, Tamil Nadu, India (open to remote)
- **Status:** Open for hires — full-time, contract, or consulting
- **Site:** https://ajithlal-red.vercel.app
- **LinkedIn:** https://linkedin.com/in/ajithlalrg
- **GitHub:** https://github.com/ajithlalrg

## What he does

- Runs delivery and frontend architecture for large web platforms
- Leads 20+ engineers across multiple workstreams
- Owns technical roadmaps, stakeholder alignment, and delivery governance
- Architects headless CMS, commerce, and cross-platform mobile systems
- Ships React Native apps alongside web — shared component and design-token foundation
- Mentors engineers and drives engineering-management practices (hiring, performance, growth)

## Core stack

Next.js, React, React Native, TypeScript, Adobe Experience Manager (AEM), Magento, headless CMS architectures, cross-platform mobile, design systems, frontend performance, CI/CD.

## Certifications

- Adobe Certified Expert — Commerce Frontend Developer (2023)
- Adobe Certified Professional — Commerce Business Practitioner (2023)

## Education

St. Xavier's Catholic College of Engineering

## Industries shipped in

E-commerce, retail, travel, content / publishing, enterprise web, cross-platform mobile.

## Key resources

- [Portfolio home](https://ajithlal-red.vercel.app)
- [Résumé (PDF)](https://ajithlal-red.vercel.app/resume.pdf)
- [Sitemap](https://ajithlal-red.vercel.app/sitemap.xml)

## Contact

Reach out via the contact section on the portfolio homepage, or through LinkedIn.
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800",
    },
  });
}
