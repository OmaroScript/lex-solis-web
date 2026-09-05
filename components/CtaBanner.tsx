import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { site } from "@/lib/site";

export default function CtaBanner({
  title = "¿Necesitas una defensa penal estratégica?",
  description = "Agenda una consulta confidencial con nuestro equipo. Respuesta de urgencia las 24 horas.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="py-24 bg-gold-500 text-charcoal">
      <div className="container mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="max-w-xl">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">{title}</h2>
          <p className="text-charcoal/70 font-light leading-relaxed">
            {description}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 shrink-0">
          <a
            href={site.whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-3 bg-charcoal text-white px-10 py-4 font-bold text-xs tracking-widest uppercase hover:bg-navy-900 transition-all rounded-sm"
          >
            <FaWhatsapp className="w-4 h-4" />
            Agendar por WhatsApp
          </a>
          <Link
            href="/#contact"
            className="flex items-center justify-center gap-3 border border-charcoal/30 px-10 py-4 font-bold text-xs tracking-widest uppercase hover:bg-charcoal/10 transition-all rounded-sm"
          >
            Ir al formulario <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
