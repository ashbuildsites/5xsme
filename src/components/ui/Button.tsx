import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "accent" | "ink" | "ghost" | "navCta";
  className?: string;
};

const base =
  "group inline-flex items-center gap-3 rounded-full pl-6 pr-2 py-2 font-body font-semibold text-[15px] transition-transform duration-150 hover:-translate-y-0.5 focus-visible:-translate-y-0.5";

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  accent: "bg-accent text-ink border-2 border-ink",
  ink: "bg-ink text-paper border-2 border-ink",
  ghost: "bg-transparent text-ink border-2 border-ink",
  navCta: "bg-ink text-paper border-2 border-ink",
};

const iconWrap: Record<NonNullable<ButtonProps["variant"]>, string> = {
  accent: "bg-ink text-accent",
  ink: "bg-paper text-ink",
  ghost: "bg-ink text-paper",
  navCta: "bg-accent text-ink",
};

export function Button({ href, children, variant = "accent", className = "" }: ButtonProps) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      <span>{children}</span>
      <span
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-150 group-hover:translate-x-0.5 ${iconWrap[variant]}`}
        aria-hidden="true"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path
            d="M1 7H13M13 7L7.5 1.5M13 7L7.5 12.5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </Link>
  );
}
