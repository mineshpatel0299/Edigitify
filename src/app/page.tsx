"use client";

import { Hero } from "@/components/hero";
import { LogoMarquee } from "@/components/marquee";
import { WorkCard } from "@/components/work-card";
import { WorkScrollCard } from "@/components/work-scroll-card";
import { CountUpNumber } from "@/components/ui/count-up-number";
import { clientsData, workData } from "@/lib/content";
import Link from "next/link";
import { servicePodItems } from "@/data/service-pods";
import { TestimonialsVariant } from "@/components/ui/animated-cards-stack-demo";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, ArrowRight, Zap, TrendingUp } from "lucide-react";

const featuredServicePods = servicePodItems.slice(0, 2);

const studioStats = [
  {
    value: 6,
    suffix: "+",
    label: "Years shipping",
    helper: "Independent studio since 2018.",
  },
  {
    value: 40,
    suffix: "+",
    label: "Brands partnered",
    helper: "Retail, lifestyle, SaaS, hospitality.",
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
        {/* Partners Section - Magnetic Hover & 3D Parallax */}
        <motion.section
          ref={partnersRef}
          initial={{ opacity: 0, y: 100 }}
          animate={partnersInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="group relative overflow-hidden rounded-[40px] border border-slate-200/80 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 px-8 py-12 sm:px-12 sm:py-14 shadow-[0_50px_120px_-80px_rgba(15,23,42,0.6)]"
        >
          {/* Animated gradient orbs */}
          <motion.div
            className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 blur-3xl"
            animate={{
              x: [0, 50, 0],
              y: [0, 30, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-tr from-emerald-400/20 to-cyan-400/20 blur-3xl"
            animate={{
              x: [0, -30, 0],
              y: [0, -50, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative z-10 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={partnersInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
            >
              <div className="space-y-2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={partnersInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="inline-flex items-center gap-2"
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  >
                    <Sparkles className="h-4 w-4 text-blue-500" />
                  </motion.div>
                  <p className="text-[0.65rem] uppercase tracking-[0.45em] text-slate-400">Partners</p>
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={partnersInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-3xl font-semibold text-slate-900 sm:text-4xl"
                >
                  Lean teams we build with
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={partnersInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-sm text-slate-500"
                >
                  A calm roster across India, Dubai & remote hubs.
                </motion.p>
              </div>
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={partnersInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                className="text-sm font-medium text-slate-500"
              >
                Global · Remote
              </motion.span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={partnersInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.7 }}
              whileHover={{ scale: 1.02 }}
              className="rounded-3xl border border-slate-200/80 bg-white/60 backdrop-blur-sm px-4 py-2 shadow-xl"
            >
              <LogoMarquee clients={clientsData} />
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2">
              {studioStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 50, rotateX: -15 }}
                  animate={partnersInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.15 }}
                  whileHover={{
                    y: -8,
                    rotateX: 5,
                    rotateY: index === 0 ? 5 : -5,
                    scale: 1.03,
                    transition: { duration: 0.3 },
                  }}
                  className="group/card relative rounded-3xl border border-slate-200 bg-white/70 backdrop-blur-sm p-6 shadow-lg overflow-hidden"
                  style={{ transformStyle: "preserve-3d", perspective: 1000 }}
                >
                  {/* Animated shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />

                  <motion.div
                    className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-blue-400/10 to-purple-400/10 blur-2xl"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />

                  <div className="relative">
                    <motion.p
                      className="text-[0.65rem] uppercase tracking-[0.45em] text-slate-400"
                      whileHover={{ letterSpacing: "0.5em" }}
                      transition={{ duration: 0.3 }}
                    >
                      {stat.label}
                    </motion.p>
                    <CountUpNumber
                      end={stat.value}
                      suffix={stat.suffix}
                      delay={index * 0.1}
                      className="mt-4 block text-4xl font-semibold text-slate-900"
                    />
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 + index * 0.1 }}
                      className="mt-2 text-sm text-slate-500"
                    >
                      {stat.helper}
                    </motion.p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Selected Work Section - Staggered Reveal & Morphing */}
        <motion.section
          ref={workRef}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={workInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[40px] border border-slate-200/80 bg-gradient-to-br from-white via-emerald-50/20 to-teal-50/20 px-8 py-12 sm:px-12 sm:py-14 shadow-[0_40px_100px_-80px_rgba(15,23,42,0.6)]"
        >
          {/* Floating particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-2 w-2 rounded-full bg-gradient-to-r from-emerald-400/30 to-teal-400/30 blur-sm"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + Math.sin(i) * 40}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.sin(i) * 20, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={workInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
            >
              <div className="space-y-2">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={workInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="inline-flex items-center gap-2"
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360],
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <Zap className="h-4 w-4 text-emerald-500" />
                  </motion.div>
                  <p className="text-[0.65rem] uppercase tracking-[0.45em] text-slate-400">Selected work</p>
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={workInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-3xl font-semibold text-slate-900 sm:text-4xl"
                >
                  Quiet, focused shippables.
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={workInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-sm text-slate-500"
                >
                  Two highlights from the year.
                </motion.p>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={workInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Link
                  href="/work"
                  className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.35em] text-slate-900 underline-offset-4 hover:text-emerald-600 transition-colors"
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
              className="mt-8 grid gap-8 md:grid-cols-2"
            >
              {workData.slice(0, 2).map((item, index) => (
                <WorkCard key={item.slug} item={item} index={index} />
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Container Scroll Pods - Wave Animation */}
        <motion.section
          ref={podsRef}
          initial={{ opacity: 0, y: 100 }}
          animate={podsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[40px] border border-slate-200/80 bg-gradient-to-br from-white via-violet-50/20 to-fuchsia-50/20 px-6 py-10 sm:px-10 sm:py-12 shadow-[0_35px_90px_-70px_rgba(15,23,42,0.5)]"
        >
          {/* Wave animation background */}
          <motion.div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: "radial-gradient(circle at 2px 2px, rgba(168, 85, 247, 0.15) 1px, transparent 0)",
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
              className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
            >
              <div className="space-y-2">
                <motion.div
                  initial={{ opacity: 0, rotate: -10 }}
                  animate={podsInView ? { opacity: 1, rotate: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="inline-flex items-center gap-2"
                >
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <TrendingUp className="h-4 w-4 text-violet-500" />
                  </motion.div>
                  <p className="text-[0.65rem] uppercase tracking-[0.45em] text-slate-400">Ways of working</p>
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={podsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-3xl font-semibold text-slate-900 sm:text-4xl"
                >
                  Container scroll pods.
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={podsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="max-w-xl text-sm text-slate-500"
                >
                  The scroll container reveals each pod&rsquo;s stack, deliverables, and live signals without leaving the page.
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
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-slate-900 transition hover:border-violet-500 hover:text-violet-700 hover:shadow-lg"
                >
                  View all services
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={podsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-12 space-y-12"
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

        {/* Studio Section - Particle Effects & Dynamic Gradients */}
        <motion.section
          ref={studioRef}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={studioInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[40px] border border-slate-200/80 bg-gradient-to-br from-white via-amber-50/30 to-orange-50/30 px-8 py-12 sm:px-12 sm:py-14 shadow-[0_40px_90px_-70px_rgba(15,23,42,0.55)]"
        >
          {/* Animated gradient background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-amber-400/10 via-orange-400/10 to-rose-400/10"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            style={{ backgroundSize: "200% 200%" }}
          />

          {/* Floating particles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-amber-400/20 to-orange-400/20 blur-xl"
              style={{
                width: `${20 + Math.random() * 40}px`,
                height: `${20 + Math.random() * 40}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -50, 0],
                x: [0, Math.sin(i) * 30, 0],
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 5 + Math.random() * 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            />
          ))}

          <div className="relative z-10 grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={studioInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={studioInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="inline-flex items-center gap-2"
              >
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Sparkles className="h-4 w-4 text-amber-500" />
                </motion.div>
                <p className="text-[0.65rem] uppercase tracking-[0.45em] text-slate-400">Studio</p>
              </motion.div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={studioInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-3xl font-semibold text-slate-900 sm:text-4xl"
              >
                Small, senior, on-call.
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={studioInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-sm text-slate-500"
              >
                Pods stay under eight people so calls stay calm and decisions move fast. No layers, just craft.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={studioInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ x: 5 }}
              >
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.35em] text-slate-900 underline-offset-6 hover:text-amber-600 transition-colors"
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

            <div className="grid gap-4">
              {["Product strategy", "Content systems"].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 50, rotateY: -20 }}
                  animate={studioInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.15 }}
                  whileHover={{
                    scale: 1.05,
                    rotateY: 5,
                    transition: { duration: 0.3 },
                  }}
                  className="group relative rounded-3xl border border-slate-200 bg-white/70 backdrop-blur-sm p-6 shadow-lg overflow-hidden"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-amber-400/0 via-amber-400/10 to-orange-400/0"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.8 }}
                  />
                  <motion.p
                    className="text-[0.65rem] uppercase tracking-[0.35em] text-slate-400"
                    whileHover={{ letterSpacing: "0.45em" }}
                  >
                    Focus
                  </motion.p>
                  <motion.p
                    className="mt-2 text-lg font-semibold text-slate-900"
                    whileHover={{ x: 5 }}
                  >
                    {item}
                  </motion.p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
