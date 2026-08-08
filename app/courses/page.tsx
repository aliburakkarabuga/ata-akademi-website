import type { Metadata } from "next";
import { BookOpen, CheckCircle2, ClipboardList, FlaskConical, Target } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { SectionHeading } from "@/components/section-heading";
import { createMetadata, site } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: `Kurslar | ${site.name}`,
  description: "LGS, TYT, AYT, YKS, birebir ders, grup dersleri ve ücretsiz deneme dersleri hakkında bilgi alın.",
  alternates: { canonical: "/courses" }
});

const courses = [
  { title: "LGS Hazırlık", text: "8. sınıf öğrencileri için konu, soru pratiği ve deneme analizi odaklı hazırlık." },
  { title: "TYT Hazırlık", text: "Temel yeterlilik alanlarında eksik tamamlama, hız ve süre yönetimi çalışmaları." },
  { title: "AYT Hazırlık", text: "Alan derslerinde hedefe göre derinleşme, tekrar ve deneme değerlendirmesi." },
  { title: "YKS Programı", text: "TYT ve AYT dengesini birlikte planlayan bütüncül üniversite hazırlığı." },
  { title: "Birebir Dersler", text: "Öğrencinin ihtiyaç duyduğu derse ve seviyeye göre kişiselleştirilmiş destek." },
  { title: "Grup Dersleri", text: "Benzer hedef ve seviyedeki öğrencilerle düzenli çalışma temposu." }
];

const classPrograms = [
  {
    grade: "5, 6 ve 7. Sınıf",
    color: "bg-white",
    items: [
      { icon: FlaskConical, text: "Konu eksiklikleri bireysel takip sistemiyle tespit edilerek tamamlanır." },
      { icon: Target, text: "Temel akademik beceriler güçlendirilerek 8. sınıfa sağlam altyapı hazırlanır." },
      { icon: ClipboardList, text: "İki haftada bir ve aylık periyotlarla deneme sınavları uygulanır." },
    ]
  },
  {
    grade: "8. Sınıf — LGS",
    color: "bg-navy text-white",
    items: [
      { icon: BookOpen, text: "LGS odaklı yoğun eğitim programıyla sınav sürecine en etkili şekilde hazırlanılır." },
      { icon: ClipboardList, text: "Her hafta düzenli deneme sınavı yapılarak sınav performansı analiz edilir." },
      { icon: Target, text: "Eksik kazanımlar belirlenerek konu tekrarı, soru çözümü ve birebir etütlerle desteklenir." },
    ]
  }
];

export default function CoursesPage() {
  return (
    <>
      <section className="bg-white py-16 sm:py-20">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Kurslar"
            title="Sınav hazırlık ve özel ders programları"
            description="Program detayları öğrencinin seviyesi ve hedefi görüşüldükten sonra netleştirilir."
          />
        </div>
      </section>

      <section className="section-shell py-16 sm:py-20">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <article key={course.title} className="rounded-md bg-white p-6 shadow-sm ring-1 ring-line">
              <BookOpen className="h-7 w-7 text-gold" aria-hidden />
              <h2 className="mt-5 text-xl font-semibold text-ink">{course.title}</h2>
              <p className="mt-3 leading-7 text-muted">{course.text}</p>
              <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-sage">
                <CheckCircle2 className="h-4 w-4" aria-hidden />
                Ücretsiz deneme dersi alınabilir
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Akademik Program Section */}
      <section className="bg-white py-16 sm:py-20">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Akademik Programımız"
            title="5. sınıftan LGS'ye disiplinli ve ölçülebilir bir yolculuk"
            description="Öğrencilerimizi sadece sınava değil, disiplinli çalışma alışkanlığına ve kalıcı akademik başarıya ulaştırmayı hedefliyoruz."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {classPrograms.map((program) => (
              <article
                key={program.grade}
                className={`rounded-md p-7 ring-1 ring-line shadow-sm ${program.color}`}
              >
                <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${program.color.includes("navy") ? "text-[#e8bf6a]" : "text-gold"}`}>
                  Sınıf Programı
                </p>
                <h3 className={`mt-2 text-2xl font-semibold ${program.color.includes("navy") ? "text-white" : "text-ink"}`}>
                  {program.grade}
                </h3>
                <ul className="mt-6 grid gap-4">
                  {program.items.map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className={`mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-md ${program.color.includes("navy") ? "bg-white/10" : "bg-paper"}`}>
                        <item.icon className={`h-4 w-4 ${program.color.includes("navy") ? "text-[#e8bf6a]" : "text-gold"}`} aria-hidden />
                      </span>
                      <p className={`leading-7 ${program.color.includes("navy") ? "text-white/80" : "text-muted"}`}>
                        {item.text}
                      </p>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          {/* Deneme sınavı özet banner */}
          <div className="mt-8 rounded-md bg-paper p-6 ring-1 ring-line">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="flex gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-navy text-white">
                  <ClipboardList className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <p className="font-semibold text-ink">5–7. sınıf deneme takvimi</p>
                  <p className="mt-1 text-sm leading-6 text-muted">İki haftada bir ve aylık periyotlarla deneme sınavı</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-gold text-white">
                  <ClipboardList className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <p className="font-semibold text-ink">8. sınıf deneme takvimi</p>
                  <p className="mt-1 text-sm leading-6 text-muted">Her hafta düzenli deneme + performans analizi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell pb-16 sm:pb-20">
        <div className="rounded-md bg-navy p-7 text-white shadow-soft sm:p-10">
          <p className="eyebrow text-[#e8bf6a]">Başvuru</p>
          <h2 className="mt-3 text-3xl font-semibold">Hangi programın uygun olduğunu birlikte belirleyelim</h2>
          <p className="mt-4 max-w-2xl leading-8 text-white/76">Öğrencinin sınıfı, hedefi ve mevcut durumu konuşularak doğru ders modeli önerilir.</p>
          <div className="mt-7">
            <ButtonLink href="/#free-trial">Ücretsiz deneme formu</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}