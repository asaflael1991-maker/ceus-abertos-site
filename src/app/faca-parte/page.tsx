import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeInView from "@/components/FadeInView";
import ProjectsMarquee from "@/components/ProjectsMarquee";

export const metadata: Metadata = {
  title: "Faça parte — Associação Cristã Céus Abertos",
};

export default function FacaPartePage() {
  return (
    <>
      <Navbar />

      <main className="py-20 lg:py-28">
        <FadeInView className="mx-auto max-w-3xl px-6 text-center lg:px-12">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#1d1d1b]/50">
            Faça parte
          </p>
          <h1 className="mb-6 text-3xl font-medium tracking-tight lg:text-5xl">
            Faça parte de um projeto da Céus Abertos!
          </h1>
          <p className="mb-10 text-lg text-[#1d1d1b]/70">
            Do Mercado Solidário ao Krav Maga, do Balé às Células — nossos
            projetos são um ambiente perfeito pra você servir, crescer e
            estar perto de quem também acredita nessa missão.
          </p>

          <Link
            href="/faca-parte/formulario"
            className="inline-flex items-center gap-3 rounded-full bg-[#ffffff] py-2 pl-2 pr-6 text-sm shadow-md ring-1 ring-[#1d1d1b]/10 transition-shadow hover:shadow-lg"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#468683] text-[#ffffff]">
              <svg viewBox="0 0 20 20" className="h-4 w-4 fill-current">
                <path d="M2 10a1 1 0 0 1 1-1h11.6l-3.3-3.3a1 1 0 1 1 1.4-1.4l5 5a1 1 0 0 1 0 1.4l-5 5a1 1 0 0 1-1.4-1.4l3.3-3.3H3a1 1 0 0 1-1-1Z" />
              </svg>
            </span>
            <span className="font-medium text-[#1d1d1b]">
              Quero fazer parte
            </span>
          </Link>
        </FadeInView>

        <FadeInView className="mt-16">
          <ProjectsMarquee />
        </FadeInView>
      </main>

      <Footer />
    </>
  );
}
