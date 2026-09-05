import Link from "next/link";
import { ChevronRight } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CtaBanner from "@/components/CtaBanner";
import JsonLd from "@/components/JsonLd";
import { site, siteUrl, breadcrumbJsonLd } from "@/lib/site";
import type { BlogPost } from "@/lib/blog";

export default function BlogPostLayout({
  post,
  children,
}: {
  post: BlogPost;
  children: React.ReactNode;
}) {
  const path = `/blog/${post.slug}`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.datePublished,
    author: { "@type": "Person", name: site.lawyer },
    publisher: { "@type": "LegalService", name: site.name },
    mainEntityOfPage: `${siteUrl}${path}`,
  };

  return (
    <div className="bg-charcoal text-white min-h-screen">
      <JsonLd data={articleJsonLd} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Inicio", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.shortTitle, path },
        ])}
      />
      <SiteHeader variant="sub" />

      <section className="relative pt-48 pb-20 overflow-hidden border-b border-white/5">
        <div className="container mx-auto px-8 relative z-10 max-w-3xl">
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-white/30 font-medium mb-8">
            <Link href="/" className="hover:text-gold-400 transition-colors">
              Inicio
            </Link>
            <ChevronRight className="w-3 h-3" />
            <Link
              href="/blog"
              className="hover:text-gold-400 transition-colors"
            >
              Blog
            </Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/50">{post.shortTitle}</span>
          </div>
          <span className="inline-block px-4 py-1 mb-8 border border-gold-500/30 text-gold-400 font-sans text-xs tracking-[0.3em] uppercase">
            Blog Lex Solis
          </span>
          <h1 className="font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight mb-6">
            {post.title}
          </h1>
          <p className="text-white/40 text-sm font-light">
            Publicado el{" "}
            {new Date(post.datePublished).toLocaleDateString("es-MX", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}{" "}
            · {site.lawyer}
          </p>
        </div>
      </section>

      <article className="py-20 bg-white text-charcoal">
        <div className="container mx-auto px-8 max-w-3xl space-y-8 text-lg leading-relaxed font-light text-charcoal/70 [&_h2]:font-serif [&_h2]:text-3xl [&_h2]:text-charcoal [&_h2]:font-normal [&_h2]:pt-6 [&_strong]:text-charcoal [&_strong]:font-medium">
          {children}
        </div>
      </article>

      <CtaBanner />
      <SiteFooter />
    </div>
  );
}
