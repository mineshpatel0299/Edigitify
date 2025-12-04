"use client";

import { motion } from "framer-motion";
import { useMemo, useEffect, useState, useRef, memo } from "react";

interface Orb {
  id: number;
  size: number;
  x: string;
  y: string;
  duration: number;
  delay: number;
  gradient: string;
}

interface FloatingOrbsProps {
  count?: number;
  className?: string;
}

export const FloatingOrbs = memo(function FloatingOrbs({
  count = 8,
  className = ""
}: FloatingOrbsProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Detect mobile and reduced motion preference
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    const checkReducedMotion = () => {
      setPrefersReducedMotion(
        window.matchMedia('(prefers-reduced-motion: reduce)').matches
      );
    };

    checkMobile();
    checkReducedMotion();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Intersection observer to pause animations when offscreen
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0, rootMargin: '100px' }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Reduce orb count on mobile (50% reduction)
  const adjustedCount = isMobile ? Math.floor(count * 0.5) : count;

  const orbs: Orb[] = useMemo(() => {
    const gradients = [
      "from-teal-400/20 to-blue-400/20",
      "from-purple-400/20 to-pink-400/20",
      "from-orange-400/20 to-red-400/20",
      "from-emerald-400/20 to-teal-400/20",
      "from-blue-400/20 to-indigo-400/20",
      "from-pink-400/20 to-rose-400/20",
    ];

    return Array.from({ length: adjustedCount }, (_, i) => ({
      id: i,
      size: Math.random() * 200 + 100,
      x: `${Math.random() * 100}%`,
      y: `${Math.random() * 100}%`,
      duration: Math.random() * 10 + 15,
      delay: Math.random() * 2,
      gradient: gradients[i % gradients.length]
    }));
  }, [adjustedCount]);

  // Don't render if user prefers reduced motion
  if (prefersReducedMotion) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className={`absolute rounded-full bg-gradient-to-br ${orb.gradient} blur-3xl will-change-transform`}
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            transform: 'translateZ(0)', // GPU acceleration
          }}
          animate={isVisible ? {
            y: [0, -80, 0],
            x: [0, 50, -50, 0],
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          } : {}}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: isVisible ? Infinity : 0,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
});

export function InteractiveOrb() {
  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-50 h-8 w-8 rounded-full bg-gradient-to-r from-teal-400 to-blue-400 opacity-50 blur-xl"
      style={{
        x: -100,
        y: -100,
      }}
    />
  );
}
