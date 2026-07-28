"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Hero — banner principal, agora bem mais simples que a versão
 * anterior (sem vídeo/scroll): fundo estático do céu azul, nuvem
 * grande à direita que aparece com uma animação de entrada assim que
 * a página carrega e continua flutuando (balanço leve, contínuo), e
 * o texto entra linha por linha à esquerda.
 *
 * Com `prefers-reduced-motion`, tudo aparece direto, sem animação.
 */

const linhas = ["O céu se abre.", "A esperança desce.", "A vida se transforma."];

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative h-[100svh] w-full overflow-hidden">
      <Image
        src="/images/hero/bg.jpg"
        alt="Céu azul aberto"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Nuvem: grande, à direita — entra com fade + leve escala ao
          carregar a página, depois flutua continuamente (balanço um
          pouco mais perceptível que um simples drift, sem exagerar). */}
      <motion.div
        className="pointer-events-none absolute right-[-4%] top-1/2 h-[55%] w-[55%] -translate-y-1/2 sm:h-[65%] sm:w-[48%] lg:h-[75%] lg:w-[42%]"
        initial={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.92 }}
        animate={
          shouldReduceMotion
            ? undefined
            : {
                opacity: 1,
                scale: 1,
              }
        }
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="relative h-full w-full"
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  y: [0, -22, 6, -12, 0],
                  x: [0, 10, -6, 8, 0],
                  rotate: [0, 1.5, -1, 1, 0],
                }
          }
          transition={{
            duration: 10,
            delay: 1.1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/images/hero/nuvem.png"
            alt="Nuvem em formato de coração com asas"
            fill
            priority
            sizes="(max-width: 640px) 55vw, (max-width: 1024px) 48vw, 42vw"
            className="object-contain"
          />
        </motion.div>
      </motion.div>

      {/* Texto: entra linha por linha, à esquerda */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-xl px-6 lg:px-16">
          {linhas.map((linha, i) => (
            <motion.p
              key={linha}
              className="font-[family-name:var(--font-display)] text-3xl font-medium tracking-tight text-[#1d1d1b] sm:text-5xl lg:text-6xl"
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 24 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.3 + i * 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {linha}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
