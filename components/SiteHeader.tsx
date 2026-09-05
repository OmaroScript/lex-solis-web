import Link from "next/link";
import { Scale, ChevronDown } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { navLinks, site } from "@/lib/site";

export default function SiteHeader({
  variant = "sub",
}: {
  variant?: "home" | "sub";
}) {
  const hrefFor = (id: string) => (variant === "home" ? `#${id}` : `/#${id}`);

  return (
    <nav className="fixed top-0 w-full z-50 flex items-center justify-between px-8 py-6 border-b border-white/5 backdrop-blur-xl bg-charcoal/40">
      <Link href="/" className="flex items-center gap-2 cursor-pointer group">
        <div className="w-8 h-8 flex items-center justify-center bg-gold-500 rounded-sm">
          <Scale className="text-charcoal w-5 h-5" />
        </div>
        <span className="font-serif text-xl tracking-wide font-light">
          LEX <span className="text-gold-400">SOLIS</span>
        </span>
      </Link>

      <div className="hidden lg:flex items-center gap-12 text-[10px] tracking-[0.2em] font-medium uppercase text-white/40">
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={hrefFor(link.id)}
            className="hover:text-gold-400 transition-colors"
          >
            {link.label}
          </a>
        ))}
        <div className="relative group py-4 -my-4">
          <button className="flex items-center gap-1 hover:text-gold-400 transition-colors">
            ZONAS
            <ChevronDown className="w-3 h-3" />
          </button>
          <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 hidden group-hover:block">
            <div className="flex flex-col min-w-[220px] bg-charcoal border border-white/10 rounded-sm shadow-2xl overflow-hidden normal-case tracking-normal">
              <Link
                href="/abogado-penalista-cdmx"
                className="px-6 py-4 text-xs hover:bg-white/5 hover:text-gold-400 transition-colors"
              >
                Ciudad de México
              </Link>
              <Link
                href="/defensa-penal-chimalhuacan"
                className="px-6 py-4 text-xs hover:bg-white/5 hover:text-gold-400 transition-colors border-t border-white/5"
              >
                Chimalhuacán
              </Link>
            </div>
          </div>
        </div>
        <Link href="/blog" className="hover:text-gold-400 transition-colors">
          Blog
        </Link>
      </div>

      <a
        href={site.whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2 text-[10px] tracking-[0.2em] font-bold uppercase bg-gold-500 text-charcoal px-8 py-3 rounded-sm hover:bg-gold-400 transition-all"
      >
        <FaWhatsapp className="w-4 h-4" />
        Consulta Legal
      </a>
    </nav>
  );
}
