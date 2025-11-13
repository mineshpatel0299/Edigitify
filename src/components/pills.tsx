"use client";

import { motion } from "framer-motion";

const items = ["Web", "Social", "Search", "Creators", "Design"];

export function ServicePills() {
  return (
    <div className="flex flex-wrap gap-3">
      {items.map((item) => (
        <motion.span
          key={item}
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.98 }}
          className="rounded-full border border-slate-200 px-4 py-2 text-xs uppercase tracking-[0.25em] text-slate-600"
        >
          {item}
        </motion.span>
      ))}
    </div>
  );
}
