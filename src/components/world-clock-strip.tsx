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
      className="rounded-[32px] border border-white/10 bg-gradient-to-br from-white/5 via-white/0 to-white/5 p-8"
    >
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-white/50">
            Global Presence
          </p>
          <h3 className="mt-2 text-3xl font-semibold text-white">
            Always-on Edigitify desk
          </h3>
        </div>
        <a
          href="mailto:hello@edigitify.com"
          className="rounded-full border border-white/20 px-6 py-3 text-sm uppercase tracking-[0.3em] text-white transition hover:border-white hover:bg-white hover:text-black"
        >
          Contact us
        </a>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {citiesData.map((city) => (
          <div
            key={city.city}
            className="rounded-2xl border border-white/10 bg-black/30 p-4"
          >
            <p className="text-xs uppercase tracking-[0.4em] text-white/40">
              {city.city}, {city.country}
            </p>
            <p className="text-3xl font-semibold text-white">
              {formatTime(now, city.tz)}
            </p>
            <p className="text-sm text-white/60">
              {formatDay(now, city.tz)}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
