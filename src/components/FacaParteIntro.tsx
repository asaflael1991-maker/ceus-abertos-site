import Link from "next/link";
import FadeInView from "@/components/FadeInView";
import PhotoCarousel from "@/components/PhotoCarousel";

const fotosCarrossel = [
  {
    src: "/images/galeria/mercado-solidario/foto-01.jpg",
    alt: "Mercado Solidário",
  },
  {
    src: "/images/galeria/associacao-ceus-abertos/foto-01.jpg",
    alt: "Associação Céus Abertos",
  },
  {
    src: "/images/galeria/krav-maga/foto-01.jpg",
    alt: "Krav Maga",
  },
  {
    src: "/images/galeria/celulas/foto-01.jpg",
    alt: "Células",
  },
  {
    src: "/images/galeria/bale/foto-01.jpg",
    alt: "Balé",
  },
];

/**
 * FacaParteIntro — bloco "Faça parte", usado tanto na Home (como
 * seção) quanto no topo da página própria `/faca-parte`. Réplica do
 * modelo de referência: título grande, texto curto, botão de CTA e,
 * embaixo, um carrossel de fotos arrastável (só enfeite).
 */
export default function FacaParteIntro({
  ctaHref = "/faca-parte",
  ctaLabel = "Quero participar",
}: {
  ctaHref?: string;
  ctaLabel?: string;
}) {
  return (
    <div className="border-t border-[#1d1d1b]/10 py-20 lg:py-28">
      <FadeInView className="mx-auto max-w-[900px] px-6 text-center lg:px-12">
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#468683]">
          Faça parte
        </p>
        <h2 className="mb-6 text-4xl font-medium tracking-tight lg:text-6xl">
          Faça parte de um projeto da Céus Abertos!
        </h2>
        <p className="mx-auto mb-8 max-w-xl text-lg text-[#1d1d1b]/70">
          Nossos projetos são um jeito prático de servir, aprender algo
          novo e fazer parte da nossa comunidade.
        </p>
        <Link
          href={ctaHref}
          className="inline-flex items-center gap-3 rounded-full bg-[#f4f2ec] py-2 pl-2 pr-6 text-sm font-medium text-[#1d1d1b] transition-opacity hover:opacity-90"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#468683] text-[#ffffff]">
            →
          </span>
          {ctaLabel}
        </Link>
      </FadeInView>

      <div className="mt-12">
        <PhotoCarousel photos={fotosCarrossel} />
      </div>
    </div>
  );
}
