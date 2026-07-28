import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeInView from "@/components/FadeInView";
import { TagList, BulletList } from "@/components/Lists";
import { missao, visaoFutura, valores } from "@/content/institucional";

export const metadata: Metadata = {
  title: "Quem somos — Associação Cristã Céus Abertos",
};

export default function QuemSomosPage() {
  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-[900px] px-6 py-20 lg:px-12 lg:py-28">
        <FadeInView>
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#1d1d1b]/50">
            Quem somos
          </p>
          <h1 className="mb-6 text-3xl font-medium tracking-tight lg:text-5xl">
            Associação Cristã Céus Abertos
          </h1>
        </FadeInView>

        <FadeInView className="space-y-5 text-lg leading-relaxed text-[#1d1d1b]/70">
          <p>
            A Associação Cristã Céus Abertos é uma organização social cristã,
            sem fins lucrativos, sediada na cidade de Fortaleza, Ceará. A
            instituição atua no atendimento de famílias em situação de
            vulnerabilidade social, crianças, adolescentes, jovens e pessoas
            necessitadas da comunidade.
          </p>
          <p>
            A Associação nasceu com o propósito de cuidar de pessoas de
            maneira integral, atendendo necessidades sociais, educacionais,
            emocionais, culturais e espirituais. Por meio de ações práticas,
            buscamos levar dignidade, esperança, proteção e novas
            oportunidades para aqueles que mais precisam.
          </p>
          <p className="text-base text-[#1d1d1b]/55">
            Avenida Major Assis, nº 1590, bairro Jardim Guanabara, Fortaleza
            – Ceará
            <br />
            CNPJ 42.118.366/0001-00
          </p>
        </FadeInView>

        {/* História */}
        <FadeInView className="mt-14 space-y-5 border-t border-[#1d1d1b]/10 pt-10 text-lg leading-relaxed text-[#1d1d1b]/70">
          <h2 className="mb-2 text-sm uppercase tracking-[0.2em] text-[#1d1d1b]/50">
            História do projeto
          </h2>
          <p>
            A história da Associação Cristã Céus Abertos começou há mais de
            dez anos, antes mesmo de sua formalização jurídica. Naquele
            período, um grupo de voluntários já desenvolvia, de maneira
            independente e não oficial, diversas ações de assistência à
            comunidade — entre elas o projeto Mão Amiga, criado para atender
            pessoas em situação de rua.
          </p>
          <p>
            Durante as madrugadas, especialmente nos períodos mais frios, os
            voluntários percorriam as ruas distribuindo marmitas, sopas,
            roupas, cobertores e produtos de higiene pessoal. Mais do que
            entregar alimentos, o projeto oferecia acolhimento, atenção,
            cuidado e uma palavra de esperança às pessoas que viviam em
            condições extremamente vulneráveis.
          </p>
          <p>
            Com o passar do tempo, o trabalho foi crescendo: a equipe passou
            também a distribuir cestas básicas para famílias carentes da
            comunidade, ampliando o atendimento para crianças, jovens,
            idosos, mães solo, desempregados e famílias em situação de
            insegurança alimentar.
          </p>
          <p>
            Em 2021 aconteceu a formalização da instituição, com a abertura
            do CNPJ, oficializando o nascimento da Associação Cristã Céus
            Abertos — um passo importante para o fortalecimento do trabalho
            social, permitindo desenvolver parcerias, receber doações,
            apresentar projetos e ampliar sua capacidade de atendimento.
          </p>
          <p className="font-medium text-[#1d1d1b]">
            A Associação Cristã Céus Abertos é, portanto, o resultado de mais
            de uma década de serviço voluntário, fé, solidariedade,
            compromisso social e amor ao próximo.
          </p>
        </FadeInView>

        {/* Missão */}
        <FadeInView className="mt-14 border-t border-[#1d1d1b]/10 pt-10">
          <h2 className="mb-4 text-sm uppercase tracking-[0.2em] text-[#1d1d1b]/50">
            Nossa missão
          </h2>
          <p className="mb-6 text-lg leading-relaxed text-[#1d1d1b]/70">
            Promover o desenvolvimento humano e social por meio de ações que
            contribuam para prevenir e aliviar a pobreza, proteger pessoas
            em situação de vulnerabilidade e fortalecer os vínculos
            familiares e comunitários.
          </p>
          <BulletList items={missao} />
        </FadeInView>

        {/* Visão */}
        <FadeInView className="mt-14 border-t border-[#1d1d1b]/10 pt-10">
          <h2 className="mb-4 text-sm uppercase tracking-[0.2em] text-[#1d1d1b]/50">
            Nossa visão
          </h2>
          <p className="mb-6 text-lg leading-relaxed text-[#1d1d1b]/70">
            Ser uma instituição reconhecida pelo compromisso com a
            transformação social, pelo cuidado com as pessoas e pela
            promoção de oportunidades. Sonhamos em estruturar, futuramente:
          </p>
          <TagList items={visaoFutura} />
        </FadeInView>

        {/* Valores */}
        <FadeInView className="mt-14 border-t border-[#1d1d1b]/10 pt-10">
          <h2 className="mb-2 text-sm uppercase tracking-[0.2em] text-[#1d1d1b]/50">
            Nossos valores
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-[#1d1d1b]/70">
            A atuação da Associação Cristã Céus Abertos está fundamentada em
            princípios cristãos, sociais e éticos que orientam todas as
            nossas ações.
          </p>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {valores.map((v) => (
              <div key={v.title}>
                <h3 className="mb-1 font-medium">{v.title}</h3>
                <p className="text-sm text-[#1d1d1b]/60">{v.text}</p>
              </div>
            ))}
          </div>
        </FadeInView>

        {/* Declaração institucional */}
        <FadeInView className="mt-14 border-t border-[#1d1d1b]/10 pt-10">
          <h2 className="mb-4 text-sm uppercase tracking-[0.2em] text-[#1d1d1b]/50">
            Declaração institucional
          </h2>
          <p className="text-lg leading-relaxed text-[#1d1d1b]/70">
            A Associação Cristã Céus Abertos nasceu do desejo de servir e do
            compromisso de transformar a fé em atitudes concretas. Cremos
            que pequenas ações podem produzir grandes mudanças.
          </p>
          <blockquote className="mt-8 border-l-2 border-[#f8a800] pl-4 text-xl italic text-[#1d1d1b]/70">
            &ldquo;Nossa missão é manter os céus abertos sobre a comunidade
            por meio do amor, do cuidado, da solidariedade e do
            serviço.&rdquo;
          </blockquote>
        </FadeInView>
      </main>
      <Footer />
    </>
  );
}
