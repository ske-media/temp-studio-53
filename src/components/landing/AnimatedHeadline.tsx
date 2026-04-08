"use client";

import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

type AnimatedHeadlineProps = {
  text: string;
  className?: string;
  id?: string;
};

export function AnimatedHeadline({ text, className = "", id }: AnimatedHeadlineProps) {
  const reduce = useReducedMotion();
  const words = text.split(" ");

  if (reduce) {
    return (
      <h1 id={id} className={className}>
        {text}
      </h1>
    );
  }

  return (
    <h1
      id={id}
      className={`flex flex-wrap justify-center gap-x-[0.2em] gap-y-1 ${className}`}
      style={{
        textShadow:
          "0 0 40px rgba(204,255,0,0.06), 0 0 80px rgba(204,255,0,0.03)",
      }}
    >
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden pb-0.5">
          <motion.span
            className="inline-block"
            initial={{ y: "120%", opacity: 0.3, rotate: 3 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            transition={{
              delay: 0.2 + i * 0.085,
              duration: 0.78,
              ease,
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </h1>
  );
}
