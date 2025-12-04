"use client";

import Lenis from "lenis";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      document.documentElement.style.scrollBehavior = "auto";
      return;
    }

    // Defer Lenis initialization until after initial paint
    // This improves First Contentful Paint (FCP) and Largest Contentful Paint (LCP)
    const initLenis = () => {
      const lenis = new Lenis({
        duration: 1.1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });

      lenisRef.current = lenis;
      let frame = 0;

      const raf = (time: number) => {
        lenis.raf(time);
        frame = requestAnimationFrame(raf);
      };

      frame = requestAnimationFrame(raf);

      return () => {
        cancelAnimationFrame(frame);
        lenis.destroy();
      };
    };

    // Use requestIdleCallback to defer initialization, fallback to setTimeout
    if ('requestIdleCallback' in window) {
      const idleId = requestIdleCallback(initLenis, { timeout: 500 });
      return () => cancelIdleCallback(idleId);
    } else {
      const timeoutId = setTimeout(initLenis, 100);
      return () => clearTimeout(timeoutId);
    }
  }, []);

  useEffect(() => {
    if (!lenisRef.current) return;
    lenisRef.current.scrollTo(0, {
      lock: false,
      duration: 0.9,
    });
  }, [pathname]);

  return children;
}
