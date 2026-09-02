import { Button } from "@/components/ui/button";

export function Waitlist() {
  return (
    <section
      id="liste-attente"
      className="bg-volt text-ink"
      aria-labelledby="waitlist-titre"
    >
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
        <h2
          id="waitlist-titre"
          className="font-display text-5xl font-extrabold uppercase leading-none sm:text-7xl"
        >
          Pas de boutique.
          <br />
          Une file.
        </h2>
        <p className="mt-6 max-w-xl text-lg">
          Pré-lancement. On constitue une liste qualifiée : ville, fauteuil,
          usage. Pas de paiement. Pas de spam.
        </p>
        <form className="mt-12 space-y-6" aria-describedby="waitlist-note">
          <div>
            <label htmlFor="email" className="block text-sm font-semibold">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="mt-2 min-h-11 w-full border border-ink bg-paper px-4"
            />
          </div>
          <div>
            <label htmlFor="ville" className="block text-sm font-semibold">
              Ville
            </label>
            <input
              id="ville"
              name="ville"
              autoComplete="address-level2"
              className="mt-2 min-h-11 w-full border border-ink bg-paper px-4"
            />
          </div>
          <div>
            <label htmlFor="fauteuil" className="block text-sm font-semibold">
              Type de fauteuil
            </label>
            <input
              id="fauteuil"
              name="fauteuil"
              className="mt-2 min-h-11 w-full border border-ink bg-paper px-4"
            />
          </div>
          <fieldset>
            <legend className="text-sm font-semibold">Usage principal</legend>
            <div className="mt-3 flex flex-wrap gap-6">
              <label className="inline-flex min-h-11 items-center gap-2">
                <input type="radio" name="usage" value="ville" />
                Ville
              </label>
              <label className="inline-flex min-h-11 items-center gap-2">
                <input type="radio" name="usage" value="tout-chemin" />
                Tout-chemin
              </label>
            </div>
          </fieldset>
          <p id="waitlist-note" className="text-sm">
            Envoi réel à l’étape Supabase. Ici, maquette visuelle.
          </p>
          <Button variant="ink" type="button">
            Me tenir informé
          </Button>
        </form>
      </div>
    </section>
  );
}
