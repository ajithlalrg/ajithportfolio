"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  text: string;
  className?: string;
  delay?: number;
  per?: "char" | "word";
  charClassName?: string;
};

const variant = {
  hidden: { y: "120%", opacity: 0, rotate: -8 },
  visible: { y: 0, opacity: 1, rotate: 0 },
};

export default function SplitText({
  text,
  className,
  delay = 0,
  per = "char",
  charClassName,
}: Props) {
  const tokens = per === "char" ? text.split("") : text.split(" ");

  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      transition={{ staggerChildren: per === "char" ? 0.025 : 0.05, delayChildren: delay }}
      aria-label={text}
      style={{ display: "inline-block" }}
    >
      {tokens.map((t, i) => {
        const node: ReactNode = per === "char" ? (t === " " ? " " : t) : t + (i < tokens.length - 1 ? " " : "");
        return (
          <span key={i} aria-hidden style={{ display: "inline-block", overflow: "hidden", verticalAlign: "top" }}>
            <motion.span
              style={{ display: "inline-block" }}
              variants={variant}
              transition={{ duration: 0.55, ease: [0.2, 0.8, 0.2, 1] }}
              className={charClassName}
            >
              {node}
            </motion.span>
          </span>
        );
      })}
    </motion.span>
  );
}
