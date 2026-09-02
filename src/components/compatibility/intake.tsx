"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";
import { SITE_EMAIL } from "@/lib/site";
import { TUBE_LABEL, type TubeKind } from "@/lib/wheelchairs";

export type IntakeChair = {
  id: string;
  label: string;
  tubeDefault?: TubeKind | "";
  chassisPhoto?: string;
};

type Choice = string;

type Draft = {
  footrest: Choice;
  footrestNote: string;
  weight: Choice;
  weightNote: string;
  motor: Choice;
  motorNote: string;
  tube: Choice;
  tubeNote: string;
  name: string;
  email: string;
  phone: string;
  postcode: string;
  consent: boolean;
};

const TOTAL = 6;

const PHOTOS = {
  chair: {
    src: "/media/intake/intake-chair.png",
    alt: "Un homme en fauteuil manuel, troisième roue DISTANZ clipée à l’avant, présente le châssis.",
  },
  footrests: {
    src: "/media/intake/intake-footrests.png",
    alt: "Le même homme pointe les cales-pieds de son fauteuil.",
  },
  weight: {
    src: "/media/intake/intake-weight.png",
    alt: "Le même homme assis dans son fauteuil, en lumière du jour.",
  },
  hands: {
    src: "/media/intake/intake-hands.png",
    alt: "Ses deux mains sur le guidon de la troisième roue : frein et accélérateur au doigt.",
  },
  tubes: {
    src: "/media/intake/intake-tubes.png",
    alt: "Sa main sur un tube du châssis, le métal du fauteuil bien visible.",
  },
  contact: {
    src: "/media/intake/intake-contact.png",
    alt: "Le même homme, prêt à laisser ses coordonnées.",
  },
} as const;

const MOTOR_OPTIONS: [string, string][] = [
  ["oui", "J’ai une bonne motricité"],
  ["incertain", "Je ne suis pas sûr(e) d’avoir une bonne motricité"],
  ["non", "Je n’ai pas une bonne motricité, ni à gauche ni à droite"],
];

const WEIGHT_OPTIONS: [string, string][] = [
  ["moins-40", "Moins de 40 kg"],
  ["40-50", "40 à 50 kg"],
  ["50-60", "50 à 60 kg"],
  ["60-70", "60 à 70 kg"],
  ["70-80", "70 à 80 kg"],
  ["80-90", "80 à 90 kg"],
  ["90-100", "90 à 100 kg"],
  ["100-110", "100 à 110 kg"],
  ["plus-110", "Plus de 110 kg"],
  ["inconnu", "Je ne sais pas"],
];

function optionLabel(options: [string, string][], id: string) {
  return options.find(([value]) => value === id)?.[1] ?? id;
}

