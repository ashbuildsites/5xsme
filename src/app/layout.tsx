import type { Metadata } from "next";
import { archivo, bricolage, jakarta, plexMono } from "@/lib/fonts";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  title: {
    default:
      "5xSME — Digital Marketing & Technology Agency in Bangalore, Karnataka",
    template: "%s | 5xSME",
  },
  description:
    "5xSME is a Bengaluru based marketing and technology agency serving small and medium businesses across India — ads, social media, videography, SEO, and app development under one team.",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "5xSME",
    url: siteConfig.baseUrl,
    images: [
      {
        url: "/images/landing/og-image.png",
        width: 1200,
        height: 630,
        alt: "5xSME — marketing and technology for India's small businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/landing/og-image.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${bricolage.variable} ${jakarta.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
