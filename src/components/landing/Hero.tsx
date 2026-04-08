"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      className="relative isolate min-h-[78vh] overflow-hidden px-5 pb-16 pt-4 sm:min-h-[82vh] sm:px-8 sm:pb-20 lg:px-12"
      aria-labelledby="hero-headline"
    >
      {/* Cinematic layers */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-anthracite" />
        <Image
          src="/hero-door.png"
          alt=""
          fill
          priority
          className="object-cover opacity-[0.35] blur-[2px] sm:opacity-40"
          sizes="100vw"
        />
        <motion.div
          className="absolute inset-0"
          animate={
            reduce
              ? undefined
              : {
                  opacity: [0.22, 0.38, 0.22],
                  scale: [1, 1.03, 1],
                }
          }
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/hero-pulse.png"
            alt=""
            fill
            className="object-cover mix-blend-screen opacity-50 sm:opacity-55"
            sizes="100vw"
          />
        </motion.div>
        {/* Acid halo — bottom horizon */}
        <div
          className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-acid/25 via-acid/5 to-transparent"
          aria-hidden
        />
        <div
          className="absolute inset-x-[-20%] bottom-[-15%] h-[45%] rounded-[100%] bg-acid/15 blur-[80px]"
          aria-hidden
        />
        {/* Slow blurred silhouette */}
        <motion.div
          className="absolute top-[28%] h-[min(52vh,420px)] w-[min(72vw,320px)] rounded-full bg-paper/[0.04] blur-[48px] sm:top-[22%] sm:w-[min(48vw,380px)]"
          aria-hidden
          style={{ left: "50%" }}
          initial={false}
          animate={
            reduce
              ? { x: "-50%" }
              : {
                  x: ["-52%", "-48%", "-52%"],
                  y: ["0%", "3%", "0%"],
                  scale: [1, 1.05, 1],
                }
          }
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-anthracite via-transparent to-anthracite/90" />
      </div>

      <div
        id="contenu-principal"
        className="relative mx-auto flex max-w-3xl flex-col gap-8 pt-10 sm:gap-10 sm:pt-14 lg:max-w-4xl"
      >
        <motion.h1
          id="hero-headline"
          className="font-display text-[clamp(1.65rem,5.5vw,3.25rem)] font-medium leading-[1.08] tracking-[0.14em] text-paper"
          initial={reduce ? false : { opacity: 0, y: 28 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          DISRUPTIVE BY NATURE.
        </motion.h1>
        <motion.p
          className="text-lg font-medium tracking-wide text-acid sm:text-xl"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{
            duration: 0.85,
            delay: 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          Advertising, Generated.
        </motion.p>
      </div>
    </section>
  );
}
