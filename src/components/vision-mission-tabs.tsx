"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const panels = [
  {
    id: "vision",
    title: "Vision",
    description: "Keep work senior, quiet, and intentional so every launch feels bespoke yet predictable.",
    bullets: [
      "Proven systems behind every creative push.",
      "Clarity and metrics shared early and often.",
    ],
  },
  {
    id: "mission",
    title: "Mission",
    description: "Operate like an embedded team that removes noise, automates the busywork, and keeps pods human.",
    bullets: [
      "Cross-functional rituals under one cadence.",
      "Automation that frees time for deeper craft.",
    ],
  },
] as const;

export function VisionMissionTabs() {
  const [active, setActive] = useState<(typeof panels)[number]["id"]>("vision");
  const activePanel = panels.find((panel) => panel.id === active) ?? panels[0];

  return (
    <div className="rounded-[32px] border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-slate-100 p-8 shadow-xl shadow-slate-200/70">
      <div className="flex gap-4">
        {panels.map((panel) => (
          <button
            key={panel.id}
            type="button"
            onClick={() => setActive(panel.id)}
            className={cn(
              "relative flex-1 rounded-2xl border px-6 py-3 text-sm font-semibold uppercase tracking-[0.35em] transition",
              active === panel.id
                ? "border-slate-900 bg-slate-900 text-white shadow-lg shadow-slate-900/15"
                : "border-slate-300 text-slate-500 hover:border-slate-400 hover:text-slate-800"
            )}
          >
            {panel.title}
          </button>
        ))}
      </div>
      <div className="mt-8 overflow-hidden rounded-[28px] bg-white p-6 shadow-inner shadow-slate-200/60">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePanel.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="space-y-6"
          >
            <p className="text-lg text-slate-700">{activePanel.description}</p>
            <ul className="space-y-3 text-sm text-slate-600">
              {activePanel.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 flex-none rounded-full bg-slate-400" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
