"use client";

import { useEffect, useRef, type RefObject } from "react";
import { CtaTrio } from "@/components/ui/cta-trio";

const BEATS = [
  {
    kicker: "La 3e roue motorisée",
    title: "Franchir. Rouler. Partir.",
    body: "Obstacles, côtes, gravier. Le fauteuil reste le vôtre. Le moteur prend le choc.",
  },
  {
    kicker: "Tout-terrain",
    title: "Le sol n’a plus le dernier mot.",
    body: "Gravier, terre, bitume défoncé. La roue avant attaque. Vous gardez le cap.",
  },
  {
    kicker: "Clip",
    title: "Ça s’installe en quelques secondes.",
    body: "Devant le fauteuil. Vos réglages. Vous partez.",
  },
  {
    kicker: "Autonomie",
    title: "Arriver. À l’heure. Seul.",
    body: "Le rendez-vous tient. Les épaules se taisent. La journée s’ouvre.",
  },
] as const;

export function ScrollBeats({ progress }: { progress: RefObject<number> }) {
  const nodes = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    let frame = 0;
    const loop = () => {
      const p = progress.current ?? 0;
      const n = BEATS.length;
      nodes.current.forEach((node, i) => {
        if (!node) return;
        const start = i / n;
        const end = (i + 1) / n;
        const local = (p - start) / (end - start);
        const opacity = Math.max(0, 1 - Math.abs(local - 0.45) * 2.4);
        const y = (0.5 - local) * 40;
        node.style.opacity = String(Math.min(1, Math.max(0, opacity)));
        node.style.transform = `translate3d(0, ${y}px, 0)`;
      });
      frame = requestAnimationFrame(loop);
    };
    frame = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frame);
  }, [progress]);

  return (
    <div className="flex h-full flex-col justify-between px-4 py-20 sm:px-8 md:px-20">
      <div className="relative min-h-64 max-w-xl flex-1">
        {BEATS.map((beat, i) => (
          <div
            key={beat.title}
            ref={(el) => {
              nodes.current[i] = el;
            }}
            className="absolute inset-x-0 top-8 max-w-xl"
            style={{ opacity: i === 0 ? 1 : 0 }}
          >
            <p className="font-mono text-xs uppercase tracking-[0.32em] text-volt">
              {beat.kicker}
            </p>
            <h1 className="mt-4 font-display text-4xl font-extrabold uppercase leading-[0.9] text-paper sm:text-6xl">
              {beat.title}
            </h1>
            <p className="mt-5 max-w-md text-lg text-paper/85">{beat.body}</p>
          </div>
        ))}
      </div>
      <div className="pointer-events-auto relative z-10 max-w-3xl">
        <CtaTrio onDark asCards />
      </div>
    </div>
  );
}
