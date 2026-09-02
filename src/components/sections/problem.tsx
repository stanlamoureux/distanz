import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { SectionKicker } from "@/components/ui/section-kicker";
import { mediaSrc } from "@/lib/media";

const BLOCKS = [
  {
    kicker: "01  Obstacles",
    title: "La bordure n’arrête plus la journée.",
    body: "Une levée, un passage cassé, un parking défoncé. DISTANZ franchit. Vous gardez le cap.",
  },
  {
    kicker: "02  Distance",
    title: "Cinq kilomètres, d’une traite.",
    body: "Le rendez-vous, la gare, la rive d’en face. L’autonomie sert à garder toutes les sorties.",
  },
  {
    kicker: "03  Épaules",
    title: "Garder les mains pour autre chose.",
    body: "Le moteur prend le bitume et le relief. Vous gardez le contrôle. Les articulations respirent.",
  },
] as const;

export function Problem() {
  return (
    <section className="bg-paper" aria-labelledby="probleme-titre">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal>
          <SectionKicker>Le terrain</SectionKicker>
          <h2
            id="probleme-titre"
            className="mt-4 max-w-3xl font-display text-4xl font-extrabold uppercase leading-none text-ink sm:text-6xl"
          >
            Obstacles, côtes, gravier.
          </h2>
        </Reveal>
        <div className="relative mt-12 overflow-hidden">
          <Image
            src={mediaSrc("avant-obstacles.png")}
            alt="Bordure cassée et gravier en plein soleil, le genre d’obstacle qui arrête un fauteuil manuel."
            width={1600}
            height={900}
            className="h-[42vw] min-h-64 w-full object-cover"
          />
          <div className="absolute bottom-0 left-0 h-1.5 w-24 bg-volt" aria-hidden="true" />
        </div>
        <ul className="mt-0 grid gap-px bg-ink/10 md:grid-cols-3">
          {BLOCKS.map((block) => (
            <li key={block.kicker} className="bg-paper p-8 md:p-10">
              <p className="font-mono text-xs uppercase tracking-widest text-paper-muted">
                {block.kicker}
              </p>
              <h3 className="mt-6 font-display text-2xl font-bold uppercase leading-tight">
                {block.title}
              </h3>
              <p className="mt-4 text-base text-paper-muted">{block.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
