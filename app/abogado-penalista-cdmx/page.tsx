import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import {
  TextSection,
  ChecklistSection,
  FaqSection,
} from "@/components/ContentBlocks";
import { site, siteUrl, breadcrumbJsonLd } from "@/lib/site";

const path = "/abogado-penalista-cdmx";
const title = "Abogado Penalista en CDMX | Defensa Penal Estratégica – Lex Solis";
const description =
  "Defensa penal en Ciudad de México con estrategia técnica ante fiscalías. Consulta confidencial las 24 horas.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, url: `${siteUrl}${path}` },
};

const faqs = [
  {
    question: "¿En qué zonas de la Ciudad de México atienden casos?",
    answer:
      "Representamos casos ante fiscalías y juzgados en las 16 alcaldías de la Ciudad de México, con presencia coordinada desde nuestra sede en el Estado de México.",
  },
  {
    question: "¿Cuánto tiempo tarda una defensa penal en resolverse?",
    answer:
      "Depende de la etapa procesal y la complejidad de la carpeta de investigación. En la primera consulta te damos un diagnóstico realista de los tiempos y las salidas alternas disponibles.",
  },
  {
    question: "¿Atienden casos con detención en flagrancia?",
    answer:
      "Sí. Contamos con atención de urgencia las 24 horas para acompañar audiencias iniciales derivadas de detenciones en flagrancia en la Ciudad de México y el Estado de México.",
  },
];

export default function Page() {
  return (
    <ServicePageLayout
      eyebrow="Defensa Penal en CDMX"
      title={
        <>
          Abogado Penalista en{" "}
          <span className="italic text-gold-500">Ciudad de México</span>
        </>
      }
      description="Estrategia técnica ante fiscalías y juzgados de la Ciudad de México, respaldada por rigor procesal y análisis riguroso de cada carpeta de investigación."
      crumbLabel="Abogado Penalista CDMX"
      jsonLd={[
        {
          "@context": "https://schema.org",
          "@type": "LegalService",
          name: `${site.name} - Defensa Penal en Ciudad de México`,
          url: `${siteUrl}${path}`,
          areaServed: "Ciudad de México",
          provider: { "@type": "LegalService", name: site.name },
          telephone: site.phoneE164,
          email: site.email,
        },
        breadcrumbJsonLd([
          { name: "Inicio", path: "/" },
          { name: "Abogado Penalista CDMX", path },
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
      <TextSection eyebrow="Presencia en la Capital" title="Litigio penal con estándar de despacho boutique">
        <p>
          En la Ciudad de México, la velocidad y el rigor técnico marcan la
          diferencia entre una carpeta que avanza sin control y una defensa
          que se anticipa a cada movimiento de la fiscalía. Como{" "}
          <strong>abogado penalista en CDMX</strong>, el {site.lawyer}{" "}
          encabeza cada caso con auditoría documental, análisis forense y
          planeación procesal desde la primera entrevista.
        </p>
        <p>
          Trabajamos bajo el Sistema Penal Acusatorio, con experiencia en
          audiencias ante los juzgados de control y tribunales de enjuiciamiento
          de la capital, así como en la interlocución directa con agencias del
          Ministerio Público.
        </p>
      </TextSection>

      <ChecklistSection
        title="Qué incluye la defensa penal en CDMX"
        items={[
          "Análisis técnico de la carpeta de investigación desde etapa inicial.",
          "Acompañamiento en audiencias ante juzgados de control de la Ciudad de México.",
          "Estrategia de litigio en juicios orales y salidas alternas al proceso.",
          "Atención de urgencia las 24 horas para detenciones en flagrancia.",
          "Comunicación confidencial y directa con el titular del caso.",
        ]}
      />

      <FaqSection items={faqs} />
    </ServicePageLayout>
  );
}
