"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const teamMembers = [
  {
    id: 1,
    name: "Hardik Gandhi",
    role: "Director & Founder",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    bio: "Visionary entrepreneur with over a decade of experience in digital strategy and business transformation. Hardik founded Edigitify with the mission to revolutionize how businesses approach digital marketing, combining strategic thinking with innovative execution to deliver exceptional results.",
    color: "from-teal-500 to-blue-500",
  },
  {
    id: 2,
    name: "Ankita Jii",
    role: "Social Media Strategist",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=800&q=80",
    bio: "Expert social media strategist who transforms brands into engaging digital experiences. Ankita crafts data-driven campaigns that resonate with target audiences, drive meaningful engagement, and build lasting community connections across all major social platforms.",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    name: "CS Maccha",
    role: "All Rounder",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    bio: "Versatile marketing professional with expertise spanning content creation, project management, client relations, and strategic planning. CS brings adaptability and comprehensive skills that ensure seamless project execution and exceptional client satisfaction across all touchpoints.",
    color: "from-orange-500 to-red-500",
  },
  {
    id: 4,
    name: "Minesh",
    role: "SDE-1",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
    bio: "Talented software engineer specializing in building robust, scalable digital solutions. Minesh combines technical expertise with creative problem-solving to develop cutting-edge platforms, automation tools, and web applications that power modern marketing campaigns.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    id: 5,
    name: "Veer",
    role: "Creative Lead",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80",
    bio: "Award-winning creative director who transforms brand visions into captivating visual narratives. Veer's innovative designs blend aesthetic excellence with strategic purpose, creating memorable experiences that elevate brand identity and drive user engagement.",
    color: "from-blue-500 to-cyan-500",
  },
];

function TeamMemberCard({
  member,
  idx,
  scrollYProgress,
}: {
  member: typeof teamMembers[0];
  idx: number;
  scrollYProgress: MotionValue<number>;
}) {
  const yOffset = useTransform(
    scrollYProgress,
    [0, 1],
    [0, (idx % 2 === 0 ? 1 : -1) * 20]
  );

  return (
    <motion.div
      style={{ y: yOffset }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: idx * 0.1 }}
      className="group relative"
    >
      {/* Glow Effect */}
      <motion.div
        className={`absolute -inset-2 rounded-[36px] bg-gradient-to-r ${member.color} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-40`}
      />

      {/* Card Container */}
      <div className="relative overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-xl transition-all duration-500 group-hover:border-slate-300 group-hover:shadow-2xl">
        {/* Image Container */}
        <div className="relative aspect-[3/4] overflow-hidden">
          <motion.div
            className="relative h-full w-full"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />

            {/* Colored Accent Overlay */}
            <motion.div
              className={`absolute inset-0 bg-gradient-to-t ${member.color} opacity-0 transition-opacity duration-500 group-hover:opacity-20`}
            />
          </motion.div>

          {/* Role Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 + 0.3 }}
            className="absolute left-4 top-4"
          >
            <span className={`inline-block rounded-full bg-gradient-to-r ${member.color} px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white shadow-lg backdrop-blur-sm`}>
              {member.role}
            </span>
          </motion.div>
        </div>

        {/* Info Section */}
        <div className="relative flex h-[200px] flex-col p-6">
          {/* Name */}
          <h3 className="mb-2 text-2xl font-bold text-slate-900">{member.name}</h3>

          {/* Bio */}
          <p className="mb-4 flex-1 text-slate-600 line-clamp-5">{member.bio}</p>

          {/* Animated Bottom Line */}
          <motion.div
            className={`h-1 w-0 rounded-full bg-gradient-to-r ${member.color}`}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.1 + 0.5 }}
          />
        </div>

        {/* Decorative Corner Elements */}
        <motion.div
          className={`absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-r ${member.color} opacity-20 blur-2xl`}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: idx * 0.5,
          }}
        />
      </div>
    </motion.div>
  );
}

export function AboutTeamParallax() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section ref={containerRef} className="relative overflow-hidden py-24 lg:py-32">
      {/* Background with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50" />

      {/* Animated Grid Pattern */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4 inline-block rounded-full bg-gradient-to-r from-teal-50 to-blue-50 px-6 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-teal-700"
          >
            Meet The Team
          </motion.span>
          <h2 className="mx-auto mb-6 max-w-4xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-4xl font-bold text-transparent md:text-5xl lg:text-6xl">
            Meet the experts driving{" "}
            <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text">
              your success
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-slate-600 md:text-xl">
            Our passionate team combines decades of collective experience in digital strategy, creative design, technical development, and marketing automation. Each member brings unique expertise and perspective, working collaboratively to deliver campaigns that not only meet but exceed your expectations and drive measurable business growth.
          </p>
        </motion.div>

        {/* Team Grid with Parallax */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, idx) => (
            <TeamMemberCard
              key={member.id}
              member={member}
              idx={idx}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>

        {/* Join Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[48px] border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-12 shadow-2xl">
            {/* Background Pattern */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                backgroundSize: "32px 32px",
              }}
            />

            <div className="relative z-10">
              <h3 className="mb-4 text-3xl font-bold text-white md:text-4xl">
                Ready to elevate your career?
              </h3>
              <p className="mb-8 text-lg text-slate-300">
                We&apos;re constantly seeking exceptional talent to join our growing team. If you&apos;re passionate about digital innovation, thrive in collaborative environments, and are committed to delivering excellence, we&apos;d love to hear from you. Explore opportunities to work on exciting projects with industry-leading clients while developing your skills alongside top professionals in the field.
              </p>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-500 to-blue-500 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white shadow-lg shadow-teal-500/25 transition-shadow duration-300 hover:shadow-xl hover:shadow-teal-500/40"
              >
                View Open Positions
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
