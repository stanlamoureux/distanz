import type { Metadata } from "next";

export const metadata: Metadata = { title: "Mentions légales" };

export default function MentionsLegalesPage() {
  return (
    <article className="mx-auto max-w-2xl px-4 py-20 sm:px-6">
      <h1 className="font-display text-5xl font-extrabold uppercase">Mentions légales</h1>
      <p className="mt-8 text-paper-muted">
        Éditeur : DISTANZ. Raison sociale à remplir. Hébergement : Vercel.
        Contact : hello@distanz.fr. Textes complets à l’étape juridique.
      </p>
    </article>
  );
}
