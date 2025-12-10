"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageSquare, Clock, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

const floatingIcons = [
  { icon: "✦", delay: 0, duration: 3 },
  { icon: "◆", delay: 0.5, duration: 4 },
  { icon: "●", delay: 1, duration: 3.5 },
  { icon: "✧", delay: 1.5, duration: 4.5 },
];

const contactHighlights = [
  {
    icon: Clock,
    title: "Quick Response",
    description: "We respond within 12 business hours",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: MessageSquare,
    title: "Direct Communication",
    description: "Talk directly with our team",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Sparkles,
    title: "Tailored Solutions",
    description: "Custom strategies for your needs",
    gradient: "from-purple-500 to-pink-500",
  },
];

const quickContacts = [
  {
    icon: Phone,
    label: "Call",
    value: "+91 9911 081 234",
    href: "tel:+919911081234",
    color: "emerald",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@edigitify.com",
    href: "mailto:info@edigitify.com",
    color: "blue",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Delhi",
    href: "https://goo.gl/maps/JD5vF7nZQ62n4C7P7",
    color: "purple",
  },
];

export function ContactHero() {
  return (
    <div className="relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {floatingIcons.map((item, idx) => (
          <motion.div
            key={idx}
            className="absolute text-4xl opacity-10"
            style={{
              left: `${15 + idx * 22}%`,
              top: `${5 + idx * 18}%`,
            }}
            animate={{
              y: [0, -40, 0],
              rotate: [0, 360],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: item.duration,
              delay: item.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {item.icon}
          </motion.div>
        ))}
      </div>

      {/* Animated gradient blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-gradient-to-r from-emerald-400/20 to-teal-400/20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Main Hero Container */}
      <motion.div
        className="relative"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Hero Content */}
        <div className="relative z-10 text-center space-y-8 py-16 md:py-20">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-5 py-2 text-xs uppercase tracking-[0.4em] text-emerald-600 backdrop-blur-sm"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="h-4 w-4 text-emerald-500" />
            </motion.div>
            Get in Touch
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h1 className="text-5xl font-bold text-slate-900 md:text-6xl lg:text-7xl">
              Let&apos;s Build{" "}
              <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-blue-600 bg-clip-text text-transparent">
                Something Great
              </span>
              <br />
              Together
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mx-auto max-w-2xl text-lg text-slate-600 md:text-xl"
            >
              Ready to transform your digital presence? Share your vision with us and
              we&apos;ll craft a comprehensive strategy tailored to your goals.
            </motion.p>
          </motion.div>

          {/* Quick Contact Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            {quickContacts.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <motion.div
                  key={contact.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={contact.href}
                    target={contact.href.startsWith("http") ? "_blank" : "_self"}
                    className={`group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-${contact.color}-200 bg-white/90 px-6 py-3 text-sm font-medium text-slate-900 shadow-lg backdrop-blur-sm transition-all hover:shadow-xl`}
                  >
                    <Icon className={`h-5 w-5 text-${contact.color}-500`} />
                    <div className="text-left">
                      <div className="text-xs uppercase tracking-wider text-slate-500">
                        {contact.label}
                      </div>
                      <div className="font-semibold">{contact.value}</div>
                    </div>
                    <ArrowRight className="h-4 w-4 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1" />
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mx-auto grid max-w-4xl gap-6 pt-8 md:grid-cols-3"
          >
            {contactHighlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white/70 p-6 backdrop-blur-xl transition-all hover:border-slate-300 hover:shadow-xl"
                >
                  {/* Gradient overlay on hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${highlight.gradient} opacity-0 transition-opacity group-hover:opacity-5`}
                  />

                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className={`mb-4 inline-flex rounded-2xl bg-gradient-to-br ${highlight.gradient} p-3 shadow-lg`}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </motion.div>
                    <h3 className="mb-2 text-lg font-semibold text-slate-900">
                      {highlight.title}
                    </h3>
                    <p className="text-sm text-slate-600">{highlight.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="pt-8"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex flex-col items-center gap-2 text-slate-400"
            >
              <span className="text-xs uppercase tracking-[0.3em]">Fill the form below</span>
              <div className="h-8 w-5 rounded-full border-2 border-slate-300 p-1">
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="h-1.5 w-1.5 rounded-full bg-emerald-500"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Decorative Bottom Gradient Line */}
      <motion.div
        className="relative mt-8 h-1 w-full overflow-hidden rounded-full bg-gradient-to-r from-transparent via-slate-200 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <motion.div
          className="h-full w-1/3 bg-gradient-to-r from-emerald-500 via-teal-500 to-blue-500"
          animate={{ x: ["-100%", "300%"] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        />
      </motion.div>
    </div>
  );
}
