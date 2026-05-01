import { Reveal } from "@/components/reveal";
import { UpcomingDates } from "@/components/upcoming-dates";
import { CtaFinal } from "@/components/cta-final";
import { buildMetadata } from "@/lib/seo";
import { SOCIAL } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "Música — sets, singles e plataformas",
  description:
    "Sets do Megamix Hits Brasil e Marina da Glória, singles 'Coração Gelado' e 'Fire' e player completo do SoundCloud. Ouça em todas as plataformas.",
  path: "/musica"
});

const SETS = [
  {
    title: "Megamix Hits Brasil 2022",
    src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    aspect: "aspect-video"
  },
  {
    title: "Marina da Glória — Rio de Janeiro",
    src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    aspect: "aspect-video"
  }
];

const SINGLES = [
  {
    title: "Coração Gelado",
    src: "https://open.spotify.com/embed/track/2takcwOaAZWiXQijPHIx7B?utm_source=generator&theme=0",
    height: 152
  },
  {
    title: "Fire",
    src: "https://open.spotify.com/embed/track/5Z9KJZ1uAo9P4oR3vBp0xS?utm_source=generator&theme=0",
    height: 152
  }
];

const PLATFORMS = [
  { label: "Spotify", href: SOCIAL.spotify },
  { label: "SoundCloud", href: SOCIAL.soundcloud },
  { label: "YouTube", href: SOCIAL.youtube },
  { label: "Apple Music", href: SOCIAL.appleMusic },
  { label: "Beatport", href: SOCIAL.beatport }
];

export default function MusicaPage() {
  return (
    <>
      <section className="pt-28 pb-12 md:pt-32 md:pb-20">
        <div className="container">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-accent">
              Música
            </p>
            <h1 className="mt-4 headline-hero text-balance">Sets & singles</h1>
            <p className="mt-5 max-w-2xl text-lg text-foreground/80">
              Identidade Open Format & EDM. Sets que cruzam Pop, House e
              tendências globais — e singles autorais que trazem essa mesma
              energia para o estúdio.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Sets em vídeo */}
      <section className="container pb-12">
        <div className="grid gap-6 md:grid-cols-2">
          {SETS.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <div className="card-surface overflow-hidden">
                <div className={`relative ${s.aspect}`}>
                  <iframe
                    src={s.src}
                    title={s.title}
                    className="absolute inset-0 h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 border-t border-border">
                  <p className="font-medium">{s.title}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Singles */}
      <section className="container py-12">
        <Reveal>
          <h2 className="headline-section">Singles autorais</h2>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {SINGLES.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <div className="card-surface overflow-hidden">
                <iframe
                  src={s.src}
                  title={s.title}
                  width="100%"
                  height={s.height}
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  className="block"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SoundCloud completo */}
      <section className="container py-12">
        <Reveal>
          <h2 className="headline-section">SoundCloud completo</h2>
          <p className="mt-3 text-foreground/70 max-w-2xl">
            Player com todos os sets, mixtapes e edits.
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="mt-8 card-surface overflow-hidden">
            <iframe
              width="100%"
              height="450"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              loading="lazy"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/luanpoffo&color=%2300ff85&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
              title="SoundCloud do Luan Poffo"
            />
          </div>
        </Reveal>
      </section>

      {/* Plataformas */}
      <section className="container py-16">
        <Reveal>
          <h2 className="headline-section">Ouça em todas as plataformas</h2>
        </Reveal>
        <div className="mt-10 flex flex-wrap gap-3">
          {PLATFORMS.map((p, i) => (
            <Reveal key={p.label} delay={i * 0.04}>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                {p.label}
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <UpcomingDates />
      <CtaFinal />
    </>
  );
}
