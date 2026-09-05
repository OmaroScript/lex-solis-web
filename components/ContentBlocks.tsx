import { CheckCircle2 } from "lucide-react";

export function TextSection({
  eyebrow,
  title,
  children,
  tone = "light",
}: {
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
  tone?: "light" | "dark";
}) {
  const isLight = tone === "light";
  return (
    <section
      className={
        isLight
          ? "py-24 bg-white text-charcoal"
          : "py-24 bg-charcoal text-white"
      }
    >
      <div className="container mx-auto px-8 max-w-4xl">
        {eyebrow && (
          <span
            className={
              isLight
                ? "text-gold-600 font-sans text-xs tracking-[0.4em] uppercase block mb-6 px-4 py-1 border-l-2 border-gold-500"
                : "text-gold-500 font-sans text-xs tracking-[0.4em] uppercase block mb-6 px-4 py-1 border-l-2 border-gold-500"
            }
          >
            {eyebrow}
          </span>
        )}
        <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-8">
          {title}
        </h2>
        <div
          className={
            isLight
              ? "space-y-6 text-charcoal/60 text-lg leading-relaxed font-light"
              : "space-y-6 text-white/50 text-lg leading-relaxed font-light"
          }
        >
          {children}
        </div>
      </div>
    </section>
  );
}

export function ChecklistSection({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <section className="py-24 bg-navy-900/30">
      <div className="container mx-auto px-8 max-w-4xl">
        <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-12 text-gold-500">
          {title}
        </h2>
        <ul className="space-y-6">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-gold-500 shrink-0 mt-0.5" />
              <span className="text-white/70 text-lg font-light leading-relaxed">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function FaqSection({
  title = "Preguntas Frecuentes",
  items,
}: {
  title?: string;
  items: { question: string; answer: string }[];
}) {
  return (
    <section className="py-24 bg-white text-charcoal">
      <div className="container mx-auto px-8 max-w-4xl">
        <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-12">
          {title}
        </h2>
        <div className="space-y-10 divide-y divide-charcoal/10">
          {items.map((item) => (
            <div key={item.question} className="pt-10 first:pt-0">
              <h3 className="font-serif text-2xl mb-4">{item.question}</h3>
              <p className="text-charcoal/60 text-lg leading-relaxed font-light">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
