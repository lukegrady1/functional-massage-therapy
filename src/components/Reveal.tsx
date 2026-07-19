"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

// Lightweight scroll-reveal. Honors prefers-reduced-motion (renders static).
export function Reveal({
  children,
  delay = 0,
  y = 14,
  className = "",
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "li" | "span" | "section";
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      // amount 0 + a negative bottom margin starts the reveal slightly before
      // the element enters, so content is already settled by the time it is
      // actually readable instead of fading in under the reader.
      viewport={{ once: true, amount: 0, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.45, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  );
}
