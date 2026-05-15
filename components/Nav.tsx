"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Magnetic from "./Magnetic";

const items = [
  { label: "Work", href: "#projects" },
  { label: "Stack", href: "#skills" },
  { label: "Path", href: "#experience" },
  { label: "Profile", href: "#about" },
  { label: "Holler", href: "#contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -120 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 180, damping: 22 }}
      className="fixed top-2 left-0 right-0 z-50 px-3 sm:px-5 pt-3"
    >
      <nav
        className={`mx-auto max-w-7xl bg-bone text-ink border-[3px] border-ink ${
          scrolled ? "chunk-lg" : "chunk"
        } transition-shadow duration-200`}
      >
        <div className="flex items-center justify-between px-4 py-3">
          <Magnetic strength={0.5}>
            <a
              href="#top"
              className="group flex items-center gap-2"
              aria-label="Home"
              data-cursor="active"
            >
              <span className="relative inline-flex items-center justify-center w-9 h-9 bg-canvas border-[3px] border-ink rotate-[-6deg] group-hover:rotate-[8deg] transition-transform">
                <span className="display text-base text-bone">A</span>
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-neon border border-ink siren" />
              </span>
              <span className="display text-xl tracking-tight">AJITH/LAL</span>
            </a>
          </Magnetic>

          <ul className="hidden md:flex items-center gap-1">
            {items.map((it) => (
              <li key={it.href}>
                <Magnetic strength={0.45}>
                  <a
                    href={it.href}
                    data-cursor="active"
                    className="relative mono uppercase text-[12px] tracking-widest px-3 py-2 hover:bg-ink hover:text-bone transition-colors block"
                  >
                    {it.label}
                  </a>
                </Magnetic>
              </li>
            ))}
            <li>
              <Magnetic strength={0.5}>
                <a
                  href="/resume.pdf"
                  download="Ajith_Lal_R_Resume.pdf"
                  data-cursor="active"
                  className="ml-2 inline-flex items-center gap-1 mono uppercase text-[12px] tracking-widest px-3 py-2 bg-canvas text-bone border-[3px] border-ink hover:bg-ink hover:text-neon transition-colors"
                >
                  CV ↓
                </a>
              </Magnetic>
            </li>
          </ul>

          <button
            className="md:hidden inline-flex items-center justify-center w-10 h-10 bg-ink text-bone"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.22 }}
              className="md:hidden overflow-hidden border-t-[3px] border-ink"
            >
              <ul className="flex flex-col">
                {items.map((it) => (
                  <li key={it.href} className="border-b border-ink/20 last:border-b-0">
                    <a
                      href={it.href}
                      onClick={() => setOpen(false)}
                      className="block mono uppercase text-sm tracking-widest px-5 py-4 hover:bg-ink hover:text-bone"
                    >
                      {it.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="/resume.pdf"
                    download="Ajith_Lal_R_Resume.pdf"
                    className="block mono uppercase text-sm tracking-widest px-5 py-4 bg-canvas text-bone"
                  >
                    Download CV ↓
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
