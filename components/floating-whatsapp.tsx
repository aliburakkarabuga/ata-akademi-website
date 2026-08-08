import { Instagram, MessageCircle } from "lucide-react";
import { site } from "@/lib/site";

export function FloatingWhatsApp() {
  return (
    <>
      <a
        href={site.instagramHref}
        target="_blank"
        rel="noopener noreferrer"
        className="focus-ring fixed bottom-5 left-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white shadow-[0_16px_40px_rgba(238,42,123,0.35)] transition hover:-translate-y-0.5 hover:opacity-90 sm:w-auto sm:gap-2 sm:rounded-md sm:px-5 sm:py-4"
        aria-label="Instagram'da ATAKENT ATA AKADEMİ'yi takip edin"
      >
        <Instagram className="h-6 w-6" aria-hidden />
        <span className="hidden text-sm font-bold sm:inline">Instagram</span>
      </a>
      <a
        href={site.whatsappHref}
        className="focus-ring fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_16px_40px_rgba(37,211,102,0.35)] transition hover:-translate-y-0.5 hover:bg-[#20bd5a] sm:w-auto sm:gap-2 sm:rounded-md sm:px-5 sm:py-4"
        aria-label="WhatsApp ile ATAKENT ATA AKADEMİ'ye yazın"
      >
        <MessageCircle className="h-6 w-6" aria-hidden />
        <span className="hidden text-sm font-bold sm:inline">WhatsApp</span>
      </a>
    </>
  );
}