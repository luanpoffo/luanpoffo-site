"use client";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { IMaskInput } from "react-imask";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

import { Input, Textarea } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem
} from "@/components/ui/select";
import {
  contactSchema,
  type ContactInput,
  eventTypes,
  budgetRanges
} from "@/lib/contact-schema";

type Props = {
  defaultEventType?: ContactInput["eventType"];
  compact?: boolean;
};

export function ContactForm({ defaultEventType, compact = false }: Props) {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">(
    "idle"
  );
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      eventType: defaultEventType,
      guests: 0,
      message: "",
      website: ""
    }
  });

  const onSubmit = async (data: ContactInput) => {
    setStatus("loading");
    setServerError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j.error ?? "Erro ao enviar.");
      }
      setStatus("ok");
      reset();
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Erro ao enviar.";
      setServerError(msg);
      setStatus("error");
    }
  };

  if (status === "ok") {
    return (
      <div className="card-surface p-8 text-center">
        <CheckCircle2 className="mx-auto text-accent" size={42} />
        <h3 className="mt-4 font-display text-2xl uppercase">
          Recebido com sucesso
        </h3>
        <p className="mt-2 text-foreground/70">
          Obrigado! Em até 24h você recebe a primeira resposta no e-mail
          informado.
        </p>
        <Button
          className="mt-6"
          variant="ghost"
          onClick={() => setStatus("idle")}
        >
          enviar outra mensagem
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`card-surface p-6 md:p-8 ${compact ? "" : ""}`}
      noValidate
    >
      {/* Honeypot */}
      <input
        type="text"
        autoComplete="off"
        tabIndex={-1}
        aria-hidden="true"
        className="hidden"
        {...register("website")}
      />

      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Nome" error={errors.name?.message}>
          <Input
            type="text"
            placeholder="Seu nome completo"
            aria-invalid={!!errors.name}
            {...register("name")}
          />
        </Field>

        <Field label="E-mail" error={errors.email?.message}>
          <Input
            type="email"
            placeholder="voce@email.com"
            aria-invalid={!!errors.email}
            {...register("email")}
          />
        </Field>

        <Field label="Telefone" error={errors.phone?.message}>
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <IMaskInput
                mask={[
                  { mask: "(00) 00000-0000", startsWith: "" },
                  { mask: "+0 000 000 000 000", startsWith: "+" }
                ]}
                value={field.value ?? ""}
                onAccept={(v) => field.onChange(v)}
                placeholder="(11) 99999-9999"
                className="flex h-12 w-full rounded-md border border-input bg-card px-4 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              />
            )}
          />
        </Field>

        <Field label="Tipo de evento" error={errors.eventType?.message}>
          <Controller
            name="eventType"
            control={control}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  {eventTypes.map((t) => (
                    <SelectItem key={t} value={t}>
                      {t}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
        </Field>

        <Field label="Data do evento" error={errors.eventDate?.message}>
          <Input type="date" {...register("eventDate")} />
        </Field>

        <Field label="Cidade / local" error={errors.city?.message}>
          <Input
            type="text"
            placeholder="Ex: São Paulo / Casa de festas X"
            {...register("city")}
          />
        </Field>

        <Field label="Convidados estimados" error={errors.guests?.message}>
          <Input
            type="number"
            min={0}
            placeholder="Ex: 250"
            {...register("guests", { valueAsNumber: true })}
          />
        </Field>

        <Field label="Faixa de orçamento" error={errors.budget?.message}>
          <Controller
            name="budget"
            control={control}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  {budgetRanges.map((t) => (
                    <SelectItem key={t} value={t}>
                      {t}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
        </Field>
      </div>

      <div className="mt-5">
        <Field label="Mensagem (opcional)" error={errors.message?.message}>
          <Textarea
            placeholder="Conte mais sobre o evento, estilo musical desejado, horário, etc."
            {...register("message")}
          />
        </Field>
      </div>

      <div className="mt-7 flex items-center justify-between gap-4 flex-wrap">
        <p className="text-xs text-foreground/50">
          Resposta em até 24h. Seus dados não são compartilhados.
        </p>
        <Button type="submit" disabled={status === "loading"}>
          {status === "loading" ? (
            <>
              <Loader2 size={16} className="animate-spin" /> enviando...
            </>
          ) : (
            "solicitar orçamento"
          )}
        </Button>
      </div>

      {status === "error" && (
        <p className="mt-4 flex items-center gap-2 text-sm text-destructive">
          <AlertCircle size={16} /> {serverError ?? "Erro ao enviar."}
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  error,
  children
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <Label>{label}</Label>
      {children}
      {error && (
        <span className="text-xs text-destructive">{error}</span>
      )}
    </div>
  );
}
