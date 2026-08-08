import type { Metadata } from "next";
import { Instagram, MapPin, MessageCircle, Phone } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { SectionHeading } from "@/components/section-heading";
import { createMetadata, site } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: `İletişim | ${site.name}`,
  description: `${site.name} telefon, adres, Instagram ve WhatsApp iletişim bilgileri.`,
  alternates: { canonical: "/contact" }
});

export default function ContactPage() {
  
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(site.address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <>
      <section className="bg-white py-16 sm:py-20">
        <div className="section-shell">
          <SectionHeading
            eyebrow="İletişim"
            title="Ücretsiz deneme dersi ve kayıt görüşmesi için ulaşın"
            description="Telefon, WhatsApp veya Instagram üzerinden kurumla iletişime geçebilirsiniz."
          />
        </div>
      </section>
      <section className="section-shell grid gap-6 py-16 sm:py-20 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="grid gap-4">
          <a className="focus-ring flex gap-4 rounded-md bg-white p-5 ring-1 ring-line" href={site.phoneHref}>
            <Phone className="mt-1 h-6 w-6 text-gold" aria-hidden />
            <span>
              <span className="block text-sm font-semibold text-muted">Telefon</span>
              <span className="mt-1 block text-lg font-semibold text-ink">{site.phone}</span>
            </span>
          </a>
          <div className="flex gap-4 rounded-md bg-white p-5 ring-1 ring-line">
            <MapPin className="mt-1 h-6 w-6 text-gold" aria-hidden />
            <span>
              <span className="block text-sm font-semibold text-muted">Adres</span>
              <span className="mt-1 block text-lg font-semibold text-ink">{site.address}</span>
              <span className="mt-2 block text-sm text-muted">Tam açık adres bilgisi kurum tarafından eklendiğinde güncellenmelidir.</span>
            </span>
          </div>
          <a 
            className="focus-ring flex gap-4 rounded-md bg-white p-5 ring-1 ring-line" 
            href={site.instagramHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="mt-1 h-6 w-6 text-gold" aria-hidden />
            <span>
              <span className="block text-sm font-semibold text-muted">Instagram</span>
              <span className="mt-1 block text-lg font-semibold text-ink">{site.instagram}</span>
            </span>
          </a>
          <ButtonLink href={site.whatsappHref} className="w-full" target="_blank" rel="noopener noreferrer">
            <MessageCircle className="h-4 w-4" aria-hidden />
            WhatsApp ile yazın
          </ButtonLink>
        </div>
        <div className="overflow-hidden rounded-md bg-white shadow-soft ring-1 ring-line">
          <iframe
            title={`${site.name} Google Maps konumu`}
            src={mapSrc}
            className="h-[420px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>
    </>
  );
}