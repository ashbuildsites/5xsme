import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

const items = [
  "Find a freelancer for ads",
  "Find someone else for Instagram",
  "Find a video editor, separately",
  "Hope your “SEO guy” is doing anything",
  "Explain your brand to all four, again",
  "Notice none of it looks like one plan",
];

export function PainPoints() {
  return (
    <section className="bg-ink py-20 text-paper sm:py-28">
      <Container className="flex flex-col items-center gap-14 lg:flex-row lg:items-center">
        <div className="w-full max-w-[420px] shrink-0">
          <div className="rounded-2xl border-2 border-line-on-ink bg-ink-2 p-2">
            {items.map((item, i) => (
              <div
                key={item}
                className={`flex items-center gap-3 px-4 py-4 ${
                  i !== items.length - 1 ? "border-b border-line-on-ink" : ""
                }`}
              >
                <span className="h-4 w-4 shrink-0 rounded border-2 border-muted-on-ink" />
                <span className="text-[14.5px] text-paper/80">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-[520px]">
          <Eyebrow tone="paper">Sound familiar?</Eyebrow>
          <h2 className="text-balance font-display text-[32px] font-bold leading-[1.15] sm:text-[42px]">
            Marketing Shouldn&apos;t Feel Like Five Separate Jobs.
          </h2>
          <p className="mt-5 text-[16px] leading-relaxed text-paper/75">
            Most small businesses end up managing a freelancer for every channel —
            each one working from a different brief, with no one accountable for
            whether it&apos;s actually driving enquiries. We built 5xSME to be the one
            team that replaces all of them.
          </p>
        </div>
      </Container>
    </section>
  );
}
