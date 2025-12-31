'use client';

import { motion } from 'framer-motion';
import { Linkedin, Github, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/ajithlalrg/',
      label: 'LinkedIn',
    },
    {
      icon: Github,
      href: 'https://github.com/ajithlalrg',
      label: 'GitHub',
    },
    {
      icon: Mail,
      href: 'mailto:ajithlaldev@gmail.com',
      label: 'Email',
    },
  ];

  return (
    <footer className="bg-slate-900 dark:bg-black text-white py-12" role="contentinfo" aria-label="Site footer">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Name & Copyright */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
            itemScope
            itemType="https://schema.org/Person"
          >
            <p className="font-bold text-lg" itemProp="name">AJITH LAL R</p>
            <p className="text-slate-400 text-sm mt-1" itemProp="jobTitle">
              Engineering Manager | Technical Delivery Manager
            </p>
          </motion.div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <motion.a
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={link.label}
                  className="cursor-pointer p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors duration-200"
                >
                  <IconComponent className="w-5 h-5" />
                </motion.a>
              );
            })}
          </div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-slate-800 my-8 origin-left"
        />

        {/* Bottom Row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400"
        >
          <p>© {currentYear} Ajith Lal R. All rights reserved.</p>
          <p>Built with React, TypeScript & Tailwind CSS</p>
        </motion.div>
      </div>
    </footer>
  );
}
