import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://luanpoffo.com";

export const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP ?? "5547988285432";

export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Olá Luan! Gostaria de falar sobre um evento."
)}`;

export const SOCIAL = {
  instagram: "https://instagram.com/luanpoffo",
  facebook: "https://facebook.com/luanpoffo",
  youtube: "https://youtube.com/@luanpoffocanal",
  twitter: "https://twitter.com/luanpoffo",
  soundcloud: "https://soundcloud.com/luanpoffo",
  spotify: "https://open.spotify.com/artist/luanpoffo",
  appleMusic: "https://music.apple.com/artist/luanpoffo",
  beatport: "https://www.beatport.com/artist/luanpoffo"
};
