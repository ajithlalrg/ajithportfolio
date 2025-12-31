'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Layers } from 'lucide-react';

interface Project {
  name: string;
  client: string;
  role: string;
  problem: string;
  contributions: string[];
  technologies: string[];
  category: 'e-commerce' | 'enterprise' | 'marketing' | 'branding';
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects: Project[] = [
    {
      name: 'RE-Bridge (RE-Market-Place)',
      client: 'Royal Enfield',
      role: 'Engineering Lead / Technical Delivery Manager',
      problem: 'Royal Enfield needed an enterprise platform centralising dealer analytics, business KPIs, and user-specific application access with secure authentication.',
      contributions: [
        'Designed and implemented SAML 2.0–based SSO with IdP integration and secure JWT-based session management',
        'Delivered Power BI Embedded analytics with Row-Level Security (RLS) for personalised dashboards',
        'Integrated MyApps for single-click access to authorised enterprise applications',
        'Supported production-ready deployments across Dev, UAT, and Prod environments',
      ],
      technologies: ['Next.js', 'React', 'TypeScript', 'Redux Toolkit', 'SAML 2.0', 'JWT', 'Power BI Embedded', 'Tailwind CSS', 'REST APIs'],
      category: 'enterprise',
    },
    {
      name: 'Global E-commerce Web Portal',
      client: 'Royal Enfield',
      role: 'Tech Lead | Next.js Developer',
      problem: 'Build a scalable, SEO-optimised e-commerce platform with dynamic product flows and personalised user experiences.',
      contributions: [
        'Led frontend delivery of a scalable, SEO-optimised e-commerce platform',
        'Built dynamic PLP/PDP flows, personalised user accounts, and responsive cart/checkout journeys',
        'Integrated 360° product visualisation and optimised performance using SSR and GraphQL',
      ],
      technologies: ['Next.js', 'React', 'Tailwind CSS', 'Redux', 'GraphQL', 'JIRA'],
      category: 'e-commerce',
    },
    {
      name: 'Digital Jewellery Savings Platform',
      client: 'Aditya Birla Jewellery',
      role: 'Tech Lead | AEM Frontend Developer',
      problem: 'Create a secure e-commerce and savings platform with parent–child portal architecture and KYC-based onboarding.',
      contributions: [
        'Delivered a secure e-commerce and savings platform with parent–child portal architecture',
        'Implemented SSO, KYC-based onboarding (Aadhaar/PAN), dashboards, and payment integrations',
        'Improved SEO and performance using SSR and optimised GraphQL data fetching',
      ],
      technologies: ['AEM (React on AEM)', 'JavaScript', 'Redux', 'GraphQL', 'REST APIs', 'Bootstrap 5', 'JIRA'],
      category: 'e-commerce',
    },
    {
      name: 'Garden Vareli E-commerce',
      client: 'Garden Vareli',
      role: 'Tech Lead | Next.js Developer',
      problem: 'Build a modern, responsive e-commerce frontend to enhance product discovery and online visibility.',
      contributions: [
        'Implemented reusable UI components, API integrations, and global state management',
        'Delivered a scalable platform supporting smooth browsing and purchasing across devices',
        'Built responsive design optimised for all screen sizes',
      ],
      technologies: ['Next.js', 'Tailwind CSS', 'JavaScript', 'Redux', 'GraphQL', 'JIRA'],
      category: 'e-commerce',
    },
    {
      name: 'GKB Optical E-commerce',
      client: 'GKB Optical',
      role: 'Tech Lead | Next.js Developer',
      problem: 'Develop a scalable eyewear e-commerce platform supporting large product catalogues with optimal performance.',
      contributions: [
        'Built responsive UI components and integrated GraphQL APIs for product and inventory data',
        'Improved performance, stability, and omnichannel user experience',
        'Developed a scalable eyewear e-commerce platform supporting large product catalogues',
      ],
      technologies: ['Next.js', 'Tailwind CSS', 'JavaScript', 'Redux', 'GraphQL', 'JIRA'],
      category: 'e-commerce',
    },
    {
      name: 'Calvert & Eaton Vance Platform',
      client: 'Morgan Stanley',
      role: 'AEM Frontend Developer',
      problem: 'Implement component-driven microsite architecture for marketing platform with subscription management.',
      contributions: [
        'Implemented component-driven microsite architecture using JSON-based rendering in AEM',
        'Built a subscription centre and enhanced product and resource pages for usability and performance',
        'Collaborated with marketing and business teams to align delivery with campaign objectives',
      ],
      technologies: ['Adobe Experience Manager', 'React', 'JavaScript', 'HTML', 'CSS', 'REST APIs'],
      category: 'marketing',
    },
    {
      name: 'Firststop Multi-Country Platform',
      client: 'Bridgestone',
      role: 'Tech Lead | AEM Frontend',
      problem: 'Create a multi-country rollout architecture for digital commerce and marketing with shared global components.',
      contributions: [
        'Led a multi-country rollout architecture using AEM with shared global components',
        'Built reusable React components and integrated Magento 2 for commerce and service bookings',
        'Implemented Adobe Analytics for tracking user behaviour and conversions',
      ],
      technologies: ['AEM', 'React on AEM', 'JavaScript', 'REST APIs', 'Magento 2', 'Adobe Analytics'],
      category: 'enterprise',
    },
    {
      name: 'Corporate Branding Website',
      client: 'Bekaert Dramix Constructions',
      role: 'Tech Lead | AEM Frontend Developer',
      problem: 'Design and develop a responsive branding website showcasing products, case studies, and technical resources.',
      contributions: [
        'Built custom AEM components and lead-generation forms integrated via REST APIs',
        'Improved SEO, performance, and engagement using analytics-driven optimisation',
        'Designed and developed a responsive branding website showcasing products and case studies',
      ],
      technologies: ['AEM', 'HTML5', 'CSS3', 'JavaScript', 'REST APIs', 'Adobe Analytics'],
      category: 'branding',
    },
    {
      name: 'OMA Living E-commerce',
      client: 'OMA Living',
      role: 'Tech Lead | Magento Frontend Developer',
      problem: 'Deliver a responsive Magento 2 storefront supporting large product catalogues and advanced filtering.',
      contributions: [
        'Optimised frontend performance and UI interactions for improved usability',
        'Integrated Google Analytics 4, contributing to a 30% increase in online sales post-launch',
        'Delivered a responsive Magento 2 storefront with advanced filtering',
      ],
      technologies: ['Magento 2', 'HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Google Analytics 4'],
      category: 'e-commerce',
    },
    {
      name: 'CASA OMA Booking Platform',
      client: 'CASA OMA',
      role: 'Tech Lead | Next.js Developer',
      problem: 'Build a premium branding website focused on consultation bookings with headless CMS integration.',
      contributions: [
        'Integrated headless Magento 2 for content and backend management',
        'Implemented a custom appointment booking flow and optimised performance across devices',
        'Built a premium branding website focused on consultation bookings',
      ],
      technologies: ['Next.js', 'Magento 2 (Headless)', 'HTML5', 'CSS3', 'JavaScript'],
      category: 'branding',
    },
    {
      name: 'ITC Brand Websites',
      client: 'ITC Limited (Dark Fantasy, Sunfeast Yippee, Aashirvaad, B Natural, Bingo)',
      role: 'AEM Frontend Developer | Tech Lead',
      problem: 'Design and develop multiple AEM-based brand websites with interactive and gamified experiences.',
      contributions: [
        'Led frontend delivery for select brands, coordinating designers, content teams, backend, and QA',
        'Improved engagement, SEO, and content authoring efficiency through reusable component architecture',
        'Designed and developed multiple AEM-based brand websites with interactive experiences',
      ],
      technologies: ['Adobe Experience Manager', 'React.js', 'JavaScript', 'HTML5', 'CSS3'],
      category: 'marketing',
    },
  ];

