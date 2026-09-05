import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function PageHero({
  eyebrow,
  title,
  description,
  crumbLabel,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  crumbLabel: string;
}) {
  return (
    <section className="relative pt-48 pb-24 overflow-hidden border-b border-white/5">
      <div className="container mx-auto px-8 relative z-10">
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-white/30 font-medium mb-8">
          <Link href="/" className="hover:text-gold-400 transition-colors">
            Inicio
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-white/50">{crumbLabel}</span>
        </div>
        <span className="inline-block px-4 py-1 mb-8 border border-gold-500/30 text-gold-400 font-sans text-xs tracking-[0.3em] uppercase">
          {eyebrow}
        </span>
        <h1 className="font-serif text-5xl md:text-7xl leading-[0.95] tracking-tight mb-8 max-w-4xl">
          {title}
        </h1>
        <p className="max-w-2xl text-lg text-white/50 leading-relaxed font-light">
          {description}
        </p>
      </div>
    </section>
  );
}
