import type { Metadata, Viewport } from "next";
import { DM_Sans, Syne } from "next/font/google";
import "./globals.css";
import { FilmGrain } from "@/components/landing/FilmGrain";
import { OrganizationWebSiteJsonLd } from "@/components/seo/OrganizationWebSiteJsonLd";
import { rootMetadata } from "@/lib/metadata-defaults";

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

export const metadata: Metadata = rootMetadata;

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#1a1a1c" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1a1c" },
  ],
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
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
        <OrganizationWebSiteJsonLd />
        {children}
        <FilmGrain />
      </body>
    </html>
  );
}
