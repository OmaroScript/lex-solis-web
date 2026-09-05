export type BlogPost = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  excerpt: string;
  datePublished: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "que-hacer-si-me-detienen",
    title: "Qué Hacer si Te Detienen: Guía Legal",
    shortTitle: "Qué hacer si te detienen",
    description:
      "Guía paso a paso sobre tus derechos y qué hacer ante una detención en México. Información clara de un despacho penalista.",
    excerpt:
      "Tus derechos y los pasos concretos a seguir desde el primer minuto de una detención en México.",
    datePublished: "2026-08-10",
  },
  {
    slug: "cuanto-dura-un-juicio-oral",
    title: "¿Cuánto Dura un Juicio Oral en México?",
    shortTitle: "Duración de un juicio oral",
    description:
      "Explicación de los tiempos y etapas de un juicio oral en el sistema penal acusatorio mexicano.",
    excerpt:
      "Los tiempos reales de cada etapa del proceso penal acusatorio, de la investigación a la sentencia.",
    datePublished: "2026-08-17",
  },
  {
    slug: "defensa-privada-vs-oficio",
    title: "Defensa Privada vs. Defensor de Oficio: Diferencias",
    shortTitle: "Defensa privada vs. de oficio",
    description:
      "Comparativa objetiva entre contratar un abogado penalista privado o un defensor público de oficio en México.",
    excerpt:
      "Una comparación objetiva para decidir con información, sin descalificar la defensoría pública.",
    datePublished: "2026-08-24",
  },
];
