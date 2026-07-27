"use client";

import { useRef, type ReactNode } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

/**
 * FadeInView — revela o conteúdo com fade + leve zoom assim que ele
 * entra na tela (uma única vez), estilo usado em sites institucionais
 * (ex: igrejadacidade.org.br). Mais simples que o WatercolorImage
 * (sem desfoque/dessaturação) — pensado pra galerias e grids de fotos,
 * onde várias imagens aparecem em sequência.
 *
 * `delay` permite escalonar várias instâncias (ex: cada foto de uma
 * grade aparece um pouco depois da anterior).
 */
export default function FadeInView({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.94 }}
      animate={isInView || shouldReduceMotion ? { opacity: 1, scale: 1 } : undefined}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
