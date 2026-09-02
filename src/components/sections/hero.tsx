import Image from "next/image";
import { Aurora } from "@/components/motion/aurora";
import { CtaTrio } from "@/components/ui/cta-trio";
import { SectionKicker } from "@/components/ui/section-kicker";
import { mediaSrc } from "@/lib/media";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-ink text-paper">
      <Image
        src={mediaSrc("hero-night.png")}
        alt="Personne en fauteuil, troisième roue clipée à l’avant, sur un quai en plein soleil."
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/30 to-transparent" />
      <Aurora tone="photo" />
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-4 pb-16 pt-32 sm:px-6 lg:px-8">
        <SectionKicker>3e roue motorisée · Liberté</SectionKicker>
        <h1 className="sr-only">
          DISTANZ, troisième roue électrique française pour fauteuil manuel.
          Franchir, rouler, liberté.
        </h1>
        <p
          aria-hidden="true"
          className="mt-6 max-w-5xl font-display text-5xl font-extrabold uppercase leading-none tracking-tight sm:text-7xl lg:text-[7rem]"
        >
          <span className="block py-1 sm:py-1.5">Franchir</span>
          <span className="block py-1 sm:py-1.5">Rouler</span>
          <span className="block py-1 sm:py-1.5">Liberté</span>
        </p>
        <p className="mt-8 max-w-lg text-lg text-paper/90">
          DISTANZ se clippe à l’avant de votre fauteuil manuel. Quelques
          secondes. Votre châssis. Notre moteur. La liberté, devant vous.
        </p>
        <div className="mt-10">
          <CtaTrio onDark />
        </div>
      </div>
    </section>
  );
}
