import { SectionKicker } from "@/components/ui/section-kicker";

const ITEMS = [
  {
    q: "Le financement et les aides ?",
    a: "MDPH, PCH, mutuelles, Agefiph, aides régionales selon les dossiers. La page Aides détaille les chemins. On documente les pièces. Le taux dépend de votre situation.",
  },
  {
    q: "Mon fauteuil est-il compatible ?",
    a: "Marque, modèle, châssis pliant ou rigide, potences, diamètre de tube. La page Compatibilité liste les fauteuils. On vérifie châssis par châssis.",
  },
  {
    q: "Peut-on voyager en avion ?",
    a: "Question lithium. Capacité Wh, documents IATA, procédure soute. Réponse produit : [À REMPLIR]. On publie le chiffre dès qu’il est verrouillé.",
  },
  {
    q: "Garantie ?",
    a: "[À REMPLIR] mois pièces et main-d’œuvre. SAV France.",
  },
] as const;

export function Faq() {
  return (
    <section id="faq" className="bg-paper" aria-labelledby="faq-titre">
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionKicker>FAQ</SectionKicker>
        <h2
          id="faq-titre"
          className="mt-4 font-display text-4xl font-extrabold uppercase sm:text-6xl"
        >
          Questions nettes.
        </h2>
        <div className="mt-12 divide-y divide-ink/10 border-y border-ink">
          {ITEMS.map((item) => (
            <details key={item.q} className="group">
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-5 font-medium marker:content-none">
                <span className="text-lg">{item.q}</span>
                <span aria-hidden="true" className="font-mono text-volt group-open:hidden">
                  +
                </span>
                <span aria-hidden="true" className="hidden font-mono text-ink group-open:inline">
                  −
                </span>
              </summary>
              <p className="max-w-2xl pb-7 text-paper-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
