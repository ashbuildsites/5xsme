import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

const steps = [
  {
    n: "1",
    title: "Discovery Call",
    body: "One call. You tell us about your business, your customers, and what \"working\" would actually look like.",
  },
  {
    n: "2",
    title: "Plan & Quote",
    body: "We come back with a plan across only the channels that make sense for you — and a clear, itemised quote.",
  },
  {
    n: "3",
    title: "We Build & Run",
    body: "Ads, content, video, SEO, and any tech work start moving — coordinated by one team, not four disconnected freelancers.",
  },
  {
    n: "4",
    title: "Review & Optimise",
    body: "Monthly check-ins on what's actually working, with changes made in the same cycle, not the next quarter.",
  },
  {
    n: "5",
    title: "Grow",
    body: "As enquiries pick up, we scale the channels that are working and fold in the ones that weren't ready yet.",
  },
];

export function Process() {
  return (
    <section id="how-it-works" className="scroll-mt-24 bg-ink-2 py-20 text-paper sm:py-28">
      <Container>
        <div className="mx-auto max-w-[620px] text-center">
          <Eyebrow tone="paper">How it works</Eyebrow>
          <h2 className="text-balance font-display text-[32px] font-bold leading-[1.15] sm:text-[42px]">
            Five Steps. No Guesswork.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line-on-ink bg-line-on-ink sm:grid-cols-5">
          {steps.map((s) => (
            <div key={s.n} className="flex flex-col gap-4 bg-ink-2 p-6">
              <span className="font-mono text-[13px] text-accent">{s.n}</span>
              <h3 className="font-display text-[17px] font-bold leading-tight">
                {s.title}
              </h3>
              <p className="text-[14px] leading-relaxed text-paper/70">{s.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
