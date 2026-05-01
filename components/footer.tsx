import Link from "next/link";
import { Instagram, Facebook, Youtube, Twitter, Music2 } from "lucide-react";
import { SOCIAL } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-display text-2xl uppercase">Luan Poffo</p>
          <p className="mt-3 text-sm text-foreground/60 max-w-sm">
            DJ Open Format & EDM. Casamentos, eventos corporativos, clubs e
            festivais — do Brasil ao mundo.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a
              href={SOCIAL.instagram}
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-border hover:border-accent hover:text-accent transition-colors"
            >
              <Instagram size={18} />
            </a>
            <a
              href={SOCIAL.facebook}
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-border hover:border-accent hover:text-accent transition-colors"
            >
              <Facebook size={18} />
            </a>
            <a
              href={SOCIAL.youtube}
              aria-label="YouTube"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-border hover:border-accent hover:text-accent transition-colors"
            >
              <Youtube size={18} />
            </a>
            <a
              href={SOCIAL.twitter}
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-border hover:border-accent hover:text-accent transition-colors"
            >
              <Twitter size={18} />
            </a>
            <a
              href={SOCIAL.soundcloud}
              aria-label="SoundCloud"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-border hover:border-accent hover:text-accent transition-colors"
            >
              <Music2 size={18} />
            </a>
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-wider text-foreground/50">
            navegação
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/minha-historia" className="hover:text-accent">minha história</Link></li>
            <li><Link href="/musica" className="hover:text-accent">música</Link></li>
            <li><Link href="/servicos/casamentos" className="hover:text-accent">casamentos</Link></li>
            <li><Link href="/servicos/corporativos" className="hover:text-accent">corporativos</Link></li>
            <li><Link href="/servicos/clubs-festivais" className="hover:text-accent">clubs & festivais</Link></li>
            <li><Link href="/press-kit" className="hover:text-accent">press kit</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-wider text-foreground/50">
            contato
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href="mailto:contato@luanpoffo.com" className="hover:text-accent">
                contato@luanpoffo.com
              </a>
            </li>
            <li>
              <a href="tel:+5547988285432" className="hover:text-accent">
                +55 47 98828-5432
              </a>
            </li>
            <li>
              <Link href="/contato" className="hover:text-accent">
                solicitar orçamento
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-foreground/50">
          <p>© {new Date().getFullYear()} Luan Poffo. Todos os direitos reservados.</p>
          <p>Feito com cuidado em São Paulo.</p>
        </div>
      </div>
    </footer>
  );
}
