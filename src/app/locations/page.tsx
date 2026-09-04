import type { Metadata } from "next";
import Link from "next/link";

import { Shell, PageHeader } from "@/components/landing/Shell";
import { locations } from "@/lib/locations-data";

export const metadata: Metadata = {
  title: "Areas We Serve in Bengaluru",
  description:
    "5xSME works with small and medium businesses across all of Bengaluru, plus clients nationwide — remote-friendly marketing and technology for Indian SMEs, wherever you're based.",
  alternates: { canonical: "/locations" },
};

export default function LocationsIndexPage() {
  return (
    <Shell>
      <PageHeader
        kicker="Locations"
        title={
          <>
            ALL OF BENGALURU.
            <br />
            <em>ALL OF INDIA.</em>
          </>
        }
        intro="We're built and operated in Bengaluru and work with businesses right across the city — not just a handful of trendy neighbourhoods. Most of what we do is remote-friendly too, so we take on clients anywhere in India."
      />

      <section className="lp-sec">
        <div className="lp-sec-lbl">Neighbourhoods</div>
        <h2 className="lp-sec-h">
          WHERE OUR
          <br />
          CLIENTS TRADE.
        </h2>
        <div className="lp-grid">
          {locations.map((l, i) => (
            <Link className="lp-cell" href={`/locations/${l.slug}`} key={l.slug}>
              <span className="lp-cell-n">{String(i + 1).padStart(2, "0")}</span>
              <h3>{l.name}</h3>
              <p>{l.character}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="lp-cta">
        <h2>NOT IN BENGALURU? STILL FINE.</h2>
        <p>
          Ads, social, SEO, WhatsApp, websites and apps are all remote-friendly.
          Only the shoots need us in the room.
        </p>
        <div className="lp-cta-row">
          <Link href="/contact" className="lp-btn lp-btn-fill">
            Get a Quote
          </Link>
          <Link href="/services" className="lp-btn lp-btn-line">
            See Services
          </Link>
        </div>
      </section>
    </Shell>
  );
}
