"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown, MapPin, Sparkles } from "lucide-react";
import Marquee from "./Marquee";
import Magnetic from "./Magnetic";
import SplitText from "./SplitText";
import CycleWord from "./CycleWord";
import { yearsOfExperience } from "@/lib/yoe";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const yoe = yearsOfExperience();

  return (
    <section
      ref={ref}
      id="top"
      className="relative pt-28 pb-10 sm:pt-40 sm:pb-16 px-4 sm:px-6 overflow-hidden"
    >
      {/* drifting background blobs */}
      <motion.div
        aria-hidden
        style={{ y: y3 }}
        className="absolute -top-20 -left-20 w-[420px] h-[420px] rounded-full opacity-50 blur-[80px] bg-canvas-hi pointer-events-none"
      />
      <motion.div
        aria-hidden
        style={{ y: y2 }}
        className="absolute top-32 -right-24 w-[360px] h-[360px] rounded-full opacity-40 blur-[100px] bg-blood pointer-events-none"
      />
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" aria-hidden />

      {/* RED ALERT bar */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.2, 0.9, 0.2, 1] }}
        className="absolute top-24 left-0 right-0 origin-left h-7 stripes-warn pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto pt-8">
        {/* status row */}
        <div className="flex flex-wrap items-center gap-3 mb-10">
          <motion.span
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="relative inline-flex items-center gap-2 bg-neon text-ink border-[3px] border-ink chunk px-3 py-1.5 mono text-[11px] uppercase tracking-widest"
          >
            <span className="relative inline-flex w-2.5 h-2.5 bg-canvas border border-ink siren rounded-full" />
            Open for hires
          </motion.span>
          <motion.span
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="inline-flex items-center gap-2 bg-bone text-ink border-[3px] border-ink chunk px-3 py-1.5 mono text-[11px] uppercase tracking-widest"
          >
            <MapPin className="w-3.5 h-3.5" /> Chennai · Remote
          </motion.span>
          <motion.span
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="inline-flex items-center gap-2 bg-ink text-bone border-[3px] border-ink chunk px-3 py-1.5 mono text-[11px] uppercase tracking-widest"
          >
            <Sparkles className="w-3.5 h-3.5 text-neon" /> {yoe}+ yrs · 20+ shipped
          </motion.span>
        </div>

        <div className="grid lg:grid-cols-[1.45fr_1fr] gap-10 lg:gap-12 items-start">
          {/* LEFT */}
          <motion.div style={{ y: y1 }}>
            <h2
              aria-label="Ajith Lal R — Engineer, Manager, Architect"
              className="display text-[18vw] sm:text-[12vw] lg:text-[9.5vw] xl:text-[10rem] text-bone wrap-break-word m-0"
            >
              <span className="block">
                <SplitText text="AJITH" />
              </span>
              <span className="block">
                <SplitText text="LAL R." delay={0.1} />
              </span>
              <span className="block mt-2 text-ink">
                <span className="mono text-base sm:text-lg align-middle mr-2">/</span>
                <span className="display text-[9vw] sm:text-[8vw] lg:text-[6vw] xl:text-7xl">
                  <CycleWord
                    words={["ENGINEER.", "MANAGER.", "ARCHITECT.", "SHIPPER.", "OPERATOR."]}
                    interval={1700}
                  />
                </span>
              </span>
            </h2>

            <motion.p
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="mt-8 max-w-xl text-lg sm:text-xl leading-snug text-bone"
            >
              I run delivery and architecture for big web platforms. Currently
              shipping enterprise things at <strong className="text-ink bg-bone px-1.5 border-[2px] border-ink">PwC India</strong> with{" "}
              <strong className="text-ink bg-neon px-1.5 border-[2px] border-ink">Next.js · React · React Native · AEM · Magento</strong>. Lead
              20+ engineers across e-commerce, retail, travel, content, and mobile.
            </motion.p>

            <motion.div
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.35 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <Magnetic strength={0.45}>
                <a
                  href="#projects"
                  data-cursor="active"
                  className="group relative inline-flex items-center gap-2 bg-ink text-bone px-7 py-4 border-[3px] border-ink chunk-bone shake-hover"
                >
                  <span className="display text-xl tracking-tight">SEE THE WORK</span>
                  <span className="display text-2xl">→</span>
                </a>
              </Magnetic>
              <Magnetic strength={0.45}>
                <a
                  href="#contact"
                  data-cursor="active"
                  className="group relative inline-flex items-center gap-2 bg-neon text-ink px-7 py-4 border-[3px] border-ink chunk shake-hover"
                >
                  <span className="display text-xl tracking-tight">HIRE ME</span>
                  <span className="display text-2xl">★</span>
                </a>
              </Magnetic>
              <a
                href="/resume.pdf"
                download="Ajith_Lal_R_Resume.pdf"
                data-cursor="active"
                className="text-bone mono text-sm underline decoration-[3px] underline-offset-4 hover:text-neon px-2"
              >
                or grab résumé.pdf
              </a>
            </motion.div>

            <div className="mt-12 flex items-center gap-3 text-bone/85">
              <ArrowDown className="w-4 h-4 animate-bounce" />
              <span className="mono text-xs uppercase tracking-widest">Scroll. There&apos;s more damage.</span>
            </div>
          </motion.div>

          {/* RIGHT — sticker chaos */}
          <div className="relative h-[460px] sm:h-[520px] lg:h-[600px] mt-4 lg:mt-0">
            <motion.div
              initial={{ scale: 0.4, rotate: 22, opacity: 0 }}
              animate={{ scale: 1, rotate: -6, opacity: 1 }}
              transition={{ type: "spring", stiffness: 160, damping: 14, delay: 0.3 }}
              style={{ y: y2 }}
              className="absolute top-2 right-2 sm:right-8 w-40 h-40 sm:w-60 sm:h-60 bg-ink text-bone border-[3px] border-ink chunk-lg flex flex-col items-center justify-center"
            >
              <span className="display text-6xl sm:text-8xl text-neon leading-none">{yoe}+</span>
              <span className="mono uppercase text-[10px] tracking-widest mt-1">years shipping</span>
              <span className="absolute -top-3 -left-3 bg-neon text-ink border-[3px] border-ink px-2 py-0.5 mono text-[10px] uppercase tracking-widest -rotate-6">
                ★ certified
              </span>
            </motion.div>

            <motion.div
              initial={{ scale: 0.4, rotate: -22, opacity: 0 }}
              animate={{ scale: 1, rotate: 5, opacity: 1 }}
              transition={{ type: "spring", stiffness: 160, damping: 14, delay: 0.45 }}
              style={{ y: y3 }}
              className="absolute top-40 sm:top-52 left-2 sm:left-6 w-36 sm:w-44 bg-bone border-[3px] border-ink chunk p-3"
            >
              <div className="stripes-warn h-2.5 mb-2" />
              <div className="display text-3xl leading-none">20+</div>
              <div className="mono uppercase text-[10px] tracking-widest mt-1">engineers led</div>
            </motion.div>

            <motion.div
              initial={{ scale: 0.3, rotate: 30, opacity: 0 }}
              animate={{ scale: 1, rotate: -12, opacity: 1 }}
              transition={{ type: "spring", stiffness: 160, damping: 14, delay: 0.6 }}
              className="absolute bottom-2 right-2 sm:right-12 w-36 h-36 sm:w-44 sm:h-44 bg-bone border-[3px] border-ink chunk-lg rounded-full flex flex-col items-center justify-center text-center overflow-hidden"
            >
              <div className="absolute inset-0 spin-slow opacity-90 pointer-events-none">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <defs>
                    <path id="circ" d="M 50,50 m -36,0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" />
                  </defs>
                  <text fontSize="9.5" letterSpacing="2" className="mono fill-ink">
                    <textPath href="#circ">
                      ★ ADOBE CERTIFIED EXPERT · 2023 · ★ ADOBE CERTIFIED EXPERT · 2023 ·
                    </textPath>
                  </text>
                </svg>
              </div>
              <span className="display text-xl sm:text-2xl leading-none text-canvas">ADOBE</span>
              <span className="display text-sm sm:text-base leading-tight text-canvas">CERTIFIED</span>
            </motion.div>

            <motion.div
              initial={{ scale: 0.3, rotate: -30, opacity: 0 }}
              animate={{ scale: 1, rotate: 8, opacity: 1 }}
              transition={{ type: "spring", stiffness: 160, damping: 14, delay: 0.75 }}
              className="absolute bottom-44 sm:bottom-44 left-6 sm:left-20 bg-canvas-hi text-bone border-[3px] border-ink chunk px-3 py-2 z-10"
            >
              <span className="mono uppercase text-[11px] tracking-widest">@ pwc india</span>
            </motion.div>

            {/* arrow doodle that draws */}
            <svg
              aria-hidden
              className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 sm:w-40 text-bone rotate-12 opacity-90"
              viewBox="0 0 100 60"
              fill="none"
            >
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.4, delay: 0.9, ease: "easeInOut" }}
                d="M5 30 C25 5, 60 55, 95 30"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.4, delay: 1.9 }}
                d="M85 18 L95 30 L83 38"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* full-bleed marquee */}
      <div className="relative mt-16 sm:mt-20 mx-[calc(-1*var(--spacing,1rem))]">
        <div className="bg-ink text-bone py-4 sm:py-5 border-y-[3px] border-ink overflow-hidden">
          <Marquee
            items={[
              <span key="a" className="display text-3xl sm:text-4xl">ENGINEERING MANAGER</span>,
              <span key="b" className="display text-3xl sm:text-4xl text-canvas">/</span>,
              <span key="c" className="display text-3xl sm:text-4xl">TECHNICAL DELIVERY</span>,
              <span key="d" className="display text-3xl sm:text-4xl text-neon">/</span>,
              <span key="e" className="display text-3xl sm:text-4xl">FRONTEND ARCHITECT</span>,
              <span key="f" className="display text-3xl sm:text-4xl text-canvas">/</span>,
              <span key="g" className="display text-3xl sm:text-4xl">NEXT.JS · REACT · REACT NATIVE · AEM · MAGENTO</span>,
              <span key="h" className="display text-3xl sm:text-4xl text-neon">/</span>,
            ]}
            separator={<span className="mx-6 display text-3xl sm:text-4xl">★</span>}
          />
        </div>
        <div className="bg-bone text-ink py-3 border-b-[3px] border-ink overflow-hidden">
          <Marquee
            reverse
            items={[
              <span key="a" className="display text-2xl">CHENNAI · INDIA</span>,
              <span key="b" className="display text-2xl text-canvas">★</span>,
              <span key="c" className="display text-2xl">PWC INDIA · MANAGER</span>,
              <span key="d" className="display text-2xl text-canvas">★</span>,
              <span key="e" className="display text-2xl">ADOBE CERTIFIED EXPERT</span>,
              <span key="f" className="display text-2xl text-canvas">★</span>,
            ]}
            separator={<span className="mx-6 display text-2xl">/</span>}
          />
        </div>
      </div>
    </section>
  );
}
