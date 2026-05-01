import { ServicePage } from "@/components/service-page";
import { SERVICES } from "@/content/services";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "DJ para Eventos Corporativos",
  description:
    "DJ residente do Halloween Sephora. Curadoria sonora para ativações de marca, lançamentos e festas corporativas.",
  path: "/servicos/corporativos"
});

export default function CorporativosPage() {
  return <ServicePage data={SERVICES.corporativos} />;
}
