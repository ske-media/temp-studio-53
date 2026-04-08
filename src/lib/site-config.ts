/**
 * URL canonique du site (production). Définir NEXT_PUBLIC_SITE_URL sur Netlify / Vercel.
 */
export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (fromEnv) {
    try {
      const u = new URL(
        fromEnv.startsWith("http") ? fromEnv : `https://${fromEnv}`,
      );
      return u.origin;
    } catch {
      /* fallback */
    }
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL.replace(/^https?:\/\//, "")}`;
  }
  return "https://studio53.ch";
}

export function getAbsoluteUrl(path = ""): string {
  const base = getSiteUrl();
  if (!path || path === "/") return base;
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
}
