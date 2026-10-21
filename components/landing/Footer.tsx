/** FOOTER — identidade e links institucionais (os links levam às seções existentes). */
import { NAV } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-12">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row">
        <div>
          <p className="font-display text-lg font-light">competência <span className="font-bold text-neon">além</span> do currículo</p>
          <p className="mt-2 max-w-sm text-sm text-mute">Seu currículo conta sua história. Suas habilidades mostram do que você é capaz.</p>
        </div>
        <nav aria-label="Rodapé" className="flex flex-wrap gap-6 text-sm text-mute">
          {NAV.map((n) => <a key={n.href} href={n.href} className="hover:text-snow">{n.label}</a>)}
        </nav>
      </div>
      <p className="mx-auto mt-10 max-w-7xl text-xs text-mute/70">Protótipo acadêmico. Nenhum dado, nota ou registro exibido é real.</p>
    </footer>
  );
}
