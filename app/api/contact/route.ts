import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/contact-schema";

export const runtime = "nodejs";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const TO = process.env.CONTACT_EMAIL ?? "contato@luanpoffo.com";
const FROM =
  process.env.CONTACT_FROM ?? "Luan Poffo <noreply@luanpoffo.com>";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Dados inválidos.", issues: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const data = parsed.data;

    // Honeypot — se preenchido, fingimos sucesso
    if (data.website && data.website.length > 0) {
      return NextResponse.json({ ok: true });
    }

    if (!RESEND_API_KEY) {
      console.warn(
        "[contact] RESEND_API_KEY ausente. Apenas logando o lead:",
        data
      );
      return NextResponse.json({ ok: true, mocked: true });
    }

    const resend = new Resend(RESEND_API_KEY);

    const subject = `[Site] Novo orçamento — ${data.eventType} (${data.city})`;
    const internalHtml = `
      <h2>Novo lead pelo site</h2>
      <ul>
        <li><strong>Nome:</strong> ${escape(data.name)}</li>
        <li><strong>E-mail:</strong> ${escape(data.email)}</li>
        <li><strong>Telefone:</strong> ${escape(data.phone)}</li>
        <li><strong>Tipo de evento:</strong> ${escape(data.eventType)}</li>
        <li><strong>Data:</strong> ${escape(data.eventDate)}</li>
        <li><strong>Cidade/local:</strong> ${escape(data.city)}</li>
        <li><strong>Convidados estimados:</strong> ${data.guests}</li>
        <li><strong>Faixa de orçamento:</strong> ${escape(data.budget)}</li>
      </ul>
      <p><strong>Mensagem:</strong></p>
      <p>${escape(data.message ?? "—").replace(/\n/g, "<br/>")}</p>
    `;

    const replyHtml = `
      <p>Olá, ${escape(data.name.split(" ")[0])}!</p>
      <p>Recebemos sua solicitação de orçamento para <strong>${escape(
        data.eventType
      )}</strong> em <strong>${escape(data.city)}</strong>.</p>
      <p>Em até 24h úteis você recebe a primeira resposta com proposta e disponibilidade. Enquanto isso, fique à vontade para nos chamar no WhatsApp em <a href="https://wa.me/5547988285432">+55 47 98828-5432</a>.</p>
      <p>Um abraço,<br/><strong>Luan Poffo</strong></p>
    `;

    const [internal, reply] = await Promise.all([
      resend.emails.send({
        from: FROM,
        to: [TO],
        replyTo: data.email,
        subject,
        html: internalHtml
      }),
      resend.emails.send({
        from: FROM,
        to: [data.email],
        subject: "Recebemos seu pedido de orçamento — Luan Poffo",
        html: replyHtml
      })
    ]);

    if (internal.error || reply.error) {
      console.error("[contact] erro Resend", internal.error, reply.error);
      return NextResponse.json(
        { error: "Erro ao enviar e-mail. Tente novamente em instantes." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[contact] exceção", e);
    return NextResponse.json(
      { error: "Erro interno. Tente novamente." },
      { status: 500 }
    );
  }
}

function escape(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
