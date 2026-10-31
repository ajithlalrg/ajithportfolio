"use client";

import { motion } from "framer-motion";
import TiltCard from "./TiltCard";
import Marquee from "./Marquee";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SplitText from "./SplitText";
import { projects, type Category } from "@/lib/projects";

const categoryStyle: Record<Category, { bg: string; text: string; label: string; tilt: number }> = {
  enterprise: { bg: "bg-ink", text: "text-bone", label: "ENTERPRISE", tilt: -1.5 },
  "e-commerce": { bg: "bg-canvas", text: "text-bone", label: "E-COMMERCE", tilt: 1.5 },
  mobile: { bg: "bg-blood", text: "text-bone", label: "MOBILE", tilt: -2 },
  marketing: { bg: "bg-neon", text: "text-ink", label: "MARKETING", tilt: -2 },
  branding: { bg: "bg-canvas-hi", text: "text-bone", label: "BRANDING", tilt: 2 },
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-24 px-4 sm:px-6 bg-bone text-ink border-y-[3px] border-ink overflow-hidden"
    >
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" aria-hidden />

      {/* full-bleed marquee on top */}
      <div className="absolute top-0 left-0 right-0 bg-canvas text-bone py-2 border-b-[3px] border-ink overflow-hidden">
        <Marquee
          items={[
            <span key="a" className="display text-xl">{projects.length} PLATFORMS</span>,
            <span key="b" className="display text-xl text-neon">★</span>,
            <span key="c" className="display text-xl">10+ GLOBAL CLIENTS</span>,
            <span key="d" className="display text-xl text-neon">★</span>,
            <span key="e" className="display text-xl">ENTERPRISE / E-COMMERCE / MOBILE / MARKETING / BRANDING</span>,
            <span key="f" className="display text-xl text-neon">★</span>,
          ]}
          separator={<span className="mx-5 display text-xl">/</span>}
        />
      </div>

      <div className="relative max-w-7xl mx-auto pt-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex flex-wrap items-end justify-between gap-4"
        >
          <div>
            <div className="inline-block bg-canvas text-bone px-3 py-1 mono uppercase text-[11px] tracking-widest mb-3">
              05 / Work
            </div>
            <h2 aria-label="The brag wall." className="display text-5xl sm:text-7xl">
              <SplitText text="THE BRAG" />{" "}
              <SplitText text="WALL." delay={0.12} className="bg-ink text-neon border-[3px] border-ink inline-block px-3" />
            </h2>
          </div>
          <p className="mono text-sm uppercase tracking-widest max-w-md">
            Real shipped. Real revenue. Real bugs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-7" style={{ perspective: "1400px" }}>
          {projects.map((p, i) => {
            const style = categoryStyle[p.category];
            return (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: (i % 4) * 0.07 }}
              >
                <TiltCard max={8} className="brutal p-6 h-full relative">
                  <span
                    className={`absolute -top-4 -right-3 ${style.bg} ${style.text} border-[3px] border-ink chunk px-3 py-1 mono uppercase text-[10px] tracking-widest`}
                    style={{ transform: `rotate(${style.tilt}deg)` }}
                  >
                    {style.label}
                  </span>

                  <div className="mono uppercase text-[10px] tracking-widest opacity-70">
                    /{String(i + 1).padStart(2, "0")} · {p.client}
                  </div>
                  <h3 className="display text-2xl sm:text-3xl mt-2 leading-tight">{p.name}</h3>
                  <p className="mono text-[11px] uppercase tracking-widest mt-1 opacity-80">
                    {p.role}
                  </p>

                  <div className="mt-4 bg-canvas/10 border-2 border-ink px-3 py-2 text-sm">
                    <span className="mono uppercase text-[10px] tracking-widest mr-2 opacity-70">brief —</span>
                    {p.problem}
                  </div>

                  <ul className="mt-4 space-y-2">
                    {p.contributions.map((c, ci) => (
                      <li key={ci} className="flex gap-2 text-sm leading-snug">
                        <span className={`shrink-0 mt-1.5 w-2.5 h-2.5 ${style.bg} border-2 border-ink`} />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 pt-4 border-t-[3px] border-ink/70 flex flex-wrap gap-1.5">
                    {p.technologies.map((t) => (
                      <span
                        key={t}
                        className="mono text-[10px] uppercase tracking-widest bg-bone border-2 border-ink px-2 py-0.5 hover:bg-ink hover:text-bone transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {p.slug && (
                    <Link
                      href={`/work/${p.slug}`}
                      aria-label={`Read the case study: ${p.name}`}
                      data-cursor="active"
                      className="mt-5 inline-flex items-center gap-2 bg-ink text-bone border-[3px] border-ink chunk px-4 py-2 mono uppercase text-[11px] tracking-widest hover:bg-neon hover:text-ink transition-colors"
                    >
                      Read the case study <ArrowUpRight className="w-3.5 h-3.5" aria-hidden />
                    </Link>
                  )}
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
