"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { WorkCaseStudy } from "@/data/work";

export function WorkDetailGallery({ work }: { work: WorkCaseStudy }) {
  if (!work.gallery || work.gallery.length === 0) return null;

  return (
    <section className="relative py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50" />

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
            className="mb-4 inline-block rounded-full bg-gradient-to-r from-teal-50 to-blue-50 px-6 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-teal-700"
          >
            Project Gallery
          </motion.span>
          <h2 className="mx-auto mb-6 max-w-4xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
            Visual storytelling
          </h2>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {work.gallery.map((image, idx) => (
            <motion.div
              key={image}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative"
            >
              {/* Glow Effect */}
              <motion.div
                className="absolute -inset-2 rounded-[32px] bg-gradient-to-r from-teal-500/20 to-blue-500/20 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"
              />

              {/* Image Card */}
              <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-3 shadow-xl transition-all duration-500 hover:border-slate-300 hover:shadow-2xl">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[24px]">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="relative h-full w-full"
                  >
                    <Image
                      src={image}
                      alt={`${work.title} - Gallery ${idx + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />

                    {/* Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    {/* View Button on Hover */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    >
                      <div className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg">
                        View Full Size
                      </div>
                    </motion.div>
                  </motion.div>
                </div>

                {/* Image Number Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 + 0.3, type: "spring", bounce: 0.5 }}
                  className="absolute left-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-teal-500 to-blue-500 text-sm font-bold text-white shadow-lg"
                >
                  {idx + 1}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="mb-6 text-lg text-slate-600">
            Interested in similar results for your business?
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-500 to-blue-500 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white shadow-lg shadow-teal-500/25 transition-shadow duration-300 hover:shadow-xl hover:shadow-teal-500/40"
          >
            Start Your Project
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
