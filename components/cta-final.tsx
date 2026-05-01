import Link from "next/link";
import { Mail } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/utils";
import { Reveal } from "./reveal";

export function CtaFinal() {
  return (
    <section className="border-y border-border bg-muted/40">
      <div className="container py-24 md:py-32 text-center">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-accent">
            Bora marcar?
          </p>
          <h2 className="mt-4 headline-section text-balance max-w-4xl mx-auto">
            Vamos conversar sobre o seu evento?
          </h2>
          <p className="mt-5 text-foreground/70 max-w-xl mx-auto">
            Resposta em até 24h. Te ajudamos a montar a experiência sonora
            ideal para o seu público.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-9 flex items-center justify-center gap-3 flex-wrap">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              chamar no whatsapp
            </a>
            <Link href="/contato" className="btn-ghost">
              <Mail size={16} /> enviar e-mail
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
