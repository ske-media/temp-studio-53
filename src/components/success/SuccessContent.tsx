"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

const easeOut = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.11,
      delayChildren: 0.18,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 32,
    filter: "blur(14px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: easeOut,
    },
  },
};

export function SuccessContent() {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <div className="success-copy relative z-20 mx-auto flex max-w-lg flex-col items-center gap-8 px-6 text-center sm:max-w-xl">
        <h1 className="font-display text-xl font-medium tracking-[0.18em] text-paper sm:text-2xl">
          BIENVENUE DANS L&apos;HORIZON.
        </h1>
        <div className="space-y-4 text-sm leading-relaxed text-paper/88 sm:text-base">
          <p>Votre place est réservée.</p>
          <p>
            Vous faites désormais partie de ceux qui ne subissent pas le futur,
            mais qui le génèrent.
          </p>
        </div>
        <p className="text-sm leading-relaxed text-paper/65 sm:text-[15px]">
          L&apos;intelligence artificielle entre les mains d&apos;experts
          créatifs est un multiplicateur de talent. Préparez-vous à
          l&apos;irréprochable.
        </p>
        <Link
          href="/"
          className="btn-horizon-glow mt-2 border border-acid/50 bg-transparent px-8 py-3.5 text-xs font-medium tracking-[0.22em] text-paper transition-colors hover:border-acid hover:text-acid sm:text-sm"
        >
          RETOUR À L&apos;ESSENTIEL
        </Link>
      </div>
    );
  }

  return (
    <motion.div
      className="success-copy relative z-20 mx-auto flex max-w-lg flex-col items-center justify-center gap-8 px-6 text-center sm:max-w-xl"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.h1
        variants={item}
        className="font-display text-xl font-medium tracking-[0.18em] text-paper sm:text-2xl md:text-[1.65rem]"
      >
        BIENVENUE DANS L&apos;HORIZON.
      </motion.h1>

      <motion.div
        variants={item}
        className="space-y-4 text-sm leading-relaxed text-paper/88 sm:text-base"
      >
        <p>Votre place est réservée.</p>
        <p>
          Vous faites désormais partie de ceux qui ne subissent pas le futur,
          mais qui le génèrent.
        </p>
      </motion.div>

      <motion.p
        variants={item}
        className="text-sm leading-relaxed text-paper/65 sm:text-[15px]"
      >
        L&apos;intelligence artificielle entre les mains d&apos;experts
        créatifs est un multiplicateur de talent. Préparez-vous à
        l&apos;irréprochable.
      </motion.p>

      <motion.div variants={item}>
        <Link
          href="/"
          className="btn-horizon-glow inline-flex border border-acid/55 bg-transparent px-8 py-3.5 text-xs font-medium tracking-[0.22em] text-paper transition-colors hover:border-acid hover:text-acid sm:text-sm"
        >
          RETOUR À L&apos;ESSENTIEL
        </Link>
      </motion.div>
    </motion.div>
  );
}
