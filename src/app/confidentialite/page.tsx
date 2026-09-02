import type { Metadata } from "next";

export const metadata: Metadata = { title: "Confidentialité" };

export default function ConfidentialitePage() {
  return (
    <article className="mx-auto max-w-2xl px-4 py-20 sm:px-6">
      <h1 className="font-display text-5xl font-extrabold uppercase">
        Politique de confidentialité
      </h1>
      <p className="mt-8 text-paper-muted">
        DISTANZ n’utilise vos données personnelles que pour traiter votre
        demande de compatibilité, vous accompagner sur les aides, et vous
        fournir les produits et services demandés. Pas de revente. Droit
        d’accès, de rectification et de suppression : hello@distanz.fr. Vous
        pouvez vous désabonner des communications à tout moment.
      </p>
      <p className="mt-4 text-paper-muted">
        Les emails de la liste d’attente et du questionnaire de compatibilité
        sont stockés dans l’UE. Version complète RGPD à finaliser avec le
        conseil.
      </p>
    </article>
  );
}
