import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeInView from "@/components/FadeInView";
import { TagList, BulletList } from "@/components/Lists";
import {
  areasDeAtuacao,
  publicoBeneficiado,
  objetivosEspecificos,
  impactoEsperado,
} from "@/content/institucional";

export const metadata: Metadata = {
  title: "Áreas de atuação — Associação Cristã Céus Abertos",
};

export default function AreasDeAtuacaoPage() {
  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-[900px] px-6 py-20 lg:px-12 lg:py-28">
        <FadeInView>
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#1d1d1b]/50">
            Como atuamos
          </p>
          <h1 className="mb-6 text-3xl font-medium tracking-tight lg:text-5xl">
            Áreas de atuação
          </h1>
          <p className="mb-12 text-lg leading-relaxed text-[#1d1d1b]/70">
            A Associação Cristã Céus Abertos pretende desenvolver suas ações
            nas seguintes áreas, sempre priorizando o cuidado com famílias e
            pessoas em situação de vulnerabilidade.
          </p>
        </FadeInView>

        <FadeInView className="grid gap-8 sm:grid-cols-2">
          {areasDeAtuacao.map((a) => (
            <div key={a.title}>
              <h3 className="mb-1 font-medium">{a.title}</h3>
              <p className="text-sm text-[#1d1d1b]/60">{a.text}</p>
            </div>
          ))}
        </FadeInView>

        <FadeInView className="mt-14 border-t border-[#1d1d1b]/10 pt-10">
          <h2 className="mb-4 text-sm uppercase tracking-[0.2em] text-[#1d1d1b]/50">
            Público beneficiado
          </h2>
          <TagList items={publicoBeneficiado} />
        </FadeInView>

        <FadeInView className="mt-14 border-t border-[#1d1d1b]/10 pt-10">
          <h2 className="mb-4 text-sm uppercase tracking-[0.2em] text-[#1d1d1b]/50">
            Objetivo geral
          </h2>
          <p className="mb-10 text-lg leading-relaxed text-[#1d1d1b]/70">
            Promover assistência, proteção, desenvolvimento e inclusão social
            de pessoas em situação de vulnerabilidade, contribuindo para a
            melhoria de sua qualidade de vida e para o fortalecimento da
            comunidade.
          </p>

          <h2 className="mb-4 text-sm uppercase tracking-[0.2em] text-[#1d1d1b]/50">
            Objetivos específicos
          </h2>
          <BulletList items={objetivosEspecificos} />
        </FadeInView>

        <FadeInView className="mt-14 border-t border-[#1d1d1b]/10 pt-10">
          <h2 className="mb-4 text-sm uppercase tracking-[0.2em] text-[#1d1d1b]/50">
            Impacto social esperado
          </h2>
          <BulletList items={impactoEsperado} />
        </FadeInView>

        <FadeInView className="mt-14 flex flex-wrap gap-4 border-t border-[#1d1d1b]/10 pt-10">
          <Link
            href="/voluntariado"
            className="rounded-full bg-[#468683] px-6 py-3 text-sm text-[#ffffff] transition-opacity hover:opacity-90"
          >
            Tornar-se voluntário
          </Link>
          <Link
            href="/doacoes"
            className="rounded-full border border-[#468683]/40 px-6 py-3 text-sm text-[#468683] transition-colors hover:bg-[#468683]/10"
          >
            Fazer uma doação
          </Link>
        </FadeInView>
      </main>
      <Footer />
    </>
  );
}
