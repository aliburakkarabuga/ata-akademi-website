import type { Metadata } from "next";

export const site = {
  name: "ATAKENT ATA AKADEMİ",
  shortName: "Atakent Ata Akademi",
  tagline: "LGS ve YKS Yolculuğunda Yanınızdayız",
  location: "Halkalı, Küçükçekmece, İstanbul",
  address: "Birtek Apt. Halkalı Merkez Mah. Pınar Sok. No:21 Zemin Kat Daire 3-18 Küçükçekmece / İstanbul",
  phone: "0501 528 42 88",
  phoneHref: "tel:+905015284288",
  whatsappHref: "https://wa.me/905015284288",
  instagram: "@ataakademi_ata",
  instagramHref: "https://www.instagram.com/ataakademi_ata/",
  url: "https://www.atakentataakademi.com",
  description: "Halkalı ve Küçükçekmece bölgesinde LGS, TYT, AYT ve YKS hazırlık programları sunan Atakent Ata Akademi; birebir ilgi, deneyimli eğitim kadrosu ve ücretsiz deneme dersleriyle öğrencilerini başarıya hazırlar."
};

export const navItems = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/about", label: "Hakkımızda" },
  { href: "/courses", label: "Kurslar" },
  { href: "/success-stories", label: "Başarılarımız" },
  { href: "/contact", label: "İletişim" }
];

export const programs = [
  "LGS",
  "TYT",
  "AYT",
  "YKS",
  "Birebir Dersler",
  "Grup Dersleri",
  "Ücretsiz Deneme Dersleri"
];

export function createMetadata(overrides: Partial<Metadata> = {}): Metadata {
  const title = overrides.title ?? `${site.name} | Halkalı Özel Eğitim Merkezi`;
  const description = overrides.description ?? site.description;

  return {
    metadataBase: new URL(site.url),
    title,
    description,
    keywords: [
      "Atakent Ata Akademi",
      "Halkalı özel ders",
      "Küçükçekmece LGS kursu",
      "TYT AYT kursu",
      "YKS hazırlık",
      "birebir ders"
    ],
    alternates: {
      canonical: overrides.alternates?.canonical ?? "/"
    },
    openGraph: {
      title: String(title),
      description: String(description),
      url: site.url,
      siteName: site.name,
      locale: "tr_TR",
      type: "website",
      images: [
        {
          url: "/images/academy-hero.png",
          width: 1200,
          height: 675,
          alt: `${site.name} eğitim ortamı`
        }
      ],
      ...overrides.openGraph
    },
    twitter: {
      card: "summary_large_image",
      title: String(title),
      description: String(description),
      images: ["/images/academy-hero.png"]
    },
    ...overrides
  };
}
