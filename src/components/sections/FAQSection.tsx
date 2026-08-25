"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

const faqs = [
  {
    q: "Do you handle everything in-house, or outsource it?",
    a: "Ads, social, video, SEO, and technology are all run by our core team, with a network of vetted advisors and freelancers we bring in for specialist or overflow work. You always have one point of contact, even when others are involved behind the scenes.",
  },
  {
    q: "Do we need to sign a long contract?",
    a: "No. We work month to month. If it's not working, you're not locked into a year of it.",
  },
  {
    q: "We only need one or two services, not all nine — is that fine?",
    a: "Yes. Most clients start with one or two channels — usually SEO or ads plus social — and add others once those are working. The plan on your quote call reflects exactly what you need, nothing bundled in that you didn't ask for.",
  },
  {
    q: "Do you only work with businesses in Bengaluru and Mangaluru?",
    a: "No — we're based there, but most of what we do (ads, social, SEO, WhatsApp, websites, apps) is entirely remote-friendly, and we work with SMEs across India. Local shoots and in-person work are easiest to schedule in Karnataka, but they're not a requirement.",
  },
  {
    q: "How fast can we start?",
    a: "Usually within a week of the discovery call, once the plan and quote are signed off.",
  },
  {
    q: "How is pricing worked out?",
    a: "It depends on which services and how much ad or content volume you need, so we quote after the discovery call rather than publishing a one-size price. You'll always see the itemised breakdown before agreeing to anything.",
  },
  {
    q: "Can you also build or fix our website?",
    a: "Yes — our technology team builds and maintains websites and business applications alongside the marketing work, so your site and your campaigns are never built by people who've never spoken to each other.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-24 border-b border-line py-20 sm:py-28">
      <Container className="max-w-[760px]">
        <div className="text-center">
          <Eyebrow>Questions</Eyebrow>
          <h2 className="text-balance font-display text-[32px] font-bold leading-[1.15] sm:text-[42px]">
            FAQs
          </h2>
        </div>

        <div className="mt-12 rounded-2xl border-2 border-ink">
          {faqs.map((f, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={f.q}
                className={i !== faqs.length - 1 ? "border-b-2 border-ink" : ""}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-body text-[15.5px] font-semibold">{f.q}</span>
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 border-ink transition-transform duration-200 ${
                      isOpen ? "rotate-45 bg-accent" : ""
                    }`}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M6 1V11M1 6H11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
                {isOpen && (
                  <p className="px-6 pb-5 text-[14.5px] leading-relaxed text-muted">
                    {f.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
