export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative z-10 border-t border-border px-[6%] py-[60px] text-center font-mono text-[0.85rem] text-text-dim"
    >
      <p>
        $ curl -X contact johan-rigelo.dev —{" "}
        <a href="mailto:j.rigelo@gmail.com" className="text-socle no-underline hover:underline">
          Me contacter
        </a>
      </p>
      <p className="mt-2.5 opacity-60">
        Ouvert à une formation ou une alternance en automatisation / IA
      </p>
    </footer>
  );
}
