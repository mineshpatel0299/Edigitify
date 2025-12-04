"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  value: string;
  label: string;
  duration?: number;
  gradient?: string;
}

export function AnimatedCounter({
  value,
  label,
  duration = 2,
  gradient = "from-teal-500 to-blue-500"
}: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  // Extract number from value string (e.g., "6+" -> 6, "100%" -> 100)
  const numericValue = parseInt(value.replace(/\D/g, "")) || 0;
  const suffix = value.replace(/\d/g, "");

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    duration: duration * 1000,
    bounce: 0
  });

  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      motionValue.set(numericValue);
    }
  }, [isInView, numericValue, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplayValue(Math.round(latest));
    });
    return unsubscribe;
  }, [springValue]);

  return (
    <motion.div
      ref={ref}
      className="group relative"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${gradient} opacity-0 blur-xl transition-all duration-500 group-hover:opacity-60`} />

      <motion.div
        className="relative rounded-2xl border border-white/10 bg-white/5 px-8 py-6 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10"
        whileHover={{ y: -5, scale: 1.05 }}
      >
        <motion.div
          className="mb-1 text-3xl font-bold text-white md:text-4xl"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {displayValue}{suffix}
        </motion.div>

        <motion.div
          className="text-sm text-slate-400"
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {label}
        </motion.div>

        {/* Animated underline */}
        <motion.div
          className={`mt-4 h-1 rounded-full bg-gradient-to-r ${gradient}`}
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        />
      </motion.div>
    </motion.div>
  );
}
