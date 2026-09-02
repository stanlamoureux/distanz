import Link from "next/link";
import { DistanzMark } from "@/components/brand/mark";
import { CTAS } from "@/lib/cta";

export function SiteFooter() {
  return (
    <footer className="border-t border-paper/15 bg-ink text-paper">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <DistanzMark className="size-10" />
            <span className="font-display text-3xl font-extrabold uppercase tracking-[0.16em]">
              DISTANZ
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-sm text-ink-muted">
            Troisième roue électrique française. Votre fauteuil. Notre moteur.
            La mobilité, pour toutes les PMR.
          </p>
        </div>
        <div>
          <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-ink-muted">
            <span className="inline-block size-2 bg-volt" aria-hidden="true" />
            Aller
          </p>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <Link className="hover:text-volt" href="/">
                Accueil
              </Link>
            </li>
            <li>
              <Link className="hover:text-volt" href={CTAS.compat.href}>
                {CTAS.compat.label}
              </Link>
            </li>
            <li>
              <Link className="hover:text-volt" href={CTAS.models.href}>
                {CTAS.models.label}
              </Link>
            </li>
            <li>
              <Link className="hover:text-volt" href="/aides">
                Aides & remboursement
              </Link>
            </li>
            <li>
              <Link className="hover:text-volt" href="/histoire">
                En savoir plus sur nous
              </Link>
            </li>
            <li>
              <Link className="hover:text-volt" href={CTAS.advisor.href}>
                {CTAS.advisor.label}
              </Link>
            </li>
            <li>
              <Link className="hover:text-volt" href="/#faq">
                FAQ
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-ink-muted">
            <span className="inline-block size-2 bg-volt" aria-hidden="true" />
            Légal
          </p>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <Link className="hover:text-volt" href="/mentions-legales">
                Mentions légales
              </Link>
            </li>
            <li>
              <Link className="hover:text-volt" href="/confidentialite">
                Confidentialité
              </Link>
            </li>
            <li>
              <a className="hover:text-volt" href="mailto:hello@distanz.fr">
                hello@distanz.fr
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-paper/10 py-6 text-center font-mono text-xs text-ink-muted">
        © {new Date().getFullYear()} DISTANZ. Tous droits réservés.
      </div>
    </footer>
  );
}
