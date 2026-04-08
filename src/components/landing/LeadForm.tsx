"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

const FORM_NAME = "coming-soon-leads";

export function LeadForm() {
  const [status, setStatus] = useState<"idle" | "error">("idle");
  const reduce = useReducedMotion();
  const router = useRouter();

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
      const res = await fetch("/", {
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
    <div className="w-full max-w-md">
      <form
        name={FORM_NAME}
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        action="/success"
        onSubmit={handleSubmit}
        className="flex flex-col gap-6"
      >
        <input type="hidden" name="form-name" value={FORM_NAME} />

        <p className="hidden" aria-hidden="true">
          <label>
            Ne pas remplir : <input name="bot-field" tabIndex={-1} />
          </label>
        </p>

        <div className="flex flex-col gap-2">
          <label htmlFor="email-lead" className="sr-only">
            Adresse e-mail
          </label>
          <input
            id="email-lead"
            type="email"
            name="email"
            required
            autoComplete="email"
            placeholder="votre@email.ch"
            className="w-full border-0 border-b border-paper/10 bg-transparent py-3 text-sm text-paper placeholder:text-paper/35 outline-none transition-colors focus:border-acid/50"
          />
        </div>

        <button
          type="submit"
          className="btn-horizon-glow w-full border border-paper/10 bg-paper/[0.04] px-6 py-3.5 text-center text-xs font-medium tracking-[0.22em] text-paper transition-colors hover:border-acid/40 hover:text-acid sm:text-sm"
        >
          REJOINDRE L&apos;HORIZON
        </button>
      </form>

      {status === "error" && (
        <motion.p
          role="alert"
          initial={reduce ? false : { opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 text-sm text-red-300/90"
        >
          Envoi impossible pour le moment. Réessayez ou contactez-nous
          directement.
        </motion.p>
      )}
    </div>
  );
}
