"use client";

import dynamic from "next/dynamic";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, Zap, TrendingUp, Star, Award, Users, Target } from "lucide-react";
import { clientsData, workData } from "@/lib/content";
import { servicePodItems } from "@/data/service-pods";

// Critical components - loaded immediately
import { Hero } from "@/components/hero";
import { LogoMarquee } from "@/components/marquee";

// Lazy load heavy components with loading states
const WorkCard = dynamic(() => import("@/components/work-card").then(mod => ({ default: mod.WorkCard })), {
  loading: () => <div className="h-96 bg-slate-100 animate-pulse rounded-3xl" />,
});

const WorkScrollCard = dynamic(() => import("@/components/work-scroll-card").then(mod => ({ default: mod.WorkScrollCard })), {
  loading: () => <div className="h-64 bg-slate-100 animate-pulse rounded-3xl" />,
});

const CountUpNumber = dynamic(() => import("@/components/ui/count-up-number").then(mod => ({ default: mod.CountUpNumber })));

const MagneticCard = dynamic(() => import("@/components/ui/magnetic-card").then(mod => ({ default: mod.MagneticCard })));

const FloatingOrbs = dynamic(() => import("@/components/ui/floating-orbs").then(mod => ({ default: mod.FloatingOrbs })));

const Particles = dynamic(() => import("@/components/ui/particles").then(mod => ({ default: mod.Particles })));

// Lazy load the testimonials section (appears last)
const TestimonialsVariant = dynamic(() => import("@/components/ui/animated-cards-stack-demo").then(mod => ({ default: mod.TestimonialsVariant })), {
  loading: () => <div className="h-96 bg-slate-100 animate-pulse rounded-3xl" />,
  ssr: false, // Don't render on server to reduce initial bundle
});

const featuredServicePods = servicePodItems.slice(0, 2);

const studioStats = [
  {
    value: 6,
    suffix: "+",
    label: "Years shipping",
    helper: "Independent studio since 2018.",
    icon: Award,
    gradient: "from-amber-500 via-orange-500 to-rose-500",
  },
  {
    value: 40,
    suffix: "+",
    label: "Brands partnered",
    helper: "Retail, lifestyle, SaaS, hospitality.",
    icon: Users,
    gradient: "from-cyan-500 via-blue-500 to-indigo-500",
  },
  {
    value: 98,
    suffix: "%",
    label: "Client satisfaction",
    helper: "Consistent delivery excellence.",
    icon: Star,
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
  },
  {
    value: 150,
    suffix: "+",
    label: "Projects delivered",
    helper: "From startups to enterprises.",
    icon: Target,
    gradient: "from-purple-500 via-violet-500 to-fuchsia-500",
  },
] as const;

