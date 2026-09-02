import { BeforeAfter } from "@/components/sections/before-after";
import { SectionKicker } from "@/components/ui/section-kicker";

const ROWS = [
  { now: "La côte, vous poussez. Les épaules s’arrêtent.", with: "Vous clippez. Le moteur monte." },
  { now: "Un trottoir trop haut, vous faites demi-tour.", with: "Vous franchissez. Vous continuez." },
  { now: "Chaque kilomètre se compte à l’effort.", with: "Vous faites le trajet d’une traite." },
  { now: "Gravier, terre, vous contournez.", with: "Vous prenez le chemin, tel quel." },
  { now: "Pour sortir, il faut souvent attendre quelqu’un.", with: "Vous partez seul, à l’heure." },
  { now: "La journée s’arrête trop tôt.", with: "La soirée reste possible." },
] as const;

export function Compare() {
  return (
    <section id="changement" className="bg-paper text-ink" aria-labelledby="changement-titre">
      <div className="mx-auto max-w-7xl px-4 pb-8 pt-16 sm:px-6 sm:pb-10 sm:pt-20 lg:px-8">
        <SectionKicker>Le passage</SectionKicker>
        <h2
          id="changement-titre"
          className="mt-4 max-w-5xl font-display text-4xl font-extrabold uppercase leading-[0.86] sm:text-6xl lg:text-7xl"
        >
          Actuellement.
          <br />
          Avec DISTANZ.
        </h2>
        <p className="mt-6 max-w-xl text-lg text-paper-muted">
          Le même fauteuil. Une autre journée. Glissez pour voir la différence.
        </p>

        <BeforeAfter />

        <div className="mt-8 overflow-hidden border-y border-ink sm:mt-10">
          <div className="grid grid-cols-2 bg-ink text-paper">
            <p className="px-2 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-paper/70 sm:px-4 sm:py-3 sm:text-[11px] sm:tracking-[0.22em]">
              Actuellement
            </p>
            <p className="bg-volt px-2 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-ink sm:px-4 sm:py-3 sm:text-[11px] sm:tracking-[0.22em]">
              Avec DISTANZ
            </p>
          </div>
          <ol>
            {ROWS.map((row) => (
              <li
                key={row.with}
                className="grid grid-cols-2 border-b border-ink/10 last:border-b-0"
              >
                <p className="border-r border-ink/10 px-2 py-3 text-xs leading-snug text-paper-muted sm:px-4 sm:py-5 sm:text-lg sm:leading-normal">
                  {row.now}
                </p>
                <p className="px-2 py-3 font-display text-sm font-bold uppercase leading-tight text-ink sm:px-4 sm:py-5 sm:text-2xl">
                  {row.with}
                </p>
              </li>
            ))}
          </ol>
        </div>
        <p className="mt-6 font-display text-5xl font-extrabold uppercase leading-none text-volt sm:mt-8 sm:text-7xl">
          Liberté.
        </p>
      </div>
    </section>
  );
}
