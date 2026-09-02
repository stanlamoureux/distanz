import { useRef, type ChangeEvent } from "react";
import { AdvisorButton } from "@/components/ui/advisor-button";

export function UnknownChairPanel({
  photo,
  busy,
  error,
  onQuestionnaire,
  onPhoto,
  onClearPhoto,
}: {
  photo: string | null;
  busy: boolean;
  error: string;
  onQuestionnaire: () => void;
  onPhoto: (file: File) => void;
  onClearPhoto: () => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);

  const pick = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) onPhoto(file);
    event.target.value = "";
  };

  return (
    <div>
      <h2 className="font-display text-3xl font-extrabold uppercase sm:text-5xl">
        On le trouve. On aligne la solution.
      </h2>
      <p className="mt-4 max-w-xl text-paper-muted">
        Le nom n’est pas dans la liste. Deux façons d’avancer, au même niveau.
        Photo plus questionnaire, c’est le plus net.
      </p>

      <div className="mt-8 grid gap-px bg-ink/10 sm:grid-cols-2">
        <button
          type="button"
          onClick={onQuestionnaire}
          className={`group flex min-h-44 flex-col items-start justify-between p-6 text-left motion-safe:transition-colors ${
            photo
              ? "bg-volt text-ink hover:bg-volt-hover"
              : "bg-paper hover:bg-ink hover:text-paper"
          }`}
        >
          <span className="font-mono text-xs uppercase tracking-[0.22em] opacity-70">
            {photo ? "Photo jointe" : "Sans photo"}
          </span>
          <span className="mt-6 font-display text-2xl font-extrabold uppercase leading-none sm:text-3xl">
            {photo ? "Continuer avec la photo" : "Continuer le questionnaire"}
          </span>
          <span
            className={`mt-4 text-sm ${
              photo ? "text-ink/70" : "text-paper-muted group-hover:text-paper/80"
            }`}
          >
            Cales-pieds, poids, châssis. On lit vos réponses.
          </span>
        </button>

        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          disabled={busy}
          className={`group flex min-h-44 flex-col items-start justify-between bg-paper p-6 text-left motion-safe:transition-colors hover:bg-ink hover:text-paper disabled:opacity-50 ${
            photo ? "ring-2 ring-inset ring-volt" : ""
          }`}
        >
          <span className="font-mono text-xs uppercase tracking-[0.22em] opacity-70">
            {photo ? "Changer" : "Appareil ou fichier"}
          </span>
          <span className="mt-6 font-display text-2xl font-extrabold uppercase leading-none sm:text-3xl">
            Prendre une photo
          </span>
          <span className="mt-4 text-sm text-paper-muted group-hover:text-paper/80">
            Une photo du châssis, on identifie avec vous.
          </span>
        </button>
      </div>

      <input
        ref={inputRef}
        id="chassis-photo"
        type="file"
        accept="image/*"
        capture="environment"
        className="sr-only"
        tabIndex={-1}
        onChange={pick}
      />

      {busy ? (
        <p className="mt-6 font-mono text-xs uppercase tracking-widest text-paper-muted">
          On prépare la photo…
        </p>
      ) : null}
      {error ? <p className="mt-6 text-sm font-semibold text-ink">{error}</p> : null}

      {photo ? (
        <div className="mt-8 border border-ink/10 bg-paper-2 p-4 sm:p-6">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-paper-muted">
            Votre châssis
          </p>
          {/* Preview is a data URL from the user camera; next/image is not used on purpose. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photo}
            alt="Votre châssis, photo jointe au dossier."
            className="mt-4 max-h-72 w-full object-contain"
          />
          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={onQuestionnaire}
              className="inline-flex min-h-11 items-center bg-volt px-5 text-sm font-semibold text-ink hover:bg-volt-hover"
            >
              Continuer le questionnaire
            </button>
            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              className="inline-flex min-h-11 items-center border border-ink/20 px-4 text-sm font-semibold hover:border-ink hover:bg-ink hover:text-paper"
            >
              Changer la photo
            </button>
            <button
              type="button"
              onClick={onClearPhoto}
              className="inline-flex min-h-11 items-center px-4 text-sm font-semibold text-paper-muted underline decoration-transparent underline-offset-4 hover:text-ink hover:decoration-ink"
            >
              Retirer
            </button>
          </div>
        </div>
      ) : null}

      <div className="mt-8">
        <AdvisorButton />
      </div>
    </div>
  );
}
