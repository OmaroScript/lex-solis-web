import type { Metadata } from "next";
import BlogPostLayout from "@/components/BlogPostLayout";
import { blogPosts } from "@/lib/blog";
import { siteUrl } from "@/lib/site";

const post = blogPosts.find((p) => p.slug === "defensa-privada-vs-oficio")!;
const path = `/blog/${post.slug}`;

export const metadata: Metadata = {
  title: `${post.title} – Lex Solis`,
  description: post.description,
  alternates: { canonical: path },
  openGraph: {
    title: `${post.title} – Lex Solis`,
    description: post.description,
    url: `${siteUrl}${path}`,
  },
};

export default function Page() {
  return (
    <BlogPostLayout post={post}>
      <p>
        Cuando enfrentas un proceso penal, una de las primeras decisiones es
        si contratar un abogado penalista privado o aceptar un defensor
        público de oficio. Ambas figuras están reconocidas legalmente y
        cumplen la misma función esencial: garantizar tu derecho a una
        defensa. La diferencia está en cómo se ejerce ese derecho en la
        práctica.
      </p>

      <h2>Carga de trabajo y tiempo dedicado al caso</h2>
      <p>
        Un defensor de oficio suele llevar un número elevado de casos de
        manera simultánea, lo que limita el tiempo disponible para el análisis
        individual de cada carpeta. Un despacho privado, en cambio, puede
        dedicar más horas de investigación, entrevistas y preparación
        específica a tu caso.
      </p>

      <h2>Elección y continuidad del abogado</h2>
      <p>
        Con un defensor de oficio no siempre puedes elegir quién te
        representa, y en algunos casos el abogado puede cambiar durante el
        proceso. Al contratar defensa privada, eliges directamente a quien
        llevará tu caso y mantienes continuidad con la misma persona de inicio
        a fin.
      </p>

      <h2>Estrategia técnica y recursos de investigación</h2>
      <p>
        Un despacho especializado puede invertir en peritajes independientes,
        análisis forense y herramientas tecnológicas para detectar
        irregularidades en la carpeta de investigación. Esa capacidad de
        inversión suele ser mayor que la de la defensoría pública, que opera
        con recursos institucionales limitados.
      </p>

      <h2>Costo</h2>
      <p>
        La defensoría pública es gratuita, mientras que la defensa privada
        implica honorarios. Es una variable real que cada persona debe
        ponderar frente a la complejidad de su caso y lo que está en juego.
      </p>

      <h2>¿Cuándo conviene cada opción?</h2>
      <p>
        Para casos de baja complejidad, la defensoría pública puede ser
        suficiente. En casos con mayor exposición —delitos graves,
        antecedentes de alto perfil o carpetas con irregularidades
        evidentes— una <strong>defensa penal estratégica</strong> privada
        suele ofrecer un margen de maniobra más amplio.
      </p>
      <p>
        En Lex Solis Jurídico ofrecemos una primera consulta confidencial para
        que evalúes, con información clara, cuál es la mejor ruta para tu
        situación.
      </p>
    </BlogPostLayout>
  );
}
