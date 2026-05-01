import type { FaqItem } from "@/components/faq";

export type ServiceContent = {
  slug: "casamentos" | "corporativos" | "clubs-festivais";
  eyebrow: string;
  title: string;
  description: string;
  heroImage: string;
  includes: string[];
  faq: FaqItem[];
  galleryPrefix: string;
  defaultEventType:
    | "Casamento"
    | "Evento corporativo"
    | "Club / festa";
};

export const SERVICES: Record<string, ServiceContent> = {
  casamentos: {
    slug: "casamentos",
    eyebrow: "Casamentos & 15 anos",
    title: "DJ para o seu grande dia",
    description:
      "Atração em diversos eventos sociais pelo país, o DJ traz a versatilidade única de apresentar shows em casamentos, festas de 15 anos, formaturas e aniversários.",
    heroImage: "/placeholders/service-wedding.jpg",
    galleryPrefix: "wedding",
    defaultEventType: "Casamento",
    includes: [
      "Reunião de alinhamento de repertório e momentos da festa",
      "Estrutura de áudio e iluminação sob medida (parceria de produção)",
      "Cerimônia, recepção, jantar e pista em um único contrato",
      "Set personalizado misturando os hits que você ama com EDM",
      "Microfone para mestre de cerimônia e brindes",
      "Atendimento bilíngue (PT/EN) para casamentos com convidados internacionais"
    ],
    faq: [
      {
        q: "Vocês fazem cerimônia + recepção + pista?",
        a: "Sim, o pacote completo cobre desde a entrada da noiva (ou do noivo) até o último beat da pista. Inclui trilha sonora ao vivo adaptada a cada momento."
      },
      {
        q: "Posso enviar uma playlist com pedidos?",
        a: "Pode e adoramos. Pedimos uma must-play list e uma do-not-play, e a partir disso construímos um set fluido que respeita seu gosto e mantém a pista cheia."
      },
      {
        q: "Atendem fora de São Paulo?",
        a: "Atendemos o Brasil todo (já tocamos em mais de 15 estados) e também destination weddings na Europa, EUA e América Latina."
      },
      {
        q: "Como funciona o pagamento e a reserva?",
        a: "Após alinhamento da proposta, é feita uma entrada para reserva da data e o restante até 7 dias antes do evento. Emitimos contrato e nota fiscal."
      }
    ]
  },
  corporativos: {
    slug: "corporativos",
    eyebrow: "Eventos Corporativos",
    title: "DJ para ativações de marca",
    description:
      "DJ residente do Halloween Sephora por diversos anos, dividiu lineup com artistas como Anitta, Dubdogz, Ivete Sangalo, Pedro Sampaio e Vintage Culture.",
    heroImage: "/placeholders/service-corporate.jpg",
    galleryPrefix: "corporate",
    defaultEventType: "Evento corporativo",
    includes: [
      "Curadoria sonora alinhada à identidade da marca",
      "Set para ativação, coquetel e festa de encerramento",
      "Coordenação com produção, agências e fornecedores",
      "Equipamentos profissionais (CDJs, mixer Pioneer Standard)",
      "Suporte para integrações com VJ, telão e iluminação",
      "Faturamento via PJ, contrato com SLA e cláusulas de confidencialidade"
    ],
    faq: [
      {
        q: "Conseguem assinar NDA e contrato corporativo?",
        a: "Sim. Trabalhamos com NDA, contrato bilateral, NF-e e adequações de compliance solicitadas pelo cliente."
      },
      {
        q: "Vocês entregam curadoria de marca?",
        a: "Sim. Antes do evento, alinhamos referências, mood, energia e BPM por momento. Entregamos uma proposta sonora documentada."
      },
      {
        q: "Trabalham com lineup de outros artistas?",
        a: "Sim, somos acostumados a dividir palco e fazer transições com nomes como Anitta, Vintage Culture, Dubdogz e Pedro Sampaio."
      },
      {
        q: "Atendem fora do Brasil?",
        a: "Atendemos. Já tocamos em 8 países, incluindo eventos corporativos em Miami, Nova Iorque, Lisboa e Londres."
      }
    ]
  },
  "clubs-festivais": {
    slug: "clubs-festivais",
    eyebrow: "Clubs & Festivais",
    title: "Da pista ao palco principal",
    description:
      "Com mais de 10 anos de carreira, Luan Poffo já deixou sua marca em grandes palcos eletrônicos e open format nacionais (em mais de 15 estados) e internacionais (em mais de oito países).",
    heroImage: "/placeholders/service-club.jpg",
    galleryPrefix: "club",
    defaultEventType: "Club / festa",
    includes: [
      "Sets de 1h a 4h (open, peak time ou closing)",
      "Rider técnico padrão Pioneer (CDJ-3000 / DJM-A9)",
      "Press kit pronto para divulgação (foto, bio e logo)",
      "Edits exclusivos e bootlegs autorais",
      "Disponibilidade para residências e tours",
      "Comunicação direta com booking e produção"
    ],
    faq: [
      {
        q: "Vocês têm rider técnico?",
        a: "Sim, disponível na página /press-kit. Padrão Pioneer (CDJ-3000 + DJM-A9), monitor in-ear opcional."
      },
      {
        q: "Aceitam residências?",
        a: "Aceitamos residências mensais e temporadas em casas alinhadas com o público Open Format & EDM. Fale com a gente."
      },
      {
        q: "Tocam tracks autorais?",
        a: "Sim. Singles 'Coração Gelado' e 'Fire' já fazem parte do set, além de bootlegs e edits exclusivos."
      },
      {
        q: "Como funciona booking internacional?",
        a: "Tour Europa e residência Miami são feitas por temporada. Para festivais, trabalhamos com 60–90 dias de antecedência."
      }
    ]
  }
};
