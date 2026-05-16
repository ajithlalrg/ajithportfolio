"use client";

import { Linkedin, Github, Mail, ArrowUp } from "lucide-react";
import Marquee from "./Marquee";

const socials = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/ajithlalrg/", label: "Ajith Lal R on LinkedIn", bg: "bg-canvas", text: "text-bone" },
  { icon: Github, href: "https://github.com/ajithlalrg", label: "Ajith Lal R on GitHub", bg: "bg-bone", text: "text-ink" },
  { icon: Mail, href: "mailto:ajithlaldev@gmail.com", label: "Email Ajith Lal R", bg: "bg-neon", text: "text-ink" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t-[3px] border-ink bg-ink text-bone">
      <div className="bg-canvas text-bone py-4 border-b-[3px] border-ink overflow-hidden">
        <Marquee
          items={[
            <span key="a" className="display text-3xl">AJITH LAL R</span>,
            <span key="b" className="display text-3xl text-neon">✦</span>,
            <span key="c" className="display text-3xl">OPEN FOR HIRES</span>,
            <span key="d" className="display text-3xl text-ink">✦</span>,
            <span key="e" className="display text-3xl">CHENNAI · REMOTE · WORLD</span>,
            <span key="f" className="display text-3xl text-neon">✦</span>,
          ]}
          separator={<span className="mx-6 display text-3xl">/</span>}
        />
      </div>

      <div className="bg-bone text-ink py-3 border-b-[3px] border-ink overflow-hidden">
        <Marquee
          reverse
          items={[
            <span key="a" className="display text-2xl">NEXT.JS</span>,
            <span key="b" className="display text-2xl text-canvas">★</span>,
            <span key="c" className="display text-2xl">REACT</span>,
            <span key="d" className="display text-2xl text-canvas">★</span>,
            <span key="e" className="display text-2xl">AEM</span>,
            <span key="f" className="display text-2xl text-canvas">★</span>,
            <span key="g" className="display text-2xl">MAGENTO</span>,
            <span key="h" className="display text-2xl text-canvas">★</span>,
            <span key="i" className="display text-2xl">TYPESCRIPT</span>,
            <span key="j" className="display text-2xl text-canvas">★</span>,
          ]}
          separator={<span className="mx-6 display text-2xl">/</span>}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid sm:grid-cols-2 gap-8 items-center">
          <div>
            <div className="display text-4xl sm:text-6xl">AJITH/LAL R.</div>
            <p className="mono uppercase text-[11px] tracking-widest mt-2 opacity-80">
              Engineering Manager · Technical Delivery Manager
            </p>
            <p className="mt-4 text-sm max-w-md opacity-80">
              Ajith Lal R has been shipping enterprise-grade things since 2016 out of Chennai,
              India. Reach me through the channels → I&apos;m usually quick.
            </p>
          </div>

          <div className="flex sm:justify-end items-center gap-3">
            {socials.map((s, i) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  data-cursor="active"
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`${s.bg} ${s.text} border-[3px] border-bone w-12 h-12 inline-flex items-center justify-center transition-transform hover:-translate-y-1 hover:rotate-6`}
                  style={{ transform: `rotate(${(i - 1) * 4}deg)` }}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
            <a
              href="#top"
              aria-label="Back to top"
              data-cursor="active"
              className="bg-canvas text-bone border-[3px] border-bone w-12 h-12 inline-flex items-center justify-center rotate-3 hover:-translate-y-1 transition-transform"
            >
              <ArrowUp className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-bone/20 flex flex-col sm:flex-row justify-between gap-3 mono uppercase text-[11px] tracking-widest opacity-70">
          <p>© {year} Ajith Lal R · All rights reserved.</p>
          <p>Built loud with Next.js · Tailwind · Framer Motion</p>
        </div>
      </div>
    </footer>
  );
}
