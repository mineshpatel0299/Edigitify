"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/edigitify",
    iconPath: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/edigitify",
    iconPath: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zm1.5-4.87h.01M7.5 3h9A4.5 4.5 0 0 1 21 7.5v9a4.5 4.5 0 0 1-4.5 4.5h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3z"
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/edigitify",
    iconPath: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
  },
];

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-slate-50 via-white to-slate-50 border-t border-slate-200">
      {/* Top Section */}
      <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="grid gap-16 lg:grid-cols-12 lg:gap-20"
        >
          {/* Brand Section */}
          <div className="lg:col-span-5 space-y-7">
            <Link href="/" className="inline-block">
              <Image
                src="/logobw.png"
                alt="Edigitify"
                width={140}
                height={45}
                className="h-14 w-auto"
              />
            </Link>

            <p className="text-xl font-medium text-slate-700 leading-relaxed max-w-md">
              Strategic. Innovative. Impactful.
            </p>

            <p className="text-base text-slate-600 leading-relaxed max-w-md">
              The marketing partner brands trust for measurable growth. Based in Delhi–NCR, collaborating globally.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 pt-3">
              {socials.map((social) => (
                <motion.a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-white border-2 border-slate-200 text-slate-600 transition-all duration-300 hover:border-teal-500 hover:text-teal-600 hover:shadow-lg hover:shadow-teal-500/20"
                  aria-label={social.label}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                  >
                    <path d={social.iconPath} />
                  </svg>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-900 mb-6">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-base text-slate-600 transition-all duration-200 hover:text-teal-600 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-900 mb-6">
              Get in Touch
            </h4>

            <div className="space-y-5">
              <Link
                href="mailto:info@edigitify.in"
                className="flex items-start gap-3 text-base text-slate-600 hover:text-teal-600 transition-colors group"
              >
                <Mail className="w-5 h-5 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span>info@edigitify.in</span>
              </Link>

              <Link
                href="tel:+919911081234"
                className="flex items-start gap-3 text-base text-slate-600 hover:text-teal-600 transition-colors group"
              >
                <Phone className="w-5 h-5 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span>+91 9911081234</span>
              </Link>

              <div className="flex items-start gap-3 text-base text-slate-600">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span className="leading-relaxed">
                  22A, Third Floor, Hauz Khas Village,<br />
                  New Delhi 110016
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-500 to-blue-500 px-9 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-white shadow-lg shadow-teal-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/40"
                >
                  Start a Project
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-200 bg-white/50 backdrop-blur-sm">
        <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
            <p className="text-sm uppercase tracking-[0.25em]">
              © {new Date().getFullYear()} Edigitify. All rights reserved.
            </p>

            <div className="flex flex-wrap gap-8 text-sm uppercase tracking-[0.25em]">
              <Link
                href="/privacy"
                className="transition-colors hover:text-teal-600"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="transition-colors hover:text-teal-600"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Gradient */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -bottom-32 -right-32 h-64 w-64 rounded-full bg-gradient-to-br from-teal-500/5 to-blue-500/5 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-gradient-to-br from-blue-500/5 to-teal-500/5 blur-3xl" />
      </div>
    </footer>
  );
}
