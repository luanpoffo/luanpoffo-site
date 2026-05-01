import { Check } from "lucide-react";
import { Reveal } from "./reveal";

export function ServiceIncludes({ items }: { items: string[] }) {
  return (
    <section className="container py-20 md:py-28">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.3em] text-accent">
          O que está incluso
        </p>
        <h2 className="mt-3 headline-section text-balance">
          Experiência completa, sem dor de cabeça
        </h2>
      </Reveal>
      <ul className="mt-12 grid gap-4 md:grid-cols-2">
        {items.map((it, i) => (
          <Reveal key={i} delay={i * 0.05}>
            <li className="flex items-start gap-3 card-surface p-5">
              <span className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-accent/15 text-accent">
                <Check size={16} />
              </span>
              <span className="text-foreground/85">{it}</span>
            </li>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
