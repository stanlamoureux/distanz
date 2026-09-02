"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import { mediaSrc } from "@/lib/media";

export function BeforeAfter() {
  const [pos, setPos] = useState(52);
  const track = useRef<HTMLDivElement>(null);

  const setFromClientX = useCallback((clientX: number) => {
    const el = track.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(96, Math.max(4, next)));
  }, []);

  const nudge = (delta: number) => {
    setPos((current) => Math.min(96, Math.max(4, current + delta)));
  };

  return (
    <div
      ref={track}
      role="slider"
      tabIndex={0}
      aria-label="Comparer actuellement et avec DISTANZ. Flèches gauche et droite."
      aria-valuemin={4}
      aria-valuemax={96}
      aria-valuenow={Math.round(pos)}
      aria-valuetext={`${Math.round(pos)} pour cent actuellement, ${Math.round(100 - pos)} pour cent avec DISTANZ`}
      className="relative mt-10 aspect-[3/2] w-full cursor-ew-resize touch-none overflow-hidden bg-paper-2 select-none sm:mt-16"
      onPointerDown={(e) => {
        e.currentTarget.setPointerCapture(e.pointerId);
        setFromClientX(e.clientX);
      }}
      onPointerMove={(e) => {
        if (e.buttons !== 1) return;
        setFromClientX(e.clientX);
      }}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
          e.preventDefault();
          nudge(-5);
        } else if (e.key === "ArrowRight" || e.key === "ArrowUp") {
          e.preventDefault();
          nudge(5);
        } else if (e.key === "Home") {
          e.preventDefault();
          setPos(4);
        } else if (e.key === "End") {
          e.preventDefault();
          setPos(96);
        } else if (e.key === "PageDown") {
          e.preventDefault();
          nudge(-15);
        } else if (e.key === "PageUp") {
          e.preventDefault();
          nudge(15);
        }
      }}
    >
      <Image
        src={mediaSrc("compare-with.png")}
        alt="Avec DISTANZ : personne en fauteuil, troisième roue clipée à l’avant, roulant en pleine lumière."
        fill
        className="object-cover object-center"
        sizes="100vw"
        draggable={false}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <Image
          src={mediaSrc("compare-now.png")}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          draggable={false}
          aria-hidden="true"
        />
      </div>

      <div
        className="absolute top-0 z-10 h-full w-1 bg-volt"
        style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
        aria-hidden="true"
      >
        <span className="absolute left-1/2 top-1/2 flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-volt text-ink">
          <span className="font-mono text-xs font-semibold">↔</span>
        </span>
      </div>

      <p className="pointer-events-none absolute left-3 top-3 bg-ink/80 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-paper">
        Actuellement
      </p>
      <p className="pointer-events-none absolute right-3 top-3 bg-volt px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-ink">
        Avec DISTANZ
      </p>
      <p className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 bg-ink/80 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-paper">
        Flèches ← →
      </p>
    </div>
  );
}
