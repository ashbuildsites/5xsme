import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { StickerCard } from "@/components/ui/StickerCard";
import { siteConfig } from "@/lib/site-config";

const cards = [
  { src: "/images/services/performance-marketing.jpg", label: "Performance Marketing", top: "6%", left: "1%", rotate: "-6deg" },
  { src: "/images/services/social-media-marketing.jpg", label: "Social Media", top: "3%", left: "78%", rotate: "5deg" },
  { src: "/images/services/seo.jpg", label: "SEO", top: "58%", left: "0%", rotate: "4deg" },
  { src: "/images/services/technology.jpg", label: "Technology & Apps", top: "54%", left: "80%", rotate: "-4deg" },
  { src: "/images/services/branding-consulting.jpg", label: "Branding", top: "80%", left: "40%", rotate: "-3deg" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <Container className="relative py-16 sm:py-20">
        {/* Desktop scattered cards */}
        <div className="pointer-events-none absolute inset-0 hidden xl:block">
          {cards.map((c) => (
            <div
              key={c.label}
              className="pointer-events-auto absolute"
              style={{ top: c.top, left: c.left }}
            >
              <StickerCard src={c.src} label={c.label} rotate={c.rotate} />
            </div>
          ))}
        </div>

        <div className="relative z-10 mx-auto flex max-w-[720px] flex-col items-center py-8 text-center xl:py-24">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border-2 border-ink bg-paper px-4 py-1.5 font-mono text-[12px] uppercase tracking-[0.1em]">
            {siteConfig.legalNote} · Bengaluru &amp; Mangaluru
          </span>

          <p className="mb-3 font-mono text-[12px] uppercase tracking-[0.16em] text-muted">
            One team. Every channel. Real growth.
          </p>

          <h1 className="text-balance font-display text-[42px] font-extrabold leading-[1.05] sm:text-[58px]">
            Your Marketing, <br className="hidden sm:block" />
            Handled 5x Better.
          </h1>

          <p className="mt-6 max-w-[52ch] text-balance text-[17px] leading-relaxed text-muted">
            Ads, social, video, SEO, and the technology to back it up — run by one
            Karnataka-based team instead of five freelancers who&apos;ve never spoken to
            each other.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact">Get a Quote</Button>
            <Button href="/#how-it-works" variant="ghost">
              How It Works
            </Button>
          </div>

          <p className="mt-6 font-mono text-[12px] uppercase tracking-[0.08em] text-muted">
            GST &amp; MSME registered · No lock-in contracts
          </p>
        </div>

        {/* Mobile / tablet card strip */}
        <div className="relative z-10 -mx-5 mt-4 flex gap-4 overflow-x-auto px-5 pb-2 sm:-mx-8 sm:px-8 xl:hidden">
          {cards.map((c) => (
            <StickerCard key={c.label} src={c.src} label={c.label} rotate="0deg" className="w-[180px] shrink-0 sm:w-[220px]" />
          ))}
        </div>
      </Container>
    </section>
  );
}
