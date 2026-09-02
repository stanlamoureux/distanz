import { Aurora } from "@/components/motion/aurora";
import { Reveal } from "@/components/motion/reveal";
import { CtaTrio } from "@/components/ui/cta-trio";
import { SectionKicker } from "@/components/ui/section-kicker";

export function CloseCta() {
  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      <Aurora />
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <Reveal>
          <SectionKicker>Troisième roue électrique française</SectionKicker>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-extrabold uppercase leading-none sm:text-6xl">
            Retrouver de l’autonomie.
            <br />
            Garder le plaisir.
          </h2>
          <p className="mt-6 max-w-xl text-lg text-paper/85">
            Face à un fauteuil électrique, une roue d’aide à la propulsion ou un
            scooter, c’est ce qu’il y a de plus agréable à utiliser.
          </p>
          <p className="mt-4 max-w-xl text-lg text-paper/85">
            DISTANZ reste sur votre fauteuil. Sur votre châssis. Avec notre
            moteur, à vous la liberté de sortir quand vous le voulez.
          </p>
          <div className="mt-10">
            <CtaTrio onDark asCards />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
