import Link from "next/link";

import { Cursor } from "@/components/landing/Cursor";
import { Motion } from "@/components/landing/Motion";
import { SiteMenu } from "@/components/landing/SiteMenu";
import { WhatsAppFab } from "@/components/landing/WhatsAppFab";
import { siteConfig } from "@/lib/site-config";
import { services } from "@/lib/services-data";

import "@/app/landing.css";

/**
 * The chrome every page shares: brand nav, footer, custom cursor and the
 * scroll choreography.
 *
 * `preloader` is opt-in and only the home page asks for it — replaying the
 * wordmark animation on every internal navigation would be an obstacle, not
 * an entrance.
 */
export function Shell({
  children,
  preloader = false,
}: {
  children: React.ReactNode;
  preloader?: boolean;
}) {
  return (
    <div className="lp">
      {preloader && (
        <div className="lp-pre" id="lpPre" aria-hidden>
          <div className="lp-pre-field" />
          <div className="lp-pre-scan" />
          <div className="lp-pre-shutter" />
          <div className="lp-pre-stage" id="lpPreStage">
            <span className="lp-pre-mark" id="lpPreMark">
              5x<i>SME</i>
            </span>
          </div>
          <div className="lp-pre-line" />
          <div className="lp-pre-copy">Bengaluru · Karnataka</div>
          <div className="lp-pre-index">Marketing &amp; Technology</div>
        </div>
      )}

      <nav className="lp-nav">
        <Link href="/" className="lp-logo" aria-label="5xSME home">
          5x<i>SME</i>
        </Link>
        <SiteMenu />
        <Link href="/contact" className="lp-nav-talk">
          Get a Quote
        </Link>
      </nav>

      {children}

      <footer className="lp-footer">
        <div className="lp-ft-hero">
          <Link href="/" className="lp-ft-big" id="lpFtBig" aria-label="5xSME">
            5x<i>SME</i>
          </Link>
        </div>

        <div className="lp-ft-grid">
          <div>
            <Link href="/" className="lp-ft-brand">
              5x<i>SME</i>
            </Link>
            <p>
              Marketing and technology for India&apos;s small and medium
              businesses. Based in Bengaluru, working with SMEs across the
              country. {siteConfig.legalNote}.
            </p>
          </div>

          <div>
            <h5>Services</h5>
            <ul>
              {services.slice(0, 5).map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`}>{s.shortName}</Link>
                </li>
              ))}
              <li>
                <Link href="/services">All Nine →</Link>
              </li>
            </ul>
          </div>

          <div>
            <h5>Company</h5>
            <ul>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/team">Team</Link>
              </li>
              <li>
                <Link href="/testimonials">Client Results</Link>
              </li>
              <li>
                <Link href="/locations">Locations</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h5>Talk To Us</h5>
            <ul>
              <li>
                <a href={`tel:${siteConfig.phoneE164}`}>
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </li>
              <li>
                <a href={siteConfig.whatsappUrl} target="_blank" rel="noopener">
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="lp-ft-btm">
          <p>© {new Date().getFullYear()} 5xSME. All rights reserved.</p>
          <Link href="/privacy-policy">Privacy Policy</Link>
        </div>
      </footer>

      <WhatsAppFab />
      <Cursor />
      <Motion />
    </div>
  );
}

/* ------------------------------------------------------------------------ */

/**
 * The standard opening for an interior page — the same typographic weight as
 * the home hero, without the full-bleed media.
 */
export function PageHeader({
  kicker,
  title,
  intro,
}: {
  kicker: string;
  title: React.ReactNode;
  intro?: string;
}) {
  return (
    <header className="lp-phead">
      <div className="lp-sec-lbl">{kicker}</div>
      <h1 className="lp-sec-h lp-phead-h">{title}</h1>
      {intro && <p className="lp-phead-intro">{intro}</p>}
    </header>
  );
}
