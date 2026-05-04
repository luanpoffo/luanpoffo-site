const NAMES = [
  "Baile de Halloween Sephora",
  "MAD CLUB - CLUB #60 WORLD",
  "Chá da Anitta",
  "Dubdogz",
  "PRIDE SÃO PAULO 2025",
  "Vintage Culture",
  "Festa Black",
  "Tour Chá da Alice EUA",
  "Eurotour 2026",
  "Pedro Sampaio",
  "Bloco Beleza Rara",

];

export function SocialProof() {
  const items = [...NAMES, ...NAMES];
  return (
    <section className="border-y border-border py-10 overflow-hidden">
      <p className="container text-xs uppercase tracking-[0.3em] text-foreground/40 mb-6">
        Já tocou com / em
      </p>
      <div className="mask-fade-x">
        <div className="flex gap-12 animate-marquee whitespace-nowrap">
          {items.map((name, i) => (
            <span
              key={i}
              className="font-display text-2xl md:text-3xl uppercase text-foreground/50 hover:text-foreground transition-colors"
            >
              {name}
              <span className="mx-12 text-accent">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
