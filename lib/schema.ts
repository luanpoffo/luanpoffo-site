import { SITE_URL, SOCIAL } from "./utils";

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Luan Poffo",
  alternateName: "@luanpoffo",
  url: SITE_URL,
  image: `${SITE_URL}/og/default.jpg`,
  jobTitle: "DJ & Music Producer",
  description:
    "DJ brasileiro de Open Format e EDM, vencedor do Concurso DJ 2025 da Revista Colors.",
  sameAs: [
    SOCIAL.instagram,
    SOCIAL.facebook,
    SOCIAL.youtube,
    SOCIAL.twitter,
    SOCIAL.soundcloud,
    SOCIAL.spotify
  ]
};

export const musicGroupSchema = {
  "@context": "https://schema.org",
  "@type": "MusicGroup",
  name: "Luan Poffo",
  url: SITE_URL,
  genre: ["Open Format", "EDM", "Pop", "House"],
  image: `${SITE_URL}/og/default.jpg`,
  sameAs: [SOCIAL.spotify, SOCIAL.soundcloud, SOCIAL.appleMusic, SOCIAL.beatport]
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#business`,
  name: "Luan Poffo — DJ",
  image: `${SITE_URL}/og/default.jpg`,
  url: SITE_URL,
  telephone: "+55-47-98828-5432",
  email: "contato@luanpoffo.com",
  priceRange: "$$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "São Paulo",
    addressRegion: "SP",
    addressCountry: "BR"
  },
  areaServed: ["BR", "US", "Europe"],
  serviceType: [
    "DJ para casamentos",
    "DJ corporativo",
    "DJ para clubs e festivais"
  ]
};

export function jsonLd(data: object) {
  return {
    __html: JSON.stringify(data)
  };
}
