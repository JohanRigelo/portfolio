import { timeline } from "../data/timeline";

const tagClass = {
  today: "tag-today",
  formation: "tag-formation",
};

export default function Timeline() {
  return (
    <section id="parcours" className="relative z-10 px-[6%] py-[100px]">
      <div className="eyebrow mb-2.5 flex items-center gap-2.5 font-mono text-[0.85rem] text-socle">
        git log --socle
      </div>
      <h2 className="mb-11 text-[1.9rem] font-semibold">Mon socle technique</h2>

      <div className="gitlog relative max-w-[760px]">
        {timeline.map((commit) => (
          <div key={`${commit.hash}-${commit.message}`} className="relative pb-[34px] pl-10">
            <div className={`commit-dot ${commit.variant ?? ""}`} />
            <div className="mb-1.5 font-mono text-[0.85rem] text-text-dim">
              <span className="text-direction">{commit.hash}</span> · {commit.period}
            </div>
            <div className="mb-1 text-[1.08rem] font-semibold">
              {commit.message}
              {commit.tag && (
                <span
                  className={`tag ml-2 inline-block rounded font-mono text-[0.7rem] ${
                    tagClass[commit.variant] ?? ""
                  } px-2 py-0.5`}
                >
                  {commit.tag}
                </span>
              )}
            </div>
            <div className="max-w-[560px] text-[0.92rem] text-text-dim">{commit.detail}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
