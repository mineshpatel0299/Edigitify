"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

const impactMetrics = [
  {
    value: 250,
    suffix: "M+",
    label: "Ad Spend Managed",
    description: "Across all client campaigns",
    color: "from-teal-500 to-blue-500",
  },
  {
    value: 12,
    suffix: "M+",
    label: "Leads Generated",
    description: "High-quality conversions",
    color: "from-purple-500 to-pink-500",
  },
  {
    value: 98,
    suffix: "%",
    label: "Client Satisfaction",
    description: "Based on feedback surveys",
    color: "from-orange-500 to-red-500",
  },
  {
    value: 450,
    suffix: "+",
    label: "Campaigns Launched",
    description: "Across 25+ industries",
    color: "from-emerald-500 to-teal-500",
  },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000, bounce: 0 });
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toString() + suffix;
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

const industries = [
  "Real Estate",
  "Healthcare",
  "Travel",
  "D2C",
  "SaaS",
  "Fintech",
  "E-commerce",
  "B2B",
  "Education",
  "Hospitality",
  "Manufacturing",
  "Professional Services",
];

export function WorkImpactSection() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white" />

      {/* Animated Pattern */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4 inline-block rounded-full bg-gradient-to-r from-teal-50 to-blue-50 px-6 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-teal-700"
          >
            Our Impact
          </motion.span>
          <h2 className="mx-auto mb-6 max-w-4xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-4xl font-bold text-transparent md:text-5xl lg:text-6xl">
            Numbers that reflect{" "}
            <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text">real growth</span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-slate-600 md:text-xl">
            Every metric tells a story of partnership, experimentation, and measurable results.
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="mb-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {impactMetrics.map((metric, idx) => (
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
                className={`absolute -inset-2 rounded-[32px] bg-gradient-to-r ${metric.color} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-40`}
              />

              {/* Card */}
              <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-8 shadow-xl transition-all duration-500 hover:border-slate-300 hover:shadow-2xl">
                {/* Animated Number */}
                <motion.div
                  className={`mb-4 bg-gradient-to-r ${metric.color} bg-clip-text text-5xl font-bold text-transparent md:text-6xl`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 + 0.3, type: "spring", bounce: 0.5 }}
                >
                  <AnimatedCounter value={metric.value} suffix={metric.suffix} />
                </motion.div>

                {/* Label */}
                <h3 className="mb-2 text-xl font-bold text-slate-900">{metric.label}</h3>
                <p className="text-sm text-slate-600">{metric.description}</p>

                {/* Decorative Line */}
                <motion.div
                  className={`mt-6 h-1 rounded-full bg-gradient-to-r ${metric.color}`}
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: idx * 0.1 + 0.5 }}
                />

                {/* Corner Accent */}
                <motion.div
                  className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-r ${metric.color} opacity-10 blur-2xl`}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1],
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

        {/* Industries Served */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <h3 className="mb-8 text-2xl font-bold text-slate-900 md:text-3xl">
            Industries We Serve
          </h3>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {industries.map((industry, idx) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white px-6 py-3 shadow-md transition-all duration-300 hover:border-teal-300 hover:shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 to-blue-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="relative z-10 text-sm font-medium text-slate-700 transition-colors duration-300 group-hover:text-teal-600">
                    {industry}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
