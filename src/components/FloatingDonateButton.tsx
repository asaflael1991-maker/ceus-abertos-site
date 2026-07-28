"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * FloatingDonateButton — botão fixo no canto da tela, visível em
 * todas as páginas (inspirado no "Doe aqui!" do site da Igreja da
 * Cidade). Fica sempre acessível, mesmo com a pessoa rolando a
 * página. Escondido na própria página de doações, pra não mostrar um
 * botão levando pra página em que a pessoa já está.
 */
export default function FloatingDonateButton() {
  const pathname = usePathname();
  if (pathname === "/doacoes") return null;

  return (
    <Link
      href="/doacoes"
      className="fixed bottom-5 right-5 z-40 rounded-full bg-[#468683] px-5 py-3 text-sm font-medium text-[#ffffff] shadow-lg shadow-black/20 transition-transform hover:scale-105 lg:bottom-8 lg:right-8"
    >
      Doe aqui
    </Link>
  );
}
