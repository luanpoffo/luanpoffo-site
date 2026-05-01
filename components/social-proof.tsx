const NAMES = [
  "Sephora Halloween",
  "Bloco Beleza Rara",
  "MAD Club",
  "Anitta",
  "Vintage Culture",
  "Ivete Sangalo",
  "Dubdogz",
  "Pedro Sampaio"
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
