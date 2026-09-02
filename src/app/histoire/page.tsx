import type { Metadata } from "next";
import Image from "next/image";
import { Aurora } from "@/components/motion/aurora";
import { Reveal } from "@/components/motion/reveal";
import { CtaTrio } from "@/components/ui/cta-trio";
import { SectionKicker } from "@/components/ui/section-kicker";
import { mediaSrc } from "@/lib/media";

export const metadata: Metadata = {
  title: "En savoir plus sur nous",
  description:
    "DISTANZ rend l’autonomie plus simple aux personnes en fauteuil manuel : sortir, arriver à l’heure, garder le sourire. Troisième roue motorisée, clipée à l’avant.",
};

export default function HistoirePage() {
  return (
    <>
      <section className="relative min-h-[88svh] overflow-hidden bg-ink text-paper grain">
        <Image
          src={mediaSrc("hero-night.png")}
          alt=""
          fill
          priority
          className="object-cover object-center motion-safe:animate-slow-zoom"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/20 to-transparent" />
        <Aurora />
        <div className="relative z-10 mx-auto flex min-h-[88svh] max-w-7xl flex-col justify-end px-4 pb-16 pt-32 sm:px-6 lg:px-8">
          <Reveal>
            <SectionKicker>En savoir plus sur nous</SectionKicker>
            <h1 className="mt-5 max-w-5xl font-display text-5xl font-extrabold uppercase leading-[0.88] sm:text-7xl lg:text-[6.2rem]">
              L’autonomie
              <br />
              n’est pas un luxe.
            </h1>
            <p className="mt-8 max-w-xl text-lg text-paper/85">
              On a voulu remettre du bonheur dans les sorties. Un sourire en
              partant. Un sourire en rentrant. Le fauteuil reste le vôtre. Le
              terrain, on le reprend.
            </p>
          </Reveal>
        </div>
      </section>

      <article className="bg-paper">
        <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6">
          <Reveal>
            <SectionKicker>Le quotidien</SectionKicker>
            <h2 className="mt-4 font-display text-3xl font-extrabold uppercase leading-none sm:text-5xl">
              Sortir de chez soi ne devrait pas être un calcul.
            </h2>
            <p className="mt-8 text-lg text-paper-muted">
              Un fauteuil manuel, c’est déjà un outil d’élite. Et pourtant, dès
              le palier, ça se complique. La bordure. La côte. Le gravier du
              parking. Demander de l’aide pour un trajet qu’on voulait faire
              seul. Reculer une soirée. Compter les kilomètres. Attendre
              quelqu’un. Être en difficulté, encore, dès qu’on quitte la maison.
            </p>
            <p className="mt-6 text-lg text-paper-muted">
              Ce n’est pas le fauteuil qui manque. C’est la marge. DISTANZ est
              née de ça : rendre la ville, le parc, le rendez-vous, accessibles
              sans quémander.
            </p>
          </Reveal>

          <Reveal delayMs={80}>
            <div className="mt-16">
              <SectionKicker>Ce qu’on veut</SectionKicker>
            </div>
            <h2 className="mt-4 font-display text-3xl font-extrabold uppercase leading-none sm:text-5xl">
              Du bonheur. Un sourire. La main sur vos propres jantes.
            </h2>
            <p className="mt-8 text-lg text-paper-muted">
              On n’est pas là pour compatir. On est là pour que la journée
              tienne. Clipper une troisième roue motorisée à l’avant. Quelques
              secondes. Vos réglages. Notre moteur. Et vous repartez.
            </p>
            <p className="mt-6 text-lg text-paper-muted">
              Aller au travail sans arriver vidé. Faire les courses. Voir des
              gens. Prendre un café plus loin. Rentrer à l’heure que vous avez
              choisie. Garder vos épaules pour autre chose que la côte.
            </p>
          </Reveal>

          <Reveal delayMs={120}>
            <div className="mt-16">
              <SectionKicker>La pièce</SectionKicker>
            </div>
            <h2 className="mt-4 font-display text-3xl font-extrabold uppercase leading-none sm:text-5xl">
              Redonner de l’autonomie, concrètement.
            </h2>
            <p className="mt-8 text-lg text-paper-muted">
              Franchir. Rouler plus loin. Voyager avec le fauteuil. Attaquer un
              chemin. Arriver seul. Ce sont des gestes simples. Ils changent la
              semaine. On fabrique en France pour que cette troisième roue
              existe, se clippe, et tienne.
            </p>
            <p className="mt-6 text-lg text-paper-muted">
              Votre fauteuil. Votre allure. Plus de terrain. Un sourire au
              départ, et un sourire au retour.
            </p>
          </Reveal>
        </div>
      </article>

      <section className="relative overflow-hidden bg-ink px-4 py-28 text-paper sm:px-6 grain">
        <Aurora />
        <blockquote className="relative z-10 mx-auto max-w-4xl text-center">
          <p className="font-display text-4xl font-extrabold uppercase leading-[0.92] sm:text-6xl">
            Plus de terrain.
            <br />
            Le même fauteuil.
          </p>
          <p className="mx-auto mt-8 max-w-lg text-ink-muted">
            Clip. Vous partez. On s’occupe du châssis, des aides, des modèles.
          </p>
          <div className="mt-12 flex justify-center">
            <CtaTrio onDark asCards />
          </div>
        </blockquote>
      </section>
    </>
  );
}
