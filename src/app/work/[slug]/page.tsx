import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Shell, PageHeader } from "@/components/landing/Shell";
import { clients, getClientBySlug } from "@/lib/clients-data";
import { socialCases, websiteCases, websiteGrowth } from "@/lib/proof-data";

export function generateStaticParams() {
  return clients.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const client = getClientBySlug(slug);
  if (!client) return {};
  return {
    title: `${client.name} — Client Work`,
    description: `${client.summary} See what 5xSME runs for ${client.name} in ${client.city}.`,
    alternates: { canonical: `/work/${client.slug}` },
  };
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const client = getClientBySlug(slug);
  if (!client) notFound();

  // A handful of accounts also have published campaign numbers.
  const study =
    socialCases.find((c) => c.slug === slug) ??
    websiteCases.find((c) => c.slug === slug);

  const others = clients.filter((c) => c.slug !== slug).slice(0, 3);
  const gallery = client.photos ?? [];

  return (
    <Shell>
      <PageHeader
        kicker={`${client.industry} · ${client.city}`}
        title={client.name}
        intro={client.summary}
      />

      {/* --------------------------------------------------------- gallery */}
      {gallery.length > 0 && (
        <section className="lp-sec" style={{ paddingBottom: 0 }}>
          <div className="lp-shots">
            {gallery.map((shot, i) => (
              <figure className="lp-shot" key={shot.wide ?? i}>
                <Image
                  src={shot.wide ?? shot.tall ?? shot.cine ?? ""}
                  alt={`${client.name} — photograph ${i + 1}`}
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </figure>
            ))}
          </div>
        </section>
      )}

      {/* ------------------------------------------------------ what we run */}
      <section className="lp-sec">
        <div className="lp-sec-lbl">What We Run</div>
        <h2 className="lp-sec-h">
          THE WORK,
          <br />
          MONTH TO MONTH.
        </h2>
        <div className="lp-grid">
          {client.work.map((w, i) => (
            <div className="lp-cell" key={w}>
              <span className="lp-cell-n">{String(i + 1).padStart(2, "0")}</span>
              <h3>{w}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------------- numbers */}
      {study && (
        <section className="lp-sec on-paper">
          <div className="lp-sec-lbl">The Numbers</div>
          <h2 className="lp-sec-h">
            WHAT IT
            <br />
            ACTUALLY DID.
          </h2>
          <div className="lp-case-metrics" style={{ marginTop: 56 }}>
            {study.metrics.map((m) => (
              <div className="lp-metric" key={m.label}>
                <div className="lp-metric-v">{m.value}</div>
                <div className="lp-metric-l">{m.label}</div>
                {m.delta && <span className="lp-metric-d">{m.delta}</span>}
              </div>
            ))}
          </div>
          <p className="lp-sec-intro">
            {study.result}
            {websiteGrowth[study.slug] && (
              <>
                {" "}
                <strong>Traffic growth {websiteGrowth[study.slug]}.</strong>
              </>
            )}
          </p>
        </section>
      )}

      {/* ------------------------------------------------------ other work */}
      <section className="lp-sec">
        <div className="lp-sec-lbl">More Clients</div>
        <h2 className="lp-sec-h">
          WHO ELSE WE
          <br />
          WORK WITH.
        </h2>
        <div className="lp-roster">
          {others.map((c) => {
            const shot = c.photos?.[0]?.wide;
            return (
              <Link className="lp-roster-card" href={`/work/${c.slug}`} key={c.slug}>
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
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="lp-cta">
        <h2>WANT THIS RUNNING FOR YOUR BUSINESS?</h2>
        <p>
          One discovery call, an honest read on what&apos;s worth doing, and an
          itemised quote. Month to month, no lock-in.
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
