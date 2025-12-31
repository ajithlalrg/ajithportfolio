'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface SkillCategory {
  title: string;
  skills: string[];
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories: SkillCategory[] = [
    {
      title: 'Engineering Leadership & Delivery',
      skills: [
        'Team Leadership (20+ Engineers)',
        'Agile & Scrum Methodologies',
        'Sprint Planning & Execution',
        'Technical Architecture',
        'Code Reviews & Mentorship',
        'Stakeholder Management',
        'Resource Planning',
        'Risk Management',
      ],
    },
    {
      title: 'Frontend & Web Technologies',
      skills: [
        'Next.js',
        'React.js',
        'TypeScript',
        'JavaScript (ES6+)',
        'HTML5 & CSS3',
        'Tailwind CSS',
        'SASS/SCSS',
        'Redux',
        'Responsive Design',
        'Web Performance',
      ],
    },
    {
      title: 'CMS & Commerce Platforms',
      skills: [
        'Adobe Experience Manager (AEM)',
        'Magento Commerce',
        'Contentful',
        'Headless CMS Architecture',
        'E-commerce Solutions',
        'Multi-site Management',
      ],
    },
    {
      title: 'APIs & Data',
      skills: [
        'RESTful APIs',
        'GraphQL',
        'API Integration',
        'MySQL',
        'Data Architecture',
      ],
    },
    {
      title: 'Tools & Practices',
      skills: [
        'Git & GitHub',
        'CI/CD Pipelines',
        'Jenkins',
        'Docker',
        'AWS Services',
        'Azure DevOps',
        'Jira',
        'Confluence',
        'Unit Testing',
        'Performance Optimization',
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-800" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Technical Expertise
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-slate-900 dark:bg-white mx-auto mb-4"
          />
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            A comprehensive skill set spanning engineering leadership, modern frontend technologies, 
            enterprise CMS platforms, and DevOps practices.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 pb-3 border-b border-slate-200 dark:border-slate-700">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, delay: 0.1 * index + 0.05 * skillIndex }}
                    whileHover={{ scale: 1.05, backgroundColor: '#1e293b', color: '#fff' }}
                    className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm rounded-full font-medium cursor-default transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
