import { Instagram, Phone } from "lucide-react";
import Link from "next/link";
import { BrandMark } from "@/components/brand-mark";
import { navItems, programs, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-navy text-white">
      <div className="section-shell grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <BrandMark inverted />
          <p className="mt-4 max-w-md text-sm leading-7 text-white/72">
            Halkalı ve çevresindeki öğrenciler için LGS, TYT, AYT, YKS, birebir ve grup derslerinde planlı hazırlık desteği.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a className="focus-ring inline-flex items-center gap-2 rounded-md bg-white px-4 py-3 text-sm font-semibold text-navy" href={site.phoneHref}>
              <Phone className="h-4 w-4" aria-hidden />
              {site.phone}
            </a>
            <a className="focus-ring inline-flex items-center gap-2 rounded-md border border-white/20 px-4 py-3 text-sm font-semibold text-white" href={site.instagramHref}>
              <Instagram className="h-4 w-4" aria-hidden />
              {site.instagram}
            </a>
          </div>
        </div>
        <div>
          <p className="font-semibold">Sayfalar</p>
          <ul className="mt-4 grid gap-3 text-sm text-white/72">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link className="hover:text-white" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-semibold">Programlar</p>
          <ul className="mt-4 grid gap-3 text-sm text-white/72">
            {programs.map((program) => (
              <li key={program}>{program}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="section-shell flex flex-col gap-3 py-5 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. Tüm hakları saklıdır.</p>
          <p>Gerçek başarı verileri kurum tarafından sağlandığında güncellenmelidir.</p>
        </div>
      </div>
    </footer>
  );
}
