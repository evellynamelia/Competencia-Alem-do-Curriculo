"use client";
/** HEADER — fixo, translúcido com blur. Em telas pequenas vira menu hambúrguer. */
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NAV } from "@/lib/data";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function Header() {
  const [open, setOpen] = useState(false); // controla o menu mobile
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/60 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
        {/* Logotipo tipográfico */}
        <Link href="/" className="font-display text-lg font-light tracking-tight">
          competência <span className="font-bold text-neon">além</span>
        </Link>
        <nav aria-label="Principal" className="hidden gap-8 text-sm text-mute lg:flex">
          {NAV.map((n) => <a key={n.href} href={n.href} className="transition hover:text-snow">{n.label}</a>)}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <ButtonLink href="/entrar" variant="ghost">Entrar</ButtonLink>
          <ButtonLink href="/entrar">Começar agora</ButtonLink>
        </div>
        <button className="lg:hidden" aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {/* Menu mobile */}
      {open && (
        <div className="flex flex-col gap-4 border-t border-white/10 bg-ink/95 px-5 py-6 lg:hidden">
          {NAV.map((n) => <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="text-mute">{n.label}</a>)}
          <ButtonLink href="/entrar">Começar agora</ButtonLink>
        </div>
      )}
    </header>
  );
}
