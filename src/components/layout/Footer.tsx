import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { services } from "@/lib/services-data";
import { locations } from "@/lib/locations-data";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <Container className="grid grid-cols-2 gap-10 py-16 sm:grid-cols-4">
        <div className="col-span-2 flex flex-col gap-4 sm:col-span-1">
          <Link href="/" aria-label="5xSME home">
            <Logo />
          </Link>
          <p className="max-w-[26ch] text-sm text-muted-on-ink">
            Marketing and technology for small and medium businesses across India. Built and operated in Bangalore.
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted-on-ink">
            {siteConfig.legalNote}
          </p>
        </div>

        <div>
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.1em] text-muted-on-ink">
            Services
          </p>
          <ul className="flex flex-col gap-2.5">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="text-sm text-paper/85 hover:text-accent"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.1em] text-muted-on-ink">
            Bengaluru Areas
          </p>
          <ul className="flex flex-col gap-2.5">
            {locations.slice(0, 6).map((l) => (
              <li key={l.slug}>
                <Link
                  href={`/locations/${l.slug}`}
                  className="text-sm text-paper/85 hover:text-accent"
                >
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.1em] text-muted-on-ink">
            Contact
          </p>
          <ul className="flex flex-col gap-2.5 text-sm text-paper/85">
            <li>
              <a href={`tel:${siteConfig.phoneE164}`} className="hover:text-accent">
                {siteConfig.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={siteConfig.whatsappUrl} className="hover:text-accent">
                WhatsApp
              </a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-accent">
                {siteConfig.email}
              </a>
            </li>
            <li className="pt-1 text-paper/60">
              {siteConfig.cities.join(" · ")}, {siteConfig.region}
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-line-on-ink">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-muted-on-ink sm:flex-row">
          <p>© {new Date().getFullYear()} 5xSME. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy-policy" className="hover:text-accent">
              Privacy Policy
            </Link>
            <Link href="/locations" className="hover:text-accent">
              All Locations
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
