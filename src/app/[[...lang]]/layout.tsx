import "../globals.css";
import {
  Inter as FontSans,
  Archivo as FontDisplay,
  JetBrains_Mono as FontMono,
} from "next/font/google";
import { getResume } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { AnchorScroll } from "@/components/anchor-scroll";
import { GoogleAnalytics } from "@/components/google-analytics";
import { MEASUREMENT_ID, SITE_URL } from "@/config/config";
import {
  defaultLocale,
  localeHref,
  ogLocales,
  resolveLocale,
} from "@/lib/i18n";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fontDisplay = FontDisplay({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  variable: "--font-display",
  display: "swap",
});

const fontMono = FontMono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ lang?: string[] }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ lang: [] }, { lang: ["es"] }];
}

export async function generateMetadata({
  params,
}: Pick<LayoutProps, "params">): Promise<Metadata> {
  const { lang } = await params;
  const locale = resolveLocale(lang) ?? defaultLocale;
  const resume = getResume(locale);
  const plainSummary = resume.summary.replace(/\*\*/g, "");

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: resume.name,
      template: `%s | ${resume.name}`,
    },
    description: plainSummary,
    alternates: {
      canonical: localeHref(locale),
      languages: {
        en: "/",
        es: "/es",
        "x-default": "/",
      },
    },
    openGraph: {
      type: "website",
      locale: ogLocales[locale],
      url: localeHref(locale),
      siteName: resume.name,
      title: resume.name,
      description: plainSummary,
      images: [
        {
          url: "https://lucasco.dev/og.png",
          width: 1200,
          height: 630,
          alt: resume.name,
        },
      ],
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
    twitter: {
      title: resume.name,
      description: plainSummary,
      images: [
        {
          url: "https://lucasco.dev/og.png",
          width: 1200,
          height: 630,
          alt: resume.name,
        },
      ],
      card: "summary_large_image",
      site: "@lucascodev",
      creator: "@lucascodev",
    },
    verification: {
      google: SITE_URL,
    },
  };
}

export default async function RootLayout({ children, params }: LayoutProps) {
  const { lang } = await params;
  const locale = resolveLocale(lang) ?? defaultLocale;

  return (
    <html lang={locale} className="dark" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontDisplay.variable,
          fontMono.variable
        )}
      >
        {MEASUREMENT_ID && <GoogleAnalytics ga_id={MEASUREMENT_ID} />}
        <AnchorScroll />
        <div className="fade-in">
          <Nav locale={locale} />
          <div className="mx-auto max-w-[780px] px-6">{children}</div>
          <Footer locale={locale} />
        </div>
      </body>
    </html>
  );
}
