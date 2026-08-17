import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { services } from "@/lib/services-data";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Marketing & Technology Services",
  description:
    "Every service 5xSME runs for Karnataka SMEs — SEO, performance marketing, social media, videography, technology, and branding & consulting.",
  alternates: { canonical: "/services" },
};

export default function ServicesIndexPage() {
  return (
    <>
      <section className="border-b border-line py-16 sm:py-20">
        <Container className="max-w-[720px] text-center">
          <Eyebrow>Services</Eyebrow>
          <h1 className="text-balance font-display text-[36px] font-extrabold leading-[1.1] sm:text-[48px]">
            Everything Under One Team.
          </h1>
          <p className="mt-6 text-[16.5px] leading-relaxed text-muted">
            Pick one, pick all six — every service is built to work with the
            others, not around them.
          </p>
        </Container>
      </section>

      <section className="border-b border-line py-16 sm:py-20">
        <Container className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group flex flex-col justify-between rounded-2xl border-2 border-ink bg-paper p-6 transition-transform hover:-translate-y-1"
              style={{ boxShadow: "5px 6px 0 0 var(--ink)" }}
            >
              <div>
                <span className="font-mono text-[12px] text-muted">0{i + 1}</span>
                <h2 className="mt-3 font-display text-[20px] font-bold leading-tight">
                  {s.name}
                </h2>
                <p className="mt-3 text-[14.5px] leading-relaxed text-muted">
                  {s.intro}
                </p>
              </div>
              <span className="mt-6 inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.08em] text-accent-ink">
                See what&apos;s included
              </span>
            </Link>
          ))}
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
