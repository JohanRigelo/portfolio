import { learningSkills, skillGroups } from "../data/skills";
import { useReveal } from "../hooks/useReveal";

function SkillGroup({ title, skills, className = "", index = 0 }) {
  const [ref, isVisible] = useReveal();

  return (
    <div
      ref={ref}
      className={`reveal mb-7 ${isVisible ? "reveal-visible" : ""}`}
      style={{ transitionDelay: `${Math.min(index, 6) * 80}ms` }}
    >
      <h3 className="mb-3.5 font-mono text-[0.85rem] uppercase tracking-wide text-text-dim">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2.5">
        {skills.map((skill) => (
          <span
            key={skill}
            className={`rounded-md px-3.5 py-1.5 font-mono text-[0.85rem] transition-all hover:-translate-y-0.5 ${className}`}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 px-[6%] py-[100px]">
      <div className="eyebrow mb-2.5 flex items-center gap-2.5 font-mono text-[0.85rem] text-socle">
        stack
      </div>
      <h2 className="mb-11 text-[1.9rem] font-semibold">Compétences</h2>

      {skillGroups.map((group, index) => (
        <SkillGroup
          key={group.title}
          title={group.title}
          skills={group.skills}
          index={index}
          className="border border-border bg-bg-card hover:border-socle hover:text-socle"
        />
      ))}

      <SkillGroup
        title={learningSkills.title}
        skills={learningSkills.skills}
        index={skillGroups.length}
        className="border border-dashed border-[color-mix(in_srgb,var(--direction)_40%,transparent)] text-direction hover:border-direction"
      />
    </section>
  );
}
