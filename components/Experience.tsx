'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Building2, Calendar } from 'lucide-react';

interface ExperienceItem {
  company: string;
  location: string;
  roles: {
    title: string;
    duration: string;
  }[];
  highlights: string[];
}

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences: ExperienceItem[] = [
    {
      company: 'PwC India',
      location: 'Chennai, India',
      roles: [
        { title: 'Engineering Manager', duration: 'Jul 2024 – Present' },
        { title: 'Senior Technical Consultant', duration: 'Jun 2022 – Jun 2024' },
        { title: 'Technical Consultant', duration: 'Sep 2019 – Jun 2022' },
      ],
      highlights: [
        'Lead and manage cross-functional engineering teams of 20+ developers across multiple enterprise projects for Fortune 500 clients.',
        'Architect and deliver enterprise-scale digital platforms for e-commerce, retail, and content management spanning global markets.',
        'Drive technical strategy, solution design, and roadmap planning for Next.js, React, AEM, and Magento implementations.',
        'Establish engineering best practices, code review processes, and CI/CD pipelines to ensure quality and delivery efficiency.',
        'Collaborate with C-level stakeholders, product owners, and global delivery teams to align technical solutions with business objectives.',
      ],
    },
    {
      company: 'Truetech Solutions',
      location: 'Chennai, India',
      roles: [
        { title: 'Full Stack Developer', duration: 'Jun 2018 – Sep 2019' },
      ],
      highlights: [
        'Developed and maintained full-stack web applications using React, Node.js, and MySQL for diverse client projects.',
        'Led frontend development initiatives, implementing responsive designs and optimizing web performance.',
        'Collaborated with cross-functional teams to deliver projects on time while maintaining code quality standards.',
        'Mentored junior developers and conducted technical training sessions on modern JavaScript frameworks.',
      ],
    },
    {
      company: 'Springbord Systems',
      location: 'Chennai, India',
      roles: [
        { title: 'Web Developer', duration: 'Jul 2017 – Jun 2018' },
      ],
      highlights: [
        'Built responsive web applications using HTML5, CSS3, JavaScript, and PHP for various client requirements.',
        'Implemented e-commerce solutions and integrated payment gateways for retail clients.',
        'Optimized website performance and implemented SEO best practices to improve search rankings.',
        'Worked closely with designers to translate UI/UX mockups into functional web interfaces.',
      ],
    },
    {
      company: 'Vedang Consultancy Services',
      location: 'Chennai, India',
      roles: [
        { title: 'Junior Developer', duration: 'Jan 2017 – Jul 2017' },
      ],
      highlights: [
        'Developed and maintained client websites using WordPress and custom PHP solutions.',
        'Assisted in database design and implementation for web applications.',
        'Provided technical support and resolved client issues promptly.',
      ],
    },
    {
      company: 'CodeAfterBuild',
      location: 'Chennai, India',
      roles: [
        { title: 'Web Development Intern', duration: 'Jul 2016 – Dec 2016' },
      ],
      highlights: [
        'Gained hands-on experience in HTML, CSS, JavaScript, and PHP web development.',
        'Contributed to the development of client projects under senior developer supervision.',
        'Learned version control systems and collaborative development workflows.',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-slate-900" ref={ref}>
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-slate-900 dark:bg-white mx-auto mb-4"
          />
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            A progressive career journey from developer to engineering leadership, 
            building enterprise solutions for global clients.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <motion.div
            initial={{ height: 0 }}
            animate={isInView ? { height: '100%' } : { height: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute left-0 md:left-1/2 transform md:-translate-x-px w-0.5 bg-slate-200 dark:bg-slate-700"
          />

          {/* Experience Items */}
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Dot */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.15 }}
                className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-slate-900 dark:bg-white rounded-full border-4 border-white dark:border-slate-900 z-10"
              />

              {/* Content */}
              <div className={`md:w-1/2 ml-8 md:ml-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <motion.div
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  {/* Company Header */}
                  <div className="flex items-start gap-3 mb-4">
                    <div className="p-2 bg-slate-200 dark:bg-slate-700 rounded-lg">
                      <Building2 className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        {exp.company}
                      </h3>
                      <p className="text-slate-500 dark:text-slate-400 text-sm">
                        {exp.location}
                      </p>
                    </div>
                  </div>

                  {/* Roles */}
                  <div className="mb-4 space-y-2">
                    {exp.roles.map((role, roleIndex) => (
                      <div
                        key={roleIndex}
                        className="flex items-center gap-2 text-sm"
                      >
                        <Calendar className="w-4 h-4 text-slate-400" />
                        <span className="font-semibold text-slate-800 dark:text-slate-200">
                          {role.title}
                        </span>
                        <span className="text-slate-500 dark:text-slate-400">
                          • {role.duration}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, hIndex) => (
                      <li
                        key={hIndex}
                        className="flex items-start gap-2 text-slate-600 dark:text-slate-300 text-sm"
                      >
                        <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 shrink-0"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block md:w-1/2"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
