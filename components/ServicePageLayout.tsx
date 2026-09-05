import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";
import JsonLd from "@/components/JsonLd";

export default function ServicePageLayout({
  eyebrow,
  title,
  description,
  crumbLabel,
  jsonLd,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  crumbLabel: string;
  jsonLd: Record<string, unknown>[];
  children: React.ReactNode;
}) {
  return (
    <div className="bg-charcoal text-white min-h-screen">
      {jsonLd.map((data, i) => (
        <JsonLd key={i} data={data} />
      ))}
      <SiteHeader variant="sub" />
      <PageHero
        eyebrow={eyebrow}
        title={title}
        description={description}
        crumbLabel={crumbLabel}
      />
      {children}
      <CtaBanner />
      <SiteFooter />
    </div>
  );
}
