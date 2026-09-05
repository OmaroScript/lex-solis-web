import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import {
  TextSection,
  ChecklistSection,
  FaqSection,
} from "@/components/ContentBlocks";
import { site, siteUrl, breadcrumbJsonLd } from "@/lib/site";

const path = "/abogado-juicios-orales";
const title = "Abogado para Juicios Orales en México – Lex Solis Jurídico";
const description =
  "Representación en audiencias iniciales, intermedias y de juicio oral. Estrategia técnica en cada etapa del proceso.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, url: `${siteUrl}${path}` },
};

const faqs = [
  {
    question: "¿Cuáles son las etapas de un juicio oral en México?",
    answer:
      "El proceso penal acusatorio se divide en investigación, etapa intermedia y juicio oral. Cada una tiene audiencias específicas donde la estrategia y los tiempos de la defensa son determinantes.",
  },
  {
    question: "¿Qué pasa si mi caso llega hasta la audiencia de juicio oral?",
    answer:
      "Preparamos interrogatorios, contrainterrogatorios y la teoría del caso con anticipación, apoyándonos en el análisis técnico de la carpeta de investigación reunido desde etapas tempranas.",
  },
  {
    question: "¿Siempre es necesario llegar a juicio oral?",
    answer:
      "No. Muchos casos se resuelven antes mediante salidas alternas o formas de terminación anticipada. Evaluamos en cada etapa cuál es la vía más favorable para el cliente.",
  },
];

export default function Page() {
  return (
    <ServicePageLayout
      eyebrow="Litigio Oral"
      title={
        <>
          Abogado para{" "}
          <span className="italic text-gold-500">Juicios Orales</span>
        </>
      }
      description="Representación magistral en audiencias iniciales, intermedias y de juicio oral dentro del Sistema Penal Acusatorio mexicano."
      crumbLabel="Abogado Juicios Orales"
      jsonLd={[
        {
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Representación en juicios orales",
          name: "Abogado para Juicios Orales",
          provider: { "@type": "LegalService", name: site.name },
          url: `${siteUrl}${path}`,
          areaServed: ["Ciudad de México", "Estado de México"],
        },
        breadcrumbJsonLd([
          { name: "Inicio", path: "/" },
          { name: "Abogado Juicios Orales", path },
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
      <TextSection eyebrow="Sistema Penal Acusatorio" title="Interrogatorios y estrategia procesal de alto nivel">
        <p>
          Un juicio oral se gana antes de entrar a la sala de audiencias.
          Como <strong>abogado para juicios orales</strong>, construimos la
          teoría del caso desde la carpeta de investigación, identificando
          irregularidades forenses, documentales y procesales que definen el
          resultado de cada audiencia.
        </p>
        <p>
          Acompañamos al cliente en audiencia inicial, etapa intermedia y
          juicio oral, con interrogatorios y contrainterrogatorios preparados
          técnicamente y una comunicación clara sobre cada decisión procesal.
        </p>
      </TextSection>

      <ChecklistSection
        title="Nuestra representación en cada audiencia"
        items={[
          "Preparación de la teoría del caso desde la etapa de investigación.",
          "Representación en audiencia inicial, de vinculación a proceso e intermedia.",
          "Interrogatorio y contrainterrogatorio de testigos y peritos en juicio oral.",
          "Evaluación de salidas alternas antes de llegar a juicio.",
          "Seguimiento puntual de plazos y términos procesales.",
        ]}
      />

      <FaqSection items={faqs} />
    </ServicePageLayout>
  );
}
