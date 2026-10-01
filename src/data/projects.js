// featured : projet mis en avant, avec un badge — "ia" (couleur « direction »)
// ou "web" (couleur « socle »). github / demo : null tant que non disponible
// (dépôt privé, pas encore en ligne…). demoLabel : texte du lien de démo
// (« démo » par défaut).
export const projects = [
  {
    title: "Workflow candidatures",
    description:
      "Suivi de candidatures avec une API d'IA : analyse des offres, CV adapté à chaque offre (sans rien inventer), relances et lettre de motivation. Installable sur téléphone.",
    stack: "React · Firebase · Vercel serverless · API Gemini",
    featured: "ia",
    github: null, // dépôt privé
    demo: "https://workflow-candidatures.vercel.app/?demo",
    demoLabel: "essayer la démo",
  },
  {
    title: "Bibliothèque de chants",
    description:
      "Application de gestion de chants avec affichage ChordPro, transposition d'accords et gestion de listes.",
    stack: "React · Vite · Tailwind",
    featured: "web",
    github: "https://github.com/JohanRigelo/Bibliotheque_De_Chants",
    demo: "https://bibliotheque-de-chants.vercel.app",
  },
  {
    title: "Calculatrice Métabolisme",
    description:
      "Calcul des besoins caloriques et de l'IMC selon l'objectif (prise de masse / perte de poids), avec suggestions de recettes.",
    stack: "React · Vite",
    github: "https://github.com/JohanRigelo/calculatrice-metabolisme",
    demo: "https://calculatrice-metabolisme.vercel.app",
  },
  {
    title: "Annonces Immo",
    description:
      "Gestion d'annonces immobilières : CRUD avec photos, recherche/filtres (prix, surface, ville), authentification et rôles auteur/admin.",
    stack: "React · Vite · Firebase · Tailwind",
    github: "https://github.com/JohanRigelo/Annonces_Immo",
    demo: "https://annonces-immo.vercel.app",
  },
];
