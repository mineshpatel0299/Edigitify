"use client";

import { useEffect, useState } from "react";
import { citiesData } from "@/lib/content";
import { formatDay, formatTime } from "@/lib/utils";
import { motion } from "framer-motion";

export function WorldClockStrip() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-[40px] border border-white/70 bg-white/70 p-8 shadow-[0_35px_90px_-55px_rgba(15,23,42,0.9)] backdrop-blur-2xl"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-80 [background-image:radial-gradient(circle_at_0%_0%,rgba(59,130,246,0.18),transparent_55%),radial-gradient(circle_at_90%_20%,rgba(16,185,129,0.15),transparent_55%)]"
        aria-hidden
      />
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-slate-500">
            Global Presence
          </p>
          <h3 className="mt-2 text-3xl font-semibold text-slate-900">
            Always-on Edigitify desk
          </h3>
        </div>
        <a
          href="mailto:hello@edigitify.com"
          className="rounded-full border border-white/60 bg-white/30 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-900 backdrop-blur-2xl transition hover:border-slate-500/70 hover:bg-white/60"
        >
          Contact us
        </a>
      </div>
      <div className="relative z-10 mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {citiesData.map((city) => (
          <div
            key={city.city}
            className="group relative overflow-hidden rounded-2xl border border-white/70 bg-white/70 p-4 backdrop-blur-xl transition hover:-translate-y-1"
          >
            <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900/5 via-transparent to-emerald-50/70" />
            </div>
            <div className="relative z-10">
              <p className="text-xs uppercase tracking-[0.4em] text-slate-500">
                {city.city}, {city.country}
              </p>
              <p className="text-3xl font-semibold text-slate-900">
                {formatTime(now, city.tz)}
              </p>
              <p className="text-sm text-slate-600">
                {formatDay(now, city.tz)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
