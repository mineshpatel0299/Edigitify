"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

const metrics = [
  {
    value: 150,
    suffix: "+",
    label: "Projects Completed",
    description: "Delivered with excellence",
    color: "from-teal-500 to-blue-500",
  },
  {
    value: 98,
    suffix: "%",
    label: "Client Retention",
    description: "Long-term partnerships",
    color: "from-blue-500 to-purple-500",
  },
  {
    value: 50,
    suffix: "+",
    label: "Team Members",
    description: "Expert professionals",
    color: "from-purple-500 to-pink-500",
  },
  {
    value: 5,
    suffix: "x",
    label: "Average ROI",
    description: "Growth delivered",
    color: "from-orange-500 to-red-500",
  },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2000, bounce: 0 });
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

export function AboutMetricsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-24 lg:py-32">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <motion.div
          className="absolute inset-0 opacity-30"
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
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-72 w-72 rounded-full bg-gradient-to-r from-teal-500/10 to-blue-500/10 blur-3xl"
            style={{
              left: `${i * 20}%`,
              top: `${i * 15}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, 50, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
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
            className="mb-4 inline-block rounded-full border border-white/10 bg-white/5 px-6 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-teal-400 backdrop-blur-sm"
          >
            Impact by Numbers
          </motion.span>
          <h2 className="mx-auto mb-6 max-w-4xl bg-gradient-to-r from-white via-blue-100 to-teal-100 bg-clip-text text-4xl font-bold text-transparent md:text-5xl lg:text-6xl">
            Proven results that speak for themselves
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-slate-300 md:text-xl">
            Numbers don&apos;t lie. Here&apos;s the measurable impact we&apos;ve delivered for our clients across industries.
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, idx) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative"
            >
              {/* Glow Effect */}
              <motion.div
                className={`absolute -inset-1 rounded-[32px] bg-gradient-to-r ${metric.color} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-75`}
                animate={{
                  opacity: [0, 0.5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: idx * 0.5,
                }}
              />

              {/* Card */}
              <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-8 backdrop-blur-md transition-all duration-500 hover:border-white/20 hover:bg-white/10">
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
                <h3 className="mb-2 text-xl font-bold text-white">{metric.label}</h3>
                <p className="text-sm text-slate-400">{metric.description}</p>

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

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="mb-6 text-lg text-slate-300">
            Ready to see similar results for your business?
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-500 to-blue-500 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white shadow-lg shadow-teal-500/25 transition-shadow duration-300 hover:shadow-xl hover:shadow-teal-500/40"
          >
            Let&apos;s Talk
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
