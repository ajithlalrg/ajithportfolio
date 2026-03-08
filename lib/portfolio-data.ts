// ============================================================
// Dev City - Portfolio Data
// All portfolio content structured for the open-world game
// ============================================================

// --- Type Definitions ---

export interface SkillCategory {
  id: string;
  name: string;
  skills: string[];
  icon: string;
}

export interface Project {
  id: string;
  name: string;
  client: string;
  role: string;
  category: "e-commerce" | "enterprise" | "marketing" | "branding";
  problem: string;
  contributions: string[];
  techStack: string[];
  scale: number; // 1-5, affects building height
}

export interface Experience {
  id: string;
  company: string;
  location: string;
  roles: { title: string; period: string }[];
  highlights: string[];
}

export interface Certification {
  name: string;
  year: string;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  triggerIsland: string;
  triggerCount?: number;
}

export interface Mission {
  id: string;
  title: string;
  description: string;
  targetIsland: string;
  targetBuilding?: string;
  reward: string;
  npcDialogue: string;
}

export interface IslandConfig {
  id: string;
  name: string;
  subtitle: string;
  color: string;
  emissive: string;
  position: [number, number, number];
  radius: number;
  buildings: BuildingConfig[];
}

export interface BuildingConfig {
  id: string;
  name: string;
  type: "skill" | "project" | "experience" | "info" | "certification";
  position: [number, number, number]; // relative to island
  height: number;
  shape: "box" | "hexagon" | "cylinder" | "pyramid";
  content: SkillCategory | Project | Experience | Certification | InfoContent;
}

export interface InfoContent {
  title: string;
  description: string;
  details: string[];
}

// --- Personal Info ---

export const personalInfo = {
  name: "Ajith Lal R",
  title: "Engineering Manager | Technical Delivery Manager",
  location: "Chennai, India",
  email: "ajithlaldev@gmail.com",
  phone: "+91-8056544229",
  linkedin: "https://www.linkedin.com/in/ajithlalrg/",
  github: "https://github.com/ajithlalrg",
  website: "https://ajithlal-red.vercel.app",
  stats: {
    experience: "9+",
    teamsLed: "20+",
    projectsDelivered: "20+",
    globalClients: "10+",
  },
};

// --- Skills ---

export const skillCategories: SkillCategory[] = [
  {
    id: "leadership",
    name: "Engineering Leadership & Delivery",
    icon: "crown",
    skills: [
      "Engineering Management",
      "Technical Delivery",
      "Agile/Scrum",
      "Sprint Planning",
      "Stakeholder Management",
      "Team Mentoring (20+ Engineers)",
      "Architecture Reviews",
      "Risk Management",
    ],
  },
  {
    id: "frontend",
    name: "Frontend & Web Technologies",
    icon: "code",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "React.js",
      "Next.js",
      "TypeScript",
      "Redux",
      "Bootstrap 4/5",
      "Tailwind CSS",
      "Shadcn",
      "Material UI",
    ],
  },
  {
    id: "cms",
    name: "CMS & Commerce Platforms",
    icon: "store",
    skills: [
      "Adobe Experience Manager (AEM)",
      "Magento 2 (Frontend)",
      "WordPress",
      "Sitecore (Frontend)",
      "Headless CMS Architecture",
    ],
  },
  {
    id: "api",
    name: "APIs & Data",
    icon: "database",
    skills: ["GraphQL", "REST APIs", "API Integration", "Data Architecture"],
  },
  {
    id: "tools",
    name: "Tools & Practices",
    icon: "wrench",
    skills: [
      "JIRA",
      "Performance Optimisation",
      "SEO Best Practices",
      "Responsive Design",
      "Analytics Integration",
      "GitHub Copilot",
      "Git",
      "CI/CD Pipelines",
    ],
  },
];

// --- Projects ---

