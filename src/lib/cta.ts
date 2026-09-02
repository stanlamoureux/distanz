export const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL ?? "";

export const advisorHref = CALENDLY_URL || "/conseiller";
export const advisorIsExternal = Boolean(CALENDLY_URL);

export const CTAS = {
  compat: { href: "/compatibilite", label: "Vérifier la compatibilité" },
  advisor: { href: advisorHref, label: "Parler à un conseiller", external: advisorIsExternal },
  models: { href: "/modeles", label: "Voir les modèles" },
} as const;
