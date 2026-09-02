import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Figtree, IBM_Plex_Mono } from "next/font/google";
import { FloatDock } from "@/components/layout/float-dock";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SkipLink } from "@/components/a11y/skip-link";
import { JsonLd } from "@/components/seo/json-ld";
import { OG_IMAGE_URL, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";
import "./globals.css";

const display = Barlow_Condensed({
  subsets: ["latin"],
  variable: "--font-big-shoulders",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const sans = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-ibm",
  weight: ["400", "500"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#C8F542",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: [
      { url: "/favicon.ico?v=5", sizes: "16x16 32x32 48x48" },
      { url: "/icon-32.png?v=5", type: "image/png", sizes: "32x32" },
      { url: "/favicon.svg?v=5", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-icon", type: "image/png", sizes: "180x180" }],
  },
  title: {
    default: "DISTANZ, troisième roue électrique française pour fauteuil manuel",
    template: "%s · DISTANZ",
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "troisième roue électrique française",
    "fauteuil roulant manuel",
    "motorisation fauteuil",
    "DISTANZ",
    "aide PCH MDPH",
    "mobilité PMR",
    "roue clipable fauteuil",
  ],
  authors: [{ name: "DISTANZ", url: SITE_URL }],
  creator: "DISTANZ",
  publisher: "DISTANZ",
  alternates: { canonical: "/" },
  openGraph: {
    title: "DISTANZ, troisième roue électrique française",
    description: SITE_DESCRIPTION,
    locale: "fr_FR",
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: OG_IMAGE_URL,
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Personne en fauteuil manuel, troisième roue DISTANZ clipée à l’avant, en plein jour",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DISTANZ, troisième roue électrique française",
    description: SITE_DESCRIPTION,
    images: [
      {
        url: OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "Personne en fauteuil manuel, troisième roue DISTANZ clipée à l’avant, en plein jour",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  category: "mobility",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body className="min-h-screen bg-paper text-ink antialiased">
        <JsonLd />
        <SkipLink />
        <SiteHeader />
        <main id="contenu-principal">{children}</main>
        <FloatDock />
        <SiteFooter />
      </body>
    </html>
  );
}
