import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { locations } from "@/lib/locations-data";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Areas We Serve in Bengaluru",
  description:
    "5xSME works with small and medium businesses across Bengaluru — HSR Layout, Koramangala, Indiranagar, Jayanagar, JP Nagar, Whitefield, Electronic City, and Marathahalli.",
  alternates: { canonical: "/locations" },
};

export default function LocationsIndexPage() {
  return (
    <>
      <section className="border-b border-line py-16 sm:py-20">
        <Container className="max-w-[720px] text-center">
          <Eyebrow>Locations</Eyebrow>
          <h1 className="text-balance font-display text-[36px] font-extrabold leading-[1.1] sm:text-[48px]">
            Bengaluru, Neighbourhood By Neighbourhood.
          </h1>
          <p className="mt-6 text-[16.5px] leading-relaxed text-muted">
            We&apos;re based in Bengaluru and Mangaluru, and work with businesses
            across the city.
          </p>
        </Container>
      </section>

      <section className="border-b border-line py-16 sm:py-20">
        <Container className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {locations.map((l) => (
            <Link
              key={l.slug}
              href={`/locations/${l.slug}`}
              className="rounded-2xl border-2 border-ink bg-paper p-6 transition-transform hover:-translate-y-1"
              style={{ boxShadow: "5px 6px 0 0 var(--ink)" }}
            >
              <h2 className="font-display text-[18px] font-bold">{l.name}</h2>
              <p className="mt-3 text-[13.5px] leading-relaxed text-muted">
                {l.character}
              </p>
            </Link>
          ))}
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
