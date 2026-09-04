import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Shell, PageHeader } from "@/components/landing/Shell";
import { Philosophy } from "@/components/landing/Philosophy";
import { process, whyUs } from "@/lib/agency-data";
import { aboutCopy, stats } from "@/lib/landing-data";
import { team } from "@/lib/team-data";

export const metadata: Metadata = {
  title: "About 5xSME",
  description:
    "5xSME bridges the gap between digital technology and India's MSME sector — a Bengaluru based team helping small and medium businesses across the country grow, affordably.",
  alternates: { canonical: "/about" },
};

const values = [
  { name: "Experiments", body: "We test before we scale a channel — not the other way around." },
  { name: "Experience", body: "Real operating experience, not just marketing theory." },
  { name: "Learning", body: "What worked for one client rarely gets copy-pasted onto the next." },
  { name: "Focus", body: "Fewer channels done properly beats every channel done half-heartedly." },
  { name: "Consistency", body: "Growth compounds from showing up every week, not one good month." },
  { name: "Uniting", body: "Marketing and technology working from the same brief, not competing ones." },
];

export default function AboutPage() {
  return (
    <Shell>
      <PageHeader
        kicker="About 5xSME"
        title={
          <>
            BRIDGING TECH
            <br />
            AND <em>INDIA&apos;S MSMEs.</em>
          </>
        }
        intro="5xSME exists because most small and medium businesses in India are locked out of good marketing and technology — either priced out of it, or sold a version that doesn't fit how they actually operate. We built a team that does both, at rates that make sense for an SME."
      />

      <Philosophy />

      {/* ------------------------------------------------------ who we are */}
      <section className="lp-about">
        <div className="lp-about-grid">
          <div className="lp-about-img">
            <Image
              src="/images/landing/about.webp"
              alt="The 5xSME team working together in their Bengaluru studio"
              fill
              sizes="(max-width: 900px) 100vw, 44vw"
              style={{ objectFit: "cover" }}
            />
            <div className="lp-about-badge">
              <b>{aboutCopy.badge.big}</b>
              <span>{aboutCopy.badge.small}</span>
            </div>
          </div>

          <div className="lp-about-txt">
            <div className="lp-sec-lbl">Who We Are</div>
            <h2 className="lp-sec-h">
              ONE TEAM,
              <br />
              NOT TEN VENDORS.
            </h2>
            <p className="lead" style={{ marginTop: 26 }}>
              {aboutCopy.lead}
            </p>
            {aboutCopy.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <div className="lp-tags">
              {aboutCopy.tags.map((t) => (
                <span className="lp-tag" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------ how we work */}
      <section className="lp-sec">
        <div className="lp-sec-lbl">How We Do It</div>
        <h2 className="lp-sec-h">
          SIX STEPS,
          <br />
          EVERY ENGAGEMENT.
        </h2>
        <p className="lp-sec-intro">
          Digital brand strategy and engagement infuses everything we do. Our
          delivery model lets brands listen to their customers, talk to
          potential clients, engage relevant audiences and increase revenue
          opportunities at every stage.
        </p>
        <div className="lp-grid">
          {process.map((p) => (
            <div className="lp-cell" key={p.n}>
              <span className="lp-cell-n">{p.n}</span>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --------------------------------------------------------- values */}
      <section className="lp-sec on-paper">
        <div className="lp-sec-lbl">What We Believe</div>
        <h2 className="lp-sec-h">
          SIX VALUES,
          <br />
          NOT A POSTER.
        </h2>
        <div className="lp-grid">
          {values.map((v, i) => (
            <div className="lp-cell" key={v.name}>
              <span className="lp-cell-n">{String(i + 1).padStart(2, "0")}</span>
              <h3>{v.name}</h3>
              <p>{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------------- stats */}
      <div className="lp-stats">
        {stats.map((s) => (
          <div className="lp-stat" key={s.label}>
            <div className="lp-stat-n" data-t={s.target} data-s={s.suffix}>
              {s.target}
              {s.suffix}
            </div>
            <div className="lp-stat-l">{s.label}</div>
          </div>
        ))}
      </div>

      {/* ------------------------------------------------------- why us */}
      <section className="lp-sec">
        <div className="lp-sec-lbl">Why Choose Us</div>
        <h2 className="lp-sec-h">
          A STRATEGIC PARTNER,
          <br />
          NOT A SUPPLIER.
        </h2>
        <div className="lp-grid">
          {whyUs.map((w, i) => (
            <div className="lp-cell" key={w.title}>
              <span className="lp-cell-n">{String(i + 1).padStart(2, "0")}</span>
              <h3>{w.title}</h3>
              <p>{w.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --------------------------------------------------- team preview */}
      <section className="lp-sec on-paper">
        <div className="lp-sec-lbl">The People</div>
        <h2 className="lp-sec-h">
          {team.length} PEOPLE WHO&apos;VE
          <br />
          RUN BUSINESSES.
        </h2>
        <p className="lp-sec-intro">
          Not agency lifers. A team that has worked inside NetApp, Microsoft and
          Toyota, run a hospitality venture and a dairy farm, and shipped
          products of their own.
        </p>
        <div style={{ marginTop: 44 }}>
          <Link href="/team" className="lp-btn lp-btn-fill">
            Meet The Team →
          </Link>
        </div>
      </section>

      <section className="lp-cta">
        <h2>LET&apos;S TALK ABOUT YOUR BUSINESS.</h2>
        <p>
          One discovery call, an honest read on what&apos;s worth doing, and an
          itemised quote. No lock-in.
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
