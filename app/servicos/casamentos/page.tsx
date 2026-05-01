import { ServicePage } from "@/components/service-page";
import { SERVICES } from "@/content/services";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "DJ para Casamentos & 15 anos",
  description:
    "DJ versátil para casamentos, debutantes, formaturas e aniversários. Atendimento no Brasil e em destination weddings.",
  path: "/servicos/casamentos"
});

export default function CasamentosPage() {
  return <ServicePage data={SERVICES.casamentos} />;
}
