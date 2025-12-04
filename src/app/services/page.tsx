"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import { WorkScrollCard } from "@/components/work-scroll-card";
import { servicePodItems } from "@/data/service-pods";
import { MagneticCard } from "@/components/ui/magnetic-card";
import { AnimatedIcon } from "@/components/ui/animated-icon";
import { FloatingOrbs } from "@/components/ui/floating-orbs";
import { Particles } from "@/components/ui/particles";
import { AnimatedCounter } from "@/components/ui/animated-counter";

const services = [
  {
    title: "Paid Media Architecture",
    copy: "We distribute budgets across Meta, Google, YouTube, programmatic, and affiliates with pacing models that update every few hours.",
    bullets: ["Channel mix + forecasting", "Creative x audience matrices", "Measurement + MMM setup"],
    gradient: "from-teal-500 to-blue-500",
    icon: "📊",
  },
  {
    title: "Performance Creative Studio",
    copy: "Scripted story labs produce reels, films, statics, and UGC while maintaining brand codes and testing frameworks.",
    bullets: ["Campaign narrative systems", "UGC + influencer ops", "Landing + commerce experiences"],
    gradient: "from-purple-500 to-pink-500",
    icon: "🎨",
  },
  {
    title: "Automation & CRM Ops",
    copy: "WhatsApp, email, and CRM journeys stitched into sales workflows so leads get context and teams keep clarity.",
    bullets: ["Lead routing & scoring", "Playbooks for HubSpot/Salesforce", "Service + support automation"],
    gradient: "from-orange-500 to-red-500",
    icon: "⚡",
  },
  {
    title: "Analytics & Advisory",
    copy: "We wire dashboards, revenue modeling, and C-suite rituals that align finance, marketing, and customer ops.",
    bullets: ["Attribution + incrementality", "Budget governance", "RevOps office hours"],
    gradient: "from-emerald-500 to-teal-500",
    icon: "📈",
  },
];

