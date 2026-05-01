import { ServicePage } from "@/components/service-page";
import { SERVICES } from "@/content/services";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "DJ para Clubs & Festivais",
  description:
    "Mais de 10 anos em palcos eletrônicos e open format. Brasil, EUA, Europa. Booking para clubs e festivais nacionais e internacionais.",
  path: "/servicos/clubs-festivais"
});

export default function ClubsFestivaisPage() {
  return <ServicePage data={SERVICES["clubs-festivais"]} />;
}
