import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type ButtonLinkProps = ComponentPropsWithoutRef<typeof Link> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

export function ButtonLink({ children, className = "", variant = "primary", ...props }: ButtonLinkProps) {
  const variants = {
    primary: "bg-gold text-white shadow-soft hover:bg-[#b88626]",
    secondary: "bg-white text-navy ring-1 ring-line hover:bg-paper",
    ghost: "bg-transparent text-navy hover:bg-white/70"
  };

  return (
    <Link
      className={`focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-5 text-sm font-semibold transition ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
