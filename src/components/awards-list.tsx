"use client";

import { awardsData } from "@/lib/content";
import { motion } from "framer-motion";

export function AwardsList() {
  return (
    <div className="space-y-4">
      {awardsData.map((award, index) => (
        <motion.div
          key={`${award.organization}-${award.year}`}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: index * 0.08, duration: 0.5 }}
          className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-6 py-5 shadow-sm shadow-slate-200/60"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-slate-500">
              {award.year}
            </p>
            <p className="text-lg font-medium text-slate-900">{award.organization}</p>
          </div>
          <p className="max-w-sm text-right text-sm text-slate-600">{award.title}</p>
        </motion.div>
      ))}
    </div>
  );
}