export const projects: Project[] = [
  {
    id: "royal-enfield-ecommerce",
    name: "Global E-commerce Web Portal",
    client: "Royal Enfield",
    role: "Technical Delivery Manager",
    category: "e-commerce",
    problem:
      "Build a scalable global e-commerce platform serving millions of motorcycle enthusiasts worldwide.",
    contributions: [
      "Led end-to-end frontend architecture and delivery for the global platform",
      "Managed a cross-functional team of 15+ engineers",
      "Implemented performance-first architecture achieving sub-2s load times",
      "Integrated complex product configurators and dealer locators",
    ],
    techStack: ["Next.js", "React", "GraphQL", "TypeScript"],
    scale: 5,
  },
  {
    id: "aditya-birla-jewellery",
    name: "Digital Jewellery Savings Platform",
    client: "Aditya Birla Jewellery",
    role: "Technical Lead",
    category: "e-commerce",
    problem:
      "Create an innovative digital savings and e-commerce platform for jewellery retail.",
    contributions: [
      "Architected the frontend for a novel digital gold savings product",
      "Implemented secure payment and savings plan workflows",
      "Built responsive product catalogs with rich media experiences",
    ],
    techStack: ["AEM", "GraphQL", "JavaScript", "CSS3"],
    scale: 4,
  },
  {
    id: "garden-vareli",
    name: "Garden Vareli E-commerce",
    client: "Garden Vareli",
    role: "Frontend Lead",
    category: "e-commerce",
    problem:
      "Develop a modern e-commerce experience for a fashion and lifestyle brand.",
    contributions: [
      "Built a performant Next.js storefront with dynamic product pages",
      "Implemented advanced filtering and search capabilities",
      "Optimized for mobile-first shopping experience",
    ],
    techStack: ["Next.js", "React", "Tailwind CSS"],
    scale: 3,
  },
  {
    id: "gkb-optical",
    name: "GKB Optical E-commerce",
    client: "GKB Optical",
    role: "Frontend Lead",
    category: "e-commerce",
    problem:
      "Build an online eyewear shopping platform with virtual try-on features.",
    contributions: [
      "Developed a modern e-commerce platform for optical products",
      "Implemented product customization and prescription handling",
      "Built responsive UI with accessibility compliance",
    ],
    techStack: ["Next.js", "React", "TypeScript"],
    scale: 3,
  },
  {
    id: "oma-living",
    name: "OMA Living E-commerce",
    client: "OMA Living",
    role: "Magento Frontend Developer",
    category: "e-commerce",
    problem:
      "Create a premium furniture e-commerce experience with room visualization.",
    contributions: [
      "Built custom Magento 2 frontend theme with premium aesthetics",
      "Implemented complex product configuration for furniture customization",
      "Optimized catalog performance for large product databases",
    ],
    techStack: ["Magento 2", "JavaScript", "CSS3", "jQuery"],
    scale: 3,
  },
  {
    id: "casa-oma",
    name: "CASA OMA Booking Platform",
    client: "CASA OMA",
    role: "Frontend Lead",
    category: "e-commerce",
    problem:
      "Build a headless booking and commerce platform for a hospitality brand.",
    contributions: [
      "Architected headless Magento 2 frontend with Next.js",
      "Integrated booking system with e-commerce checkout",
      "Built a seamless multi-step reservation flow",
    ],
    techStack: ["Next.js", "Headless Magento 2", "GraphQL", "React"],
    scale: 4,
  },
  {
    id: "re-bridge",
    name: "RE-Bridge / RE-Market-Place",
    client: "Royal Enfield",
    role: "Technical Delivery Manager",
    category: "enterprise",
    problem:
      "Build an enterprise dealer management and marketplace platform with advanced analytics.",
    contributions: [
      "Led delivery of an enterprise-grade dealer portal with SAML 2.0 SSO",
      "Integrated Power BI Embedded dashboards for real-time analytics",
      "Managed complex stakeholder requirements across multiple business units",
    ],
    techStack: ["Next.js", "SAML 2.0", "Power BI Embedded", "React"],
    scale: 5,
  },
  {
    id: "bridgestone-firststop",
    name: "Firststop Multi-Country Platform",
    client: "Bridgestone",
    role: "Technical Lead",
    category: "enterprise",
    problem:
      "Deliver a multi-country, multi-language platform for Bridgestone's retail network.",
    contributions: [
      "Led frontend development for a multi-country AEM platform",
      "Implemented Magento 2 integration for service booking",
      "Built scalable component architecture supporting 10+ country variants",
    ],
    techStack: ["AEM", "Magento 2", "JavaScript", "Java"],
    scale: 4,
  },
  {
    id: "morgan-stanley",
    name: "Calvert & Eaton Vance Platform",
    client: "Morgan Stanley",
    role: "Frontend Developer",
    category: "marketing",
    problem:
      "Build sophisticated investment platform websites for Morgan Stanley's subsidiary brands.",
    contributions: [
      "Developed AEM-based platform for financial services content",
      "Built interactive data visualization components for fund performance",
      "Implemented strict accessibility and compliance standards",
    ],
    techStack: ["AEM", "JavaScript", "CSS3", "HTML5"],
    scale: 4,
  },
  {
    id: "bekaert-dramix",
    name: "Corporate Branding Website",
    client: "Bekaert Dramix Constructions",
    role: "Frontend Developer",
    category: "branding",
    problem:
      "Create a global corporate website for a leading construction materials company.",
    contributions: [
      "Built responsive AEM components for global corporate branding",
      "Implemented multi-language support for international markets",
      "Created interactive product specification tools",
    ],
    techStack: ["AEM", "JavaScript", "CSS3", "HTML5"],
    scale: 3,
  },
  {
    id: "itc-brands",
    name: "ITC Brand Websites",
    client: "ITC Limited",
    role: "Frontend Developer",
    category: "branding",
    problem:
      "Deliver brand websites for one of India's largest conglomerates across multiple product lines.",
    contributions: [
      "Developed AEM-based brand websites for multiple ITC product lines",
      "Built reusable component library for brand consistency",
      "Implemented analytics and tracking across brand portfolios",
    ],
    techStack: ["AEM", "JavaScript", "CSS3", "HTML5"],
    scale: 3,
  },
];

