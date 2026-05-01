import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./reveal";

const SERVICES = [
  {
    title: "Casamentos & 15 anos",
    desc: "Atração em diversos eventos sociais pelo país. Versatilidade para casamentos, debutantes, formaturas e aniversários.",
    href: "/servicos/casamentos",
    image: "/placeholders/service-wedding.jpg"
  },
  {
    title: "Eventos Corporativos",
    desc: "DJ residente do Halloween Sephora. Lineup com Anitta, Dubdogz, Ivete Sangalo, Pedro Sampaio e Vintage Culture.",
    href: "/servicos/corporativos",
    image: "/placeholders/service-corporate.jpg"
  },
  {
    title: "Clubs & Festivais",
    desc: "Mais de 10 anos de carreira. Marca em grandes palcos eletrônicos e open format no Brasil e em mais de 8 países.",
    href: "/servicos/clubs-festivais",
    image: "/placeholders/service-club.jpg"
  }
];

export function ServiceCards() {
  return (
    <section className="container py-20 md:py-28">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.3em] text-accent">
          Serviços
        </p>
        <h2 className="mt-3 headline-section max-w-3xl text-balance">
          Para qual evento você quer contratar?
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {SERVICES.map((s, i) => (
          <Reveal key={s.href} delay={i * 0.08}>
            <Link
              href={s.href}
              className="group card-surface block overflow-hidden h-full"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-2xl uppercase">{s.title}</h3>
                  <ArrowUpRight
                    size={22}
                    className="text-accent transition-transform group-hover:rotate-45"
                  />
                </div>
                <p className="mt-3 text-sm text-foreground/70">{s.desc}</p>
                <span className="mt-5 inline-block text-xs uppercase tracking-wider text-accent">
                  ver mais →
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
