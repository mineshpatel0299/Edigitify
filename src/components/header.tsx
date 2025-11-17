"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  // { href: "/insights", label: "Insights" },
  // { href: "/vault", label: "Vault" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 24);
    handle();
    window.addEventListener("scroll", handle);
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center"
    >
      <div
        className={cn(
          "mx-4 mt-4 flex w-full max-w-6xl items-center gap-6 rounded-full border border-slate-200 bg-white/80 px-8 text-sm shadow-xl shadow-slate-200/60 backdrop-blur-xl transition-all duration-300",
          scrolled ? "py-2" : "py-5",
        )}
      >
        <Link href="/" className="flex items-center gap-3 text-sm font-semibold">
          <Image src="/logobw.png" alt="Edigitify" width={70} height={20} className="h-12 w-auto" priority />
        </Link>
        <nav className="flex flex-1 items-center justify-end gap-6 text-[13px] uppercase tracking-[0.2em]">
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
      </div>
    </motion.header>
  );
}
