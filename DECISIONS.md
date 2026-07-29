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

1. **Bibliothèque de chants** (React/Vite/Tailwind) — projet principal, mis en avant visuellement (badge "PROJET PRINCIPAL"). Liens réels ajoutés : GitHub `github.com/JohanRigelo/Bibliotheque_De_Chants`, démo `bibliotheque-de-chants.vercel.app`
2. **Calculatrice métabolisme** — React/Vite. Testé en local (calculs vérifiés manuellement : maintenance calorique, déficit, macros, IMC, WHtR — tous corrects) avant mise en ligne. Le projet inclut un serveur Express prévu pour servir les fichiers statiques en prod, mais son chemin (`dist/public`) ne correspondait pas à la sortie réelle de `vite build` (`dist/`) — bug non corrigé dans le code, contourné en déployant en site statique pur sur Vercel (le calcul est 100% côté client, ce serveur n'apportait rien). Repo GitHub : `github.com/JohanRigelo/calculatrice-metabolisme`. Démo : `calculatrice-metabolisme.vercel.app`. Liens ajoutés dans `projects.js`.

**Annonces-immo a été retiré du portfolio** (décision du 2026-07-28) : investigation des dossiers candidats (`Projet Test\annonces-immo`, `annonces-immo-updated\annonces-immo`) a montré qu'aucune version n'a de backend fonctionnel (front React seul, malgré la description "CRUD MERN/Angular"), et l'historique Git de la version "updated" est pollué (node_modules committé). Le backend existe peut-être dans les archives non extraites `annonces-immo-updated.tar.gz` / `annonces-immo.rar` à la racine de `DevProject`. À reconsidérer si le backend est un jour retrouvé/reconstruit — sinon laisser de côté plutôt que montrer un projet incomplet, cohérent avec le positionnement honnête du site.

Les liens GitHub/démo restent `null` par défaut dans `src/data/projects.js` tant qu'un projet n'est pas prêt — le composant `Projects.jsx` n'affiche la ligne de liens que si l'un des deux est renseigné.

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

## Déploiement

- Repo GitHub : `github.com/JohanRigelo/portfolio` (remote HTTPS, auth via `gh auth login`)
- Déployé sur Vercel, projet `johanrigelos-projects/portfolio`, lié au repo GitHub pour un redéploiement automatique à chaque push sur `main`
- URL de production (domaine .vercel.app personnalisé, suit automatiquement chaque déploiement de `main`) : **https://johan-rigelo.vercel.app** — ajouté via l'API projet (`/v10/projects/{id}/domains`) plutôt que `vercel alias set`, qui crée un pointeur figé sur un déploiement précis et ne suit pas les mises à jour
- URL générée automatiquement par Vercel (toujours valide) : https://portfolio-phi-ochre-s46pa4qab7.vercel.app
- La protection "Vercel Authentication" (SSO), activée par défaut sur les sous-domaines `.vercel.app`, a été désactivée (`ssoProtection: null` via l'API projet) pour que le portfolio soit consultable publiquement sans compte Vercel

## SEO et identité de la page (`index.html`)

- `<title>` mis à jour pour refléter le positionnement réel : "Johan Rigelo — Automatisation & IA | Bases en développement web" (remplace l'ancien "Johan Rigelo — Développeur Web", trop générique/dev confirmé)
- `<meta name="description">` ajoutée (résume reconversion automatisation/IA + bases techniques + recherche formation/alternance)
- Favicon remplacé : l'ancien était le logo violet générique d'un template de départ, sans rapport avec le site. Nouveau favicon : monogramme "JR" en SVG, fond ambre "socle" (`#b8622a`) / lettres crème en mode clair, qui bascule en fond sombre / lettres ambre clair via `@media (prefers-color-scheme: dark)` — répond à la préférence système, indépendamment du toggle jour/nuit de l'app (les favicons ne peuvent pas lire l'état React de la page)

## Bug corrigé — nav bloquée après un clic (Chrome desktop)

Symptôme rapporté par Johan : après un clic sur un lien de la nav (ex. "projets"), l'URL prend le hash correspondant (`#projets`) et **plus aucun autre lien de la nav n'est cliquable** tant que ce hash reste dans l'URL — il faut retirer le hash et recharger la page pour que la nav redevienne cliquable.

**Fausses pistes explorées (deux tentatives ratées)** : d'abord soupçonné un bug de compositing GPU lié à `backdrop-filter` sur un élément `position: sticky`. Non reproductible par tests automatisés Playwright classiques (`page.click()` sur le sélecteur du lien réussissait à chaque fois, changeant bien le hash — ce qui masquait le vrai problème). Deux essais infructueux : (1) ajout de `will-change-transform` + `transform: translateZ(0)` → régression pire (nav cliquable seulement tout en haut) ; (2) suppression de `backdrop-blur` seule → aucun effet, bug identique.

**Cause réelle trouvée** : diagnostic direct avec `document.elementFromPoint(x, y)` aux coordonnées exactes d'un lien de nav, après scroll — révèle qu'un `<div>` de la section actuellement affichée (ex. Skills) est l'élément réellement au sommet à cet endroit, pas le lien. Cause : **toutes les sections (`Timeline`, `Skills`, `Projects`, etc.) ont le même `z-index` (`z-10`) que la nav**. À `z-index` égal, l'ordre de peinture suit l'ordre du DOM — les sections, placées après la nav dans `App.jsx`, passent donc visuellement par-dessus elle dès qu'on scrolle (la nav `sticky` chevauche alors le contenu défilé). La nav restait visible mais ses clics étaient interceptés par la section en dessous. Ce qui explique aussi pourquoi seul un rechargement (qui remet le scroll à 0, sans chevauchement) "réparait" temporairement la nav.

**Fix retenu** : `z-index` de la nav passé de `z-10` à `z-50` (`Nav.jsx`) pour qu'elle reste strictement au-dessus de toutes les sections. Le `backdrop-blur` a été restauré (il n'était pour rien dans le bug). Confirmé par test direct (`elementFromPoint` + clic brut à la position exacte) avant déploiement : le lien de nav redevient bien l'élément cliqué.

## Reste à faire

- Confirmer que le fix de la nav (ci-dessus) résout bien le problème en conditions réelles
- Remplacer le mailto (`j.rigelo@gmail.com`) par un vrai formulaire de contact si souhaité — déjà fonctionnel tel quel
- Approfondir le responsive mobile (un menu hamburger n'a pas été implémenté — actuellement les liens de nav sont juste masqués sous 640px pour éviter le débordement horizontal constaté)
- Éventuellement configurer un nom de domaine personnalisé sur Vercel
