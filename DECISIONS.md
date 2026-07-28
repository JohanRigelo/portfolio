# Portfolio — Journal de décisions

Ce fichier centralise les décisions prises pour ce projet, pour garder une trace du "pourquoi" au fil du temps. Mis à jour à chaque décision importante.

## Contexte & objectif

Johan est développeur web junior (freelance 2018-2022, stage Y-Nissy Conception 2024, BTS SIO SLAM, formations Symfony/MEAN stack) en reconversion vers l'automatisation et l'IA — domaine sans expérience actuelle mais avec une vraie volonté d'apprendre.

Le site est un **portfolio one-page** qui centralise projets + CV interactif, pensé pour candidater à une **formation ou une alternance** en automatisation/IA. Message générique, utilisable aussi pour un CDI.

## Positionnement (règle à respecter dans tout le contenu)

Rester honnête : pas un profil "développeur confirmé", mais quelqu'un avec des bases techniques réelles qui se dirige sincèrement vers l'automatisation/IA.
**Ne jamais survendre** des compétences IA/automatisation non acquises — le site doit assumer le manque de connaissances actuel tout en montrant l'envie d'apprendre.

## Stack technique

- **React + Vite + Tailwind CSS** (Tailwind v4, approche CSS-first sans `tailwind.config.js`, via `@theme` dans `src/index.css`)
- Projet scaffoldé avec `npm create vite@latest` (template `react`, pas de TypeScript)
- Thème clair/sombre géré via l'attribut `data-theme="dark"` sur `<html>`, persisté en `localStorage` (hook `src/hooks/useTheme.js`), pas de `prefers-color-scheme` auto — l'utilisateur choisit via le bouton dans la nav

## Direction visuelle

Design de référence validé dans `mockup-portfolio.html` (à la racine de `DevProject`, hors du dossier `portfolio/`) — thème **"terminal / git log"**.

- Palette chaude (pas de néon froid) :
  - Mode jour : fond crème `#faf3e8`, accent "socle technique" ambre/terracotta `#b8622a`, accent "direction IA" corail/rouille `#c1462f`
  - Mode nuit : fond brun sombre `#1b140f`, mêmes accents éclaircis
- Polices : JetBrains Mono (code/terminal) + Space Grotesk (texte courant)
- Le parcours pro est présenté comme une **timeline verticale façon `git log`** (hash, date, message, détail), du plus récent au plus ancien, avec un commit spécial "aujourd'hui" mis en avant (bordure/glow couleur "direction")
- Compétences groupées : Front-end / Back-end / Outils (acquis, style plein), puis un groupe séparé **"Direction — envie d'apprendre"** (Automatisation, IA appliquée, APIs IA) en style pointillé, bien distinct

## Structure de la page

Hero (terminal animé + accroche) → Timeline parcours (git log) → Compétences → Projets → Contact

## Projets mis en avant

1. **Bibliothèque de chants** (React/Vite/Tailwind) — projet principal, mis en avant visuellement (badge "PROJET PRINCIPAL")
2. **Annonces-immo** — CRUD immobilier, MERN/Angular
3. **Calculatrice métabolisme** — React/Vite

Les liens GitHub/démo sont pour l'instant `null` dans `src/data/projects.js` (pas encore ajoutés) — le composant `Projects.jsx` n'affiche la ligne de liens que si l'un des deux est renseigné.

## Architecture du code React

```
portfolio/
  src/
    components/   Nav, Hero, Timeline, Skills, Projects, Footer
    data/          timeline.js, skills.js, projects.js — contenu séparé du rendu
    hooks/          useTheme.js — état + persistance du thème
    index.css       variables CSS (couleurs light/dark), config Tailwind @theme, classes utilitaires (tags, commit-dot, grille de fond, glow)
```

Les couleurs du mockup ont été renommées de façon sémantique (`--cyan` → `--socle`, `--pink` → `--direction`, `--green` → `--prompt`, `--amber` → `--formation`) pour que le code reflète le sens donné par Johan aux couleurs, plutôt que les noms de la maquette.

## Reste à faire

- Remplacer le mailto par un vrai formulaire de contact si souhaité (email confirmé : `j.rigelo@gmail.com`)
- Ajouter les vrais liens GitHub/démo par projet
- Approfondir le responsive mobile (un menu hamburger n'a pas été implémenté — actuellement les liens de nav sont juste masqués sous 640px pour éviter le débordement horizontal constaté)
- Init Git, push GitHub, déployer sur Vercel (détection auto de Vite) — **en cours**
