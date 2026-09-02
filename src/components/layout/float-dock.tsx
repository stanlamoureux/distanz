"use client";

import { useEffect, useState } from "react";
import { IconAdvisor, IconCompat, IconModels } from "@/components/ui/cta-icons";
import { CTAS } from "@/lib/cta";

const ITEMS = [
  {
    href: CTAS.compat.href,
    label: "Tester",
    sublabel: "compat",
    title: "Vérifier la compatibilité",
    Icon: IconCompat,
  },
  {
    href: CTAS.advisor.href,
    label: "Conseiller",
    title: "Parler à un conseiller",
    Icon: IconAdvisor,
    external: CTAS.advisor.external,
  },
  {
    href: CTAS.models.href,
    label: "Modèles",
    title: "Voir les modèles",
    Icon: IconModels,
  },
] as const;

export function FloatDock() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 280);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      aria-label="Actions"
      className={`float-dock fixed right-3 z-40 flex flex-col gap-2 transition-all duration-300 max-md:bottom-24 md:right-5 md:top-1/2 md:-translate-y-1/2 ${
        visible ? "translate-x-0 opacity-100" : "pointer-events-none translate-x-4 opacity-0"
      }`}
    >
      {ITEMS.map((item) => (
        <a
          key={item.href}
          href={item.href}
          title={item.title}
          aria-label={item.title}
          className="group flex w-[4.75rem] flex-col items-center gap-1 bg-ink px-1.5 py-2 text-volt shadow-[0_8px_24px_rgb(11_12_14/0.28)] motion-safe:transition-colors hover:bg-volt hover:text-ink focus-visible:bg-volt focus-visible:text-ink md:h-12 md:w-auto md:flex-row md:gap-2 md:px-3 md:py-0"
          {...("external" in item && item.external
            ? { target: "_blank", rel: "noreferrer" }
            : {})}
        >
          <item.Icon className="size-7 shrink-0 md:size-8" />
          <span
            aria-hidden="true"
            className="text-center font-mono text-[10px] font-semibold uppercase leading-tight tracking-wide md:text-xs md:tracking-widest"
          >
            {item.label}
            {"sublabel" in item ? (
              <>
                <span className="block md:hidden">{item.sublabel}</span>
                <span className="ml-0 hidden max-w-0 overflow-hidden whitespace-nowrap align-bottom opacity-0 motion-safe:transition-[max-width,opacity,margin] md:inline-block md:group-hover:ml-1 md:group-hover:max-w-[6.5rem] md:group-hover:opacity-100 md:group-focus-visible:ml-1 md:group-focus-visible:max-w-[6.5rem] md:group-focus-visible:opacity-100">
                  la compat
                </span>
              </>
            ) : null}
          </span>
        </a>
      ))}
    </nav>
  );
}
