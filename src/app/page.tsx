import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyPhoto from "@/components/StickyPhoto";
import VerseReveal from "@/components/VerseReveal";
import { causaAtendida, areasDeAtuacao } from "@/content/institucional";

/**
 * Home — sequência de "capítulos" com foto em tela cheia atrás de
 * cada seção, inspirada no site da Igreja da Cidade
 * (igrejadacidade.org.br): número do capítulo + etiqueta + título +
 * texto curto, ancorados na base da foto.
 *
 * Como só temos 4 fotos da ONG hoje, elas se repetem entre os
 * capítulos — quando houver mais fotos, é só trocar os `src` abaixo.
 */
export default function HomePage() {
  return (
    <>
      <Navbar />

      <StickyPhoto
        src="/images/hero/peoples.png"
        alt="Voluntários da Associação Cristã Céus Abertos atendendo pessoas em situação de rua"
      >
        <VerseReveal
          text="2 Coríntios 9:7"
          className="text-4xl text-white sm:text-6xl lg:text-8xl"
        />
      </StickyPhoto>

      {/* Capítulo 01 — Quem somos */}
      <StickyPhoto
        src="/images/galeria/foto-01.jpg"
        alt="Voluntários organizando doações no Mercado Solidário"
        imageWidth={960}
        imageHeight={1280}
      >
        <p className="mb-2 text-xs tracking-[0.2em] text-white/50">
          01 — Céus Abertos
        </p>
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-[#f8a800]">
          Quem somos
        </p>
        <h2 className="mb-5 max-w-2xl text-2xl font-medium tracking-tight text-white sm:text-3xl lg:text-5xl">
          Uma associação a serviço da comunidade.
        </h2>
        <p className="mb-6 max-w-xl text-sm text-white/85 lg:text-lg">
          Cuidamos de famílias, crianças, adolescentes, jovens e pessoas em
          situação de vulnerabilidade, oferecendo alimento, acolhimento e
          novas oportunidades em Fortaleza, Ceará.
        </p>
        <Link
          href="/quem-somos"
          className="inline-block rounded-full bg-white px-6 py-3 text-sm text-[#1d1d1b] transition-opacity hover:opacity-90"
        >
          Conheça nossa história
        </Link>
      </StickyPhoto>

      {/* Capítulo 02 — Causa atendida */}
      <StickyPhoto
        src="/images/galeria/foto-02.jpg"
        alt="Atendimento a famílias no Mercado Solidário"
        imageWidth={960}
        imageHeight={1280}
      >
        <p className="mb-2 text-xs tracking-[0.2em] text-white/50">
          02 — Céus Abertos
        </p>
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-[#f8a800]">
          Causa atendida
        </p>
        <h2 className="mb-5 max-w-2xl text-2xl font-medium tracking-tight text-white sm:text-3xl lg:text-5xl">
          Situações de vulnerabilidade que enfrentamos todos os dias.
        </h2>
        <p className="max-w-xl text-sm text-white/85 lg:text-lg">
          {causaAtendida.slice(0, 5).join(", ")} e muito mais — atuamos tanto
          na urgência quanto na prevenção.
        </p>
      </StickyPhoto>

      {/* Capítulo 03 — Áreas de atuação */}
      <StickyPhoto
        src="/images/mercado/mercado.jpg"
        alt="Voluntários organizando doações de alimentos no Mercado Solidário"
        imageWidth={1871}
        imageHeight={822}
      >
        <p className="mb-2 text-xs tracking-[0.2em] text-white/50">
          03 — Céus Abertos
        </p>
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-[#f8a800]">
          Como atuamos
        </p>
        <h2 className="mb-5 max-w-2xl text-2xl font-medium tracking-tight text-white sm:text-3xl lg:text-5xl">
          Nossas frentes de atuação.
        </h2>
        <p className="mb-6 max-w-xl text-sm text-white/85 lg:text-lg">
          {areasDeAtuacao
            .slice(0, 4)
            .map((a) => a.title)
            .join(" · ")}{" "}
          e mais.
        </p>
        <Link
          href="/areas-de-atuacao"
          className="inline-block rounded-full bg-white px-6 py-3 text-sm text-[#1d1d1b] transition-opacity hover:opacity-90"
        >
          Ver todas as áreas de atuação
        </Link>
      </StickyPhoto>

      {/* Capítulo 04 — Participe */}
      <StickyPhoto
        src="/images/hero/peoples.png"
        alt="Voluntários da Associação Cristã Céus Abertos atendendo pessoas em situação de rua"
      >
        <p className="mb-2 text-xs tracking-[0.2em] text-white/50">
          04 — Céus Abertos
        </p>
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-[#f8a800]">
          Participe
        </p>
        <h2 className="mb-5 max-w-2xl text-2xl font-medium tracking-tight text-white sm:text-3xl lg:text-5xl">
          Você pode fazer parte dessa história.
        </h2>
        <p className="mb-6 max-w-xl text-sm text-white/85 lg:text-lg">
          Seja doando, servindo como voluntário ou levando um pedido de
          ajuda até nós — cada gesto importa.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/doacoes"
            className="rounded-full bg-[#e5192c] px-5 py-2.5 text-sm text-white transition-opacity hover:opacity-90 lg:px-6 lg:py-3"
          >
            Fazer uma doação
          </Link>
          <Link
            href="/voluntariado"
            className="rounded-full border border-white/40 px-5 py-2.5 text-sm text-white transition-colors hover:bg-white/10 lg:px-6 lg:py-3"
          >
            Tornar-se voluntário
          </Link>
          <Link
            href="/atendimento"
            className="rounded-full border border-white/40 px-5 py-2.5 text-sm text-white transition-colors hover:bg-white/10 lg:px-6 lg:py-3"
          >
            Solicitar atendimento
          </Link>
        </div>
      </StickyPhoto>

      <Footer />
    </>
  );
}
