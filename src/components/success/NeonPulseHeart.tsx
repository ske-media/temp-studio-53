"use client";

import { motion, useReducedMotion } from "framer-motion";

export function NeonPulseHeart() {
  const reduce = useReducedMotion();

  return (
    <div
      className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      aria-hidden
    >
      <motion.div
        className="relative size-[min(120vw,720px)] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(204,255,0,0.22) 0%, rgba(204,255,0,0.06) 35%, transparent 65%)",
          filter: "blur(48px)",
        }}
        animate={
          reduce
            ? undefined
            : {
                scale: [1, 1.08, 1.02, 1.12, 1],
                opacity: [0.55, 0.85, 0.5, 0.75, 0.55],
              }
        }
        transition={{
          duration: 2.4,
          repeat: Infinity,
          ease: [0.45, 0, 0.55, 1],
          times: [0, 0.15, 0.35, 0.5, 1],
        }}
      />
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(204,255,0,0.12) 0%, transparent 55%)",
          filter: "blur(20px)",
        }}
        animate={
          reduce
            ? undefined
            : {
                scale: [1, 1.15, 1.05, 1.18, 1],
                opacity: [0.4, 0.7, 0.35, 0.6, 0.4],
              }
        }
        transition={{
          duration: 2.4,
          repeat: Infinity,
          ease: [0.45, 0, 0.55, 1],
          delay: 0.08,
          times: [0, 0.15, 0.35, 0.5, 1],
        }}
      />
    </div>
  );
}
