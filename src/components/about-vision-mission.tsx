"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const sections = [
  {
    id: "vision",
    title: "Vision",
    icon: "👁️",
    tagline: "See the future of digital marketing",
    description: "We envision a world where marketing feels effortless, authentic, and deeply connected to human needs.",
    points: [
      {
        title: "Human-Centered Design",
        detail: "Every campaign starts with empathy—understanding the real humans behind the metrics and creating experiences that resonate.",
      },
      {
        title: "Sustainable Growth",
        detail: "We reject growth-at-all-costs mentality. True success is measured in lasting relationships and compound momentum.",
      },
      {
        title: "Transparent Operations",
        detail: "No black boxes. Our clients see exactly how decisions are made, where budgets flow, and what drives results.",
      },
    ],
    gradient: "from-teal-500 via-blue-500 to-purple-500",
  },
  {
    id: "mission",
    title: "Mission",
    icon: "🚀",
    tagline: "Elevate brands through integrated excellence",
    description: "Our mission is to be the embedded team that removes friction, amplifies craft, and delivers predictable excellence.",
    points: [
      {
        title: "White-Glove Service",
        detail: "Premium, personalized attention to every detail—from strategy workshops to post-launch optimization.",
      },
      {
        title: "Unified Pods",
        detail: "Cross-functional teams working under one roof, eliminating silos and keeping everyone aligned on outcomes.",
      },
      {
        title: "Automation with Soul",
        detail: "Technology should free humans to do their best work, not replace the craft and intuition that makes marketing an art.",
      },
    ],
    gradient: "from-orange-500 via-pink-500 to-red-500",
  },
  {
    id: "values",
    title: "Values",
    icon: "💎",
    tagline: "Principles that guide every decision",
    description: "Our values aren't just words on a wall—they're the foundation of how we work, collaborate, and deliver.",
    points: [
      {
        title: "Radical Candor",
        detail: "Honest feedback delivered with care. We challenge ideas, not people, and create space for truth.",
      },
      {
        title: "Continuous Learning",
        detail: "The digital landscape evolves daily. We invest in learning, experimentation, and staying ahead of the curve.",
      },
      {
        title: "Quality Over Quantity",
        detail: "We'd rather ship one exceptional campaign than ten mediocre ones. Excellence takes time and focus.",
      },
    ],
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
  },
];

export function AboutVisionMission() {
  const [activeTab, setActiveTab] = useState(sections[0].id);
  const activeSection = sections.find((s) => s.id === activeTab) ?? sections[0];

  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
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
            What Drives Us
          </motion.span>
          <h2 className="mx-auto mb-6 max-w-4xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-4xl font-bold text-transparent md:text-5xl lg:text-6xl">
            Built on purpose, powered by people
          </h2>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-wrap justify-center gap-4"
        >
          {sections.map((section) => (
            <motion.button
              key={section.id}
              onClick={() => setActiveTab(section.id)}
              className={cn(
                "relative overflow-hidden rounded-2xl px-8 py-4 text-sm font-semibold uppercase tracking-wider transition-all duration-300",
                activeTab === section.id
                  ? "text-white shadow-xl"
                  : "border border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-900"
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {activeTab === section.id && (
                <motion.div
                  layoutId="activeTab"
                  className={`absolute inset-0 bg-gradient-to-r ${section.gradient}`}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <span className="text-xl">{section.icon}</span>
                {section.title}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Content Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-[48px] border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-slate-100 p-8 shadow-2xl shadow-slate-300/50 lg:p-12"
          >
            {/* Decorative Elements */}
            <div className={`pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-gradient-to-r ${activeSection.gradient} opacity-10 blur-3xl`} />

            {/* Header */}
            <div className="relative z-10 mb-12 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, type: "spring", bounce: 0.5 }}
                className={`mb-4 inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br ${activeSection.gradient} shadow-lg`}
              >
                <span className="text-5xl">{activeSection.icon}</span>
              </motion.div>
              <h3 className={`mb-3 bg-gradient-to-r ${activeSection.gradient} bg-clip-text text-3xl font-bold text-transparent md:text-4xl`}>
                {activeSection.tagline}
              </h3>
              <p className="mx-auto max-w-3xl text-lg text-slate-600">
                {activeSection.description}
              </p>
            </div>

            {/* Points Grid */}
            <div className="relative z-10 grid gap-6 md:grid-cols-3">
              {activeSection.points.map((point, idx) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-lg transition-all duration-300 hover:border-slate-300 hover:shadow-xl"
                >
                  {/* Hover Gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${activeSection.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-5`}
                  />

                  {/* Number Badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 + 0.2, type: "spring", bounce: 0.6 }}
                    className={`relative mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${activeSection.gradient} text-xl font-bold text-white shadow-md`}
                  >
                    {idx + 1}
                  </motion.div>

                  {/* Content */}
                  <h4 className="relative mb-3 text-xl font-bold text-slate-900">
                    {point.title}
                  </h4>
                  <p className="relative text-slate-600">
                    {point.detail}
                  </p>

                  {/* Bottom Line Animation */}
                  <motion.div
                    className={`mt-4 h-1 w-0 rounded-full bg-gradient-to-r ${activeSection.gradient}`}
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: idx * 0.1 + 0.4 }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
