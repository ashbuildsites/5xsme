import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { companyFacts } from "@/lib/site-config";
import { team } from "@/lib/team-data";

function initials(name: string) {
  const parts = name.trim().split(/\s+/);
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export function TrustSection() {
  return (
    <section className="bg-ink py-20 text-paper sm:py-28">
      <Container>
        <div className="mx-auto max-w-[640px] text-center">
          <Eyebrow tone="paper">Who&apos;s behind it</Eyebrow>
          <h2 className="text-balance font-display text-[32px] font-bold leading-[1.15] sm:text-[42px]">
            Built By People Who&apos;ve Actually Run Businesses.
          </h2>
          <p className="mt-5 text-[16px] leading-relaxed text-paper/75">
            No agency-speak — a small team that&apos;s worked inside NetApp,
            Microsoft, and Toyota, run a hospitality venture and a dairy farm,
            and shipped real products of their own.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m) => (
            <div
              key={m.slug}
              className="group flex flex-col overflow-hidden rounded-2xl border-2 border-line-on-ink bg-ink-2 transition-transform duration-200 hover:-translate-y-1.5"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                {m.photo ? (
                  <Image
                    src={m.photo}
                    alt={m.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-ink-3 to-ink-2">
                    <span className="select-none font-display text-[88px] font-extrabold leading-none text-paper/[0.06]">
                      {initials(m.name)}
                    </span>
                    <span className="absolute font-display text-[40px] font-bold text-accent/70">
                      {initials(m.name)}
                    </span>
                  </div>
                )}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/85 to-transparent px-5 pb-4 pt-14">
                  <h3 className="font-display text-[19px] font-bold leading-tight text-paper">
                    {m.name}
                  </h3>
                  <p className="mt-1 font-mono text-[10.5px] uppercase leading-snug tracking-[0.05em] text-accent">
                    {m.role}
                  </p>
                </div>
              </div>

              {m.bio.length > 0 && (
                <ul className="flex flex-1 flex-col gap-2.5 p-5">
                  {m.bio.map((line) => (
                    <li key={line} className="flex items-start gap-2 text-[13.5px] leading-relaxed text-paper/75">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {line}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line-on-ink bg-line-on-ink sm:grid-cols-4">
          {companyFacts.map((f) => (
            <div key={f.l} className="flex flex-col gap-1.5 bg-ink p-6 text-center">
              <span className="font-display text-[26px] font-extrabold text-accent">
                {f.n}
              </span>
              <span className="text-[13px] leading-snug text-paper/70">{f.l}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
