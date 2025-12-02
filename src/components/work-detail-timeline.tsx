"use client";

import { motion } from "framer-motion";
import type { WorkCaseStudy } from "@/data/work";

export function WorkDetailTimeline({ work }: { work: WorkCaseStudy }) {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* Floating Orbs */}
      <div className="pointer-events-none absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-72 w-72 rounded-full bg-gradient-to-r from-teal-500/10 to-blue-500/10 blur-3xl"
            style={{
              left: `${i * 35}%`,
              top: `${i * 25}%`,
            }}
            animate={{
              y: [0, -60, 0],
              x: [0, 50, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 12 + i * 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
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
            className="mb-4 inline-block rounded-full border border-white/10 bg-white/5 px-6 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-teal-400 backdrop-blur-sm"
          >
            Our Approach
          </motion.span>
          <h2 className="mx-auto mb-6 max-w-4xl bg-gradient-to-r from-white via-blue-100 to-teal-100 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
            How we delivered excellence
          </h2>
        </motion.div>

        {/* Timeline Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {work.timeline.map((phase, idx) => (
            <motion.div
              key={phase.phase}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="group relative"
            >
              {/* Connecting Line (except for last item) */}
              {idx < work.timeline.length - 1 && (
                <motion.div
                  className="absolute left-full top-12 hidden h-0.5 w-8 bg-gradient-to-r from-teal-400 to-transparent md:block"
                  initial={{ width: 0 }}
                  whileInView={{ width: "2rem" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.2 + 0.5 }}
                />
              )}

              {/* Card */}
              <div className="relative h-full overflow-hidden rounded-[36px] border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-500 hover:border-white/20 hover:bg-white/10">
                {/* Number Badge */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.2 + 0.2, type: "spring", bounce: 0.5 }}
                  className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500 to-blue-500 text-xl font-bold text-white shadow-lg"
                >
                  {String(idx + 1).padStart(2, "0")}
                </motion.div>

                {/* Phase Label */}
                <div className="mb-2 text-xs font-bold uppercase tracking-wider text-teal-400">
                  Phase {idx + 1}
                </div>

                {/* Phase Title */}
                <h3 className="mb-4 text-2xl font-bold text-white">{phase.phase}</h3>

                {/* Phase Detail */}
                <p className="leading-relaxed text-slate-300">{phase.detail}</p>

                {/* Bottom Line */}
                <motion.div
                  className="mt-6 h-1 rounded-full bg-gradient-to-r from-teal-500 to-blue-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: idx * 0.2 + 0.4 }}
                />

                {/* Corner Accent */}
                <motion.div
                  className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-r from-teal-500/20 to-blue-500/20 blur-2xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: idx * 0.5,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
