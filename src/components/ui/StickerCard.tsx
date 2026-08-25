import Image from "next/image";

export function StickerCard({
  src,
  label,
  caption,
  rotate = "-3deg",
  className = "",
  widthClassName = "w-[220px] sm:w-[260px]",
  captionClassName = "text-[15px]",
  sizes = "260px",
  priority = false,
}: {
  src: string;
  label: string;
  caption?: string;
  rotate?: string;
  className?: string;
  widthClassName?: string;
  captionClassName?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border-2 border-ink bg-paper p-2 shadow-[6px_8px_0_0_var(--ink)] ${widthClassName} ${className}`}
      style={{ transform: `rotate(${rotate})` }}
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-paper-2">
        <Image src={src} alt={label} fill sizes={sizes} className="object-cover" priority={priority} />
      </div>
      <p className={`truncate px-1.5 pb-1 pt-2.5 font-display font-semibold text-ink ${captionClassName}`}>
        {caption ?? label}
      </p>
    </div>
  );
}
