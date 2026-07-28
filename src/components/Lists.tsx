/** Lista em formato de "pill" — pra listas curtas de palavras ou
 *  frases. Usa `currentColor` (herda do texto da seção) pra funcionar
 *  tanto em fundo claro quanto no teal. */
export function TagList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full border border-current/20 px-4 py-2 text-sm text-current/80"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

/** Lista com marcador simples, em duas colunas — pra listas de frases
 *  mais longas (objetivos, impacto esperado etc). O marcador também
 *  usa `currentColor`, pra combinar com o texto ao redor. */
export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-x-8 gap-y-3 text-current/80 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="flex gap-2">
          <span
            aria-hidden
            className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-current"
          />
          {item}
        </li>
      ))}
    </ul>
  );
}
