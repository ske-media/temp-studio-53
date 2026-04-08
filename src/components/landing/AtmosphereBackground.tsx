"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Un seul visuel (texture ciné), pas de superposition de photos.
 * Le reste est gradient + lueurs animées.
 */
export function AtmosphereBackground() {
  const reduce = useReducedMotion();

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-anthracite">
      <motion.div
        className="absolute inset-0"
        aria-hidden
        animate={
          reduce
            ? undefined
            : {
                scale: [1, 1.04, 1],
              }
        }
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/hero-door.png"
          alt=""
          fill
          priority
          className="scale-110 object-cover opacity-[0.22] blur-[3px] saturate-[0.85] sm:opacity-[0.28] sm:blur-[2px]"
          sizes="100vw"
        />
      </motion.div>

      {/* Nappe acid — horizon unique */}
      <div
        className="absolute inset-x-0 bottom-0 h-[65%] bg-gradient-to-t from-acid/[0.18] via-acid/[0.04] to-transparent"
        aria-hidden
      />
      <motion.div
        className="absolute top-[42%] h-[min(70vh,560px)] w-[min(140vw,900px)] rounded-full bg-acid/[0.06] blur-[100px]"
        aria-hidden
        style={{ left: "50%", x: "-50%" }}
        animate={
          reduce
            ? undefined
            : {
                y: [-12, 10, -8, -12],
                scale: [1, 1.045, 0.985, 1],
              }
        }
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Anneaux lents — profondeur */}
      {!reduce && (
        <>
          <motion.div
            className="absolute left-1/2 top-[46%] size-[min(88vw,520px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-acid/[0.07]"
            aria-hidden
            animate={{ rotate: [0, 360], scale: [1, 1.03, 1] }}
            transition={{
              rotate: { duration: 140, repeat: Infinity, ease: "linear" },
              scale: { duration: 18, repeat: Infinity, ease: "easeInOut" },
            }}
          />
          <motion.div
            className="absolute left-1/2 top-[46%] size-[min(72vw,420px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-paper/[0.06]"
            aria-hidden
            animate={{ rotate: [360, 0] }}
            transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
          />
        </>
      )}

      {/* Ligne horizon « néon » */}
      <div className="absolute inset-x-0 top-[58%] flex justify-center sm:top-[56%]">
        <motion.div
          className="h-px w-[min(88vw,520px)] bg-gradient-to-r from-transparent via-acid/70 to-transparent"
          style={{ boxShadow: "0 0 24px rgba(204,255,0,0.35)" }}
          animate={
            reduce
              ? undefined
              : {
                  opacity: [0.35, 0.95, 0.35],
                  scaleX: [0.72, 1, 0.72],
                }
          }
          transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Halo derrière la zone centrale (focus formulaire) */}
      <motion.div
        className="absolute left-1/2 top-[48%] h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-acid/[0.04] blur-[72px] sm:h-[420px] sm:w-[420px]"
        animate={
          reduce
            ? undefined
            : {
                opacity: [0.5, 0.85, 0.5],
                scale: [0.92, 1.05, 0.92],
              }
        }
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />

      {/* Grille technique — dérive lente */}
      <motion.div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(244,244,241,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(244,244,241,0.5) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
        aria-hidden
        animate={
          reduce
            ? undefined
            : {
                backgroundPosition: ["0px 0px", "48px 48px"],
              }
        }
        transition={{
          duration: 72,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-anthracite via-transparent to-anthracite" />
    </div>
  );
}
