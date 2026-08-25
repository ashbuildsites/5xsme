import Image from "next/image";

export function Logo({ className = "", heightClass = "h-9" }: { className?: string; heightClass?: string }) {
  return (
    <span className={`relative inline-block w-[132px] ${heightClass} ${className}`}>
      <Image
        src="/images/logo/5xsme-logo.png"
        alt="5xSME Solutions"
        fill
        sizes="132px"
        className="object-contain object-left"
        priority
      />
    </span>
  );
}
