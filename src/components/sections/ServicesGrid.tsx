import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { services } from "@/lib/services-data";

export function ServicesGrid() {
  return (
    <section className="border-b border-line py-20 sm:py-28">
      <Container>
        <div className="mx-auto max-w-[620px] text-center">
          <Eyebrow>What we run</Eyebrow>
          <h2 className="text-balance font-display text-[32px] font-bold leading-[1.15] sm:text-[42px]">
            Nine Services. One Accountable Team.
          </h2>
          <p className="mt-5 text-[16px] leading-relaxed text-muted">
            Everything a growing Karnataka business needs to get found, get chosen,
            and keep the site behind it running well.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group flex flex-col justify-between rounded-2xl border-2 border-ink bg-paper p-6 transition-transform hover:-translate-y-1"
              style={{
                boxShadow: "5px 6px 0 0 var(--ink)",
              }}
            >
              <div>
                <span className="font-mono text-[12px] text-muted">0{i + 1}</span>
                <h3 className="mt-3 font-display text-[20px] font-bold leading-tight">
                  {s.name}
                </h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-muted">
                  {s.forWho}
                </p>
              </div>
              <span className="mt-6 inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.08em] text-accent-ink">
                Learn more
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none" className="transition-transform group-hover:translate-x-1">
                  <path d="M1 7H13M13 7L7.5 1.5M13 7L7.5 12.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
