import { CountUp } from "./count-up";
import { Reveal } from "./reveal";

const STATS = [
  { value: 10, suffix: "+", label: "anos de carreira" },
  { value: 15, suffix: "", label: "estados brasileiros" },
  { value: 8, suffix: "", label: "países" },
  { value: 100, suffix: "k+", label: "pessoas dançando" }
];

export function Stats() {
  return (
    <section className="container py-20 md:py-28">
      <Reveal>
        <h2 className="headline-section text-balance max-w-3xl">
          Números que fazem a pista <span className="text-accent">tremer</span>
        </h2>
      </Reveal>
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08}>
            <div className="card-surface p-6 md:p-8">
              <p className="font-display text-5xl md:text-6xl text-accent">
                <CountUp to={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-3 text-sm text-foreground/70">{s.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
