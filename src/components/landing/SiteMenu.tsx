"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site-config";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/testimonials", label: "Client Results" },
  { href: "/about", label: "About" },
  { href: "/team", label: "Team" },
  { href: "/locations", label: "Locations" },
  { href: "/contact", label: "Contact" },
];

/** The floating pill menu that shrinks once you scroll past the hero. */
export function SiteMenu() {
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div
      className={`lp-menu${open ? " is-open" : ""}${compact ? " is-compact" : ""}`}
    >
      <button
        type="button"
        className="lp-menu-toggle"
        aria-expanded={open}
        aria-controls="lpMenuPanel"
        onClick={() => setOpen((v) => !v)}
      >
        <span>Menu</span>
        <span className="lp-menu-ico" aria-hidden />
      </button>

      <div className="lp-menu-panel" id="lpMenuPanel">
        <div className="lp-menu-links">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
        </div>
        <div className="lp-menu-meta">
          <div>
            <strong>5xSME</strong>
            <br />
            Bengaluru, Karnataka
            <br />
            {siteConfig.legalNote}
          </div>
          <div className="lp-menu-meta-r">
            <a href={`tel:${siteConfig.phoneE164}`}>{siteConfig.phoneDisplay}</a>
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          </div>
        </div>
      </div>
    </div>
  );
}
