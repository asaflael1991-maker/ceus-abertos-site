/** Lista em formato de "pill" — pra listas curtas de palavras ou
 *  frases. */
export function TagList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full border border-[#1d1d1b]/15 px-4 py-2 text-sm text-[#1d1d1b]/70"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

/** Lista com marcador simples, em duas colunas — pra listas de frases
 *  mais longas (objetivos, impacto esperado etc). */
export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-x-8 gap-y-3 text-[#1d1d1b]/70 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="flex gap-2">
          <span
            aria-hidden
            className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-[#e5192c]"
          />
          {item}
        </li>
      ))}
    </ul>
  );
}
