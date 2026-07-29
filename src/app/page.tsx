import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import ProjectsMarquee from "@/components/ProjectsMarquee";
import Hero from "@/components/Hero";
import FloatingImage from "@/components/FloatingImage";
import { TagList } from "@/components/Lists";
import { causaAtendida, areasDeAtuacao } from "@/content/institucional";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <Hero />

      <Section
        id="intro"
        number="01"
        eyebrow="Quem somos"
        title="Uma associação a serviço da comunidade."
      >
        <div className="grid items-start gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          <div className="max-w-3xl space-y-5 text-lg leading-relaxed text-[#1d1d1b]/70">
            <p>
              A Associação Cristã Céus Abertos é uma organização social cristã,
              sem fins lucrativos, sediada em Fortaleza, Ceará. Cuidamos de
              famílias, crianças, adolescentes, jovens e pessoas em situação de
              vulnerabilidade, oferecendo alimento, acolhimento e novas
              oportunidades.
            </p>
            <Link
              href="/quem-somos"
              className="inline-block rounded-full border border-[#468683]/40 px-6 py-3 text-sm text-[#468683] transition-colors hover:bg-[#468683]/10"
            >
              Conheça nossa história
            </Link>
          </div>

          <FloatingImage
            src="/images/home/crianca.png"
            alt="Criança abraçada a uma nuvem em formato de coração"
            width={1682}
            height={1682}
            className="mx-auto w-48 sm:w-64 lg:ml-auto lg:mr-0 lg:w-72"
          />
        </div>
      </Section>

      <Section
        id="causa"
        number="02"
        eyebrow="Causa atendida"
        title="Situações de vulnerabilidade social que enfrentamos todos os dias."
        tone="inverted"
      >
        <TagList items={causaAtendida} />
      </Section>

      <Section
        id="areas"
        number="03"
        eyebrow="Como atuamos"
        title="Nossas frentes de atuação."
      >
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {areasDeAtuacao.slice(0, 6).map((a) => (
            <div key={a.title}>
              <h3 className="mb-1 font-medium">{a.title}</h3>
              <p className="text-sm text-[#1d1d1b]/60">{a.text}</p>
            </div>
          ))}
        </div>
        <Link
          href="/areas-de-atuacao"
          className="mt-8 inline-block text-sm font-medium text-[#468683] hover:opacity-80"
        >
          Ver todas as áreas de atuação →
        </Link>
      </Section>

      <div className="relative aspect-[21/9] w-full sm:aspect-[3/1]">
        <Image
          src="/images/home/participe.jpg"
          alt="Voluntária entregando alimento a uma pessoa em situação de rua"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <Section
        id="cta"
        number="04"
        eyebrow="Participe"
        title="Você pode fazer parte dessa história."
        tone="accent"
      >
        <div className="max-w-3xl space-y-6 text-lg leading-relaxed text-[#1d1d1b]/75">
          <p>
            Seja doando, servindo como voluntário ou levando um pedido de
            ajuda até nós — cada gesto importa.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/doacoes"
              className="rounded-full bg-[#468683] px-6 py-3 text-sm text-[#ffffff] transition-opacity hover:opacity-90"
            >
              Fazer uma doação
            </Link>
            <Link
              href="/voluntariado"
              className="rounded-full border border-[#468683]/40 px-6 py-3 text-sm text-[#468683] transition-colors hover:bg-[#468683]/10"
            >
              Tornar-se voluntário
            </Link>
            <Link
              href="/atendimento"
              className="rounded-full border border-[#468683]/40 px-6 py-3 text-sm text-[#468683] transition-colors hover:bg-[#468683]/10"
            >
              Solicitar atendimento
            </Link>
          </div>
        </div>
      </Section>

      <Section
        id="faca-parte"
        number="05"
        eyebrow="Faça parte"
        title="Faça parte de um projeto da Céus Abertos!"
      >
        <div className="max-w-2xl space-y-6 text-lg leading-relaxed text-[#1d1d1b]/70">
          <p>
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
        </div>
      </Section>

      <div className="border-b border-[#1d1d1b]/10 bg-[#ffffff] pb-16">
        <ProjectsMarquee />
      </div>

      <Footer />
    </>
  );
}