function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 150]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-hidden">
      {/* Animated Background with Multiple Layers */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at 50% 50%, #0f172a 0%, #020617 100%)",
        }}
      >
        <FloatingOrbs count={12} />
        <Particles count={80} />
      </motion.div>

      {/* Animated Grid Pattern */}
      <motion.div
        className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.05)_1px,transparent_1px)] bg-[size:80px_80px]"
        animate={{
          backgroundPosition: ["0px 0px", "80px 80px"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(2,6,23,0.8)_100%)]" />

      {/* Hero Content */}
      <motion.div
        style={{ opacity: heroOpacity, y: heroY, scale: heroScale }}
        className="relative z-10 flex min-h-screen items-center justify-center px-6 py-20"
      >
        <div className="mx-auto max-w-7xl text-center">
          {/* Animated Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 inline-flex items-center gap-3"
          >
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-3 w-3 rounded-full bg-gradient-to-r from-teal-400 to-blue-400"
            />
            <span className="bg-gradient-to-r from-teal-300 via-blue-300 to-purple-300 bg-clip-text text-sm font-bold uppercase tracking-[0.4em] text-transparent">
              Premium Services
            </span>
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.25,
              }}
              className="h-3 w-3 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"
            />
          </motion.div>

          {/* Main Heading with Letter Animation */}
          <motion.h1
            className="mb-8 text-6xl font-bold leading-tight text-white sm:text-7xl md:text-8xl lg:text-9xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 60, rotateX: 90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <span className="bg-gradient-to-r from-white via-blue-50 to-teal-50 bg-clip-text text-transparent">
                Exceptional
              </span>
            </motion.span>
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 60, rotateX: 90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <span className="bg-gradient-to-r from-teal-200 via-blue-200 to-purple-200 bg-clip-text text-transparent">
                Marketing Teams
              </span>
            </motion.span>
            <motion.span
              className="block text-5xl sm:text-6xl md:text-7xl"
              initial={{ opacity: 0, y: 60, rotateX: 90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-orange-300 bg-clip-text text-transparent">
                Built to Scale
              </span>
            </motion.span>
          </motion.h1>

          {/* Description with Reveal */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="mx-auto mb-16 max-w-4xl text-xl leading-relaxed text-slate-300 md:text-2xl"
          >
            Full-stack marketing pods that own{" "}
            <motion.span
              className="font-semibold text-teal-300"
              animate={{
                textShadow: [
                  "0 0 20px rgba(45, 212, 191, 0.5)",
                  "0 0 40px rgba(45, 212, 191, 0.8)",
                  "0 0 20px rgba(45, 212, 191, 0.5)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              strategy, execution, and reporting
            </motion.span>{" "}
            end to end. One unified squad to brief talent, deploy media, talk to sales, and answer to the board.
          </motion.p>

          {/* Stats Row with Counters */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="mb-16 flex flex-wrap items-center justify-center gap-8 md:gap-12"
          >
            <AnimatedCounter value="6+" label="Service Offerings" gradient="from-teal-500 to-blue-500" />
            <AnimatedCounter value="100%" label="Integrated Teams" gradient="from-purple-500 to-pink-500" />
            <AnimatedCounter value="24/7" label="Campaign Support" gradient="from-orange-500 to-red-500" />
          </motion.div>

          {/* CTA Buttons with Enhanced Animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="flex flex-wrap items-center justify-center gap-6"
          >
            <motion.div
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="group relative"
            >
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 opacity-75 blur-lg transition-all duration-500 group-hover:opacity-100 group-hover:blur-xl" />
              <a
                href="/contact"
                className="relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-teal-500 to-blue-500 px-10 py-5 text-base font-bold uppercase tracking-wider text-white shadow-2xl"
              >
                <span className="relative z-10">Get Started</span>
                <motion.span
                  className="relative z-10 text-xl"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
                <div className="absolute inset-0 -z-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </a>
            </motion.div>

            <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
              <a
                href="/work"
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border-2 border-white/20 bg-white/5 px-10 py-5 text-base font-bold uppercase tracking-wider text-white backdrop-blur-xl transition-all duration-300 hover:border-white/40 hover:bg-white/10"
              >
                <span>See Our Work</span>
                <motion.span
                  animate={{ rotate: [0, 180, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  ✦
                </motion.span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.2 }}
        className="absolute bottom-12 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div className="flex flex-col items-center gap-3">
          <motion.span
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-xs font-medium uppercase tracking-wider text-slate-400"
          >
            Explore Services
          </motion.span>
          <motion.div
            className="relative h-16 w-8 rounded-full border-2 border-white/30 backdrop-blur-sm"
            whileHover={{ borderColor: "rgba(255,255,255,0.6)", scale: 1.1 }}
          >
            <motion.div
              className="absolute left-1/2 top-3 h-3 w-3 -translate-x-1/2 rounded-full bg-gradient-to-r from-teal-400 to-blue-400"
              animate={{ y: [0, 24, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15 }}
    >
      <MagneticCard intensity={10}>
        <div className="group relative h-full overflow-hidden rounded-[40px] border border-slate-200/50 bg-white p-10 shadow-2xl transition-all duration-500 hover:border-slate-300 hover:shadow-[0_35px_90px_-15px_rgba(0,0,0,0.3)] lg:p-12">
          {/* Animated Background Gradient Glow */}
          <motion.div
            className={`absolute -right-24 -top-24 h-64 w-64 rounded-full bg-gradient-to-r ${service.gradient} blur-3xl`}
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 0.1, scale: 1 } : {}}
            transition={{ duration: 1, delay: index * 0.15 + 0.3 }}
            whileHover={{ opacity: 0.15, scale: 1.2 }}
          />

          {/* Animated Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: index * 0.15 + 0.2 }}
            className="mb-6"
          >
            <AnimatedIcon icon={service.icon} gradient={service.gradient} index={index} />
          </motion.div>

          {/* Capability Label with Animation */}
          <motion.p
            className="mb-2 text-xs font-bold uppercase tracking-[0.4em] text-slate-500"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: index * 0.15 + 0.3 }}
          >
            Core Capability
          </motion.p>

          {/* Title with Split Animation */}
          <motion.h3
            className="mb-6 text-3xl font-bold text-slate-900 lg:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.15 + 0.4 }}
          >
            {service.title}
          </motion.h3>

          {/* Description */}
          <motion.p
            className="mb-8 text-lg leading-relaxed text-slate-600"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: index * 0.15 + 0.5 }}
          >
            {service.copy}
          </motion.p>

          {/* Animated Bullets with Stagger */}
          <ul className="mb-8 space-y-4">
            {service.bullets.map((bullet, bulletIdx) => (
              <motion.li
                key={bullet}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.15 + 0.6 + bulletIdx * 0.1 }}
                className="flex items-center gap-4 text-slate-700"
              >
                <motion.div
                  className={`flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br ${service.gradient} shadow-lg`}
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-sm text-white">✓</span>
                </motion.div>
                <span className="font-medium">{bullet}</span>
              </motion.li>
            ))}
          </ul>

          {/* Animated Progress Bar */}
          <motion.div
            className="relative h-2 overflow-hidden rounded-full bg-slate-100"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: index * 0.15 + 0.9 }}
          >
            <motion.div
              className={`h-full rounded-full bg-gradient-to-r ${service.gradient}`}
              initial={{ width: 0 }}
              animate={isInView ? { width: "100%" } : {}}
              transition={{ duration: 1.5, delay: index * 0.15 + 1, ease: "easeOut" }}
            />
            <motion.div
              className={`absolute inset-0 bg-gradient-to-r ${service.gradient}`}
              animate={{
                x: ["-100%", "100%"],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
                delay: index * 0.15 + 2,
              }}
            />
          </motion.div>

          {/* Hover Border Effect */}
          <motion.div
            className={`absolute inset-0 rounded-[40px] bg-gradient-to-r ${service.gradient} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-20`}
            style={{ zIndex: -1 }}
          />
        </div>
      </MagneticCard>
    </motion.div>
  );
}

