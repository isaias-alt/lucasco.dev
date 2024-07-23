import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Header from "@/components/Header";
import { getSiteMetadata } from "@/utils/getSiteMetadata";

const inter = Inter({ subsets: ["latin"] });

export const metadata = getSiteMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} max-w-4xl mx-auto p-8`}>
        <ThemeProvider attribute="class">
          <Header />
          <div>{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
