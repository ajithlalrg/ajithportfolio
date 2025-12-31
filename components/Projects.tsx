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
      name: 'RE-Bridge',
      client: 'Royal Enfield',
      role: 'Technical Lead',
      problem: 'Royal Enfield needed a unified digital marketplace and analytics platform to manage dealer networks, inventory, and customer insights across global markets.',
      contributions: [
        'Architected a scalable digital marketplace platform handling 500K+ monthly transactions',
        'Led the development of real-time analytics dashboards for dealer performance tracking',
        'Implemented secure API integrations with dealer management systems across 20+ countries',
        'Managed a team of 8 developers through agile sprints to deliver on aggressive timelines',
      ],
      technologies: ['Next.js', 'React', 'Node.js', 'GraphQL', 'AWS', 'PostgreSQL'],
      category: 'enterprise',
    },
    {
      name: 'Global E-commerce Portal',
      client: 'Royal Enfield',
      role: 'Senior Developer / Tech Lead',
      problem: 'Build a unified global e-commerce experience for motorcycle enthusiasts across multiple regions with localized content and pricing.',
      contributions: [
        'Developed multi-region e-commerce platform supporting 15+ country-specific storefronts',
        'Implemented headless commerce architecture for improved performance and flexibility',
        'Built product configurator allowing customers to customize motorcycles in real-time',
        'Optimized Core Web Vitals achieving 90+ Lighthouse scores across all pages',
      ],
      technologies: ['React', 'Magento Commerce', 'GraphQL', 'Redis', 'Elasticsearch'],
      category: 'e-commerce',
    },
    {
      name: 'Digital Jewellery Savings Platform',
      client: 'Aditya Birla Jewellery',
      role: 'Technical Lead',
      problem: 'Create a digital gold savings platform enabling customers to invest in gold digitally with secure transactions and portfolio management.',
      contributions: [
        'Architected secure digital gold investment platform handling ₹50Cr+ monthly transactions',
        'Implemented KYC integration with government databases for seamless onboarding',
        'Built real-time gold price tracking and investment portfolio dashboards',
        'Ensured PCI-DSS compliance for secure payment processing',
      ],
      technologies: ['Next.js', 'React', 'Node.js', 'AWS', 'MySQL', 'Payment Gateways'],
      category: 'e-commerce',
    },
    {
      name: 'E-commerce Platform',
      client: 'Garden Vareli',
      role: 'Lead Developer',
      problem: 'Develop a modern e-commerce platform for a fashion brand to expand their digital presence and online sales channels.',
      contributions: [
        'Built end-to-end e-commerce solution with product catalog, cart, and checkout flows',
        'Integrated multiple payment gateways and shipping providers',
        'Implemented inventory management system synchronized with physical stores',
        'Achieved 40% increase in online sales within first quarter of launch',
      ],
      technologies: ['Magento Commerce', 'React', 'PHP', 'MySQL', 'Redis'],
      category: 'e-commerce',
    },
    {
      name: 'E-commerce Platform',
      client: 'GKB Optical',
      role: 'Lead Developer',
      problem: 'Build an optical e-commerce platform with virtual try-on capabilities and prescription management.',
      contributions: [
        'Developed e-commerce platform with integrated virtual try-on using AR technology',
        'Built prescription upload and validation system for accurate lens ordering',
        'Implemented store locator with appointment booking functionality',
        'Created responsive mobile-first design improving mobile conversions by 35%',
      ],
      technologies: ['React', 'Node.js', 'Magento', 'AR.js', 'MongoDB'],
      category: 'e-commerce',
    },
    {
      name: 'Calvert & Eaton Vance Marketing Platform',
      client: 'Morgan Stanley',
      role: 'Senior AEM Developer',
      problem: 'Migrate and consolidate multiple fund marketing websites onto a unified Adobe Experience Manager platform with strict compliance requirements.',
      contributions: [
        'Led AEM implementation for 200+ fund marketing pages with dynamic content',
        'Built reusable component library reducing development time by 50%',
        'Implemented automated compliance checks for financial content regulations',
        'Managed content author training and documentation for global marketing teams',
      ],
      technologies: ['Adobe Experience Manager', 'Java', 'React', 'GraphQL', 'Azure'],
      category: 'marketing',
    },
    {
      name: 'Firststop Multi-Country Platform',
      client: 'Bridgestone',
      role: 'Technical Lead',
      problem: 'Create a unified service center platform for Bridgestone\'s Firststop brand across 8 European countries with localized content and services.',
      contributions: [
        'Architected multi-country AEM platform supporting 8 languages and regional variations',
        'Implemented service appointment booking system integrated with dealer networks',
        'Built tire recommendation engine based on vehicle specifications',
        'Managed distributed team across multiple time zones for synchronized releases',
      ],
      technologies: ['Adobe Experience Manager', 'React', 'Java', 'REST APIs', 'AWS'],
      category: 'enterprise',
    },
    {
      name: 'Corporate Branding Website',
      client: 'Bekaert Dramix Constructions',
      role: 'Lead Developer',
      problem: 'Develop a global corporate website for a construction materials company showcasing products and technical documentation.',
      contributions: [
        'Built multi-language corporate website with comprehensive product catalog',
        'Implemented technical documentation portal with PDF generation',
        'Created interactive project showcase with location-based case studies',
        'Optimized for B2B lead generation with integrated CRM',
      ],
      technologies: ['Adobe Experience Manager', 'React', 'Java', 'Salesforce'],
      category: 'branding',
    },
    {
      name: 'E-commerce Platform',
      client: 'OMA Living',
      role: 'Senior Developer',
      problem: 'Build a premium furniture e-commerce platform with 3D product visualization and room planning tools.',
      contributions: [
        'Developed e-commerce platform with 3D product configurators',
        'Built room planner tool for customers to visualize furniture placement',
        'Implemented AR-based product preview for mobile users',
        'Integrated with ERP systems for real-time inventory and order management',
      ],
      technologies: ['React', 'Three.js', 'Node.js', 'Magento', 'MySQL'],
      category: 'e-commerce',
    },
    {
      name: 'Branding & Booking Platform',
      client: 'CASA OMA',
      role: 'Lead Developer',
      problem: 'Create an elegant hospitality booking platform with immersive visual storytelling and seamless reservation experience.',
      contributions: [
        'Built premium booking platform with immersive visual design',
        'Implemented real-time availability and booking management system',
        'Created virtual tour experience using 360° photography integration',
        'Optimized conversion funnel achieving 25% improvement in booking rates',
      ],
      technologies: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'Stripe'],
      category: 'branding',
    },
    {
      name: 'ITC Brand Websites',
      client: 'ITC Limited (Dark Fantasy, Sunfeast Yippee, Aashirvaad)',
      role: 'Senior AEM Developer',
      problem: 'Develop and maintain multiple FMCG brand websites on a shared AEM platform with consistent branding and engaging consumer experiences.',
      contributions: [
        'Led development of 10+ brand microsites on unified AEM architecture',
        'Built interactive recipe portals driving 2M+ monthly page views',
        'Implemented campaign landing pages with gamification elements',
        'Created reusable design system ensuring brand consistency across properties',
      ],
      technologies: ['Adobe Experience Manager', 'React', 'Java', 'GraphQL', 'AWS'],
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
