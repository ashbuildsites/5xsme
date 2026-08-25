import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TrustSection } from "@/components/sections/TrustSection";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "About 5xSME",
  description:
    "5xSME bridges the gap between digital technology and India's MSME sector — a Bengaluru & Mangaluru based team helping small and medium businesses across the country get online affordably.",
  alternates: { canonical: "/about" },
};

const values = [
  { name: "Experiments", body: "We test before we scale a channel — not the other way around." },
  { name: "Experience", body: "Real operating experience, not just marketing theory." },
  { name: "Learning", body: "What worked for one client rarely gets copy-pasted onto the next." },
  { name: "Focus", body: "Fewer channels done properly beats every channel done half-heartedly." },
  { name: "Consistency", body: "Growth compounds from showing up every week, not one good month." },
  { name: "Uniting", body: "Marketing and technology working from the same brief, not competing ones." },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-line py-16 sm:py-20">
        <Container className="max-w-[760px] text-center">
          <Eyebrow>About 5xSME</Eyebrow>
          <h1 className="text-balance font-display text-[36px] font-extrabold leading-[1.1] sm:text-[48px]">
            Bridging Digital Technology and India&apos;s MSMEs.
          </h1>
          <p className="mt-6 text-[16.5px] leading-relaxed text-muted">
            5xSME exists because most small and medium businesses in India
            are locked out of good marketing and technology — either priced out
            of it, or sold a version that doesn&apos;t fit how they actually operate.
            We built a team that does both, at rates that make sense for an SME —
            started in Bengaluru and Mangaluru, now working with businesses
            across the country.
          </p>
        </Container>
      </section>

      <section className="border-b border-line py-16 sm:py-20">
        <Container>
          <Eyebrow>How we work</Eyebrow>
          <h2 className="text-balance font-display text-[28px] font-bold leading-[1.15] sm:text-[36px]">
            Six Values, Not a Poster.
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <div key={v.name} className="rounded-xl border-2 border-ink p-6">
                <h3 className="font-display text-[17px] font-bold">{v.name}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-muted">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <TrustSection />
      <FinalCTA />
    </>
  );
}
