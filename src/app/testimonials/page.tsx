import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Shell, PageHeader } from "@/components/landing/Shell";
import {
  adCases,
  aggregateStats,
  socialCases,
  testimonials,
  videoStats,
  websiteCases,
  websiteGrowth,
  type CaseStudy,
} from "@/lib/proof-data";
import { clients } from "@/lib/clients-data";

export const metadata: Metadata = {
  title: "Client Results",
  description:
    "Real campaign numbers and client testimonials — social media growth, website rebuilds and paid ad performance across restaurants, resorts, healthcare and retail.",
  alternates: { canonical: "/testimonials" },
};

function CaseCard({ study, growth }: { study: CaseStudy; growth?: string }) {
  return (
    <article className="lp-case">
      <header className="lp-case-head">
        <h3 className="lp-case-name">{study.name}</h3>
        <p className="lp-case-ind">{study.industry}</p>
      </header>
      <div className="lp-case-metrics">
        {study.metrics.map((m) => (
          <div className="lp-metric" key={m.label}>
            <div className="lp-metric-v">{m.value}</div>
            <div className="lp-metric-l">{m.label}</div>
            {m.delta && <span className="lp-metric-d">{m.delta}</span>}
          </div>
        ))}
      </div>
      <p className="lp-case-result">
        {study.result}
        {growth && (
          <>
            {" "}
            <strong style={{ color: "var(--acc)" }}>
              Traffic growth {growth}.
            </strong>
          </>
        )}
      </p>
    </article>
  );
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: testimonials.map((t, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Review",
      reviewBody: t.quote,
      author: { "@type": "Person", name: t.person },
      itemReviewed: { "@type": "Organization", name: "5xSME" },
      reviewRating: {
        "@type": "Rating",
        ratingValue: t.rating,
        bestRating: 5,
      },
    },
  })),
};

export default function TestimonialsPage() {
  return (
    <Shell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHeader
        kicker="Client Success Stories"
        title={
          <>
            REAL PARTNERSHIPS.
            <br />
            <em>REAL RESULTS.</em>
          </>
        }
        intro="Every number on this page comes from a live client account. Nothing here is a projection, a benchmark, or an industry average."
      />

      {/* --------------------------------------------------- testimonials */}
      <section className="lp-sec on-paper">
        <div className="lp-sec-lbl">In Their Words</div>
        <h2 className="lp-sec-h">
          WHAT OUR
          <br />
          CLIENTS SAY.
        </h2>
        <div className="lp-quotes">
          {testimonials.map((t) => (
            <blockquote className="lp-quote" key={t.person}>
              <div className="lp-quote-mark" aria-hidden>
                &ldquo;
              </div>
              <p>{t.quote}</p>
              <footer>
                <div className="lp-quote-who">{t.person}</div>
                <div className="lp-quote-co">{t.company}</div>
                <div className="lp-stars" aria-label={`${t.rating} out of 5`}>
                  {"★".repeat(t.rating)}
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------- social results */}
      <section className="lp-sec">
        <div className="lp-sec-lbl">Social Media</div>
        <h2 className="lp-sec-h">
          REAL STRATEGIES.
          <br />
          MEASURABLE RESULTS.
        </h2>
        <div className="lp-cases">
          {socialCases.map((c) => (
            <CaseCard study={c} key={c.slug} />
          ))}
        </div>
      </section>

      <div className="lp-stats">
        {aggregateStats.map((s) => (
          <div className="lp-stat" key={s.label}>
            <div className="lp-stat-n">{s.value}</div>
            <div className="lp-stat-l">{s.label}</div>
          </div>
        ))}
      </div>

      {/* ------------------------------------------------ website results */}
      <section className="lp-sec on-paper">
        <div className="lp-sec-lbl">Website Case Studies</div>
        <h2 className="lp-sec-h">
          THOUGHTFUL DESIGN.
          <br />
          MEASURABLE IMPACT.
        </h2>
        <div className="lp-cases">
          {websiteCases.map((c) => (
            <CaseCard study={c} growth={websiteGrowth[c.slug]} key={c.slug} />
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------- ad campaigns */}
      <section className="lp-sec">
        <div className="lp-sec-lbl">Paid Advertising</div>
        <h2 className="lp-sec-h">
          CAMPAIGNS THAT
          <br />
          DRIVE RESULTS.
        </h2>
        <p className="lp-sec-intro">
          High-performing campaigns across Meta, Instagram and Google Ads —
          measured on reach, click-through and what actually converted.
        </p>
        <div className="lp-cases">
          {adCases.map((c) => (
            <CaseCard study={c} key={c.slug} />
          ))}
        </div>
      </section>

      {/* --------------------------------------------------- video volume */}
      <section className="lp-sec on-paper">
        <div className="lp-sec-lbl">Video Production</div>
        <h2 className="lp-sec-h">
          CAPTURING STORIES.
          <br />
          DRIVING RESULTS.
        </h2>
        <div className="lp-grid is-four">
          {videoStats.map((v) => (
            <div className="lp-cell" key={v.label}>
              <span className="lp-cell-n">◆</span>
              <h3 style={{ fontSize: 34, letterSpacing: "-0.04em" }}>
                {v.value}
              </h3>
              <p>{v.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* -------------------------------------------------- client roster */}
      <section className="lp-sec">
        <div className="lp-sec-lbl">The Roster</div>
        <h2 className="lp-sec-h">
          WHO WE
          <br />
          WORK WITH.
        </h2>
        <div className="lp-roster">
          {clients.map((c) => {
            const shot = c.photos?.[0]?.wide;
            return (
              <article className="lp-roster-card" key={c.slug}>
                {shot && (
                  <div className="lp-roster-img">
                    <Image
                      src={shot}
                      alt={c.name}
                      fill
                      sizes="(max-width: 900px) 100vw, 33vw"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                )}
                <div className="lp-roster-body">
                  <h3 className="lp-roster-name">{c.name}</h3>
                  <p className="lp-roster-meta">
                    {c.industry} · {c.city}
                  </p>
                  <p>{c.summary}</p>
                  <ul className="lp-roster-work">
                    {c.work.map((w) => (
                      <li key={w}>{w}</li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="lp-cta">
        <h2>YOUR NUMBERS COULD BE ON THIS PAGE.</h2>
        <p>
          Tell us what&apos;s not working today and we&apos;ll come back with a
          plan and an itemised quote. No lock-in.
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
