"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

const FORM_NAME = "coming-soon-leads";

const ease = [0.22, 1, 0.36, 1] as const;

function formStaggerVariants(reduce: boolean) {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduce ? 0 : 0.1,
        delayChildren: reduce ? 0 : 0.35,
      },
    },
  };
}

function fieldRevealVariants(reduce: boolean) {
  if (reduce) {
    return {
      hidden: { opacity: 1, y: 0, filter: "blur(0px)" },
      show: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0 },
      },
    };
  }
  return {
    hidden: { opacity: 0, y: 14, filter: "blur(6px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.5, ease },
    },
  };
}

export function LeadForm() {
  const [status, setStatus] = useState<"idle" | "error">("idle");
  const reducePref = useReducedMotion();
  const reduce = reducePref === true;
  const router = useRouter();
  const formStagger = formStaggerVariants(reduce);
  const fieldReveal = fieldRevealVariants(reduce);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const params = new URLSearchParams();
    params.append("form-name", FORM_NAME);
    for (const [key, value] of formData.entries()) {
      if (typeof value === "string") {
        params.append(key, value);
      }
    }

    try {
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      });

      if (res.ok) {
        form.reset();
        router.push("/success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="mx-auto w-full max-w-sm">
      <motion.form
        name={FORM_NAME}
        method="POST"
        action="/__forms.html"
        onSubmit={handleSubmit}
        className="flex flex-col items-stretch gap-5"
        variants={formStagger}
        initial={reduce ? "show" : "hidden"}
        animate="show"
      >
        <input type="hidden" name="form-name" value={FORM_NAME} />

        <p className="hidden" aria-hidden="true">
          <label>
            Ne pas remplir : <input name="bot-field" tabIndex={-1} />
          </label>
        </p>

        <motion.div variants={fieldReveal} className="flex flex-col gap-2">
          <label htmlFor="email-lead" className="sr-only">
            Adresse e-mail
          </label>
          <motion.input
            id="email-lead"
            type="email"
            name="email"
            required
            autoComplete="email"
            placeholder="votre@email.ch"
            className="w-full rounded-full border border-paper/15 bg-paper/[0.06] px-5 py-3.5 text-center text-sm text-paper placeholder:text-paper/35 outline-none transition-all focus:border-acid/50 focus:bg-paper/[0.09] focus:shadow-[0_0_24px_rgba(204,255,0,0.12)]"
            whileFocus={
              reducePref
                ? undefined
                : { scale: 1.02, boxShadow: "0 0 32px rgba(204,255,0,0.15)" }
            }
            transition={{ type: "spring", stiffness: 380, damping: 22 }}
          />
        </motion.div>

        <motion.div variants={fieldReveal}>
          <motion.button
            type="submit"
            className="btn-horizon-glow w-full rounded-full border border-paper/15 bg-paper/[0.06] px-6 py-3.5 text-center text-[11px] font-medium tracking-[0.2em] text-paper transition-colors hover:border-acid/50 hover:text-acid sm:text-xs"
            whileHover={
              reducePref ? undefined : { scale: 1.03, y: -1 }
            }
            whileTap={reducePref ? undefined : { scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 24 }}
          >
            REJOINDRE L&apos;HORIZON
          </motion.button>
        </motion.div>
      </motion.form>

      {status === "error" && (
        <motion.p
          role="alert"
          initial={reducePref ? false : { opacity: 0, y: 6, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          className="mt-4 text-center text-sm text-red-300/90"
        >
          Envoi impossible pour le moment. Réessayez ou contactez-nous
          directement.
        </motion.p>
      )}
    </div>
  );
}
