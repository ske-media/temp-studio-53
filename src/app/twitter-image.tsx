import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt =
  "Studio 53 — Disruptive by nature · Production publicitaire & IA · Genève";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1a1a1c",
          backgroundImage:
            "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(204,255,0,0.18), transparent 55%)",
        }}
      >
        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            letterSpacing: "0.28em",
            color: "#f4f4f1",
            textTransform: "uppercase",
            fontFamily:
              "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
          }}
        >
          STUDIO 53
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 34,
            fontWeight: 600,
            letterSpacing: "0.12em",
            color: "#ccff00",
            textTransform: "uppercase",
            fontFamily:
              "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
          }}
        >
          DISRUPTIVE BY NATURE
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 22,
            color: "rgba(244,244,241,0.72)",
            letterSpacing: "0.08em",
            fontFamily:
              "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
          }}
        >
          Production vidéo & publicité IA · Genève
        </div>
      </div>
    ),
    { ...size },
  );
}
