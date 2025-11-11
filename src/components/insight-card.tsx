"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Insight } from "@/lib/content";

export function InsightCard({ insight, index }: { insight: Insight; index: number }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="rounded-3xl border border-white/10 bg-white/5 p-6"
    >
      <div className="flex items-center justify-between">
        <span className="text-xs uppercase tracking-[0.4em] text-white/50">
          {insight.category}
        </span>
        <span className="text-sm text-white/40">Read</span>
      </div>
      <Link href={`/insights#${insight.slug}`} className="mt-4 block">
        <h3 className="text-2xl font-semibold text-white">{insight.title}</h3>
        <p className="mt-2 text-sm text-white/70">{insight.dek}</p>
      </Link>
    </motion.li>
  );
}