// --- Experience ---

export const experiences: Experience[] = [
  {
    id: "pwc",
    company: "PwC India",
    location: "Chennai, India",
    roles: [
      { title: "Manager (Technical / Delivery)", period: "May 2025 – Present" },
      { title: "Senior Associate", period: "Apr 2022 – Apr 2025" },
      { title: "Associate", period: "Nov 2020 – Mar 2022" },
    ],
    highlights: [
      "Leading large-scale digital platform delivery for Fortune 500 clients",
      "Managing cross-functional teams of 20+ engineers",
      "Driving frontend architecture standards and best practices",
      "Stakeholder management across multiple geographies",
      "Mentoring and growing engineering talent",
    ],
  },
  {
    id: "truetech",
    company: "Truetech Solutions",
    location: "Chennai, India",
    roles: [
      { title: "Frontend Developer", period: "Sep 2019 – Oct 2020" },
    ],
    highlights: [
      "Magento 2 and AEM frontend implementations",
      "Built responsive e-commerce experiences",
      "Performance optimization and SEO improvements",
    ],
  },
  {
    id: "springbord",
    company: "Springbord Systems Pvt. Ltd.",
    location: "Chennai, India",
    roles: [{ title: "PHP Web Developer", period: "Mar 2019 – Aug 2019" }],
    highlights: [
      "Full-stack web development with PHP",
      "Database design and API development",
    ],
  },
  {
    id: "vedang",
    company: "Vedang Consultancy Services Pvt. Ltd.",
    location: "Chennai, India",
    roles: [
      {
        title: "Executive Software Developer",
        period: "Oct 2018 – Feb 2019",
      },
    ],
    highlights: [
      "Software development and client delivery",
      "Cross-functional team collaboration",
    ],
  },
  {
    id: "codeafterbuild",
    company: "CodeAfterBuild",
    location: "Nagercoil, India",
    roles: [{ title: "PHP Web Developer", period: "Oct 2016 – Sep 2018" }],
    highlights: [
      "Built web applications from scratch",
      "Client requirement gathering and delivery",
      "Full development lifecycle experience",
    ],
  },
];

// --- Certifications ---

export const certifications: Certification[] = [
  {
    name: "Adobe Certified Expert – Commerce Frontend Developer",
    year: "2023",
  },
  {
    name: "Adobe Certified Professional – Commerce Business Practitioner",
    year: "2023",
  },
];

// --- Achievements ---