export default function ServicesPage() {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Service Pods Section with Background */}
      <section className="relative bg-gradient-to-b from-slate-50 to-white px-6 py-32">
        {/* Decorative Background Elements */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-gradient-to-r from-teal-400/10 to-blue-400/10 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-gradient-to-r from-purple-400/10 to-pink-400/10 blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, -90, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto mb-20 max-w-4xl space-y-6 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="text-xl"
            >
              ✦
            </motion.div>
            <p className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-sm font-bold uppercase tracking-[0.4em] text-transparent">
              How We Work
            </p>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="text-xl"
            >
              ✦
            </motion.div>
          </motion.div>

          <h2 className="text-5xl font-bold text-slate-900 lg:text-6xl">
            Specialized pods for{" "}
            <motion.span
              className="inline-block bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{ backgroundSize: "200% 200%" }}
            >
              every channel
            </motion.span>
          </h2>

          <p className="mx-auto max-w-3xl text-xl text-slate-600">
            Each service pod brings deep expertise in their domain—from website development to social media, SEO to influencer marketing. Scroll to explore the full stack.
          </p>
        </motion.div>

        {/* Service Pod Cards */}
        <div className="relative mx-auto max-w-7xl space-y-16">
          {servicePodItems.map((item, index) => (
            <motion.div
              key={item.slug}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <WorkScrollCard item={item} priority={index === 0} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Core Capabilities Section */}
      <section className="relative bg-gradient-to-b from-white via-slate-50 to-white px-6 py-32">
        <Particles count={60} className="opacity-30" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-20 max-w-4xl space-y-6 text-center"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.5 }}
            className="inline-block rounded-full bg-gradient-to-r from-teal-50 to-blue-50 px-8 py-3 text-sm font-bold uppercase tracking-[0.4em] text-teal-700 shadow-lg"
          >
            Core Capabilities
          </motion.span>

          <h2 className="text-5xl font-bold text-slate-900 lg:text-6xl">
            Strategic capabilities that{" "}
            <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
              amplify performance
            </span>
          </h2>

          <p className="mx-auto max-w-3xl text-xl text-slate-600">
            Advanced media, creative, automation, and analytics orchestrated to deliver compounding returns across your entire marketing ecosystem.
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </section>

      {/* Bottom CTA - Clean & Smooth */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden bg-white px-6 py-32"
      >
        <motion.div
          className="relative mx-auto max-w-6xl"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.div
            className="relative overflow-hidden rounded-[48px] border border-slate-200 bg-white p-16 shadow-lg lg:p-20"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="relative z-10 text-center">
              <motion.h3
                className="mb-6 text-4xl font-bold text-slate-900 md:text-5xl lg:text-6xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Ready to{" "}
                <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                  scale your growth
                </span>
                ?
              </motion.h3>

              <motion.p
                className="mb-12 text-xl text-slate-600 lg:text-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Let&apos;s discuss how our integrated pods can accelerate your marketing outcomes.
              </motion.p>

              <motion.div
                className="flex flex-wrap items-center justify-center gap-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-teal-500 to-blue-500 px-10 py-5 text-base font-bold uppercase tracking-wider text-white shadow-lg transition-shadow duration-300 hover:shadow-xl"
                >
                  Start Your Project
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    →
                  </motion.span>
                </motion.a>

                <motion.a
                  href="/work"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-3 rounded-full border-2 border-slate-300 bg-white px-10 py-5 text-base font-bold uppercase tracking-wider text-slate-900 shadow-lg transition-all duration-300 hover:border-slate-400 hover:bg-slate-50 hover:shadow-xl"
                >
                  View Our Work
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
}
