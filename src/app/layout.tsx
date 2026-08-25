import type { Metadata } from "next";
import { bricolage, jakarta, plexMono } from "@/lib/fonts";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  title: {
    default: "5xSME — Digital Marketing & Technology Agency in Bangalore, Karnataka",
    template: "%s | 5xSME",
  },
  description:
    "5xSME is a Bengaluru based marketing and technology agency serving small and medium businesses across India — ads, social media, videography, SEO, and app development under one team.",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "5xSME",
    url: siteConfig.baseUrl,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${jakarta.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
