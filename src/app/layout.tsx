import "./globals.css";
import {
  Inter as FontSans,
  Archivo as FontDisplay,
  JetBrains_Mono as FontMono,
} from "next/font/google";
import { resume } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { AnchorScroll } from "@/components/anchor-scroll";
import { GoogleAnalytics } from "@/components/google-analytics";
import { MEASUREMENT_ID, SITE_URL } from "@/config/config";

const plainSummary = resume.summary.replace(/\*\*/g, "");

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

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: resume.name,
    template: `%s | ${resume.name}`,
  },
  description: plainSummary,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
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
          <Nav />
          <div className="mx-auto max-w-[780px] px-6">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
