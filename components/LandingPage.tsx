"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Scale,
  ShieldCheck,
  Gavel,
  ArrowUpRight,
  MessageSquare,
  Phone,
  Mail,
  MapPin,
  UploadCloud,
  Users,
  ChevronRight,
} from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PrivacySummary from "@/components/PrivacySummary";
import JsonLd from "@/components/JsonLd";
import { site } from "@/lib/site";

gsap.registerPlugin(ScrollTrigger);

const testimonialReviewsJsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: site.name,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "2",
  },
  review: [
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      author: { "@type": "Person", name: "Lic. Ricardo Mendoza" },
      reviewBody:
        "La capacidad técnica y el rigor procesal de Lex Solis fueron determinantes. Encontraron una salida jurídica donde otros expertos solo veían obstáculos insuperables.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      author: { "@type": "Person", name: "Elena Santillán V." },
      reviewBody:
        "Su discreción es tan impecable como su estrategia. Sentí que mi reputación y mi futuro estaban en manos seguras desde el momento de la primera consulta privada.",
    },
  ],
};

export default function App() {
  const mainRef = useRef<HTMLDivElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [formMessage, setFormMessage] = useState("");
  const [selectedFileName, setSelectedFileName] = useState("");

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero reveal
      gsap.from(".hero-content > *", {
        y: 60,
        opacity: 0,
        duration: 2,
        stagger: 0.15,
        ease: "power4.out",
        delay: 0.5,
      });

      // Scale Image Reveal with GSAP Parallax
      gsap.from(".hero-image", {
        scale: 1.2,
        opacity: 0,
        duration: 2.5,
        ease: "power3.out",
      });

      gsap.to(".hero-image", {
        y: 150,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Section Reveals
      const reveals = gsap.utils.toArray<HTMLElement>(".reveal-section");
      reveals.forEach((section) => {
        gsap.from(section.querySelectorAll(".reveal-item"), {
          y: 40,
          opacity: 0,
          duration: 1.2,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
          },
        });
      });

      // Stat counters
      const counterItems = gsap.utils.toArray<HTMLElement>(".stat-number");
      counterItems.forEach((item) => {
        const valStr = item.innerText.replace(/[^\d]/g, "");
        const val = parseInt(valStr);
        const suffix = item.getAttribute("data-suffix") || "";

        gsap.fromTo(
          item,
          { innerText: 0 },
          {
            innerText: val,
            duration: 2.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 90%",
            },
            onUpdate: function () {
              item.innerText =
                Math.ceil(Number(this.targets()[0].innerText)) + suffix;
            },
          },
        );
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  const validateForm = (form: HTMLFormElement) => {
    const data = new FormData(form);
    const hasRequiredText = ["name", "email", "subject", "message"].every(
      (field) => String(data.get(field) || "").trim().length > 0,
    );
    const hasValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(data.get("email") || "").trim());
    return hasRequiredText && hasValidEmail && Array.from(form.elements).every((element) => {
      if (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement) {
        return element.validity.valid;
      }
      return true;
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const form = event.currentTarget;
    if (isSending || !validateForm(form)) return;
    
    setIsSending(true);
    setFormMessage("");

    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (!response.ok || !result.ok) {
        setFormMessage(result.message || "No se pudo enviar el mensaje. Intenta nuevamente.");
        return;
      }

      form.reset();
      setIsFormValid(false);
      setSelectedFileName("");
      setFormMessage("Mensaje enviado correctamente. Te contactaremos pronto.");
    } catch {
      setFormMessage("Ocurrió un error al enviar el mensaje.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div
      className="bg-charcoal text-white min-h-screen selection:bg-gold-500/20"
      ref={mainRef}
    >
      <SiteHeader variant="home" />

      {/* Hero Section */}
      <section className="hero-section relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop"
            alt="Balanza de la justicia, símbolo de la defensa penal en Lex Solis Jurídico"
            className="hero-image w-full h-full object-cover opacity-20 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/80 to-transparent" />
        </div>

        <div className="container mx-auto px-8 relative z-10 hero-content">
          <span className="inline-block px-4 py-1 mb-8 border border-gold-500/30 text-gold-400 font-sans text-xs tracking-[0.3em] uppercase">
            Protegemos tu libertad
          </span>
          <h1 className="font-serif text-7xl md:text-9xl leading-[0.85] tracking-tighter mb-6">
            Defensa Penal <br />
            <span className="italic text-gold-500 underline decoration-gold-500/20 underline-offset-8">
              Sofisticada.
            </span>
          </h1>
          <p className="text-gold-400 font-sans text-sm md:text-base tracking-wide font-light mb-8">
            Abogado penalista en Chimalhuacán y Ciudad de México
          </p>
          <p className="max-w-xl text-lg text-white/50 leading-relaxed font-light mb-12">
            Realizando una labor contundente, estratégica y confidencial. Nos
            anticipamos a las fiscalías mediante rigor técnico y las
            herramientas jurídicas más avanzadas.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <a
              href="#contact"
              className="bg-gold-500 text-charcoal px-10 py-4 font-bold text-xs tracking-widest uppercase hover:bg-gold-400 transition-all rounded-sm flex items-center gap-3"
            >
              Agendar Caso <ChevronRight className="w-4 h-4" />
            </a>
            <button className="hidden px-10 py-4 border border-white/20 font-bold text-xs tracking-widest uppercase hover:bg-white/10 transition-all rounded-sm">
              Ver Trayectoria
            </button>
          </div>
        </div>

        {/* Floating Vertical Banner */}
        <div className="absolute right-12 bottom-12 hidden md:block">
          <div className="flex flex-col items-center gap-8">
            <div className="h-24 w-px bg-gold-500/30"></div>
            <div className="rotate-90 text-[10px] tracking-[0.4em] uppercase text-gold-500 whitespace-nowrap origin-center">
              Confidencialidad • Integridad • Resultados
            </div>
            <div className="h-24 w-px bg-gold-500/30"></div>
          </div>
        </div>
      </section>

      {/* About: Knowledge & Vanguard */}
      <section
        id="about"
        className="py-32 bg-white text-charcoal reveal-section"
      >
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-12 reveal-item">
              <span className="text-gold-600 font-sans text-xs tracking-[0.4em] uppercase block mb-6 px-4 py-1 border-l-2 border-gold-500">
                Filosofía Lex Solis
              </span>
            </div>
            <div className="lg:col-span-5 reveal-item">
              <h2 className="font-serif text-5xl md:text-6xl leading-tight mb-8">
                Conocimiento <br />& Vanguardia
              </h2>
              <div className="space-y-6 text-charcoal/60 text-lg leading-relaxed font-light">
                <p>
                  Liderados por el Lic. Alejandro Martínez Arrieta, ofrecemos
                  ayuda experta y altamente especializada en el{" "}
                  <strong>Sistema Penal Acusatorio</strong>. No somos un
                  despacho tradicional; somos estrategas legales.
                </p>
                <p>
                  Fusionamos la más alta preparación académica en instituciones
                  de prestigio (UNAM, INDECAJ, INACIPE) con la innovación
                  tecnológica de la Universidad de Salamanca en España.
                </p>
                <a
                  href="#contact"
                  className="mt-8 flex items-center gap-4 text-charcoal font-bold text-xs tracking-widest uppercase group"
                >
                  Conocer más{" "}
                  <ArrowUpRight className="w-5 h-5 text-gold-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            </div>
            <div className="lg:col-span-7 relative reveal-item">
              <div className="aspect-[16/10] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
                  className="w-full h-full object-cover"
                  alt="Despacho de abogados Lex Solis Jurídico en Chimalhuacán, Estado de México"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 hidden md:block w-72 bg-charcoal p-12 text-white shadow-2xl">
                <span className="font-serif text-5xl text-gold-500 block mb-2">
                  01
                </span>
                <span className="text-[10px] uppercase tracking-widest font-bold block mb-4">
                  Método Lex
                </span>
                <p className="text-xs text-white/40 leading-relaxed font-light">
                  Integramos herramientas de Inteligencia Artificial al análisis
                  de carpetas de investigación para detectar irregularidades
                  forenses, documentales y procesales que otros pasan por alto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section id="specialties" className="py-32 bg-charcoal reveal-section">
        <div className="container mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20">
            <div className="reveal-item">
              <span className="text-gold-500 font-sans text-xs tracking-[0.3em] uppercase block mb-4">
                Servicios Exclusivos
              </span>
              <h2 className="font-serif text-5xl md:text-6xl italic">
                Áreas de Práctica
              </h2>
            </div>
            <div className="hidden md:block h-px flex-1 mx-20 bg-white/10 reveal-item"></div>
            <div className="reveal-item text-white/40 text-sm max-w-xs font-light text-right">
              Contamos con un equipo de expertos enfocados exclusivamente en
              materia penal.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 reveal-item">
            <SpecialtyCard
              icon={<Scale className="w-8 h-8" />}
              title="Abogado para Juicios Orales"
              desc="Representación magistral en audiencias iniciales, intermedias y de juicio oral. Interrogatorios y contrainterrogatorios letales."
              href="/abogado-juicios-orales"
            />
            <SpecialtyCard
              icon={<ShieldCheck className="w-8 h-8" />}
              title="Defensa Penal ante Fiscalías"
              desc="Auditoría legal y planeación táctica ante fiscalías para desvanecer imputaciones desde las primeras etapas de investigación."
              href="/abogado-penalista-cdmx"
            />
            <SpecialtyCard
              icon={<Users className="w-8 h-8" />}
              title="Asesoría Legal a Víctimas de Delitos"
              desc="Atención especializada y búsqueda implacable de la verdad y la justicia para garantizar la reparación integral del daño."
              href="/asesoria-victimas-delitos"
            />
          </div>
        </div>
      </section>

      {/* Impact in Numbers */}
      <section
        id="impacto"
        className="py-40 bg-gold-500 text-charcoal reveal-section relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 p-20 opacity-10">
          <Gavel className="w-96 h-96" />
        </div>
        <div className="container mx-auto px-8 relative z-10">
          <div className="text-center mb-24 reveal-item">
            <span className="text-[10px] uppercase tracking-[0.5em] font-black block mb-4">
              Impacto en Números
            </span>
            <h2 className="font-serif text-5xl md:text-7xl">
              Nuestra Trayectoria
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20 text-center">
            <div className="reveal-item">
              <div
                className="font-serif text-8xl mb-4 stat-number"
                data-suffix="+"
              >
                150
              </div>
              <div className="w-20 h-px bg-charcoal/20 mx-auto mb-6"></div>
              <p className="text-[11px] uppercase tracking-widest font-black">
                Carpetas de Investigación Analizadas
              </p>
            </div>
            <div className="reveal-item">
              <div
                className="font-serif text-8xl mb-4 stat-number"
                data-suffix=" hrs"
              >
                24
              </div>
              <div className="w-20 h-px bg-charcoal/20 mx-auto mb-6"></div>
              <p className="text-[11px] uppercase tracking-widest font-black">
                Atención de Urgencia Todos los Días
              </p>
            </div>
            <div className="reveal-item">
              <div
                className="font-serif text-8xl mb-4 stat-number"
                data-suffix="%"
              >
                100
              </div>
              <div className="w-20 h-px bg-charcoal/20 mx-auto mb-6"></div>
              <p className="text-[11px] uppercase tracking-widest font-black">
                Confidencialidad Garantizada
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        id="testimonios"
        className="py-32 bg-white text-charcoal reveal-section"
      >
        <JsonLd data={testimonialReviewsJsonLd} />
        <div className="container mx-auto px-8">
          <div className="text-center mb-20 reveal-item">
            <span className="text-gold-500 font-sans text-xs tracking-[0.3em] uppercase block mb-4">
              Voz de la Experiencia
            </span>
            <h2 className="font-serif text-5xl md:text-6xl italic leading-tight">
              Testimonios que nos Respaldan
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 reveal-item">
            <TestimonialCard
              quote="La capacidad técnica y el rigor procesal de Lex Solis fueron determinantes. Encontraron una salida jurídica donde otros expertos solo veían obstáculos insuperables."
              author="Lic. Ricardo Mendoza"
              role="Director General, Consorcio M"
            />
            <TestimonialCard
              quote="Su discreción es tan impecable como su estrategia. Sentí que mi reputación y mi futuro estaban en manos seguras desde el momento de la primera consulta privada."
              author="Elena Santillán V."
              role="Empresaria del Sector Energético"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-charcoal reveal-section">
        <div className="container mx-auto px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="reveal-item space-y-12">
              <div className="space-y-6">
                <h2 className="font-serif text-5xl md:text-6xl text-gold-500 italic">
                  Contacto Privado
                </h2>
                <p className="text-white/40 text-lg font-light leading-relaxed max-w-md">
                  Inicie una conversación confidencial. Nuestro equipo de
                  respuesta inmediata está disponible para situaciones críticas
                  las 24 horas.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-gold-500/10 rounded-sm flex items-center justify-center border border-gold-500/20">
                    <Mail className="w-5 h-5 text-gold-500" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-white/30 font-bold block mb-1">
                      Escríbanos
                    </span>
                    <p className="text-lg font-serif">ale1806unam@hotmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-gold-500/10 rounded-sm flex items-center justify-center border border-gold-500/20">
                    <Phone className="w-5 h-5 text-gold-500" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-white/30 font-bold block mb-1">
                      Llamada de Urgencia
                    </span>
                    <p className="text-lg font-serif">+52 55 6437 4441</p>
                  </div>
                </div>
                <Link
                  href="/defensa-penal-chimalhuacan"
                  className="flex items-start gap-6 group"
                >
                  <div className="w-12 h-12 bg-gold-500/10 rounded-sm flex items-center justify-center border border-gold-500/20 group-hover:border-gold-500/50 transition-colors">
                    <MapPin className="w-5 h-5 text-gold-500" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-white/30 font-bold block mb-1">
                      Sede en Chimalhuacán
                    </span>
                    <p className="text-lg font-serif text-white group-hover:text-gold-400 transition-colors">
                      Ver despacho local en Chimalhuacán
                    </p>
                  </div>
                </Link>
              </div>
            </div>

            <div className="bg-navy-900/30 p-12 border border-white/5 reveal-item">
              <form
                className="space-y-8"
                onSubmit={handleSubmit}
                onInput={(event) => setIsFormValid(validateForm(event.currentTarget))}
                onChange={(event) => setIsFormValid(validateForm(event.currentTarget))}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <InputField
                    label="Nombre"
                    name="name"
                    placeholder="Ej. Alejandro Soler"
                  />

                  <InputField
                    label="Email"
                    name="email"
                    placeholder="ejemplo@correo.com"
                    type="email"
                  />
                </div>

                <InputField
                  label="Asunto del Caso"
                  name="subject"
                  placeholder="Detección de irregularidades..."
                />

                <div className="relative">
                  <label className="block text-[10px] uppercase font-bold tracking-widest text-gold-500 mb-4">
                    Narrativa de Hechos
                  </label>

                  <textarea
                    name="message"
                    aria-describedby="contact-data-guidance"
                    required
                    className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-gold-500 transition-colors resize-none placeholder:text-white/5 h-24"
                    placeholder="Describa brevemente la situación..."
                  />
                </div>

                <label className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-white/10 rounded-sm hover:border-gold-500/40 transition-colors cursor-pointer group">
  <UploadCloud className="w-8 h-8 text-white/20 mb-3 group-hover:text-gold-500 transition-colors" />

  <span className="text-[9px] uppercase font-bold tracking-widest">
    Adjuntar Evidencia
  </span>

  <span className="mt-2 text-[10px] text-white/30">
    PDF, JPG o PNG · Máx. 5 MB
  </span>

  {selectedFileName && (
    <span className="mt-4 text-xs text-gold-400 font-light normal-case tracking-normal text-center break-all">
      Archivo seleccionado: {selectedFileName}
    </span>
  )}

  <input
    name="evidence"
    type="file"
    accept=".pdf,.jpg,.jpeg,.png"
    className="hidden"
    onChange={(event) => {
      const file = event.target.files?.[0];
      setSelectedFileName(file ? file.name : "");
    }}
  />
</label>

                <PrivacySummary />

                {formMessage && (
                  <p className="text-xs text-white/50 font-light">
                    {formMessage}
                  </p>
                )}

                <p id="contact-submit-help" className="text-sm text-white/70">
                  Complete todos los campos obligatorios con un correo válido y acepte el aviso para habilitar el envío. El archivo adjunto es opcional.
                </p>
                <button
                  type="submit"
                  disabled={isSending || !isFormValid}
                  aria-describedby="contact-submit-help"
                  className="w-full bg-gold-500 text-charcoal py-5 font-bold text-xs tracking-[0.4em] uppercase hover:bg-gold-400 transition-all rounded-sm shadow-2xl disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSending ? "Enviando..." : "Enviar mensaje"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function SpecialtyCard({
  icon,
  title,
  desc,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  href?: string;
}) {
  const content = (
    <>
      <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-all -translate-y-4 group-hover:translate-y-0 text-gold-500">
        <ArrowUpRight className="w-6 h-6" />
      </div>
      <div className="text-gold-500 mb-10 transform transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-3">
        {icon}
      </div>
      <h3 className="font-serif text-3xl mb-6 group-hover:text-gold-400 transition-colors">
        {title}
      </h3>
      <p className="text-white/30 leading-relaxed font-light mb-10 group-hover:text-white/60 transition-colors">
        {desc}
      </p>
      <div className="h-px w-0 bg-gold-500 transition-all duration-700 group-hover:w-full"></div>
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="p-12 bg-charcoal hover:bg-navy-900 group transition-all duration-700 cursor-pointer overflow-hidden relative block"
      >
        {content}
      </Link>
    );
  }

  return (
    <div className="p-12 bg-charcoal hover:bg-navy-900 group transition-all duration-700 cursor-pointer overflow-hidden relative">
      {content}
    </div>
  );
}

function TestimonialCard({
  quote,
  author,
  role,
}: {
  quote: string;
  author: string;
  role: string;
}) {
  return (
    <div className="p-16 bg-charcoal text-white relative overflow-hidden group border border-white/5">
      <div className="absolute top-0 right-0 w-48 h-48 bg-gold-500/5 -translate-y-1/2 translate-x-1/2 rounded-full blur-3xl group-hover:bg-gold-500/10 transition-colors" />
      <MessageSquare className="w-12 h-12 text-gold-500/10 mb-10" />
      <blockquote className="font-serif text-2xl italic leading-relaxed mb-12 text-white/80">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <div className="flex items-center gap-6">
        <div className="w-16 h-px bg-gold-500" />
        <div>
          <div className="text-sm font-black uppercase tracking-widest text-gold-400">
            {author}
          </div>
          <div className="text-[10px] text-white/30 uppercase tracking-[0.3em] mt-1">
            {role}
          </div>
        </div>
      </div>
    </div>
  );
}

function InputField({
  label,
  placeholder,
  type = "text",
  name,
}: {
  label: string;
  placeholder: string;
  type?: string;
  name: string;
}) {
  return (
    <div className="relative">
      <label
        htmlFor={name}
        className="block text-[10px] uppercase font-black tracking-[0.2em] text-gold-500 mb-4"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        required
        type={type}
        className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-gold-500 transition-colors placeholder:text-white/5 font-light"
        placeholder={placeholder}
      />
    </div>
  );
}
