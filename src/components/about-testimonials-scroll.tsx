"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

const testimonials = [
  {
    quote: "Edigitify transformed our digital presence completely. Their integrated approach to strategy, creative, and media execution delivered results beyond our expectations.",
    author: "Shayan Riaz",
    role: "Founder",
    company: "Oceans & Earth Realty",
    gradient: "from-teal-500 to-blue-500",
  },
  {
    quote: "Working with their team feels like having an in-house marketing department. The communication is seamless, and the results speak for themselves.",
    author: "Dr. Aarav Kulkarni",
    role: "Chief Digital Officer",
    company: "BioCity Hospitals",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    quote: "The automation systems they built have saved us countless hours while improving our lead quality. It's marketing technology done right.",
    author: "Nitin Pujari",
    role: "Commercial Director",
    company: "Gymtex Flooring",
    gradient: "from-orange-500 to-red-500",
  },
  {
    quote: "From strategy to execution, every touchpoint was handled with care. They truly operate like a white-glove service.",
    author: "Manvi Kohli",
    role: "Founder",
    company: "White Ace Interiors",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    quote: "The data insights and reporting we get are unmatched. Finally, we can make informed decisions based on real-time performance.",
    author: "Radhika Venkatesh",
    role: "VP Growth",
    company: "MintSteer Capital",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    quote: "They don't just execute campaigns—they become part of your team. The partnership approach makes all the difference.",
    author: "Sonal Dugar",
    role: "COO",
    company: "Acre Folio",
    gradient: "from-indigo-500 to-purple-500",
  },
];

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: typeof testimonials[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative min-w-[320px] max-w-[400px] flex-shrink-0"
    >
      {/* Glow Effect */}
      <motion.div
        className={`absolute -inset-2 rounded-[32px] bg-gradient-to-r ${testimonial.gradient} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-40`}
      />

      {/* Card */}
      <div className="relative h-full overflow-hidden rounded-[32px] border border-white/20 bg-white/90 p-8 backdrop-blur-sm transition-all duration-500 hover:border-white/40 hover:bg-white">
        {/* Quote Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 + 0.2, type: "spring", bounce: 0.5 }}
          className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${testimonial.gradient} text-2xl text-white shadow-lg`}
        >
          &quot;
        </motion.div>

        {/* Quote */}
        <p className="mb-6 text-lg leading-relaxed text-slate-700">
          {testimonial.quote}
        </p>

        {/* Divider */}
        <motion.div
          className={`mb-6 h-1 rounded-full bg-gradient-to-r ${testimonial.gradient}`}
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.1 + 0.4 }}
        />

        {/* Author Info */}
        <div>
          <p className="mb-1 font-bold text-slate-900">{testimonial.author}</p>
          <p className="text-sm text-slate-600">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>

        {/* Decorative Corner */}
        <motion.div
          className={`absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-r ${testimonial.gradient} opacity-10 blur-2xl`}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: index * 0.3,
          }}
        />
      </div>
    </motion.div>
  );
}

export function AboutTestimonialsScroll() {
  const duplicatedTestimonials = useMemo(
    () => [...testimonials, ...testimonials],
    []
  );

  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50" />

      {/* Animated Grid Pattern */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-16 px-6 text-center"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4 inline-block rounded-full bg-gradient-to-r from-teal-50 to-blue-50 px-6 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-teal-700"
          >
            Client Testimonials
          </motion.span>
          <h2 className="mx-auto mb-6 max-w-4xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-4xl font-bold text-transparent md:text-5xl lg:text-6xl">
            Trusted by brands that <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text">demand excellence</span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-slate-600 md:text-xl">
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say about working with Edigitify.
          </p>
        </motion.div>

        {/* Scrolling Testimonials */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-slate-50 to-transparent md:w-48" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-slate-50 to-transparent md:w-48" />

          {/* Scrolling Container */}
          <motion.div
            className="flex gap-6 px-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 60,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {duplicatedTestimonials.map((testimonial, idx) => (
              <TestimonialCard
                key={`${testimonial.author}-${idx}`}
                testimonial={testimonial}
                index={idx}
              />
            ))}
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 px-6"
        >
          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
            {[
              { value: "98%", label: "Client Satisfaction" },
              { value: "4.9/5", label: "Average Rating" },
              { value: "95%", label: "Would Recommend" },
            ].map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-lg transition-all duration-300 hover:border-slate-300 hover:shadow-xl"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-blue-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
                <div className="relative z-10">
                  <motion.div
                    className="mb-2 bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-4xl font-bold text-transparent md:text-5xl"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 + 0.3, type: "spring", bounce: 0.5 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm font-medium text-slate-600">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
