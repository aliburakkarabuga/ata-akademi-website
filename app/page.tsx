import {
  Award,
  BookOpenCheck,
  CalendarCheck,
  CheckCircle2,
  ClipboardCheck,
  GraduationCap,
  MapPin,
  MapPinned,
  MessageCircle,
  PhoneCall,
  Route,
  ShieldCheck,
  Sparkles,
  Users
} from "lucide-react";
import Image from "next/image";
import { BrandMark } from "@/components/brand-mark";
import { ButtonLink } from "@/components/button-link";
import { SectionHeading } from "@/components/section-heading";
import { TrialForm } from "@/components/trial-form";
import { site } from "@/lib/site";

const whyItems = [
  { icon: ShieldCheck, title: "Veliye açık süreç", text: "Ders planı, takip ve geri bildirimler anlaşılır şekilde paylaşılır." },
  { icon: ClipboardCheck, title: "Düzenli ölçme ve takip", text: "Konu ilerleyişi, deneme sonuçları ve eksikler görünür hale getirilir." },
  { icon: BookOpenCheck, title: "Hedefe göre program", text: "LGS, TYT, AYT ve YKS hazırlığında öğrencinin seviyesine uygun çalışma akışı kurulur." },
  { icon: Users, title: "Birebir ve grup seçenekleri", text: "Öğrencinin ihtiyacına göre kişisel ders veya odaklı grup çalışması tercih edilir." }
];

const parentTrustItems = [
  { icon: CalendarCheck, title: "İlk görüşme ve seviye değerlendirme", text: "Öğrencinin mevcut durumu ve hedefi konuşularak doğru başlangıç noktası belirlenir." },
  { icon: PhoneCall, title: "Ulaşılabilir kurum iletişimi", text: "Telefon ve WhatsApp üzerinden hızlı başvuru, randevu ve bilgi akışı sağlanır." },
  { icon: Route, title: "Haftalık çalışma yolu", text: "Ders, tekrar, soru çözümü ve deneme takibi tek bir hazırlık ritmine bağlanır." }
];

const faqs = [
  { q: "Ücretsiz deneme dersi nasıl planlanır?", a: "Formu doldurduktan veya WhatsApp üzerinden yazdıktan sonra öğrenci seviyesi ve uygun günler konuşularak randevu oluşturulur." },
  { q: "LGS ve YKS programları aynı sistemle mi ilerliyor?", a: "Hayır. Her sınavın kapsamı, tempo ihtiyacı ve ölçme yöntemi farklıdır; programlar buna göre ayrı planlanır." },
  { q: "Başarı istatistikleri neden paylaşılmıyor?", a: "Gerçek ve doğrulanabilir kurum verisi sağlanmadan sıralama, derece veya yüzde başarı iddiası kullanılmaz." },
  { q: "Birebir ders ile grup dersi arasında nasıl seçim yapılır?", a: "Öğrencinin eksikleri, motivasyonu, hedefi ve ders disiplini değerlendirilerek öneri yapılır." }
];

const transparencyItems = [
  "Gerçek öğrenci verisi olmadan sıralama veya başarı yüzdesi paylaşılmaz.",
  "Veli ve öğrenci yorumları yalnızca izinli içerikle yayınlanır.",
  "Program önerisi, öğrencinin seviyesi ve hedefi görüştükten sonra yapılır."
];

