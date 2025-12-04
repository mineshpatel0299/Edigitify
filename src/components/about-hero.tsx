"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const impactSignals = [
  "Unified pods combining strategy, creative direction, media buying, and operational excellence under one roof for seamless execution.",
  "Transparent, real-time dashboards with daily performance insights that empower leadership to make confident, data-driven decisions.",
  "Dedicated account management ensuring every campaign receives premium, white-glove attention from kickoff to continuous optimization.",
  "Agile methodology that adapts to market changes, allowing rapid pivots and iterative improvements without losing momentum.",
];

const floatingIcons = [
  { icon: "✦", delay: 0, duration: 3 },
  { icon: "◆", delay: 0.5, duration: 4 },
  { icon: "●", delay: 1, duration: 3.5 },
  { icon: "✧", delay: 1.5, duration: 4.5 },
];

export function AboutHero() {
  return (
    <div className="relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {floatingIcons.map((item, idx) => (
          <motion.div
            key={idx}
            className="absolute text-4xl opacity-10"
            style={{
              left: `${20 + idx * 20}%`,
              top: `${10 + idx * 15}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: item.duration,
              delay: item.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {item.icon}
          </motion.div>
        ))}
      </div>

      {/* Main Hero Container */}
      <motion.div
        className="relative grid gap-10 rounded-[40px] border border-slate-200/70 bg-white/80 p-8 shadow-[0_35px_90px_-70px_rgba(15,23,42,0.55)] backdrop-blur-sm md:grid-cols-[1.1fr_0.9fr]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Left Content Section */}
        <div className="space-y-6">
          {/* Section Label with Animation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <p className="section-heading inline-block rounded-full bg-gradient-to-r from-teal-50 to-blue-50 px-4 py-2 text-teal-700">
              About Us
            </p>
          </motion.div>

          {/* Main Heading with Stagger Animation */}
          <motion.h1
            className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-600 bg-clip-text text-4xl font-semibold text-transparent sm:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            Your strategic partner for exceptional digital marketing excellence
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-base text-slate-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            At Edigitify, we operate as an extension of your team, delivering premium, fully managed campaigns through integrated excellence. Our experienced professionals bring together strategy, creativity, technology, and automation to surpass industry benchmarks while maintaining the personalized touch of white-glove service. Every engagement is built on transparency, measurable results, and a commitment to elevating your brand's digital presence.
          </motion.p>

          {/* Impact Signals Grid */}
          <motion.div
            className="grid gap-4 text-sm text-slate-600 sm:grid-cols-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {impactSignals.map((signal, idx) => (
              <motion.div
                key={signal}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50/70 to-white/90 p-4 shadow-sm transition-all duration-300 hover:scale-105 hover:border-slate-300 hover:shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + idx * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-blue-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative flex items-start gap-3">
                  <span className="mt-0.5 text-teal-500">✓</span>
                  <span>{signal}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-slate-900 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white transition-all duration-300 hover:bg-slate-800 hover:shadow-lg"
              >
                <span className="relative z-10">Plan a project</span>
                <div className="absolute inset-0 -z-0 bg-gradient-to-r from-teal-600 to-blue-600 opacity-0 transition-opacity duration-300 group-hover:opacity-20" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/services"
                className="group inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/50 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-900 backdrop-blur-sm transition-all duration-300 hover:border-slate-500 hover:bg-white hover:shadow-lg"
              >
                Explore services
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Image Section */}
        <motion.div
          className="relative rounded-[32px] border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-slate-100 p-4"
          initial={{ opacity: 0, scale: 0.95, rotateY: -15 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="relative h-full min-h-[320px] overflow-hidden rounded-[28px] shadow-lg shadow-slate-200/70">
            {/* Image Container */}
            <motion.div
              className="relative h-full"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80"
                alt="Team aligning on creative and media strategy"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
                priority
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent" />

              {/* Animated Accent Border */}
              <motion.div
                className="absolute inset-0 rounded-[28px] border-2 border-teal-400/0"
                whileHover={{ borderColor: "rgba(20, 184, 166, 0.3)" }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            {/* Info Card */}
            <motion.div
              className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/20 bg-white/90 p-4 text-slate-900 shadow-md shadow-slate-900/10 backdrop-blur-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(15, 23, 42, 0.2)" }}
            >
              <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Our Team</p>
              <p className="mt-1 text-sm">
                Cross-functional experts delivering integrated campaigns with precision, creativity, and measurable impact.
              </p>

              {/* Animated Pulse Indicator */}
              <div className="mt-3 flex items-center gap-2">
                <motion.div
                  className="h-2 w-2 rounded-full bg-teal-500"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [1, 0.7, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <span className="text-xs text-slate-500">Crafting excellence</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Decorative Bottom Gradient Line */}
      <motion.div
        className="mt-8 h-1 w-full overflow-hidden rounded-full bg-gradient-to-r from-transparent via-slate-200 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <motion.div
          className="h-full w-1/3 bg-gradient-to-r from-teal-500 to-blue-500"
          animate={{ x: ["-100%", "300%"] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        />
      </motion.div>
    </div>
  );
}
