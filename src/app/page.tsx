import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import ScrollVideoHero from "@/components/ScrollVideoHero";
import VerseReveal from "@/components/VerseReveal";
import { TagList } from "@/components/Lists";
import { causaAtendida, areasDeAtuacao } from "@/content/institucional";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <ScrollVideoHero />

      <div className="border-b border-[#1d1d1b]/10 px-6 py-20 text-center lg:px-12 lg:py-28">
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#1d1d1b]/50">
          Associação Cristã Céus Abertos
        </p>
        <VerseReveal
          text="2 Coríntios 9:7"
          className="mx-auto text-3xl text-[#1d1d1b] sm:text-5xl lg:text-7xl"
        />
        <p className="mx-auto mt-6 max-w-xl text-lg text-[#1d1d1b]/70">
          Cuidamos de famílias, crianças e pessoas em situação de
          vulnerabilidade, levando alimento, acolhimento e esperança em
          Fortaleza, Ceará.
        </p>
      </div>

      <Section
        id="intro"
        number="01"
        eyebrow="Quem somos"
        title="Uma associação a serviço da comunidade."
      >
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
            className="inline-block rounded-full border border-[#1d1d1b]/20 px-6 py-3 text-sm transition-colors hover:bg-[#1d1d1b] hover:text-[#ffffff]"
          >
            Conheça nossa história
          </Link>
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
          className="mt-8 inline-block text-sm font-medium text-[#e5192c] hover:opacity-80"
        >
          Ver todas as áreas de atuação →
        </Link>
      </Section>

      <Section
        id="cta"
        number="04"
        eyebrow="Participe"
        title="Você pode fazer parte dessa história."
        tone="accent"
        eyebrowColor="text-[#1d1d1b]"
      >
        <div className="max-w-3xl space-y-6 text-lg leading-relaxed text-[#ffffff]/90">
          <p>
            Seja doando, servindo como voluntário ou levando um pedido de
            ajuda até nós — cada gesto importa.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/doacoes"
              className="rounded-full bg-[#ffffff] px-6 py-3 text-sm text-[#1d1d1b] transition-opacity hover:opacity-90"
            >
              Fazer uma doação
            </Link>
            <Link
              href="/voluntariado"
              className="rounded-full border border-[#ffffff]/40 px-6 py-3 text-sm text-[#ffffff] transition-colors hover:bg-[#ffffff]/10"
            >
              Tornar-se voluntário
            </Link>
            <Link
              href="/atendimento"
              className="rounded-full border border-[#ffffff]/40 px-6 py-3 text-sm text-[#ffffff] transition-colors hover:bg-[#ffffff]/10"
            >
              Solicitar atendimento
            </Link>
          </div>
        </div>
      </Section>

      <Footer />
    </>
  );
}
