"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

/**
 * Navbar — menu fixo no topo. Como este é um site de VÁRIAS páginas
 * (não uma home única com âncoras), os links aqui apontam direto pra
 * cada rota. No mobile, tudo colapsa num dropdown de hambúrguer.
 *
 * Só na Home, enquanto o hero (banner do céu) ainda está visível, o
 * menu fica transparente com texto branco — assim que a pessoa rola
 * além do hero (ou em qualquer outra página), volta ao normal (fundo
 * branco, texto escuro).
 */

const pages = [
  { href: "/", label: "Início" },
  { href: "/quem-somos", label: "Quem somos" },
  { href: "/areas-de-atuacao", label: "Áreas de atuação" },
  { href: "/voluntariado", label: "Voluntariado" },
  { href: "/atendimento", label: "Solicitar atendimento" },
  { href: "/galeria", label: "Galeria" },
  { href: "/contato", label: "Contato" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    if (!isHome) return;

    const onScroll = () => {
      setScrolledPastHero(window.scrollY > window.innerHeight * 0.85);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  // Some (fica transparente) só na Home, enquanto o hero está visível
  // e o menu mobile não está aberto (com o menu aberto, sempre sólido,
  // pra manter os links legíveis).
  const transparent = isHome && !scrolledPastHero && !open;

  return (
    <header
      className={`${isHome ? "fixed" : "sticky"} inset-x-0 top-0 z-50 transition-colors duration-300 ${
        transparent
          ? "bg-transparent"
          : "border-b border-[#1d1d1b]/10 bg-[#ffffff]/90 backdrop-blur"
      }`}
    >
      <nav className="relative mx-auto flex min-h-[4.5rem] max-w-[1440px] items-center px-6 py-2 lg:px-12">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/images/logo.png"
            alt="Associação Cristã Céus Abertos"
            width={1080}
            height={1080}
            priority
            className="h-11 w-11 shrink-0"
          />
          <span
            className={`text-lg font-medium leading-tight tracking-tight transition-colors ${
              transparent ? "text-[#ffffff]" : "text-[#1d1d1b]"
            }`}
          >
            Céus
            <br />
            Abertos
          </span>
        </Link>

        <ul className="mx-auto hidden flex-wrap items-center justify-center gap-x-6 gap-y-1 lg:flex">
          {pages.map((p) => (
            <li key={p.href}>
              <Link
                href={p.href}
                className={`text-sm transition-colors ${
                  transparent
                    ? "text-[#ffffff]/90 hover:text-[#ffffff]"
                    : "text-[#1d1d1b]/70 hover:text-[#1d1d1b]"
                }`}
              >
                {p.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/doacoes"
          className="ml-auto hidden shrink-0 rounded-full bg-[#468683] px-4 py-2 text-sm text-[#ffffff] transition-opacity hover:opacity-90 lg:block"
        >
          Fazer doação
        </Link>

        {/* Botão hambúrguer (mobile) */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="ml-auto flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span
            className={`h-px w-6 transition-transform ${
              transparent ? "bg-[#ffffff]" : "bg-[#1d1d1b]"
            } ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-6 transition-transform ${
              transparent ? "bg-[#ffffff]" : "bg-[#1d1d1b]"
            } ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-[#1d1d1b]/10 bg-[#ffffff] px-6 py-4 lg:hidden">
          {pages.map((p) => (
            <li key={p.href}>
              <Link
                href={p.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-sm text-[#1d1d1b]/80"
              >
                {p.label}
              </Link>
            </li>
          ))}
          <li className="my-2 border-t border-[#1d1d1b]/10" />
          <li>
            <Link
              href="/doacoes"
              onClick={() => setOpen(false)}
              className="inline-block rounded-full bg-[#468683] px-4 py-2 text-sm text-[#ffffff]"
            >
              Fazer doação
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
}
