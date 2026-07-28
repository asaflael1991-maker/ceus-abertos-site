import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeInView from "@/components/FadeInView";
import PixCopyButton from "@/components/PixCopyButton";

export const metadata: Metadata = {
  title: "Fazer uma doação — Associação Cristã Céus Abertos",
};

export default function DoacoesPage() {
  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-[700px] px-6 py-20 lg:px-12 lg:py-28">
        <FadeInView>
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#1d1d1b]/50">
            Ajude a transformar
          </p>
          <h1 className="mb-6 text-3xl font-medium tracking-tight lg:text-5xl">
            Sua generosidade transforma vidas.
          </h1>
          <p className="mb-10 text-lg leading-relaxed text-[#1d1d1b]/70">
            Cada oferta representa uma oportunidade de levar esperança,
            fortalecer nossos projetos sociais e alcançar mais famílias.
            Mais do que distribuir recursos, seu apoio nos ajuda a construir
            relacionamentos e novas oportunidades.
          </p>
        </FadeInView>

        <FadeInView className="rounded-2xl bg-[#468683] p-8">
          <PixCopyButton pixKey="42.118.366/0001-00" />
        </FadeInView>

        <FadeInView className="mt-14 border-t border-[#1d1d1b]/10 pt-10 text-lg leading-relaxed text-[#1d1d1b]/70">
          <blockquote className="border-l-2 border-[#468683] pl-4 italic">
            &ldquo;Cada um contribua segundo propôs no coração, não com
            tristeza ou por obrigação, porque Deus ama quem dá com
            alegria.&rdquo;
            <footer className="mt-1 not-italic text-sm text-[#1d1d1b]/45">
              2 Coríntios 9:7
            </footer>
          </blockquote>
        </FadeInView>

        <FadeInView className="mt-14 border-t border-[#1d1d1b]/10 pt-10 text-lg leading-relaxed text-[#1d1d1b]/70">
          <h2 className="mb-4 text-sm uppercase tracking-[0.2em] text-[#1d1d1b]/50">
            Outras formas de ajudar
          </h2>
          <ul className="space-y-2">
            <li>• Doação de alimentos, roupas e produtos de higiene</li>
            <li>• Voluntariado nas nossas ações e projetos</li>
            <li>• Parcerias institucionais (empresas, igrejas e ONGs)</li>
          </ul>
        </FadeInView>
      </main>
      <Footer />
    </>
  );
}
