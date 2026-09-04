import type { Metadata } from "next";
import Link from "next/link";

import { Shell, PageHeader } from "@/components/landing/Shell";
import { services } from "@/lib/services-data";
import { serviceRows } from "@/lib/landing-data";
import { servicePillars, websiteProcess } from "@/lib/agency-data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Nine services under one roof — SEO, performance marketing, social media, Facebook & Instagram, WhatsApp, videography, websites, app development, and branding — run by one Bengaluru team.",
  alternates: { canonical: "/services" },
};

/** The disciplines deep enough to be worth breaking out on this page. */
const featured = [
  "seo",
  "social-media-marketing",
  "performance-marketing",
  "branding-consulting",
] as const;

export default function ServicesPage() {
  return (
    <Shell>
      <PageHeader
        kicker="What We Do"
        title={
          <>
            NINE DISCIPLINES.
            <br />
            <em>ONE ACCOUNTABLE TEAM.</em>
          </>
        }
        intro="Most agencies sell you one channel and outsource the rest. Everything below is run by the same people, from the same brief — which is the only reason your ads, your content and your website ever say the same thing."
      />

      {/* ------------------------------------------------- the nine rows */}
      <section className="lp-svcs" style={{ paddingTop: "10vh" }}>
        {serviceRows.map((s) => (
          <Link
            className="lp-svc-row"
            href={s.href}
            key={s.slug}
            data-img={s.img}
          >
            <span className="lp-svc-n">{s.n}</span>
            <span className="lp-svc-name">{s.name}</span>
            <span className="lp-svc-arr" aria-hidden>
              ◆
            </span>
          </Link>
        ))}
      </section>

      <div className="lp-svc-float" id="lpSvcFloat" aria-hidden>
        {/* eslint-disable-next-line @next/next/no-img-element -- src is swapped
            imperatively per hovered row; there is no static source to optimise. */}
        <img id="lpSvcFloatImg" alt="" />
      </div>

      {/* ------------------------------------------------ discipline detail */}
      {featured.map((slug, i) => {
        const service = services.find((s) => s.slug === slug);
        const pillars = servicePillars[slug];
        if (!service || !pillars) return null;
        return (
          <section
            className={`lp-sec${i % 2 === 0 ? "" : " on-paper"}`}
            key={slug}
            id={slug}
          >
            <div className="lp-sec-lbl">{service.shortName}</div>
            <h2 className="lp-sec-h">{service.name}</h2>
            <p className="lp-sec-intro">{service.intro}</p>
            <div className={`lp-grid${pillars.length === 5 ? " is-five" : ""}`}>
              {pillars.map((p, n) => (
                <div className="lp-cell" key={p.title}>
                  <span className="lp-cell-n">
                    {String(n + 1).padStart(2, "0")}
                  </span>
                  <h3>{p.title}</h3>
                  <ul>
                    {p.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 44 }}>
              <Link href={`/services/${slug}`} className="lp-btn lp-btn-fill">
                More on {service.shortName} →
              </Link>
            </div>
          </section>
        );
      })}

      {/* -------------------------------------------------- website process */}
      <section className="lp-sec on-paper" id="website-development">
        <div className="lp-sec-lbl">Website Development</div>
        <h2 className="lp-sec-h">
          OUR FIVE-STEP
          <br />
          BUILD PROCESS.
        </h2>
        <p className="lp-sec-intro">
          High-performance websites built for users and optimised for speed, SEO
          and growth — by the same team running your campaigns, so the page your
          ads point at was never an afterthought.
        </p>
        <div className="lp-grid is-five">
          {websiteProcess.map((p) => (
            <div className="lp-cell" key={p.n}>
              <span className="lp-cell-n">{p.n}</span>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="lp-cta">
        <h2>NOT SURE WHICH OF THE NINE YOU NEED?</h2>
        <p>
          Most clients start with one or two. We&apos;ll tell you which on the
          discovery call — including the ones you can safely skip for now.
        </p>
        <div className="lp-cta-row">
          <Link href="/contact" className="lp-btn lp-btn-fill">
            Get a Quote
          </Link>
          <Link href="/testimonials" className="lp-btn lp-btn-line">
            See The Results
          </Link>
        </div>
      </section>
    </Shell>
  );
}
