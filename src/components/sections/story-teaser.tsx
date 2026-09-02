import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { SectionKicker } from "@/components/ui/section-kicker";
import { mediaSrc } from "@/lib/media";

export function StoryTeaser() {
  return (
    <section className="bg-paper" aria-labelledby="histoire-teaser">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-20">
        <Reveal>
          <SectionKicker>En savoir plus sur nous</SectionKicker>
          <h2
            id="histoire-teaser"
            className="mt-4 font-display text-4xl font-extrabold uppercase leading-none sm:text-6xl"
          >
            Sortir. Sourire. Revenir.
          </h2>
          <p className="mt-6 max-w-xl text-lg text-paper-muted">
            Dès qu’on quitte le seuil, le fauteuil manuel demande trop : un coup
            de main, un détour, une soirée qu’on coupe. DISTANZ existe pour
            rendre ça simple. Redonner de l’autonomie. Remettre un sourire.
          </p>
          <Link
            href="/histoire"
            className="mt-8 inline-flex min-h-11 items-center font-semibold underline decoration-volt decoration-2 underline-offset-4"
          >
            En savoir plus sur nous
          </Link>
        </Reveal>
        <div className="relative aspect-[16/10] overflow-hidden bg-ink lg:aspect-[5/4]">
          <Image
            src={mediaSrc("apres-ville.png")}
            alt="Personne en fauteuil, troisième roue à l’avant, sur une avenue ensoleillée."
            fill
            className="object-cover motion-safe:animate-slow-zoom"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
          <div className="absolute bottom-0 left-0 h-1.5 w-24 bg-volt" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
