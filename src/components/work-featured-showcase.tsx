"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import type { WorkItem } from "@/lib/content";

export function WorkFeaturedShowcase({ item }: { item: WorkItem }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <motion.section
      ref={containerRef}
      style={{ opacity }}
      className="relative overflow-hidden py-24"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: "48px 48px",
          }}
          animate={{
            backgroundPosition: ["0px 0px", "48px 48px"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Floating Orbs */}
      <div className="pointer-events-none absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-96 w-96 rounded-full bg-gradient-to-r from-teal-500/10 to-blue-500/10 blur-3xl"
            style={{
              left: `${i * 30}%`,
              top: `${i * 20}%`,
            }}
            animate={{
              y: [0, -80, 0],
              x: [0, 60, 0],
              scale: [1, 1.4, 1],
            }}
            transition={{
              duration: 15 + i * 3,
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
            Featured Case Study
          </motion.span>
          <h2 className="mx-auto mb-6 max-w-4xl bg-gradient-to-r from-white via-blue-100 to-teal-100 bg-clip-text text-4xl font-bold text-transparent md:text-5xl lg:text-6xl">
            Deep dive into excellence
          </h2>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left Column - Image */}
          <motion.div
            style={{ y }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="group relative overflow-hidden rounded-[48px] border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[40px]">
                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.6 }}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1200px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                </motion.div>

                {/* Floating Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3, type: "spring", bounce: 0.5 }}
                  className="absolute left-6 top-6 rounded-2xl border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md"
                >
                  <span className="text-sm font-semibold text-white">{item.industry}</span>
                </motion.div>

                {/* Metrics Overlay */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="absolute bottom-6 left-6 right-6"
                >
                  <div className="grid grid-cols-2 gap-3">
                    {item.metrics.slice(0, 2).map((metric) => (
                      <div
                        key={metric.label}
                        className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-md"
                      >
                        <div className="mb-1 text-3xl font-bold text-white">{metric.value}</div>
                        <div className="text-xs text-white/80">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center space-y-8"
          >
            {/* Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap gap-2"
            >
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-2 text-xs font-medium uppercase tracking-wider text-teal-400"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* Title */}
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl font-bold text-white md:text-5xl"
            >
              {item.title}
            </motion.h3>

            {/* Summary */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg leading-relaxed text-slate-300"
            >
              {item.summary}
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Link href={`/work/${item.slug}`}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-500 to-blue-500 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white shadow-lg shadow-teal-500/25 transition-shadow duration-300 hover:shadow-xl hover:shadow-teal-500/40"
                >
                  Read Full Case Study
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
