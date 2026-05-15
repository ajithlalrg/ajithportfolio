"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

type Props = {
  words: string[];
  interval?: number;
  className?: string;
};

export default function CycleWord({ words, interval = 1800, className }: Props) {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [words.length, interval]);

  return (
    <span className={`relative inline-block align-baseline ${className ?? ""}`}>
      <span className="invisible whitespace-nowrap">{words.reduce((a, b) => (a.length >= b.length ? a : b), "")}</span>
      <AnimatePresence mode="popLayout">
        <motion.span
          key={words[i]}
          initial={{ y: "100%", rotate: -6, opacity: 0 }}
          animate={{ y: 0, rotate: 0, opacity: 1 }}
          exit={{ y: "-100%", rotate: 6, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
          className="absolute inset-0 whitespace-nowrap"
        >
          {words[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
