import type { ReactNode } from "react";

export function PageIntro({
  kicker,
  title,
  lead,
  children,
  onDark = false,
}: {
  kicker: string;
  title: string;
  lead: string;
  children?: ReactNode;
  onDark?: boolean;
}) {
  return (
    <header className="mx-auto max-w-7xl px-4 pb-8 pt-10 sm:px-6 sm:pb-12 sm:pt-16 lg:px-8">
      <p
        className={`flex items-center gap-3 font-mono text-xs uppercase tracking-[0.28em] ${onDark ? "text-volt" : "text-paper-muted"}`}
      >
        <span className="inline-block size-2 bg-volt" aria-hidden="true" />
        {kicker}
      </p>
      <h1 className="mt-4 max-w-4xl font-display text-4xl font-extrabold uppercase leading-[0.9] sm:text-7xl">
        {title}
      </h1>
      <p
        className={`mt-6 max-w-2xl text-lg ${onDark ? "text-paper/80" : "text-paper-muted"}`}
      >
        {lead}
      </p>
      {children ? <div className="mt-8">{children}</div> : null}
    </header>
  );
}
