export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://distanz.vercel.app";

/** Unique filename so messengers fetch a new preview without query params on the homepage. */
export const OG_IMAGE_PATH = "/og-share-v8.jpg";
export const OG_IMAGE_URL = `${SITE_URL}${OG_IMAGE_PATH}`;

export const SITE_NAME = "DISTANZ";

export const SITE_EMAIL = "hello@distanz.fr";

export const SITE_TAGLINE = "La troisième roue électrique pour fauteuil manuel";

export const SITE_DESCRIPTION =
  "DISTANZ, troisième roue électrique française. Se clippe à l’avant de votre fauteuil manuel. Quelques secondes. Vérifiez la compatibilité, voyez les modèles, parlez à un conseiller pour financer l’achat.";
