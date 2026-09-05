import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";
import JsonLd from "@/components/JsonLd";
import { blogPosts } from "@/lib/blog";
import { breadcrumbJsonLd, siteUrl } from "@/lib/site";

const title = "Blog Jurídico – Lex Solis Jurídico";
const description =
  "Artículos sobre defensa penal, derechos ante una detención y el proceso penal acusatorio en México, escritos por el equipo de Lex Solis Jurídico.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/blog" },
  openGraph: { title, description, url: `${siteUrl}/blog` },
};

export default function BlogIndexPage() {
  return (
    <div className="bg-charcoal text-white min-h-screen">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Inicio", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />
      <SiteHeader variant="sub" />
      <PageHero
        eyebrow="Recursos Legales"
        title="Blog Jurídico"
        description="Análisis y guías prácticas sobre defensa penal, juicios orales y los derechos de quienes enfrentan un proceso penal en México."
        crumbLabel="Blog"
      />

      <section className="py-24 bg-white text-charcoal">
        <div className="container mx-auto px-8 max-w-4xl grid gap-px bg-charcoal/10">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block p-10 bg-white hover:bg-gold-50 transition-colors"
            >
              <div className="flex items-start justify-between gap-8">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gold-600 font-bold mb-3">
                    {new Date(post.datePublished).toLocaleDateString("es-MX", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  <h2 className="font-serif text-2xl md:text-3xl mb-3 group-hover:text-gold-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-charcoal/60 font-light leading-relaxed max-w-2xl">
                    {post.excerpt}
                  </p>
                </div>
                <ArrowUpRight className="w-6 h-6 text-gold-500 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
