import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page introuvable",
  description: "La page demandée n'existe pas sur studio53.ch.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-6 bg-anthracite px-6 text-center text-paper">
      <h1 className="font-display text-2xl tracking-[0.2em]">404</h1>
      <p className="max-w-sm text-sm text-paper/60">
        Cette adresse ne mène nulle part. Revenez à l&apos;essentiel.
      </p>
      <Link
        href="/"
        className="border-b border-acid/50 text-xs font-medium tracking-[0.22em] text-acid transition-colors hover:border-acid"
      >
        STUDIO 53
      </Link>
    </div>
  );
}
