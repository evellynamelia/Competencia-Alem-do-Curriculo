/**
 * DESIGN SYSTEM — tokens de cor e fonte.
 * Para mudar a identidade visual do site inteiro, altere apenas este arquivo.
 * Uso nas classes: bg-ink, text-neon, border-volt/40, font-display...
 */
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#050608",   // preto profundo (fundo principal)
        night: "#090D18", // azul quase preto (cards/superfícies)
        neon: "#C7FF36",  // verde neon (destaque principal)
        tech: "#62E6B5",  // verde tecnológico (apoio)
        volt: "#3155FF",  // azul elétrico (profundidade/efeitos)
        snow: "#F7F8FA",  // branco (texto principal)
        mute: "#9399A8",  // cinza (texto secundário)
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"], // títulos
        sans: ["var(--font-body)", "sans-serif"],       // textos
      },
    },
  },
  plugins: [],
};
export default config;
