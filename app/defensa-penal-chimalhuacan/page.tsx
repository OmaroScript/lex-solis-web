import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import {
  TextSection,
  ChecklistSection,
  FaqSection,
} from "@/components/ContentBlocks";
import { site, siteUrl, breadcrumbJsonLd } from "@/lib/site";

const path = "/defensa-penal-chimalhuacan";
const title = "Abogado Penalista en Chimalhuacán, Edomex – Lex Solis Jurídico";
const description =
  "Despacho local en Chimalhuacán especializado en defensa penal y juicios orales. Atención confidencial las 24 horas.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, url: `${siteUrl}${path}` },
};

const faqs = [
  {
    question: "¿El despacho tiene oficina física en Chimalhuacán?",
    answer: `Sí, nuestra sede central está en ${site.address.streetAddress}, ${site.address.addressLocality}, ${site.address.addressRegion}, CP ${site.address.postalCode}.`,
  },
  {
    question: "¿Atienden casos que se litigan fuera de Chimalhuacán?",
    answer:
      "Sí. Desde nuestra sede en Chimalhuacán representamos casos en juzgados y fiscalías de todo el Estado de México y la Ciudad de México.",
  },
  {
    question: "¿Puedo agendar una consulta de urgencia fuera de horario?",
    answer:
      "Sí, contamos con línea de atención de urgencia las 24 horas para situaciones críticas como detenciones o citatorios inmediatos.",
  },
];

export default function Page() {
  return (
    <ServicePageLayout
      eyebrow="Despacho Local"
      title={
        <>
          Defensa Penal en{" "}
          <span className="italic text-gold-500">Chimalhuacán</span>
        </>
      }
      description="Despacho penalista con sede en Chimalhuacán, Estado de México, especializado en juicios orales, defensa ante fiscalías y asesoría a víctimas."
      crumbLabel="Defensa Penal Chimalhuacán"
      jsonLd={[
        {
          "@context": "https://schema.org",
          "@type": "LegalService",
          name: site.name,
          url: `${siteUrl}${path}`,
          telephone: site.phoneE164,
          email: site.email,
          address: {
            "@type": "PostalAddress",
            streetAddress: site.address.streetAddress,
            addressLocality: site.address.addressLocality,
            addressRegion: site.address.addressRegion,
            postalCode: site.address.postalCode,
            addressCountry: site.address.addressCountry,
          },
          areaServed: ["Chimalhuacán", "Estado de México"],
        },
        breadcrumbJsonLd([
          { name: "Inicio", path: "/" },
          { name: "Defensa Penal Chimalhuacán", path },
        ]),
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
          })),
        },
      ]}
    >
      <TextSection eyebrow="Presencia Local" title="Un despacho penalista arraigado en Chimalhuacán">
        <p>
          {site.name} tiene su sede central en{" "}
          {site.address.streetAddress}, {site.address.addressLocality},{" "}
          {site.address.addressRegion}. Desde ahí atendemos vecinos y
          empresas del municipio que enfrentan un proceso penal, con la misma
          rigurosidad técnica que aplicamos en casos de la Ciudad de México.
        </p>
        <p>
          Conocer de cerca el funcionamiento de las fiscalías y juzgados de la
          región nos permite anticipar tiempos, identificar irregularidades
          procesales y construir una defensa penal sólida desde la primera
          notificación.
        </p>
      </TextSection>

      <ChecklistSection
        title="Servicios para clientes de Chimalhuacán y la región"
        items={[
          "Defensa penal ante fiscalías del Estado de México.",
          "Representación en juicios orales y audiencias de control.",
          "Asesoría legal a víctimas de delitos en la zona oriente del Edomex.",
          "Consulta presencial en nuestra sede de Chimalhuacán.",
          "Atención de urgencia las 24 horas para detenciones y citatorios.",
        ]}
      />

      <FaqSection items={faqs} />
    </ServicePageLayout>
  );
}
