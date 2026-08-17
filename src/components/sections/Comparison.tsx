import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

const rows = [
  {
    label: "Point of contact",
    fiveX: "One team",
    freelancers: "One per channel",
    agency: "Rotating account managers",
  },
  {
    label: "Marketing + tech",
    fiveX: "Same team, same room",
    freelancers: "Never talk to each other",
    agency: "Usually outsourced separately",
  },
  {
    label: "Local Karnataka context",
    fiveX: "Built in, Bengaluru & Mangaluru based",
    freelancers: "Depends who you find",
    agency: "Rarely local",
  },
  {
    label: "Contract",
    fiveX: "No lock-in",
    freelancers: "Varies wildly",
    agency: "Usually locked in",
  },
];

export function Comparison() {
  return (
    <section className="border-b border-line py-20 sm:py-28">
      <Container>
        <div className="mx-auto max-w-[620px] text-center">
          <Eyebrow>Why 5xSME</Eyebrow>
          <h2 className="text-balance font-display text-[32px] font-bold leading-[1.15] sm:text-[42px]">
            The Alternative Isn&apos;t Actually Simpler.
          </h2>
        </div>

        <div className="mt-14 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse">
            <thead>
              <tr>
                <th className="w-[190px]" />
                <th className="rounded-t-xl border-2 border-b-0 border-ink bg-accent p-4 text-left font-display text-[16px] font-bold">
                  5xSME
                </th>
                <th className="p-4 text-left font-mono text-[12px] uppercase tracking-[0.06em] text-muted">
                  Hiring freelancers
                </th>
                <th className="p-4 text-left font-mono text-[12px] uppercase tracking-[0.06em] text-muted">
                  Traditional agency
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r.label} className="border-t border-line">
                  <td className="py-4 pr-4 font-mono text-[12px] uppercase tracking-[0.05em] text-muted">
                    {r.label}
                  </td>
                  <td
                    className={`border-x-2 border-ink bg-accent-soft p-4 text-[14.5px] font-semibold ${
                      i === rows.length - 1 ? "rounded-b-xl border-b-2" : ""
                    }`}
                  >
                    {r.fiveX}
                  </td>
                  <td className="p-4 text-[14.5px] text-muted">{r.freelancers}</td>
                  <td className="p-4 text-[14.5px] text-muted">{r.agency}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 flex justify-center">
          <Button href="/contact">Talk To Us</Button>
        </div>
      </Container>
    </section>
  );
}
