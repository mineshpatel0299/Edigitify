"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const quickLinks = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
  { label: "Vault", href: "/vault" },
];

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/edigitify" },
  { label: "Dribbble", href: "https://dribbble.com" },
  { label: "Behance", href: "https://www.behance.net" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/40 px-4 py-16 sm:px-6 lg:px-0">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="grid gap-10 md:grid-cols-2"
        >
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.4em] text-white/40">
              Strategic. Innovative. Impactful.
            </p>
            <h3 className="text-4xl font-semibold text-white">
              eDigitify is the marketing partner brands trust for measurable growth.
            </h3>
            <p className="text-white/60">
              Based in Delhi–NCR and collaborating globally, we align web, social, search, creators, and design under one workflow.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="mailto:info@edigitify.in"
                className="rounded-full border border-white/20 px-6 py-3 text-sm uppercase tracking-[0.3em] text-white transition hover:border-white hover:text-black hover:bg-white"
              >
                Start a project
              </Link>
              <Link
                href="tel:+919911081234"
                className="rounded-full border border-white/10 px-6 py-3 text-sm uppercase tracking-[0.3em] text-white/70 transition hover:text-white"
              >
                +91 9911081234
              </Link>
            </div>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-white/40">
                Quick Links
              </p>
              <ul className="mt-3 space-y-2 text-white/70">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="transition hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-white/40">
                Connect
              </p>
              <ul className="mt-3 space-y-2 text-white/70">
                {socials.map((social) => (
                  <li key={social.href}>
                    <Link
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition hover:text-white"
                    >
                      {social.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-white/50">
                +91 9911081234 · info@edigitify.in
              </p>
              <p className="text-sm text-white/50">22A, Third Floor, Hauz Khas Village, New Delhi 110016</p>
            </div>
          </div>
        </motion.div>
        <div className="flex flex-col gap-3 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.4em] text-white/40 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Edigitify. All rights reserved.</span>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
