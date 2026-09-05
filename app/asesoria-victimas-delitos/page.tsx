import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import {
  TextSection,
  ChecklistSection,
  FaqSection,
} from "@/components/ContentBlocks";
import { site, siteUrl, breadcrumbJsonLd } from "@/lib/site";

const path = "/asesoria-victimas-delitos";
const title = "Asesoría Legal a Víctimas de Delitos – Lex Solis Jurídico";
const description =
  "Acompañamiento legal especializado para víctimas, enfocado en la reparación integral del daño.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, url: `${siteUrl}${path}` },
};

const faqs = [
  {
    question: "¿Qué es la reparación integral del daño?",
    answer:
      "Es el conjunto de medidas —económicas, materiales y morales— a las que tiene derecho una víctima para resarcir el daño sufrido por un delito. La representamos y exigimos a lo largo de todo el proceso penal.",
  },
  {
    question: "¿Puedo pedir asesoría si aún no denuncio el delito?",
    answer:
      "Sí. Te orientamos desde antes de presentar la denuncia para que la primera declaración y la integración de la carpeta de investigación se hagan de forma correcta.",
  },
  {
    question: "¿Acompañan a la víctima durante todo el proceso?",
    answer:
      "Sí, damos seguimiento desde la carpeta de investigación hasta la resolución del caso, incluida la etapa de reparación del daño.",
  },
];

export default function Page() {
  return (
    <ServicePageLayout
      eyebrow="Representación de Víctimas"
      title={
        <>
          Asesoría Legal a{" "}
          <span className="italic text-gold-500">Víctimas de Delitos</span>
        </>
      }
      description="Acompañamiento especializado y búsqueda implacable de la verdad y la justicia para garantizar la reparación integral del daño."
      crumbLabel="Asesoría a Víctimas"
      jsonLd={[
        {
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Asesoría legal a víctimas de delitos",
          name: "Asesoría Legal a Víctimas de Delitos",
          provider: { "@type": "LegalService", name: site.name },
          url: `${siteUrl}${path}`,
          areaServed: ["Ciudad de México", "Estado de México"],
        },
        breadcrumbJsonLd([
          { name: "Inicio", path: "/" },
          { name: "Asesoría a Víctimas", path },
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
      <TextSection eyebrow="Voz para la Víctima" title="Representación técnica desde la primera denuncia">
        <p>
          Ser víctima de un delito implica enfrentar un proceso penal que
          puede sentirse ajeno y desalentador. Nuestra{" "}
          <strong>asesoría legal a víctimas de delitos</strong> busca
          equilibrar esa relación, asegurando que la carpeta de investigación
          se integre correctamente y que la voz de la víctima tenga peso real
          en cada etapa.
        </p>
        <p>
          Damos seguimiento puntual a la investigación, participamos en
          audiencias y exigimos la reparación integral del daño, con la
          confidencialidad y el rigor que caracteriza a Lex Solis Jurídico.
        </p>
      </TextSection>

      <ChecklistSection
        title="Cómo acompañamos a las víctimas"
        items={[
          "Orientación legal antes y después de presentar la denuncia.",
          "Seguimiento activo de la carpeta de investigación ante el Ministerio Público.",
          "Representación en audiencias como coadyuvante de la víctima.",
          "Gestión y exigencia de la reparación integral del daño.",
          "Acompañamiento confidencial en cada etapa del proceso.",
        ]}
      />

      <FaqSection items={faqs} />
    </ServicePageLayout>
  );
}
