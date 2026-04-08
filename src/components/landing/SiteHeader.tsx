"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

const ease = [0.22, 1, 0.36, 1] as const;

type SiteHeaderProps = {
  className?: string;
};

export function SiteHeader({ className = "" }: SiteHeaderProps) {
  const reduce = useReducedMotion();

  return (
    <motion.header
      className={`flex w-full items-start justify-between px-5 pt-6 sm:px-8 sm:pt-8 lg:px-12 ${className}`}
      initial={reduce ? false : { opacity: 0, y: -16, filter: "blur(8px)" }}
      animate={
        reduce ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }
      }
      transition={{ duration: 0.75, ease }}
    >
      <motion.div
        whileHover={reduce ? undefined : { scale: 1.02 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        <Link
          href="/"
          className="font-display text-sm font-medium tracking-[0.2em] text-paper sm:text-base"
        >
          Studio 53
        </Link>
      </motion.div>
      <motion.div
        className="flex items-center gap-2 border border-paper/10 px-3 py-1.5 glass-panel"
        role="status"
        aria-live="polite"
        initial={reduce ? false : { opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.35, duration: 0.5, ease }}
      >
        <span
          className="live-pulse-dot size-2 shrink-0 rounded-full bg-acid"
          aria-hidden
        />
        <span className="text-[10px] font-medium tracking-[0.25em] text-paper/90 sm:text-[11px]">
          LIVE PULSE
        </span>
      </motion.div>
    </motion.header>
  );
}
