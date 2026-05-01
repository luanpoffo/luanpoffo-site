import { Mail, Phone, Instagram, Facebook, Youtube, Twitter, Music2 } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { ContactForm } from "@/components/contact-form";
import { buildMetadata } from "@/lib/seo";
import { SOCIAL, WHATSAPP_LINK } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "Contato — solicite seu orçamento",
  description:
    "Solicite orçamento para casamentos, eventos corporativos, clubs e festivais. Resposta em até 24h.",
  path: "/contato"
});

const SOCIAL_LIST = [
  { Icon: Instagram, label: "Instagram", href: SOCIAL.instagram },
  { Icon: Facebook, label: "Facebook", href: SOCIAL.facebook },
  { Icon: Youtube, label: "YouTube", href: SOCIAL.youtube },
  { Icon: Twitter, label: "Twitter", href: SOCIAL.twitter },
  { Icon: Music2, label: "SoundCloud", href: SOCIAL.soundcloud }
];

export default function ContatoPage() {
  return (
    <>
      <section className="pt-28 pb-12 md:pt-32">
        <div className="container">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-accent">
              Contato
            </p>
            <h1 className="mt-4 headline-hero text-balance">
              Vamos conversar
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-foreground/80">
              Conta um pouco do seu evento que retornamos com proposta
              personalizada em até 24h.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container pb-24 grid gap-10 lg:grid-cols-[1.4fr_1fr] items-start">
        <Reveal>
          <ContactForm />
        </Reveal>

        <Reveal delay={0.08}>
          <aside className="card-surface p-7 space-y-7">
            <div>
              <p className="text-xs uppercase tracking-wider text-foreground/50">
                E-mail
              </p>
              <a
                href="mailto:contato@luanpoffo.com"
                className="mt-2 flex items-center gap-2 text-lg hover:text-accent"
              >
                <Mail size={18} className="text-accent" />
                contato@luanpoffo.com
              </a>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider text-foreground/50">
                Telefone / WhatsApp
              </p>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center gap-2 text-lg hover:text-accent"
              >
                <Phone size={18} className="text-accent" />
                +55 47 98828-5432
              </a>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider text-foreground/50">
                Redes
              </p>
              <ul className="mt-3 grid grid-cols-2 gap-2">
                {SOCIAL_LIST.map(({ Icon, label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 rounded-md border border-border hover:border-accent hover:text-accent transition-colors text-sm"
                    >
                      <Icon size={16} /> {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-border pt-6">
              <p className="text-xs uppercase tracking-wider text-foreground/50">
                Tempo de resposta
              </p>
              <p className="mt-2 text-foreground/80">
                Em até <strong className="text-accent">24h</strong>, dias úteis.
              </p>
            </div>
          </aside>
        </Reveal>
      </section>
    </>
  );
}
