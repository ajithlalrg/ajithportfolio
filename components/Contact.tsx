'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'ajithlaldev@gmail.com',
      href: 'mailto:ajithlaldev@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91-8056544229',
      href: 'tel:+918056544229',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/ajithlalrg',
      href: 'https://www.linkedin.com/in/ajithlalrg/',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/ajithlalrg',
      href: 'https://github.com/ajithlalrg',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-900" ref={ref}>
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-slate-900 dark:bg-white mx-auto mb-4"
          />
          <p className="text-slate-600 dark:text-slate-300 max-w-xl mx-auto">
            Open to discussing engineering leadership opportunities, 
            technical consulting, or collaboration on enterprise projects.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {contactInfo.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.a
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.98 }}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="cursor-pointer flex items-center gap-4 p-6 bg-slate-50 dark:bg-slate-800 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors duration-200 group hover:shadow-lg"
              >
                <motion.div
                  whileHover={{ rotate: 10 }}
                  className="p-3 bg-slate-200 dark:bg-slate-700 rounded-lg group-hover:bg-slate-300 dark:group-hover:bg-slate-600 transition-colors"
                >
                  <IconComponent className="w-6 h-6 text-slate-700 dark:text-slate-300" />
                </motion.div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                    {item.label}
                  </p>
                  <p className="text-slate-900 dark:text-white font-semibold">
                    {item.value}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <div className="inline-flex flex-wrap justify-center items-center gap-2 px-4 py-2 md:px-6 md:py-3 bg-slate-50 dark:bg-slate-800 rounded-full text-sm md:text-base text-slate-600 dark:text-slate-300">
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <MapPin className="w-4 h-4 md:w-5 md:h-5 shrink-0" />
            </motion.div>
            <span>Chennai, India • Remote / Relocation</span>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 md:mt-12 text-center"
        >
          <p className="text-slate-600 dark:text-slate-400 mb-4 md:mb-6">
            Prefer a quick conversation? Let&apos;s connect!
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:ajithlaldev@gmail.com?subject=Opportunity%20Discussion"
            className="cursor-pointer inline-flex items-center gap-2 px-6 py-3 md:px-8 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium rounded-lg hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors duration-200 shadow-lg"
          >
            <Mail className="w-5 h-5" />
            Send a Message
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
