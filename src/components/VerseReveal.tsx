"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * VerseReveal — texto extra-espesso (font-black, peso 900) que
 * "monta-se" letra por letra assim que a página carrega: cada
 * caractere sobe suavemente e some do zero de opacidade em sequência
 * rápida, dando a sensação de o texto estar sendo "construído" na
 * tela — efeito comum em banners de abertura de sites institucionais.
 *
 * Com `prefers-reduced-motion`, o texto aparece direto, sem nenhuma
 * animação.
 */
export default function VerseReveal({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const shouldReduceMotion = useReducedMotion();
  const chars = Array.from(text);

  return (
    <h1
      aria-label={text}
      className={`font-black tracking-tight ${className}`}
    >
      {chars.map((char, i) => (
        <motion.span
          key={`${char}-${i}`}
          aria-hidden
          className="inline-block"
          initial={
            shouldReduceMotion ? undefined : { opacity: 0, y: "0.6em" }
          }
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.55,
            delay: shouldReduceMotion ? 0 : i * 0.035,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </h1>
  );
}
