import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Shell, PageHeader } from "@/components/landing/Shell";
import { team } from "@/lib/team-data";

export const metadata: Metadata = {
  title: "The Team",
  description:
    "The people behind 5xSME — a small Bengaluru team that has worked inside NetApp, Microsoft and Toyota, run a hospitality venture and a dairy farm, and shipped products of their own.",
  alternates: { canonical: "/team" },
};

function initials(name: string) {
  const parts = name.trim().split(/\s+/);
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export default function TeamPage() {
  return (
    <Shell>
      <PageHeader
        kicker="The People"
        title={
          <>
            BUILT BY PEOPLE
            <br />
            WHO&apos;VE <em>RUN BUSINESSES.</em>
          </>
        }
        intro="No agency-speak and no account-manager churn. The people listed here are the people who do the work — and the same ones you'll be talking to in month six."
      />

      <section className="lp-sec">
        <div className="lp-sec-lbl">Who You&apos;ll Work With</div>
        <h2 className="lp-sec-h">
          THE WHOLE
          <br />
          TEAM.
        </h2>

        <div className="lp-team">
          {team.map((m) => (
            <article className="lp-member" key={m.slug}>
              <div className="lp-member-img">
                {m.photo ? (
                  <Image
                    src={m.photo}
                    alt={m.name}
                    fill
                    sizes="(max-width: 900px) 100vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                ) : (
                  <div className="lp-member-initials" aria-hidden>
                    {initials(m.name)}
                  </div>
                )}
              </div>
              <div className="lp-member-body">
                <h3 className="lp-member-name">{m.name}</h3>
                <p className="lp-member-role">{m.role}</p>
                {m.bio.length > 0 && (
                  <ul>
                    {m.bio.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="lp-sec on-paper">
        <div className="lp-sec-lbl">How We Staff It</div>
        <h2 className="lp-sec-h">
          IN-HOUSE FIRST.
          <br />
          ALWAYS.
        </h2>
        <p className="lp-sec-intro">
          Ads, social, video, SEO and technology are run by the core team above.
          For specialist or overflow work we bring in a network of vetted
          advisors and freelancers — but you keep one point of contact, and
          nobody hands your account off to a stranger.
        </p>
      </section>

      <section className="lp-cta">
        <h2>WANT TO TALK TO THEM DIRECTLY?</h2>
        <p>
          Every discovery call is with the people who&apos;ll actually run your
          account — not a salesperson who disappears after signing.
        </p>
        <div className="lp-cta-row">
          <Link href="/contact" className="lp-btn lp-btn-fill">
            Book a Call
          </Link>
          <Link href="/about" className="lp-btn lp-btn-line">
            About 5xSME
          </Link>
        </div>
      </section>
    </Shell>
  );
}