export default function HomePage() {
  const partnersRef = useRef(null);
  const workRef = useRef(null);
  const podsRef = useRef(null);
  const studioRef = useRef(null);

  const partnersInView = useInView(partnersRef, { once: true, margin: "-100px" });
  const workInView = useInView(workRef, { once: true, margin: "-100px" });
  const podsInView = useInView(podsRef, { once: true, margin: "-100px" });
  const studioInView = useInView(studioRef, { once: true, margin: "-100px" });

  return (
    <div className="pb-32">
      <Hero />

      <div className="mx-auto flex w-full max-w-8xl flex-col gap-32 pt-20 pb-8 px-4 sm:px-6 lg:px-12">
        {/* Partners Section - Enhanced with Magnetic Cards */}
        <motion.section
          ref={partnersRef}
          initial={{ opacity: 0, y: 100 }}
          animate={partnersInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[48px] border border-slate-200/80 bg-gradient-to-br from-white via-blue-50/40 to-purple-50/40 px-8 py-16 sm:px-12 sm:py-20 shadow-[0_20px_80px_-20px_rgba(59,130,246,0.3)]"
        >
          {/* Enhanced Floating Orbs */}
          <FloatingOrbs count={10} />
          <Particles count={30} colors={["#3b82f6", "#8b5cf6", "#ec4899", "#14b8a6"]} />

          <div className="relative z-10 space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={partnersInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
            >
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={partnersInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="inline-flex items-center gap-3"
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-500"
                  >
                    <Sparkles className="h-5 w-5 text-white" />
                  </motion.div>
                  <p className="text-xs uppercase tracking-[0.45em] text-slate-500 font-semibold">Trusted Partners</p>
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={partnersInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 bg-clip-text text-transparent"
                >
                  Lean teams we build with
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={partnersInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-base text-slate-600 max-w-xl"
                >
                  A calm roster across India, Dubai & remote hubs, delivering world-class digital experiences.
                </motion.p>
              </div>
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={partnersInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 px-5 py-2.5 text-sm font-semibold text-slate-700 border border-blue-200/50"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Global · Remote
              </motion.span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={partnersInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="rounded-[32px] border-2 border-slate-200/80 bg-white/80 backdrop-blur-xl px-6 py-4 shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
            >
              <LogoMarquee clients={clientsData} />
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {studioStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <MagneticCard
                    key={stat.label}
                    intensity={15}
                    className="h-full"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      animate={partnersInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                      className="group relative h-full overflow-hidden rounded-[28px] border border-slate-200/80 bg-white/90 backdrop-blur-sm p-8 shadow-xl hover:shadow-2xl transition-shadow duration-500"
                    >
                      {/* Gradient Background */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                      />

                      {/* Animated Glow */}
                      <motion.div
                        className={`absolute -inset-1 bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-500`}
                      />

                      {/* Floating Icon */}
                      <motion.div
                        animate={{
                          y: [0, -8, 0],
                          rotate: [0, 5, -5, 0],
                        }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="absolute -right-4 -top-4 opacity-10 group-hover:opacity-20 transition-opacity"
                      >
                        <Icon className="h-24 w-24 text-slate-900" />
                      </motion.div>

                      <div className="relative z-10 space-y-4">
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                          className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.gradient} shadow-lg`}
                        >
                          <Icon className="h-7 w-7 text-white" />
                        </motion.div>

                        <div>
                          <CountUpNumber
                            end={stat.value}
                            suffix={stat.suffix}
                            delay={1 + index * 0.1}
                            className="block text-5xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent"
                          />
                          <motion.p
                            className="text-xs uppercase tracking-[0.3em] text-slate-500 font-semibold mt-2"
                            whileHover={{ letterSpacing: "0.35em" }}
                          >
                            {stat.label}
                          </motion.p>
                        </div>

                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1.2 + index * 0.1 }}
                          className="text-sm text-slate-600 leading-relaxed"
                        >
                          {stat.helper}
                        </motion.p>
                      </div>
                    </motion.div>
                  </MagneticCard>
                );
              })}
            </div>
          </div>
        </motion.section>

        {/* Selected Work Section - Enhanced */}
        <motion.section
          ref={workRef}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={workInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[48px] border border-emerald-200/60 bg-gradient-to-br from-white via-emerald-50/30 to-teal-50/30 px-8 py-16 sm:px-12 sm:py-20 shadow-[0_20px_80px_-20px_rgba(16,185,129,0.3)]"
        >
          {/* Enhanced Background Effects */}
          <FloatingOrbs count={8} />
          <Particles count={40} colors={["#10b981", "#14b8a6", "#06b6d4", "#22c55e"]} />

          {/* Decorative Elements */}
          <motion.div
            className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-gradient-to-br from-emerald-400/20 to-teal-400/20 blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={workInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-12"
            >
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={workInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="inline-flex items-center gap-3"
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360],
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-500"
                  >
                    <Zap className="h-5 w-5 text-white" />
                  </motion.div>
                  <p className="text-xs uppercase tracking-[0.45em] text-slate-500 font-semibold">Our Portfolio</p>
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={workInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-emerald-900 to-teal-900 bg-clip-text text-transparent"
                >
                  Projects that make an impact.
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={workInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-base text-slate-600 max-w-xl"
                >
                  Explore our featured work where design meets innovation to create exceptional digital experiences.
                </motion.p>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={workInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <Link
                  href="/work"
                  className="group inline-flex items-center gap-3 rounded-full border-2 border-emerald-500/30 bg-gradient-to-r from-emerald-50 to-teal-50 px-6 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-emerald-700 shadow-lg hover:border-emerald-500/60 hover:shadow-xl transition-all duration-300"
                >
                  All projects
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={workInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="grid gap-8 md:grid-cols-2"
            >
              {workData.slice(0, 2).map((item, index) => (
                <motion.div
                  key={item.slug}
                  initial={{ opacity: 0, y: 50 }}
                  animate={workInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.8 + index * 0.2 }}
                  whileHover={{ y: -8 }}
                >
                  <WorkCard item={item} index={index} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Container Scroll Pods - Enhanced */}
        <motion.section
          ref={podsRef}
          initial={{ opacity: 0, y: 100 }}
          animate={podsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[48px] border border-violet-200/60 bg-gradient-to-br from-white via-violet-50/30 to-fuchsia-50/30 px-8 py-16 sm:px-12 sm:py-20 shadow-[0_20px_80px_-20px_rgba(139,92,246,0.3)]"
        >
          {/* Enhanced Background Effects */}
          <FloatingOrbs count={10} />
          <Particles count={35} colors={["#8b5cf6", "#a855f7", "#d946ef", "#ec4899"]} />

          {/* Animated Pattern Background */}
          <motion.div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: "radial-gradient(circle at 2px 2px, rgba(168, 85, 247, 0.2) 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
            animate={{
              backgroundPosition: ["0px 0px", "40px 40px"],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={podsInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-12"
            >
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, rotate: -10 }}
                  animate={podsInView ? { opacity: 1, rotate: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="inline-flex items-center gap-3"
                >
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500"
                  >
                    <TrendingUp className="h-5 w-5 text-white" />
                  </motion.div>
                  <p className="text-xs uppercase tracking-[0.45em] text-slate-500 font-semibold">Our Expertise</p>
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={podsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-violet-900 to-fuchsia-900 bg-clip-text text-transparent"
                >
                  Services that scale your vision.
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={podsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="max-w-xl text-base text-slate-600"
                >
                  From strategy to execution, we deliver comprehensive solutions tailored to your unique needs and business goals.
                </motion.p>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={podsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <Link
                  href="/services"
                  className="inline-flex items-center gap-3 rounded-full border-2 border-violet-500/30 bg-gradient-to-r from-violet-50 to-fuchsia-50 px-6 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-violet-700 shadow-lg hover:border-violet-500/60 hover:shadow-xl transition-all duration-300"
                >
                  View all services
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={podsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="space-y-12"
            >
              {featuredServicePods.map((item, index) => (
                <motion.div
                  key={item.slug}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={podsInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.8 + index * 0.2 }}
                >
                  <WorkScrollCard item={item} priority={index === 0} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        <TestimonialsVariant />

        {/* Studio Section - Enhanced with Magnetic Cards */}
        <motion.section
          ref={studioRef}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={studioInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[48px] border border-amber-200/60 bg-gradient-to-br from-white via-amber-50/40 to-orange-50/40 px-8 py-16 sm:px-12 sm:py-20 shadow-[0_20px_80px_-20px_rgba(251,146,60,0.3)]"
        >
          {/* Enhanced Background Effects */}
          <FloatingOrbs count={12} />
          <Particles count={40} colors={["#f59e0b", "#fb923c", "#f97316", "#ef4444"]} />

          {/* Animated gradient overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-amber-400/5 via-orange-400/5 to-rose-400/5"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            style={{ backgroundSize: "200% 200%" }}
          />

          <div className="relative z-10 grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={studioInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={studioInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="inline-flex items-center gap-3"
              >
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-orange-500"
                >
                  <Sparkles className="h-5 w-5 text-white" />
                </motion.div>
                <p className="text-xs uppercase tracking-[0.45em] text-slate-500 font-semibold">Studio</p>
              </motion.div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={studioInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-amber-900 to-orange-900 bg-clip-text text-transparent"
              >
                Small, senior, on-call.
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={studioInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-base text-slate-600 leading-relaxed max-w-xl"
              >
                Pods stay under eight people so calls stay calm and decisions move fast. No layers, just craft and excellence.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={studioInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                className="pt-4"
              >
                <Link
                  href="/about"
                  className="inline-flex items-center gap-3 rounded-full border-2 border-amber-500/30 bg-gradient-to-r from-amber-50 to-orange-50 px-6 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-amber-700 shadow-lg hover:border-amber-500/60 hover:shadow-xl transition-all duration-300"
                >
                  Meet the team
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
              {[
                { title: "Product strategy", gradient: "from-amber-500 via-orange-500 to-rose-500" },
                { title: "Content systems", gradient: "from-orange-500 via-red-500 to-pink-500" }
              ].map((item, index) => (
                <MagneticCard
                  key={item.title}
                  intensity={12}
                  className="h-full"
                >
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={studioInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.15 }}
                    className="group relative h-full overflow-hidden rounded-[28px] border border-slate-200/80 bg-white/90 backdrop-blur-sm p-8 shadow-xl hover:shadow-2xl transition-shadow duration-500"
                  >
                    {/* Gradient Background */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    />

                    {/* Animated Glow */}
                    <motion.div
                      className={`absolute -inset-1 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-500`}
                    />

                    {/* Shine Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.8 }}
                    />

                    <div className="relative z-10 space-y-4">
                      <motion.p
                        className="text-xs uppercase tracking-[0.35em] text-slate-400 font-semibold"
                        whileHover={{ letterSpacing: "0.4em" }}
                        transition={{ duration: 0.3 }}
                      >
                        Focus Area
                      </motion.p>
                      <motion.h4
                        className="text-2xl font-bold text-slate-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-amber-700 group-hover:to-orange-700 group-hover:bg-clip-text transition-all duration-300"
                        whileHover={{ x: 5 }}
                      >
                        {item.title}
                      </motion.h4>

                      <motion.div
                        className={`h-1 w-16 rounded-full bg-gradient-to-r ${item.gradient}`}
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.4 }}
                      />
                    </div>
                  </motion.div>
                </MagneticCard>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
