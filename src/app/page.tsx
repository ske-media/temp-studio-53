import type { Metadata } from "next";
import { HomeWebPageJsonLd } from "@/components/seo/HomeWebPageJsonLd";
import { LandingSplash } from "@/components/landing/LandingSplash";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      <HomeWebPageJsonLd />
      <LandingSplash />
    </>
  );
}
