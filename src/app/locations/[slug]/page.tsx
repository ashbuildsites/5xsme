import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";

import { Shell, PageHeader } from "@/components/landing/Shell";
import { locations } from "@/lib/locations-data";
import { serviceRows } from "@/lib/landing-data";

export function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

function getArea(slug: string) {
  return locations.find((l) => l.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) return {};
  return {
    title: `Digital Marketing Agency in ${area.name}, ${area.city}`,
    description: `${area.character} 5xSME runs ads, social, SEO, WhatsApp, video and websites for small and medium businesses in ${area.name}.`,
    alternates: { canonical: `/locations/${area.slug}` },
  };
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) notFound();

  return (
    <Shell>
      <PageHeader
        kicker={`${area.city} · Areas We Serve`}
        title={
          <>
            MARKETING IN
            <br />
            <em>{area.name.toUpperCase()}.</em>
          </>
        }
        intro={area.character}
      />

      <section className="lp-sec">
        <div className="lp-sec-lbl">Good Fit For</div>
        <h2 className="lp-sec-h">
          BUSINESSES WE
          <br />
          WORK WITH HERE.
        </h2>
        <div className="lp-grid">
          {area.goodFor.map((g, i) => (
            <div className="lp-cell" key={g}>
              <span className="lp-cell-n">{String(i + 1).padStart(2, "0")}</span>
              <h3>{g}</h3>
            </div>
          ))}
        </div>
        {area.volumeNote && <p className="lp-sec-intro">{area.volumeNote}</p>}
      </section>

      <section className="lp-svcs">
        <div className="lp-svcs-head">
          <div className="lp-sec-lbl">What We Run</div>
          <h2 className="lp-sec-h">
            NINE DISCIPLINES,
            <br />
            IN {area.name.toUpperCase()}.
          </h2>
        </div>
        {serviceRows.map((s) => (
          <Link className="lp-svc-row" href={s.href} key={s.slug} data-img={s.img}>
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

      <section className="lp-cta">
        <h2>RUN A BUSINESS IN {area.name.toUpperCase()}?</h2>
        <p>
          One discovery call, an honest read on what&apos;s worth doing, and an
          itemised quote. No lock-in.
        </p>
        <div className="lp-cta-row">
          <Link href="/contact" className="lp-btn lp-btn-fill">
            Get a Quote
          </Link>
          <Link href="/locations" className="lp-btn lp-btn-line">
            All Areas
          </Link>
        </div>
      </section>
    </Shell>
  );
}
