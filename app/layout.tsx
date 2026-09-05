import type { Metadata } from "next";
import "./globals.css";
import JsonLd from "@/components/JsonLd";
import { site, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title:
    "Abogado Penalista en CDMX y Edomex | Defensa Penal Estratégica – Lex Solis",
  description:
    "Despacho de defensa penal en Chimalhuacán y CDMX. Estrategia en juicios orales, defensa ante fiscalías y asesoría a víctimas. Consulta confidencial las 24 horas.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    siteName: site.name,
    title:
      "Abogado Penalista en CDMX y Edomex | Defensa Penal Estratégica – Lex Solis",
    description:
      "Despacho de defensa penal en Chimalhuacán y CDMX. Estrategia en juicios orales, defensa ante fiscalías y asesoría a víctimas. Consulta confidencial las 24 horas.",
    url: siteUrl,
  },
};

const legalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: site.name,
  founder: {
    "@type": "Person",
    name: site.lawyer,
  },
  url: siteUrl,
  email: site.email,
  telephone: site.phoneE164,
  priceRange: "$$",
  areaServed: ["Chimalhuacán", "Ciudad de México", "Estado de México"],
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.streetAddress,
    addressLocality: site.address.addressLocality,
    addressRegion: site.address.addressRegion,
    postalCode: site.address.postalCode,
    addressCountry: site.address.addressCountry,
  },
  sameAs: [site.social.facebook, site.social.instagram],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <JsonLd data={legalServiceJsonLd} />
        {children}
      </body>
    </html>
  );
}