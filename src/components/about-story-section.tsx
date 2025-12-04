"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const storyPoints = [
  {
    icon: "🎯",
    title: "Strategy-First Approach",
    description: "Every successful campaign begins with thorough discovery. We immerse ourselves in your business objectives, analyze market dynamics, map customer journeys, and identify competitive advantages. Our strategic framework ensures that every tactical decision aligns with your overarching goals, creating a solid foundation for sustainable growth and measurable ROI.",
  },
  {
    icon: "✨",
    title: "Creative Excellence & Innovation",
    description: "Our creative team doesn't just design—we craft experiences that resonate. By blending cutting-edge design trends with timeless principles, we create visual narratives that capture attention and drive engagement. Every color choice, typography decision, and interactive element is purposefully designed to reinforce your brand identity and guide users toward meaningful actions.",
  },
  {
    icon: "⚡",
    title: "Intelligent Automation & Scalability",
    description: "We leverage advanced marketing automation to orchestrate personalized customer experiences across multiple touchpoints. From lead nurturing workflows to dynamic content delivery, our systems work tirelessly to engage your audience at the right moment with the right message. This intelligent automation allows your campaigns to scale efficiently while maintaining a personal touch that drives conversions.",
  },
  {
    icon: "📊",
    title: "Data-Driven Decision Making",
    description: "Transparency and accountability are at the core of our approach. Our comprehensive analytics dashboards provide real-time visibility into campaign performance, audience behavior, and conversion metrics. We don't just report numbers—we deliver actionable insights that inform strategic pivots, optimize budget allocation, and continuously improve results. Every recommendation is backed by data, ensuring your marketing investments generate maximum returns.",
  },
];

export function AboutStorySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  return (
    <motion.section
      ref={sectionRef}
      style={{ opacity, scale }}
      className="relative py-24 lg:py-32"
    >
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
            Our Story
          </motion.span>
          <h2 className="mx-auto mb-6 max-w-4xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-4xl font-bold text-transparent md:text-5xl lg:text-6xl">
            Transforming digital vision into <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text">measurable success</span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-slate-600 md:text-xl">
            Founded on the principle that exceptional marketing requires both art and science, Edigitify has evolved into a powerhouse of digital innovation. We don&apos;t just execute campaigns—we architect comprehensive digital ecosystems that drive sustainable growth, build lasting customer relationships, and deliver results that exceed expectations. Our story is one of relentless pursuit of excellence, continuous learning, and an unwavering commitment to our clients&apos; success.
          </p>
        </motion.div>

        {/* Story Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          {storyPoints.map((point, idx) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="group relative"
            >
              <motion.div
                className="absolute -inset-4 rounded-[32px] bg-gradient-to-r from-teal-500/10 via-blue-500/10 to-purple-500/10 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"
                whileHover={{ scale: 1.02 }}
              />

              <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/50 transition-all duration-500 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/70 lg:p-10">
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 + 0.2, type: "spring", bounce: 0.5 }}
                  className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500 to-blue-500 text-3xl shadow-lg shadow-teal-500/25"
                >
                  {point.icon}
                </motion.div>

                {/* Content */}
                <h3 className="mb-4 text-2xl font-bold text-slate-900">{point.title}</h3>
                <p className="leading-relaxed text-slate-600">{point.description}</p>

                {/* Animated Line */}
                <motion.div
                  className="mt-6 h-1 w-0 rounded-full bg-gradient-to-r from-teal-500 to-blue-500"
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: idx * 0.1 + 0.5 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Image Section with Parallax */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-20 overflow-hidden rounded-[48px] border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-4 shadow-2xl shadow-slate-300/50"
        >
          <div className="relative h-[400px] overflow-hidden rounded-[40px] md:h-[500px] lg:h-[600px]">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
              className="relative h-full w-full"
            >
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80"
                alt="Team collaboration"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent" />

              {/* Overlay Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute bottom-8 left-8 right-8 rounded-3xl border border-white/20 bg-white/90 p-6 backdrop-blur-xl md:bottom-12 md:left-12 md:right-auto md:max-w-md md:p-8"
              >
                <div className="mb-2 flex items-center gap-2">
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="h-3 w-3 rounded-full bg-teal-500"
                  />
                  <span className="text-xs font-semibold uppercase tracking-wider text-teal-600">
                    Remote-First Team
                  </span>
                </div>
                <h3 className="mb-3 text-2xl font-bold text-slate-900">
                  Built for seamless collaboration
                </h3>
                <p className="text-slate-600">
                  Our integrated team combines seasoned strategists, award-winning designers, technical innovators, and marketing automation specialists. Together, we create synergy that transforms complex challenges into elegant solutions, delivering campaigns that resonate with audiences and drive tangible business results.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
