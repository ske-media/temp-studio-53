import type { Metadata } from "next";
import { AcidEntryFlash } from "@/components/success/AcidEntryFlash";
import { DigitalDust } from "@/components/success/DigitalDust";
import { NeonPulseHeart } from "@/components/success/NeonPulseHeart";
import { SuccessContent } from "@/components/success/SuccessContent";
import { getSiteUrl } from "@/lib/site-config";

const base = getSiteUrl();

export const metadata: Metadata = {
  title: "Confirmation d'inscription",
  description:
    "Votre inscription à la liste d'accès anticipé Studio 53 est confirmée. Page technique, non indexée.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      nosnippet: true,
    },
  },
  alternates: {
    canonical: `${base}/success`,
  },
  openGraph: {
    title: "Inscription confirmée | Studio 53",
    description: "Merci — votre place est réservée.",
    url: `${base}/success`,
    siteName: "Studio 53",
    locale: "fr_CH",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Studio 53 — Inscription confirmée",
    description: "Merci pour votre inscription.",
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
