import type { UseId } from "./uses";

export type DistanzModel = {
  slug: string;
  name: string;
  tagline: string;
  status: "soon";
  uses: UseId[];
  specs: { label: string; value: string }[];
};

export const MODELS: DistanzModel[] = [
  {
    slug: "city",
    name: "DISTANZ City",
    tagline: "Obstacles, bitume, quotidien.",
    status: "soon",
    uses: ["obstacles", "leger", "install", "autonomie"],
    specs: [
      { label: "Usage", value: "Urbain" },
      { label: "Masse", value: "[À VENIR]" },
      { label: "Autonomie", value: "[À VENIR]" },
    ],
  },
  {
    slug: "air",
    name: "DISTANZ Air",
    tagline: "Le plus léger à emporter.",
    status: "soon",
    uses: ["leger", "transport", "install", "autonomie"],
    specs: [
      { label: "Usage", value: "Voyage / quotidien" },
      { label: "Masse", value: "[À VENIR]" },
      { label: "Pliage", value: "[À VENIR]" },
    ],
  },
  {
    slug: "trail",
    name: "DISTANZ Trail",
    tagline: "Gravier, terre, hors bitume.",
    status: "soon",
    uses: ["obstacles", "tout-terrain", "autonomie"],
    specs: [
      { label: "Usage", value: "Tout-terrain" },
      { label: "Pneu", value: "[À VENIR]" },
      { label: "Garde au sol", value: "[À VENIR]" },
    ],
  },
];

export function modelsForUse(id: UseId) {
  return MODELS.filter((model) => model.uses.includes(id));
}
