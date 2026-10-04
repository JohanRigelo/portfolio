export default function Nav({ theme, toggleTheme }) {
  const links = [
    { href: "#parcours", label: "parcours" },
    { href: "#skills", label: "compétences" },
    { href: "#projets", label: "projets" },
    { href: "#contact", label: "contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-border bg-[var(--nav-bg)] px-[6%] py-[18px] backdrop-blur-[8px]">
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
        {/* Icône du mode vers lequel on bascule (soleil en mode nuit, lune en
            mode jour), dessinée en SVG : elle suit la couleur du texte et
            s'affiche pareil partout. Libellé lu par les lecteurs d'écran et
            affiché au survol (aria-label + title). */}
        <button
          type="button"
          onClick={toggleTheme}
          aria-label={theme === "dark" ? "Passer en mode jour" : "Passer en mode nuit"}
          title={theme === "dark" ? "Passer en mode jour" : "Passer en mode nuit"}
          className="ml-0 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-bg-card text-text transition-colors hover:border-socle hover:text-socle sm:ml-5"
        >
          <svg
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            {theme === "dark" ? (
              <>
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
              </>
            ) : (
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            )}
          </svg>
        </button>
      </div>
    </nav>
  );
}
