"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

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

export function FloatingOrbs({ count = 8, className = "" }: FloatingOrbsProps) {
  const orbs: Orb[] = useMemo(() => {
    const gradients = [
      "from-teal-400/20 to-blue-400/20",
      "from-purple-400/20 to-pink-400/20",
      "from-orange-400/20 to-red-400/20",
      "from-emerald-400/20 to-teal-400/20",
      "from-blue-400/20 to-indigo-400/20",
      "from-pink-400/20 to-rose-400/20",
    ];

    return Array.from({ length: count }, (_, i) => ({
      id: i,
      size: Math.random() * 200 + 100,
      x: `${Math.random() * 100}%`,
      y: `${Math.random() * 100}%`,
      duration: Math.random() * 10 + 15,
      delay: Math.random() * 2,
      gradient: gradients[i % gradients.length]
    }));
  }, [count]);

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className={`absolute rounded-full bg-gradient-to-br ${orb.gradient} blur-3xl`}
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
          }}
          animate={{
            y: [0, -80, 0],
            x: [0, 50, -50, 0],
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

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
