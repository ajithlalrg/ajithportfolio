'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    { number: '9+', label: 'Years Experience' },
    { number: '20+', label: 'Engineers Led' },
    { number: '20+', label: 'Projects Delivered' },
    { number: '10+', label: 'Global Clients' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            About Me
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-slate-900 dark:bg-white mx-auto"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <motion.p variants={itemVariants} className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              A results-driven <span className="font-semibold text-slate-900 dark:text-white">Engineering Manager / Technical Delivery Manager</span> with 
              9+ years of experience delivering enterprise-scale digital platforms across 
              e-commerce, retail, travel, and content ecosystems.
            </motion.p>

            <motion.p variants={itemVariants} className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Proven expertise in leading <span className="font-semibold text-slate-900 dark:text-white">cross-functional teams (20+ engineers)</span>, 
              owning end-to-end delivery, and driving scalable frontend architectures using 
              Next.js, React, Adobe Experience Manager (AEM), and Magento.
            </motion.p>

            <motion.p variants={itemVariants} className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Currently at <span className="font-semibold text-slate-900 dark:text-white">PwC India</span> as Manager, 
              combining technical leadership, delivery management, stakeholder engagement, and 
              hands-on engineering with experience supporting multi-country rollouts and global clients.
            </motion.p>

            <motion.div variants={itemVariants} className="pt-4">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-3">
                Core Competencies
              </h3>
              <ul className="grid grid-cols-2 gap-2 text-slate-600 dark:text-slate-300">
                {['Engineering Management', 'Technical Delivery', 'Agile/Scrum', 'Stakeholder Management', 'Team Mentoring', 'Architecture Reviews'].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-slate-900 dark:bg-white rounded-full"></span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Certifications */}
            <motion.div variants={itemVariants} className="pt-4">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-3">
                Certifications
              </h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300 text-sm md:text-base">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 shrink-0"></span>
                  <span><strong>Adobe Certified Expert</strong> – Commerce Frontend Developer (2023)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 shrink-0"></span>
                  <span><strong>Adobe Certified Professional</strong> – Commerce Business Practitioner (2023)</span>
                </li>
              </ul>
            </motion.div>

            {/* Education */}
            <motion.div variants={itemVariants} className="pt-2">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-3">
                Education
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                <strong>Bachelor of Engineering</strong> – Electronics and Communication Engineering<br />
                <span className="text-sm text-slate-500 dark:text-slate-400">St. Xavier&apos;s Catholic College of Engineering | 2015</span>
              </p>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="bg-slate-50 dark:bg-slate-800 p-4 md:p-8 rounded-xl text-center cursor-default group hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-1 md:mb-2"
                >
                  {item.number}
                </motion.div>
                <div className="text-sm md:text-base text-slate-600 dark:text-slate-400 font-medium group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Work Authorization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 text-center"
        >
          <div className="inline-flex flex-wrap justify-center items-center gap-2 px-4 py-2 md:px-6 md:py-3 bg-slate-100 dark:bg-slate-800 rounded-full">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shrink-0"></span>
            <span className="text-sm md:text-base text-slate-700 dark:text-slate-300 font-medium text-center">
              Open to Relocation | Visa Sponsorship | Remote
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
