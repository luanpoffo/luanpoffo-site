import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from "./ui/accordion";
import { Reveal } from "./reveal";

export type FaqItem = { q: string; a: string };

export function Faq({
  items,
  title = "Perguntas frequentes"
}: {
  items: FaqItem[];
  title?: string;
}) {
  return (
    <section className="container py-20 md:py-28">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.3em] text-accent">FAQ</p>
        <h2 className="mt-3 headline-section text-balance">{title}</h2>
      </Reveal>
      <Reveal delay={0.05}>
        <Accordion type="single" collapsible className="mt-10 max-w-3xl">
          {items.map((it, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger>{it.q}</AccordionTrigger>
              <AccordionContent>{it.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </section>
  );
}
