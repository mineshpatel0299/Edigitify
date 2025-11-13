"use client"

import { useEffect, useRef, useState } from "react"

import { cn } from "@/lib/utils"

interface CountUpNumberProps {
  end: number
  start?: number
  duration?: number
  delay?: number
  prefix?: string
  suffix?: string
  className?: string
}

export function CountUpNumber({
  end,
  start = 0,
  duration = 1.2,
  delay = 0,
  prefix = "",
  suffix = "",
  className,
}: CountUpNumberProps) {
  const elementRef = useRef<HTMLSpanElement | null>(null)
  const frameRef = useRef<number>()
  const hasAnimatedRef = useRef(false)
  const [value, setValue] = useState(start)

  useEffect(() => {
    const node = elementRef.current
    if (!node) return

    const animate = () => {
      const startTime = performance.now() + delay * 1000

      const tick = (now: number) => {
        const elapsed = now - startTime
        if (elapsed < 0) {
          frameRef.current = requestAnimationFrame(tick)
          return
        }

        const progress = Math.min(elapsed / (duration * 1000), 1)
        const eased = 1 - Math.pow(1 - progress, 3) // easeOutCubic
        setValue(Math.round(start + (end - start) * eased))

        if (progress < 1) {
          frameRef.current = requestAnimationFrame(tick)
        }
      }

      frameRef.current = requestAnimationFrame(tick)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true
          animate()
        }
      },
      { threshold: 0.4 },
    )

    observer.observe(node)

    return () => {
      observer.disconnect()
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current)
      }
    }
  }, [delay, duration, end, start])

  return (
    <span ref={elementRef} className={cn(className)}>
      {prefix}
      {value.toLocaleString()}
      {suffix}
    </span>
  )
}
