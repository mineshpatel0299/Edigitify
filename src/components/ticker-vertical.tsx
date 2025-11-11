"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const translations = [
  { code: "EN", text: "Our purpose is to ignite brave digital futures." },
  { code: "FR", text: "Notre raison d'être: bâtir des produits visionnaires." },
  { code: "DE", text: "Unser Ziel ist es, mutige Produkte zu entwerfen." },
  { code: "ES", text: "Nuestro propósito: diseñar futuros digitales audaces." },
  { code: "PL", text: "Naszą misją jest projektować odważne produkty." },
  { code: "AR", text: "غايتنا إشعال مستقبل رقمي جريء." },
  { code: "JP", text: "私たちの目的は大胆なデジタル体験を創ること。" }
];

export function VerticalTicker() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;
    const timer = setInterval(() => {
      if (!paused) {
        setIndex((prev) => (prev + 1) % translations.length);
      }
    }, 2500);
    return () => clearInterval(timer);
  }, [paused, reduceMotion]);

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-live="polite"
    >
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={translations[index].code}
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -24, opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-3"
        >
          <span className="text-xs uppercase tracking-[0.5em] text-white/40">
            {translations[index].code}
          </span>
          <p className="text-base text-white/80">
            {translations[index].text}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
