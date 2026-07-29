"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

/**
 * FloatingImage — imagem com um balanço contínuo e sutil, tipo
 * flutuando no ar. Mesma ideia da nuvem no hero, só que com uma
 * amplitude bem menor (movimento mais discreto), pensada pra ilustrar
 * uma seção de conteúdo sem roubar a atenção do texto.
 *
 * Com `prefers-reduced-motion`, a imagem fica parada.
 */
export default function FloatingImage({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      animate={
        shouldReduceMotion
          ? undefined
          : {
              y: [0, -8, 0, 6, 0],
              x: [0, 3, 0, -3, 0],
              rotate: [0, 0.6, 0, -0.6, 0],
            }
      }
      transition={{
        duration: 9,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className="h-auto w-full"
      />
    </motion.div>
  );
}
