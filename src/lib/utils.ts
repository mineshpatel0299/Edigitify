import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const revealVariants = {
  hidden: { y: 24, opacity: 0 },
  visible: (delay = 0) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      delay,
      ease: [0.21, 0.61, 0.35, 1],
    },
  }),
};

export function formatTime(date: Date, timeZone: string) {
  return new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone,
  }).format(date);
}

export function formatDay(date: Date, timeZone: string) {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    timeZone,
  }).format(date);
}
