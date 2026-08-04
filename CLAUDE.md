# Portfolio de Johan Rigelo

Portfolio one-page (React + Vite + Tailwind CSS v4) présentant le parcours et les projets de Johan, développeur web junior en reconversion vers l'automatisation et l'IA.

**Règle de positionnement** (s'applique à tout contenu écrit sur ce site) : rester honnête, ne jamais survendre des compétences IA/automatisation non acquises. Johan a des bases web réelles (React, PHP/Symfony, WordPress) et une direction sincère vers l'automatisation/IA, sans expérience actuelle dans ce domaine.

## Stack et commandes

- React + Vite + Tailwind CSS v4 (config CSS-first via `@theme` dans `src/index.css`, pas de `tailwind.config.js`)
- Dev : `npm run dev` · Build : `npm run build`
- Thème clair/sombre : attribut `data-theme` sur `<html>`, géré par `src/hooks/useTheme.js`, persisté en `localStorage`

## Structure

```
src/
  components/   Nav, Hero, Timeline, Skills, Projects, Footer
  data/         timeline.js, skills.js, projects.js — contenu séparé du rendu
  hooks/        useTheme.js
  index.css     variables CSS (light/dark), config Tailwind @theme, classes utilitaires
```

## Déploiement

- Repo GitHub : `github.com/JohanRigelo/portfolio`
- Vercel, lié au repo (redéploiement auto sur push `main`) : **https://johan-rigelo.vercel.app**
- Ce domaine `.vercel.app` a été ajouté via l'API projet (`/v10/projects/{id}/domains`), pas via `vercel alias set` — cette dernière crée un pointeur figé qui ne suit pas les nouveaux déploiements.

## Projets référencés dans `src/data/projects.js`

- **Bibliothèque de chants** (projet phare) : repo `github.com/JohanRigelo/Bibliotheque_De_Chants`, démo `bibliotheque-de-chants.vercel.app`
- **Calculatrice Métabolisme** : repo `github.com/JohanRigelo/calculatrice-metabolisme`, démo `calculatrice-metabolisme.vercel.app`
- **Annonces Immo** : repo `github.com/JohanRigelo/Annonces_Immo`, démo `annonces-immo.vercel.app`. Reconstruction (v2) fonctionnelle avec backend Firebase — ajoutée une fois le déploiement vérifié (l'ancienne version MERN abandonnée n'avait pas de backend fonctionnel, d'où l'absence historique de ce projet ici).

## Historique des décisions

Le détail complet (contexte, positionnement, choix visuels/techniques, reste à faire) est tenu à jour dans **`DECISIONS.md`** — à lire avant de reprendre ce projet, et à mettre à jour à chaque décision importante.

## Convention de mise à jour des docs

Avant de committer un changement significatif (décision, nouvelle fonctionnalité, choix technique, bug important trouvé/contourné), mettre à jour `DECISIONS.md` (et ce `CLAUDE.md` si la structure/stack change) **dans le même commit**. Un hook `pre-commit` local (non bloquant, non versionné) affiche un rappel à chaque commit.
