import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

type BrandMarkProps = {
  inverted?: boolean;
};

export function BrandMark({ inverted = false }: BrandMarkProps) {
  return (
    <Link
      href="/"
      className="focus-ring flex items-center rounded-md"
      aria-label={`${site.name} ana sayfa`}
    >
      <Image
        src="/images/logo.png"
        alt="ATA Akademi"
        width={180}
        height={180}
        className={`w-auto object-contain ${
          inverted ? "h-24" : "h-16"
        }`}
        priority
      />
    </Link>
  );
}