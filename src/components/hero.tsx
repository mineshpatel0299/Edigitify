"use client";

import Link from "next/link";
import { ArrowUpRight, Orbit, Sparkles, Waves, Zap, Rocket } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import ScrollExpandMedia from "@/components/ui/scroll-expansion-hero";
import { FloatingOrbs } from "@/components/ui/floating-orbs";
import { Particles } from "@/components/ui/particles";
import { Spotlight } from "@/components/ui/spotlight";
import { useIsMobile } from "@/hooks/use-is-mobile";

const heroHighlights = [
  {
    title: "About Us",
    description: "Our team brings the experience and knowledge to deliver white-glove, fully managed campaigns that surpass the industry's toughest benchmarks.",
    icon: Sparkles,
    gradient: "from-purple-500 via-pink-500 to-rose-500",
  },
  {
    title: "Our Story",
    description: "We obsess over quality, design, and visualization so every launch feels bespoke, exceeding expectations for modern brands and their audiences.",
    icon: Orbit,
    gradient: "from-blue-500 via-cyan-500 to-teal-500",
  },
  {
    title: "Vision & Mission",
    description: "We efficiently whiteboard professional organic strategies, mentor ambitious talent, and invite you to take your career to the next level with us—you're good enough, right?",
    icon: Waves,
    gradient: "from-emerald-500 via-green-500 to-lime-500",
  },
] as const;

const heroStats = [
  { value: "10+", label: "Years of experience", icon: Rocket },
  { value: "50+", label: "Forward-thinking clients", icon: Zap },
  { value: "360°", label: "Managed campaigns", icon: Sparkles },
] as const;

const heroMedia = {
  // Marketing agency video - creative team collaboration and strategy
  mediaSrc:
    "https://videos.pexels.com/video-files/3209828/3209828-uhd_2560_1440_25fps.mp4",
  // Professional marketing team workspace poster
  poster: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1600&q=80",
  // Static background - modern marketing agency office
  background: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80",
  title: "Driven BY Results, Building For Brands",
  date: "EDIGITIFY 2025",
  scrollToExpand: "Scroll to explore our story",
};

