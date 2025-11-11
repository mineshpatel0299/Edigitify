"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const line: Variants = {
  hidden: { y: 32, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

export type AnimatedTextProps = {
  lines: string[];
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  delay?: number;
};

export function AnimatedText({
  lines,
  className,
  as: Tag = "h1",
  delay = 0,
}: AnimatedTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <Tag className={cn("leading-[1.05] tracking-tight", className)}>
      <motion.span
        ref={ref}
        className="inline-flex flex-col"
        variants={container}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        transition={{ delay }}
      >
        {lines.map((lineText, lineIndex) => (
          <span key={lineText + lineIndex} className="block overflow-hidden">
            <motion.span
              variants={line}
              className="inline-flex flex-wrap gap-x-3"
            >
              {lineText.split(" ").map((word, wordIndex) => (
                <span key={`${word}-${wordIndex}`} className="inline-block">
                  {word}
                </span>
              ))}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
