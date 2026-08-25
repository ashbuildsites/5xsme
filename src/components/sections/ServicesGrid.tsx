"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { services, Service } from "@/lib/services-data";

const AUTOPLAY_DELAY = 900;

function ServiceCard({ s, i }: { s: Service; i: number }) {
  return (
    <Link
      href={`/services/${s.slug}`}
      className="group flex h-full flex-col justify-between rounded-2xl border-2 border-ink bg-paper p-6 transition-transform hover:-translate-y-1"
      style={{ boxShadow: "5px 6px 0 0 var(--ink)" }}
    >
      <div>
        <span className="font-mono text-[12px] text-muted">0{i + 1}</span>
        <h3 className="mt-3 font-display text-[20px] font-bold leading-tight">
          {s.name}
        </h3>
        <p className="mt-3 text-[14.5px] leading-relaxed text-muted">{s.forWho}</p>
      </div>
      <span className="mt-6 inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.08em] text-accent-ink">
        Learn more
        <svg width="12" height="12" viewBox="0 0 14 14" fill="none" className="transition-transform group-hover:translate-x-1">
          <path d="M1 7H13M13 7L7.5 1.5M13 7L7.5 12.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </Link>
  );
}

function MobileCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const autoplayRef = useRef<number | null>(null);
  const stoppedRef = useRef(false);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 639px)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!isMobile || reducedMotion) return;

    function step() {
      const el = trackRef.current;
      if (!el || stoppedRef.current) return;
      const card = el.firstElementChild as HTMLElement | null;
      if (!card) return;
      const gap = 16;
      const cardStep = card.offsetWidth + gap;
      const maxScroll = el.scrollWidth - el.clientWidth;

      // Already resting on (or past) the last card — wrap to the start.
      // Otherwise advance by one card, but clamp to maxScroll so a fixed
      // step never overshoots past the final card and skips it.
      if (el.scrollLeft >= maxScroll - 4) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollTo({ left: Math.min(el.scrollLeft + cardStep, maxScroll), behavior: "smooth" });
      }
    }

    autoplayRef.current = window.setInterval(step, AUTOPLAY_DELAY);
    return () => {
      if (autoplayRef.current) window.clearInterval(autoplayRef.current);
    };
  }, []);

  function stopAutoplay() {
    stoppedRef.current = true;
    if (autoplayRef.current) {
      window.clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  }

  function handleScroll() {
    const el = trackRef.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement | null;
    if (!card) return;
    const cardStep = card.offsetWidth + 16;
    const maxScroll = el.scrollWidth - el.clientWidth;
    // Near the end, force the last dot active even if the clamped scroll
    // position sits short of a full cardStep multiple.
    if (el.scrollLeft >= maxScroll - 4) {
      setActive(services.length - 1);
      return;
    }
    setActive(Math.min(Math.round(el.scrollLeft / cardStep), services.length - 1));
  }

  return (
    <div className="sm:hidden">
      <div
        ref={trackRef}
        onPointerDown={stopAutoplay}
        onWheel={stopAutoplay}
        onScroll={handleScroll}
        className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        style={{ scrollBehavior: "smooth" }}
      >
        {services.map((s, i) => (
          <div key={s.slug} className="w-[82%] shrink-0 snap-center">
            <ServiceCard s={s} i={i} />
          </div>
        ))}
      </div>
      <div className="mt-5 flex justify-center gap-1.5">
        {services.map((s, i) => (
          <span
            key={s.slug}
            className={`h-1.5 rounded-full transition-all ${
              i === active ? "w-5 bg-ink" : "w-1.5 bg-line"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export function ServicesGrid() {
  return (
    <section className="border-b border-line py-20 sm:py-28">
      <Container>
        <div className="mx-auto max-w-[620px] text-center">
          <Eyebrow>What we run</Eyebrow>
          <h2 className="text-balance font-display text-[32px] font-bold leading-[1.15] sm:text-[42px]">
            Nine Services. One Accountable Team.
          </h2>
          <p className="mt-5 text-[16px] leading-relaxed text-muted">
            Everything a growing Indian business needs to get found, get chosen,
            and keep the site behind it running well.
          </p>
        </div>

        <div className="mt-14">
          <MobileCarousel />

          <div className="hidden gap-5 sm:grid sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <ServiceCard key={s.slug} s={s} i={i} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
