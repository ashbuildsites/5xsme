import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { StickerCard } from "@/components/ui/StickerCard";
import { siteConfig } from "@/lib/site-config";

const BURST_DURATION = 0.95;

// Kept compact on purpose: short single-line captions + a small width mean
// two stacked cards (top-anchored + bottom-anchored) fit inside the
// container's min-height with real clearance, and the whole hero fits in
// one screen on a normal laptop without scrolling.
const CARD_WIDTH = "w-[168px]";

const cards = [
  {
    src: "/images/services/performance-marketing.jpg",
    label: "Performance Marketing",
    caption: "Ads",
    pos: { top: "4%", left: "3%" },
    rotate: "-6deg",
    delay: 0.1,
    dx: "220px",
    dy: "160px",
  },
  {
    src: "/images/services/social-media-marketing.jpg",
    label: "Social Media Marketing",
    caption: "Social",
    pos: { top: "2%", left: "78%" },
    rotate: "5deg",
    delay: 0.25,
    dx: "-220px",
    dy: "160px",
  },
  {
    src: "/images/services/seo.jpg",
    label: "SEO & Google Marketing",
    caption: "SEO",
    pos: { bottom: "4%", left: "1%" },
    rotate: "4deg",
    delay: 0.4,
    dx: "220px",
    dy: "-180px",
  },
  {
    src: "/images/services/technology.jpg",
    label: "Apps & Software Development",
    caption: "Apps",
    pos: { bottom: "4%", left: "80%" },
    rotate: "-4deg",
    delay: 0.55,
    dx: "-220px",
    dy: "-180px",
  },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Container className="relative py-10 sm:py-12 xl:min-h-[600px]">
        {/* Decorative background circle */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full sm:h-[620px] sm:w-[620px]"
          style={{
            background:
              "radial-gradient(circle, var(--paper-2) 0%, var(--paper-2) 45%, transparent 72%)",
          }}
        />

        {/* Desktop scattered cards */}
        {/* Padding gives rotated cards room so their tilted corners never
            reach the section's overflow-hidden edge and clip. */}
        <div className="pointer-events-none absolute inset-0 hidden p-7 xl:block">
          {cards.map((c, i) => (
            <div
              key={c.label}
              className="card-burst pointer-events-auto absolute"
              style={{
                ...c.pos,
                animationDelay: `${c.delay}s`,
                ["--dx" as string]: c.dx,
                ["--dy" as string]: c.dy,
              }}
            >
              <div
                className="card-float-loop"
                style={{ animationDelay: `${BURST_DURATION + c.delay}s` }}
              >
                <StickerCard
                  src={c.src}
                  label={c.label}
                  caption={c.caption}
                  rotate={c.rotate}
                  priority={i === 0}
                  widthClassName={CARD_WIDTH}
                  captionClassName="text-[13px]"
                  sizes="168px"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="hero-text-enter relative z-10 mx-auto flex max-w-[680px] flex-col items-center py-4 text-center xl:py-6" style={{ animationDelay: "0.15s" }}>
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border-2 border-ink bg-paper px-4 py-1.5 font-mono text-[12px] uppercase tracking-[0.1em]">
            {siteConfig.legalNote}
          </span>

          <p className="mb-2.5 font-mono text-[12px] uppercase tracking-[0.16em] text-muted">
            One team. Every channel. Real growth.
          </p>

          <h1 className="text-balance font-display text-[38px] font-extrabold leading-[1.05] sm:text-[52px]">
            Your Marketing, <br className="hidden sm:block" />
            Handled 5x Better.
          </h1>

          <p className="mt-4 max-w-[52ch] text-balance text-[16px] leading-relaxed text-muted">
            Ads, social, WhatsApp, video, SEO, and the technology to back it
            up, run by one Bangalore-based team instead of ten freelancers
            who&apos;ve never spoken to each other.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact">Get a Quote</Button>
            <Button href="/#how-it-works" variant="ghost">
              How It Works
            </Button>
          </div>
        </div>

        {/* Mobile / tablet card strip */}
        <div className="relative z-10 -mx-5 mt-4 flex gap-4 overflow-x-auto px-5 pb-2 sm:-mx-8 sm:px-8 xl:hidden">
          {cards.map((c) => (
            <StickerCard
              key={c.label}
              src={c.src}
              label={c.label}
              caption={c.caption}
              rotate="0deg"
              className="w-[180px] shrink-0 sm:w-[220px]"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
