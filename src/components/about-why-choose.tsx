"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, MouseEvent } from "react";

const reasons = [
  {
    title: "White-Glove Service",
    description: "Premium, personalized attention to every campaign detail from strategy to execution and beyond.",
    icon: "✨",
    gradient: "from-teal-500 to-blue-500",
  },
  {
    title: "Integrated Pods",
    description: "Strategy, creative, media, and automation working together under one unified team.",
    icon: "🤝",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Data-Driven Decisions",
    description: "Real-time dashboards and transparent reporting keep you informed at every step.",
    icon: "📊",
    gradient: "from-orange-500 to-red-500",
  },
  {
    title: "Proven Track Record",
    description: "150+ successful projects delivered across diverse industries with measurable results.",
    icon: "🏆",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    title: "Scalable Solutions",
    description: "Marketing systems that grow with your business, from startup to enterprise.",
    icon: "⚡",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Always Available",
    description: "24/7 support and dedicated account management ensures you're never left in the dark.",
    icon: "🌟",
    gradient: "from-indigo-500 to-purple-500",
  },
];

function TiltCard({
  children,
  gradient,
}: {
  children: React.ReactNode;
  gradient: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative"
    >
      <div
        className={`absolute -inset-px rounded-[32px] bg-gradient-to-r ${gradient} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-75`}
      />
      {children}
    </motion.div>
  );
}

export function AboutWhyChoose() {
  return (
    <section className="relative py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
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
            Why Choose Edigitify
          </motion.span>
          <h2 className="mx-auto mb-6 max-w-4xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-4xl font-bold text-transparent md:text-5xl lg:text-6xl">
            Your success is <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text">our mission</span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-slate-600 md:text-xl">
            We&apos;re not just another agency. We&apos;re your embedded digital marketing team, committed to
            delivering exceptional results through integrated excellence.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, idx) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group"
            >
              <TiltCard gradient={reason.gradient}>
                <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-8 shadow-xl transition-all duration-500 hover:border-slate-300 hover:shadow-2xl lg:p-10">
                  {/* Icon Container */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: idx * 0.1 + 0.2,
                      type: "spring",
                      bounce: 0.5,
                    }}
                    className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${reason.gradient} shadow-lg`}
                    style={{
                      transform: "translateZ(50px)",
                    }}
                  >
                    <span className="text-4xl">{reason.icon}</span>
                  </motion.div>

                  {/* Title */}
                  <h3
                    className="mb-4 text-2xl font-bold text-slate-900"
                    style={{
                      transform: "translateZ(30px)",
                    }}
                  >
                    {reason.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="leading-relaxed text-slate-600"
                    style={{
                      transform: "translateZ(20px)",
                    }}
                  >
                    {reason.description}
                  </p>

                  {/* Animated Bottom Accent */}
                  <motion.div
                    className={`mt-6 h-1 rounded-full bg-gradient-to-r ${reason.gradient}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: idx * 0.1 + 0.4 }}
                    style={{
                      transform: "translateZ(10px)",
                    }}
                  />

                  {/* Background Gradient Glow */}
                  <motion.div
                    className={`absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-r ${reason.gradient} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-10`}
                  />
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative mx-auto max-w-4xl overflow-hidden rounded-[48px] border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-12 shadow-2xl"
          >
            {/* Decorative Elements */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-r from-teal-500/20 to-blue-500/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl" />

            <div className="relative z-10">
              <h3 className="mb-4 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
                Ready to elevate your digital presence?
              </h3>
              <p className="mb-8 text-lg text-slate-600">
                Let&apos;s discuss how we can help you achieve your marketing goals with our integrated approach.
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
                  View Case Studies
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
