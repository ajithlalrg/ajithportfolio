// One list feeds both the visible FAQ section and the FAQPage JSON-LD, so they can't drift apart.
export type Faq = { question: string; answer: string };

export function faqs(yoe: number): Faq[] {
  return [
    {
      question: "Who is Ajith Lal R?",
      answer: `Ajith Lal R is an Engineering Manager and Technical Delivery Manager with ${yoe}+ years of experience building enterprise-scale digital platforms. He currently leads 20+ engineers at PwC India, shipping work across e-commerce, retail, travel, content, and mobile using Next.js, React, React Native, Adobe Experience Manager (AEM), and Magento.`,
    },
    {
      question: "What does Ajith Lal R do?",
      answer:
        "Ajith Lal R runs delivery and frontend architecture for large web platforms. He manages engineering teams, owns technical roadmaps, drives stakeholder alignment, and architects headless-CMS, commerce, and cross-platform mobile systems on Next.js, React, React Native, AEM, and Magento.",
    },
    {
      question: "Has Ajith Lal R built mobile apps?",
      answer:
        "Yes. He led delivery and the hands-on build of React Native apps for iOS and Android, including the Westside fashion shopping app on Shopify and the Starquik quick-commerce app with delivery slots, payments, and live order tracking.",
    },
    {
      question: "Which brands has Ajith Lal R worked with?",
      answer:
        "His project work includes Westside, Starquik, GKB Opticals, Royal Enfield, Aditya Birla Jewellery, Bridgestone, ITC Limited, Dr. Reddy's Laboratories, Garden Vareli, OMA Living, and Bekaert.",
    },
    {
      question: "Where is Ajith Lal R based?",
      answer: "Ajith Lal R is based in Chennai, Tamil Nadu, India, and is open to remote engagements.",
    },
    {
      question: "What technologies and tools does Ajith Lal R specialize in?",
      answer:
        "His core stack is Next.js, React, React Native, TypeScript, Adobe Experience Manager (AEM), and Magento. He also works across headless CMS architectures, cross-platform mobile, frontend performance, design systems, and CI/CD delivery practices.",
    },
    {
      question: "What certifications does Ajith Lal R hold?",
      answer:
        "Ajith Lal R is an Adobe Certified Expert — Commerce Frontend Developer and an Adobe Certified Professional — Commerce Business Practitioner.",
    },
    {
      question: "Is Ajith Lal R available for hire?",
      answer:
        "Yes. Ajith Lal R is open to Engineering Manager, Technical Delivery Manager, and Frontend Architect roles — full-time, contract, or consulting — based in Chennai or remote.",
    },
  ];
}
