"use client";

import { useState } from "react";

/**
 * PixCopyButton — mostra a chave PIX e copia pro clipboard com um
 * clique. Precisa ser client component porque usa a API do
 * navegador (`navigator.clipboard`), que só existe no browser.
 */
export default function PixCopyButton({ pixKey }: { pixKey: string }) {
  const [copiado, setCopiado] = useState(false);

  const copiar = async () => {
    try {
      await navigator.clipboard.writeText(pixKey);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    } catch {
      // Navegador sem suporte a clipboard (raro) — sem crash, só não copia.
    }
  };

  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-[#ffffff]/15 bg-[#ffffff]/5 p-6 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-[#ffffff]/50">
          Chave PIX (CNPJ)
        </p>
        <p className="mt-1 font-mono text-lg text-[#ffffff]">{pixKey}</p>
      </div>
      <button
        onClick={copiar}
        className="shrink-0 rounded-full border border-[#ffffff]/30 px-5 py-2.5 text-sm text-[#ffffff] transition-colors hover:bg-[#ffffff]/10"
      >
        {copiado ? "Copiado ✓" : "Copiar chave"}
      </button>
    </div>
  );
}
