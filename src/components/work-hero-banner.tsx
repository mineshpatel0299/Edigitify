"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

const categories = [
  { id: "all", label: "All Work", icon: "✦", count: "150+" },
  { id: "website-development", label: "Website Development", icon: "💻", count: "58" },
  { id: "branding", label: "Branding", icon: "🏷️", count: "42" },
  { id: "advertisment-adv", label: "AdvertismentAdv", icon: "📢", count: "30" },
  { id: "graphic-design", label: "Graphic Design", icon: "🎨", count: "52" },
  { id: "paid-media", label: "Paid Media", icon: "📊", count: "45" },
  { id: "photoshoot", label: "Photoshoot", icon: "📸", count: "24" },
  { id: "campaign", label: "Campaign", icon: "🎯", count: "33" },
];


const floatingElements = [
  { shape: "circle", size: 150, color: "from-teal-400/20 to-blue-400/20", delay: 0 },
  { shape: "square", size: 100, color: "from-purple-400/20 to-pink-400/20", delay: 0.7 },
  { shape: "circle", size: 120, color: "from-orange-400/20 to-red-400/20", delay: 1.4 },
];

export function WorkHeroBanner({ onFilterChange }: { onFilterChange?: (filter: string) => void }) {
  const [activeFilter, setActiveFilter] = useState("all");
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);

  const handleFilterClick = (filterId: string) => {
    if (filterId === "website-development") {
      setActiveFilter(filterId);
      router.push("/work/websites");
      return;
    }
    setActiveFilter(filterId);
    onFilterChange?.(filterId);
  };

  return (
    <div ref={containerRef} className="relative min-h-[85vh] overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100">
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.02) 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
          }}
          animate={{
            backgroundPosition: ["0px 0px", "64px 64px"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Floating Shapes */}
      <div className="pointer-events-none absolute inset-0">
        {floatingElements.map((el, idx) => (
          <motion.div
            key={idx}
            className={`absolute rounded-${el.shape === "circle" ? "full" : "3xl"} bg-gradient-to-br ${el.color} blur-3xl`}
            style={{
              width: el.size,
              height: el.size,
              left: `${20 + idx * 25}%`,
              top: `${15 + idx * 20}%`,
            }}
            animate={{
              y: [0, -60, 0],
              x: [0, 40, 0],
              scale: [1, 1.3, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 18 + idx * 4,
              delay: el.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        style={{ opacity, scale, y }}
        className="relative z-10 flex min-h-[85vh] items-center justify-center px-6 py-20"
      >
        <div className="mx-auto w-full max-w-7xl">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12 text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-6 inline-flex items-center gap-2"
            >
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="h-2 w-2 rounded-full bg-gradient-to-r from-teal-500 to-blue-500"
              />
              <span className="bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 bg-clip-text text-sm font-semibold uppercase tracking-[0.3em] text-transparent">
                Our Work
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-5xl font-bold leading-tight text-transparent md:text-6xl lg:text-7xl"
            >
              Campaigns that move
              <br />
              <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text">
                metrics & mindsets
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-600 md:text-xl"
            >
              From paid media to marketing automation, explore how we help brands build predictable
              growth engines with full-stack campaign systems.
            </motion.p>
          </motion.div>

          {/* Filter Pills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            {categories.map((category, idx) => (
              <motion.button
                key={category.id}
                onClick={() => handleFilterClick(category.id)}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.9 + idx * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`group relative overflow-hidden rounded-2xl border-2 px-6 py-4 transition-all duration-300 ${
                  activeFilter === category.id
                    ? "border-slate-900 bg-slate-900 shadow-xl shadow-slate-900/20"
                    : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-lg"
                }`}
              >
                {/* Active Background Gradient */}
                {activeFilter === category.id && (
                  <motion.div
                    layoutId="activeFilterBg"
                    className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-800"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}

                {/* Content */}
                <div className="relative z-10 flex items-center gap-3">
                  <span className={`text-2xl transition-transform duration-300 group-hover:scale-110 ${
                    activeFilter === category.id ? "" : "grayscale"
                  }`}>
                    {category.icon}
                  </span>
                  <div className="text-left">
                    <div className={`text-sm font-semibold ${
                      activeFilter === category.id ? "text-white" : "text-slate-900"
                    }`}>
                      {category.label}
                    </div>
                    <div className={`text-xs ${
                      activeFilter === category.id ? "text-slate-300" : "text-slate-500"
                    }`}>
                      {category.count} projects
                    </div>
                  </div>
                </div>

                {/* Hover Glow */}
                <motion.div
                  className="absolute inset-0 -z-10 bg-gradient-to-r from-teal-500/10 to-blue-500/10 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100"
                />
              </motion.button>
            ))}
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {[
              { label: "Projects Delivered", value: "150+", icon: "✓" },
              { label: "Industries Served", value: "25+", icon: "●" },
              { label: "Avg ROI Increase", value: "5x", icon: "↑" },
              { label: "Client Retention", value: "98%", icon: "★" },
            ].map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.3 + idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-lg transition-all duration-300 hover:border-slate-300 hover:shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-blue-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative z-10">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-3xl text-teal-500">{stat.icon}</span>
                    <motion.div
                      className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 1.4 + idx * 0.1, type: "spring", bounce: 0.5 }}
                    >
                      {stat.value}
                    </motion.div>
                  </div>
                  <div className="text-sm font-medium text-slate-600">{stat.label}</div>
                </div>

                <motion.div
                  className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-teal-500 to-blue-500"
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: idx * 0.1 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-wider text-slate-400">Explore Projects</span>
          <div className="h-12 w-6 rounded-full border-2 border-slate-300">
            <motion.div
              className="mx-auto mt-2 h-2 w-2 rounded-full bg-slate-400"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
