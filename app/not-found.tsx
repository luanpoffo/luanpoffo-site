import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container min-h-[70vh] flex flex-col items-center justify-center text-center pt-28 pb-20">
      <p className="text-xs uppercase tracking-[0.3em] text-accent">404</p>
      <h1 className="mt-4 headline-hero">Página perdida na pista</h1>
      <p className="mt-5 max-w-md text-foreground/70">
        Talvez ela tenha saído mais cedo da festa. Que tal voltar para o início?
      </p>
      <Link href="/" className="mt-8 btn-primary">
        voltar para a home
      </Link>
    </section>
  );
}
