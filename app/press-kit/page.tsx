import { Download, ImageIcon, FileText, Disc } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { CtaFinal } from "@/components/cta-final";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Press Kit",
  description:
    "Press Kit oficial: fotos em alta, rider técnico, bio (curta, média, longa) em PT/EN e logo em PNG/SVG.",
  path: "/press-kit"
});

const ASSETS = [
  {
    Icon: ImageIcon,
    title: "Fotos em alta",
    desc: "Pack com 8 fotos profissionais, 300 dpi, com e sem logo aplicado.",
    file: "/press/luanpoffo-fotos.zip",
    label: "baixar zip (.zip)"
  },
  {
    Icon: FileText,
    title: "Rider técnico",
    desc: "Setup padrão Pioneer (CDJ-3000 + DJM-A9), monitores e palco.",
    file: "/press/rider-tecnico.pdf",
    label: "baixar PDF"
  },
  {
    Icon: Disc,
    title: "Logo (PNG + SVG)",
    desc: "Versões claras, escuras e monocromáticas — manual de uso incluso.",
    file: "/press/luanpoffo-logo.zip",
    label: "baixar zip"
  }
];

const BIOS = [
  {
    label: "Bio curta — PT",
    text: `Luan Poffo é DJ Open Format & EDM, vencedor do Concurso DJ 2025 da Revista Colors. Já se apresentou em mais de 15 estados do Brasil e em 8 países, dividindo palco com Anitta, Vintage Culture, Ivete Sangalo, Dubdogz e Pedro Sampaio.`
  },
  {
    label: "Short bio — EN",
    text: `Luan Poffo is a Brazilian Open Format & EDM DJ, winner of the 2025 DJ Contest by Colors Magazine. He has performed across 15+ Brazilian states and in 8 countries, sharing the stage with names like Anitta, Vintage Culture, Ivete Sangalo, Dubdogz and Pedro Sampaio.`
  },
  {
    label: "Bio média — PT",
    text: `Vencedor do Concurso DJ 2025 da Revista Colors, Luan Poffo se consolida como um dos nomes mais versáteis e energéticos da cena Open Format e EDM. Já tocou em mais de 15 estados brasileiros e 8 países — entre Miami, Nova Iorque, Boston, Londres, Dublin e Lisboa — passando por palcos como o MAD Club (Lausanne), considerado um dos melhores clubs do mundo. No pré-carnaval de São Paulo, colocou mais de 100 mil pessoas para dançar no Bloco Beleza Rara.`
  },
  {
    label: "Medium bio — EN",
    text: `Winner of the 2025 DJ Contest (Colors Magazine), Luan Poffo is one of the most versatile and energetic names of Brazil's new Open Format and EDM scene. He has performed in 15+ Brazilian states and 8 countries — including Miami, New York, Boston, London, Dublin and Lisbon — and headlined stages such as MAD Club in Lausanne, ranked among the world's best clubs. During São Paulo's pre-carnival, he made 100,000+ people dance and sing at Bloco Beleza Rara.`
  },
  {
    label: "Bio longa — PT",
    text: `Vencedor do Concurso DJ 2025 da Revista Colors, Luan Poffo se consolida como um dos nomes mais versáteis e energéticos da cena Open Format e EDM, com presença marcante no Brasil e no exterior. Nos últimos anos, já se apresentou em mais de 15 estados brasileiros e dividiu palco com grandes nomes como Anitta, Vintage Culture, Ivete Sangalo, Dubdogz e Pedro Sampaio. No pré-carnaval de São Paulo, colocou mais de 100 mil pessoas para dançar e cantar no Bloco Beleza Rara, em um dos momentos mais icônicos de sua trajetória. Sua carreira internacional começou em Miami e se expandiu com apresentações em Nova Iorque, Orlando, Boston, Londres, Dublin e Lisboa, com destaque para o MAD Club (Lausanne). Luan vem fortalecendo sua identidade musical com singles autorais como 'Coração Gelado' e 'Fire', além de remixes que transitam entre o Pop e o EDM.`
  },
  {
    label: "Long bio — EN",
    text: `Winner of the 2025 DJ Contest (Colors Magazine), Luan Poffo is one of the most versatile and energetic Brazilian names in Open Format and EDM. Over the past years, he has performed in 15+ states and shared the stage with Anitta, Vintage Culture, Ivete Sangalo, Dubdogz and Pedro Sampaio. He made 100,000+ people dance and sing during São Paulo's pre-carnival at Bloco Beleza Rara — one of the most iconic moments of his career. His international run started in Miami and expanded through New York, Orlando, Boston, London, Dublin and Lisbon, with a highlight at MAD Club in Lausanne. Luan also strengthens his identity through original singles such as 'Coração Gelado' and 'Fire', plus remixes that move between Pop and EDM.`
  }
];

export default function PressKitPage() {
  return (
    <>
      <section className="pt-28 pb-12 md:pt-32">
        <div className="container">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-accent">
              Press kit
            </p>
            <h1 className="mt-4 headline-hero text-balance">Materiais oficiais</h1>
            <p className="mt-5 max-w-2xl text-lg text-foreground/80">
              Tudo o que mídia, produtores e contratantes precisam em um só lugar.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container pb-12">
        <div className="grid gap-5 md:grid-cols-3">
          {ASSETS.map(({ Icon, title, desc, file, label }, i) => (
            <Reveal key={title} delay={i * 0.06}>
              <div className="card-surface p-7 h-full flex flex-col">
                <Icon className="text-accent" size={28} />
                <h3 className="mt-4 font-display text-xl uppercase">{title}</h3>
                <p className="mt-2 text-sm text-foreground/65 flex-1">{desc}</p>
                <a
                  href={file}
                  download
                  className="mt-5 inline-flex items-center gap-2 text-accent text-sm hover:underline"
                >
                  <Download size={16} /> {label}
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container py-16">
        <Reveal>
          <h2 className="headline-section">Bios para imprensa</h2>
          <p className="mt-3 text-foreground/70 max-w-2xl">
            Versões curta, média e longa em português e inglês — copie e cole.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {BIOS.map((b, i) => (
            <Reveal key={b.label} delay={i * 0.04}>
              <article className="card-surface p-6">
                <p className="text-xs uppercase tracking-wider text-accent">
                  {b.label}
                </p>
                <p className="mt-3 text-sm text-foreground/85 leading-relaxed">
                  {b.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaFinal />
    </>
  );
}
