"use client";

import { useMemo, useState, useTransition } from "react";
import type { WorkItem } from "@/lib/content";
import { WorkCard } from "./work-card";
import { motion } from "framer-motion";

const filters = ["All", "Paid Media", "Automation", "Creative", "Analytics", "Travel", "Real Estate", "D2C"];

export function WorkGrid({ items }: { items: WorkItem[] }) {
  const [active, setActive] = useState<string>("All");
  const [isPending, startTransition] = useTransition();

  const filtered = useMemo(() => {
    if (active === "All") return items;
    return items.filter((item) => item.tags.includes(active));
  }, [active, items]);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-3">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() =>
              startTransition(() => {
                setActive(filter);
              })
            }
            className={`rounded-full border px-5 py-2 text-xs uppercase tracking-[0.3em] transition ${
              active === filter
                ? "border-white bg-white text-black"
                : "border-white/20 text-white/60 hover:text-white"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="relative" aria-busy={isPending}>
        <div className={`grid gap-8 lg:grid-cols-2 ${isPending ? "opacity-40" : ""}`}>
          {filtered.map((item, index) => (
            <WorkCard key={item.slug} item={item} index={index} />
          ))}
        </div>
        {isPending && (
          <div className="pointer-events-none absolute inset-0 grid gap-8 lg:grid-cols-2">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="h-64 animate-pulse rounded-[28px] border border-white/10 bg-white/5"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
