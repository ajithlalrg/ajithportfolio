"use client";

import { motion } from "framer-motion";
import TiltCard from "./TiltCard";
import SplitText from "./SplitText";

type Category = {
  title: string;
  bg: string;
  text: string;
  rotate: number;
  skills: string[];
};

const categories: Category[] = [
  {
    title: "Leadership / Delivery",
    bg: "bg-ink",
    text: "text-bone",
    rotate: -1.5,
    skills: ["Engineering Management", "Technical Delivery", "Agile / Scrum", "Sprint Planning", "Stakeholder Mgmt.", "Team Mentoring (20+)", "Architecture Reviews", "Risk Management"],
  },
  {
    title: "Frontend & Web",
    bg: "bg-bone",
    text: "text-ink",
    rotate: 1.5,
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "React Native", "Next.js", "TypeScript", "Redux", "Tailwind CSS", "Bootstrap 4/5", "Shadcn", "Material UI", "Figma"],
  },
  {
    title: "Mobile & Cross-Platform",
    bg: "bg-blood",
    text: "text-bone",
    rotate: 2,
    skills: ["React Native (iOS & Android)", "Cross-Platform Delivery", "Push Notifications", "Maps & Live Tracking", "Payment Integration", "App Store / Play Store"],
  },
  {
    title: "CMS & Commerce",
    bg: "bg-neon",
    text: "text-ink",
    rotate: -2,
    skills: ["Adobe Experience Manager (AEM)", "Magento 2 (Frontend)", "WordPress", "Sitecore (Frontend)", "Headless CMS Architecture"],
  },
  {
    title: "APIs & Data",
    bg: "bg-canvas-hi",
    text: "text-bone",
    rotate: 2,
    skills: ["GraphQL", "REST APIs", "Power BI Embedded", "Azure", "API Integration", "Data Architecture"],
  },
  {
    title: "Tools & Practice",
    bg: "bg-bone",
    text: "text-ink",
    rotate: -1,
    skills: ["JIRA", "Performance Optimisation", "SEO Best Practices", "Responsive Design", "Analytics Integration", "GitHub Copilot", "Git", "CI/CD Pipelines"],
  },
  {
    title: "Currently Tinkering",
    bg: "bg-ink",
    text: "text-neon",
    rotate: 1,
    skills: ["AI agents", "Three.js / R3F", "Edge runtime", "Design systems"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-24 px-4 sm:px-6 bg-bone text-ink border-y-[3px] border-ink"
    >
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" aria-hidden />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex flex-wrap items-end justify-between gap-4"
        >
          <div>
            <div className="inline-block bg-canvas text-bone px-3 py-1 mono uppercase text-[11px] tracking-widest mb-3">
              03 / Stack
            </div>
            <h2 className="display text-5xl sm:text-7xl">
              <SplitText text="TOOLS I" />{" "}
              <SplitText
                text="SWING."
                delay={0.1}
                className="bg-canvas text-bone border-[3px] border-ink inline-block px-3"
              />
            </h2>
          </div>
          <p className="mono text-sm uppercase tracking-widest max-w-sm">
            Seven departments. One brain. Every chip — shipped in prod.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7" style={{ perspective: "1200px" }}>
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 60, rotate: cat.rotate + 8 }}
              whileInView={{ opacity: 1, y: 0, rotate: cat.rotate }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ type: "spring", stiffness: 160, damping: 16, delay: i * 0.06 }}
            >
              <TiltCard
                max={6}
                className={`${cat.bg} ${cat.text} border-[3px] border-ink chunk-lg p-5 h-full`}
              >
                <div className="flex items-center justify-between mb-4 pb-3 border-b-[3px] border-current/40">
                  <h3 className="display text-2xl leading-tight">{cat.title}</h3>
                  <span className="mono text-[10px] uppercase tracking-widest opacity-80">
                    /{String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {cat.skills.map((s) => (
                    <motion.li
                      key={s}
                      whileHover={{ scale: 1.08, rotate: -2 }}
                      whileTap={{ scale: 0.96 }}
                      data-cursor="active"
                      className="bg-bone text-ink border-[2.5px] border-ink px-2.5 py-1 text-sm font-semibold cursor-default hover:bg-ink hover:text-bone transition-colors"
                    >
                      {s}
                    </motion.li>
                  ))}
                </ul>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