export const achievements: Achievement[] = [
  {
    id: "system-architect",
    name: "System Architect",
    description: "Explored the Architecture Park and discovered system designs",
    icon: "blueprint",
    triggerIsland: "architecture",
  },
  {
    id: "ecommerce-builder",
    name: "E-commerce Builder",
    description: "Visited all e-commerce project towers",
    icon: "store",
    triggerIsland: "projects",
    triggerCount: 6,
  },
  {
    id: "ai-explorer",
    name: "AI Explorer",
    description: "Discovered the Innovation Lab experiments",
    icon: "brain",
    triggerIsland: "innovation",
  },
  {
    id: "tech-leader",
    name: "Tech Leader",
    description: "Explored the Leadership Center command hub",
    icon: "crown",
    triggerIsland: "leadership",
  },
  {
    id: "full-stack-pioneer",
    name: "Full Stack Pioneer",
    description: "Discovered all technology districts",
    icon: "layers",
    triggerIsland: "tech",
    triggerCount: 5,
  },
  {
    id: "world-explorer",
    name: "World Explorer",
    description: "Visited every island in Dev City",
    icon: "globe",
    triggerIsland: "all",
  },
  {
    id: "first-contact",
    name: "First Contact",
    description: "Interacted with your first building",
    icon: "handshake",
    triggerIsland: "any",
  },
  {
    id: "certified-pro",
    name: "Certified Professional",
    description: "Found both Adobe certifications",
    icon: "award",
    triggerIsland: "tech",
    triggerCount: 2,
  },
];

// --- Missions ---

export const missions: Mission[] = [
  {
    id: "welcome",
    title: "Welcome to Dev City",
    description:
      "Start your journey by exploring the Central Hub and learning about Ajith's career.",
    targetIsland: "hub",
    reward: "Career Overview Unlocked",
    npcDialogue:
      "Welcome, explorer! I'm ARIA, your guide to Dev City. This floating archipelago represents Ajith's 9+ year engineering journey. Start by visiting the info terminal right here in the hub!",
  },
  {
    id: "visit-tech",
    title: "Tech Discovery",
    description:
      "Travel to the Tech District and explore the technology buildings.",
    targetIsland: "tech",
    reward: "Tech Profile Unlocked",
    npcDialogue:
      "Great progress! Now head to the Tech District — the cyan island to the east. Each building there represents a different technology domain Ajith has mastered.",
  },
  {
    id: "visit-projects",
    title: "Project Expedition",
    description:
      "Visit the Project Towers island and inspect at least 3 project skyscrapers.",
    targetIsland: "projects",
    targetBuilding: "royal-enfield-ecommerce",
    reward: "Project Portfolio Unlocked",
    npcDialogue:
      "Time to see the real work! Head to the purple Project Towers island. The tallest tower is the Royal Enfield Global E-commerce platform — a massive undertaking!",
  },
  {
    id: "visit-architecture",
    title: "Architecture Expedition",
    description:
      "Explore the Architecture Park and discover system design patterns.",
    targetIsland: "architecture",
    reward: "System Architect Badge",
    npcDialogue:
      "The green Architecture Park island holds the blueprints of complex systems. Explore the holographic structures to see how everything connects!",
  },
  {
    id: "visit-leadership",
    title: "Leadership Journey",
    description:
      "Enter the Leadership Center and review management achievements.",
    targetIsland: "leadership",
    reward: "Leadership Insights Unlocked",
    npcDialogue:
      "The amber Leadership Center showcases Ajith's journey from developer to engineering manager. See the dashboards showing team growth and delivery metrics!",
  },
  {
    id: "visit-innovation",
    title: "Innovation Quest",
    description:
      "Discover the Innovation Lab and explore future technologies.",
    targetIsland: "innovation",
    reward: "Innovation Badge",
    npcDialogue:
      "Final destination: the pink Innovation Lab! This is where cutting-edge experiments and future tech ideas live. Complete this to become a true Dev City explorer!",
  },
];

// --- Island Configurations ---

