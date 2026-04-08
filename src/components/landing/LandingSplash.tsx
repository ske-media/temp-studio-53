"use client";

import { motion, useReducedMotion } from "framer-motion";
import { AnimatedHeadline } from "@/components/landing/AnimatedHeadline";
import { AtmosphereBackground } from "@/components/landing/AtmosphereBackground";
import { DisruptiveMarquee } from "@/components/landing/DisruptiveMarquee";
import { EntryDisruption } from "@/components/landing/EntryDisruption";
import { FormCrosshairs } from "@/components/landing/FormCrosshairs";
import { LeadForm } from "@/components/landing/LeadForm";
import { MouseTiltCard } from "@/components/landing/MouseTiltCard";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { SiteHeader } from "@/components/landing/SiteHeader";

const ease = [0.22, 1, 0.36, 1] as const;

function staggerMainVariants(reduce: boolean) {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduce ? 0 : 0.14,
        delayChildren: reduce ? 0 : 0.08,
      },
    },
  };
}

function fadeBlurUpVariants(reduce: boolean) {
  if (reduce) {
    return {
      hidden: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      },
      show: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0 },
      },
    };
  }
  return {
    hidden: {
      opacity: 0,
      y: 28,
      filter: "blur(14px)",
    },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.9, ease },
    },
  };
}

function cardRevealVariants(reduce: boolean) {
  if (reduce) {
    return {
      hidden: {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
      },
      show: {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        transition: { duration: 0 },
      },
    };
  }
  return {
    hidden: {
      opacity: 0,
      y: 44,
      scale: 0.94,
      filter: "blur(18px)",
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 1.05, ease },
    },
  };
}

export function LandingSplash() {
  const reducePref = useReducedMotion();
  const reduce = reducePref === true;
  const staggerMain = staggerMainVariants(reduce);
  const fadeBlurUp = fadeBlurUpVariants(reduce);
  const cardReveal = cardRevealVariants(reduce);

  return (
    <div className="relative flex min-h-dvh flex-col">
      <AtmosphereBackground />
      <EntryDisruption />

      <a
        href="#inscription"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:border focus:border-paper/20 focus:bg-anthracite focus:px-3 focus:py-2 focus:text-sm focus:text-paper"
      >
        Aller au formulaire
      </a>

      <SiteHeader className="absolute left-0 right-0 top-0 z-20" />

      <main
        className="relative z-10 flex flex-1 flex-col items-center justify-center px-5 pb-28 pt-24 sm:px-8 sm:pb-32 sm:pt-28"
      >
        <motion.div
          className="flex max-w-xl flex-col items-center gap-8 sm:max-w-2xl sm:gap-10"
          variants={staggerMain}
          initial={reduce ? "show" : "hidden"}
          animate="show"
        >
          <motion.div
            variants={fadeBlurUp}
            className="flex flex-col items-center gap-4 sm:gap-5"
          >
            <div
              className={
                reduce
                  ? ""
                  : "disruptive-headline-glitch relative max-w-[95vw] will-change-transform"
              }
            >
              <AnimatedHeadline
                id="contenu-principal"
                text="DISRUPTIVE BY NATURE."
                className="font-display text-[clamp(1.35rem,5.2vw,2.85rem)] font-medium leading-[1.12] tracking-[0.16em] text-paper"
              />
            </div>
            <motion.p
              className="tagline-breathe text-base font-medium tracking-[0.12em] text-acid sm:text-lg"
              animate={
                reducePref
                  ? undefined
                  : {
                      opacity: [1, 0.88, 1],
                      textShadow: [
                        "0 0 28px rgba(204,255,0,0.22), 0 0 56px rgba(204,255,0,0.06)",
                        "0 0 40px rgba(204,255,0,0.38), 0 0 72px rgba(204,255,0,0.12)",
                        "0 0 28px rgba(204,255,0,0.22), 0 0 56px rgba(204,255,0,0.06)",
                      ],
                    }
              }
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Advertising, Generated.
            </motion.p>
            <p className="max-w-md text-sm leading-relaxed text-paper/55 sm:text-[15px]">
              IA + créatifs experts = multiplicateur de talent. Genève.
            </p>
          </motion.div>

          <motion.div
            id="inscription"
            className="relative w-full max-w-md"
            variants={cardReveal}
          >
            <MouseTiltCard className="spotlight-card relative px-6 py-8 sm:px-8 sm:py-9">
              <FormCrosshairs />
              <div className="relative z-[2]">
                <p className="mb-1 font-display text-[10px] font-semibold tracking-[0.32em] text-acid sm:text-[11px]">
                  ACCÈS ANTICIPÉ
                </p>
                <p className="mb-6 text-sm text-paper/60">
                  Une adresse. L&apos;horizon vous ouvre.
                </p>
                <LeadForm />
              </div>
            </MouseTiltCard>
          </motion.div>

          <motion.p
            variants={fadeBlurUp}
            className="max-w-md text-xs leading-relaxed text-paper/40 sm:text-[13px]"
          >
            Production publicitaire irréprochable, sans délais ni coûts
            traditionnels — pour les entreprises genevoises.
          </motion.p>
        </motion.div>
      </main>

      <motion.div
        initial={reducePref ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: reducePref ? 0 : 1.05, duration: 0.75, ease }}
      >
        <SiteFooter className="relative z-20 border-0 bg-transparent pb-16 pt-6 sm:pb-20" />
      </motion.div>

      <DisruptiveMarquee />
    </div>
  );
}
