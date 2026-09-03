# DISTANZ

Site web de **DISTANZ**, troisième roue électrique française qui se clippe à l’avant d’un fauteuil manuel. Quelques secondes. Le châssis reste le vôtre. Le moteur s’ajoute.

Le site sert le pré-lancement : expliquer le produit, vérifier la compatibilité du fauteuil, voir les modèles, parler à un conseiller, et orienter vers les aides (MDPH, PCH, mutuelle, emploi, région).

Site en ligne : [https://distanz.vercel.app](https://distanz.vercel.app)

## Réutiliser ce projet

Dépôt GitHub (lien de partage) :

**https://github.com/stanlamoureux/distanz**

```bash
git clone https://github.com/stanlamoureux/distanz.git
cd distanz
npm install
cp .env.example .env.local
npm run dev
```

Le projet est sous licence MIT : un tiers peut le copier, le modifier et s’en servir, y compris pour un autre produit, à condition de conserver la licence.

## Stack

- [Next.js](https://nextjs.org/) 15 (App Router)
- React 19, TypeScript, Tailwind CSS v4
- Three.js / React Three Fiber pour la 3D
- Supabase (compatibilité, intake)
- Déploiement [Vercel](https://vercel.com/)

## Scripts

| Commande | Rôle |
| --- | --- |
| `npm run dev` | Serveur local |
| `npm run build` | Build de production |
| `npm run typecheck` | Vérification TypeScript |

Ne commitez pas `.env.local`. Copiez `.env.example` et renseignez les clés de votre côté.

## Parcours principaux

- `/` — accueil
- `/compatibilite` — test de châssis
- `/modeles` — modèles
- `/aides` — financement
- `/histoire` — à propos
- `/conseiller` — prise de contact
