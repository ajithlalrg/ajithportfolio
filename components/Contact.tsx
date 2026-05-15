"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, MapPin, ArrowUpRight } from "lucide-react";
import Magnetic from "./Magnetic";
import SplitText from "./SplitText";

const links = [
  {
    icon: Mail,
    label: "Email",
    value: "ajithlaldev@gmail.com",
    href: "mailto:ajithlaldev@gmail.com",
    bg: "bg-canvas",
    text: "text-bone",
    tilt: -1.5,
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 80565 44229",
    href: "tel:+918056544229",
    bg: "bg-neon",
    text: "text-ink",
    tilt: 1.5,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/ajithlalrg",
    href: "https://www.linkedin.com/in/ajithlalrg/",
    bg: "bg-ink",
    text: "text-bone",
    tilt: -2,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/ajithlalrg",
    href: "https://github.com/ajithlalrg",
    bg: "bg-bone",
    text: "text-ink",
    tilt: 2,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 overflow-hidden">
      {/* drifting accent */}
      <div aria-hidden className="absolute -top-24 -right-24 w-100 h-100 rounded-full bg-canvas-hi blur-[80px] opacity-40 drift pointer-events-none" />
      <div aria-hidden className="absolute -bottom-24 -left-24 w-100 h-100 rounded-full bg-blood blur-[100px] opacity-50 drift pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <div className="inline-block bg-ink text-bone px-3 py-1 mono uppercase text-[11px] tracking-widest mb-4">
            06 / Holler
          </div>
          <h2 className="display text-6xl sm:text-8xl lg:text-9xl leading-[0.85] text-bone">
            <SplitText text="LET'S BUILD" />
            <br />
            <SplitText
              text="SOMETHING"
              delay={0.1}
            />{" "}
            <SplitText
              text="LOUD."
              delay={0.2}
              className="bg-neon text-ink border-[3px] border-ink inline-block -rotate-3 px-4"
            />
          </h2>
          <p className="mt-6 mono uppercase text-sm tracking-widest max-w-2xl mx-auto text-bone/90">
            Open to engineering leadership, technical consulting, and enterprise collaborations.
            I read every message.
          </p>
        </motion.div>

        {/* Big CTA card */}
        <Magnetic strength={0.18}>
          <motion.a
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ rotate: -1, scale: 1.012 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            href="mailto:ajithlaldev@gmail.com?subject=Opportunity%20Discussion"
            data-cursor="active"
            className="group relative block bg-ink text-bone border-[3px] border-ink chunk-bone p-8 sm:p-12 overflow-hidden"
          >
            <div className="absolute -top-6 -right-6 w-36 h-36 bg-neon border-[3px] border-bone rounded-full rotate-12 group-hover:-rotate-12 transition-transform duration-500" />
            <div className="absolute -bottom-8 -left-8 w-28 h-28 bg-canvas border-[3px] border-bone -rotate-12 group-hover:rotate-12 transition-transform duration-500" />

            <div className="relative flex items-start justify-between gap-4">
              <div>
                <div className="mono uppercase text-[11px] tracking-widest text-neon flicker">★ MAIL HOTLINE</div>
                <div className="display text-3xl sm:text-5xl mt-2 break-all">
                  ajithlaldev@gmail.com
                </div>
                <div className="mono uppercase text-[11px] tracking-widest mt-3 text-bone/70">
                  Click → opens your mail. Subject prefilled. Reply within 24h.
                </div>
              </div>
              <ArrowUpRight className="w-10 h-10 sm:w-14 sm:h-14 shrink-0 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300" />
            </div>
          </motion.a>
        </Magnetic>

        {/* Channel grid */}
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {links.map((l, i) => {
            const Icon = l.icon;
            return (
              <Magnetic key={l.label} strength={0.3}>
                <motion.a
                  initial={{ opacity: 0, y: 30, rotate: l.tilt + 6 }}
                  whileInView={{ opacity: 1, y: 0, rotate: l.tilt }}
                  viewport={{ once: true }}
                  whileHover={{ rotate: 0, y: -6 }}
                  transition={{ type: "spring", stiffness: 180, damping: 16, delay: i * 0.06 }}
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  data-cursor="active"
                  className={`${l.bg} ${l.text} border-[3px] border-ink chunk-lg p-5 block`}
                >
                  <div className="flex items-center justify-between">
                    <Icon className="w-7 h-7" />
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                  <div className="mono uppercase text-[10px] tracking-widest mt-4 opacity-80">{l.label}</div>
                  <div className="display text-lg mt-1 leading-tight break-all">{l.value}</div>
                </motion.a>
              </Magnetic>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap items-center justify-center gap-3"
        >
          <span className="inline-flex items-center gap-2 bg-bone text-ink border-[3px] border-ink chunk px-4 py-2 mono uppercase text-[11px] tracking-widest">
            <MapPin className="w-4 h-4" /> Chennai, India
          </span>
          <span className="inline-flex items-center gap-2 bg-neon text-ink border-[3px] border-ink chunk px-4 py-2 mono uppercase text-[11px] tracking-widest">
            <span className="relative inline-flex w-2 h-2 bg-canvas border border-ink rounded-full siren" /> Open to relocation
          </span>
          <span className="inline-flex items-center gap-2 bg-ink text-bone border-[3px] border-ink chunk px-4 py-2 mono uppercase text-[11px] tracking-widest">
            ★ Visa sponsorship · Remote
          </span>
        </motion.div>
      </div>
    </section>
  );
}
