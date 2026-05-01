import { ServiceHero } from "./service-hero";
import { ServiceIncludes } from "./service-includes";
import { Gallery } from "./gallery";
import { Faq } from "./faq";
import { ContactForm } from "./contact-form";
import { Reveal } from "./reveal";
import type { ServiceContent } from "@/content/services";

export function ServicePage({ data }: { data: ServiceContent }) {
  const galleryImages = Array.from({ length: 6 }, (_, i) => ({
    src: `/placeholders/${data.galleryPrefix}-${i + 1}.jpg`,
    alt: `${data.eyebrow} — apresentação ${i + 1}`
  }));

  return (
    <>
      <ServiceHero
        eyebrow={data.eyebrow}
        title={data.title}
        description={data.description}
        image={data.heroImage}
      />

      <ServiceIncludes items={data.includes} />

      <Gallery images={galleryImages} />

      <Faq items={data.faq} />

      <section id="orcamento" className="container py-20 md:py-28">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] items-start">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-accent">
              Orçamento
            </p>
            <h2 className="mt-3 headline-section text-balance">
              Solicite uma proposta para o seu evento
            </h2>
            <p className="mt-5 text-foreground/70 max-w-md">
              Resposta em até 24h com proposta personalizada, opções de set,
              estrutura sugerida e disponibilidade.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <ContactForm defaultEventType={data.defaultEventType} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
