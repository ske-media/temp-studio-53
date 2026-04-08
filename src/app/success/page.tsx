import type { Metadata } from "next";
import { AcidEntryFlash } from "@/components/success/AcidEntryFlash";
import { DigitalDust } from "@/components/success/DigitalDust";
import { NeonPulseHeart } from "@/components/success/NeonPulseHeart";
import { SuccessContent } from "@/components/success/SuccessContent";

export const metadata: Metadata = {
  title: "Bienvenue dans l'horizon",
  description:
    "Confirmation d'inscription Studio 53 — page réservée aux inscrits.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function SuccessPage() {
  return (
    <div className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden bg-anthracite">
      <AcidEntryFlash />

      <div className="pointer-events-none absolute inset-0 bg-anthracite" />

      <NeonPulseHeart />
      <DigitalDust />

      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-acid/[0.03] to-transparent" />

      <SuccessContent />
    </div>
  );
}
