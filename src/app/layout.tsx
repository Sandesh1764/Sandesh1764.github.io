import type { Metadata } from "next";
import { Source_Serif_4, Source_Sans_3 } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Providers } from "@/components/layout/Providers";
import { site } from "@/data/site";
import "./globals.css";

const serif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sandesh1764.github.io"),
  title: {
    default: `${site.name} · AI, Vision & Robotics Research`,
    template: `%s · ${site.name}`,
  },
  description: site.researchStatement,
  authors: [{ name: site.name }],
  openGraph: {
    title: `${site.name} · Academic Research`,
    description: site.researchStatement,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: site.name,
    description: site.title,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${serif.variable} ${sans.variable}`}>
      <body className="min-h-screen bg-[color:var(--bg)] font-sans text-[color:var(--fg)] antialiased">
        <Providers>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-[color:var(--accent)] focus:px-3 focus:py-2 focus:text-white"
          >
            Skip to content
          </a>
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
