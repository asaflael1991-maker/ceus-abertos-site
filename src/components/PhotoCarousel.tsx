"use client";

import { useRef } from "react";
import Image from "next/image";

/**
 * PhotoCarousel — fileira de fotos levemente inclinadas (efeito
 * "polaroids espalhados"), que a pessoa arrasta horizontalmente com o
 * mouse (ou o dedo, no celular) pra ver mais. Puramente decorativo —
 * inspirado no carrossel de fotos do site da Igreja da Cidade.
 */

const tilts = ["-rotate-3", "rotate-2", "-rotate-2", "rotate-3", "-rotate-1", "rotate-1"];

export default function PhotoCarousel({
  photos,
}: {
  photos: { src: string; alt: string }[];
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startScroll = useRef(0);

  const onPointerDown = (e: React.PointerEvent) => {
    const track = trackRef.current;
    if (!track) return;
    isDragging.current = true;
    startX.current = e.clientX;
    startScroll.current = track.scrollLeft;
    track.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const track = trackRef.current;
    if (!track || !isDragging.current) return;
    const delta = e.clientX - startX.current;
    track.scrollLeft = startScroll.current - delta;
  };

  const onPointerUp = () => {
    isDragging.current = false;
  };

  return (
    <div
      ref={trackRef}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
      className="flex cursor-grab gap-5 overflow-x-auto px-6 py-10 [scrollbar-width:none] active:cursor-grabbing sm:px-12 lg:px-[calc((100vw-1440px)/2+3rem)] [&::-webkit-scrollbar]:hidden"
    >
      {photos.map((p, i) => (
        <div
          key={p.src}
          className={`relative h-56 w-44 shrink-0 select-none overflow-hidden rounded-2xl shadow-lg sm:h-72 sm:w-56 ${tilts[i % tilts.length]}`}
        >
          <Image
            src={p.src}
            alt={p.alt}
            fill
            draggable={false}
            sizes="(max-width: 640px) 176px, 224px"
            className="pointer-events-none object-cover"
          />
        </div>
      ))}
    </div>
  );
}
