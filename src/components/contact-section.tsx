"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, Sparkles } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const contactMethods = [
  {
    label: "Talk to us",
    value: "+91 99103 41979",
    href: "tel:+919910341979",
    icon: Phone,
    helper: "Monday to Friday · 9am — 7pm IST",
  },
  {
    label: "Project briefs",
    value: "hello@edigitify.com",
    href: "mailto:hello@edigitify.com",
    icon: Mail,
    helper: "Send decks, scope docs, or quick ideas",
  },
  {
    label: "Studios",
    value: "Delhi NCR · Dubai · Remote",
    href: "https://goo.gl/maps/JD5vF7nZQ62n4C7P7",
    icon: MapPin,
    helper: "We partner globally across timezones",
  },
  {
    label: "Response time",
    value: "<12 hours",
    href: "#turnaround",
    icon: Clock,
    helper: "We reply faster for active campaigns",
  },
] as const;

const beamBase = "absolute rounded-full blur-3xl opacity-60";
const inputClass =
  "w-full rounded-2xl border border-slate-200 bg-white/90 px-5 py-3.5 text-base text-slate-900 placeholder:text-slate-500 shadow-[0_12px_35px_-30px_rgba(15,23,42,0.9)] transition focus:border-emerald-400 focus:bg-white focus:outline-none focus:ring-0";

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
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-1 text-xs uppercase tracking-[0.4em] text-slate-600 bg-white/80">
            <Sparkles className="h-3.5 w-3.5 text-emerald-500" />
            Contact us
          </div>
          <div className="grid gap-4 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:items-end">
            <h1 className="text-4xl font-semibold text-slate-900 md:text-5xl">
              Let’s architect your next product launch, growth sprint, or brand system.
            </h1>
            <p className="text-base text-slate-600">
              Drop the essentials and we’ll respond with a kickoff plan, team pod, and first timeline in under 12 business hours.
            </p>
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
              {contactMethods.map((method) => (
                <li key={method.label} className="rounded-3xl border border-slate-200 bg-white/70 px-4 py-5 transition hover:border-slate-300">
                  <Link className="flex items-start gap-4" href={method.href} target={method.href.startsWith("http") ? "_blank" : "_self"}>
                    <method.icon className="mt-1 h-10 w-10 rounded-2xl bg-emerald-50 p-2 text-emerald-500" />
                    <div>
                      <p className="text-xs uppercase tracking-[0.35em] text-slate-500">{method.label}</p>
                      <p className="mt-2 text-lg font-semibold text-slate-900">{method.value}</p>
                      <p className="text-sm text-slate-500">{method.helper}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="rounded-[28px] border border-emerald-200/60 bg-gradient-to-r from-emerald-50 via-white to-sky-50 px-6 py-5 text-sm text-slate-600">
              <p className="font-semibold uppercase tracking-[0.4em] text-emerald-500">Engagement types</p>
              <p className="mt-2 text-base text-slate-900">Retainers · Venture co-builds · Launch sprints · Embedded pods · Fractional leadership</p>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
            className="space-y-8 rounded-[40px] border border-white/70 bg-white/90 p-10 shadow-[0_50px_120px_-60px_rgba(15,23,42,0.8)] backdrop-blur-xl"
          >
            <div className="grid gap-6">
              <Field label="Full name">
                <input name="name" id="name" required placeholder="Harsh Sharma" className={inputClass} />
              </Field>
              <Field label="Work email">
                <input type="email" name="email" id="email" required placeholder="you@company.com" className={inputClass} />
              </Field>
              <Field label="Phone number">
                <input type="tel" name="phone" id="phone" required placeholder="+91 99103 41979" className={inputClass} />
              </Field>
            </div>
            <Field label="Your message">
              <textarea
                name="message"
                id="message"
                required
                rows={6}
                placeholder="Share your brief, KPIs, timelines, or links."
                className={cn(inputClass, "resize-none")}
              />
            </Field>
           
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <button
                type="submit"
                disabled={status === "sending"}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 via-sky-400 to-blue-500 px-8 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-slate-900 shadow-[0_20px_60px_rgba(14,165,233,0.35)] transition hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70"
              >
                {status === "sending" ? "Sending…" : "Send brief"}
                <Send className="h-4 w-4" />
              </button>
              {status === "success" ? (
                <p className="text-sm text-emerald-600">Thanks! We’ll Reach to you shortly.</p>
              ) : (
                <p className="text-xs uppercase tracking-[0.4em] text-slate-400"></p>
              )}
            </div>
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
