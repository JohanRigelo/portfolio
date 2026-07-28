export default function Nav({ theme, toggleTheme }) {
  const links = [
    { href: "#parcours", label: "parcours" },
    { href: "#skills", label: "compétences" },
    { href: "#projets", label: "projets" },
    { href: "#contact", label: "contact" },
  ];

  return (
    <nav className="sticky top-0 z-10 flex items-center justify-between border-b border-border bg-[var(--nav-bg)] px-[6%] py-[18px] backdrop-blur-[8px]">
      <div className="font-mono font-bold tracking-wide text-socle">
        johan<span className="text-direction">@</span>portfolio
      </div>
      <div className="flex items-center">
        <ul className="hidden list-none gap-7 sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-sm text-text-dim transition-colors hover:text-socle"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          onClick={toggleTheme}
          className="ml-0 rounded-full border border-border bg-bg-card px-3.5 py-1.5 font-mono text-xs text-text transition-colors hover:border-socle hover:text-socle sm:ml-5 sm:text-sm"
        >
          {theme === "dark" ? "☀️ mode jour" : "🌙 mode nuit"}
        </button>
      </div>
    </nav>
  );
}
