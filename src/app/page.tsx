import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Shell } from "@/components/landing/Shell";
import { HeroMedia } from "@/components/landing/HeroMedia";
import { Philosophy } from "@/components/landing/Philosophy";
import { ContactForm } from "@/components/landing/ContactForm";

import { siteConfig } from "@/lib/site-config";
import { clients } from "@/lib/clients-data";
import { services } from "@/lib/services-data";
import { testimonials } from "@/lib/proof-data";
import {
  aboutCopy,
  bandRows,
  collaborators,
  faqs,
  heroLines,
  marqueeItems,
  quoteWords,
  serviceRows,
  stackSlides,
  stats,
  workCards,
} from "@/lib/landing-data";

export const metadata: Metadata = {
  title:
    "5xSME — Marketing & Technology for India's Small Businesses | Bangalore",
  description:
    "Ads, social, WhatsApp, video, SEO and the technology behind them — run by one Bengaluru team instead of ten freelancers who have never spoken to each other.",
  alternates: { canonical: "/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteConfig.baseUrl}/#organization`,
      name: "5xSME",
      url: `${siteConfig.baseUrl}/`,
      email: siteConfig.email,
      telephone: siteConfig.phoneE164,
      description:
        "5xSME is a Bengaluru marketing and technology agency for small and medium businesses across India.",
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteConfig.baseUrl}/#agency`,
      name: "5xSME",
      url: `${siteConfig.baseUrl}/`,
      email: siteConfig.email,
      telephone: siteConfig.phoneE164,
      areaServed: ["Bengaluru", "Karnataka", "India"],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bengaluru",
        addressRegion: siteConfig.region,
        addressCountry: "IN",
      },
      serviceType: services.map((s) => s.name),
    },
    {
      "@type": "FAQPage",
      "@id": `${siteConfig.baseUrl}/#faq`,
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function LandingPage() {
  return (
    <Shell preloader>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ----------------------------------------------------------- hero */}
      <section className="lp-hero" id="home">
        <HeroMedia
          poster="/images/landing/hero-poster.webp"
          video="/video/hero-showreel.mp4"
          videoMobile="/video/hero-showreel-m.mp4"
          alt="Client work by 5xSME — restaurants, resorts and product brands"
        />
        <div className="lp-hero-shade" />

        <div className="lp-hero-content">
          <span className="lp-hero-kicker">
            One team · Every channel · Real growth
          </span>
          <h1 className="lp-hero-h">
            {heroLines.map((line) => (
              <span className="ln" key={line.text}>
                <span className={line.accent ? "accent" : undefined}>
                  {line.text}
                </span>
              </span>
            ))}
          </h1>
        </div>

        <div className="lp-hero-cta">
          <Link href="#work" className="lp-btn lp-btn-fill">
            See The Work →
          </Link>
          <Link href="/contact" className="lp-btn lp-btn-line">
            Get a Quote
          </Link>
        </div>

        <div className="lp-scroll" aria-hidden>
          <div className="lp-scroll-line" />
          <div className="lp-scroll-t">Scroll</div>
        </div>
      </section>

      {/* -------------------------------------------------------- marquee */}
      <div className="lp-marq" aria-hidden>
        <div className="lp-marq-in" id="lpMarq">
          {marqueeItems.map((item) => (
            <div className="lp-marq-i" key={item}>
              <span className="lp-marq-t">{item}</span>
              <span className="lp-marq-d">◆</span>
            </div>
          ))}
        </div>
      </div>

      {/* ---------------------------------------------------- client rail */}
      <div className="lp-logos">
        <h2 className="lp-sr-only">Businesses we work with</h2>
        <div className="lp-logos-in" id="lpLogoRail">
          {clients.map((c) => (
            <div className="lp-logo-i" key={c.slug}>
              {/* eslint-disable-next-line @next/next/no-img-element -- the
                  marquee clones this rail's markup to make the loop seamless;
                  next/image's hydration-time wrapper doesn't survive that. */}
              <img src={c.logo} alt={c.name} height={44} loading="lazy" />
            </div>
          ))}
        </div>
      </div>

      {/* ----------------------------------------------------- philosophy */}
      <Philosophy />

      {/* --------------------------------------------------- stack gallery */}
      <section className="lp-stack" id="lpStack">
        <div className="lp-stack-pin">
          {stackSlides.map((s) => (
            <figure className="lp-stk" key={s.name}>
              <Image
                src={s.img}
                alt={s.alt}
                fill
                sizes="90vw"
                style={{ objectFit: "cover" }}
              />
              <figcaption className="lp-stk-cap">
                <div className="lp-stk-num">{s.kicker}</div>
                <div className="lp-stk-name">{s.name}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ----------------------------------------------------------- band */}
      <section className="lp-band" aria-hidden>
        {bandRows.map((row) => (
          <div className="lp-band-r" data-sp={row.speed} key={row.big}>
            {row.variant === "italic" ? (
              <>
                <span className="lp-band-b is-italic">{row.big}</span>
                <span className="lp-band-s">{row.small}</span>
              </>
            ) : (
              <>
                <span className="lp-band-s">{row.small}</span>
                <span
                  className={`lp-band-b${
                    row.variant === "outline" ? " is-outline" : ""
                  }`}
                >
                  {row.big}
                </span>
              </>
            )}
          </div>
        ))}
      </section>

      {/* ------------------------------------------------- horizontal work */}
      <section className="lp-work" id="work">
        <div className="lp-work-head">
          <h2 className="lp-work-title">
            WORK THAT
            <em>brought the phone calls in</em>
          </h2>
          <div className="lp-work-count">
            <b id="lpRailNum">01</b> / {String(workCards.length).padStart(2, "0")}
          </div>
        </div>

        <div className="lp-work-rail" id="lpRail">
          {workCards.map((c, i) => (
            <Link className="lp-card" href={c.href} key={c.name}>
              <div className="lp-card-go" aria-hidden>
                ↗
              </div>
              <div className="lp-card-img">
                <Image
                  src={c.img}
                  alt={c.alt}
                  fill
                  sizes="(max-width: 900px) 82vw, 62vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="lp-card-info">
                <div>
                  <div className="lp-card-tags">
                    {c.tags.map((t) => (
                      <span className="lp-card-tag" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="lp-card-name">{c.name}</div>
                </div>
                <div className="lp-card-num">
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------- services */}
      <section className="lp-svcs" id="services">
        <div className="lp-svcs-head">
          <div className="lp-sec-lbl">What We Do</div>
          <h2 className="lp-sec-h">
            NINE DISCIPLINES.
            <br />
            ONE ACCOUNTABLE TEAM.
          </h2>
        </div>

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

      {/* ---------------------------------------------------------- about */}
      <section className="lp-about" id="about">
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
              WE ARE
              <br />
              5xSME.
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

      {/* --------------------------------------------------- collaborators */}
      <section className="lp-collab" id="lpCollab">
        <div className="lp-collab-pin">
          <div className="lp-collab-l">
            <div className="lp-sec-lbl">Clients</div>
            <h2 className="lp-sec-h">
              WHO WE
              <br />
              WORK WITH
            </h2>
            <p className="lp-collab-desc">
              Restaurants and bars, resorts, an Ayurveda hospital, a yoga
              studio, a jewellery brand and a foundation — mostly owner-run
              businesses across Karnataka and beyond, who wanted one team to
              answer for the whole of their marketing.
            </p>
            <div>
              {collaborators.map((c, i) => (
                <div className={`lp-cl${i === 0 ? " is-on" : ""}`} key={c.name}>
                  <span className="lp-cl-name">{c.name}</span>
                  <span className="lp-cl-role">{c.role}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lp-collab-r">
            {collaborators.map((c) => (
              <div className="lp-cimg" key={c.name}>
                <Image
                  src={c.img}
                  alt={`${c.name} — ${c.role}`}
                  fill
                  sizes="(max-width: 900px) 100vw, 56vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            ))}
            <div className="lp-collab-count" aria-hidden>
              <b id="lpCollabNum">1</b> / {collaborators.length}
            </div>
          </div>
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

      {/* --------------------------------------------------- testimonials */}
      <section className="lp-sec on-paper">
        <div className="lp-sec-lbl">In Their Words</div>
        <h2 className="lp-sec-h">
          WHAT OUR
          <br />
          CLIENTS SAY
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
        <div style={{ marginTop: 44 }}>
          <Link href="/testimonials" className="lp-btn lp-btn-fill">
            See The Numbers →
          </Link>
        </div>
      </section>

      {/* ------------------------------------------------------------ faq */}
      <section className="lp-faq" id="faq">
        <div className="lp-faq-grid">
          <div>
            <div className="lp-sec-lbl">Questions</div>
            <h2 className="lp-sec-h">
              WHAT OWNERS
              <br />
              ASK FIRST
            </h2>
          </div>
          <div className="lp-faq-list">
            {faqs.map((f, i) => (
              <details className="lp-faq-item" key={f.q} open={i === 0}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------- quote marquee */}
      <div className="lp-qmarq" aria-hidden>
        <div className="lp-qmarq-in" id="lpQuoteMarq">
          {quoteWords.map((w) => (
            <div style={{ display: "flex", alignItems: "center" }} key={w.text}>
              <span className={`lp-qm-w${w.outline ? " is-outline" : ""}`}>
                {w.text}
              </span>
              <span className="lp-qm-d">◆</span>
            </div>
          ))}
        </div>
      </div>

      {/* -------------------------------------------------------- contact */}
      <section className="lp-contact" id="contact">
        <div className="lp-sec-lbl">Start Here</div>
        <h2 className="lp-sec-h">TELL US WHAT&apos;S NOT WORKING.</h2>

        <div className="lp-contact-grid">
          <div className="lp-contact-info">
            <div className="lp-contact-art">
              <Image
                src="/images/landing/contact-art.webp"
                alt=""
                fill
                sizes="(max-width: 900px) 100vw, 40vw"
                style={{ objectFit: "cover" }}
              />
            </div>

            <div className="lp-contact-top">
              <span className="lp-contact-k">Discovery Call</span>
              <h3 className="lp-c-h">
                ONE CALL.
                <br />
                <em>A REAL PLAN.</em>
              </h3>
            </div>

            <div className="lp-contact-details">
              <a className="lp-c-row" href={`tel:${siteConfig.phoneE164}`}>
                <span className="lp-c-ico" aria-hidden>
                  ☏
                </span>
                <span className="lp-c-val">
                  <strong>Phone</strong>
                  <span>{siteConfig.phoneDisplay}</span>
                </span>
              </a>
              <a className="lp-c-row" href={`mailto:${siteConfig.email}`}>
                <span className="lp-c-ico" aria-hidden>
                  ✉
                </span>
                <span className="lp-c-val">
                  <strong>Email</strong>
                  <span>{siteConfig.email}</span>
                </span>
              </a>
              <a
                className="lp-c-row"
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener"
              >
                <span className="lp-c-ico" aria-hidden>
                  ◆
                </span>
                <span className="lp-c-val">
                  <strong>WhatsApp</strong>
                  <span>Message us directly</span>
                </span>
              </a>
              <div className="lp-c-row">
                <span className="lp-c-ico" aria-hidden>
                  ⌘
                </span>
                <span className="lp-c-val">
                  <strong>Studio</strong>
                  <span>
                    Bengaluru, {siteConfig.region} · {siteConfig.legalNote}
                  </span>
                </span>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </Shell>
  );
}
