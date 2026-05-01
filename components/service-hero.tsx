import Image from "next/image";

type Props = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
};

export function ServiceHero({ eyebrow, title, description, image }: Props) {
  return (
    <section className="relative pt-24 pb-16 md:pt-28 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src={image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />
      </div>
      <div className="container">
        <p className="text-xs uppercase tracking-[0.3em] text-accent">
          {eyebrow}
        </p>
        <h1 className="mt-4 headline-hero text-balance">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg text-foreground/80">
          {description}
        </p>
      </div>
    </section>
  );
}
