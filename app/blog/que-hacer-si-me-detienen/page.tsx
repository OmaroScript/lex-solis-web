import type { Metadata } from "next";
import BlogPostLayout from "@/components/BlogPostLayout";
import { blogPosts } from "@/lib/blog";
import { siteUrl } from "@/lib/site";

const post = blogPosts.find((p) => p.slug === "que-hacer-si-me-detienen")!;
const path = `/blog/${post.slug}`;

export const metadata: Metadata = {
  title: `${post.title} – Lex Solis Jurídico`,
  description: post.description,
  alternates: { canonical: path },
  openGraph: {
    title: `${post.title} – Lex Solis Jurídico`,
    description: post.description,
    url: `${siteUrl}${path}`,
  },
};

export default function Page() {
  return (
    <BlogPostLayout post={post}>
      <p>
        Una detención es uno de los momentos más vulnerables que puede
        enfrentar una persona. Lo que hagas —o dejes de hacer— en los primeros
        minutos puede definir el rumbo de todo el proceso penal. Esta guía
        resume, en términos claros, qué hacer si te detienen en México.
      </p>

      <h2>1. Mantén la calma y no opongas resistencia física</h2>
      <p>
        Resistirte a una detención, aunque la consideres injusta, puede
        derivar en cargos adicionales. Identifica a la autoridad, solicita que
        se identifique plenamente y evita cualquier confrontación física.
      </p>

      <h2>2. Ejerce tu derecho a guardar silencio</h2>
      <p>
        No estás obligado a declarar sin la presencia de tu abogado. Cualquier
        cosa que digas puede usarse en tu contra durante la integración de la
        carpeta de investigación. Es válido —y recomendable— decir que
        esperarás a tu defensor antes de rendir declaración.
      </p>

      <h2>3. Exige tu derecho a una llamada y a un abogado</h2>
      <p>
        La Constitución te reconoce el derecho a comunicarte con quien
        consideres y a ser asistido por un <strong>abogado penalista</strong>{" "}
        de tu elección. Si no cuentas con uno, exige que se te asigne un
        defensor público, pero comunica de inmediato a tu familia para que
        contacte a un despacho especializado.
      </p>

      <h2>4. Pide que se documente cada actuación</h2>
      <p>
        Toda detención debe registrarse: hora, lugar, motivo y autoridad que
        interviene. Estas actuaciones son clave para detectar irregularidades
        procesales que después pueden impugnarse ante el juez de control.
      </p>

      <h2>5. No firmes documentos sin asesoría</h2>
      <p>
        Nunca firmes actas, confesiones o acuerdos sin que tu abogado los
        revise primero. Un despacho de defensa penal estratégica analizará
        cada documento antes de que tomes cualquier decisión.
      </p>

      <h2>6. Contacta a un despacho de defensa penal de inmediato</h2>
      <p>
        La primera hora tras una detención es determinante. En Lex Solis
        Jurídico ofrecemos atención de urgencia las 24 horas para acompañar
        audiencias iniciales y proteger tus derechos desde el primer momento.
      </p>
    </BlogPostLayout>
  );
}
