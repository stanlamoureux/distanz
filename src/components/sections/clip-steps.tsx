"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Aurora } from "@/components/motion/aurora";
import { Reveal } from "@/components/motion/reveal";
import { SectionKicker } from "@/components/ui/section-kicker";

const STEPS = [
  {
    n: "01",
    title: "Vous clippez",
    body: "Devant le fauteuil. Quelques secondes. Vos réglages restent les vôtres.",
    src: "/media/clip-clip.png",
    alt: "Le même homme clippe la troisième roue DISTANZ à l’avant de son fauteuil.",
  },
  {
    n: "02",
    title: "Vous partez",
    body: "Côte, bordure, gravier. Le moteur prend. Vous gardez le cap.",
    src: "/media/clip-ride.png",
    alt: "Il roule, les deux mains sur le guidon de la troisième roue.",
  },
  {
    n: "03",
    title: "Vous décrochez",
    body: "Train, voiture, palier. La roue se retire. Le fauteuil redevient le fauteuil.",
    src: "/media/clip-unclip.png",
    alt: "Il retire la troisième roue. Le fauteuil redevient manuel.",
  },
] as const;

export function ClipSteps() {
  const scroller = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = scroller.current;
    if (!el) return;
    const onScroll = () => {
      const i = Math.round(el.scrollLeft / Math.max(el.clientWidth * 0.82, 1));
      setActive(Math.min(STEPS.length - 1, Math.max(0, i)));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (index: number) => {
    const next = Math.min(STEPS.length - 1, Math.max(0, index));
    setActive(next);
    const el = scroller.current;
    if (!el) return;
    const child = el.children[next] as HTMLElement | undefined;
    child?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
  };

  return (
    <section className="relative overflow-hidden bg-ink text-paper" aria-labelledby="clip-titre">
      <Aurora />
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
        <Reveal>
          <SectionKicker onDark>Le geste</SectionKicker>
          <h2
            id="clip-titre"
            className="mt-4 max-w-3xl font-display text-4xl font-extrabold uppercase leading-none sm:text-6xl"
          >
            Clip. Roulez. Décrochez.
          </h2>
          <p className="mt-4 font-mono text-xs uppercase tracking-[0.18em] text-ink-muted">
            Glissez, ou flèches gauche et droite
          </p>
        </Reveal>
        <ul
          ref={scroller}
          tabIndex={0}
          role="region"
          aria-roledescription="carrousel"
          aria-label="Clip, roulez, décrochez. Flèches gauche et droite pour changer de geste."
          onKeyDown={(e) => {
            if (e.key === "ArrowRight" || e.key === "ArrowDown") {
              e.preventDefault();
              goTo(active + 1);
            } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
              e.preventDefault();
              goTo(active - 1);
            } else if (e.key === "Home") {
              e.preventDefault();
              goTo(0);
            } else if (e.key === "End") {
              e.preventDefault();
              goTo(STEPS.length - 1);
            }
          }}
          className="-mx-4 mt-8 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:mt-12 sm:grid sm:grid-cols-3 sm:gap-4 sm:overflow-visible sm:px-0 sm:pb-0"
        >
          {STEPS.map((step, i) => (
            <li
              key={step.n}
              className="w-[78vw] max-w-[22rem] shrink-0 snap-start sm:flex sm:h-full sm:w-auto sm:max-w-none sm:flex-col"
            >
              <Reveal delayMs={i * 90} className="flex h-full flex-col">
                <div className="relative aspect-[16/10] overflow-hidden bg-paper">
                  <Image
                    src={step.src}
                    alt={step.alt}
                    fill
                    className="object-cover object-center"
                    sizes="(min-width: 640px) 33vw, 78vw"
                  />
                  {i === 0 ? (
                    <p
                      className="pointer-events-none absolute bottom-3 right-3 bg-volt px-2 py-1 font-mono text-[10px] font-semibold uppercase tracking-widest text-ink sm:hidden"
                      aria-hidden="true"
                    >
                      Flèches ← →
                    </p>
                  ) : null}
                </div>
                <p className="mt-4 font-mono text-xs text-volt">{step.n}</p>
                <h3 className="mt-1 font-display text-xl font-bold uppercase sm:text-3xl">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-ink-muted sm:text-base">{step.body}</p>
              </Reveal>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Geste précédent"
              disabled={active === 0}
              onClick={() => goTo(active - 1)}
              className="inline-flex size-11 items-center justify-center border border-paper/30 text-paper hover:border-volt hover:text-volt disabled:opacity-30"
            >
              ←
            </button>
            <button
              type="button"
              aria-label="Geste suivant"
              disabled={active === STEPS.length - 1}
              onClick={() => goTo(active + 1)}
              className="inline-flex size-11 items-center justify-center border border-paper/30 text-paper hover:border-volt hover:text-volt disabled:opacity-30"
            >
              →
            </button>
          </div>
          <div className="flex items-center gap-2" role="group" aria-label="Les trois gestes">
            {STEPS.map((step, i) => (
              <button
                key={step.n}
                type="button"
                aria-current={active === i ? "true" : undefined}
                aria-label={`${step.title}, ${i + 1} sur 3`}
                onClick={() => goTo(i)}
                className={`inline-flex size-11 items-center justify-center font-mono text-xs ${
                  active === i
                    ? "bg-volt text-ink"
                    : "border border-paper/30 text-paper hover:border-volt"
                }`}
              >
                {step.n}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