  const getCategoryColor = (category: Project['category']) => {
    const colors = {
      'e-commerce': 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200',
      'enterprise': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
      'marketing': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
      'branding': 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200',
    };
    return colors[category];
  };

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-800" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Key Projects
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-slate-900 dark:bg-white mx-auto mb-4"
          />
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            A selection of enterprise projects delivered for global clients, 
            showcasing technical leadership and business impact.
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.1 * (index % 4) }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-start gap-3">
                  <motion.div
                    whileHover={{ rotate: 180, transition: { duration: 0.3 } }}
                    className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg shrink-0 group-hover:bg-slate-200 dark:group-hover:bg-slate-700 transition-colors"
                  >
                    <Layers className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {project.name}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                      {project.client}
                    </p>
                  </div>
                </div>
                <span className={`px-2 py-1 text-xs font-medium rounded-full capitalize ${getCategoryColor(project.category)}`}>
                  {project.category}
                </span>
              </div>

              {/* Role */}
              <div className="mb-3">
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Role: {project.role}
                </span>
              </div>

              {/* Problem */}
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                {project.problem}
              </p>

              {/* Contributions */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-200 mb-2">
                  Key Contributions
                </h4>
                <ul className="space-y-1.5">
                  {project.contributions.slice(0, 3).map((contribution, cIndex) => (
                    <li
                      key={cIndex}
                      className="flex items-start gap-2 text-slate-600 dark:text-slate-400 text-sm"
                    >
                      <span className="w-1 h-1 bg-slate-400 rounded-full mt-2 shrink-0"></span>
                      {contribution}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech, tIndex) => (
                  <motion.span
                    key={tIndex}
                    whileHover={{ scale: 1.1 }}
                    className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs rounded font-medium cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
