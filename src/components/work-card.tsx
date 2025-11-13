"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useMemo, useRef, useState } from "react";
import type { WorkItem } from "@/lib/content";

export function WorkCard({ item, index }: { item: WorkItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const tags = useMemo(() => item.tags.join(" • "), [item.tags]);

  const handlePointerMove = (event: React.MouseEvent<HTMLElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;
    setTilt({ x: (0.5 - y) * 8, y: (x - 0.5) * 8 });
  };

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      <Link
        href={`/work/${item.slug}`}
        className="block"
        onMouseMove={handlePointerMove}
        onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      >
          <motion.div
            style={{ rotateX: tilt.x, rotateY: tilt.y }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.99 }}
            className="ring-card overflow-hidden rounded-[28px]"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 33vw"
                className="object-cover transition duration-700 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent" />
              <span className="absolute left-6 top-6 text-xs uppercase tracking-[0.4em] text-white">
                {tags}
              </span>
            </div>
            <div className="flex flex-col gap-2 p-6">
              <h3 className="text-2xl font-semibold text-slate-900">{item.title}</h3>
              <p className="text-sm text-slate-600">{item.summary}</p>
            </div>
          </motion.div>
      </Link>
    </motion.article>
  );
}
