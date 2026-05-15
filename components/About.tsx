"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import CountUp from "./CountUp";
import SplitText from "./SplitText";
import { yearsOfExperience } from "@/lib/yoe";

const yoe = yearsOfExperience();

const stats = [
  { n: yoe, suffix: "+", label: "Years shipping", bg: "bg-ink", text: "text-bone", tilt: -3 },
  { n: 20, suffix: "+", label: "Engineers led", bg: "bg-bone", text: "text-ink", tilt: 2 },
  { n: 20, suffix: "+", label: "Projects delivered", bg: "bg-neon", text: "text-ink", tilt: -2 },
  { n: 10, suffix: "+", label: "Global clients", bg: "bg-canvas-hi", text: "text-bone", tilt: 3 },
];

const competencies = [
  "Engineering Management",
  "Technical Delivery",
  "Agile / Scrum",
  "Stakeholder Mgmt.",
  "Team Mentoring",
  "Architecture Reviews",
];

export default function About() {
  return (
    <section id="about" className="relative py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex flex-wrap items-end justify-between gap-4"
        >
          <div>
            <div className="inline-block bg-ink text-bone px-3 py-1 mono uppercase text-[11px] tracking-widest mb-3">
              02 / Profile
            </div>
            <h2 className="display text-5xl sm:text-7xl text-bone">
              <SplitText text="THE HUMAN" />
              <br />
              <SplitText text="BIT." delay={0.15} className="bg-ink text-neon px-3 inline-block" />
            </h2>
          </div>
          <p className="mono text-sm uppercase tracking-widest max-w-sm text-bone">
            Resume in three paragraphs and a brag wall. No fluff.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="brutal p-6 sm:p-8"
          >
            <p className="text-lg sm:text-xl leading-relaxed">
              I&apos;m a results-driven{" "}
              <strong className="bg-neon border-2 border-ink px-1.5">Engineering Manager / Technical Delivery Manager</strong>{" "}
              with {yoe}+ years delivering enterprise-scale digital platforms across e-commerce,
              retail, travel, and content ecosystems.
            </p>
            <p className="mt-5 text-lg sm:text-xl leading-relaxed">
              I lead <strong>cross-functional teams of 20+ engineers</strong>, own end-to-end
              delivery, and drive scalable frontend architectures using{" "}
              <span className="mono bg-bone border-2 border-ink px-1.5">Next.js</span>{" "}
              <span className="mono bg-bone border-2 border-ink px-1.5">React</span>{" "}
              <span className="mono bg-bone border-2 border-ink px-1.5">AEM</span>{" "}
              and <span className="mono bg-bone border-2 border-ink px-1.5">Magento</span>.
            </p>
            <p className="mt-5 text-lg sm:text-xl leading-relaxed">
              Currently at <strong>PwC India</strong> as Manager — combining technical
              leadership, delivery, stakeholder engagement, and hands-on engineering.
              Multi-country rollouts and global clients.
            </p>

            <div className="mt-8">
              <div className="mono uppercase text-[11px] tracking-widest mb-3">Core competencies</div>
              <ul className="flex flex-wrap gap-2">
                {competencies.map((c, i) => (
                  <motion.li
                    key={c}
                    initial={{ opacity: 0, y: 10, rotate: -2 }}
                    whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    whileHover={{ rotate: 3, scale: 1.06 }}
                    className="bg-bone border-[2.5px] border-ink px-3 py-1.5 text-sm font-semibold cursor-default"
                  >
                    {c}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-5">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ scale: 0.6, rotate: s.tilt + 10, opacity: 0, y: 30 }}
                  whileInView={{ scale: 1, rotate: s.tilt, opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ type: "spring", stiffness: 200, damping: 16, delay: i * 0.08 }}
                  whileHover={{ rotate: 0, scale: 1.05 }}
                  className={`${s.bg} ${s.text} border-[3px] border-ink chunk-lg p-5 aspect-square flex flex-col justify-between`}
                >
                  <div className="mono uppercase text-[10px] tracking-widest opacity-80">stat</div>
                  <div>
                    <div className="display text-5xl sm:text-6xl leading-none">
                      <CountUp to={s.n} suffix={s.suffix} />
                    </div>
                    <div className="mono uppercase text-[10px] tracking-widest mt-2">{s.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="brutal p-5"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-canvas text-bone border-[2.5px] border-ink p-1.5">
                  <Award className="w-4 h-4" />
                </span>
                <div className="mono uppercase text-[11px] tracking-widest">Certified</div>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <span className="w-2 h-2 bg-canvas mt-2 shrink-0 border border-ink" />
                  <span><strong>Adobe Certified Expert</strong> — Commerce Frontend Developer · 2023</span>
                </li>
                <li className="flex gap-2">
                  <span className="w-2 h-2 bg-ink mt-2 shrink-0 border border-ink" />
                  <span><strong>Adobe Certified Professional</strong> — Commerce Business Practitioner · 2023</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="brutal p-5"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-ink text-neon border-[2.5px] border-ink p-1.5">
                  <GraduationCap className="w-4 h-4" />
                </span>
                <div className="mono uppercase text-[11px] tracking-widest">Schooled</div>
              </div>
              <p className="text-sm">
                <strong>B.E. — Electronics & Communication Engineering</strong>
                <br />
                <span className="opacity-70">St. Xavier&apos;s Catholic College of Engineering · 2015</span>
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
