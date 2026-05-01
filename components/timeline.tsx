import { Reveal } from "./reveal";

const MARCOS = [
  {
    year: "2014",
    title: "Primeiros sets em Santa Catarina",
    desc: "Início da carreira em festas universitárias e eventos privados."
  },
  {
    year: "2017",
    title: "Estreia internacional em Miami",
    desc: "Primeira temporada fora do Brasil — open format conectado às tendências globais."
  },
  {
    year: "2019",
    title: "DJ residente Halloween Sephora",
    desc: "Lineups com Anitta, Vintage Culture, Ivete Sangalo, Pedro Sampaio e Dubdogz."
  },
  {
    year: "2022",
    title: "Megamix Hits Brasil",
    desc: "Lançamento do mix que viralizou e marcou a identidade Open Format."
  },
  {
    year: "2023",
    title: "Tour Europa — MAD Club Lausanne",
    desc: "Apresentações em Londres, Dublin, Lisboa e um dos melhores clubs do mundo."
  },
  {
    year: "2024",
    title: "Bloco Beleza Rara — 100k pessoas",
    desc: "Pré-carnaval de São Paulo. Um dos momentos mais icônicos da trajetória."
  },
  {
    year: "2025",
    title: "Vencedor do Concurso DJ — Revista Colors",
    desc: "Reconhecimento como um dos nomes mais versáteis da nova cena Open Format & EDM."
  }
];

export function Timeline() {
  return (
    <section className="container py-20 md:py-28">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.3em] text-accent">
          Trajetória
        </p>
        <h2 className="mt-3 headline-section text-balance">Marcos da carreira</h2>
      </Reveal>

      <ol className="relative mt-12 border-l border-border ml-3">
        {MARCOS.map((m, i) => (
          <Reveal key={m.year} delay={i * 0.04}>
            <li className="relative pl-8 pb-10 last:pb-0">
              <span className="absolute -left-[6.5px] top-2 h-3 w-3 rounded-full bg-accent ring-4 ring-background" />
              <p className="font-display text-2xl text-accent">{m.year}</p>
              <p className="mt-1 text-lg font-medium">{m.title}</p>
              <p className="mt-2 text-sm text-foreground/65 max-w-xl">
                {m.desc}
              </p>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
