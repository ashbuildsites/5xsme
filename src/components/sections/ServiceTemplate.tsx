import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Service, services } from "@/lib/services-data";
import { locations } from "@/lib/locations-data";

const imagedSlugs = new Set([
  "performance-marketing",
  "social-media-marketing",
  "seo",
  "technology",
  "branding-consulting",
]);

export function ServiceTemplate({ service }: { service: Service }) {
  const hasImage = imagedSlugs.has(service.slug);
  const otherServices = services.filter((s) => s.slug !== service.slug);
  const featuredLocations = locations.slice(0, 4);

  return (
    <>
      <section className="border-b border-line">
        <Container className="grid grid-cols-1 items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Eyebrow>Service</Eyebrow>
            <h1 className="text-balance font-display text-[36px] font-extrabold leading-[1.1] sm:text-[46px]">
              {service.h1}
            </h1>
            <p className="mt-6 max-w-[56ch] text-[16.5px] leading-relaxed text-muted">
              {service.intro}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact">Get a Quote</Button>
              <Button href="/services" variant="ghost">
                All Services
              </Button>
            </div>
          </div>

          {hasImage && (
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[380px] overflow-hidden rounded-2xl border-2 border-ink shadow-[8px_10px_0_0_var(--ink)]">
              <Image
                src={`/images/services/${service.slug}.jpg`}
                alt={service.h1}
                fill
                sizes="380px"
                className="object-cover"
                priority
              />
            </div>
          )}
        </Container>
      </section>

      <section className="bg-ink py-16 text-paper sm:py-20">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Eyebrow tone="paper">What&apos;s included</Eyebrow>
            <h2 className="text-balance font-display text-[28px] font-bold leading-[1.15] sm:text-[34px]">
              What You Actually Get
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-paper/70">
              {service.forWho}
            </p>
          </div>
          <ul className="flex flex-col gap-px overflow-hidden rounded-2xl border border-line-on-ink bg-line-on-ink">
            {service.includes.map((item) => (
              <li key={item} className="flex items-start gap-3 bg-ink-2 px-6 py-5">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />
                <span className="text-[15px] leading-relaxed text-paper/90">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-b border-line py-16 sm:py-20">
        <Container>
          <Eyebrow>Also part of the team</Eyebrow>
          <h2 className="max-w-[24ch] text-balance font-display text-[26px] font-bold leading-[1.15] sm:text-[32px]">
            Often Paired With {service.name}
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="rounded-xl border-2 border-ink px-4 py-5 text-center font-body text-[14px] font-semibold transition-colors hover:bg-accent-soft"
              >
                {s.name}
              </Link>
            ))}
          </div>

          <p className="mt-10 text-[14.5px] text-muted">
            We work with businesses across{" "}
            {featuredLocations.map((l, i) => (
              <span key={l.slug}>
                <Link href={`/locations/${l.slug}`} className="font-semibold text-accent-ink underline underline-offset-2">
                  {l.name}
                </Link>
                {i < featuredLocations.length - 2 ? ", " : i === featuredLocations.length - 2 ? ", and " : ""}
              </span>
            ))}
            , and elsewhere in Bengaluru.
          </p>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
