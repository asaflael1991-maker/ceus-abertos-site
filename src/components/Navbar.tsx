"use client";

import Link from "next/link";
import { useState } from "react";

/**
 * Navbar — menu fixo no topo. Como este é um site de VÁRIAS páginas
 * (não uma home única com âncoras), os links aqui apontam direto pra
 * cada rota. No mobile, tudo colapsa num dropdown de hambúrguer.
 *
 * OBS: ainda não temos uma logo definitiva da Associação Céus Abertos
 * (é diferente da logo da Igreja Colheita). Por enquanto uso um
 * selo simples (círculo com "sol"), fácil de trocar depois — é só
 * substituir este SVG por um <Image> apontando pra logo oficial.
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

function Selo() {
  return (
    <svg
      viewBox="0 0 40 40"
      className="h-9 w-9 shrink-0"
      aria-hidden
    >
      <circle cx="20" cy="20" r="19" fill="none" stroke="#f8a800" strokeWidth="1.5" />
      <circle cx="20" cy="20" r="7" fill="#f8a800" />
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * Math.PI) / 4;
        const x1 = 20 + Math.cos(angle) * 11;
        const y1 = 20 + Math.sin(angle) * 11;
        const x2 = 20 + Math.cos(angle) * 15.5;
        const y2 = 20 + Math.sin(angle) * 15.5;
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#f8a800"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        );
      })}
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#1d1d1b]/10 bg-[#ffffff]/90 backdrop-blur">
      <nav className="relative mx-auto flex min-h-[4.5rem] max-w-[1440px] items-center px-6 py-2 lg:px-12">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <Selo />
          <span className="font-[family-name:var(--font-display)] text-lg font-medium leading-tight tracking-tight">
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
                className="text-sm text-[#1d1d1b]/70 transition-colors hover:text-[#1d1d1b]"
              >
                {p.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/doacoes"
          className="ml-auto hidden shrink-0 rounded-full bg-[#e5192c] px-4 py-2 text-sm text-[#ffffff] transition-opacity hover:opacity-90 lg:block"
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
            className={`h-px w-6 bg-[#1d1d1b] transition-transform ${
              open ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-[#1d1d1b] transition-transform ${
              open ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-[#1d1d1b]/10 px-6 py-4 lg:hidden">
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
              className="inline-block rounded-full bg-[#e5192c] px-4 py-2 text-sm text-[#ffffff]"
            >
              Fazer doação
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
}
