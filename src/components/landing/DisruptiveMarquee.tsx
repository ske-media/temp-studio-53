"use client";

import { motion, useReducedMotion } from "framer-motion";

const LINE =
  "DISRUPTIVE · NOT DEFAULT · GENÈVE · IA × HUMAINS · STUDIO 53 · ADVERTISING GENERATED · ";

export function DisruptiveMarquee() {
  const reduce = useReducedMotion();

  return (
    <div
      className="pointer-events-none fixed bottom-0 left-0 right-0 z-[25] overflow-hidden border-t border-acid/20 bg-anthracite/90 py-2.5 backdrop-blur-sm"
      aria-hidden
    >
      {reduce ? (
        <p className="text-center font-mono text-[9px] tracking-[0.35em] text-acid/50">
          {LINE.trim()}
        </p>
      ) : (
        <motion.div
          className="flex w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 32,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <span className="shrink-0 whitespace-nowrap px-6 font-mono text-[9px] font-medium tracking-[0.42em] text-acid/75 sm:text-[10px]">
            {LINE}
            {LINE}
          </span>
          <span className="shrink-0 whitespace-nowrap px-6 font-mono text-[9px] font-medium tracking-[0.42em] text-acid/75 sm:text-[10px]">
            {LINE}
            {LINE}
          </span>
        </motion.div>
      )}
    </div>
  );
}
