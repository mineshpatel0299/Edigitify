"use client";

import type { Metadata } from "next";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { WorkScrollCard } from "@/components/work-scroll-card";
import { servicePodItems } from "@/data/service-pods";

const services = [
  {
    title: "Paid Media Architecture",
    copy:
      "We distribute budgets across Meta, Google, YouTube, programmatic, and affiliates with pacing models that update every few hours.",
    bullets: ["Channel mix + forecasting", "Creative x audience matrices", "Measurement + MMM setup"],
    gradient: "from-teal-500 to-blue-500",
    icon: "📊",
  },
  {
    title: "Performance Creative Studio",
    copy:
      "Scripted story labs produce reels, films, statics, and UGC while maintaining brand codes and testing frameworks.",
    bullets: ["Campaign narrative systems", "UGC + influencer ops", "Landing + commerce experiences"],
    gradient: "from-purple-500 to-pink-500",
    icon: "🎨",
  },
  {
    title: "Automation & CRM Ops",
    copy:
      "WhatsApp, email, and CRM journeys stitched into sales workflows so leads get context and teams keep clarity.",
    bullets: ["Lead routing & scoring", "Playbooks for HubSpot/Salesforce", "Service + support automation"],
    gradient: "from-orange-500 to-red-500",
    icon: "⚡",
  },
  {
    title: "Analytics & Advisory",
    copy:
      "We wire dashboards, revenue modeling, and C-suite rituals that align finance, marketing, and customer ops.",
    bullets: ["Attribution + incrementality", "Budget governance", "RevOps office hours"],
    gradient: "from-emerald-500 to-teal-500",
    icon: "📈",
  },
];

const floatingShapes = [
  { size: 100, color: "from-teal-400/10 to-blue-400/10", delay: 0, x: "10%", y: "5%" },
  { size: 80, color: "from-purple-400/10 to-pink-400/10", delay: 0.5, x: "85%", y: "10%" },
  { size: 120, color: "from-orange-400/10 to-red-400/10", delay: 1, x: "75%", y: "60%" },
  { size: 90, color: "from-emerald-400/10 to-teal-400/10", delay: 1.5, x: "15%", y: "70%" },
];

function TiltCard({
  children,
  gradient,
  index,
}: {
  children: React.ReactNode;
  gradient: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{
        y: -8,
        transition: { duration: 0.3 }
      }}
      className="group relative"
    >
      <div
        className={`absolute -inset-px rounded-[32px] bg-gradient-to-r ${gradient} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-60`}
      />
      {children}
    </motion.div>
  );
}

