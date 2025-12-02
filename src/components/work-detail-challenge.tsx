"use client";

import { motion } from "framer-motion";
import type { WorkCaseStudy } from "@/data/work";

export function WorkDetailChallenge({ work }: { work: WorkCaseStudy }) {
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
            The Challenge & Solution
          </motion.span>
          <h2 className="mx-auto mb-6 max-w-4xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
            From obstacle to opportunity
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Problem Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group relative"
          >
            {/* Glow Effect */}
            <motion.div
              className="absolute -inset-4 rounded-[48px] bg-gradient-to-r from-red-500/20 via-orange-500/20 to-yellow-500/20 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
            />

            {/* Card */}
            <div className="relative overflow-hidden rounded-[48px] border border-slate-200 bg-white p-10 shadow-2xl">
              {/* Icon */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, type: "spring", bounce: 0.5 }}
                className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 text-3xl shadow-lg"
              >
                ⚠️
              </motion.div>

              {/* Label */}
              <h3 className="mb-4 text-2xl font-bold text-slate-900">The Problem</h3>

              {/* Description */}
              <p className="mb-6 text-lg leading-relaxed text-slate-600">{work.problem}</p>

              {/* Bottom Line */}
              <motion.div
                className="h-1 rounded-full bg-gradient-to-r from-red-500 to-orange-500"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4 }}
              />

              {/* Corner Accent */}
              <motion.div
                className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 blur-3xl"
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
          </motion.div>

          {/* Solution Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group relative"
          >
            {/* Glow Effect */}
            <motion.div
              className="absolute -inset-4 rounded-[48px] bg-gradient-to-r from-teal-500/20 via-blue-500/20 to-purple-500/20 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
            />

            {/* Card */}
            <div className="relative overflow-hidden rounded-[48px] border border-slate-200 bg-gradient-to-br from-white via-teal-50/30 to-blue-50/30 p-10 shadow-2xl">
              {/* Icon */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, type: "spring", bounce: 0.5 }}
                className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500 to-blue-500 text-3xl shadow-lg"
              >
                ✓
              </motion.div>

              {/* Label */}
              <h3 className="mb-4 text-2xl font-bold text-slate-900">Our Solution</h3>

              {/* Description */}
              <p className="mb-6 text-lg leading-relaxed text-slate-700">{work.solution}</p>

              {/* Bottom Line */}
              <motion.div
                className="h-1 rounded-full bg-gradient-to-r from-teal-500 to-blue-500"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4 }}
              />

              {/* Corner Accent */}
              <motion.div
                className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-r from-teal-500/20 to-blue-500/20 blur-3xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: 0.5,
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12"
        >
          <div className="overflow-hidden rounded-[40px] border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-8 shadow-xl">
            <h4 className="mb-6 text-sm font-bold uppercase tracking-wider text-slate-500">
              Services Provided
            </h4>
            <div className="flex flex-wrap gap-4">
              {work.services.map((service, idx) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="group relative"
                >
                  <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white px-6 py-3 shadow-md transition-all duration-300 hover:border-teal-300 hover:shadow-lg">
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 to-blue-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <span className="relative z-10 font-medium text-slate-700 transition-colors duration-300 group-hover:text-teal-600">
                      {service}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
