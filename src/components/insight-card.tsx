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
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-3xl border border-white/70 bg-white/70 p-6 shadow-[0_30px_70px_-45px_rgba(15,23,42,0.8)] backdrop-blur-2xl"
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/80 via-transparent to-sky-50/80" />
      </div>
      <div className="flex items-center justify-between">
        <span className="text-xs uppercase tracking-[0.4em] text-slate-500">
          {insight.category}
        </span>
        <span className="text-xs uppercase tracking-[0.3em] text-slate-400">Read</span>
      </div>
      <Link href={`/insights#${insight.slug}`} className="relative mt-4 block">
        <h3 className="text-2xl font-semibold text-slate-900">{insight.title}</h3>
        <p className="mt-2 text-sm text-slate-600">{insight.dek}</p>
        <span className="mt-4 inline-flex items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-slate-500">
          Open memo
          <span aria-hidden>↗</span>
        </span>
      </Link>
    </motion.li>
  );
}
