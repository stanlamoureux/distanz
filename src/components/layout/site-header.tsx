"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { DistanzMark } from "@/components/brand/mark";
import { CTAS } from "@/lib/cta";

const NAV = [
  { href: "/", label: "Accueil" },
  { href: "/compatibilite", label: "Compatibilité" },
  { href: "/modeles", label: "Modèles" },
  { href: "/aides", label: "Aides" },
  { href: "/histoire", label: "Nous" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    document.documentElement.dataset.menuOpen = open ? "true" : "";
    return () => {
      document.body.style.overflow = "";
      document.documentElement.dataset.menuOpen = "";
    };
  }, [open]);

  const menu = (
    <div
      id="menu-mobile"
      className="fixed inset-0 z-[80] flex flex-col bg-ink text-paper md:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
    >
      <div className="flex h-16 shrink-0 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <DistanzMark className="size-9" />
          <span className="font-display text-xl font-extrabold uppercase tracking-[0.16em]">
            DISTANZ
          </span>
        </Link>
        <button
          type="button"
          className="flex min-h-11 min-w-11 items-center justify-center font-mono text-sm text-volt"
          onClick={() => setOpen(false)}
        >
          Fermer
        </button>
      </div>
      <nav aria-label="Mobile" className="flex flex-1 flex-col overflow-y-auto px-6 pb-8 pt-4">
        <ul className="space-y-1">
          {NAV.map((item, i) => (
            <li
              key={item.href}
              className="menu-line border-b border-paper/10"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <Link
                href={item.href}
                className="flex min-h-14 items-center justify-between font-display text-3xl font-extrabold uppercase"
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.label}
                <span className="size-2.5 bg-volt" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href={CTAS.compat.href}
          className="mt-8 inline-flex min-h-12 items-center justify-center bg-volt font-display text-lg font-extrabold uppercase text-ink"
        >
          Vérifier la compatibilité
        </Link>
        <Link
          href={CTAS.advisor.href}
          className="mt-3 inline-flex min-h-11 items-center justify-center border border-paper/30 text-sm font-semibold"
        >
          {CTAS.advisor.label}
        </Link>
      </nav>
    </div>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/92 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3" aria-label="DISTANZ, accueil">
          <span className="overflow-hidden motion-safe:transition-transform group-hover:-translate-y-0.5">
            <DistanzMark className="size-10" />
          </span>
          <span className="font-display text-2xl font-extrabold uppercase tracking-[0.16em] text-ink">
            DISTANZ
          </span>
        </Link>

        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`text-sm font-medium underline decoration-2 underline-offset-8 transition-colors ${
                    pathname === item.href
                      ? "text-ink decoration-volt"
                      : "text-paper-muted decoration-transparent hover:text-ink hover:decoration-volt"
                  }`}
                  aria-current={pathname === item.href ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="relative z-[60] flex min-h-11 min-w-11 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Fermer le menu" : "Ouvrir le menu"}</span>
          <span
            className={`block h-0.5 w-6 bg-ink motion-safe:transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span className={`block h-0.5 w-6 bg-ink motion-safe:transition-opacity ${open ? "opacity-0" : ""}`} />
          <span
            className={`block h-0.5 w-6 bg-ink motion-safe:transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>

        <Link
          href={CTAS.compat.href}
          className="hidden min-h-11 items-center justify-center bg-volt px-4 py-2 text-sm font-semibold text-ink transition-colors hover:bg-volt-hover active:bg-volt-pressed md:inline-flex"
        >
          {CTAS.compat.label}
        </Link>
      </div>

      {mounted && open ? createPortal(menu, document.body) : null}
    </header>
  );
}
