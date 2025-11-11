"use client";

import { AnimatedText } from "./animated-text";
import { ServicePills } from "./pills";
import { VerticalTicker } from "./ticker-vertical";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="space-y-10 pt-40">
      <p className="section-heading">Edigitify — Digital Product Agency</p>
      <AnimatedText
        lines={[
          "Your Strategic Digital",
          "Product Agency Partner.",
        ]}
        className="text-5xl font-semibold text-white md:text-7xl lg:text-8xl"
      />
      <div className="flex flex-wrap items-center gap-6">
        <ServicePills />
        <motion.span
          className="flex h-14 w-14 items-center justify-center rounded-full border border-white/15"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <svg width="18" height="24" viewBox="0 0 18 24" fill="none" aria-hidden="true">
            <path
              d="M9 2L9 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 12L9 18L15 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.span>
      </div>
      <div className="flex flex-col gap-4 rounded-[32px] border border-white/10 p-6 md:flex-row md:items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.5em] text-white/50">
            Our Purpose
          </p>
        </div>
        <VerticalTicker />
      </div>
    </section>
  );
}
