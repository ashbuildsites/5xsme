import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { QuoteForm } from "@/components/sections/QuoteForm";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Get a Quote",
  description:
    "Tell us about your business and what you need — 5xSME will get back to you within one business day with a plan and a quote.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="py-16 sm:py-20">
      <Container className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <Eyebrow>Get in touch</Eyebrow>
          <h1 className="text-balance font-display text-[36px] font-extrabold leading-[1.1] sm:text-[46px]">
            Let&apos;s Talk About Your Business.
          </h1>
          <p className="mt-6 max-w-[46ch] text-[16px] leading-relaxed text-muted">
            Fill in the form and we&apos;ll get back to you within one business day
            — or reach us directly below.
          </p>

          <div className="mt-10 flex flex-col gap-4 border-t border-line pt-8">
            <a href={`tel:${siteConfig.phoneE164}`} className="flex items-center justify-between border-b border-line pb-4 text-[15px] font-semibold">
              Call
              <span className="font-mono text-[14px] font-normal text-muted">{siteConfig.phoneDisplay}</span>
            </a>
            <a href={siteConfig.whatsappUrl} className="flex items-center justify-between border-b border-line pb-4 text-[15px] font-semibold">
              WhatsApp
              <span className="font-mono text-[14px] font-normal text-muted">{siteConfig.phoneDisplay}</span>
            </a>
            <a href={`mailto:${siteConfig.email}`} className="flex items-center justify-between pb-4 text-[15px] font-semibold">
              Email
              <span className="font-mono text-[14px] font-normal text-muted">{siteConfig.email}</span>
            </a>
          </div>

          <p className="mt-6 font-mono text-[12px] uppercase tracking-[0.06em] text-muted">
            {siteConfig.cities.join(" · ")}, {siteConfig.region} · {siteConfig.legalNote}
          </p>
        </div>

        <div className="rounded-2xl border-2 border-ink bg-paper-2 p-6 sm:p-8">
          <QuoteForm />
        </div>
      </Container>
    </section>
  );
}
