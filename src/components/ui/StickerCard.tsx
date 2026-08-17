import Image from "next/image";

export function StickerCard({
  src,
  label,
  rotate = "-3deg",
  className = "",
  sizes = "260px",
}: {
  src: string;
  label: string;
  rotate?: string;
  className?: string;
  sizes?: string;
}) {
  return (
    <div
      className={`w-[220px] rounded-2xl border-2 border-ink bg-paper p-2 shadow-[6px_8px_0_0_var(--ink)] sm:w-[260px] ${className}`}
      style={{ transform: `rotate(${rotate})` }}
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-paper-2">
        <Image src={src} alt={label} fill sizes={sizes} className="object-cover" />
      </div>
      <p className="px-1.5 pb-1 pt-2.5 font-display text-[15px] font-semibold text-ink">
        {label}
      </p>
    </div>
  );
}
