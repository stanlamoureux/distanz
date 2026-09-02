import { Button } from "@/components/ui/button";

const FIELDS = [
  {
    id: "marque",
    label: "Marque du fauteuil",
    name: "marque",
    placeholder: "Küschall, Quickie, TiLite…",
  },
  {
    id: "modele",
    label: "Modèle",
    name: "modele",
    placeholder: "K-Series, Argon²…",
  },
] as const;

export function Compatibility() {
  return (
    <section
      id="compatibilite"
      className="bg-ink text-paper"
      aria-labelledby="compat-titre"
    >
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:grid lg:grid-cols-12 lg:gap-16 lg:px-8">
        <div className="lg:col-span-5">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-volt">
            Le test qui compte
          </p>
          <h2
            id="compat-titre"
            className="mt-4 font-display text-4xl font-extrabold uppercase leading-none sm:text-6xl"
          >
            Votre fauteuil, d’abord.
          </h2>
          <p className="mt-6 text-ink-muted">
            DISTANZ se clippe à l’avant. On lit le châssis, marque par marque.
            Puis on vous dit ce qui passe, ce qu’on vérifie, et la suite.
          </p>
        </div>

        <form
          className="mt-12 space-y-6 lg:col-span-7 lg:mt-0"
          aria-describedby="compat-disclaimer"
        >
          {FIELDS.map((field) => (
            <div key={field.id}>
              <label htmlFor={field.id} className="block text-sm font-medium">
                {field.label}
              </label>
              <input
                id={field.id}
                name={field.name}
                autoComplete="off"
                placeholder={field.placeholder}
                className="mt-2 min-h-11 w-full border border-line-dark bg-void px-4 text-paper placeholder:text-ink-muted"
              />
            </div>
          ))}

          <fieldset>
            <legend className="text-sm font-medium">Type de châssis</legend>
            <div className="mt-3 flex flex-wrap gap-4">
              <label className="inline-flex min-h-11 items-center gap-2">
                <input type="radio" name="chassis" value="pliant" />
                Pliant
              </label>
              <label className="inline-flex min-h-11 items-center gap-2">
                <input type="radio" name="chassis" value="rigide" />
                Rigide
              </label>
            </div>
          </fieldset>

          <fieldset>
            <legend className="text-sm font-medium">Potences avant</legend>
            <div className="mt-3 flex flex-wrap gap-4">
              <label className="inline-flex min-h-11 items-center gap-2">
                <input type="radio" name="potence" value="amovible" />
                Amovibles
              </label>
              <label className="inline-flex min-h-11 items-center gap-2">
                <input type="radio" name="potence" value="fixes" />
                Fixes
              </label>
            </div>
          </fieldset>

          <div>
            <label htmlFor="tube" className="block text-sm font-medium">
              Diamètre des tubes avant
            </label>
            <input
              id="tube"
              name="tube"
              placeholder="ex. 25 mm"
              className="mt-2 min-h-11 w-full border border-line-dark bg-void px-4 text-paper placeholder:text-ink-muted"
            />
          </div>

          <p id="compat-disclaimer" className="text-sm text-ink-muted">
            Réponse honnête : compatible, à vérifier avec nous, ou non compatible.
            Le moteur de règles sera branché à l’étape formulaires.
          </p>
          <Button type="button">Lire le verdict</Button>
        </form>
      </div>
    </section>
  );
}
