export const USES = [
  {
    id: "obstacles",
    title: "Franchir les obstacles",
    lead: "La bordure cède. Vous passez.",
    body: "Marches, racines, bitume cassé. DISTANZ prend l’angle. Vous gardez le cap.",
    image: "benefit-obstacles.png",
    alt: "Fauteuil avec troisième roue motorisée à l’avant, franchissant une bordure en plein jour.",
  },
  {
    id: "leger",
    title: "Une motorisation légère",
    lead: "La puissance, le poids juste.",
    body: "Assez pour la côte. Assez peu pour laisser le fauteuil rester un fauteuil. Vos épaules restent vos épaules.",
    image: "benefit-motor.png",
    alt: "Troisième roue motorisée DISTANZ, photographie en lumière du jour, pneu, moyeu et attelage.",
  },
  {
    id: "install",
    title: "Ça s’installe en quelques secondes",
    lead: "Clip. Vous partez.",
    body: "Devant le fauteuil. Vos réglages. Quelques secondes et la troisième roue motorisée est en place.",
    image: "benefit-clip.png",
    alt: "Attelage d’une troisième roue motorisée clipée à l’avant d’un fauteuil manuel.",
  },
  {
    id: "transport",
    title: "Léger, ça voyage",
    lead: "Coffre, train, week-end.",
    body: "Détachée, la motorisation tient. Dans la voiture. Dans le TGV. Elle vous suit.",
    image: "benefit-carry.png",
    alt: "Motorisation compacte chargée dans un coffre, à côté d’un fauteuil plié.",
  },
  {
    id: "tout-terrain",
    title: "Tout-terrain",
    lead: "Gravier, terre, herbe.",
    body: "Un parc, une allée défoncée, un parking : la roue avant prend le relief. Le sol s’ouvre.",
    image: "benefit-offroad.png",
    alt: "Fauteuil avec grosse roue avant motorisée sur un chemin de gravier, en plein soleil.",
  },
  {
    id: "autonomie",
    title: "Retrouver de l’autonomie",
    lead: "Arriver. À l’heure. Seul.",
    body: "Le rendez-vous tient. Les épaules se taisent. La journée s’ouvre. Vous partez, vous arrivez.",
    image: "benefit-autonomy.png",
    alt: "Personne arrivant seule sur une place ensoleillée, troisième roue motorisée à l’avant du fauteuil.",
  },
] as const;

export type UseId = (typeof USES)[number]["id"];
