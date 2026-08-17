import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { LocationArea, locations } from "@/lib/locations-data";
import { services } from "@/lib/services-data";

export function LocationTemplate({ location }: { location: LocationArea }) {
  const nearby = locations.filter((l) => l.slug !== location.slug).slice(0, 4);

  return (
    <>
      <section className="border-b border-line">
        <Container className="max-w-[760px] py-16 sm:py-20">
          <Eyebrow>
            {location.city} · {location.name}
          </Eyebrow>
          <h1 className="text-balance font-display text-[34px] font-extrabold leading-[1.12] sm:text-[46px]">
            Digital Marketing Agency in {location.name}
          </h1>
          <p className="mt-6 text-[16.5px] leading-relaxed text-muted">
            {location.character} We run ads, social, video, SEO, and the
            technology behind it for businesses here — the same team for every
            channel, based in {location.city}.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact">Get a Quote</Button>
            <Button href="/services" variant="ghost">
              See Our Services
            </Button>
          </div>
        </Container>
      </section>

      <section className="bg-ink py-16 text-paper sm:py-20">
        <Container>
          <Eyebrow tone="paper">Good fit for</Eyebrow>
          <h2 className="text-balance font-display text-[26px] font-bold leading-[1.15] sm:text-[32px]">
            Businesses We Work Well With in {location.name}
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {location.goodFor.map((g) => (
              <div key={g} className="rounded-xl border border-line-on-ink bg-ink-2 px-5 py-5 text-[14.5px] font-medium text-paper/90">
                {g}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-line py-16 sm:py-20">
        <Container>
          <Eyebrow>Services here</Eyebrow>
          <h2 className="max-w-[26ch] text-balance font-display text-[26px] font-bold leading-[1.15] sm:text-[32px]">
            Every Channel, Run Locally
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="rounded-xl border-2 border-ink px-3 py-5 text-center font-body text-[13.5px] font-semibold transition-colors hover:bg-accent-soft"
              >
                {s.shortName}
              </Link>
            ))}
          </div>

          <p className="mt-10 text-[14.5px] text-muted">
            Also serving nearby:{" "}
            {nearby.map((l, i) => (
              <span key={l.slug}>
                <Link href={`/locations/${l.slug}`} className="font-semibold text-accent-ink underline underline-offset-2">
                  {l.name}
                </Link>
                {i < nearby.length - 1 ? ", " : ""}
              </span>
            ))}
            .
          </p>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
