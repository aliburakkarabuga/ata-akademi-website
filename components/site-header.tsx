"use client";

import { Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BrandMark } from "@/components/brand-mark";
import { navItems, site } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-paper/92 backdrop-blur-xl">
      <div className="section-shell flex min-h-20 items-center justify-between gap-4">
        <BrandMark />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Ana menü">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`focus-ring rounded-md px-3 py-2 text-sm font-medium transition ${
                pathname === item.href ? "bg-white text-navy shadow-sm" : "text-muted hover:bg-white hover:text-navy"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a className="focus-ring inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-semibold text-navy hover:bg-white" href={site.phoneHref}>
            <Phone className="h-4 w-4" aria-hidden />
            {site.phone}
          </a>
          <Link className="focus-ring rounded-md bg-gold px-4 py-3 text-sm font-semibold text-white hover:bg-[#b88626]" href="/#free-trial">
            Ücretsiz dene!
          </Link>
        </div>

        <button
          className="focus-ring inline-grid h-11 w-11 place-items-center rounded-md bg-white text-navy ring-1 ring-line lg:hidden"
          type="button"
          aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-line bg-paper lg:hidden">
          <nav className="section-shell grid gap-2 py-4" aria-label="Mobil menü">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="focus-ring rounded-md bg-white px-4 py-3 text-sm font-semibold text-navy"
              >
                {item.label}
              </Link>
            ))}
            <a className="focus-ring rounded-md bg-gold px-4 py-3 text-center text-sm font-semibold text-white" href={site.whatsappHref}>
              WhatsApp ile yazın
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
