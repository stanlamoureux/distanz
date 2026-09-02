export function SelectChairCue() {
  return (
    <p className="select-cue mb-10 flex flex-col items-start gap-4 sm:mb-12">
      <span className="inline-flex items-center gap-3 bg-ink px-4 py-3 text-paper">
        <span className="size-2 shrink-0 bg-volt motion-safe:animate-pulse" aria-hidden="true" />
        <span className="font-display text-xl font-extrabold uppercase leading-none tracking-tight sm:text-3xl">
          Sélectionnez votre fauteuil
          <span className="text-volt"> pour vérifier la compatibilité</span>
        </span>
      </span>
      <span className="select-cue-arrow font-display text-3xl leading-none text-volt" aria-hidden="true">
        ↓
      </span>
    </p>
  );
}
