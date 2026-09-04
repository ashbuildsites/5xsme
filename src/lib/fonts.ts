import {
  Archivo,
  Bricolage_Grotesque,
  Plus_Jakarta_Sans,
  IBM_Plex_Mono,
} from "next/font/google";

// The landing page's whole voice is Archivo at its widest optical width
// (wdth 125) — the `wdth` axis is what makes the display type read as
// "Archivo Expanded" rather than the default narrow cut.
export const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
  style: ["normal", "italic"],
  display: "swap",
});

export const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});
