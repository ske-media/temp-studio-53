import { getSiteUrl } from "@/lib/site-config";

const TITLE =
  "Studio 53 | Agence production publicitaire & vidéo IA à Genève";
const DESC =
  "Studio 53 — agence de production publicitaire augmentée par l'intelligence artificielle à Genève. Spots vidéo et campagnes premium : qualité irréprochable, délais courts.";

export function HomeWebPageJsonLd() {
  const base = getSiteUrl();
  const orgId = `${base}/#organization`;
  const websiteId = `${base}/#website`;
  const pageId = `${base}/#webpage`;

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": pageId,
        url: base,
        name: TITLE,
        description: DESC,
        isPartOf: { "@id": websiteId },
        about: { "@id": orgId },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${base}/opengraph-image`,
        },
        inLanguage: "fr-CH",
        isAccessibleForFree: true,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
