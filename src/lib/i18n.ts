export const locales = ["en", "es"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  es: "ES",
};

export const ogLocales: Record<Locale, string> = {
  en: "en_US",
  es: "es_ES",
};

export function localeHref(locale: Locale): string {
  return locale === defaultLocale ? "/" : `/${locale}`;
}

export function cvHref(locale: Locale): string {
  return locale === "es"
    ? "https://cv.lucasco.dev/es"
    : "https://cv.lucasco.dev";
}

/**
 * Maps the optional catch-all segment to a locale.
 * `/` is English, `/es` is Spanish, anything else is not a valid page.
 */
export function resolveLocale(segments?: string[]): Locale | null {
  if (!segments || segments.length === 0) return defaultLocale;
  if (segments.length === 1 && segments[0] === "es") return "es";
  return null;
}
