import type { Metadata } from "next";
import { SITE_URL } from "./utils";

const DEFAULT_TITLE =
  "Luan Poffo — DJ Open Format & EDM para casamentos, corporativos e festivais";
const DEFAULT_DESCRIPTION =
  "DJ brasileiro com mais de 10 anos de carreira, 15 estados e 8 países. Open Format & EDM para casamentos, eventos corporativos, clubs e festivais.";

export type SeoInput = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
};

export function buildMetadata({
  title,
  description = DEFAULT_DESCRIPTION,
  path = "/",
  image = "/og/default.jpg",
  noIndex = false
}: SeoInput = {}): Metadata {
  const fullTitle = title ? `${title} — Luan Poffo` : DEFAULT_TITLE;
  const url = `${SITE_URL}${path}`;

  return {
    metadataBase: new URL(SITE_URL),
    title: fullTitle,
    description,
    alternates: {
      canonical: url,
      languages: { "pt-BR": url, "en-US": `${SITE_URL}/en${path}` }
    },
    openGraph: {
      type: "website",
      url,
      title: fullTitle,
      description,
      siteName: "Luan Poffo",
      locale: "pt_BR",
      images: [{ url: image, width: 1200, height: 630, alt: "Luan Poffo DJ" }]
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
      creator: "@luanpoffo"
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, "max-image-preview": "large" }
  };
}
