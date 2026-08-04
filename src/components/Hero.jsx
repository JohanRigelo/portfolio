export default function Hero() {
  return (
    <section className="relative z-10 flex min-h-[82vh] flex-col justify-center px-[6%] pt-[60px]">
      <div className="hero-enter terminal-glow max-w-[640px] overflow-hidden rounded-[10px] border border-border bg-bg-elevated">
        <div className="flex gap-[7px] border-b border-border bg-[var(--bar-bg)] px-3.5 py-[11px]">
          <span className="inline-block h-[11px] w-[11px] rounded-full bg-[#ff5f56]" />
          <span className="inline-block h-[11px] w-[11px] rounded-full bg-[#ffbd2e]" />
          <span className="inline-block h-[11px] w-[11px] rounded-full bg-[#27c93f]" />
        </div>
        <div className="px-6 py-[22px] font-mono text-[0.92rem]">
          <div className="mb-2.5">
            <span className="text-prompt">johan@dev</span>
            <span className="text-socle"> ~ </span>$ whoami
          </div>
          <div className="mb-2.5 text-text-dim">
            bases web (React, PHP/Symfony, WordPress)
          </div>
          <div className="mb-2.5">
            <span className="text-prompt">johan@dev</span>
            <span className="text-socle"> ~ </span>$ cat objectif.txt
            <span className="cursor-blink ml-1 inline-block h-4 w-2 align-middle bg-socle" />
          </div>
        </div>
      </div>

      <h1
        className="hero-enter mt-[34px] text-[clamp(2.2rem,5vw,3.4rem)] font-bold leading-[1.15]"
        style={{ animationDelay: "120ms" }}
      >
        Je construis des bases solides.
        <br />
        Direction : l'<span className="text-socle">automatisation</span> & l'IA.
      </h1>

      <p
        className="hero-enter mt-4 max-w-[560px] text-[1.05rem] text-text-dim"
        style={{ animationDelay: "220ms" }}
      >
        Des fondations techniques en développement web (React, PHP/Symfony,
        WordPress) forgées en indépendant, et aujourd'hui une envie sincère de
        me former à l'automatisation et à l'IA — un domaine qui me passionne,
        même quand ça demande du travail.
      </p>

      <div
        className="badge-dot hero-enter mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-direction px-4 py-2 font-mono text-[0.82rem] text-direction"
        style={{ animationDelay: "320ms" }}
      >
        en reconversion — recherche formation ou alternance
      </div>
    </section>
  );
}
