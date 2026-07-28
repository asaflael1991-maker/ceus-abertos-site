import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeInView from "@/components/FadeInView";

export const metadata: Metadata = {
  title: "Solicitar atendimento — Associação Cristã Céus Abertos",
};

export default function AtendimentoPage() {
  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-[700px] px-6 py-20 lg:px-12 lg:py-28">
        <FadeInView>
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#1d1d1b]/50">
            Precisa de ajuda?
          </p>
          <h1 className="mb-6 text-3xl font-medium tracking-tight lg:text-5xl">
            Solicitar atendimento
          </h1>
          <p className="mb-12 text-lg leading-relaxed text-[#1d1d1b]/70">
            Se você ou sua família estão passando por um momento difícil,
            preencha o formulário abaixo com o máximo de detalhes possível.
            Nossa equipe vai analisar sua solicitação e entrar em contato.
          </p>
        </FadeInView>

        <FadeInView>
          <form
            action="https://formsubmit.co/sabrinnegarciar@gmail.com"
            method="POST"
            className="space-y-6"
          >
            <input type="hidden" name="_subject" value="Solicitação de atendimento — site Céus Abertos" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="text" name="_honey" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

            <div>
              <label htmlFor="nome" className="mb-1.5 block text-sm font-medium">
                Nome completo
              </label>
              <input
                id="nome"
                name="Nome"
                type="text"
                required
                className="w-full rounded-lg border border-[#1d1d1b]/20 px-4 py-3 text-[#1d1d1b] outline-none focus:border-[#1d1d1b]"
              />
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="telefone" className="mb-1.5 block text-sm font-medium">
                  WhatsApp / Telefone
                </label>
                <input
                  id="telefone"
                  name="Telefone"
                  type="tel"
                  required
                  className="w-full rounded-lg border border-[#1d1d1b]/20 px-4 py-3 text-[#1d1d1b] outline-none focus:border-[#1d1d1b]"
                />
              </div>
              <div>
                <label htmlFor="bairro" className="mb-1.5 block text-sm font-medium">
                  Bairro / Cidade
                </label>
                <input
                  id="bairro"
                  name="Bairro"
                  type="text"
                  required
                  className="w-full rounded-lg border border-[#1d1d1b]/20 px-4 py-3 text-[#1d1d1b] outline-none focus:border-[#1d1d1b]"
                />
              </div>
            </div>

            <div>
              <label htmlFor="quantasPessoas" className="mb-1.5 block text-sm font-medium">
                Quantas pessoas moram na sua casa?
              </label>
              <input
                id="quantasPessoas"
                name="Pessoas na casa"
                type="text"
                className="w-full rounded-lg border border-[#1d1d1b]/20 px-4 py-3 text-[#1d1d1b] outline-none focus:border-[#1d1d1b]"
              />
            </div>

            <div>
              <label htmlFor="situacao" className="mb-1.5 block text-sm font-medium">
                Conte um pouco sobre a sua situação e o tipo de ajuda que
                você precisa
              </label>
              <textarea
                id="situacao"
                name="Situação e pedido"
                rows={5}
                required
                className="w-full rounded-lg border border-[#1d1d1b]/20 px-4 py-3 text-[#1d1d1b] outline-none focus:border-[#1d1d1b]"
              />
            </div>

            <button
              type="submit"
              className="rounded-full bg-[#468683] px-8 py-3 text-sm text-[#ffffff] transition-opacity hover:opacity-90"
            >
              Enviar solicitação
            </button>

            <p className="text-sm text-[#1d1d1b]/50">
              Suas informações são tratadas com respeito e privacidade, e
              usadas apenas para o atendimento da sua solicitação.
            </p>
          </form>
        </FadeInView>
      </main>
      <Footer />
    </>
  );
}
