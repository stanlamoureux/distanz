import type { Metadata } from "next";
import { PageIntro } from "@/components/layout/page-intro";
import { Button } from "@/components/ui/button";
import { advisorHref, advisorIsExternal } from "@/lib/cta";

export const metadata: Metadata = {
  title: "Parler à un conseiller",
  description:
    "On écoute vos besoins, votre fauteuil, vos déplacements. On vous ramène la solution DISTANZ qui tient, y compris les aides possibles.",
};

export default function ConseillerPage() {
  return (
    <div className="pb-24">
      <PageIntro
        kicker="Conseil"
        title="On vous ramène la meilleure solution pour vos besoins."
        lead="Pas un catalogue à défiler. Un échange. Votre fauteuil, vos sorties, ce qui bloque. On aligne le modèle, le clip, et ce qui peut être pris en charge."
      />

      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <div className="border border-ink/10 bg-paper-2 p-8">
          {advisorIsExternal ? (
            <>
              <p className="text-paper-muted">
                Le calendrier est ouvert. Choisissez un créneau. On prépare
                l’échange : usages, châssis, aides. Une photo du châssis aide,
                elle n’est pas obligatoire.
              </p>
              <div className="mt-8">
                <a
                  href={advisorHref}
                  className="inline-flex min-h-11 min-w-11 items-center justify-center bg-volt px-5 py-3 text-sm font-semibold text-ink hover:bg-volt-hover"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ouvrir le calendrier
                </a>
              </div>
            </>
          ) : (
            <>
              <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-paper-muted">
                <span className="inline-block size-2 bg-volt" aria-hidden="true" />
                Parler à quelqu’un
              </p>
              <h2 className="mt-3 font-display text-3xl font-extrabold uppercase">
                Dites-nous ce dont vous avez besoin.
              </h2>
              <p className="mt-4 text-paper-muted">
                Marque du fauteuil si vous la connaissez. Ce que vous voulez
                faire. Ce qui vous arrête aujourd’hui. On revient avec une
                lecture : le clip, le modèle, les aides possibles près de chez
                vous.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="mailto:hello@distanz.fr?subject=Besoin%20DISTANZ">
                  Écrire à hello@distanz.fr
                </Button>
                <Button href="/compatibilite" variant="ghost">
                  Vérifier la compatibilité
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
