import { projects } from "../data/projects";
import { useReveal } from "../hooks/useReveal";

// Liens « code » / « démo » : ouverts dans un nouvel onglet (le visiteur garde
// le portfolio ouvert) ; rel="noopener noreferrer" empêche la page ouverte
// d'agir sur l'onglet du portfolio.

// Projets mis en avant : un badge par domaine, aux couleurs du site —
// « direction » (IA) et « socle » (bases web).
const MISE_EN_AVANT = {
  ia: {
    badge: "PROJET PRINCIPAL · IA",
    bordure: "border-direction hover:border-direction",
    fond: "bg-direction",
  },
  web: {
    badge: "PROJET PRINCIPAL · WEB",
    bordure: "border-socle hover:border-socle",
    fond: "bg-socle",
  },
};

function ProjectCard({ project, index }) {
  const [ref, isVisible] = useReveal();
  const miseEnAvant = MISE_EN_AVANT[project.featured];

  return (
    <div
      ref={ref}
      className={`card-glow-hover reveal relative rounded-[10px] border bg-bg-card p-6.5 transition-all hover:-translate-y-[3px] ${
        isVisible ? "reveal-visible" : ""
      } ${miseEnAvant ? miseEnAvant.bordure : "border-border hover:border-socle"} ${
        // Carte avec capture : toute la largeur de la grille (image à gauche,
        // texte à droite sur grand écran) pour ne pas étirer ses voisines.
        project.capture ? "col-span-full md:grid md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] md:items-center md:gap-8" : ""
      }`}
      style={{ transitionDelay: `${Math.min(index, 6) * 70}ms` }}
    >
      {miseEnAvant && (
        <span
          className={`absolute -top-[11px] right-5 rounded font-mono text-[0.65rem] font-bold text-bg px-2.5 py-[3px] ${miseEnAvant.fond}`}
        >
          {miseEnAvant.badge}
        </span>
      )}
      {project.capture && (
        <img
          src={project.capture.src}
          alt={project.capture.alt}
          loading="lazy"
          width="1520"
          height="1720"
          className="mb-5 aspect-[16/10] w-full rounded-md border border-border object-cover object-top md:mb-0"
        />
      )}
      <div>
        <h3 className="mb-2 text-[1.15rem] font-semibold">{project.title}</h3>
        <p className="mb-4 text-[0.9rem] text-text-dim">{project.description}</p>
        <div className="font-mono text-[0.75rem] text-prompt">{project.stack}</div>
        {(project.github || project.demo) && (
          <div className="mt-4 flex gap-4 font-mono text-[0.8rem]">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-socle hover:underline">
                code
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-socle hover:underline">
                {project.demoLabel ?? "démo"}
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projets" className="relative z-10 px-[6%] py-[100px]">
      <div className="eyebrow mb-2.5 flex items-center gap-2.5 font-mono text-[0.85rem] text-socle">
        projets
      </div>
      <h2 className="mb-11 text-[1.9rem] font-semibold">Projets</h2>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5.5">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
