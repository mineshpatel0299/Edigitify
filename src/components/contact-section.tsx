"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, Sparkles } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const contactMethods = [
  {
    label: "Call Us",
    value: "(+91) 9911 081 234",
    href: "tel:+919911081234",
    icon: Phone,
    helper: "Monday to Friday · 10:00 AM — 08:00 PM (GMT +5:30)",
  },
  {
    label: "Email Us",
    value: "info@edigitify.com",
    href: "mailto:info@edigitify.com",
    icon: Mail,
    helper: "We will response you ASAP to your mail",
  },
  {
    label: "Our Location",
    value: "Delhi NCR · Dubai · Remote",
    href: "https://goo.gl/maps/JD5vF7nZQ62n4C7P7",
    icon: MapPin,
    helper: "We partner globally across timezones",
  },
  {
    label: "Business Hours",
    value: "Mon - Fri 10:00 AM - 08:00",
    href: "#hours",
    icon: Clock,
    helper: "GMT +5:30 timezone",
  },
] as const;

const beamBase = "absolute rounded-full blur-3xl opacity-60";
const inputClass =
  "w-full rounded-2xl border border-slate-200 bg-white/90 px-5 py-3.5 text-base text-slate-900 placeholder:text-slate-500 shadow-[0_12px_35px_-30px_rgba(15,23,42,0.9)] transition-all duration-300 focus:border-emerald-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-400/20 focus:shadow-[0_0_0_4px_rgba(52,211,153,0.1)] focus:scale-[1.01]";

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    setTimeout(() => {
      setStatus("success");
    }, 900);
  };

  return (
    <section className="relative overflow-hidden rounded-[48px] border border-white/30 bg-white/70 p-8 shadow-[0_60px_140px_-80px_rgba(15,23,42,1)] backdrop-blur-2xl sm:p-12">
      <motion.span
        className={cn(beamBase, "inset-y-8 left-12 hidden w-44 bg-emerald-400/25 sm:block")}
        animate={{ y: [0, 60, -40, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <motion.span
        className={cn(beamBase, "inset-y-16 right-16 hidden w-56 bg-sky-400/20 sm:block")}
        animate={{ x: [0, -30, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.span
        className={cn(beamBase, "bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 bg-purple-400/20")}
        animate={{ scale: [1, 1.2, 0.9, 1] }}
        transition={{ duration: 14, repeat: Infinity }}
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
          className="mb-12 space-y-4 text-center text-slate-900 md:text-left"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.19, 1, 0.22, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-1 text-xs uppercase tracking-[0.4em] text-slate-600 bg-white/80"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="h-3.5 w-3.5 text-emerald-500" />
            </motion.div>
            Contact us
          </motion.div>
          <div className="grid gap-4 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:items-end">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
              className="text-4xl font-semibold text-slate-900 md:text-5xl"
            >
              Let&apos;s Connect and Transform Your Digital Vision into Reality
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.19, 1, 0.22, 1] }}
              className="text-base text-slate-600"
            >
              Share your project details and we&apos;ll respond with a comprehensive plan within 12 business hours. Let&apos;s build something extraordinary together.
            </motion.p>
          </div>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[0.85fr_1fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.19, 1, 0.22, 1] }}
            className="space-y-6 rounded-[32px] border border-slate-200 bg-white/80 p-8 backdrop-blur-xl"
          >
            <ul className="space-y-4">
              {contactMethods.map((method, index) => (
                <motion.li
                  key={method.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1, ease: [0.19, 1, 0.22, 1] }}
                  whileHover={{ scale: 1.02, x: 4 }}
                  className="group rounded-3xl border border-slate-200 bg-white/70 px-4 py-5 transition-all hover:border-emerald-300 hover:shadow-lg"
                >
                  <Link className="flex items-start gap-4" href={method.href} target={method.href.startsWith("http") ? "_blank" : "_self"}>
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className="mt-1"
                    >
                      <method.icon className="h-10 w-10 rounded-2xl bg-emerald-50 p-2 text-emerald-500 transition-colors group-hover:bg-emerald-100 group-hover:text-emerald-600" />
                    </motion.div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.35em] text-slate-500 group-hover:text-emerald-600 transition-colors">{method.label}</p>
                      <p className="mt-2 text-lg font-semibold text-slate-900 group-hover:text-emerald-700 transition-colors">{method.value}</p>
                      <p className="text-sm text-slate-500">{method.helper}</p>
                    </div>
                  </Link>
                </motion.li>
              ))}
            </ul>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8, ease: [0.19, 1, 0.22, 1] }}
              whileHover={{ scale: 1.02 }}
              className="rounded-[28px] border border-emerald-200/60 bg-gradient-to-r from-emerald-50 via-white to-sky-50 px-6 py-5 text-sm text-slate-600 transition-all hover:shadow-lg"
            >
              <p className="font-semibold uppercase tracking-[0.4em] text-emerald-500">Engagement types</p>
              <p className="mt-2 text-base text-slate-900">Retainers · Venture co-builds · Launch sprints · Embedded pods · Fractional leadership</p>
            </motion.div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
            className="space-y-8 rounded-[40px] border border-white/70 bg-white/90 p-10 shadow-[0_50px_120px_-60px_rgba(15,23,42,0.8)] backdrop-blur-xl"
          >
            <div className="grid gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4, ease: [0.19, 1, 0.22, 1] }}
              >
                <Field label="Full name">
                  <input name="name" id="name" required placeholder="Enter your full name" className={inputClass} />
                </Field>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5, ease: [0.19, 1, 0.22, 1] }}
              >
                <Field label="Work email">
                  <input type="email" name="email" id="email" required placeholder="you@company.com" className={inputClass} />
                </Field>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6, ease: [0.19, 1, 0.22, 1] }}
              >
                <Field label="Phone number">
                  <input type="tel" name="phone" id="phone" required placeholder="(+91) 9911 081 234" className={inputClass} />
                </Field>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7, ease: [0.19, 1, 0.22, 1] }}
            >
              <Field label="Your message">
                <textarea
                  name="message"
                  id="message"
                  required
                  rows={6}
                  placeholder="Share your brief, requirements, timelines, or any questions you have..."
                  className={cn(inputClass, "resize-none")}
                />
              </Field>
            </motion.div>
           
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8, ease: [0.19, 1, 0.22, 1] }}
              className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between"
            >
              <motion.button
                type="submit"
                disabled={status === "sending"}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 via-sky-400 to-blue-500 px-8 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-slate-900 shadow-[0_20px_60px_rgba(14,165,233,0.35)] transition-all hover:shadow-[0_25px_70px_rgba(14,165,233,0.45)] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === "sending" ? (
                  <>
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                      <Send className="h-4 w-4" />
                    </motion.span>
                    Sending…
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="h-4 w-4" />
                  </>
                )}
              </motion.button>
              {status === "success" && (
                <motion.p
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-sm text-emerald-600 font-medium"
                >
                  ✓ Thanks! We&apos;ll reach out to you shortly.
                </motion.p>
              )}
            </motion.div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

interface FieldProps {
  label: string;
  children: React.ReactNode;
}

function Field({ label, children }: FieldProps) {
  return (
    <label className="text-sm text-slate-900">
      <span className="mb-2 block text-xs uppercase tracking-[0.35em] text-slate-500">{label}</span>
      {children}
    </label>
  );
}
