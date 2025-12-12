"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import type { WorkCaseStudy } from "@/data/work";

export function WorkDetailHero({ work }: { work: WorkCaseStudy }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-hidden rounded-3xl md:rounded-[40px]">
      {/* Background Image with Parallax */}
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <Image
          src={work.image}
          alt={work.title}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/70 to-slate-900/90" />

        {/* Animated Noise Pattern */}
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
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 flex min-h-screen items-center px-6 py-32"
      >
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            {/* Left Column - Main Content */}
            <div className="space-y-8">
              {/* Breadcrumb */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center gap-2 text-sm text-slate-300"
              >
                <span>Work</span>
                <span>/</span>
                <span className="text-teal-400">{work.title}</span>
              </motion.div>

              {/* Tags */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-3"
              >
                {work.tags.map((tag, idx) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
                    className="rounded-full border border-teal-400/30 bg-teal-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-teal-400 backdrop-blur-sm"
                  >
                    {tag}
                  </motion.span>
                ))}
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl"
              >
                {work.title}
              </motion.h1>

              {/* Summary */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="text-xl leading-relaxed text-slate-300 md:text-2xl"
              >
                {work.summary}
              </motion.p>

              {/* Info Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="grid gap-4 sm:grid-cols-3"
              >
                {[
                  { label: "Industry", value: work.industry },
                  { label: "Location", value: work.location },
                  { label: "Client", value: work.client },
                ].map((item, idx) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 + idx * 0.1 }}
                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-blue-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="relative z-10">
                      <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-400">
                        {item.label}
                      </div>
                      <div className="text-lg font-bold text-white">{item.value}</div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Right Column - Metrics Cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col justify-end space-y-4"
            >
              {work.metrics.slice(0, 3).map((metric, idx) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 + idx * 0.15 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
                >
                  {/* Glow Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-blue-500/20 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"
                  />

                  <div className="relative z-10">
                    <div className="mb-2 text-sm font-medium uppercase tracking-wider text-slate-400">
                      {metric.label}
                    </div>
                    <div className="mb-1 bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-5xl font-bold text-transparent">
                      {metric.value}
                    </div>
                    {metric.context && (
                      <div className="text-sm text-slate-400">{metric.context}</div>
                    )}
                  </div>

                  {/* Bottom Line */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-teal-500 to-blue-500"
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: idx * 0.2 }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.8 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-2"
            >
              <span className="text-xs uppercase tracking-wider text-slate-400">Scroll Down</span>
              <div className="h-12 w-6 rounded-full border-2 border-white/20">
                <motion.div
                  className="mx-auto mt-2 h-2 w-2 rounded-full bg-white"
                  animate={{ y: [0, 16, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
