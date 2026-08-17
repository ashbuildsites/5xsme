import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { founders, companyFacts } from "@/lib/site-config";

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
            No agency-speak — just a team that&apos;s worked inside NetApp, Microsoft,
            and a Tier 1 agency, and has also run a hospitality venture and a dairy
            farm from scratch.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {founders.map((f) => (
            <div
              key={f.name}
              className="rounded-2xl border-2 border-line-on-ink bg-ink-2 p-7"
            >
              <h3 className="font-display text-[19px] font-bold">{f.name}</h3>
              <p className="mt-1 font-mono text-[12px] uppercase tracking-[0.06em] text-accent">
                {f.role}
              </p>
              <p className="mt-4 text-[14.5px] leading-relaxed text-paper/75">
                {f.bio}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {f.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-line-on-ink px-3 py-1 font-mono text-[11px] text-paper/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
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
