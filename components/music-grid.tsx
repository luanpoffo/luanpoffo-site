import Link from "next/link";
import { Reveal } from "./reveal";

const TRACKS = [
  {
    title: "Coração Gelado",
    type: "Single autoral",
    embed: "https://open.spotify.com/embed/track/2takcwOaAZWiXQijPHIx7B?utm_source=generator&theme=0",
    height: 152
  },
  {
    title: "Fire",
    type: "Single autoral",
    embed: "https://open.spotify.com/embed/track/5Z9KJZ1uAo9P4oR3vBp0xS?utm_source=generator&theme=0",
    height: 152
  },
  {
    title: "Megamix Hits Brasil",
    type: "DJ set / YouTube",
    embed: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    height: 280
  },
  {
    title: "Marina da Glória — RJ",
    type: "DJ set / YouTube",
    embed: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    height: 280
  }
];

export function MusicGrid() {
  return (
    <section className="container py-20 md:py-28">
      <div className="flex items-end justify-between gap-6 flex-wrap">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-accent">
            Música
          </p>
          <h2 className="mt-3 headline-section text-balance">
            Sons em rotação
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <Link href="/musica" className="btn-ghost">
            ouvir tudo
          </Link>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {TRACKS.map((t, i) => (
          <Reveal key={t.title} delay={i * 0.06}>
            <div className="card-surface overflow-hidden">
              <iframe
                src={t.embed}
                title={t.title}
                width="100%"
                height={t.height}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="block"
              />
              <div className="px-5 py-4 border-t border-border flex items-center justify-between">
                <p className="text-sm font-medium">{t.title}</p>
                <span className="text-xs uppercase tracking-wider text-foreground/50">
                  {t.type}
                </span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
