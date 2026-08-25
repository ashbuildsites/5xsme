import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { clients } from "@/lib/clients-data";

export function ClientsSection() {
  return (
    <section className="border-b border-line py-20 sm:py-28">
      <Container>
        <div className="mx-auto max-w-[560px] text-center">
          <Eyebrow>Who we work with</Eyebrow>
          <h2 className="text-balance font-display text-[30px] font-bold leading-[1.15] sm:text-[38px]">
            Real Karnataka Businesses, Not Case Study Filler.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {clients.map((c) => (
            <div
              key={c.name}
              className="flex flex-col items-center gap-3 rounded-2xl border-2 border-ink bg-paper p-5"
            >
              <div className="relative h-16 w-full">
                <Image
                  src={c.logo}
                  alt={c.name}
                  fill
                  sizes="160px"
                  className="object-contain"
                />
              </div>
              <p className="text-center font-mono text-[11px] uppercase tracking-[0.04em] text-muted">
                {c.name}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
