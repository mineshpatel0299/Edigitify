"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import type { WorkItem } from "@/lib/content";

export function WorkGridEnhanced({ items }: { items: WorkItem[] }) {
  const [filter, setFilter] = useState("all");

  const filtered = useMemo(() => {
    if (filter === "all") return items;
    return items.filter((item) =>
      item.tags.some((tag) => tag.toLowerCase().includes(filter.toLowerCase()))
    );
  }, [filter, items]);

  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
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
            Featured Projects
          </motion.span>
          <h2 className="mx-auto mb-6 max-w-4xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
            Results that speak louder than promises
          </h2>
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, idx) => (
              <motion.div
                key={item.slug}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group relative"
              >
                <Link href={`/work/${item.slug}`}>
                  {/* Glow Effect */}
                  <motion.div
                    className="absolute -inset-2 rounded-[36px] bg-gradient-to-r from-teal-500/20 via-blue-500/20 to-purple-500/20 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                  />

                  {/* Card */}
                  <div className="relative overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-xl transition-all duration-500 group-hover:border-slate-300 group-hover:shadow-2xl">
                    {/* Image Container */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <motion.div
                        className="relative h-full w-full"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />

                        {/* Tags Badge */}
                        <motion.div
                          initial={{ opacity: 0, y: -20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: idx * 0.05 + 0.2 }}
                          className="absolute left-4 top-4"
                        >
                          <div className="flex flex-wrap gap-2">
                            {item.tags.slice(0, 2).map((tag) => (
                              <span
                                key={tag}
                                className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white backdrop-blur-sm"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      </motion.div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6">
                      <h3 className="mb-3 text-2xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-teal-600">
                        {item.title}
                      </h3>

                      <p className="mb-4 line-clamp-2 text-slate-600">{item.summary}</p>

                      {/* CTA */}
                      <motion.div
                        className="flex items-center gap-2 text-sm font-semibold text-teal-600"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <span>View Case Study</span>
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          →
                        </motion.span>
                      </motion.div>

                      {/* Bottom Line Animation */}
                      <motion.div
                        className="mt-4 h-1 w-0 rounded-full bg-gradient-to-r from-teal-500 to-blue-500"
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: idx * 0.05 + 0.5 }}
                      />
                    </div>

                    {/* Corner Accent */}
                    <motion.div
                      className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-r from-teal-500/20 to-blue-500/20 blur-3xl"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.3, 0.5, 0.3],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: idx * 0.5,
                      }}
                    />
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More CTA */}
        {filtered.length > 6 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-16 text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 rounded-full border-2 border-slate-300 bg-white px-8 py-4 text-sm font-semibold uppercase tracking-wider text-slate-900 transition-all duration-300 hover:border-slate-900 hover:bg-slate-900 hover:text-white hover:shadow-xl"
            >
              View All Projects
              <motion.span
                animate={{ y: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                ↓
              </motion.span>
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
