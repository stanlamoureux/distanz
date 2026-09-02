"use client";

import dynamic from "next/dynamic";

const ScrollScene = dynamic(
  () => import("./ScrollScene").then((m) => m.ScrollScene),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-screen items-end bg-ink px-4 pb-24 sm:px-8 md:px-20">
        <div className="max-w-xl">
          <p className="font-mono text-xs uppercase tracking-[0.32em] text-volt">
            3e roue motorisée
          </p>
          <h1 className="mt-4 font-display text-4xl font-extrabold uppercase leading-[0.9] text-paper sm:text-6xl">
            Franchir. Rouler. Partir.
          </h1>
        </div>
      </div>
    ),
  },
);

export function ScrollHero() {
  return <ScrollScene />;
}
