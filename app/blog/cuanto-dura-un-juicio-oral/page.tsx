import type { Metadata } from "next";
import BlogPostLayout from "@/components/BlogPostLayout";
import { blogPosts } from "@/lib/blog";
import { siteUrl } from "@/lib/site";

const post = blogPosts.find((p) => p.slug === "cuanto-dura-un-juicio-oral")!;
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
        Una de las preguntas más frecuentes que recibimos es cuánto dura un
        juicio oral en México. No hay una respuesta única: el tiempo depende
        de la complejidad del caso, la carga de trabajo del juzgado y las
        estrategias de cada parte. Aun así, es posible ubicar rangos realistas
        por etapa dentro del Sistema Penal Acusatorio.
      </p>

      <h2>Etapa de investigación</h2>
      <p>
        Desde la denuncia o detención hasta la formulación de imputación, esta
        etapa puede durar desde algunas semanas hasta varios meses. La
        investigación complementaria, si el juez la autoriza, tiene un plazo
        máximo que normalmente no excede los seis meses en delitos que
        no ameritan prisión preventiva.
      </p>

      <h2>Etapa intermedia</h2>
      <p>
        Aquí se depuran los hechos, pruebas y acuerdos entre las partes antes
        del juicio. Suele resolverse en un periodo de uno a tres meses,
        dependiendo de la agenda del juzgado y de si existen incidentes
        procesales que resolver.
      </p>

      <h2>Audiencia de juicio oral</h2>
      <p>
        La audiencia de juicio propiamente dicha puede desahogarse en una sola
        sesión para casos sencillos, o extenderse por varias sesiones a lo
        largo de semanas cuando hay múltiples testigos, peritos y pruebas por
        desahogar.
      </p>

      <h2>¿Por qué varían tanto los tiempos?</h2>
      <p>
        La carga de trabajo de fiscalías y juzgados, la disponibilidad de
        agenda, los recursos e incidentes que se promueven, y la estrategia
        de la defensa influyen directamente en la duración total del proceso.
        Una <strong>defensa penal estratégica</strong> puede acortar tiempos
        al identificar salidas alternas viables desde etapas tempranas, o
        bien priorizar el litigio hasta juicio cuando conviene al caso.
      </p>

      <h2>Cómo te ayuda un abogado penalista a gestionar los tiempos</h2>
      <p>
        En Lex Solis Jurídico damos seguimiento puntual a cada plazo procesal
        y te mantenemos informado sobre el avance real de tu carpeta, para que
        nunca enfrentes el proceso sin claridad sobre lo que sigue.
      </p>
    </BlogPostLayout>
  );
}
