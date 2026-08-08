import type { Metadata } from "next";
import { Award, FileCheck2, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { createMetadata, site } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: `Başarı Hikayeleri | ${site.name}`,
  description: "Atakent Ata Akademi başarı hikayeleri için doğrulanmış ve izinli içerik alanı.",
  alternates: { canonical: "/success-stories" }
});

export default function SuccessStoriesPage() {
  return (
    <>
      <section className="bg-white py-16 sm:py-20">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Başarı hikayeleri"
            title="Gerçek sonuçlar ve izinli paylaşımlar için ayrılmış alan"
            description="Sahte derece, sıralama veya başarı yüzdesi kullanılmaz. Kurum doğrulanmış içerik sağladığında bu sayfa öğrenci hikayeleriyle güncellenecektir."
          />
        </div>
      </section>
      <section className="section-shell py-16 sm:py-20">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            { icon: ShieldCheck, title: "Doğrulanmış veri", text: "Sonuç ve başarı bilgileri belge veya kurum kaydıyla doğrulanmalıdır." },
            { icon: FileCheck2, title: "Açık izin", text: "Öğrenci ve veli izni olmadan isim, fotoğraf veya detay paylaşılmaz." },
            { icon: Award, title: "Abartısız anlatım", text: "Başarı hikayeleri gerçek süreç ve gelişim üzerinden aktarılır." }
          ].map((item) => (
            <article key={item.title} className="rounded-md bg-white p-6 ring-1 ring-line">
              <item.icon className="h-8 w-8 text-gold" aria-hidden />
              <h2 className="mt-5 text-xl font-semibold text-ink">{item.title}</h2>
              <p className="mt-3 leading-7 text-muted">{item.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-navy py-16 text-white sm:py-20">
        <div className="section-shell">
          <p className="eyebrow text-[#e8bf6a]">Placeholder</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold">Öğrenci başarı kartları burada yayınlanacak</h2>
          <p className="mt-4 max-w-2xl leading-8 text-white/76">
            Gerçek öğrenci adı, hedefi, süreç özeti ve izinli görsel bilgileri kurum tarafından sağlandığında üretime hazır tasarım alanına eklenecektir.
          </p>
        </div>
      </section>
    </>
  );
}
