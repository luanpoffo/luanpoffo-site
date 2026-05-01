import { Quote } from "lucide-react";
import { Reveal } from "./reveal";

const ITEMS = [
  {
    quote:
      "O Luan leu a pista o tempo todo e transformou nossa festa em uma experiência inesquecível. O dance floor não esvaziou nem por um segundo.",
    name: "Marina & Felipe",
    role: "Casamento — São Paulo, 2024"
  },
  {
    quote:
      "Profissional impecável. Dividiu lineup com nomes gigantes e segurou o público até o último BPM.",
    name: "Equipe Sephora",
    role: "Halloween Sephora — DJ residente"
  },
  {
    quote:
      "Energia, técnica e leitura de público raras de encontrar juntas. O Bloco Beleza Rara foi histórico.",
    name: "Produção Beleza Rara",
    role: "Pré-carnaval SP — 100k pessoas"
  }
];

export function Testimonials() {
  return (
    <section className="container py-20 md:py-28">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.3em] text-accent">
          Depoimentos
        </p>
        <h2 className="mt-3 headline-section text-balance max-w-3xl">
          Quem contratou, conta
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {ITEMS.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.08}>
            <figure className="card-surface p-7 h-full flex flex-col">
              <Quote className="text-accent" size={28} />
              <blockquote className="mt-4 text-foreground/85 leading-relaxed">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 pt-6 border-t border-border">
                <p className="font-medium">{t.name}</p>
                <p className="text-xs text-foreground/50 uppercase tracking-wider mt-1">
                  {t.role}
                </p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
