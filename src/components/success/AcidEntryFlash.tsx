"use client";

import { motion, useReducedMotion } from "framer-motion";

export function AcidEntryFlash() {
  const reduce = useReducedMotion();

  if (reduce) {
    return null;
  }

  return (
    <>
      <motion.div
        className="pointer-events-none fixed inset-0 z-[60] bg-acid mix-blend-screen"
        initial={{ opacity: 0.55 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        aria-hidden
      />
      <motion.div
        className="pointer-events-none fixed inset-0 z-[59]"
        style={{
          background:
            "linear-gradient(105deg, transparent 0%, rgba(204,255,0,0.35) 45%, rgba(204,255,0,0.08) 55%, transparent 70%)",
          backgroundSize: "200% 100%",
        }}
        initial={{ backgroundPosition: "100% 0%" }}
        animate={{ backgroundPosition: "-100% 0%" }}
        transition={{ duration: 0.85, ease: [0.33, 1, 0.68, 1] }}
        aria-hidden
      />
    </>
  );
}
