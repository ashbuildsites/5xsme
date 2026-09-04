import Image from "next/image";
import Link from "next/link";

import { Shell, PageHeader } from "@/components/landing/Shell";
import { servicePillars } from "@/lib/agency-data";
import { serviceImage } from "@/lib/landing-data";
import { services, type Service } from "@/lib/services-data";

/** The shared body for every `/services/<slug>` page. */
export function ServiceDetail({ service }: { service: Service }) {
  const pillars = servicePillars[service.slug];
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 4);

  return (
    <Shell>
      <PageHeader kicker={service.shortName} title={service.h1} intro={service.intro} />

      {/* --------------------------------------------------- what's inside */}
      <section className="lp-about" style={{ paddingTop: "12vh" }}>
        <div className="lp-about-grid">
          <div className="lp-about-img">
            <Image
              src={serviceImage(service.slug)}
              alt={service.name}
              fill
              sizes="(max-width: 900px) 100vw, 44vw"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="lp-about-txt">
            <div className="lp-sec-lbl">What&apos;s Included</div>
            <h2 className="lp-sec-h">
              WHAT YOU
              <br />
              ACTUALLY GET.
            </h2>
            <ul className="lp-tick" style={{ marginTop: 30 }}>
              {service.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ discipline detail */}
      {pillars && (
        <section className="lp-sec">
          <div className="lp-sec-lbl">In Detail</div>
          <h2 className="lp-sec-h">
            THE WHOLE
            <br />
            DISCIPLINE.
          </h2>
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
        </section>
      )}

      {/* ---------------------------------------------------------- for who */}
      <section className="lp-sec on-paper">
        <div className="lp-sec-lbl">Who It&apos;s For</div>
        <h2 className="lp-sec-h" style={{ maxWidth: "22ch" }}>
          {service.forWho}
        </h2>
      </section>

      {/* -------------------------------------------------------- the rest */}
      <section className="lp-svcs" style={{ paddingTop: "12vh" }}>
        <div className="lp-svcs-head">
          <div className="lp-sec-lbl">Also Available</div>
          <h2 className="lp-sec-h">
            THE OTHER
            <br />
            DISCIPLINES.
          </h2>
        </div>
        {others.map((s, i) => (
          <Link
            className="lp-svc-row"
            href={`/services/${s.slug}`}
            key={s.slug}
            data-img={serviceImage(s.slug)}
          >
            <span className="lp-svc-n">{i + 1}</span>
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
        <h2>WANT {service.shortName.toUpperCase()} RUNNING PROPERLY?</h2>
        <p>
          One discovery call, a plan built around your actual numbers, and an
          itemised quote. Month to month, no lock-in.
        </p>
        <div className="lp-cta-row">
          <Link href="/contact" className="lp-btn lp-btn-fill">
            Get a Quote
          </Link>
          <Link href="/services" className="lp-btn lp-btn-line">
            All Nine Services
          </Link>
        </div>
      </section>
    </Shell>
  );
}
