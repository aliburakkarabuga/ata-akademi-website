import { programs, site } from "@/lib/site";

export function educationCenterJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: site.name,
    url: site.url,
    telephone: site.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Küçükçekmece",
      addressRegion: "İstanbul",
      addressCountry: "TR",
      streetAddress: "Halkalı"
    },
    areaServed: ["Halkalı", "Atakent", "Küçükçekmece", "İstanbul"],
    sameAs: [site.instagramHref],
    makesOffer: programs.map((program) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Course",
        name: program,
        provider: {
          "@type": "EducationalOrganization",
          name: site.name
        }
      }
    }))
  };
}
