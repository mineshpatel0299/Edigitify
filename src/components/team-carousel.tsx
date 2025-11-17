"use client";

import { useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const teamMembers = [
  {
    id: 1,
    name: "Ankita Jii",
    role: "Social Media Strategist",
    image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    name: "CS Maccha",
    role: "All Rounder",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    name: "Hardik Gandhi",
    role: "Director",
    image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 4,
    name: "Veer",
    role: "Nahi Pata",
    image: "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 5,
    name: "Minesh",
    role: "SDE-1",
    image: "https://images.unsplash.com/photo-1544723795-4325371f8433?auto=format&fit=crop&w=1200&q=80",
  },
] as const;

export function TeamCarousel() {
  const marqueeMembers = useMemo(() => [...teamMembers, ...teamMembers], []);

  return (
    <div className="rounded-[48px] border border-white/20 bg-[#03151F]/90 p-10 text-white shadow-[0_35px_90px_-70px_rgba(2,10,20,0.9)]">
      <div className="space-y-3 text-center">
        <p className="text-[0.65rem] uppercase tracking-[0.45em] text-white/70">Team</p>
        <h2 className="text-4xl font-semibold text-white">Meet Our Team</h2>
        <p className="mx-auto max-w-2xl text-sm text-white/70">
          Calm pods of strategists, engineers, and consultants who keep execution premium and personable.
        </p>
      </div>

      <div className="relative mt-12 overflow-hidden">
        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {marqueeMembers.map((member, idx) => (
            <article
              key={`${member.id}-${idx}`}
              className="group relative w-full min-w-[280px] max-w-[320px] flex-1 overflow-hidden rounded-[36px] border border-white/15 bg-gradient-to-b from-white/10 via-white/0 to-transparent shadow-xl shadow-black/30"
            >
              <div className="relative h-[22rem] w-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover grayscale transition duration-700 group-hover:scale-[1.05]"
                  sizes="(max-width: 768px) 80vw, 20vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#03151F]/80 via-transparent to-transparent" />
              </div>
              <div className="border-t border-white/20 bg-white/5 px-6 py-5 backdrop-blur-sm">
                <p className="text-xl font-semibold text-white">{member.name}</p>
                <p className="text-sm text-white/70">{member.role}</p>
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
