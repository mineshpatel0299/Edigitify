"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { WorkCaseStudy } from "@/data/work";

function AnimatedMetric({ value }: { value: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  // Extract number from value (e.g., "+62%" => 62)
  const numericValue = parseInt(value.replace(/[^\d]/g, "")) || 0;
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2000, bounce: 0 });
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    if (isInView && numericValue > 0) {
      motionValue.set(numericValue);
    }
  }, [isInView, motionValue, numericValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      // Reconstruct the original format
      const formatted = value.replace(/\d+/, Math.floor(latest).toString());
      setDisplayValue(formatted);
    });
  }, [springValue, value]);

  return (
    <div ref={ref} className="text-5xl font-bold md:text-6xl">
      {displayValue}
    </div>
  );
}

export function WorkDetailResults({ work }: { work: WorkCaseStudy }) {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4 inline-block rounded-full bg-gradient-to-r from-teal-50 to-blue-50 px-6 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-teal-700"
          >
            Results & Impact
          </motion.span>
          <h2 className="mx-auto mb-6 max-w-4xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
            Measurable outcomes that matter
          </h2>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">
          {/* Left Column - Metrics & Outcomes */}
          <div className="space-y-8">
            {/* Metrics Grid */}
            <div className="grid gap-6 sm:grid-cols-2">
              {work.metrics.map((metric, idx) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group relative"
                >
                  {/* Glow Effect */}
                  <motion.div
                    className="absolute -inset-2 rounded-[32px] bg-gradient-to-r from-teal-500/20 to-blue-500/20 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                  />

                  {/* Card */}
                  <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-8 shadow-xl">
                    <div className="mb-3 text-sm font-bold uppercase tracking-wider text-slate-500">
                      {metric.label}
                    </div>

                    <div className="mb-2 bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                      <AnimatedMetric value={metric.value} />
                    </div>

                    {metric.context && (
                      <div className="text-sm text-slate-600">{metric.context}</div>
                    )}

                    {/* Bottom Line */}
                    <motion.div
                      className="mt-6 h-1 rounded-full bg-gradient-to-r from-teal-500 to-blue-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: idx * 0.1 + 0.5 }}
                    />

                    {/* Corner Accent */}
                    <motion.div
                      className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-r from-teal-500/20 to-blue-500/20 blur-2xl"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.4, 0.2],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: idx * 0.3,
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Outcomes List */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="overflow-hidden rounded-[40px] border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-slate-100 p-8 shadow-xl"
            >
              <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-slate-500">
                Key Outcomes
              </h3>
              <ul className="space-y-4">
                {work.outcomes.map((outcome, idx) => (
                  <motion.li
                    key={outcome}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="group flex items-start gap-4"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.1 + 0.2, type: "spring", bounce: 0.5 }}
                      className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-teal-500 to-blue-500 text-sm text-white shadow-md"
                    >
                      ✓
                    </motion.div>
                    <span className="leading-relaxed text-slate-700">{outcome}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Right Column - Testimonial */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col justify-center"
          >
            {work.testimonial ? (
              <div className="group relative overflow-hidden rounded-[40px] border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-10 text-white shadow-2xl">
                {/* Background Pattern */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                    backgroundSize: "32px 32px",
                  }}
                />

                {/* Quote Icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4, type: "spring", bounce: 0.5 }}
                  className="relative z-10 mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500 to-blue-500 text-4xl shadow-lg"
                >
                  &quot;
                </motion.div>

                <div className="relative z-10 space-y-6">
                  <div className="text-xs font-bold uppercase tracking-wider text-teal-400">
                    Client Testimonial
                  </div>

                  <blockquote className="text-2xl font-semibold leading-relaxed">
                    {work.testimonial.quote}
                  </blockquote>

                  <div className="border-t border-white/10 pt-6">
                    <div className="font-bold text-white">{work.testimonial.author}</div>
                    <div className="text-sm text-slate-400">{work.testimonial.role}</div>
                  </div>
                </div>

                {/* Corner Accent */}
                <motion.div
                  className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-r from-teal-500/20 to-blue-500/20 blur-3xl"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                />
              </div>
            ) : (
              <div className="overflow-hidden rounded-[40px] border border-slate-200 bg-gradient-to-br from-teal-50 to-blue-50 p-10 shadow-xl">
                <div className="text-sm font-bold uppercase tracking-wider text-teal-700">
                  Impact Summary
                </div>
                <p className="mt-4 text-lg leading-relaxed text-slate-700">
                  This project demonstrates our commitment to delivering measurable results through
                  integrated campaign systems and strategic execution.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
