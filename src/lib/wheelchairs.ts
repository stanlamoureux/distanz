export type FrameKind = "pliant" | "rigide" | "les-deux";

export type Wheelchair = {
  id: string;
  brand: string;
  model: string;
  frame: FrameKind;
};

export const UNKNOWN_ID = "unknown";

export const WHEELCHAIRS: Wheelchair[] = [
  { id: "kuschall-champion", brand: "Küschall", model: "Champion", frame: "pliant" },
  { id: "kuschall-compact", brand: "Küschall", model: "Compact", frame: "pliant" },
  { id: "kuschall-k-series", brand: "Küschall", model: "K-Series", frame: "rigide" },
  { id: "kuschall-ksl", brand: "Küschall", model: "KSL", frame: "rigide" },
  { id: "kuschall-attract", brand: "Küschall", model: "Attract", frame: "pliant" },
  { id: "kuschall-r33", brand: "Küschall", model: "R33", frame: "rigide" },
  { id: "quickie-helium", brand: "Quickie", model: "Helium", frame: "pliant" },
  { id: "quickie-nitrum", brand: "Quickie", model: "Nitrum", frame: "pliant" },
  { id: "quickie-xenon2", brand: "Quickie", model: "Xenon²", frame: "pliant" },
  { id: "quickie-life", brand: "Quickie", model: "Life", frame: "pliant" },
  { id: "quickie-qs5x", brand: "Quickie", model: "QS5 X", frame: "pliant" },
  { id: "quickie-iris", brand: "Quickie", model: "IRIS", frame: "pliant" },
  { id: "quickie-qxi", brand: "Quickie", model: "QXi", frame: "pliant" },
  { id: "quickie-gt", brand: "Quickie", model: "GT", frame: "rigide" },
  { id: "invacare-action3", brand: "Invacare", model: "Action 3 NG", frame: "pliant" },
  { id: "invacare-action4", brand: "Invacare", model: "Action 4 NG", frame: "pliant" },
  { id: "invacare-action5", brand: "Invacare", model: "Action 5", frame: "pliant" },
  { id: "invacare-rea-dahlia", brand: "Invacare", model: "Rea Dahlia", frame: "pliant" },
  { id: "invacare-rea-azalea", brand: "Invacare", model: "Rea Azalea", frame: "pliant" },
  { id: "tilite-aeroz", brand: "TiLite", model: "Aero Z", frame: "rigide" },
  { id: "tilite-tra", brand: "TiLite", model: "TRA", frame: "rigide" },
  { id: "tilite-zr", brand: "TiLite", model: "ZR", frame: "rigide" },
  { id: "tilite-2gx", brand: "TiLite", model: "2GX", frame: "pliant" },
  { id: "tilite-twist", brand: "TiLite", model: "Twist", frame: "pliant" },
  { id: "rgk-tiga", brand: "RGK", model: "Tiga", frame: "rigide" },
  { id: "rgk-tiga-fx", brand: "RGK", model: "Tiga FX", frame: "rigide" },
  { id: "rgk-octane", brand: "RGK", model: "Octane", frame: "rigide" },
  { id: "rgk-octane-sub4", brand: "RGK", model: "Octane Sub4", frame: "rigide" },
  { id: "rgk-elite", brand: "RGK", model: "Elite", frame: "rigide" },
  { id: "rgk-cube", brand: "RGK", model: "Cube", frame: "rigide" },
  { id: "panthera-s3", brand: "Panthera", model: "S3", frame: "rigide" },
  { id: "panthera-x", brand: "Panthera", model: "X", frame: "rigide" },
  { id: "panthera-u3", brand: "Panthera", model: "U3", frame: "rigide" },
  { id: "panthera-bambino", brand: "Panthera", model: "Bambino", frame: "rigide" },
  { id: "panthera-micro", brand: "Panthera", model: "Micro", frame: "rigide" },
  { id: "progeo-joker", brand: "Progeo", model: "Joker", frame: "rigide" },
  { id: "progeo-exelle", brand: "Progeo", model: "Exelle", frame: "pliant" },
  { id: "progeo-ego", brand: "Progeo", model: "Ego", frame: "rigide" },
  { id: "progeo-tekna", brand: "Progeo", model: "Tekna", frame: "pliant" },
  { id: "mc-helio-a7", brand: "Motion Composites", model: "Helio A7", frame: "pliant" },
  { id: "mc-helio-c2", brand: "Motion Composites", model: "Helio C2", frame: "pliant" },
  { id: "mc-veloce", brand: "Motion Composites", model: "Veloce", frame: "rigide" },
  { id: "ki-catalyst5", brand: "Ki Mobility", model: "Catalyst 5", frame: "pliant" },
  { id: "ki-rogue", brand: "Ki Mobility", model: "Rogue", frame: "rigide" },
  { id: "ki-ethos", brand: "Ki Mobility", model: "Ethos", frame: "pliant" },
  { id: "ki-little-wave", brand: "Ki Mobility", model: "Little Wave", frame: "pliant" },
  { id: "ottobock-avantgarde-t", brand: "Ottobock", model: "Avantgarde T", frame: "pliant" },
  { id: "ottobock-motus", brand: "Ottobock", model: "Motus", frame: "pliant" },
  { id: "ottobock-start", brand: "Ottobock", model: "Start M4", frame: "pliant" },
  { id: "ottobock-voyager", brand: "Ottobock", model: "Voyager", frame: "pliant" },
  { id: "sopur-easy300", brand: "Sopur", model: "Easy 300", frame: "pliant" },
  { id: "sopur-easy200", brand: "Sopur", model: "Easy 200", frame: "pliant" },
  { id: "vermeiren-eclips", brand: "Vermeiren", model: "Eclips X4", frame: "pliant" },
  { id: "vermeiren-v300", brand: "Vermeiren", model: "V300", frame: "pliant" },
  { id: "vermeiren-forest", brand: "Vermeiren", model: "Forest 3", frame: "pliant" },
  { id: "rehasense-icon30", brand: "Rehasense", model: "Icon 30", frame: "pliant" },
  { id: "rehasense-icon20", brand: "Rehasense", model: "Icon 20", frame: "pliant" },
  { id: "karma-s-ergo", brand: "Karma", model: "S-Ergo 125", frame: "pliant" },
  { id: "karma-ergo-lite", brand: "Karma", model: "Ergo Lite", frame: "pliant" },
  { id: "karma-km2500", brand: "Karma", model: "KM-2500", frame: "pliant" },
  { id: "meyra-clou", brand: "Meyra", model: "Clou", frame: "pliant" },
  { id: "meyra-nano", brand: "Meyra", model: "Nano", frame: "rigide" },
  { id: "dietz-caneo", brand: "Dietz", model: "Caneo B", frame: "pliant" },
  { id: "wolturnus-addit", brand: "Wolturnus", model: "Addit", frame: "rigide" },
  { id: "wolturnus-calibra", brand: "Wolturnus", model: "Calibra", frame: "rigide" },
  { id: "proactiv-celsius", brand: "Pro Activ", model: "Celsius", frame: "rigide" },
  { id: "proactiv-speedline", brand: "Pro Activ", model: "Speedline", frame: "rigide" },
  { id: "colours-eclipse", brand: "Colours", model: "Eclipse", frame: "rigide" },
  { id: "colours-xenon", brand: "Colours", model: "Xenon", frame: "rigide" },
  { id: "topend-terminator", brand: "Top End", model: "Terminator", frame: "rigide" },
  { id: "topend-prolite", brand: "Top End", model: "Pro Lite", frame: "rigide" },
  { id: "offcarr-light", brand: "Offcarr", model: "Light", frame: "rigide" },
  { id: "offcarr-powerplay", brand: "Offcarr", model: "Powerplay", frame: "rigide" },
  { id: "lifestand-ls", brand: "LifeStand", model: "LS", frame: "les-deux" },
  { id: "handicare-arc", brand: "Handicare", model: "Arc", frame: "pliant" },
  { id: "drive-silver-sport", brand: "Drive", model: "Silver Sport", frame: "pliant" },
  { id: "drive-cruiser", brand: "Drive", model: "Cruiser", frame: "pliant" },
  { id: "sunrise-breezy", brand: "Sunrise Medical", model: "Breezy 250", frame: "pliant" },
  { id: "sunrise-ruby", brand: "Sunrise Medical", model: "Ruby 2", frame: "pliant" },
  { id: "netti-iii", brand: "Netti", model: "III", frame: "pliant" },
  { id: "hexa-active", brand: "Hexa", model: "Active", frame: "rigide" },
  { id: "kimba-neo", brand: "Ottobock", model: "Kimba Neo", frame: "pliant" },
  { id: "action2ng", brand: "Invacare", model: "Action 2 NG", frame: "pliant" },
  { id: "quickie-argon", brand: "Quickie", model: "Argon²", frame: "rigide" },
  { id: "kuschall-ultra-light", brand: "Küschall", model: "Ultra-Light", frame: "pliant" },
  { id: "panthera-s2", brand: "Panthera", model: "S2", frame: "rigide" },
  { id: "rgk-fwb", brand: "RGK", model: "FWB", frame: "rigide" },
  { id: "tilite-aero-t", brand: "TiLite", model: "Aero T", frame: "rigide" },
  { id: "motion-apex", brand: "Motion Composites", model: "Apex", frame: "rigide" },
  { id: "ki-focus", brand: "Ki Mobility", model: "Focus CR", frame: "pliant" },
  { id: "vermeiren-sagitta", brand: "Vermeiren", model: "Sagitta", frame: "pliant" },
  { id: "rehasense-streamer", brand: "Rehasense", model: "Streamer", frame: "pliant" },
  { id: "kuschall-champion-sl", brand: "Küschall", model: "Champion SL", frame: "pliant" },
  { id: "kuschall-compact-2", brand: "Küschall", model: "Compact 2.0", frame: "pliant" },
  { id: "kuschall-explorer", brand: "Küschall", model: "Explorer", frame: "rigide" },
  { id: "quickie-neon2", brand: "Quickie", model: "Neon²", frame: "pliant" },
  { id: "quickie-xenon2-sa", brand: "Quickie", model: "Xenon² SA", frame: "pliant" },
  { id: "quickie-7r", brand: "Quickie", model: "7R", frame: "rigide" },
  { id: "quickie-5r", brand: "Quickie", model: "5R", frame: "rigide" },
  { id: "quickie-2", brand: "Quickie", model: "2", frame: "pliant" },
  { id: "invacare-action1", brand: "Invacare", model: "Action 1 NG", frame: "pliant" },
  { id: "invacare-rea-clematis", brand: "Invacare", model: "Rea Clematis", frame: "pliant" },
  { id: "tilite-zra", brand: "TiLite", model: "ZRA", frame: "rigide" },
  { id: "rgk-quadra", brand: "RGK", model: "Quadra", frame: "rigide" },
  { id: "panthera-u2", brand: "Panthera", model: "U2", frame: "rigide" },
  { id: "panthera-s3-short", brand: "Panthera", model: "S3 Short", frame: "rigide" },
  { id: "progeo-joker-energy", brand: "Progeo", model: "Joker Energy", frame: "rigide" },
  { id: "progeo-noir", brand: "Progeo", model: "Noir", frame: "rigide" },
  { id: "mc-helio-a6", brand: "Motion Composites", model: "Helio A6", frame: "pliant" },
  { id: "ki-catalyst5vx", brand: "Ki Mobility", model: "Catalyst 5Vx", frame: "pliant" },
  { id: "ottobock-ventus", brand: "Ottobock", model: "Ventus", frame: "pliant" },
  { id: "etac-cross5", brand: "Etac", model: "Cross 5", frame: "pliant" },
  { id: "etac-prio", brand: "Etac", model: "Prio", frame: "pliant" },
  { id: "pdg-elevation", brand: "PDG", model: "Elevation", frame: "rigide" },
  { id: "wolturnus-raven", brand: "Wolturnus", model: "Raven", frame: "rigide" },
  { id: "carbon-black-one", brand: "Carbon Black", model: "One", frame: "rigide" },
  { id: "offcarr-shark", brand: "Offcarr", model: "Shark", frame: "rigide" },
  { id: "lifestand-lsa", brand: "LifeStand", model: "LSA", frame: "les-deux" },
  { id: "handicare-ibis", brand: "Handicare", model: "Ibis X", frame: "pliant" },
  { id: "sunrise-ultra4", brand: "Sunrise Medical", model: "Breezy Ultra 4", frame: "pliant" },
  { id: "dietz-sensa", brand: "Dietz", model: "Sensa N", frame: "pliant" },
  { id: "meyra-avanti", brand: "Meyra", model: "Avanti 2.0", frame: "pliant" },
  { id: "karman-s115", brand: "Karman", model: "S-115", frame: "pliant" },
  { id: "box-box", brand: "Box", model: "Box", frame: "rigide" },
  { id: "levo-combi", brand: "Levo", model: "Combi", frame: "les-deux" },
  { id: "proactiv-cello", brand: "Pro Activ", model: "Cello", frame: "rigide" },
];

