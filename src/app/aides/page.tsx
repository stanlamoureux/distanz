import type { Metadata } from "next";
import { PageIntro } from "@/components/layout/page-intro";
import { AdvisorButton } from "@/components/ui/advisor-button";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Aides et financement de la roue électrique DISTANZ",
  description:
    "Appelez DISTANZ pour obtenir les aides et financer l’achat de votre troisième roue électrique pour fauteuil. Un conseiller lit votre dossier et vous accompagne.",
};

const PATHS = [
  {
    title: "PCH, MDPH",
    body: "La prestation de compensation du handicap peut financer une aide technique. Dossier MDPH, devis, argumentaire d’usage. Les délais et les taux varient selon le département. On ne les invente pas : on les lit avec vous.",
  },
  {
    title: "LPPR, Sécurité sociale",
    body: "Certaines aides à la mobilité figurent sur la liste des produits et prestations. On vérifie le code, l’entente préalable, et ce que votre fauteuil a déjà ouvert.",
  },
  {
    title: "Mutuelle et surcomplémentaire",
    body: "Reste à charge, forfait handicap, extra-légal. Une lettre du prescripteur et un devis DISTANZ aident à ouvrir le dossier.",
  },
  {
    title: "Travail : Agefiph, FIPHFP",
    body: "Si la roue sert le maintien dans l’emploi, le déplacement professionnel, le trajet. Dossier employeur, médecin du travail, ergonomie. Public ou privé, deux guichets, même logique.",
  },
  {
    title: "Aides régionales et départementales",
    body: "Plusieurs régions et départements cofinancent le matériel de mobilité. Fonds de compensation, aides à l’autonomie, parfois un coup de pouce transport.",
  },
  {
    title: "Accident du travail, CARSAT",
    body: "Selon l’origine du handicap : caisse, fonds départemental, parfois une collectivité. On prépare les pièces. Le taux dépend de votre situation.",
  },
] as const;

export default function AidesPage() {
  return (
    <div className="pb-24">
      <PageIntro
        kicker="Aides et remboursement"
        title="Appelez-nous pour financer votre DISTANZ."
        lead="Un conseiller DISTANZ échange avec vous, comprend vos besoins, et vous accompagne pour obtenir les aides disponibles selon votre situation. Vous faites la demande, ou vous nous laissez la faire pour vous."
      >
        <div className="flex flex-wrap gap-3">
          <AdvisorButton variant="volt" />
          <Button href="mailto:hello@distanz.fr?subject=Éligibilité%20aux%20aides" variant="ghost">
            Écrire pour mes aides
          </Button>
        </div>
      </PageIntro>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <aside className="border border-ink bg-ink p-8 text-paper sm:p-12">
          <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.28em] text-volt">
            <span className="inline-block size-2 bg-volt" aria-hidden="true" />
            Première étape
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl font-extrabold uppercase leading-none sm:text-5xl">
            Appelez-nous pour obtenir des aides et financer l’achat.
          </h2>
          <p className="mt-6 max-w-2xl text-paper/80">
            Un conseiller DISTANZ échange avec vous pour comprendre vos
            besoins, votre fauteuil, vos déplacements. Notre travail : vous
            apporter la meilleure solution, et vous accompagner pour obtenir
            les aides disponibles dans votre cas. MDPH, PCH, mutuelle, emploi,
            région : on aligne les guichets. Le remboursement reste une
            décision administrative. On rend le dossier lisible.
          </p>
          <p className="mt-4 max-w-2xl text-paper/80">
            On a des partenariats avec des réseaux associatifs et des acteurs
            de terrain. Le dossier ne se fait pas tout seul. On le porte avec
            vous, et avec eux, quand ça aide.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <AdvisorButton variant="volt" />
            <Button href="/compatibilite" variant="light">
              Vérifier la compatibilité
            </Button>
          </div>
        </aside>

        <p className="mt-16 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.28em] text-paper-muted">
          <span className="inline-block size-2 bg-volt" aria-hidden="true" />
          Ensuite, les pistes qu’on explore avec vous
        </p>
        <p className="mt-3 max-w-2xl text-paper-muted">
          Cette liste n’est pas un droit automatique. C’est la carte. On
          l’ouvre après l’échange, selon où vous habitez et ce que vous
          faites de vos journées.
        </p>

        <ol className="mt-8 grid gap-px bg-ink/10 md:grid-cols-2">
          {PATHS.map((path, i) => (
            <li key={path.title} className="bg-paper p-8">
              <p className="font-mono text-xs text-paper-muted">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-4 font-display text-2xl font-bold uppercase">
                {path.title}
              </h2>
              <p className="mt-4 text-paper-muted">{path.body}</p>
            </li>
          ))}
        </ol>

        <aside className="mt-16 bg-volt p-8 text-ink sm:p-12">
          <h2 className="font-display text-3xl font-extrabold uppercase">
            On cartographie les dispositifs près de chez vous.
          </h2>
          <p className="mt-4 max-w-2xl">
            MDPH, mutuelle, région, association. Une fois qu’on vous a parlé,
            on aligne les guichets. Devis, argumentaire d’usage, pièces. Vous
            faites la demande, ou vous nous laissez la faire pour vous.
          </p>
          <div className="mt-8">
            <AdvisorButton variant="ink" />
          </div>
        </aside>
      </div>
    </div>
  );
}
