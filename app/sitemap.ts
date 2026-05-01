import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/utils";

const ROUTES = [
  "/",
  "/minha-historia",
  "/musica",
  "/servicos/casamentos",
  "/servicos/corporativos",
  "/servicos/clubs-festivais",
  "/contato",
  "/press-kit"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ROUTES.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.8,
    alternates: {
      languages: {
        "pt-BR": `${SITE_URL}${path}`,
        "en-US": `${SITE_URL}/en${path === "/" ? "" : path}`
      }
    }
  }));
}
