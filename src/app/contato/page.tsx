import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeInView from "@/components/FadeInView";

export const metadata: Metadata = {
  title: "Contato — Associação Cristã Céus Abertos",
};

export default function ContatoPage() {
  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-[700px] px-6 py-20 lg:px-12 lg:py-28">
        <FadeInView>
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#1d1d1b]/50">
            Fale conosco
          </p>
          <h1 className="mb-6 text-3xl font-medium tracking-tight lg:text-5xl">
            Contato
          </h1>
          <p className="mb-12 text-lg leading-relaxed text-[#1d1d1b]/70">
            Ficou com alguma dúvida, quer propor uma parceria ou apenas
            conhecer melhor nosso trabalho? Fale com a gente.
          </p>
        </FadeInView>

        <FadeInView className="space-y-6 text-lg text-[#1d1d1b]/70">
          <div>
            <h2 className="mb-1 text-sm uppercase tracking-[0.2em] text-[#1d1d1b]/50">
              Endereço
            </h2>
            <p>
              Avenida Major Assis, nº 1590, Jardim Guanabara
              <br />
              Fortaleza – Ceará
            </p>
          </div>

          <div>
            <h2 className="mb-1 text-sm uppercase tracking-[0.2em] text-[#1d1d1b]/50">
              E-mail
            </h2>
            <a
              href="mailto:sabrinnegarciar@gmail.com"
              className="text-[#468683] hover:opacity-80"
            >
              sabrinnegarciar@gmail.com
            </a>
          </div>

          <div>
            <h2 className="mb-1 text-sm uppercase tracking-[0.2em] text-[#1d1d1b]/50">
              CNPJ
            </h2>
            <p>42.118.366/0001-00</p>
          </div>
        </FadeInView>

        <FadeInView className="mt-14 flex flex-wrap gap-4 border-t border-[#1d1d1b]/10 pt-10">
          <Link
            href="/voluntariado"
            className="rounded-full bg-[#468683] px-6 py-3 text-sm text-[#ffffff] transition-opacity hover:opacity-90"
          >
            Tornar-se voluntário
          </Link>
          <Link
            href="/atendimento"
            className="rounded-full border border-[#468683]/40 px-6 py-3 text-sm text-[#468683] transition-colors hover:bg-[#468683]/10"
          >
            Solicitar atendimento
          </Link>
        </FadeInView>
      </main>
      <Footer />
    </>
  );
}
