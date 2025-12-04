"use client";

import { motion } from "framer-motion";
import { useMemo, useEffect, useState, useRef, memo } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  color: string;
}

interface ParticlesProps {
  count?: number;
  className?: string;
  colors?: string[];
}

export const Particles = memo(function Particles({
  count = 50,
  className = "",
  colors = ["#14b8a6", "#3b82f6", "#8b5cf6", "#ec4899"]
}: ParticlesProps) {
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
      { threshold: 0, rootMargin: '50px' }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Reduce particle count on mobile (60% reduction)
  const adjustedCount = isMobile ? Math.floor(count * 0.4) : count;

  const particles: Particle[] = useMemo(() => {
    return Array.from({ length: adjustedCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
      color: colors[Math.floor(Math.random() * colors.length)]
    }));
  }, [adjustedCount, colors]);

  // Don't render if user prefers reduced motion
  if (prefersReducedMotion) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full blur-sm will-change-transform"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            transform: 'translateZ(0)', // GPU acceleration
          }}
          animate={isVisible ? {
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          } : {}}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: isVisible ? Infinity : 0,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
});

export function OrbitingParticles({
  count = 20,
  radius = 200,
  colors = ["#14b8a6", "#3b82f6", "#8b5cf6"]
}: {
  count?: number;
  radius?: number;
  colors?: string[];
}) {
  const particles = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      angle: (i / count) * 360,
      size: Math.random() * 3 + 2,
      duration: Math.random() * 20 + 10,
      color: colors[i % colors.length]
    }));
  }, [count, colors]);

  return (
    <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            left: 0,
            top: 0,
          }}
          animate={{
            rotate: [particle.angle, particle.angle + 360],
            x: [
              Math.cos((particle.angle * Math.PI) / 180) * radius,
              Math.cos(((particle.angle + 360) * Math.PI) / 180) * radius,
            ],
            y: [
              Math.sin((particle.angle * Math.PI) / 180) * radius,
              Math.sin(((particle.angle + 360) * Math.PI) / 180) * radius,
            ],
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
