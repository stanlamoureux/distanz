import { AdvisorButton } from "@/components/ui/advisor-button";
import { Button } from "@/components/ui/button";
import { SectionKicker } from "@/components/ui/section-kicker";

const GATES = [
  { n: "01", title: "PCH, MDPH" },
  { n: "02", title: "LPPR, Sécurité sociale" },
  { n: "03", title: "Mutuelle" },
  { n: "04", title: "Agefiph, FIPHFP" },
  { n: "05", title: "Régions, départements" },
  { n: "06", title: "CARSAT" },
] as const;

export function AidsTeaser() {
  return (
    <section
      id="financement"
      className="relative overflow-hidden bg-ink text-paper"
      aria-labelledby="aides-teaser"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-12 lg:items-end lg:gap-16 lg:px-8 lg:py-28">
        <div className="lg:col-span-7">
          <SectionKicker>Aides & remboursement</SectionKicker>
          <h2
            id="aides-teaser"
            className="mt-5 font-display text-6xl font-extrabold uppercase leading-[0.82] text-volt sm:text-8xl lg:text-[7.5rem]"
          >
            Financer.
          </h2>
          <p className="mt-6 max-w-xl font-display text-3xl font-extrabold uppercase leading-none sm:text-5xl">
            DISTANZ se clippe.
            <br />
            Le dossier aussi.
          </p>
          <p className="mt-6 max-w-xl text-lg text-paper/80">
            Sur ce marché, les aides décident. MDPH, PCH, mutuelle, emploi,
            région. Un conseiller DISTANZ lit votre situation et aligne les
            guichets. Vous faites la demande, ou on la fait pour vous.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <AdvisorButton variant="volt" />
            <Button href="/aides" variant="light">
              Voir toutes les pistes
            </Button>
          </div>
        </div>
        <ol className="lg:col-span-5">
          {GATES.map((gate) => (
            <li
              key={gate.n}
              className="flex items-baseline justify-between gap-6 border-t border-paper/15 py-4 first:border-t-0 sm:py-5"
            >
              <span className="font-mono text-xs text-volt">{gate.n}</span>
              <span className="flex-1 font-display text-2xl font-bold uppercase leading-none sm:text-3xl">
                {gate.title}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
