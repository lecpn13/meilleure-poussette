import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// ─── Police ─────────────────────────────────────────────────────────────────

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

// ─── Constantes ─────────────────────────────────────────────────────────────

const BASE_URL = "https://meilleure-poussette.fr";
const SITE_NAME = "MeilleurePoussette.fr";
const DEFAULT_TITLE = "Meilleure Poussette 2026 — Comparatif & Avis Honnêtes";
const DEFAULT_DESC =
  "Comparez les meilleures poussettes 2026 : compactes, cannes, doubles, tout-terrain. Avis détaillés, tableaux comparatifs et meilleures offres Amazon France.";
const OG_IMAGE = `${BASE_URL}/og-image.jpg`;

// ─── Viewport (séparé de metadata depuis Next.js 14) ────────────────────────

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1e3a5f",
};

// ─── Métadonnées globales ────────────────────────────────────────────────────

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESC,

  keywords: [
    "meilleure poussette",
    "comparatif poussette 2026",
    "poussette compacte",
    "poussette canne",
    "poussette double",
    "poussette tout terrain",
    "poussette bébé",
    "avis poussette",
    "poussette cabine avion",
  ],

  authors: [{ name: SITE_NAME, url: BASE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,

  // ── Open Graph ──────────────────────────────────────────────────────────
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: BASE_URL,
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESC,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "MeilleurePoussette.fr — Comparatif poussettes 2026",
      },
    ],
  },

  // ── Twitter Card ────────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESC,
    images: [OG_IMAGE],
    creator: "@meilleurepousse",
    site: "@meilleurepousse",
  },

  // ── Icônes ──────────────────────────────────────────────────────────────
  icons: {
    icon: [
      { url: "/favicon.ico",            sizes: "any"  },
      { url: "/icon.svg",               type: "image/svg+xml" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
  },

  // ── Robots ──────────────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ── Canonique ────────────────────────────────────────────────────────────
  alternates: {
    canonical: BASE_URL,
    languages: { "fr-FR": BASE_URL },
  },
};

// ─── Schema.org WebSite ─────────────────────────────────────────────────────

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: BASE_URL,
  description: DEFAULT_DESC,
  inLanguage: "fr-FR",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${BASE_URL}/?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

// ─── Layout ─────────────────────────────────────────────────────────────────

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="min-h-screen flex flex-col antialiased font-sans">
        {/* Schema.org WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />

        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
