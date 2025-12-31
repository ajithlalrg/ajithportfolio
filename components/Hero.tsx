'use client';

import { motion } from 'framer-motion';
import { MapPin, ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      aria-label="Introduction"
      itemScope
      itemType="https://schema.org/Person"
      className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-6 py-20 text-center relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-full text-sm text-slate-600 dark:text-slate-400 mb-6"
          role="status"
          aria-label="Currently open to job opportunities"
        >
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" aria-hidden="true" />
          Open to opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight"
          itemProp="name"
        >
          AJITH LAL R
        </motion.h1>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl font-medium text-slate-700 dark:text-slate-300 mb-4"
          itemProp="jobTitle"
        >
          Engineering Manager | Technical Delivery Manager
        </motion.h2>

        {/* Location */}
        <motion.address
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center justify-center gap-2 text-slate-600 dark:text-slate-400 mb-8 not-italic"
          itemProp="address"
          itemScope
          itemType="https://schema.org/PostalAddress"
        >
          <MapPin className="w-4 h-4" aria-hidden="true" />
          <span>
            <span itemProp="addressLocality">Chennai</span>, <span itemProp="addressCountry">India</span>
          </span>
        </motion.address>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed"
          itemProp="description"
        >
          Leading enterprise-scale digital platforms across e-commerce, retail, travel, and content ecosystems for Fortune 500 clients worldwide.
        </motion.p>

        {/* CTA Buttons */}
        <motion.nav
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          aria-label="Primary actions"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToProjects}
            className="cursor-pointer px-8 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium rounded-lg hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors duration-200 w-full sm:w-auto shadow-lg shadow-slate-900/20 dark:shadow-white/20"
          >
            View Projects
          </motion.button>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/resume.pdf"
            download="Ajith_Lal_R_Resume.pdf"
            className="cursor-pointer px-8 py-3 border-2 border-slate-900 dark:border-white text-slate-900 dark:text-white font-medium rounded-lg hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-colors duration-200 w-full sm:w-auto text-center"
            aria-label="Download resume as PDF"
          >
            Download Resume
          </motion.a>
        </motion.nav>

        {/* Scroll indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          onClick={scrollToAbout}
          className="mt-16 cursor-pointer group"
          aria-label="Scroll down to about section"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden="true"
          >
            <ChevronDown className="w-8 h-8 mx-auto text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-200 transition-colors" />
          </motion.div>
        </motion.button>
      </div>
      
      {/* Hidden SEO content for search engines */}
      <meta itemProp="url" content="https://ajithlal-red.vercel.app" />
      <link itemProp="sameAs" href="https://linkedin.com/in/ajithlalr" />
      <link itemProp="sameAs" href="https://github.com/ajithlalrg" />
    </section>
  );
}
