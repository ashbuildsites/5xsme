export function Eyebrow({
  children,
  tone = "ink",
}: {
  children: React.ReactNode;
  tone?: "ink" | "paper" | "accent";
}) {
  const toneClass =
    tone === "paper"
      ? "text-paper/70"
      : tone === "accent"
        ? "text-accent-ink"
        : "text-muted";
  return (
    <p
      className={`font-mono text-[12px] uppercase tracking-[0.14em] ${toneClass} mb-3`}
    >
      {children}
    </p>
  );
}
