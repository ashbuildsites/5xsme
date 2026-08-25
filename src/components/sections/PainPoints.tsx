import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

const items = [
  "Google & Meta ad campaigns, managed end-to-end",
  "Instagram & Facebook content, planned and posted weekly",
  "Professional shoots for reels, products, and brand stories",
  "SEO built around real local search demand",
  "WhatsApp broadcasts that read like messages, not spam",
  "A website built for conversions, not just looks",
  "One consistent brand voice across every channel",
  "Monthly reporting tied to actual enquiries",
  "A single team accountable for all of it",
  "Support that responds in hours, not weeks",
];

// Faster loop, and each row's "check" is timed to the moment it actually
// scrolls into the visible (unmasked) area, not an arbitrary fixed percent —
// so the checked/unchecked boundary always tracks real scroll position
// instead of drifting through the list over time.
const DURATION = 13;
const VISIBLE_ENTRY_POINT = 0.68;
const doubled = [...items, ...items];

export function PainPoints() {
  return (
    <section className="pb-20 sm:pb-28">
      <Container>
        <div className="relative overflow-hidden rounded-[32px] border-2 border-ink bg-ink px-6 py-12 sm:px-10 sm:py-14 lg:flex lg:items-center lg:gap-16 lg:px-16 lg:py-20">
          <div
            className="relative h-[380px] w-full shrink-0 overflow-hidden rounded-2xl lg:h-[440px] lg:max-w-[400px]"
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent, black 14%, black 86%, transparent)",
              maskImage:
                "linear-gradient(to bottom, transparent, black 14%, black 86%, transparent)",
            }}
          >
            <div
              className="marquee-up flex flex-col"
              style={{ ["--marquee-duration" as string]: `${DURATION}s` }}
            >
              {doubled.map((item, idx) => {
                const i = idx % items.length;
                const delay = DURATION * (i / items.length - VISIBLE_ENTRY_POINT);
                const varStyle = {
                  ["--check-delay" as string]: `${delay}s`,
                  ["--marquee-duration" as string]: `${DURATION}s`,
                };
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-3 border-b border-line-on-ink px-2 py-4"
                  >
                    <span
                      className="check-border relative h-5 w-5 shrink-0 overflow-hidden rounded border-2"
                      style={varStyle}
                    >
                      <span className="check-fill absolute inset-0 bg-accent" style={varStyle} />
                      <svg
                        viewBox="0 0 14 14"
                        fill="none"
                        className="check-fill relative h-full w-full p-[3px] text-ink"
                        style={varStyle}
                      >
                        <path
                          d="M2 7L5.5 10.5L12 3"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="text-[14.5px] text-paper/80">{item}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <span className="absolute left-[38%] top-[10%] z-10 hidden -rotate-3 items-center rounded-2xl rounded-bl-sm bg-accent px-4 py-2 font-body text-[13px] font-semibold text-ink shadow-[3px_4px_0_0_var(--ink)] lg:flex">
            Wait — all of this, one team?
          </span>

          <div className="mt-10 flex-1 lg:mt-0">
            <Eyebrow tone="paper">What you get</Eyebrow>
            <h2 className="text-balance font-display text-[32px] font-bold leading-[1.15] text-paper sm:text-[42px]">
              One Team, Every Box Checked.
            </h2>
            <p className="mt-5 max-w-[46ch] text-[16px] leading-relaxed text-paper/75">
              Every channel your business needs — ads, content, SEO,
              WhatsApp, and the website behind it — planned, built, and run
              by the same team. Nothing handed off between five different
              freelancers who&apos;ve never spoken to each other.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
