"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Headphones, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
        poster="/placeholders/hero-poster.jpg"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

      <div className="relative z-10 container h-full flex flex-col justify-end pb-20 md:pb-28">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-[0.3em] text-accent"
        >
          <Sparkles className="inline mr-2" size={14} />
          DJ · open format · EDM
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="headline-hero mt-3 text-balance"
        >
          Luan Poffo
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-5 max-w-2xl text-lg md:text-xl text-foreground/85"
        >
          DJ open format & EDM — do Brasil ao mundo.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-8 flex items-center gap-3 flex-wrap"
        >
          <Link href="/contato" className="btn-primary">
            solicitar orçamento
          </Link>
          <Link href="/musica" className="btn-ghost">
            <Headphones size={16} /> ouvir sets
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
