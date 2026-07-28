import { learningSkills, skillGroups } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 px-[6%] py-[100px]">
      <div className="eyebrow mb-2.5 flex items-center gap-2.5 font-mono text-[0.85rem] text-socle">
        stack
      </div>
      <h2 className="mb-11 text-[1.9rem] font-semibold">Compétences</h2>

      {skillGroups.map((group) => (
        <div key={group.title} className="mb-7">
          <h3 className="mb-3.5 font-mono text-[0.85rem] uppercase tracking-wide text-text-dim">
            {group.title}
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {group.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-md border border-border bg-bg-card px-3.5 py-1.5 font-mono text-[0.85rem] transition-all hover:-translate-y-0.5 hover:border-socle hover:text-socle"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}

      <div className="mb-7">
        <h3 className="mb-3.5 font-mono text-[0.85rem] uppercase tracking-wide text-text-dim">
          {learningSkills.title}
        </h3>
        <div className="flex flex-wrap gap-2.5">
          {learningSkills.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-md border border-dashed border-[color-mix(in_srgb,var(--direction)_40%,transparent)] px-3.5 py-1.5 font-mono text-[0.85rem] text-direction transition-all hover:-translate-y-0.5 hover:border-direction"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
