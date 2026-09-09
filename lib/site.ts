export const siteUrl = "https://lexsolisjuridico.com";

export const site = {
  name: "Lex Solis Jurídico",
  lawyer: "Lic. Alejandro Martínez Arrieta",
  url: siteUrl,
  email: "ale1806unam@hotmail.com",
  phoneDisplay: "+52 55 6437 4441",
  phoneE164: "+525564374441",
  whatsappLink:
    "https://wa.me/525564374441?text=Hola,%20quiero%20agendar%20una%20consulta%20legal",
  address: {
    streetAddress: "Manantial de Las Flores, Villa Xochitenco",
    addressLocality: "Chimalhuacán",
    addressRegion: "Estado de México",
    postalCode: "56360",
    addressCountry: "MX",
  },
  social: {
    facebook:
      "https://www.facebook.com/people/Lex-Solis-Jur%C3%ADdico/100078541428232/?locale=es_LA",
    instagram: "https://www.instagram.com/lexsolisjuridico/",
  },
} as const;

export const navLinks = [
  { id: "about", label: "Nosotros" },
  { id: "specialties", label: "Servicios" },
  { id: "impacto", label: "Impacto" },
  { id: "testimonios", label: "Testimonios" },
] as const;

export function breadcrumbJsonLd(
  items: { name: string; path: string }[],
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`,
    })),
  };
}
