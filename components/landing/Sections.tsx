/**
 * SEÇÕES DA LANDING — Problema, Solução, Modalidades, Supervisão, Públicos e Chamada final.
 * Componentes de servidor (sem estado); a animação vem do <Reveal>.
 */
import { Check } from "lucide-react";
import { MODALITIES, PROBLEMS, STEPS, SUPERVISION } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";

/** Título padrão de seção (mantém a tipografia consistente) */
function Title({ children }: { children: React.ReactNode }) {
  return <h2 className="max-w-3xl font-display text-4xl font-light leading-tight tracking-tight sm:text-5xl">{children}</h2>;
}

/** O PROBLEMA — composição editorial: 1º card largo, demais menores (evita grade repetitiva) */
export function Problem() {
  return (
    <section id="problema" className="mx-auto max-w-7xl px-5 py-28">
      <Reveal><Title>O talento existe. <span className="font-bold text-neon">Nem sempre</span> o currículo consegue mostrar.</Title></Reveal>
      <div className="mt-14 grid gap-4 md:grid-cols-6">
        {PROBLEMS.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.08} className={i === 0 ? "md:col-span-4" : "md:col-span-2"}>
            <article className="h-full border border-white/10 bg-night/60 p-7 transition hover:border-neon/50">
              <p.icon className="mb-6 text-neon" aria-hidden />
              <h3 className="font-display text-xl">{p.title}</h3>
              <p className="mt-2 max-w-md text-mute">{p.text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/** NOSSA SOLUÇÃO — linha do tempo numerada (aqui a numeração faz sentido: é uma sequência) */
export function Solution() {
  return (
    <section id="como-funciona" className="border-y border-white/10 bg-night/40 py-28">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal><Title>Não basta dizer que sabe. Aqui, você pode demonstrar.</Title></Reveal>
        <ol className="mt-14 grid gap-6 md:grid-cols-5">
          {STEPS.map((s, i) => (
            <Reveal key={s} delay={i * 0.1}>
              <li className="relative border-t border-neon/50 pt-5">
                <span className="font-display text-3xl font-bold text-neon">{i + 1}</span>
                <p className="mt-2 text-snow">{s}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

/** MODALIDADES — cards com mini-preview que acende ao passar o mouse (group-hover) */
export function Modalities() {
  return (
    <section id="avaliacoes" className="mx-auto max-w-7xl px-5 py-28">
      <Reveal><Title>Três jeitos de mostrar o que você sabe.</Title></Reveal>
      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {MODALITIES.map((m) => (
          <article key={m.title} tabIndex={0} className="group border border-white/10 bg-night/60 p-7 outline-none transition duration-300 hover:-translate-y-1 hover:border-neon focus-visible:border-neon">
            <m.icon className="text-neon" aria-hidden />
            <h3 className="mt-5 font-display text-2xl">{m.title}</h3>
            <p className="mt-2 text-mute">{m.text}</p>
            {/* Preview da interface (ilustrativo) */}
            <div className="mt-6 space-y-2 border border-white/10 bg-ink p-4 text-xs text-mute transition group-hover:border-neon/60 group-hover:text-snow group-focus-visible:text-snow">
              {m.preview.map((l) => <div key={l} className="border-b border-white/10 pb-2 last:border-0 last:pb-0">{l}</div>)}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/** AVALIAÇÕES SUPERVISIONADAS — linguagem cuidadosa: não promete antifraude total */
export function Supervision() {
  return (
    <section className="border-y border-white/10 bg-night/40 py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2">
        <Reveal>
          <Title>Sua competência merece uma avaliação confiável.</Title>
          <p className="mt-6 max-w-lg text-mute">
            Algumas avaliações poderão ter recursos de supervisão, com regras claras, respeito à privacidade e acessibilidade. Nenhum recurso é ativado sem a sua autorização, e nenhum sistema impede toda forma de fraude.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <ul className="space-y-3">
            {SUPERVISION.map((s) => (
              <li key={s} className="flex items-center gap-3 border border-white/10 bg-ink px-5 py-4">
                <Check className="text-tech" size={18} aria-hidden /> {s}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

/** PÚBLICOS — layout dividido: candidatos (neon) e empresas/RH (azul elétrico) */
export function Audiences() {
  return (
    <section id="publicos" className="mx-auto grid max-w-7xl gap-5 px-5 py-28 md:grid-cols-2">
      <Reveal>
        <div className="h-full border border-neon/40 bg-gradient-to-br from-neon/10 to-transparent p-10">
          <h3 className="font-display text-3xl">Demonstre seu potencial além do papel.</h3>
          <p className="mb-8 mt-3 text-mute">Para candidatos</p>
          <ButtonLink href="/entrar?perfil=candidato">Sou candidato</ButtonLink>
        </div>
      </Reveal>
      <Reveal delay={0.1}>
        <div className="h-full border border-volt/50 bg-gradient-to-br from-volt/20 to-transparent p-10">
          <h3 className="font-display text-3xl">Conheça as habilidades por trás do currículo.</h3>
          <p className="mb-8 mt-3 text-mute">Para empresas e RH</p>
          <ButtonLink href="/entrar?perfil=rh" variant="ghost">Sou avaliador / RH</ButtonLink>
        </div>
      </Reveal>
    </section>
  );
}

/** CHAMADA FINAL */
export function FinalCta() {
  return (
    <section className="relative overflow-hidden px-5 py-32 text-center">
      <div className="absolute left-1/2 top-1/2 h-72 w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon/10 blur-[120px]" aria-hidden />
      <Reveal className="relative">
        <h2 className="mx-auto max-w-3xl font-display text-5xl font-light tracking-tight sm:text-6xl">
          O que você sabe fazer merece ser <span className="font-bold text-neon">visto</span>.
        </h2>
        <div className="mt-10"><ButtonLink href="/entrar">Começar minha jornada</ButtonLink></div>
      </Reveal>
    </section>
  );
}
