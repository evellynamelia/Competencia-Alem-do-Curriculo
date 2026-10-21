/**
 * HERO — primeira dobra. Texto à esquerda; à direita, um "objeto de competências"
 * feito só com CSS (anéis orbitais girando + núcleo luminoso), sem Three.js,
 * para manter o site leve. Dá para trocar por React Three Fiber depois.
 */
import { ButtonLink } from "@/components/ui/ButtonLink";

/** Rótulos estilo HUD posicionados ao redor do objeto */
const HUD = [
  { t: "Competência", c: "left-0 top-[18%]" },
  { t: "Evidência", c: "right-0 top-[40%]" },
  { t: "Registro", c: "left-[8%] bottom-[14%]" },
];

export function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-screen items-center overflow-hidden px-5 pt-24">
      {/* Fundo: grade HUD + luzes verde e azul */}
      <div className="grid-hud absolute inset-0" aria-hidden />
      <div className="absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-neon/10 blur-[120px]" aria-hidden />
      <div className="absolute -right-40 bottom-0 h-[28rem] w-[28rem] rounded-full bg-volt/25 blur-[140px]" aria-hidden />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div>
          <h1 className="font-display text-5xl font-light leading-[1.02] tracking-tight sm:text-7xl">
            Seu <span className="font-bold text-neon">talento</span> vai{" "}
            <span className="font-bold">além</span> do currículo.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-mute">
            Transforme o que você sabe fazer em competências demonstradas. Participe de desafios, entrevistas e avaliações práticas que valorizam seu conhecimento, mesmo sem certificados ou experiência formal.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/entrar">Demonstrar minhas habilidades</ButtonLink>
            <ButtonLink href="#problema" variant="ghost">Conhecer a plataforma</ButtonLink>
          </div>
          <p className="mt-6 text-xs text-mute/70">Protótipo demonstrativo: dados e resultados são fictícios.</p>
        </div>

        {/* Objeto orbital */}
        <div className="relative mx-auto aspect-square w-full max-w-md" aria-hidden>
          <div className="orbit absolute inset-0 rounded-full border border-neon/40" style={{ ["--d" as string]: "30s" }}>
            <span className="absolute -top-1.5 left-1/2 h-3 w-3 rounded-full bg-neon shadow-[0_0_20px_#C7FF36]" />
          </div>
          <div className="orbit absolute inset-[12%] rounded-full border border-volt/60 [transform:rotateX(60deg)]" style={{ ["--d" as string]: "18s" }} />
          <div className="orbit absolute inset-[24%] rounded-full border border-tech/40" style={{ ["--d" as string]: "42s" }}>
            <span className="absolute -bottom-1.5 left-1/2 h-3 w-3 rounded-full bg-tech shadow-[0_0_20px_#62E6B5]" />
          </div>
          {/* Núcleo luminoso */}
          <div className="absolute inset-[38%] rotate-45 rounded-2xl border border-neon/70 bg-gradient-to-br from-neon/30 via-night to-volt/50 shadow-[0_0_80px_#C7FF3655]" />
          {HUD.map((h) => (
            <span key={h.t} className={`absolute ${h.c} border border-white/15 bg-night/80 px-3 py-1 text-xs text-snow`}>{h.t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