export function CompatibilityIntake({
  chair,
  onBackToChair,
}: {
  chair: IntakeChair;
  onBackToChair: () => void;
}) {
  const [step, setStep] = useState(1);
  const [draft, setDraft] = useState<Draft>(() => ({
    footrest: "",
    footrestNote: "",
    weight: "",
    weightNote: "",
    motor: "",
    motorNote: "",
    tube: chair.tubeDefault ?? "",
    tubeNote: "",
    name: "",
    email: "",
    phone: "",
    postcode: "",
    consent: false,
  }));
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const bar = document.getElementById("compat-etape");
    if (bar) bar.scrollIntoView({ behavior: "smooth", block: "start" });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  }, [step]);

  const patch = (partial: Partial<Draft>) =>
    setDraft((prev) => ({ ...prev, ...partial }));

  const canContinue =
    step === 1 ||
    (step === 2 && Boolean(draft.footrest)) ||
    (step === 3 && Boolean(draft.weight)) ||
    (step === 4 && Boolean(draft.motor)) ||
    (step === 5 && Boolean(draft.tube));

  const submit = async () => {
    setError("");
    if (!draft.name.trim() || !draft.email.trim() || !draft.phone.trim() || !draft.postcode.trim()) {
      setError("Nom, email, téléphone et code postal sont requis.");
      return;
    }
    if (!draft.consent) {
      setError("Cochez la case pour envoyer.");
      return;
    }
    setSending(true);
    const weight = optionLabel(WEIGHT_OPTIONS, draft.weight);
    const payload = {
      wheelchair: chair.label,
      wheelchairId: chair.id,
      footrest: draft.footrest,
      footrestNote: draft.footrestNote,
      weight,
      weightNote: draft.weightNote,
      motor: draft.motor,
      motorNote: draft.motorNote,
      tube: draft.tube,
      tubeNote: draft.tubeNote,
      tubeDefault: chair.tubeDefault || "",
      name: draft.name,
      email: draft.email,
      phone: draft.phone,
      postcode: draft.postcode,
      consent: true,
      hasChassisPhoto: Boolean(chair.chassisPhoto),
      ...(chair.chassisPhoto
        ? { photo: chair.chassisPhoto, chassisPhoto: chair.chassisPhoto }
        : {}),
    };
    const body = [
      `Fauteuil : ${chair.label}`,
      `Cales-pieds : ${draft.footrest} ${draft.footrestNote}`,
      `Poids : ${weight} ${draft.weightNote}`,
      `Motricité : ${draft.motor} ${draft.motorNote}`,
      `Châssis : ${draft.tube} ${draft.tubeNote}`,
      `Photo du châssis : ${chair.chassisPhoto ? "oui (jointe au dossier web)" : "non"}`,
      `Nom : ${draft.name}`,
      `Email : ${draft.email}`,
      `Tél : ${draft.phone}`,
      `CP : ${draft.postcode}`,
      `Consentement : oui`,
    ].join("\n");
    try {
      const res = await fetch("/api/compat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("fail");
      setSent(true);
    } catch {
      window.location.href = `mailto:${SITE_EMAIL}?subject=${encodeURIComponent("Compatibilité DISTANZ")}&body=${encodeURIComponent(body)}`;
      setSent(true);
    } finally {
      setSending(false);
    }
  };

  if (sent) {
    return (
      <div className="border border-volt bg-ink p-8 text-paper">
        <p className="font-mono text-xs uppercase tracking-widest text-volt">Dossier reçu</p>
        <h2 className="mt-3 font-display text-4xl font-extrabold uppercase">C’est parti.</h2>
        <p className="mt-4 max-w-xl text-ink-muted">
          Un conseiller DISTANZ lit votre fauteuil, vos cales-pieds, votre châssis,
          et vous rappelle. Si un mail s’est ouvert, envoyez-le pour accélérer.
        </p>
        <button
          type="button"
          onClick={onBackToChair}
          className="mt-8 inline-flex min-h-11 items-center bg-volt px-5 text-sm font-semibold text-ink"
        >
          Revenir aux fauteuils
        </button>
      </div>
    );
  }

  const tubeHint =
    chair.tubeDefault && draft.tube === chair.tubeDefault
      ? `D’après votre ${chair.label}, on part sur ${TUBE_LABEL[chair.tubeDefault]}. Changez si besoin.`
      : null;

  return (
    <div>
      <div
        id="compat-etape"
        className="sticky top-16 z-40 border-b border-ink/10 bg-paper/95 backdrop-blur-md"
      >
        <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-paper-muted">
            Étape {step} sur {TOTAL}
          </p>
          <div className="mt-2 h-1 bg-ink/10" aria-hidden="true">
            <div
              className="h-full bg-volt motion-safe:transition-[width] motion-safe:duration-500"
              style={{ width: `${(step / TOTAL) * 100}%` }}
            />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
        {step === 1 ? (
          <StepFrame
            kicker="Fauteuil"
            title="On part de votre châssis."
            photo={PHOTOS.chair}
            priority
          >
            <p className="font-display text-3xl font-extrabold uppercase">{chair.label}</p>
            <p className="mt-3 max-w-xl text-paper-muted">
              On vous pose quelques questions sur votre fauteuil. Le but : savoir
              si DISTANZ se clippe chez vous, et si vous pouvez le conduire.
            </p>
            {chair.chassisPhoto ? (
              <div className="mt-6 border border-ink/10 bg-paper-2 p-3">
                <p className="font-mono text-xs uppercase tracking-widest text-paper-muted">
                  Photo du châssis jointe
                </p>
                {/* User-captured data URL; next/image is not used on purpose. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={chair.chassisPhoto}
                  alt="Votre châssis, photo jointe au dossier."
                  className="mt-3 max-h-40 w-full object-contain"
                />
              </div>
            ) : null}
          </StepFrame>
        ) : null}

        {step === 2 ? (
          <StepFrame kicker="Cales-pieds" title="Vos cales-pieds, fixes ou détachables ?" photo={PHOTOS.footrests}>
            <ChoiceGrid
              value={draft.footrest}
              onChange={(footrest) => patch({ footrest })}
              options={[
                ["fixes", "Fixes"],
                ["detachables", "Détachables"],
                ["inconnu", "Je ne sais pas"],
              ]}
            />
            <Note
              value={draft.footrestNote}
              onChange={(footrestNote) => patch({ footrestNote })}
              placeholder="Un détail : relevables, d’origine, changées…"
            />
          </StepFrame>
        ) : null}

        {step === 3 ? (
          <StepFrame kicker="Poids" title="Quel est votre poids ?" photo={PHOTOS.weight}>
            <SelectField
              label="En kilogrammes"
              value={draft.weight}
              onChange={(weight) => patch({ weight })}
              placeholder="Choisissez une fourchette"
              options={WEIGHT_OPTIONS}
            />
            <Note
              value={draft.weightNote}
              onChange={(weightNote) => patch({ weightNote })}
              placeholder="Fourchette, bagage habituel, autre charge…"
            />
          </StepFrame>
        ) : null}

        {step === 4 ? (
          <StepFrame
            kicker="Motricité"
            title="Avez-vous une bonne motricité ?"
            photo={PHOTOS.hands}
          >
            <p className="max-w-xl text-paper-muted">
              DISTANZ se pilote à l’avant : tenir le guidon, appuyer sur les
              freins, accélérer au doigt.
            </p>
            <RadioList
              name="motricite"
              value={draft.motor}
              onChange={(motor) => patch({ motor })}
              options={MOTOR_OPTIONS}
            />
            <Note
              value={draft.motorNote}
              onChange={(motorNote) => patch({ motorNote })}
              placeholder="Une main plus forte, fatigabilité, autre détail…"
            />
          </StepFrame>
        ) : null}

        {step === 5 ? (
          <StepFrame
            kicker="Châssis"
            title="Quel est le matériau de votre châssis ?"
            photo={PHOTOS.tubes}
          >
            {tubeHint ? <p className="mb-4 max-w-xl text-sm text-paper-muted">{tubeHint}</p> : null}
            <ChoiceGrid
              value={draft.tube}
              onChange={(tube) => patch({ tube })}
              options={[
                ["alu", "Aluminium"],
                ["acier", "Acier"],
                ["carbone", "Carbone"],
                ["titane", "Titane"],
                ["inconnu", "Je ne sais pas"],
              ]}
            />
            <Note
              value={draft.tubeNote}
              onChange={(tubeNote) => patch({ tubeNote })}
              placeholder="Marque sous l’assise, photo prévue, doute…"
            />
          </StepFrame>
        ) : null}

        {step === 6 ? (
          <StepFrame kicker="Coordonnées" title="Où vous écrire ?" photo={PHOTOS.contact}>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Nom" value={draft.name} onChange={(name) => patch({ name })} autoComplete="name" />
              <Field
                label="Email"
                type="email"
                value={draft.email}
                onChange={(email) => patch({ email })}
                autoComplete="email"
              />
              <Field
                label="Téléphone"
                type="tel"
                value={draft.phone}
                onChange={(phone) => patch({ phone })}
                autoComplete="tel"
              />
              <Field
                label="Code postal"
                value={draft.postcode}
                onChange={(postcode) => patch({ postcode })}
                autoComplete="postal-code"
              />
            </div>
            <label className="mt-8 flex gap-3 text-sm leading-relaxed text-ink">
              <input
                type="checkbox"
                className="mt-1 size-5 shrink-0 accent-[#c8f542]"
                checked={draft.consent}
                onChange={(e) => patch({ consent: e.target.checked })}
              />
              <span>
                J’accepte que DISTANZ traite les données de ce test, me
                recontacte, et applique sa{" "}
                <Link href="/confidentialite" className="underline decoration-volt underline-offset-4">
                  politique de confidentialité
                </Link>
                .
              </span>
            </label>
            {error ? <p className="mt-4 text-sm font-semibold text-ink">{error}</p> : null}
          </StepFrame>
        ) : null}

        <div className="mt-8 flex flex-wrap gap-3 lg:mt-10">
          <button
            type="button"
            onClick={() => {
              if (step === 1) onBackToChair();
              else setStep((n) => n - 1);
            }}
            className="inline-flex min-h-11 items-center border border-ink/20 px-4 text-sm font-semibold hover:border-ink hover:bg-ink hover:text-paper"
          >
            Retour
          </button>
          {step < TOTAL ? (
            <button
              type="button"
              disabled={!canContinue}
              onClick={() => setStep((n) => n + 1)}
              className="inline-flex min-h-11 items-center bg-volt px-5 text-sm font-semibold text-ink disabled:opacity-40"
            >
              Continuer
            </button>
          ) : (
            <button
              type="button"
              onClick={submit}
              disabled={sending}
              className="inline-flex min-h-11 items-center bg-volt px-5 text-sm font-semibold text-ink disabled:opacity-40"
            >
              {sending ? "Envoi…" : "Envoyer"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function StepFrame({
  kicker,
  title,
  photo,
  priority,
  children,
}: {
  kicker: string;
  title: string;
  photo: { src: string; alt: string };
  priority?: boolean;
  children: ReactNode;
}) {
  return (
    <div className="grid items-start gap-6 lg:grid-cols-12 lg:gap-10">
      <div className="relative h-36 overflow-hidden border border-ink/10 bg-paper-2 sm:h-44 lg:col-span-5 lg:h-auto lg:aspect-[4/5] lg:max-h-[22rem]">
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          priority={priority}
          className="object-cover object-[center_30%]"
          sizes="(min-width: 1024px) 28rem, 100vw"
        />
      </div>
      <div className="lg:col-span-7">
        <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.28em] text-paper-muted">
          <span className="inline-block size-2 bg-volt" aria-hidden="true" />
          {kicker}
        </p>
        <h2 className="mt-3 font-display text-3xl font-extrabold uppercase sm:text-5xl">{title}</h2>
        <div className="mt-6">{children}</div>
      </div>
    </div>
  );
}

function ChoiceGrid({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (value: string) => void;
  options: [string, string][];
}) {
  return (
    <div className="grid gap-2 sm:grid-cols-2">
      {options.map(([id, label]) => {
        const active = value === id;
        return (
          <button
            key={id}
            type="button"
            onClick={() => onChange(id)}
            className={`min-h-12 px-4 text-left text-sm font-semibold motion-safe:transition-colors ${
              active ? "bg-volt text-ink" : "border border-ink/15 hover:border-ink"
            }`}
            aria-pressed={active}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}

function RadioList({
  name,
  value,
  onChange,
  options,
}: {
  name: string;
  value: string;
  onChange: (value: string) => void;
  options: [string, string][];
}) {
  return (
    <fieldset className="mt-6 space-y-2">
      <legend className="sr-only">Motricité</legend>
      {options.map(([id, label]) => {
        const active = value === id;
        return (
          <label
            key={id}
            className={`flex min-h-14 cursor-pointer items-center justify-between gap-4 border px-4 py-3 text-sm motion-safe:transition-colors ${
              active ? "border-ink bg-paper-2" : "border-ink/15 hover:border-ink"
            }`}
          >
            <span className="font-medium leading-snug">{label}</span>
            <input
              type="radio"
              name={name}
              value={id}
              checked={active}
              onChange={() => onChange(id)}
              className="size-5 shrink-0 accent-[#0b0c0e]"
            />
          </label>
        );
      })}
    </fieldset>
  );
}

function Note({
  value,
  onChange,
  placeholder,
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}) {
  return (
    <label className="mt-6 block">
      <span className="font-mono text-xs uppercase tracking-widest text-paper-muted">
        Commentaire, si vous voulez
      </span>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={3}
        className="mt-2 w-full border border-ink/20 bg-paper px-3 py-2 text-base"
      />
    </label>
  );
}

function SelectField({
  label,
  value,
  onChange,
  options,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: [string, string][];
  placeholder: string;
}) {
  return (
    <label className="block">
      <span className="font-mono text-xs uppercase tracking-widest text-paper-muted">{label}</span>
      <select
        value={value}
        required
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 min-h-12 w-full border border-ink/20 bg-paper px-3 text-base focus-visible:border-ink focus-visible:outline-none"
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map(([id, optionLabel]) => (
          <option key={id} value={id}>
            {optionLabel}
          </option>
        ))}
      </select>
    </label>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  autoComplete,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <label className="block">
      <span className="font-mono text-xs uppercase tracking-widest text-paper-muted">{label}</span>
      <input
        type={type}
        value={value}
        autoComplete={autoComplete}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 min-h-12 w-full border border-ink/20 bg-paper px-3 text-base"
      />
    </label>
  );
}
