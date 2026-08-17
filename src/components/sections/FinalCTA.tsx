import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function FinalCTA() {
  return (
    <section className="py-24 sm:py-32">
      <Container className="flex flex-col items-center gap-7 text-center">
        <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-muted">
          Ready when you are
        </p>
        <h2 className="max-w-[16ch] text-balance font-display text-[36px] font-extrabold leading-[1.1] sm:text-[52px]">
          Let&apos;s Get Your Phone Ringing.
        </h2>
        <p className="max-w-[48ch] text-[16px] leading-relaxed text-muted">
          One call to figure out what you actually need. No pressure, no bundled
          services you didn&apos;t ask for.
        </p>
        <Button href="/contact" className="mt-2">
          Get a Quote
        </Button>
      </Container>
    </section>
  );
}
