import type { Metadata } from "next";
import { DM_Sans, Syne } from "next/font/google";
import "./globals.css";
import { FilmGrain } from "@/components/landing/FilmGrain";

const titleFont = Syne({
  variable: "--font-title",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const bodyFont = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Studio 53 | Production Vidéo IA Genève — Bientôt",
    template: "%s | Studio 53",
  },
  description:
    "Studio 53 — agence de production publicitaire augmentée par l'IA à Genève. Production vidéo irréprochable, sans délais ni coûts traditionnels. Inscrivez-vous pour rejoindre l'horizon.",
  keywords: [
    "Studio 53",
    "Production Vidéo IA Genève",
    "publicité Genève",
    "agence créative Genève",
    "production publicitaire Suisse Romande",
    "IA créative",
  ],
  authors: [{ name: "Studio 53" }],
  openGraph: {
    title: "Studio 53 — Production Vidéo IA Genève",
    description:
      "Advertising, generated. Production publicitaire de luxe, amplifiée par l'intelligence artificielle — Genève.",
    locale: "fr_CH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio 53 | Genève",
    description:
      "Production Vidéo IA Genève — disruptive by nature. Bientôt disponible.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr-CH"
      className={`${titleFont.variable} ${bodyFont.variable} h-full antialiased`}
    >
      <body className="relative min-h-full overflow-x-hidden">
        {children}
        <FilmGrain />
      </body>
    </html>
  );
}
