"use client";

import { motion } from "framer-motion";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

const testimonials: Testimonial[] = [
  {
    quote: "The pod plugged into our team like they had been here for years and shipped a full campaign in six weeks.",
    name: "Ananya Malhotra",
    role: "CMO",
    company: "House of Neem",
  },
  {
    quote: "Their creative + performance pairing keeps every launch rooted in data without losing vibe or craft.",
    name: "Karan Desai",
    role: "Founder",
    company: "Urban Loom",
  },
  {
    quote: "Slack updates, Loom reviews, and shippable files every Friday—we finally feel in-sync with an external team.",
    name: "Sofia Rahman",
    role: "Brand Lead",
    company: "Noon & Co.",
  },
  {
    quote: "The crew rebuilt our web stack, cleaned the SEO foundation, and trained our team, all under one retainer.",
    name: "Ibrahim Khan",
    role: "Head of Growth",
    company: "Palmstay",
  },
  {
    quote: "Influencer operations, paid media, and store optimization under one roof is exactly what we needed.",
    name: "Dhvani Bhatt",
    role: "Marketing Director",
    company: "Purely",
  },
  {
    quote: "Every sprint ends with a tidy retrospective so we always know what was learned, what’s next, and why.",
    name: "Rafael Mendes",
    role: "Product Lead",
    company: "Northwind Labs",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3);

export function TestimonialColumns() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <AnimatedColumn items={firstColumn} direction="up" />
      <AnimatedColumn items={secondColumn} direction="down" />
    </div>
  );
}

type AnimatedColumnProps = {
  items: Testimonial[];
  direction: "up" | "down";
};

function AnimatedColumn({ items, direction }: AnimatedColumnProps) {
  const loopItems = [...items, ...items];
  const initialY = direction === "up" ? 0 : "-50%";
  const animateY = direction === "up" ? "-50%" : "0%";

  return (
    <div className="relative h-[540px] overflow-hidden rounded-[36px] border border-white/40 bg-gradient-to-b from-white/70 via-white/40 to-white/60 p-5 shadow-[0_40px_90px_-70px_rgba(15,23,42,0.65)] backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white via-white/70 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white via-white/80 to-transparent" />
      <motion.div
        initial={{ y: initialY }}
        animate={{ y: animateY }}
        transition={{ duration: 22, ease: "linear", repeat: Infinity }}
        className="flex flex-col gap-4"
      >
        {loopItems.map((testimonial, index) => (
          <article
            key={`${testimonial.name}-${index}`}
            className="rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-lg shadow-slate-200/50"
          >
            <p className="text-base text-slate-700">“{testimonial.quote}”</p>
            <div className="mt-4">
              <p className="text-sm font-semibold text-slate-900">{testimonial.name}</p>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                {testimonial.role} · {testimonial.company}
              </p>
            </div>
          </article>
        ))}
      </motion.div>
    </div>
  );
}
