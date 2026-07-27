"use client";

import { useRef, type ReactNode } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

/**
 * StickyPhoto — foto de fundo que "congela" (fica grudada no topo da
 * tela) enquanto o usuário rola, e durante esse tempo:
 * - dá um leve ZOOM OUT (encolhe suavemente, de scale 1 até ~0.88)
 * - ESCURECE progressivamente (overlay preto de opacidade 0 até ~0.65)
 * ...ao mesmo tempo em que a seção seguinte sobe por cima dela — a
 * mesma combinação usada no igrejadacidade.org.br.
 *
 * Como funciona:
 * - O wrapper externo é mais alto que a tela (`heightVh`, padrão
 *   140vh) — esse espaço extra é o "tempo de rolagem" em que a foto
 *   fica grudada no topo.
 * - `useScroll` mede o progresso da rolagem DENTRO desse wrapper
 *   (0 = acabou de grudar; 1 = está prestes a soltar) — é esse
 *   progresso que "toca" o zoom out e o escurecimento em tempo real,
 *   não uma animação de tempo fixo.
 * - Assim que o wrapper termina, a foto solta e a próxima seção
 *   (com fundo sólido) sobe naturalmente por cima dela.
 *
 * Com `prefers-reduced-motion`, a foto fica só um pouco escurecida
 * (sem o zoom out contínuo ligado ao scroll).
 */
export default function StickyPhoto({
  id,
  src,
  alt,
  heightVh = 140,
  children,
  imageWidth = 1920,
  imageHeight = 1080,
}: {
  id?: string;
  src: string;
  alt: string;
  heightVh?: number;
  /** Conteúdo opcional (eyebrow, título, texto) exibido sobre a foto,
   *  ancorado na parte inferior. Quando presente, um degradê escuro
   *  fixo é somado por trás do texto pra garantir contraste em
   *  qualquer ponto da rolagem. */
  children?: ReactNode;
  /** Largura/altura REAIS do arquivo de imagem (em px). Usadas só pra
   *  calcular a proporção exibida no celular, garantindo que a foto
   *  apareça inteira, sem cortar as laterais. */
  imageWidth?: number;
  imageHeight?: number;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.88]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0, 0.65]);

  return (
    <div id={id} className="relative scroll-mt-36">
      {/* CELULAR — banner normal (não "gruda" na rolagem), com a
          altura calculada pela proporção real da foto: ela aparece
          inteira, sem cortar ninguém nas laterais. */}
      <div className="relative w-full overflow-hidden lg:hidden">
        <div
          className="relative w-full"
          style={{ aspectRatio: `${imageWidth} / ${imageHeight}` }}
        >
          <Image
            src={src}
            alt={alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />

          {children && (
            <>
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/85 via-black/30 to-transparent"
              />
              <div className="pointer-events-none absolute inset-0 flex items-end">
                <div className="pointer-events-auto w-full px-6 pb-5">
                  {children}
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* MONITOR — comportamento original: foto "grudada" em tela
          cheia, com zoom out e escurecimento conforme a rolagem. */}
      <div
        ref={wrapperRef}
        className="relative hidden lg:block"
        style={{ height: `${heightVh}vh` }}
      >
        <div className="sticky top-0 h-[100svh] w-full overflow-hidden">
          <motion.div
            className="relative h-full w-full"
            style={shouldReduceMotion ? undefined : { scale }}
          >
            <Image
              src={src}
              alt={alt}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>

          {/* Escurece progressivamente conforme a foto fica congelada */}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-black"
            style={{ opacity: shouldReduceMotion ? 0.3 : overlayOpacity }}
          />

          {children && (
            <>
              {/* Degradê fixo (não depende do scroll) só pra garantir
                  contraste do texto branco sobre a foto */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/85 via-black/30 to-transparent"
              />
              <div className="pointer-events-none absolute inset-0 flex items-end">
                <div className="pointer-events-auto mx-auto w-full max-w-[1440px] px-6 pb-16 lg:px-12 lg:pb-24">
                  {children}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