export function Hero() {
  const isMobile = useIsMobile();
  const highlightsRef = useRef(null);
  const statsRef = useRef(null);

  const highlightsInView = useInView(highlightsRef, { once: true, margin: "-100px" });
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" });

  return (
    <section className="relative left-1/2 -mt-24 w-screen max-w-none -translate-x-1/2 overflow-hidden md:-mt-32">
      {/* Spotlight Effects */}
      <Spotlight className="top-0 left-0 md:left-20 md:-top-40" fill="#60A5FA" />
      <Spotlight className="top-20 right-0 md:right-20" fill="#A78BFA" />

      {/* Main Hero Video */}
      <ScrollExpandMedia
        mediaType="video"
        mediaSrc={heroMedia.mediaSrc}
        posterSrc={heroMedia.poster}
        bgImageSrc={heroMedia.background}
        title={heroMedia.title}
        date={heroMedia.date}
        scrollToExpand={heroMedia.scrollToExpand}
        textBlend
      />

      {/* Enhanced Hero Content Below Video */}
      <div className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        {/* Floating Orbs Background - Hidden on mobile for performance */}
        <div className="hidden md:block">
          <FloatingOrbs count={12} />
          <Particles count={60} colors={["#3b82f6", "#8b5cf6", "#ec4899", "#14b8a6"]} />
        </div>

        {/* Hero Highlights Section */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 py-12 md:py-24">
          <motion.div
            ref={highlightsRef}
            initial={{ opacity: 0, y: isMobile ? 20 : 60 }}
            animate={highlightsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: isMobile ? 0.4 : 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={highlightsInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: isMobile ? 0.3 : 0.6, delay: isMobile ? 0.1 : 0.2 }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <motion.div
                animate={isMobile ? {} : { rotate: [0, 360] }}
                transition={isMobile ? {} : { duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="h-5 w-5 text-cyan-400" />
              </motion.div>
              <p className="text-xs uppercase tracking-[0.4em] text-slate-400 font-medium">
                What We Deliver
              </p>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
              animate={highlightsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: isMobile ? 0.4 : 0.7, delay: isMobile ? 0.15 : 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-cyan-100 to-blue-100 bg-clip-text text-transparent mb-6"
            >
              White-Glove Digital Growth
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
              animate={highlightsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: isMobile ? 0.4 : 0.7, delay: isMobile ? 0.2 : 0.4 }}
              className="text-lg text-slate-400 max-w-2xl mx-auto"
            >
              Trusted by forward-thinking companies and clients, our story is rooted in delivering fully managed campaigns that exceed expectations in creativity, technology, and measurable outcomes.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {heroHighlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: isMobile ? 20 : 50, rotateX: isMobile ? 0 : -20 }}
                  animate={highlightsInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                  transition={{
                    duration: isMobile ? 0.3 : 0.7,
                    delay: isMobile ? 0.25 + index * 0.08 : 0.5 + index * 0.15,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  whileHover={isMobile ? {} : {
                    y: -12,
                    scale: 1.03,
                    rotateY: 5,
                    transition: { duration: 0.3 }
                  }}
                  className="group relative overflow-hidden rounded-2xl md:rounded-3xl border-0 md:border md:border-slate-800/50 bg-gradient-to-br from-slate-900/90 via-slate-800/50 to-slate-900/90 backdrop-blur-xl p-4 md:p-8 shadow-xl md:shadow-2xl"
                  style={isMobile ? {} : { transformStyle: "preserve-3d" }}
                >
                  {/* Animated gradient background */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${highlight.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    initial={{ scale: 0, rotate: 0 }}
                    whileHover={isMobile ? {} : { scale: 1.5, rotate: 180 }}
                    transition={{ duration: 0.6 }}
                  />

                  {/* Glow effect */}
                  <motion.div
                    className={`absolute -inset-0.5 bg-gradient-to-r ${highlight.gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500`}
                  />

                  <div className="relative z-10">
                    <motion.div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${highlight.gradient} mb-6 shadow-lg`}
                      whileHover={isMobile ? {} : { rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="h-8 w-8 text-white" />
                    </motion.div>

                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-cyan-100 group-hover:bg-clip-text transition-all duration-300">
                      {highlight.title}
                    </h3>

                    <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                      {highlight.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Stats Section */}
          <motion.div
            ref={statsRef}
            initial={{ opacity: 0, y: isMobile ? 20 : 60 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: isMobile ? 0.4 : 0.8, delay: isMobile ? 0.5 : 0.8 }}
            className="mt-12 md:mt-24 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
          >
            {heroStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={statsInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: isMobile ? 0.3 : 0.6, delay: isMobile ? 0.55 + index * 0.05 : 1 + index * 0.1 }}
                  whileHover={isMobile ? {} : {
                    scale: 1.05,
                    y: -8,
                    transition: { duration: 0.3 }
                  }}
                  className="group relative overflow-hidden rounded-xl md:rounded-2xl border-0 md:border md:border-cyan-500/20 bg-gradient-to-br from-cyan-950/30 via-blue-950/20 to-purple-950/30 backdrop-blur-sm p-4 md:p-8 text-center"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />

                  <motion.div
                    animate={isMobile ? {} : { rotate: [0, 360] }}
                    transition={isMobile ? {} : { duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"
                  />

                  <div className="relative z-10">
                    <motion.div
                      animate={isMobile ? {} : { y: [0, -5, 0] }}
                      transition={isMobile ? {} : { duration: 2, repeat: Infinity }}
                      className="inline-flex mb-4"
                    >
                      <Icon className="h-8 w-8 text-cyan-400" />
                    </motion.div>

                    <p className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </p>

                    <p className="text-sm uppercase tracking-[0.3em] text-slate-400 font-medium">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
