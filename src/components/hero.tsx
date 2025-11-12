"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedText } from "./animated-text";

const ctas = [
  {
    label: "Start a project",
    href: "mailto:info@edigitify.in?subject=Start%20a%20project",
    primary: true,
  },
  {
    label: "See our work",
    href: "/work",
    primary: false,
  },
];

const proofPoints = [
  { label: "Avg. ROAS", value: "4.7x" },
  { label: "Launch timeline", value: "21 days" },
  { label: "Retention", value: "92%" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-40">
      <motion.span
        className="pointer-events-none absolute -left-24 top-16 hidden h-96 w-96 rounded-full bg-gradient-to-r from-[#00f5d4]/30 via-transparent to-transparent blur-3xl lg:block"
        aria-hidden="true"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      <div className="relative space-y-8">
        <motion.p
          className="section-heading text-white/70"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          eDigitify · Digital Studio · Delhi NCR
        </motion.p>

        <AnimatedText
          lines={["Bold launches.", "Braver growth."]}
          className="text-5xl font-normal uppercase tracking-wide text-white md:text-7xl lg:text-[5.5rem]"
        />

        <motion.p
          className="max-w-2xl text-base text-white/70 md:text-lg"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          We concept, design, and deploy digital experiences that spark attention and keep it—without the clutter.
        </motion.p>

        <div className="flex flex-wrap gap-4">
          {ctas.map((cta, index) => (
            <motion.div
              key={cta.label}
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
            >
              <Link
                href={cta.href}
                className={`inline-flex items-center rounded-full px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] transition ${
                  cta.primary
                    ? "bg-white text-black hover:bg-white/90"
                    : "border border-white/30 text-white hover:border-white/80"
                }`}
              >
                {cta.label}
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="grid gap-4 sm:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-20%" }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {proofPoints.map((point) => (
            <motion.div
              key={point.label}
              className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -6, borderColor: "rgba(255,255,255,0.4)" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <p className="text-sm uppercase tracking-[0.3em] text-white/50">{point.label}</p>
              <p className="font-heading text-3xl text-white">{point.value}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
