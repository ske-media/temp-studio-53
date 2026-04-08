"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Impact au premier rendu : flash acid + lame diagonale (sans bloquer l’UI).
 */
export function EntryDisruption() {
  const reduce = useReducedMotion();

  if (reduce) {
    return null;
  }

  return (
    <>
      <motion.div
        className="pointer-events-none fixed inset-0 z-[55] bg-acid mix-blend-overlay"
        initial={{ opacity: 0.22 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
        aria-hidden
      />
      <motion.div
        className="pointer-events-none fixed -top-[20%] z-[54] h-[180%] w-[min(28vw,140px)] -skew-x-[18deg] bg-gradient-to-b from-acid/50 via-acid/15 to-transparent blur-[1px]"
        style={{ left: "-30%" }}
        initial={{ x: 0, opacity: 0.92 }}
        animate={{ x: "125vw", opacity: 0 }}
        transition={{
          duration: 0.72,
          ease: [0.16, 0.84, 0.24, 1],
          delay: 0.06,
        }}
        aria-hidden
      />
    </>
  );
}
