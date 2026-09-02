import Image from "next/image";
import { CtaTrio } from "@/components/ui/cta-trio";
import { SectionKicker } from "@/components/ui/section-kicker";
import { mediaSrc } from "@/lib/media";

const SPECS = [
  { label: "Autonomie", value: "[À REMPLIR] km" },
  { label: "Vitesse max", value: "[À REMPLIR] km/h" },
  { label: "Masse", value: "[À REMPLIR] kg" },
  { label: "Installation", value: "quelques secondes" },
  { label: "Châssis", value: "Pliant / rigide" },
  { label: "Batterie", value: "Lithium [À REMPLIR] Wh" },
] as const;

export function Product() {
  return (
    <section id="produit" className="bg-paper text-ink" aria-labelledby="produit-titre">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] overflow-hidden bg-paper">
              <Image
                src={mediaSrc("studio-roue.png")}
                alt="Troisième roue motorisée DISTANZ, photographie en lumière du jour."
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <div className="absolute left-0 top-0 h-full w-1.5 bg-volt" aria-hidden="true" />
            </div>
          </div>
          <div className="lg:col-span-6">
            <SectionKicker>La motorisation</SectionKicker>
            <h2
              id="produit-titre"
              className="mt-4 font-display text-5xl font-extrabold uppercase leading-none"
            >
              Une 3e roue
              <br />
              motorisée
              <br />
              pour fauteuil.
            </h2>
            <p className="mt-6 text-paper-muted">
              Le fauteuil reste le vôtre. Ça s’installe en quelques secondes.
              DISTANZ ajoute de la route, de la côte, du relief. Vos épaules
              respirent.
            </p>
            <dl className="mt-10 grid grid-cols-2 gap-px bg-ink/10">
              {SPECS.map((spec) => (
                <div key={spec.label} className="bg-paper-2 p-5">
                  <dt className="font-mono text-[11px] uppercase tracking-widest text-paper-muted">
                    {spec.label}
                  </dt>
                  <dd className="mt-2 font-display text-2xl font-bold uppercase">
                    {spec.value}
                  </dd>
                </div>
              ))}
            </dl>
            <div className="mt-10">
              <CtaTrio asCards />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
