import Image from "next/image";
import { Reveal } from "./reveal";

type Props = { images?: { src: string; alt: string }[] };

const DEFAULT: { src: string; alt: string }[] = Array.from(
  { length: 8 },
  (_, i) => ({
    src: `/placeholders/gallery-${i + 1}.jpg`,
    alt: `Luan Poffo apresentação ${i + 1}`
  })
);

export function Gallery({ images = DEFAULT }: Props) {
  return (
    <section className="container py-20 md:py-28">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.3em] text-accent">
          Galeria
        </p>
        <h2 className="mt-3 headline-section text-balance">Em movimento</h2>
      </Reveal>
      <div className="mt-12 columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
        {images.map((img, i) => (
          <Reveal key={i} delay={i * 0.03}>
            <figure className="mb-4 break-inside-avoid overflow-hidden rounded-xl border border-border">
              <div
                className={`relative ${
                  i % 3 === 0 ? "aspect-[3/4]" : i % 3 === 1 ? "aspect-[4/5]" : "aspect-square"
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
              </div>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
