import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/site-config";

const siteUrl = getSiteUrl();

const titleDefault =
  "Studio 53 | Agence production publicitaire & vidéo IA à Genève";
const description =
  "Studio 53 — agence de production publicitaire augmentée par l'intelligence artificielle à Genève. Spots vidéo, contenus brandés et campagnes premium : qualité irréprochable, délais courts, sans le coût d'une prod traditionnelle. Inscription ouverture bientôt.";

const keywords = [
  "Studio 53",
  "production vidéo Genève",
  "production vidéo IA Genève",
  "agence publicité Genève",
  "agence créative Genève",
  "publicité Genève",
  "film publicitaire Suisse romande",
  "spot publicitaire Genève",
  "contenu vidéo entreprise Genève",
  "production publicitaire IA",
  "IA créative publicité",
  "advertising agency Geneva",
  "video production Geneva",
  "Genève production audiovisuelle",
  "Suisse romande agence vidéo",
  "brand content Genève",
  "motion design Genève",
  "régie publicitaire Genève",
];

export const rootMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: titleDefault,
    template: "%s | Studio 53",
  },
  description,
  keywords,
  applicationName: "Studio 53",
  authors: [{ name: "Studio 53", url: siteUrl }],
  creator: "Studio 53",
  publisher: "Studio 53",
  category: "marketing",
  classification: "Advertising agency",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "fr_CH",
    url: siteUrl,
    siteName: "Studio 53",
    title: "Studio 53 — Production publicitaire & vidéo IA, Genève",
    description:
      "Advertising, generated. Production publicitaire premium amplifiée par l'IA — pour les marques genevoises et la Suisse romande.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio 53 | Production vidéo & pub IA — Genève",
    description:
      "Disruptive by nature. Agence de production publicitaire augmentée par l'IA — Genève 2026.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    languages: {
      "fr-CH": siteUrl,
      fr: siteUrl,
      "x-default": siteUrl,
    },
  },
  appleWebApp: {
    capable: true,
    title: "Studio 53",
    statusBarStyle: "black-translucent",
  },
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? {
        verification: {
          google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
        },
      }
    : {}),
};
