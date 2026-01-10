import "./globals.css";
import { Inter as FontSans } from "next/font/google";
import { DATA } from "@/data/resume";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/navbar";
import { GoogleAnalytics } from "@/components/google-analytics";
import { MEASUREMENT_ID } from "@/config/config";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: DATA.name,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: DATA.url,
    siteName: `${DATA.name}`,
    title: DATA.name,
    description: DATA.description,
    images: [
      {
        url: "https://lucasco.dev/og.png",
        width: 1200,
        height: 630,
        alt: `${DATA.name}`,
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
    title: `${DATA.name}`,
    description: DATA.description,
    images: [
      {
        url: "https://lucasco.dev/og.png",
        width: 1200,
        height: 630,
        alt: `${DATA.name}`,
      },
    ],
    card: "summary_large_image",
    site: "@lucascodev",
    creator: "@lucascodev",
  },
  verification: {
    google: DATA.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6",
          fontSans.variable
        )}
      >
        {MEASUREMENT_ID && <GoogleAnalytics ga_id={MEASUREMENT_ID} />}
        <ThemeProvider attribute="class" defaultTheme="dark">
          <TooltipProvider delayDuration={0}>
            {children}
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
