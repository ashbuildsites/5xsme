"use client";

import Link from "next/link";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";

const links = [
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/services", label: "Services" },
  { href: "/locations", label: "Locations" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur">
      <Container className="flex h-[76px] items-center justify-between">
        <Link href="/" aria-label="5xSME home">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-mono text-[12px] uppercase tracking-[0.1em] text-ink/80 transition-colors hover:text-accent-ink"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="/contact" variant="navCta" className="text-[13px] uppercase tracking-[0.06em]">
            Get a Quote
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
          className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-ink lg:hidden"
        >
          <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
            {open ? (
              <path
                d="M1 1L17 13M17 1L1 13"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M0 1H18M0 7H18M0 13H18"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </Container>

      {open && (
        <div className="border-t border-line bg-paper lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 font-body text-[15px] font-medium text-ink hover:bg-paper-2"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-ink px-5 py-3 text-center font-body text-[15px] font-semibold text-paper"
            >
              Get a Quote
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}
