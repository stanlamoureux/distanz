"use client";

import { useMemo, useState } from "react";
import { CompatRate } from "@/components/compatibility/compat-rate";
import { CompatibilityIntake } from "@/components/compatibility/intake";
import { SelectChairCue } from "@/components/compatibility/select-cue";
import { UnknownChairPanel } from "@/components/compatibility/unknown-chair";
import { PageIntro } from "@/components/layout/page-intro";
import { AdvisorButton } from "@/components/ui/advisor-button";
import { Button } from "@/components/ui/button";
import { compressChassisPhoto } from "@/lib/chassis-photo";
import {
  FRAME_LABEL,
  UNKNOWN_ID,
  WHEELCHAIRS,
  brandEntries,
  defaultTube,
  modelsForBrand,
  searchWheelchairs,
  wheelchairLabel,
  type FrameKind,
  type Wheelchair,
} from "@/lib/wheelchairs";

type FrameFilter = "tous" | FrameKind;

const FRAME_FILTERS: { id: FrameFilter; label: string }[] = [
  { id: "tous", label: "Tous" },
  { id: "pliant", label: "Pliant" },
  { id: "rigide", label: "Rigide" },
];

export function CompatibilityPicker() {
  const [query, setQuery] = useState("");
  const [brand, setBrand] = useState<string | null>(null);
  const [unknown, setUnknown] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const [intake, setIntake] = useState(false);
  const [frameFilter, setFrameFilter] = useState<FrameFilter>("tous");
  const [chassisPhoto, setChassisPhoto] = useState<string | null>(null);
  const [photoBusy, setPhotoBusy] = useState(false);
  const [photoError, setPhotoError] = useState("");

  const searching = query.trim().length >= 2;
  const hits = useMemo(() => (searching ? searchWheelchairs(query) : []), [query, searching]);
  const brands = useMemo(
    () => brandEntries(searching ? hits : WHEELCHAIRS),
    [hits, searching],
  );
  const models = useMemo(() => {
    const source = searching ? hits : brand ? modelsForBrand(brand) : [];
    if (frameFilter === "tous") return source;
    return source.filter((chair) => chair.frame === frameFilter || chair.frame === "les-deux");
  }, [brand, frameFilter, hits, searching]);
  const chosen = WHEELCHAIRS.find((chair) => chair.id === selected);

  const pick = (chair: Wheelchair) => {
    setSelected(chair.id);
    setUnknown(false);
    setBrand(chair.brand);
    setIntake(true);
    setChassisPhoto(null);
    setPhotoError("");
  };

  const clearPhoto = () => {
    setChassisPhoto(null);
    setPhotoError("");
    setPhotoBusy(false);
  };

  const reset = () => {
    setBrand(null);
    setSelected(null);
    setFrameFilter("tous");
    setQuery("");
    setUnknown(false);
    setIntake(false);
    clearPhoto();
  };

  const takePhoto = async (file: File) => {
    setPhotoBusy(true);
    setPhotoError("");
    try {
      const data = await compressChassisPhoto(file);
      setChassisPhoto(data);
    } catch {
      setPhotoError(
        "Cette photo ne s’ouvre pas. Prenez-la avec l’appareil, en JPEG ou PNG.",
      );
    } finally {
      setPhotoBusy(false);
    }
  };

  const goBack = () => {
    if (intake) {
      setIntake(false);
      return;
    }
    if (unknown) {
      setUnknown(false);
      setSelected(null);
      clearPhoto();
      return;
    }
    if (selected) {
      setSelected(null);
      return;
    }
    if (query.trim()) {
      setQuery("");
      setBrand(null);
      return;
    }
    if (brand) {
      setBrand(null);
      setFrameFilter("tous");
    }
  };

  const canGoBack = Boolean(intake || unknown || selected || brand || query.trim());

  if (intake) {
    return (
      <CompatibilityIntake
        chair={{
          id: unknown || selected === UNKNOWN_ID ? UNKNOWN_ID : chosen?.id ?? "unknown",
          label:
            unknown || selected === UNKNOWN_ID
              ? "Fauteuil non identifié"
              : chosen
                ? wheelchairLabel(chosen)
                : "Fauteuil non identifié",
          tubeDefault: chosen && !unknown ? defaultTube(chosen) : "",
          chassisPhoto: unknown ? chassisPhoto ?? undefined : undefined,
        }}
        onBackToChair={goBack}
      />
    );
  }

  return (
    <div>
      <PageIntro
        kicker="Le test qui compte"
        title="Votre fauteuil, d’abord."
        lead="D’abord la marque. Ensuite le modèle. Si le nom s’est perdu, on le trouve avec vous."
      >
        <CompatRate />
        <div className="mt-8 flex w-full max-w-lg flex-col gap-2 sm:max-w-none sm:flex-row sm:flex-wrap sm:gap-3">
          <AdvisorButton className="w-full sm:w-auto" />
          <Button href="/modeles" variant="ghost" className="w-full sm:w-auto">
            Voir les modèles
          </Button>
        </div>
      </PageIntro>
      <div className="sticky top-16 z-40 border-b border-ink bg-paper shadow-[0_16px_48px_rgb(11_12_14/0.12)]">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-5 sm:px-6 sm:py-6">
          <div className="flex flex-col gap-3">
            <label
              htmlFor="fauteuil-recherche"
              className="font-display text-xl font-extrabold uppercase leading-none sm:text-2xl"
            >
              Trouvez votre fauteuil
            </label>
            <div className="flex flex-col gap-3 lg:flex-row lg:items-stretch">
            <input
              id="fauteuil-recherche"
              type="text"
              role="searchbox"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setUnknown(false);
                setSelected(null);
                setIntake(false);
                if (!e.target.value.trim()) setBrand(null);
              }}
              disabled={unknown}
              placeholder="Marque ou modèle : Küschall, Helium, Panthera…"
              autoComplete="off"
              spellCheck={false}
              suppressHydrationWarning
              className="min-h-16 flex-1 border-2 border-ink bg-paper px-5 text-lg shadow-[inset_0_0_0_3px_rgb(200_245_66/0.35)] outline-none focus:shadow-[inset_0_0_0_3px_rgb(200_245_66)] disabled:opacity-50"
            />
            <button
              type="button"
              onClick={() => {
                const on = !unknown;
                setUnknown(on);
                setIntake(false);
                if (on) {
                  setSelected(UNKNOWN_ID);
                  setQuery("");
                  setBrand(null);
                } else {
                  setSelected(null);
                  clearPhoto();
                }
              }}
              className={`find-chair inline-flex min-h-16 w-full items-center justify-center px-5 text-base font-semibold lg:w-auto motion-safe:transition-colors ${
                unknown
                  ? "is-found bg-ink text-paper"
                  : "border-2 border-ink bg-volt text-ink hover:bg-volt-hover"
              }`}
            >
              Je ne trouve pas mon fauteuil
            </button>
            </div>
          </div>
          {canGoBack ? (
            <button
              type="button"
              onClick={goBack}
              className="inline-flex min-h-11 w-fit items-center gap-2 border border-ink/20 px-4 text-sm font-semibold hover:border-ink hover:bg-ink hover:text-paper"
            >
              <span aria-hidden="true">←</span>
              Retour
            </button>
          ) : null}
          <p className="font-mono text-xs text-paper-muted" aria-live="polite">
            {unknown
              ? chassisPhoto
                ? "Photo jointe. Continuez le questionnaire."
                : "Questionnaire ou photo du châssis."
              : searching
                ? `${hits.length} résultat${hits.length > 1 ? "s" : ""} pour « ${query.trim()} »`
                : brand
                  ? `${modelsForBrand(brand).length} modèles ${brand}`
                  : `${brands.length} marques · d’abord la marque, ensuite le modèle`}
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        {!unknown && !searching && !brand ? <SelectChairCue /> : null}
        {unknown ? (
          <UnknownChairPanel
            photo={chassisPhoto}
            busy={photoBusy}
            error={photoError}
            onQuestionnaire={() => setIntake(true)}
            onPhoto={takePhoto}
            onClearPhoto={clearPhoto}
          />
        ) : (
          <>
            {!searching && !brand ? (
              <BrandGrid
                brands={brands}
                featured
                onPick={(name) => {
                  setBrand(name);
                  setSelected(null);
                }}
              />
            ) : null}

            {searching ? (
              <div>
                {brands.length > 1 ? (
                  <div className="mb-8 flex flex-wrap gap-2">
                    {brands.map((entry) => (
                      <button
                        key={entry.brand}
                        type="button"
                        onClick={() => {
                          setBrand(entry.brand);
                          setQuery("");
                          setSelected(null);
                        }}
                        className="min-h-11 border border-ink/15 px-4 text-sm font-semibold hover:border-ink hover:bg-ink hover:text-paper"
                      >
                        {entry.brand}
                        <span className="ml-2 font-mono text-xs opacity-60">
                          {entry.count}
                        </span>
                      </button>
                    ))}
                  </div>
                ) : null}
                <ModelList
                  models={models}
                  selected={selected}
                  frameFilter={frameFilter}
                  onFrameFilter={setFrameFilter}
                  onPick={pick}
                />
              </div>
            ) : null}

            {!searching && brand ? (
              <div>
                <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
                  <div>
                    <button
                      type="button"
                      onClick={reset}
                      className="font-mono text-xs uppercase tracking-widest text-paper-muted underline decoration-transparent underline-offset-4 hover:text-ink hover:decoration-ink"
                    >
                      Toutes les marques
                    </button>
                    <h2 className="mt-2 font-display text-4xl font-extrabold uppercase">
                      {brand}
                    </h2>
                  </div>
                </div>
                <ModelList
                  models={models}
                  selected={selected}
                  frameFilter={frameFilter}
                  onFrameFilter={setFrameFilter}
                  onPick={pick}
                />
              </div>
            ) : null}
          </>
        )}
      </div>
    </div>
  );
}

