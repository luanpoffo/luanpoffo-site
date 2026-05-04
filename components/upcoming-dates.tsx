import { Calendar, MapPin } from "lucide-react";
import { Reveal } from "./reveal";

type DateItem = {
  date: string;
  city: string;
  venue: string;
  type: string;
  url?: string;
};

const PLACEHOLDER: DateItem[] = [
  {
    date: "09 mai 2026",
    city: "Fortaleza, BR",
    venue: "Festa Patricia",
    type: "Pop"
  },
  {
    date: "16 mai 2026",
    city: "Amsterdã, NL",
    venue: "Alien Superstar",
    type: "EDM"
  },
  {
    date: "23 mai 2026",
    city: "Lisboa, PT",
    venue: "Trumps",
    type: "Open Format"
  },
  {
    date: "24 mai 2026",
    city: "Lausanne, CH",
    venue: "Mad Club",
    type: "EDM"
  },
  {
    date: "30 mai 2026",
    city: "Porto, PT",
    venue: "Lumen Luxury Club",
    type: "EDM"
  },
  {
    date: "31 mai 2026",
    city: "Dublin, IE",
    venue: "Dicey's Garden",
    type: "Open Format"
  },
  {
    date: "05 jun 2026",
    city: "Florianópolis, BR",
    venue: "Aniversário Valentina",
    type: "Open Format"
  },
  {
    date: "06 jun 2026",
    city: "Campo Alegre, BR",
    venue: "Casamento Fernanda e Pedro",
    type: "Open Format"
  },
  {
    date: "07 jun 2026",
    city: "São Paulo, BR",
    venue: "Camarote Paulista",
    type: "Open Format"
  },
  {
    date: "07 jun 2026",
    city: "São Paulo, BR",
    venue: "After Pride Volt Club SP",
    type: "Open Format"
  }
];

export function UpcomingDates({ items = PLACEHOLDER }: { items?: DateItem[] }) {
  return (
    <section className="container py-20 md:py-28">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.3em] text-accent">
          Agenda
        </p>
        <h2 className="mt-3 headline-section text-balance">Próximas datas</h2>
      </Reveal>
      <ul className="mt-12 divide-y divide-border border-y border-border">
        {items.map((it, i) => (
          <Reveal key={i} delay={i * 0.05}>
            <li className="grid md:grid-cols-[1fr_2fr_1fr] items-center gap-4 py-6 group">
              <div className="flex items-center gap-3">
                <Calendar size={18} className="text-accent" />
                <span className="font-display text-xl uppercase">{it.date}</span>
              </div>
              <div>
                <p className="font-medium">{it.venue}</p>
                <p className="text-sm text-foreground/60 flex items-center gap-1">
                  <MapPin size={14} />
                  {it.city}
                </p>
              </div>
              <p className="text-sm text-foreground/60 md:text-right">
                {it.type}
              </p>
            </li>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
