import Image from "next/image";
import { Award } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Gallery } from "@/components/gallery";
import { Timeline } from "@/components/timeline";
import { CtaFinal } from "@/components/cta-final";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Minha História",
  description:
    "Trajetória de Luan Poffo: vencedor do Concurso DJ 2025 da Revista Colors, do Brasil ao mundo, com passagens por MAD Club, Bloco Beleza Rara e mais.",
  path: "/minha-historia"
});

const BIO = `Vencedor do Concurso DJ 2025 da Revista Colors, Luan se consolida como um dos nomes mais versáteis e energéticos da cena Open Format e EDM, com presença marcante no Brasil e no exterior.

Nos últimos anos, já se apresentou em mais de 15 estados brasileiros e dividiu palco com grandes nomes como Anitta, Vintage Culture, Ivete Sangalo, Dubdogz e Pedro Sampaio, reforçando sua força e conexão com diferentes públicos.

No pré-carnaval de São Paulo, colocou mais de 100 mil pessoas para dançar e cantar no Bloco Beleza Rara, em um dos momentos mais icônicos de sua trajetória.

Sua carreira internacional começou em Miami e se expandiu com apresentações em cidades como Nova Iorque, Orlando, Boston, Londres, Dublin e Lisboa. Em sua tour pela Europa, destacou-se ao se apresentar no MAD Club (Lausanne), reconhecido como um dos melhores clubs do mundo.

Luan também vem fortalecendo sua identidade musical com o lançamento de seus singles autorais, como "Coração Gelado" e "Fire", além de remixes que transitam entre o Pop e o EDM, sempre conectados com as pistas e tendências globais.`;

export default function MinhaHistoriaPage() {
  return (
    <>
      <section className="relative pt-28 pb-12 md:pt-32 md:pb-20">
        <div className="container grid md:grid-cols-2 gap-10 items-end">
          <div>
            <Reveal>
              <p className="text-xs uppercase tracking-[0.3em] text-accent">
                Minha história
              </p>
              <h1 className="mt-4 headline-hero text-balance">
                Luan Poffo
              </h1>
              <p className="mt-5 italic text-lg md:text-xl text-foreground/75 max-w-xl">
                "Luan Poffo é um DJ que sabe levar a pista para outro nível."
              </p>
              <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-accent/40 bg-accent/10 px-4 py-2">
                <Award size={16} className="text-accent" />
                <span className="text-sm">
                  Vencedor do Concurso DJ 2025 — Revista Colors
                </span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-border">
              <Image
                src="/placeholders/portrait.jpg"
                alt="Luan Poffo retrato profissional"
                fill
                priority
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container py-12 md:py-16">
        <div className="max-w-3xl mx-auto space-y-6 text-foreground/85 leading-relaxed">
          {BIO.split("\n\n").map((p, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <p>{p}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <Gallery />
      <Timeline />
      <CtaFinal />
    </>
  );
}
