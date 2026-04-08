"use client";

import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export function FormCrosshairs() {
  const reducePref = useReducedMotion();
  const reduce = reducePref === true;

  const item = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, scale: 0.35 },
    animate: { opacity: 1, scale: 1 } as const,
    transition: { delay, duration: 0.55, ease },
  });

  return (
    <div className="pointer-events-none absolute inset-0 rounded-[inherit]" aria-hidden>
      <motion.div className="absolute left-3 top-3 sm:left-4 sm:top-4" {...item(0.88)}>
        <div className="absolute left-0 top-0 h-4 w-px bg-acid/55 sm:h-5" />
        <div className="absolute left-0 top-0 h-px w-4 bg-acid/55 sm:w-5" />
      </motion.div>
      <motion.div className="absolute right-3 top-3 sm:right-4 sm:top-4" {...item(0.95)}>
        <div className="absolute right-0 top-0 h-4 w-px bg-acid/55 sm:h-5" />
        <div className="absolute right-0 top-0 h-px w-4 bg-acid/55 sm:w-5" />
      </motion.div>
      <motion.div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4" {...item(1.02)}>
        <div className="absolute bottom-0 left-0 h-4 w-px bg-acid/55 sm:h-5" />
        <div className="absolute bottom-0 left-0 h-px w-4 bg-acid/55 sm:w-5" />
      </motion.div>
      <motion.div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4" {...item(1.09)}>
        <div className="absolute bottom-0 right-0 h-4 w-px bg-acid/55 sm:h-5" />
        <div className="absolute bottom-0 right-0 h-px w-4 bg-acid/55 sm:w-5" />
      </motion.div>
    </div>
  );
}
