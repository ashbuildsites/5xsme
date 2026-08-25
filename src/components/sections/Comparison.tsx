import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

const rows = [
  {
    label: "Point of contact",
    fiveX: "One team",
    freelancers: "One per channel",
    agency: "Rotating account managers",
  },
  {
    label: "Marketing + tech",
    fiveX: "Same team, same room",
    freelancers: "Never talk to each other",
    agency: "Usually outsourced separately",
  },
  {
    label: "Local Karnataka context",
    fiveX: "Built and operated in Bangalore",
    freelancers: "Depends who you find",
    agency: "Rarely local",
  },
  {
    label: "Contract",
    fiveX: "No lock-in",
    freelancers: "Varies wildly",
    agency: "Usually locked in",
  },
];

function CheckDot() {
  return (
    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-accent">
      <svg viewBox="0 0 14 14" fill="none" className="h-2.5 w-2.5 text-ink">
        <path
          d="M2 7L5.5 10.5L12 3"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function DashMark() {
  return <span className="mt-0.5 shrink-0 font-mono text-[13px] text-muted/60">–</span>;
}

export function Comparison() {
  return (
    <section className="border-b border-line py-20 sm:py-28">
      <Container>
        <div className="mx-auto max-w-[620px] text-center">
          <Eyebrow>Why 5xSME</Eyebrow>
          <h2 className="text-balance font-display text-[32px] font-bold leading-[1.15] sm:text-[42px]">
            The Alternative Isn&apos;t Actually Simpler.
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 items-start gap-6 lg:grid-cols-3 lg:gap-5">
          <div className="order-2 flex flex-col rounded-2xl border-2 border-line bg-paper-2 p-7 lg:order-1">
            <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted">
              The alternative
            </p>
            <h3 className="mt-1 font-display text-[19px] font-bold text-ink/85">
              Hiring Freelancers
            </h3>
            <dl className="mt-6 flex flex-col gap-4">
              {rows.map((r) => (
                <div key={r.label} className="border-t border-line pt-4 first:border-t-0 first:pt-0">
                  <dt className="font-mono text-[10.5px] uppercase tracking-[0.06em] text-muted">
                    {r.label}
                  </dt>
                  <dd className="mt-1.5 flex items-start gap-2 text-[14px] text-muted">
                    <DashMark />
                    {r.freelancers}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="order-1 relative flex flex-col rounded-2xl border-2 border-ink bg-paper p-7 shadow-[8px_10px_0_0_var(--ink)] lg:order-2 lg:-mt-6 lg:mb-6">
            <span className="absolute -top-4 left-7 rounded-full border-2 border-ink bg-accent px-3.5 py-1 font-mono text-[10.5px] font-bold uppercase tracking-[0.06em] text-ink">
              The 5xSME Way
            </span>
            <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.08em] text-accent-ink">
              Recommended
            </p>
            <h3 className="mt-1 font-display text-[22px] font-bold">5xSME</h3>
            <dl className="mt-6 flex flex-col gap-4">
              {rows.map((r) => (
                <div key={r.label} className="border-t border-line pt-4 first:border-t-0 first:pt-0">
                  <dt className="font-mono text-[10.5px] uppercase tracking-[0.06em] text-muted">
                    {r.label}
                  </dt>
                  <dd className="mt-1.5 flex items-start gap-2 text-[14.5px] font-semibold text-ink">
                    <CheckDot />
                    {r.fiveX}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="order-3 flex flex-col rounded-2xl border-2 border-line bg-paper-2 p-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted">
              The alternative
            </p>
            <h3 className="mt-1 font-display text-[19px] font-bold text-ink/85">
              Traditional Agency
            </h3>
            <dl className="mt-6 flex flex-col gap-4">
              {rows.map((r) => (
                <div key={r.label} className="border-t border-line pt-4 first:border-t-0 first:pt-0">
                  <dt className="font-mono text-[10.5px] uppercase tracking-[0.06em] text-muted">
                    {r.label}
                  </dt>
                  <dd className="mt-1.5 flex items-start gap-2 text-[14px] text-muted">
                    <DashMark />
                    {r.agency}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="mt-14 flex justify-center">
          <Button href="/contact">Talk To Us</Button>
        </div>
      </Container>
    </section>
  );
}