export default function HomePage() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(site.address)}&output=embed`;

  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy text-white">
        <div className="pointer-events-none absolute inset-0 z-0">
          <Image
            src="/images/academy-hero.png"
            alt="Öğretmen, veli ve öğrencinin ders planı üzerine konuştuğu modern eğitim ortamı"
            fill
            priority
            className="object-cover object-center opacity-[0.58]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,39,70,0.96)_0%,rgba(15,39,70,0.82)_42%,rgba(15,39,70,0.38)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-navy to-transparent" />
        </div>
        <div className="section-shell relative z-10 grid min-h-[calc(100vh-5rem)] items-center gap-10 py-14 lg:grid-cols-[1.08fr_0.92fr] lg:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex rounded-md bg-white/10 p-3 ring-1 ring-white/16 backdrop-blur">
              <BrandMark inverted />
            </div>
            <p className="eyebrow mt-8 text-[#e8bf6a]">Halkalı, Küçükçekmece'de sınav hazırlık ve özel ders</p>
            <h1 className="mt-5 text-4xl font-semibold tracking-normal text-white sm:text-5xl lg:text-6xl">
              Hedeflerinize Giden Yolda
              Doğru Plan, Düzenli Takip ve Güvenilir Destek.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/84">
              {site.name}; LGS, TYT, AYT, YKS, birebir ve grup derslerinde öğrencinin seviyesini merkeze alır, veliyi sürecin dışında bırakmaz.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#free-trial">Ücretsiz dene!</ButtonLink>
              <ButtonLink href={site.whatsappHref} variant="secondary">
                <MessageCircle className="h-4 w-4" aria-hidden />
                WhatsApp ile yazın
              </ButtonLink>
            </div>
            <div className="mt-10 grid gap-3 text-sm text-white/80 sm:grid-cols-3">
              {["LGS - TYT - AYT - YKS", "Birebir ve grup dersleri", "Ücretsiz deneme dersi"].map((item) => (
                <div key={item} className="flex items-center gap-2 rounded-md bg-white/8 px-3 py-3 ring-1 ring-white/12">
                  <CheckCircle2 className="h-4 w-4 text-[#e8bf6a]" aria-hidden />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:block">
              <div className="ml-auto max-w-md rounded-xl bg-white p-6 text-slate-900 shadow-2xl">
              <p className="eyebrow">Veli için net süreç</p>
              <h2 className="mt-3 text-2xl font-semibold">Deneme dersinden sonra ne olur?</h2>
              <div className="mt-6 grid gap-4">
                {["Öğrencinin seviyesi ve ihtiyaçları konuşulur.", "Uygun program ve ders modeli önerilir.", "Ders takibi ve veli bilgilendirme planı netleşir."].map((item) => (
                  <div key={item} className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-sage" aria-hidden />
                    <p className="text-sm leading-6 text-muted">{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-md bg-paper p-4 ring-1 ring-line">
                <p className="text-sm font-semibold text-navy">{site.phone}</p>
                <p className="mt-1 text-xs leading-5 text-muted">{site.location}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-16 sm:py-20">
        <SectionHeading
          eyebrow="Neden biz"
          title="Güven veren eğitim, düzenli takip ve net iletişim"
          description="Aileler için en önemli konu yalnızca ders almak değil, öğrencinin gerçekten takip edildiğini bilmektir."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {whyItems.map((item) => (
            <article key={item.title} className="rounded-md bg-white p-6 shadow-sm ring-1 ring-line">
              <item.icon className="h-8 w-8 text-gold" aria-hidden />
              <h3 className="mt-5 text-xl font-semibold text-ink">{item.title}</h3>
              <p className="mt-3 leading-7 text-muted">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Veliler için güven"
              title="Karar verirken bilmek istediğiniz temel şeyler net"
              description="İyi bir eğitim merkezi, yalnızca ders anlatan değil; öğrencinin çalışma düzenini, motivasyonunu ve eksiklerini birlikte takip eden yerdir."
            />
          </div>
          <div className="grid gap-4">
            {parentTrustItems.map((item) => (
              <article key={item.title} className="grid gap-4 rounded-md bg-paper p-5 ring-1 ring-line sm:grid-cols-[auto_1fr]">
                <span className="grid h-12 w-12 place-items-center rounded-md bg-navy text-white">
                  <item.icon className="h-6 w-6" aria-hidden />
                </span>
                <span>
                  <h3 className="font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 leading-7 text-muted">{item.text}</p>
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="section-shell grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="LGS Programı" title="8. sınıf öğrencileri için disiplinli ve ölçülebilir hazırlık" />
            <p className="lead mt-5">
              Konu eksikleri, soru çözüm alışkanlığı ve deneme takibi birlikte ele alınır. Amaç, öğrencinin sınav temposuna güvenli şekilde hazırlanmasıdır.
            </p>
          </div>
          <div className="grid gap-3">
            {["Konu kazanımı", "Yeni nesil soru pratiği", "Deneme analizi", "Veli bilgilendirme"].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-md bg-paper p-4 ring-1 ring-line">
                <CheckCircle2 className="h-5 w-5 text-sage" aria-hidden />
                <span className="font-semibold text-ink">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-16 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="rounded-md bg-navy p-7 text-white shadow-soft">
            <GraduationCap className="h-10 w-10 text-[#e8bf6a]" aria-hidden />
            <h2 className="mt-5 text-3xl font-semibold">TYT / AYT / YKS Programı</h2>
            <p className="mt-4 leading-8 text-white/76">
              Üniversite hedefi için süre yönetimi, ders dengesi, deneme analizi ve tekrar düzeni birlikte kurulur.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {["TYT temel yeterlilik", "AYT alan dersleri", "YKS deneme planı", "Hedefe göre tekrar"].map((item) => (
              <article key={item} className="rounded-md bg-white p-5 ring-1 ring-line">
                <Sparkles className="h-6 w-6 text-gold" aria-hidden />
                <h3 className="mt-4 font-semibold text-ink">{item}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">Program detayı kurum planlamasına göre netleştirilir.</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Ders modelleri"
            title="Birebir ve grup derslerinde doğru eşleşme"
            description="Her öğrenci aynı tempoyla ilerlemez. Ders modeli, öğrencinin ihtiyacı ve hedefi konuşularak belirlenir."
            align="center"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <article className="rounded-md bg-paper p-6 ring-1 ring-line">
              <h3 className="text-2xl font-semibold text-ink">Birebir Dersler</h3>
              <p className="mt-3 leading-7 text-muted">Eksik kapatma, özel hedef ve yoğun takip isteyen öğrenciler için kişisel çalışma akışı.</p>
            </article>
            <article className="rounded-md bg-paper p-6 ring-1 ring-line">
              <h3 className="text-2xl font-semibold text-ink">Grup Dersleri</h3>
              <p className="mt-3 leading-7 text-muted">Benzer seviyedeki öğrencilerle düzenli tempo, motivasyon ve sınıf içi etkileşim.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section-shell py-16 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <SectionHeading eyebrow="Başarı yaklaşımı" title="Gerçek veri olmadan abartılı başarı iddiası yok" />
            <p className="lead mt-5">
              Bu sitede sahte sıralama, derece veya istatistik kullanılmaz. Kurumun onaylı öğrenci hikayeleri ve gerçek sonuçları sağlandığında bu alanlar güncellenir.
            </p>
          </div>
          <div className="rounded-md bg-white p-6 shadow-sm ring-1 ring-line">
            <Award className="h-9 w-9 text-gold" aria-hidden />
            <p className="mt-5 text-xl font-semibold text-ink">Başarı hikayeleri için doğrulanmış içerik alanı</p>
            <p className="mt-3 leading-7 text-muted">Öğrenci adı, fotoğrafı, sınav sonucu ve veli izni sağlandığında yayınlanmaya hazır.</p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Şeffaflık"
            title="Güven, doğrulanabilir bilgiyle kurulur"
            description="Kurum kültürü; veliye açık iletişim, gerçekçi hedef ve doğrulanmış içerik üzerine kurulmalıdır."
            align="center"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {transparencyItems.map((item) => (
              <article key={item} className="rounded-md bg-paper p-6 ring-1 ring-line">
                <ShieldCheck className="h-7 w-7 text-gold" aria-hidden />
                <p className="mt-4 text-sm leading-7 text-muted">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-16 sm:py-20">
        <SectionHeading eyebrow="Sık sorulan sorular" title="Başvuru öncesi merak edilenler" />
        <div className="mt-8 grid gap-4">
          {faqs.map((faq) => (
            <details key={faq.q} className="rounded-md bg-white p-5 ring-1 ring-line">
              <summary className="cursor-pointer font-semibold text-ink">{faq.q}</summary>
              <p className="mt-3 leading-7 text-muted">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="free-trial" className="bg-navy py-16 text-white sm:py-20">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="eyebrow text-[#e8bf6a]">Ücretsiz deneme</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Öğrenciniz için ilk görüşmeyi planlayın</h2>
            <p className="mt-5 leading-8 text-white/76">
              Formu bırakın; program, seviye ve uygun ders modeli için sizinle iletişime geçilsin.
            </p>
          </div>
          <TrialForm />
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="eyebrow">Konum</p>
            <h2 className="mt-3 text-3xl font-semibold text-ink">Halkalı’da kolay ulaşılabilir eğitim merkezi</h2>
            <p className="mt-4 leading-8 text-muted">
              Görüşme ve deneme dersi için {site.location} konumundaki kurumla telefon veya WhatsApp üzerinden randevu oluşturabilirsiniz.
            </p>
            <div className="mt-6 grid gap-3 text-sm text-muted">
              <p className="flex items-center gap-2"><MapPinned className="h-4 w-4 text-gold" aria-hidden /> {site.address}</p>
              <p className="flex items-center gap-2"><PhoneCall className="h-4 w-4 text-gold" aria-hidden /> {site.phone}</p>
            </div>
          </div>
          <div className="overflow-hidden rounded-md bg-paper shadow-soft ring-1 ring-line">
            <iframe
              title={`${site.name} Google Maps konumu`}
              src={mapSrc}
              className="h-[360px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section className="section-shell py-16 sm:py-20">
        <div className="grid gap-6 rounded-md bg-white p-6 shadow-soft ring-1 ring-line md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="eyebrow">İletişim</p>
            <h2 className="mt-3 text-3xl font-semibold text-ink">Halkalı’da yüz yüze görüşme için ulaşın</h2>
            <p className="mt-3 flex items-center gap-2 text-muted"><MapPin className="h-4 w-4" aria-hidden /> {site.location}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={site.whatsappHref}>WhatsApp</ButtonLink>
            <ButtonLink href="/contact" variant="secondary">İletişim bilgileri</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
