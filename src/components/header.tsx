"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  // { href: "/insights", label: "Insights" },
  // { href: "/vault", label: "Vault" },
  { href: "/contact", label: "Contact" },
];

const MOBILE_BREAKPOINT = 768;

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 24);
    handle();
    window.addEventListener("scroll", handle);
    return () => window.removeEventListener("scroll", handle);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  // Close menu on larger breakpoints to avoid stuck states while resizing
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= MOBILE_BREAKPOINT) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Enable dismiss with the Escape key for accessibility
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50 flex justify-center"
      >
        <div
          className={cn(
            "mx-4 mt-4 flex w-full max-w-6xl items-center gap-6 rounded-full border border-slate-200 bg-white/80 px-6 sm:px-8 text-sm shadow-xl shadow-slate-200/60 backdrop-blur-xl transition-all duration-300",
            scrolled ? "py-2" : "py-4 sm:py-5",
          )}
        >
          <Link href="/" className="flex items-center gap-3 text-sm font-semibold">
            <Image
              src="/logobw.png"
              alt="Edigitify"
              width={70}
              height={20}
              className="h-8 sm:h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex flex-1 items-center justify-end gap-6 text-[13px] uppercase tracking-[0.2em]"
            aria-label="Primary navigation"
          >
            {navLinks.map((link) => {
              const active = pathname === link.href || pathname.startsWith(link.href + "/");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative pb-1 text-slate-500 transition hover:text-slate-900",
                    active && "text-slate-900"
                  )}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 h-0.5 w-full bg-[var(--accent)]"
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden ml-auto flex items-center justify-center w-10 h-10 rounded-full hover:bg-slate-100 transition-colors"
            type="button"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5 text-slate-900" />
            ) : (
              <Menu className="h-5 w-5 text-slate-900" />
            )}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              id="mobile-navigation"
              aria-label="Mobile primary navigation"
              className="fixed top-0 bottom-0 right-0 z-50 flex w-[calc(100vw-2rem)] max-w-sm flex-col bg-white shadow-2xl md:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between px-6 py-5 border-b border-slate-200">
                  <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                    <Image
                      src="/logobw.png"
                      alt="Edigitify"
                      width={60}
                      height={18}
                      className="h-10 w-auto"
                    />
                  </Link>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-slate-100 transition-colors"
                    type="button"
                    aria-label="Close mobile menu"
                  >
                    <X className="h-5 w-5 text-slate-900" />
                  </button>
                </div>

                {/* Mobile Navigation Links */}
                <div className="flex flex-col flex-1 px-6 py-8 gap-2 overflow-y-auto">
                  {navLinks.map((link, index) => {
                    const active = pathname === link.href || pathname.startsWith(link.href + "/");
                    return (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={cn(
                            "flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-medium uppercase tracking-[0.3em] transition-all sm:text-sm",
                            active
                              ? "bg-slate-900 text-white shadow-lg"
                              : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                          )}
                        >
                          {active && (
                            <motion.span
                              layoutId="mobile-active-pill"
                              className="w-1.5 h-1.5 rounded-full bg-white"
                            />
                          )}
                          {link.label}
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Mobile Menu Footer */}
                <div className="p-6 border-t border-slate-200 space-y-3">
                  <Link
                    href="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block w-full rounded-full bg-[var(--accent)] px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.35em] text-white shadow-lg transition hover:brightness-95 sm:text-sm"
                  >
                    Let's Talk
                  </Link>
                  <p className="text-xs text-slate-500 text-center">
                    © 2025 Edigitify. All rights reserved.
                  </p>
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
