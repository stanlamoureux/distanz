export function CompatRate() {
  return (
    <aside
      className="relative overflow-hidden bg-ink text-paper"
      aria-label="Compatibilité DISTANZ"
    >
      <span
        className="absolute inset-y-0 left-0 w-1.5 bg-volt"
        aria-hidden="true"
      />
      <div className="grid lg:grid-cols-12">
        <div className="border-b border-paper/10 px-6 py-8 sm:px-8 lg:col-span-5 lg:border-b-0 lg:border-r lg:border-paper/10">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-volt">
            Le clip
          </p>
          <p className="mt-3 font-display text-[clamp(5.5rem,16vw,9.5rem)] font-extrabold leading-[0.78] tracking-tight text-volt">
            98&nbsp;%
          </p>
        </div>
        <div className="flex flex-col justify-end px-6 py-8 sm:px-8 lg:col-span-7">
          <p className="font-display text-3xl font-extrabold uppercase leading-[0.88] sm:text-5xl">
            Compatible avec
            <br />
            les fauteuils manuels.
          </p>
          <p className="mt-4 max-w-md text-ink-muted">
            DISTANZ s’adapte à l’avant de votre fauteuil. Votre châssis est
            fait pour ça.
          </p>
        </div>
      </div>
    </aside>
  );
}
