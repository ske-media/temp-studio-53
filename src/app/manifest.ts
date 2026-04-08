import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Studio 53 — Production publicitaire & vidéo IA, Genève",
    short_name: "Studio 53",
    description:
      "Agence de production publicitaire augmentée par l'IA à Genève. Disruptive by nature.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#1a1a1c",
    theme_color: "#1a1a1c",
    lang: "fr-CH",
    dir: "ltr",
    categories: ["business", "marketing", "photography"],
    icons: [
      {
        src: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
    ],
  };
}
