import { z } from "zod";

export const eventTypes = [
  "Casamento",
  "15 anos / debutante",
  "Aniversário / formatura",
  "Evento corporativo",
  "Club / festa",
  "Festival",
  "Outro"
] as const;

export const budgetRanges = [
  "Até R$ 5.000",
  "R$ 5.000 – R$ 10.000",
  "R$ 10.000 – R$ 20.000",
  "R$ 20.000 – R$ 40.000",
  "Acima de R$ 40.000",
  "Prefiro conversar"
] as const;

export const contactSchema = z.object({
  name: z.string().min(2, "Informe seu nome").max(120),
  email: z.string().email("E-mail inválido"),
  phone: z
    .string()
    .min(8, "Telefone inválido")
    .max(30, "Telefone inválido"),
  eventType: z.enum(eventTypes, {
    errorMap: () => ({ message: "Selecione o tipo de evento" })
  }),
  eventDate: z.string().min(4, "Informe a data do evento"),
  city: z.string().min(2, "Informe a cidade ou local"),
  guests: z
    .union([z.string(), z.number()])
    .transform((v) => (typeof v === "string" ? parseInt(v || "0", 10) : v))
    .pipe(z.number().int().min(0).max(1_000_000)),
  budget: z.enum(budgetRanges, {
    errorMap: () => ({ message: "Selecione uma faixa" })
  }),
  message: z.string().max(2000).optional().default(""),
  // honeypot — humanos não preenchem
  website: z.string().max(0).optional()
});

export type ContactInput = z.infer<typeof contactSchema>;