export function wheelchairLabel(chair: Wheelchair) {
  return `${chair.brand} ${chair.model}`;
}

const SEARCH_ALIASES: Record<string, string[]> = {
  Quickie: ["sunrise", "sunrise medical"],
  "Sunrise Medical": ["quickie", "breezy"],
  "Motion Composites": ["motion composites", "helio"],
  "Ki Mobility": ["ki mobility"],
  Ottobock: ["otto bock", "ottobock"],
};

export function searchWheelchairs(query: string) {
  const q = query.trim().toLowerCase().normalize("NFD").replace(/\p{M}/gu, "");
  if (!q) return WHEELCHAIRS;
  return WHEELCHAIRS.filter((chair) => {
    const extra = SEARCH_ALIASES[chair.brand]?.join(" ") ?? "";
    const hay = `${chair.brand} ${chair.model} ${extra}`
      .toLowerCase()
      .normalize("NFD")
      .replace(/\p{M}/gu, "");
    return hay.includes(q);
  });
}

export function groupByBrand(chairs: Wheelchair[]) {
  const map = new Map<string, Wheelchair[]>();
  for (const chair of chairs) {
    const list = map.get(chair.brand) ?? [];
    list.push(chair);
    map.set(chair.brand, list);
  }
  return [...map.entries()];
}

