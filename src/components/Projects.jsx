import { projects } from "../data/projects";
import { useReveal } from "../hooks/useReveal";

function ProjectCard({ project, index }) {
  const [ref, isVisible] = useReveal();

  return (
    <div
      ref={ref}
      className={`card-glow-hover reveal relative rounded-[10px] border bg-bg-card p-6.5 transition-all hover:-translate-y-[3px] ${
        isVisible ? "reveal-visible" : ""
      } ${project.featured ? "border-direction hover:border-direction" : "border-border hover:border-socle"}`}
      style={{ transitionDelay: `${Math.min(index, 6) * 70}ms` }}
    >
      {project.featured && (
        <span className="absolute -top-[11px] right-5 rounded font-mono text-[0.65rem] font-bold text-bg bg-direction px-2.5 py-[3px]">
          PROJET PRINCIPAL
        </span>
      )}
      <h3 className="mb-2 text-[1.15rem] font-semibold">{project.title}</h3>
      <p className="mb-4 text-[0.9rem] text-text-dim">{project.description}</p>
      <div className="font-mono text-[0.75rem] text-prompt">{project.stack}</div>
      {(project.github || project.demo) && (
        <div className="mt-4 flex gap-4 font-mono text-[0.8rem]">
          {project.github && (
            <a href={project.github} className="text-socle hover:underline">
              code
            </a>
          )}
          {project.demo && (
            <a href={project.demo} className="text-socle hover:underline">
              démo
            </a>
          )}
        </div>
      )}
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
