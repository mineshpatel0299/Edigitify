"use client";

import { motion } from "framer-motion";

interface AnimatedIconProps {
  icon: string;
  gradient: string;
  index?: number;
}

export function AnimatedIcon({ icon, gradient, index = 0 }: AnimatedIconProps) {
  return (
    <motion.div
      className={`relative inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${gradient} shadow-2xl`}
      initial={{ scale: 0, rotate: -180 }}
      whileInView={{ scale: 1, rotate: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        type: "spring",
        bounce: 0.5,
      }}
      whileHover={{
        scale: 1.1,
        rotate: [0, -10, 10, -10, 0],
        transition: { duration: 0.5 }
      }}
    >
      <motion.div
        className="absolute inset-0 rounded-2xl bg-white/20"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.span
        className="relative text-4xl"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {icon}
      </motion.span>

      {/* Orbiting dots */}
      {[0, 120, 240].map((angle, i) => (
        <motion.div
          key={i}
          className="absolute h-2 w-2 rounded-full bg-white/60"
          style={{
            left: "50%",
            top: "50%",
          }}
          animate={{
            rotate: [angle, angle + 360],
            x: [
              Math.cos((angle * Math.PI) / 180) * 40,
              Math.cos(((angle + 360) * Math.PI) / 180) * 40,
            ],
            y: [
              Math.sin((angle * Math.PI) / 180) * 40,
              Math.sin(((angle + 360) * Math.PI) / 180) * 40,
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </motion.div>
  );
}

export function MorphingShape({ gradient }: { gradient: string }) {
  return (
    <motion.div
      className={`h-32 w-32 bg-gradient-to-br ${gradient} blur-3xl`}
      animate={{
        borderRadius: [
          "60% 40% 30% 70% / 60% 30% 70% 40%",
          "30% 60% 70% 40% / 50% 60% 30% 60%",
          "60% 40% 30% 70% / 60% 30% 70% 40%",
        ],
        rotate: [0, 360],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}
