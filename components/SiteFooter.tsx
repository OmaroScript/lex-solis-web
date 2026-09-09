import Link from "next/link";
import { Scale } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaLinkedinIn,
} from "react-icons/fa";
import { site } from "@/lib/site";

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="w-14 h-14 rounded-full border border-gold-500/30 flex items-center justify-center text-white/90 hover:text-gold-400 hover:border-gold-400 transition-all"
    >
      {children}
    </a>
  );
}

export default function SiteFooter() {
  return (
    <footer className="py-20 border-t border-white/5 bg-charcoal">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 items-start">
          <div className="md:col-span-2 space-y-8">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 flex items-center justify-center bg-gold-500 rounded-sm">
                <Scale className="text-charcoal w-5 h-5" />
              </div>
              <span className="font-serif text-2xl tracking-wide font-light uppercase">
                LEX <span className="text-gold-400">SOLIS</span>
              </span>
            </Link>
            <p className="text-white/30 text-sm leading-relaxed max-w-sm font-light italic">
              &quot;Donde el rigor del derecho se encuentra con la
              sofistación de la defensa estratégica.&quot;
            </p>
          </div>

          <div className="space-y-6">
            <h5 className="text-[10px] uppercase tracking-[0.3em] font-bold text-gold-500">
              Legal
            </h5>
            <div className="flex flex-col gap-4 text-xs text-white/40 font-light">
              <Link href="/aviso-de-privacidad" className="hover:text-gold-500 transition-colors">
                Aviso de privacidad
              </Link>
              <a href="#" className="hover:text-gold-500 transition-colors">
                Términos del Servicio
              </a>
              <a href="#" className="hover:text-gold-500 transition-colors">
                Ética y Cumplimiento
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h5 className="text-[10px] uppercase tracking-[0.3em] font-bold text-gold-500">
              Sede Central
            </h5>
            <div className="text-xs text-white/40 font-light leading-relaxed space-y-3">
              <p>
                {site.address.streetAddress},
                <br />
                {site.address.addressLocality}, {site.address.addressRegion},
                <br />
                CP {site.address.postalCode}
              </p>
              <p>
                <a
                  href={`tel:${site.phoneE164}`}
                  className="hover:text-gold-500 transition-colors"
                >
                  {site.phoneDisplay}
                </a>
              </p>
              <p>Atención de urgencia las 24 horas</p>
              <p>
                <Link
                  href="/defensa-penal-chimalhuacan"
                  className="hover:text-gold-500 transition-colors"
                >
                  Defensa penal en Chimalhuacán →
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-[9px] uppercase tracking-widest text-white/20 font-bold">
          <span>
            © 2026 LEX SOLIS JURÍDICO. TODOS LOS DERECHOS RESERVADOS.
          </span>
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
            <div className="flex items-center gap-4">
              <SocialIcon href={site.social.facebook} label="Facebook">
                <FaFacebookF className="w-5 h-5" />
              </SocialIcon>
              <SocialIcon href={site.social.instagram} label="Instagram">
                <FaInstagram className="w-5 h-5" />
              </SocialIcon>
              <SocialIcon href={site.whatsappLink} label="WhatsApp">
                <FaWhatsapp className="w-5 h-5" />
              </SocialIcon>
              <SocialIcon href="" label="LinkedIn">
                <FaLinkedinIn className="w-5 h-5" />
              </SocialIcon>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
