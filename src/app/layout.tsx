import type { Metadata, Viewport } from "next";
import { Fraunces, Figtree } from "next/font/google";
import "./globals.css";

import { site, analyticsConfig } from "@/lib/site";
import { siteMetadataBase } from "@/lib/seo";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import { CartProvider } from "@/context/cart";
import { WishlistProvider } from "@/context/wishlist";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/layout/CartDrawer";
import { JsonLd } from "@/components/seo/JsonLd";
import { Analytics, GtmNoScript } from "@/components/analytics/Analytics";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
});

const figtree = Figtree({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-figtree",
});

export const metadata: Metadata = {
  metadataBase: siteMetadataBase,
  title: {
    default: "Benefigs — Buah Tin Segar, Pokok Tin & Produk Tin Malaysia",
    template: "%s · Benefigs",
  },
  description:
    "Beli buah tin segar premium, pokok tin yang sihat dan produk tin artisan dari Benefigs — ladang buah tin bertauliah MyGAP di Malaysia. Masak di pokok, ditanam sepanjang tahun, dihantar ke seluruh negara.",
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.legalName,
  keywords: [
    "buah tin",
    "fresh figs Malaysia",
    "fig farm Malaysia",
    "fig trees",
    "anak pokok tin",
    "fig jam",
    "teh daun tin",
    "fig leaf tea",
    "buah tin segar",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "ms_MY",
    url: site.url,
    title: "Benefigs — Buah Tin Segar, Pokok Tin & Produk Tin Malaysia",
    description:
      "Destinasi buah tin premium Malaysia. Buah tin segar masak di pokok, pokok tin yang sihat dan produk tin artisan — ditanam di ladang bertauliah MyGAP kami, dihantar ke seluruh negara.",
  },
  twitter: { card: "summary_large_image" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  icons: { icon: "/favicon.ico" },
  formatDetection: { telephone: false },
  ...(analyticsConfig.googleSiteVerification
    ? { verification: { google: analyticsConfig.googleSiteVerification } }
    : {}),
};

export const viewport: Viewport = {
  themeColor: "#7c1d3f",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ms-MY"
      className={`${fraunces.variable} ${figtree.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-dvh flex-col">
        <script
          dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }}
        />
        <a href="#main" className="skip-link">
          Terus ke kandungan
        </a>

        <JsonLd data={[organizationSchema(), websiteSchema()]} />

        <WishlistProvider>
          <CartProvider>
            <AnnouncementBar />
            <Header />
            <main id="main" className="flex-1">
              {children}
            </main>
            <Footer />
            <CartDrawer />
          </CartProvider>
        </WishlistProvider>

        <Analytics />
        <GtmNoScript />
      </body>
    </html>
  );
}
