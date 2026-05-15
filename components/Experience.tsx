"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SplitText from "./SplitText";

type Role = { title: string; duration: string };
type Item = {
  company: string;
  location: string;
  bg: string;
  text: string;
  badge: string;
  roles: Role[];
  highlights: string[];
};

const items: Item[] = [
  {
    company: "PwC India",
    location: "Chennai, India",
    bg: "bg-ink",
    text: "text-bone",
    badge: "★ current",
    roles: [
      { title: "Manager (Technical / Delivery)", duration: "May 2025 – Now" },
      { title: "Senior Associate", duration: "Apr 2022 – Apr 2025" },
      { title: "Associate", duration: "Nov 2020 – Mar 2022" },
    ],
    highlights: [
      "Lead delivery and technical execution for large-scale digital platforms across e-commerce, retail, travel, and content.",
      "Manage and mentor 20+ engineers — delivery predictability, code quality, continuous skill development.",
      "Own frontend architecture (Next.js, React, AEM, Magento) aligned to business outcomes.",
      "Cross-team collaboration with product, design, backend, QA, and regional stakeholders.",
      "Improve performance, SEO, and scalability via component-driven architecture.",
      "Promoted from contract to permanent based on consistent delivery and technical leadership.",
    ],
  },
  {
    company: "Truetech Solutions",
    location: "Chennai, India",
    bg: "bg-bone",
    text: "text-ink",
    badge: "frontend dev",
    roles: [{ title: "Frontend Developer", duration: "Sep 2019 – Oct 2020" }],
    highlights: [
      "Delivered Magento 2 and AEM frontend implementations for enterprise clients.",
      "Recognised for technical contribution and reliability — pathway to permanent role at PwC India.",
      "Built responsive web interfaces with HTML, CSS, JavaScript, and Bootstrap.",
    ],
  },
  {
    company: "Springbord Systems",
    location: "Chennai, India",
    bg: "bg-neon",
    text: "text-ink",
    badge: "php era",
    roles: [{ title: "PHP Web Developer", duration: "Mar 2019 – Aug 2019" }],
    highlights: [
      "Developed and maintained web apps with PHP, Laravel, HTML, CSS, and JavaScript.",
      "Feature delivery and production issue resolution.",
      "Worked with designers to translate UI/UX mockups into functional interfaces.",
    ],
  },
  {
    company: "Vedang Consultancy",
    location: "Chennai, India",
    bg: "bg-canvas-hi",
    text: "text-bone",
    badge: "laravel",
    roles: [{ title: "Executive Software Developer", duration: "Oct 2018 – Feb 2019" }],
    highlights: [
      "Built PHP-based applications with Laravel and Bootstrap.",
      "Collaborated with senior engineers to deliver client requirements on time.",
      "Assisted in database design and implementation.",
    ],
  },
  {
    company: "CodeAfterBuild",
    location: "Nagercoil, India",
    bg: "bg-bone",
    text: "text-ink",
    badge: "day one",
    roles: [{ title: "PHP Web Developer", duration: "Oct 2016 – Sep 2018" }],
    highlights: [
      "Started as a junior dev — built strong fundamentals in web and backend.",
      "Implemented UI features and backend logic in PHP, Laravel, HTML, CSS, JavaScript.",
      "Learned version control and collaborative workflows.",
    ],
  },
];

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineHeight = useTransform(scrollYProgress, [0.05, 0.85], ["0%", "100%"]);

  return (
    <section id="experience" className="relative py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex flex-wrap items-end justify-between gap-4"
        >
          <div>
            <div className="inline-block bg-ink text-bone px-3 py-1 mono uppercase text-[11px] tracking-widest mb-3">
              04 / Path
            </div>
            <h2 className="display text-5xl sm:text-7xl text-bone">
              <SplitText text="FROM" />{" "}
              <SplitText text="PHP" delay={0.05} className="bg-neon text-ink border-[3px] border-ink inline-block px-3" />{" "}
              <SplitText text="TO" delay={0.1} />{" "}
              <SplitText text="MGR." delay={0.15} className="bg-ink text-bone border-[3px] border-ink inline-block px-3" />
            </h2>
          </div>
          <p className="mono text-sm uppercase tracking-widest max-w-sm text-bone">
            A receipt of where I&apos;ve been. Most recent first.
          </p>
        </motion.div>

        <div ref={ref} className="relative">
          {/* spine — black background, red fill drawn on scroll */}
          <div
            aria-hidden
            className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-1.5 bg-ink/30 overflow-hidden"
          >
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-canvas border-x-2 border-ink"
            />
          </div>

          <ul className="space-y-12">
            {items.map((it, i) => {
              const right = i % 2 === 1;
              return (
                <li key={it.company} className="relative">
                  <motion.span
                    aria-hidden
                    initial={{ scale: 0, rotate: 0 }}
                    whileInView={{ scale: 1, rotate: 45 }}
                    viewport={{ once: true, margin: "-150px" }}
                    transition={{ type: "spring", stiffness: 220, damping: 16 }}
                    className="hidden md:block absolute left-1/2 top-7 -translate-x-1/2 w-6 h-6 bg-neon border-[3px] border-ink z-10"
                  />
                  <motion.div
                    initial={{ opacity: 0, x: right ? 60 : -60, rotate: right ? 3 : -3 }}
                    whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ type: "spring", stiffness: 160, damping: 18 }}
                    className={`md:w-1/2 ${right ? "md:ml-auto md:pl-12" : "md:pr-12"}`}
                  >
                    <article className={`${it.bg} ${it.text} border-[3px] border-ink chunk-lg p-6`}>
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div>
                          <h3 className="display text-3xl leading-tight">{it.company}</h3>
                          <p className="mono uppercase text-[10px] tracking-widest mt-1 opacity-90">
                            {it.location}
                          </p>
                        </div>
                        <span className="bg-canvas text-bone border-[2.5px] border-ink px-2 py-1 mono uppercase text-[10px] tracking-widest -rotate-3 whitespace-nowrap">
                          {it.badge}
                        </span>
                      </div>

                      <div className="space-y-1.5 mb-4 pb-4 border-b-[3px] border-current/40">
                        {it.roles.map((r) => (
                          <div key={r.title} className="flex flex-wrap items-baseline gap-2">
                            <span className="font-bold text-sm">{r.title}</span>
                            <span className="mono text-[11px] opacity-90">· {r.duration}</span>
                          </div>
                        ))}
                      </div>

                      <ul className="space-y-2">
                        {it.highlights.map((h, hi) => (
                          <li key={hi} className="flex gap-2 text-sm leading-relaxed">
                            <span className="shrink-0 mt-2 w-2 h-2 bg-canvas border border-ink rotate-45" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </article>
                  </motion.div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
