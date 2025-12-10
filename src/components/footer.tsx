"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const quickLinks = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  
  { label: "Contact", href: "/contact" },
];

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/edigitify" },
  { label: "Dribbble", href: "https://dribbble.com" },
  { label: "Behance", href: "https://www.behance.net" },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-4 py-16 sm:px-6 lg:px-0">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="grid gap-10 md:grid-cols-2"
        >
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.4em] text-slate-500">
              Strategic. Innovative. Impactful.
            </p>
            <h3 className="text-4xl font-semibold text-slate-900">
              eDigitify is the marketing partner brands trust for measurable growth.
            </h3>
            <p className="text-slate-600">
              Based in Delhi–NCR and collaborating globally, we align web, social, search, creators, and design under one workflow.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="mailto:info@edigitify.in"
                className="rounded-full border border-slate-300 px-6 py-3 text-sm uppercase tracking-[0.3em] text-slate-900 transition hover:border-slate-500 hover:bg-slate-900 hover:text-white"
              >
                Start a project
              </Link>
              <Link
                href="tel:+919911081234"
                className="rounded-full border border-slate-200 px-6 py-3 text-sm uppercase tracking-[0.3em] text-slate-500 transition hover:text-slate-900"
              >
                +91 9911081234
              </Link>
            </div>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-slate-500">
                Quick Links
              </p>
              <ul className="mt-3 space-y-2 text-slate-600">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="transition hover:text-slate-900"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-slate-500">
                Connect
              </p>
              <ul className="mt-3 space-y-2 text-slate-600">
                {socials.map((social) => (
                  <li key={social.href}>
                    <Link
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition hover:text-slate-900"
                    >
                      {social.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-slate-500">
                +91 9911081234 · info@edigitify.in
              </p>
              <p className="text-sm text-slate-500">22A, Third Floor, Hauz Khas Village, New Delhi 110016</p>
            </div>
          </div>
        </motion.div>
        <div className="flex flex-col gap-3 border-t border-slate-200 pt-6 text-xs uppercase tracking-[0.4em] text-slate-500 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Edigitify. All rights reserved.</span>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-slate-900">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-slate-900">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
