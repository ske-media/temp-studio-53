import { getSiteUrl } from "@/lib/site-config";

const DESC_ORG =
  "Agence de production publicitaire et vidéo augmentée par l'intelligence artificielle, basée à Genève.";
const DESC_SITE =
  "Coming soon — inscription pour l'ouverture. Production publicitaire premium pour entreprises genevoises et Suisse romande.";

export function OrganizationWebSiteJsonLd() {
  const base = getSiteUrl();
  const orgId = `${base}/#organization`;
  const websiteId = `${base}/#website`;

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "AdvertisingAgency"],
        "@id": orgId,
        name: "Studio 53",
        url: base,
        description: DESC_ORG,
        logo: {
          "@type": "ImageObject",
          url: `${base}/favicon.ico`,
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Genève",
          addressRegion: "GE",
          addressCountry: "CH",
        },
        areaServed: [
          { "@type": "City", name: "Genève" },
          { "@type": "AdministrativeArea", name: "Canton de Genève" },
          { "@type": "Country", name: "Suisse" },
        ],
        knowsAbout: [
          "Production vidéo",
          "Publicité",
          "Intelligence artificielle créative",
          "Brand content",
        ],
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: base,
        name: "Studio 53",
        description: DESC_SITE,
        inLanguage: "fr-CH",
        publisher: { "@id": orgId },
        isPartOf: { "@id": orgId },
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
