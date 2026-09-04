import type { Metadata } from "next";
import Image from "next/image";

import { Shell, PageHeader } from "@/components/landing/Shell";
import { ContactForm } from "@/components/landing/ContactForm";
import { siteConfig } from "@/lib/site-config";
import { faqs } from "@/lib/landing-data";
import { process } from "@/lib/agency-data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to 5xSME — a Bengaluru marketing and technology team for small and medium businesses. One discovery call, a real plan, an itemised quote, no lock-in.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <Shell>
      <PageHeader
        kicker="Start Here"
        title={
          <>
            TELL US WHAT&apos;S
            <br />
            <em>NOT WORKING.</em>
          </>
        }
        intro="One discovery call, an honest read on what's worth doing, and an itemised quote before you commit to anything. We reply within one working day."
      />

      <section className="lp-contact" style={{ paddingTop: "9vh" }}>
        <div className="lp-contact-grid" style={{ marginTop: 0 }}>
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
              <h2 className="lp-c-h">
                ONE CALL.
                <br />
                <em>A REAL PLAN.</em>
              </h2>
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

      {/* --------------------------------------------- what happens next */}
      <section className="lp-sec">
        <div className="lp-sec-lbl">What Happens Next</div>
        <h2 className="lp-sec-h">
          FROM ENQUIRY
          <br />
          TO LIVE CAMPAIGN.
        </h2>
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

      {/* ------------------------------------------------------------ faq */}
      <section className="lp-faq">
        <div className="lp-faq-grid">
          <div>
            <div className="lp-sec-lbl">Before You Ask</div>
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
    </Shell>
  );
}
