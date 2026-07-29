import Image from "next/image";

/**
 * ProjectsMarquee — fileira de fotos que rola sozinha, sem parar,
 * da direita pra esquerda (inspirado no carrossel de "grupos" do
 * site da Igreja da Cidade). NÃO é clicável — a interação é só ver
 * as fotos passando; por isso não há link, modal ou zoom em nenhuma
 * imagem.
 *
 * Técnica: a lista de fotos é duplicada uma vez (photos + photos) e
 * animada de 0% a -50% no eixo X — como a segunda metade é idêntica
 * à primeira, o loop fica perfeitamente contínuo, sem "salto"
 * visível quando reinicia.
 */

const fotos = [
  { src: "/images/galeria/mercado-solidario/foto-01.jpg", rotate: "-rotate-2" },
  { src: "/images/galeria/celulas/foto-01.jpg", rotate: "rotate-3" },
  { src: "/images/galeria/associacao-ceus-abertos/foto-05.jpg", rotate: "-rotate-1" },
  { src: "/images/galeria/krav-maga/foto-01.jpg", rotate: "rotate-2" },
  { src: "/images/galeria/bale/foto-01.jpg", rotate: "-rotate-3" },
  { src: "/images/galeria/associacao-ceus-abertos/foto-12.jpg", rotate: "rotate-1" },
  { src: "/images/galeria/celulas/foto-03.jpg", rotate: "-rotate-2" },
  { src: "/images/galeria/mercado-solidario/foto-02.jpg", rotate: "rotate-3" },
  { src: "/images/galeria/bale/foto-02.jpg", rotate: "-rotate-1" },
  { src: "/images/galeria/krav-maga/foto-03.jpg", rotate: "rotate-2" },
  { src: "/images/galeria/associacao-ceus-abertos/foto-20.jpg", rotate: "-rotate-3" },
  { src: "/images/galeria/celulas/foto-04.jpg", rotate: "rotate-1" },
];

export default function ProjectsMarquee() {
  const linha = [...fotos, ...fotos];

  return (
    <div
      className="relative w-full overflow-hidden py-6"
      aria-hidden="true"
    >
      {/* Sombreado nas bordas, pra suavizar a entrada/saída das fotos */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#ffffff] to-transparent sm:w-32" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#ffffff] to-transparent sm:w-32" />

      <div className="flex w-max animate-marquee gap-5">
        {linha.map((foto, i) => (
          <div
            key={i}
            className={`relative h-48 w-36 shrink-0 overflow-hidden rounded-2xl shadow-lg sm:h-64 sm:w-48 ${foto.rotate}`}
          >
            <Image
              src={foto.src}
              alt=""
              fill
              sizes="192px"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
