"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useMemo } from "react";

const COUNT = 36;

function seeded(seed: number) {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

export function DigitalDust() {
  const reduce = useReducedMotion();

  const particles = useMemo(() => {
    const rand = seeded(53);
    return Array.from({ length: COUNT }, (_, i) => ({
      id: i,
      left: `${rand() * 100}%`,
      top: `${rand() * 100}%`,
      size: 1 + rand() * 2,
      duration: 18 + rand() * 24,
      delay: rand() * 8,
      driftX: (rand() - 0.5) * 28,
      driftY: -40 - rand() * 80,
    }));
  }, []);

  if (reduce) {
    return (
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden
      >
        {particles.slice(0, 12).map((p) => (
          <span
            key={p.id}
            className="absolute rounded-full bg-acid/25"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
            }}
          />
        ))}
      </div>
    );
  }

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-acid/30"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            boxShadow: "0 0 6px rgba(204, 255, 0, 0.25)",
          }}
          animate={{
            y: [0, p.driftY, 0],
            x: [0, p.driftX, 0],
            opacity: [0.15, 0.45, 0.12],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
