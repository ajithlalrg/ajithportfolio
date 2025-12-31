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
    { number: '30+', label: 'Projects Delivered' },
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
              A results-driven <span className="font-semibold text-slate-900 dark:text-white">Engineering Manager</span> with 
              over 9 years of experience leading high-performing engineering teams and delivering 
              enterprise-scale digital platforms for global clients.
            </motion.p>

            <motion.p variants={itemVariants} className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              I combine <span className="font-semibold text-slate-900 dark:text-white">technical depth</span> with 
              strategic leadership, specializing in Next.js, React, Adobe Experience Manager (AEM), 
              and Magento Commerce. My approach bridges business objectives with technical 
              excellence to drive measurable outcomes.
            </motion.p>

            <motion.p variants={itemVariants} className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Currently at <span className="font-semibold text-slate-900 dark:text-white">PwC India</span>, 
              I lead cross-functional teams of 20+ engineers, architecting solutions for 
              Fortune 500 clients across e-commerce, retail, travel, and content ecosystems 
              spanning multiple countries and markets.
            </motion.p>

            <motion.div variants={itemVariants} className="pt-4">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-3">
                Core Competencies
              </h3>
              <ul className="grid grid-cols-2 gap-2 text-slate-600 dark:text-slate-300">
                {['Technical Leadership', 'Agile Delivery', 'Solution Architecture', 'Stakeholder Management', 'Team Development', 'Global Delivery'].map((item, i) => (
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
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="bg-slate-50 dark:bg-slate-800 p-8 rounded-xl text-center cursor-default group hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-2"
                >
                  {item.number}
                </motion.div>
                <div className="text-slate-600 dark:text-slate-400 font-medium group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