export const islands: IslandConfig[] = [
  {
    id: "hub",
    name: "Central Hub",
    subtitle: "Career Command Center",
    color: "#e2e8f0",
    emissive: "#94a3b8",
    position: [0, 0, 0],
    radius: 18,
    buildings: [
      {
        id: "career-overview",
        name: "Career Overview",
        type: "info",
        position: [0, 0, -5],
        height: 4,
        shape: "cylinder",
        content: {
          title: "Ajith Lal R — Career Overview",
          description: `Engineering Manager & Technical Delivery Manager with ${personalInfo.stats.experience} years of experience leading large-scale digital platforms.`,
          details: [
            `${personalInfo.stats.experience} Years of Experience`,
            `${personalInfo.stats.teamsLed} Engineers Mentored`,
            `${personalInfo.stats.projectsDelivered} Projects Delivered`,
            `${personalInfo.stats.globalClients} Global Clients`,
            "Currently: Manager at PwC India",
            "Specializing in Frontend Architecture & Team Leadership",
          ],
        } as InfoContent,
      },
      {
        id: "education",
        name: "Education",
        type: "info",
        position: [6, 0, 4],
        height: 3,
        shape: "pyramid",
        content: {
          title: "Education",
          description: "Academic foundation in engineering.",
          details: [
            "Bachelor of Engineering",
            "Electronics & Communication",
            "St. Xavier's Catholic College of Engineering",
            "Graduated: 2015",
          ],
        } as InfoContent,
      },
      {
        id: "contact-hub",
        name: "Contact Terminal",
        type: "info",
        position: [-6, 0, 4],
        height: 3,
        shape: "cylinder",
        content: {
          title: "Connect with Ajith",
          description: "Get in touch for opportunities and collaboration.",
          details: [
            `Email: ${personalInfo.email}`,
            `Phone: ${personalInfo.phone}`,
            `LinkedIn: ${personalInfo.linkedin}`,
            `GitHub: ${personalInfo.github}`,
            `Location: ${personalInfo.location}`,
            "Open to: Remote / Relocation / Visa Sponsorship",
          ],
        } as InfoContent,
      },
    ],
  },
  {
    id: "tech",
    name: "Tech District",
    subtitle: "Technology Mastery Zone",
    color: "#00f0ff",
    emissive: "#0891b2",
    position: [65, 5, 0],
    radius: 22,
    buildings: [
      ...skillCategories.map((cat, i) => {
        const angle = (i / skillCategories.length) * Math.PI * 2 - Math.PI / 2;
        const radius = 10;
        return {
          id: `skill-${cat.id}`,
          name: cat.name,
          type: "skill" as const,
          position: [
            Math.cos(angle) * radius,
            0,
            Math.sin(angle) * radius,
          ] as [number, number, number],
          height: 3 + cat.skills.length * 0.3,
          shape: "hexagon" as const,
          content: cat,
        };
      }),
      ...certifications.map((cert, i) => ({
        id: `cert-${i}`,
        name: cert.name.split("–")[0].trim(),
        type: "certification" as const,
        position: [i === 0 ? -4 : 4, 0, 0] as [number, number, number],
        height: 2.5,
        shape: "pyramid" as const,
        content: cert,
      })),
    ],
  },
  {
    id: "projects",
    name: "Project Towers",
    subtitle: "Portfolio Skyscrapers",
    color: "#8b5cf6",
    emissive: "#7c3aed",
    position: [20, 8, 62],
    radius: 25,
    buildings: projects.map((project, i) => {
      const angle = (i / projects.length) * Math.PI * 2;
      const r = 8 + (i % 2) * 5;
      return {
        id: project.id,
        name: project.name,
        type: "project" as const,
        position: [Math.cos(angle) * r, 0, Math.sin(angle) * r] as [
          number,
          number,
          number,
        ],
        height: project.scale * 2,
        shape: "box" as const,
        content: project,
      };
    }),
  },
  {
    id: "architecture",
    name: "Architecture Park",
    subtitle: "System Design Garden",
    color: "#10b981",
    emissive: "#059669",
    position: [-55, 3, 40],
    radius: 20,
    buildings: [
      {
        id: "microservices",
        name: "Microservices Architecture",
        type: "info",
        position: [0, 0, -6],
        height: 5,
        shape: "hexagon",
        content: {
          title: "Microservices Architecture",
          description:
            "Designing scalable systems with independently deployable services.",
          details: [
            "Service decomposition and bounded contexts",
            "API Gateway patterns for request routing",
            "Event-driven communication between services",
            "Container orchestration with Docker & Kubernetes",
            "Database per service pattern",
            "Circuit breaker and resilience patterns",
          ],
        } as InfoContent,
      },
      {
        id: "headless-commerce",
        name: "Headless Commerce",
        type: "info",
        position: [7, 0, 3],
        height: 4,
        shape: "box",
        content: {
          title: "Headless Commerce Architecture",
          description:
            "Decoupled frontend-backend architecture for flexible e-commerce.",
          details: [
            "Next.js frontend with Magento 2 backend",
            "GraphQL API layer for data fetching",
            "CDN-first content delivery strategy",
            "Incremental Static Regeneration (ISR)",
            "Multi-channel commerce support",
            "Performance: sub-2s page loads globally",
          ],
        } as InfoContent,
      },
      {
        id: "frontend-architecture",
        name: "Frontend Architecture",
        type: "info",
        position: [-7, 0, 3],
        height: 4.5,
        shape: "cylinder",
        content: {
          title: "Modern Frontend Architecture",
          description:
            "Scalable frontend systems built for enterprise applications.",
          details: [
            "Component-driven development (React/Next.js)",
            "Design system and shared component libraries",
            "State management patterns (Redux, Context)",
            "Performance optimization (code splitting, lazy loading)",
            "Testing strategies (unit, integration, e2e)",
            "CI/CD pipeline integration for frontend",
          ],
        } as InfoContent,
      },
      {
        id: "aem-architecture",
        name: "AEM Platform Architecture",
        type: "info",
        position: [0, 0, 8],
        height: 4,
        shape: "hexagon",
        content: {
          title: "Adobe Experience Manager Architecture",
          description:
            "Enterprise content management for global brand experiences.",
          details: [
            "AEM Sites component architecture (HTL/Sling)",
            "Multi-site management for global rollouts",
            "Content Fragment and Experience Fragment patterns",
            "AEM as a Cloud Service migration strategies",
            "Integration with Adobe Commerce (Magento)",
            "DAM and asset management workflows",
          ],
        } as InfoContent,
      },
    ],
  },
  {
    id: "leadership",
    name: "Leadership Center",
    subtitle: "Command & Delivery Hub",
    color: "#f59e0b",
    emissive: "#d97706",
    position: [-55, 6, -40],
    radius: 20,
    buildings: experiences.map((exp, i) => {
      const angle = (i / experiences.length) * Math.PI * 2 - Math.PI / 2;
      const r = 9;
      return {
        id: exp.id,
        name: exp.company,
        type: "experience" as const,
        position: [Math.cos(angle) * r, 0, Math.sin(angle) * r] as [
          number,
          number,
          number,
        ],
        height: 2 + exp.roles.length * 1.5,
        shape: "cylinder" as const,
        content: exp,
      };
    }),
  },
  {
    id: "innovation",
    name: "Innovation Lab",
    subtitle: "Future Tech Experiments",
    color: "#ec4899",
    emissive: "#db2777",
    position: [20, 10, -62],
    radius: 18,
    buildings: [
      {
        id: "ai-experiments",
        name: "AI & ML Experiments",
        type: "info",
        position: [0, 0, -5],
        height: 5,
        shape: "pyramid",
        content: {
          title: "AI & Machine Learning",
          description:
            "Exploring AI-powered solutions for software engineering.",
          details: [
            "GitHub Copilot integration in development workflows",
            "AI-assisted code review and quality assurance",
            "LLM-powered documentation generation",
            "Intelligent test case generation",
            "AI-driven performance monitoring and alerting",
            "Exploring Claude and ChatGPT for developer productivity",
          ],
        } as InfoContent,
      },
      {
        id: "future-web",
        name: "Future of Web",
        type: "info",
        position: [6, 0, 4],
        height: 4,
        shape: "hexagon",
        content: {
          title: "Future Web Technologies",
          description: "Next generation web platform capabilities.",
          details: [
            "WebAssembly for high-performance web apps",
            "Edge computing and edge-first architecture",
            "Web3 and decentralized application patterns",
            "Progressive Web Apps (PWA) evolution",
            "Server Components and streaming SSR",
            "View Transitions API for native-like navigation",
          ],
        } as InfoContent,
      },
      {
        id: "dev-tools",
        name: "Developer Experience",
        type: "info",
        position: [-6, 0, 4],
        height: 3.5,
        shape: "box",
        content: {
          title: "Developer Experience Innovation",
          description: "Building tools and processes that accelerate teams.",
          details: [
            "Monorepo tooling (Turborepo, Nx)",
            "Component documentation (Storybook)",
            "Automated testing pipelines",
            "Design-to-code workflows",
            "Performance budgets and monitoring",
            "Developer onboarding acceleration",
          ],
        } as InfoContent,
      },
    ],
  },
];

// --- Helper Functions ---

export function getIslandById(id: string): IslandConfig | undefined {
  return islands.find((island) => island.id === id);
}

export function getBuildingById(buildingId: string): {
  building: BuildingConfig;
  island: IslandConfig;
} | undefined {
  for (const island of islands) {
    const building = island.buildings.find((b) => b.id === buildingId);
    if (building) return { building, island };
  }
  return undefined;
}

export function getProjectsByCategory(category: string): Project[] {
  return projects.filter((p) => p.category === category);
}
