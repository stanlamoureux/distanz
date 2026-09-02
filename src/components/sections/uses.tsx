import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { SectionKicker } from "@/components/ui/section-kicker";
import { mediaSrc } from "@/lib/media";
import { USES } from "@/lib/uses";

export function Uses() {
  return (
    <section id="usages" className="bg-paper text-ink" aria-labelledby="usages-titre">
      <div className="mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 sm:pb-20 sm:pt-10 lg:px-8">
        <Reveal>
          <SectionKicker>Ce que ça ouvre</SectionKicker>
          <h2
            id="usages-titre"
            className="mt-4 max-w-3xl font-display text-4xl font-extrabold uppercase leading-none sm:text-6xl"
          >
            Six raisons de clipper la 3e roue.
          </h2>
        </Reveal>
        <ol className="mt-8 grid grid-cols-2 gap-2 sm:mt-16 sm:gap-5 lg:grid-cols-3">
          {USES.map((use, i) => (
            <li key={use.id} className="h-full min-h-0">
              <Reveal delayMs={i * 70} className="flex h-full flex-col">
                <article className="use-card group flex h-full flex-col bg-paper-2 outline outline-1 outline-transparent motion-safe:transition-[outline-color] hover:outline-volt">
                  <div className="relative aspect-[5/3] shrink-0 overflow-hidden sm:aspect-[4/3]">
                    <div className="absolute inset-0 motion-safe:origin-center motion-safe:transition-transform motion-safe:duration-700 motion-safe:ease-out group-hover:scale-[1.06]">
                      <Image
                        src={mediaSrc(use.image)}
                        alt={use.alt}
                        fill
                        className="object-cover object-center"
                        sizes="(min-width: 1024px) 33vw, 50vw"
                      />
                    </div>
                    <p className="absolute left-2 top-2 bg-volt px-1.5 py-0.5 font-mono text-[10px] text-ink sm:left-4 sm:top-4 sm:px-2 sm:py-1 sm:text-[11px]">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                  </div>
                  <div className="flex flex-1 flex-col p-3 sm:p-7 sm:pt-6">
                    <h3 className="font-display text-sm font-bold uppercase leading-tight sm:min-h-[4.25rem] sm:text-2xl">
                      {use.title}
                    </h3>
                    <p className="mt-1 text-[13px] font-medium leading-snug sm:mt-3 sm:min-h-6 sm:text-sm">
                      {use.lead}
                    </p>
                    <p className="mt-2 hidden text-paper-muted sm:mt-3 sm:block sm:min-h-[4.5rem]">
                      {use.body}
                    </p>
                    <Button
                      href={`/modeles?usage=${use.id}`}
                      variant="ghost"
                      className="mt-3 hidden w-fit sm:mt-auto sm:inline-flex"
                    >
                      Voir les modèles
                    </Button>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
