import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/layout/page-intro";
import { AdvisorButton } from "@/components/ui/advisor-button";
import { Button } from "@/components/ui/button";
import { MODELS, modelsForUse } from "@/lib/models";
import { USES, type UseId } from "@/lib/uses";

export const metadata: Metadata = {
  title: "Modèles DISTANZ City Air Trail",
  description:
    "Les modèles DISTANZ arrivent. City, Air, Trail : obstacles du quotidien, voyage, tout-terrain. Vérifiez la compatibilité de votre fauteuil.",
};

function isUseId(value: string | undefined): value is UseId {
  return USES.some((use) => use.id === value);
}

export default async function ModelesPage({
  searchParams,
}: {
  searchParams: Promise<{ usage?: string }>;
}) {
  const { usage } = await searchParams;
  const filter = isUseId(usage) ? usage : undefined;
  const models = filter ? modelsForUse(filter) : MODELS;
  const activeUse = USES.find((use) => use.id === filter);

  return (
    <div className="pb-24">
      <PageIntro
        kicker="La gamme"
        title="Voir les modèles."
        lead="Trois silhouettes. Les specs précises arrivent. En attendant : l’usage, le terrain, et un conseiller pour caler le châssis."
      >
        <AdvisorButton />
      </PageIntro>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrer par usage">
          <FilterChip href="/modeles" active={!filter}>
            Tous
          </FilterChip>
          {USES.map((use) => (
            <FilterChip
              key={use.id}
              href={`/modeles?usage=${use.id}`}
              active={filter === use.id}
            >
              {use.title}
            </FilterChip>
          ))}
        </div>

        {activeUse ? (
          <p className="mt-6 max-w-2xl text-paper-muted">{activeUse.body}</p>
        ) : null}

        <ul className="mt-12 grid gap-px bg-ink/10 md:grid-cols-3">
          {models.map((model) => (
            <li key={model.slug} className="flex flex-col bg-paper p-8">
              <p className="font-mono text-xs uppercase tracking-widest text-paper-muted">
                Bientôt
              </p>
              <h2 className="mt-4 font-display text-3xl font-extrabold uppercase">
                {model.name}
              </h2>
              <p className="mt-3 text-paper-muted">{model.tagline}</p>
              <dl className="mt-8 space-y-3">
                {model.specs.map((spec) => (
                  <div key={spec.label} className="flex justify-between gap-4 border-b border-ink/10 pb-3">
                    <dt className="font-mono text-xs uppercase tracking-widest text-paper-muted">
                      {spec.label}
                    </dt>
                    <dd className="text-sm font-semibold">{spec.value}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-auto flex flex-wrap gap-3 pt-8">
                <Button href="/compatibilite">Vérifier la compatibilité</Button>
                <AdvisorButton />
              </div>
            </li>
          ))}
        </ul>

        {models.length === 0 ? (
          <p className="mt-12 text-paper-muted">
            Aucun modèle listé pour cet usage pour l’instant. Parlez à un
            conseiller, ou voyez toute la gamme.
          </p>
        ) : null}
      </div>
    </div>
  );
}

function FilterChip({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-11 items-center px-4 text-sm font-semibold motion-safe:transition-colors ${
        active
          ? "bg-ink text-paper"
          : "border border-ink/15 text-ink hover:border-ink"
      }`}
      aria-current={active ? "page" : undefined}
    >
      {children}
    </Link>
  );
}
