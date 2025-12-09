"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

interface TimelineProps {
  data: TimelineEntry[];
  title?: string;
  description?: string;
  className?: string;
  tone?: "light" | "dark";
}

export function Timeline({ data, title, description, className, tone = "light" }: TimelineProps) {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (!ref.current) return;
    const resizeObserver = new ResizeObserver(() => {
      if (ref.current) {
        setHeight(ref.current.getBoundingClientRect().height);
      }
    });
    resizeObserver.observe(ref.current);
    setHeight(ref.current.getBoundingClientRect().height);
    return () => resizeObserver.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  const isDark = tone === "dark";

  return (
    <div ref={containerRef} className={cn("w-full font-sans md:px-10", isDark ? "bg-transparent" : "bg-white dark:bg-neutral-950", className)}>
      {(title || description) && (
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 lg:px-10">
          {title && (
            <h2 className={cn("mb-4 max-w-4xl text-lg md:text-4xl", isDark ? "text-white" : "text-black dark:text-white")}>
              {title}
            </h2>
          )}
          {description && (
            <p className={cn("max-w-sm text-sm md:text-base", isDark ? "text-slate-200" : "text-neutral-700 dark:text-neutral-300")}>
              {description}
            </p>
          )}
        </div>
      )}

      <div ref={ref} className="relative mx-auto max-w-7xl pb-20">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-10 md:gap-10 md:pt-40">
            <div className="sticky top-40 z-40 flex max-w-xs self-start items-center md:w-full md:flex-row lg:max-w-sm">
              <div className={cn("absolute left-3 h-10 w-10 rounded-full md:left-3", isDark ? "bg-slate-900" : "bg-white dark:bg-black")}>
                <div className="flex h-full w-full items-center justify-center">
                  <div
                    className={cn(
                      "h-4 w-4 rounded-full border",
                      isDark ? "border-white/40 bg-white/40" : "border-neutral-300 bg-neutral-200 dark:border-neutral-700 dark:bg-neutral-800"
                    )}
                  />
                </div>
              </div>
              <h3
                className={cn(
                  "hidden text-xl font-bold md:block md:pl-20 md:text-5xl",
                  isDark ? "text-slate-200" : "text-neutral-500 dark:text-neutral-500"
                )}
              >
                {item.title}
              </h3>
            </div>

            <div className="relative w-full pl-20 pr-4 md:pl-4">
              <h3 className={cn("mb-4 block text-left text-2xl font-bold md:hidden", isDark ? "text-slate-200" : "text-neutral-500 dark:text-neutral-500")}>{item.title}</h3>
              {item.content}
            </div>
          </div>
        ))}
        <div
          className={cn(
            "absolute left-8 top-0 w-[2px] overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] md:left-8",
            isDark ? "via-white/30" : "via-neutral-200 dark:via-neutral-700"
          )}
          style={{ height }}
        >
          <motion.div
            className="absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%]"
            style={{ height: heightTransform, opacity: opacityTransform }}
          />
        </div>
      </div>
    </div>
  );
}
