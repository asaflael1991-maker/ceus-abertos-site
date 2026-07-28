"use client";

import { useEffect, useRef, useState } from "react";
import NextImage from "next/image";
import {
  useScroll,
  useReducedMotion,
  useMotionValueEvent,
  useTransform,
  motion,
} from "framer-motion";

/**
 * ScrollVideoHero — banner principal do site. O "vídeo" (nuvens se
 * abrindo, revelando o céu azul) avança conforme o usuário rola a
 * página (scroll-scrubbing).
 *
 * Como funciona:
 * - O vídeo original foi convertido em 45 imagens sequenciais
 *   (public/videos/hero-scroll/frame-001.jpg ... frame-045.jpg) —
 *   mais confiável entre navegadores do que tentar "pular" o
 *   currentTime de uma tag <video>, que engasga em vários celulares.
 * - A seção externa é alta (300vh), dando "espaço" de rolagem; a
 *   parte visível (canvas) fica grudada (sticky) na tela enquanto
 *   isso acontece.
 * - Perto do fim da animação (quando o céu já está aberto), a nuvem
 *   PNG aparece com um fade e some suavemente à deriva (flutuando),
 *   pairando por cima do céu.
 *
 * Com `prefers-reduced-motion`, mostra só o último frame (céu já
 * aberto) com a nuvem parada, sem nenhuma animação.
 */

const FRAME_COUNT = 45;
const frameSrc = (i: number) =>
  `/videos/hero-scroll/frame-${String(i + 1).padStart(3, "0")}.jpg`;

export default function ScrollVideoHero() {
  const shouldReduceMotion = useReducedMotion();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const lastDrawnRef = useRef<number>(0);
  const [firstFrameReady, setFirstFrameReady] = useState(false);

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  // A nuvem some/aparece só no último trecho da rolagem (0.85 → 1),
  // quando o céu já está praticamente aberto.
  const cloudOpacity = useTransform(scrollYProgress, [0.85, 1], [0, 1]);

  const drawImage = (img: HTMLImageElement) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const cw = canvas.width;
    const ch = canvas.height;
    const scale = Math.max(cw / img.width, ch / img.height);
    const sw = cw / scale;
    const sh = ch / scale;
    const sx = (img.width - sw) / 2;
    const sy = (img.height - sh) / 2;

    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, sx, sy, sw, sh, 0, 0, cw, ch);
  };

  const drawFrame = (index: number) => {
    const clamped = Math.min(Math.max(index, 0), FRAME_COUNT - 1);
    const img = imagesRef.current[clamped];
    if (img && img.complete && img.naturalWidth > 0) {
      drawImage(img);
      lastDrawnRef.current = clamped;
    } else {
      const fallback = imagesRef.current[lastDrawnRef.current];
      if (fallback && fallback.complete) drawImage(fallback);
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawFrame(lastDrawnRef.current);
    };
    resize();
    window.addEventListener("resize", resize);

    const images: HTMLImageElement[] = [];
    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = frameSrc(i);
      if (i === 0) {
        img.onload = () => {
          setFirstFrameReady(true);
          drawFrame(0);
        };
      }
      images.push(img);
    }
    imagesRef.current = images;

    return () => window.removeEventListener("resize", resize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (shouldReduceMotion) return;
    const index = Math.round(latest * (FRAME_COUNT - 1));
    drawFrame(index);
  });

  if (shouldReduceMotion) {
    return (
      <section className="relative h-[100svh] w-full overflow-hidden bg-[#eaf2fb]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={frameSrc(FRAME_COUNT - 1)}
          alt="Céu azul aberto entre nuvens"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative h-[45%] w-[70%]">
            <NextImage
              src="/images/hero/nuvem.png"
              alt="Nuvem em formato de coração com asas"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>
    );
  }

  return (
    <div ref={wrapperRef} className="relative h-[300vh] w-full">
      <div className="sticky top-0 h-[100svh] w-full overflow-hidden bg-[#eaf2fb]">
        <canvas
          ref={canvasRef}
          className={`h-full w-full transition-opacity duration-500 ${
            firstFrameReady ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Nuvem: aparece com fade perto do fim da animação, depois
            flutua sutilmente (deriva lenta), pairando sobre o céu. */}
        <motion.div
          style={{ opacity: cloudOpacity }}
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
        >
          <motion.div
            className="relative h-[40%] w-[65%] lg:h-[45%] lg:w-[38%]"
            animate={{
              y: [0, -14, 0, 10, 0],
              x: [0, 8, 0, -8, 0],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <NextImage
              src="/images/hero/nuvem.png"
              alt="Nuvem em formato de coração com asas"
              fill
              className="object-contain"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
