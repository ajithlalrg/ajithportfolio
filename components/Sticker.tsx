"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  bg?: string;
  rotate?: number;
  className?: string;
  hover?: boolean;
  wobble?: boolean;
};

export default function Sticker({
  children,
  bg = "bg-pink",
  rotate = -3,
  className = "",
  hover = true,
  wobble = false,
}: Props) {
  return (
    <motion.div
      initial={{ scale: 0.7, rotate: rotate + 6, opacity: 0 }}
      whileInView={{ scale: 1, rotate, opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ type: "spring", stiffness: 220, damping: 16 }}
      whileHover={hover ? { rotate: rotate * -0.6, scale: 1.05 } : undefined}
      style={wobble ? ({ ["--tilt" as string]: `${rotate}deg` } as React.CSSProperties) : undefined}
      className={`inline-flex items-center justify-center border-[3px] border-ink text-ink chunk-shadow ${bg} ${
        wobble ? "wobble" : ""
      } ${className}`}
    >
      {children}
    </motion.div>
  );
}