export const FEATURED_BRANDS = [
  "Küschall",
  "Quickie",
  "Invacare",
  "TiLite",
  "Panthera",
  "RGK",
  "Ottobock",
  "Motion Composites",
  "Ki Mobility",
] as const;

export type BrandEntry = { brand: string; count: number };

export function brandEntries(chairs: Wheelchair[] = WHEELCHAIRS): BrandEntry[] {
  return groupByBrand(chairs)
    .map(([brand, list]) => ({ brand, count: list.length }))
    .sort((a, b) => {
      const ai = FEATURED_BRANDS.indexOf(a.brand as (typeof FEATURED_BRANDS)[number]);
      const bi = FEATURED_BRANDS.indexOf(b.brand as (typeof FEATURED_BRANDS)[number]);
      if (ai !== -1 || bi !== -1) {
        if (ai === -1) return 1;
        if (bi === -1) return -1;
        return ai - bi;
      }
      return a.brand.localeCompare(b.brand, "fr");
    });
}

export function modelsForBrand(brand: string) {
  return WHEELCHAIRS.filter((chair) => chair.brand === brand);
}

export const FRAME_LABEL: Record<FrameKind, string> = {
  pliant: "Châssis pliant",
  rigide: "Châssis rigide",
  "les-deux": "Pliant ou rigide",
};

export type TubeKind = "alu" | "acier" | "carbone" | "titane";

export const TUBE_LABEL: Record<TubeKind, string> = {
  alu: "Aluminium",
  acier: "Acier",
  carbone: "Carbone",
  titane: "Titane",
};

/** Matériau le plus probable pour ce modèle. L’utilisateur peut corriger. */
export function defaultTube(chair: Wheelchair): TubeKind {
  const { id, brand } = chair;

  if (
    id === "carbon-black-one" ||
    id === "mc-helio-c2" ||
    id === "mc-veloce" ||
    id === "motion-apex" ||
    id === "panthera-x"
  ) {
    return "carbone";
  }

  if (brand === "TiLite" && !id.includes("aero")) return "titane";

  if (
    brand === "Drive" ||
    id === "karma-km2500" ||
    id === "karma-s-ergo" ||
    id === "ottobock-start" ||
    id.includes("breezy")
  ) {
    return "acier";
  }

  return "alu";
}