function BrandGrid({
  brands,
  featured,
  onPick,
}: {
  brands: { brand: string; count: number }[];
  featured?: boolean;
  onPick: (brand: string) => void;
}) {
  const top = featured ? brands.slice(0, 8) : [];
  const rest = featured ? brands.slice(8) : brands;

  return (
    <div>
      {top.length ? (
        <>
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-paper-muted">
            Marques les plus vues
          </p>
          <ul className="mt-4 grid grid-cols-2 gap-px bg-ink/10 sm:grid-cols-4">
            {top.map((entry) => (
              <li key={entry.brand}>
                <BrandCard entry={entry} onPick={onPick} large />
              </li>
            ))}
          </ul>
        </>
      ) : null}

      <p className="mt-12 font-mono text-xs uppercase tracking-[0.28em] text-paper-muted">
        Toutes les marques, A à Z
      </p>
      <ul className="mt-4 grid grid-cols-2 gap-px bg-ink/10 sm:grid-cols-3 lg:grid-cols-4">
        {rest.map((entry) => (
          <li key={entry.brand}>
            <BrandCard entry={entry} onPick={onPick} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function BrandCard({
  entry,
  onPick,
  large = false,
}: {
  entry: { brand: string; count: number };
  onPick: (brand: string) => void;
  large?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={() => onPick(entry.brand)}
      className={`flex h-full w-full flex-col items-start justify-between bg-paper text-left hover:bg-ink hover:text-paper motion-safe:transition-colors ${
        large ? "min-h-28 p-5" : "min-h-20 p-4"
      }`}
    >
      <span className={`font-display font-bold uppercase leading-tight ${large ? "text-2xl" : "text-lg"}`}>
        {entry.brand}
      </span>
      <span className="mt-3 font-mono text-xs opacity-60">
        {entry.count} modèle{entry.count > 1 ? "s" : ""}
      </span>
    </button>
  );
}

function ModelList({
  models,
  selected,
  frameFilter,
  onFrameFilter,
  onPick,
}: {
  models: Wheelchair[];
  selected: string | null;
  frameFilter: FrameFilter;
  onFrameFilter: (value: FrameFilter) => void;
  onPick: (chair: Wheelchair) => void;
}) {
  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrer par châssis">
        {FRAME_FILTERS.map((filter) => (
          <button
            key={filter.id}
            type="button"
            onClick={() => onFrameFilter(filter.id)}
            className={`min-h-11 px-4 text-sm font-semibold ${
              frameFilter === filter.id
                ? "bg-ink text-paper"
                : "border border-ink/15 hover:border-ink"
            }`}
            aria-pressed={frameFilter === filter.id}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {models.length === 0 ? (
        <p className="mt-8 text-paper-muted">
          Aucun modèle de ce côté. Enlevez le filtre, ou dites-nous que vous ne
          trouvez pas votre fauteuil.
        </p>
      ) : (
        <ul className="mt-6 grid gap-px bg-ink/10 sm:grid-cols-2">
          {models.map((chair) => {
            const active = selected === chair.id;
            return (
              <li key={chair.id}>
                <button
                  type="button"
                  onClick={() => onPick(chair)}
                  className={`flex min-h-20 w-full items-center justify-between gap-4 px-5 py-4 text-left motion-safe:transition-colors ${
                    active
                      ? "bg-volt text-ink"
                      : "bg-paper hover:bg-ink hover:text-paper"
                  }`}
                  aria-pressed={active}
                >
                  <span>
                    <span className="block font-display text-xl font-bold uppercase leading-tight">
                      {chair.model}
                    </span>
                    <span className={`mt-1 block font-mono text-xs ${active ? "text-ink/70" : "text-paper-muted"}`}>
                      {chair.brand} · {FRAME_LABEL[chair.frame]}
                    </span>
                  </span>
                  <span className="font-mono text-xs uppercase tracking-widest">
                    {active ? "Choisi" : "Choisir"}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
