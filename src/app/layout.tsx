import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lucas Casco - Personal website",
  description: "Frontend Developer specialized in creating unique and amazing applications.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lucascasco.com",
    title: "Lucas Casco - Personal website",
    description: "Frontend Developer specialized in creating unique and amazing applications.",
    images: [
      {
        url: "https://lucascasco.com/og.png",
        width: 1200,
        height: 630,
        alt: "Lucas Casco - Personal website",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lucas Casco - Personal website",
    creator: "@lucascascodev",
    description: "Frontend Developer specialized in creating unique and amazing applications.",
    images: [
      {
        url: "https://lucascasco.com/og.png",
        width: 1200,
        height: 630,
        alt: "Lucas Casco - Personal website",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class">{children}</ThemeProvider>
      </body>
    </html>
  );
}
