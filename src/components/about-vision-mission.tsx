"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const sections = [
  {
    id: "vision",
    title: "Vision",
    icon: "👁️",
    tagline: "Pioneering the future of digital excellence",
    description: "We envision a digital landscape where technology and creativity converge to create authentic, impactful brand experiences. Our vision extends beyond traditional marketing—we're building a future where data-driven insights, innovative automation, and human creativity work in perfect harmony to deliver exceptional value for businesses and meaningful experiences for their customers.",
    points: [
      {
        title: "Industry Leadership",
        detail: "To be recognized as the leading digital marketing partner that consistently sets new standards for innovation, quality, and client satisfaction. We aim to shape industry best practices through thought leadership, continuous innovation, and unwavering commitment to excellence in every project we undertake.",
      },
      {
        title: "Global Digital Transformation",
        detail: "Empowering businesses worldwide to harness the full potential of digital marketing through cutting-edge strategies, advanced technologies, and creative excellence. We believe in democratizing access to world-class marketing expertise, enabling companies of all sizes to compete effectively in the digital economy.",
      },
      {
        title: "Sustainable Innovation",
        detail: "Building marketing ecosystems that deliver consistent, measurable results while adapting to evolving market dynamics. We prioritize long-term success over short-term gains, creating strategies that scale sustainably and build lasting competitive advantages for our clients in an ever-changing digital landscape.",
      },
    ],
    gradient: "from-teal-500 via-blue-500 to-purple-500",
  },
  {
    id: "mission",
    title: "Mission",
    icon: "🚀",
    tagline: "Empowering brands to achieve unprecedented digital success",
    description: "Our mission is to deliver exceptional digital marketing services that surpass industry standards through integrated expertise, innovative strategies, and meticulous execution. We are committed to being more than just a service provider—we are your strategic partner, dedicated to understanding your unique challenges, amplifying your brand voice, and driving measurable results that contribute directly to your business objectives and long-term growth.",
    points: [
      {
        title: "Client-Centric Excellence",
        detail: "We deliver premium, white-glove service that treats every client partnership with the utmost care and attention. From initial consultation through strategy development, implementation, and ongoing optimization, we provide personalized attention that ensures your specific needs are met with precision, creativity, and unwavering dedication to your success.",
      },
      {
        title: "Integrated Team Approach",
        detail: "Our cross-functional pods bring together strategists, creative directors, developers, content specialists, and analytics experts under one unified framework. This integrated approach eliminates communication silos, accelerates project timelines, ensures consistency across all touchpoints, and delivers cohesive campaigns that amplify your brand message across every channel.",
      },
      {
        title: "Innovation Through Technology",
        detail: "We harness cutting-edge marketing technologies and automation platforms to create efficient, scalable campaigns that deliver personalized experiences at scale. By combining advanced tools with strategic thinking and creative excellence, we free our team to focus on high-impact initiatives while ensuring consistent execution, optimal performance, and continuous improvement across all marketing activities.",
      },
    ],
    gradient: "from-orange-500 via-pink-500 to-red-500",
  },
  {
    id: "values",
    title: "Values",
    icon: "💎",
    tagline: "Core principles that define who we are",
    description: "Our values are the cornerstone of everything we do at Edigitify. They guide our decisions, shape our culture, and define how we interact with clients, partners, and each other. These aren't just aspirational statements—they're the lived principles that drive our daily actions and long-term strategy, ensuring we consistently deliver exceptional results while maintaining the highest standards of integrity and professionalism.",
    points: [
      {
        title: "Integrity & Transparency",
        detail: "We operate with complete honesty and openness in all our interactions. From transparent pricing and clear communication to honest performance reporting, we believe trust is built through consistent integrity. We share both successes and challenges openly, provide realistic timelines, and never over-promise. Our clients always know where they stand, how their investments are being utilized, and what results to expect.",
      },
      {
        title: "Excellence & Continuous Improvement",
        detail: "We are committed to delivering nothing less than exceptional quality in every project. Excellence isn't a destination—it's a continuous journey of learning, refining, and pushing boundaries. We invest heavily in professional development, stay ahead of industry trends, embrace new technologies, and constantly seek ways to improve our processes, strategies, and outcomes. Mediocrity has no place in our work.",
      },
      {
        title: "Client Success & Partnership",
        detail: "Your success is our success. We measure our achievements not by awards or accolades, but by the tangible results we deliver for our clients. We approach every engagement as a true partnership, investing deeply in understanding your business, aligning our strategies with your objectives, and working tirelessly to ensure you achieve and exceed your goals. We celebrate your victories as our own and remain committed to your long-term growth.",
      },
    ],
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
  },
];

export function AboutVisionMission() {
  const [activeTab, setActiveTab] = useState(sections[0].id);
  const activeSection = sections.find((s) => s.id === activeTab) ?? sections[0];

  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4 inline-block rounded-full bg-gradient-to-r from-teal-50 to-blue-50 px-6 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-teal-700"
          >
            What Drives Us
          </motion.span>
          <h2 className="mx-auto mb-6 max-w-4xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-4xl font-bold text-transparent md:text-5xl lg:text-6xl">
            Built on purpose, powered by people
          </h2>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-wrap justify-center gap-4"
        >
          {sections.map((section) => (
            <motion.button
              key={section.id}
              onClick={() => setActiveTab(section.id)}
              className={cn(
                "relative overflow-hidden rounded-2xl px-8 py-4 text-sm font-semibold uppercase tracking-wider transition-all duration-300",
                activeTab === section.id
                  ? "text-white shadow-xl"
                  : "border border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-900"
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {activeTab === section.id && (
                <motion.div
                  layoutId="activeTab"
                  className={`absolute inset-0 bg-gradient-to-r ${section.gradient}`}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <span className="text-xl">{section.icon}</span>
                {section.title}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Content Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-[48px] border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-slate-100 p-8 shadow-2xl shadow-slate-300/50 lg:p-12"
          >
            {/* Decorative Elements */}
            <div className={`pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-gradient-to-r ${activeSection.gradient} opacity-10 blur-3xl`} />

            {/* Header */}
            <div className="relative z-10 mb-12 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, type: "spring", bounce: 0.5 }}
                className={`mb-4 inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br ${activeSection.gradient} shadow-lg`}
              >
                <span className="text-5xl">{activeSection.icon}</span>
              </motion.div>
              <h3 className={`mb-3 bg-gradient-to-r ${activeSection.gradient} bg-clip-text text-3xl font-bold text-transparent md:text-4xl`}>
                {activeSection.tagline}
              </h3>
              <p className="mx-auto max-w-3xl text-lg text-slate-600">
                {activeSection.description}
              </p>
            </div>

            {/* Points Grid */}
            <div className="relative z-10 grid gap-6 md:grid-cols-3">
              {activeSection.points.map((point, idx) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-lg transition-all duration-300 hover:border-slate-300 hover:shadow-xl"
                >
                  {/* Hover Gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${activeSection.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-5`}
                  />

                  {/* Number Badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 + 0.2, type: "spring", bounce: 0.6 }}
                    className={`relative mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${activeSection.gradient} text-xl font-bold text-white shadow-md`}
                  >
                    {idx + 1}
                  </motion.div>

                  {/* Content */}
                  <h4 className="relative mb-3 text-xl font-bold text-slate-900">
                    {point.title}
                  </h4>
                  <p className="relative text-slate-600">
                    {point.detail}
                  </p>

                  {/* Bottom Line Animation */}
                  <motion.div
                    className={`mt-4 h-1 w-0 rounded-full bg-gradient-to-r ${activeSection.gradient}`}
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: idx * 0.1 + 0.4 }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
