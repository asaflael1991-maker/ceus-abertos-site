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

/** Pássaro simples (silhueta), batendo asas continuamente — o "M"
 *  clássico de pássaro visto de longe. A batida das asas é uma
 *  animação de path separada da animação de voo (que move o
 *  conjunto pela tela), pra não misturar as duas velocidades. */
function Bird({ className }: { className?: string }) {
  const shouldReduceMotion = useReducedMotion();
  const wingUp = "M0 9 Q9 1 18 9 Q27 1 36 9";
  const wingDown = "M0 9 Q9 14 18 9 Q27 14 36 9";

  return (
    <svg viewBox="0 0 36 18" className={className} aria-hidden>
      <motion.path
        d={wingUp}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        animate={shouldReduceMotion ? undefined : { d: [wingUp, wingDown, wingUp] }}
        transition={{ duration: 0.7, repeat: Infinity, ease: "easeInOut" }}
      />
    </svg>
  );
}

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

      {/* Pássaros ao longe — voo contínuo, em loop lento e suave */}
      {!shouldReduceMotion && (
        <>
          <motion.div
            className="pointer-events-none absolute h-3 w-7 text-[#1d1d1b]/30"
            style={{ left: "8%", top: "78%" }}
            animate={{
              x: [0, 40, 90, 40, 0],
              y: [0, -14, 4, 18, 0],
            }}
            transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
          >
            <Bird className="h-full w-full" />
          </motion.div>

          <motion.div
            className="pointer-events-none absolute h-3.5 w-8 text-[#1d1d1b]/25"
            style={{ left: "46%", top: "14%" }}
            animate={{
              x: [0, -55, -20, 30, 0],
              y: [0, 10, 26, 8, 0],
            }}
            transition={{ duration: 32, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          >
            <Bird className="h-full w-full" />
          </motion.div>
        </>
      )}

      {/* Nuvem: grande, à direita — entra com fade + leve escala ao
          carregar a página, depois flutua continuamente (balanço um
          pouco mais perceptível que um simples drift, sem exagerar). */}
      <motion.div
        className="pointer-events-none absolute right-[-10%] top-1/2 h-[70%] w-[75%] -translate-y-1/2 sm:h-[80%] sm:w-[60%] lg:right-[-6%] lg:h-[95%] lg:w-[54%]"
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
            sizes="(max-width: 640px) 75vw, (max-width: 1024px) 60vw, 54vw"
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
              className="text-3xl font-light uppercase tracking-wide text-[#1d1d1b] sm:text-5xl lg:text-6xl"
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
