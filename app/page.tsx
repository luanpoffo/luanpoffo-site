import { Hero } from "@/components/hero";
import { SocialProof } from "@/components/social-proof";
import { Stats } from "@/components/stats";
import { ServiceCards } from "@/components/service-cards";
import { MusicGrid } from "@/components/music-grid";
import { Testimonials } from "@/components/testimonials";
import { CtaFinal } from "@/components/cta-final";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title:
    "DJ Open Format & EDM para casamentos, corporativos e festivais",
  description:
    "Luan Poffo é DJ Open Format & EDM. 10+ anos, 15 estados, 8 países. Vencedor do Concurso DJ 2025 da Revista Colors. Solicite seu orçamento.",
  path: "/"
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <SocialProof />
      <Stats />
      <ServiceCards />
      <MusicGrid />
      <Testimonials />
      <CtaFinal />
    </>
  );
}