export default function ServicesPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  return (
    <div ref={containerRef} className="relative">
      {/* Hero Banner Section */}
      <div className="relative min-h-[85vh] overflow-hidden">
        {/* Animated Background Gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Floating Geometric Shapes */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {floatingShapes.map((shape, idx) => (
            <motion.div
              key={idx}
              className={`absolute rounded-full bg-gradient-to-br ${shape.color.replace('/10', '/20')} blur-3xl`}
              style={{
                width: shape.size,
                height: shape.size,
                left: shape.x,
                top: shape.y,
              }}
              animate={{
                y: [0, -50, 0],
                x: [0, 30, 0],
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 15 + idx * 3,
                delay: shape.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

        {/* Main Hero Content */}
        <motion.div
          style={{ opacity: heroOpacity, y: heroY }}
          className="relative z-10 flex min-h-[85vh] items-center justify-center px-6 py-20"
        >
          <div className="mx-auto max-w-7xl text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8 inline-flex items-center gap-2"
            >
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="h-2 w-2 rounded-full bg-teal-400"
              />
              <span className="bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400 bg-clip-text text-sm font-medium uppercase tracking-[0.3em] text-transparent">
                Our Services
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="mb-8"
            >
              <h1 className="mb-4 text-5xl font-bold leading-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
                <motion.span
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="block bg-gradient-to-r from-white via-blue-100 to-teal-100 bg-clip-text text-transparent"
                >
                  Marketing Teams
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="block bg-gradient-to-r from-teal-200 via-blue-200 to-purple-200 bg-clip-text text-transparent"
                >
                  Built to Scale
                </motion.span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="mx-auto mb-12 max-w-3xl text-lg leading-relaxed text-slate-300 md:text-xl"
            >
              Full-stack marketing pods that own strategy, execution, and reporting end to end.
              One unified squad to brief talent, deploy media, talk to sales, and answer to the board.
            </motion.p>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="mb-12 flex flex-wrap items-center justify-center gap-8 md:gap-12"
            >
              {[
                { value: "6+", label: "Service Offerings" },
                { value: "100%", label: "Integrated Teams" },
                { value: "24/7", label: "Campaign Support" },
              ].map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.2 + idx * 0.1 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-teal-500/20 to-blue-500/20 blur-xl transition-all duration-300 group-hover:blur-2xl" />
                  <div className="relative rounded-2xl border border-white/10 bg-white/5 px-8 py-6 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10">
                    <div className="mb-1 text-3xl font-bold text-white md:text-4xl">{stat.value}</div>
                    <div className="text-sm text-slate-400">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a
                  href="/contact"
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-teal-500 to-blue-500 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white shadow-lg shadow-teal-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/40"
                >
                  <span className="relative z-10">Get Started</span>
                  <motion.span
                    className="relative z-10"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                  <div className="absolute inset-0 -z-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </a>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a
                  href="/work"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/10"
                >
                  See Our Work
                </a>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs uppercase tracking-wider text-slate-400">Scroll to explore</span>
            <motion.div
              className="h-12 w-6 rounded-full border-2 border-white/20"
              whileHover={{ borderColor: "rgba(255,255,255,0.4)" }}
            >
              <motion.div
                className="mx-auto mt-2 h-2 w-2 rounded-full bg-white"
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Content Sections with Floating Shapes */}
      <div className="relative pb-20">
        {/* Floating Background Shapes for content area */}
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          {floatingShapes.map((shape, idx) => (
            <motion.div
              key={`bg-${idx}`}
              className={`absolute rounded-full bg-gradient-to-br ${shape.color} blur-3xl`}
              style={{
                width: shape.size * 0.8,
                height: shape.size * 0.8,
                left: shape.x,
                top: `${parseFloat(shape.y) + 50}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, 20, 0],
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
              }}
              transition={{
                duration: 20 + idx * 5,
                delay: shape.delay + 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Service Pods Section */}
        <section className="relative space-y-8 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="space-y-3"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2"
          >
            <p className="section-heading">How we work</p>
          </motion.div>
          <h2 className="text-4xl font-semibold text-slate-900 lg:text-5xl">
            Specialized pods for{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              every channel
            </span>
          </h2>
          <p className="max-w-3xl text-lg text-slate-600">
            Each service pod brings deep expertise in their domain—from website development to social media, SEO to influencer marketing. Scroll to explore the full stack.
          </p>
        </motion.div>

        <div className="space-y-12">
          {servicePodItems.map((item, index) => (
            <motion.div
              key={item.slug}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
            >
              <WorkScrollCard item={item} priority={index === 0} />
            </motion.div>
          ))}
        </div>
        </section>

        {/* Capabilities Section with 3D Tilt Cards */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8 }}
          className="relative mt-24 space-y-12 px-6"
        >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="space-y-3 text-center"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4 inline-block rounded-full bg-gradient-to-r from-teal-50 to-blue-50 px-6 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-teal-700"
          >
            Core Capabilities
          </motion.span>
          <h2 className="mx-auto max-w-4xl text-4xl font-bold text-slate-900 lg:text-5xl">
            Strategic capabilities that{" "}
            <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
              amplify performance
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-slate-600">
            Advanced media, creative, automation, and analytics orchestrated to deliver compounding returns across your entire marketing ecosystem.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <TiltCard key={service.title} gradient={service.gradient} index={index}>
              <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-8 shadow-xl transition-all duration-500 group-hover:border-slate-300 group-hover:shadow-2xl lg:p-10">
                {/* Icon Container */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1 + 0.2,
                    type: "spring",
                    bounce: 0.5,
                  }}
                  className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${service.gradient} shadow-lg`}
                >
                  <span className="text-4xl">{service.icon}</span>
                </motion.div>

                {/* Capability Label */}
                <p className="text-xs uppercase tracking-[0.4em] text-slate-500">Capability</p>

                {/* Title */}
                <h3 className="mt-2 text-2xl font-bold text-slate-900 lg:text-3xl">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-4 leading-relaxed text-slate-600">{service.copy}</p>

                {/* Animated Bullets */}
                <ul className="mt-6 space-y-3 text-sm text-slate-600">
                  {service.bullets.map((bullet, bulletIdx) => (
                    <motion.li
                      key={bullet}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + bulletIdx * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <motion.span
                        className={`h-2 w-2 rounded-full bg-gradient-to-r ${service.gradient}`}
                        whileHover={{ scale: 1.5 }}
                        transition={{ duration: 0.2 }}
                      />
                      {bullet}
                    </motion.li>
                  ))}
                </ul>

                {/* Animated Bottom Accent */}
                <motion.div
                  className={`mt-8 h-1 rounded-full bg-gradient-to-r ${service.gradient}`}
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.4 }}
                />

                {/* Background Gradient Glow */}
                <motion.div
                  className={`absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-r ${service.gradient} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-10`}
                />
              </div>
            </TiltCard>
          ))}
        </div>
        </motion.section>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="relative mt-24 px-6"
        >
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="relative mx-auto max-w-5xl overflow-hidden rounded-[48px] border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-12 shadow-2xl lg:p-16"
        >
          {/* Decorative Elements */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-r from-teal-500/20 to-blue-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl" />

          <div className="relative z-10 text-center">
            <h3 className="mb-4 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-3xl font-bold text-transparent md:text-4xl lg:text-5xl">
              Ready to scale your growth?
            </h3>
            <p className="mb-8 text-lg text-slate-600 lg:text-xl">
              Let&apos;s discuss how our integrated pods can accelerate your marketing outcomes.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
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
              <motion.a
                href="/work"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 rounded-full border-2 border-slate-300 bg-white px-8 py-4 text-sm font-semibold uppercase tracking-wider text-slate-900 transition-all duration-300 hover:border-slate-400 hover:bg-slate-50"
              >
                View Our Work
              </motion.a>
            </div>
          </div>
        </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
