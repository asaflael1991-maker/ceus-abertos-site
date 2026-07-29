import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeInView from "@/components/FadeInView";
import { projetos } from "@/content/projetos";

export const metadata: Metadata = {
  title: "Faça parte — Formulário — Associação Cristã Céus Abertos",
};

/**
 * Formulário enviado via FormSubmit (formsubmit.co) — mesmo esquema
 * já usado em /voluntariado e /atendimento: sem backend, sem conta,
 * sem chave de API. Os envios vão para sabrinnegarciar@gmail.com.
 */
export default function FacaParteFormularioPage() {
  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-[700px] px-6 py-20 lg:px-12 lg:py-28">
        <FadeInView>
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#1d1d1b]/50">
            Faça parte
          </p>
          <h1 className="mb-6 text-3xl font-medium tracking-tight lg:text-5xl">
            Quero fazer parte
          </h1>
          <p className="mb-12 text-lg leading-relaxed text-[#1d1d1b]/70">
            Conta pra gente em qual projeto você quer se envolver. Nossa
            equipe vai entrar em contato com os próximos passos.
          </p>
        </FadeInView>

        <FadeInView>
          <form
            action="https://formsubmit.co/sabrinnegarciar@gmail.com"
            method="POST"
            className="space-y-6"
          >
            <input type="hidden" name="_subject" value="Quero fazer parte — site Céus Abertos" />
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
                className="w-full rounded-lg border border-[#1d1d1b]/20 px-4 py-3 text-[#1d1d1b] outline-none focus:border-[#468683]"
              />
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                  E-mail
                </label>
                <input
                  id="email"
                  name="E-mail"
                  type="email"
                  required
                  className="w-full rounded-lg border border-[#1d1d1b]/20 px-4 py-3 text-[#1d1d1b] outline-none focus:border-[#468683]"
                />
              </div>
              <div>
                <label htmlFor="telefone" className="mb-1.5 block text-sm font-medium">
                  WhatsApp / Telefone
                </label>
                <input
                  id="telefone"
                  name="Telefone"
                  type="tel"
                  required
                  className="w-full rounded-lg border border-[#1d1d1b]/20 px-4 py-3 text-[#1d1d1b] outline-none focus:border-[#468683]"
                />
              </div>
            </div>

            <div>
              <label htmlFor="projeto" className="mb-1.5 block text-sm font-medium">
                Projeto de interesse
              </label>
              <select
                id="projeto"
                name="Projeto de interesse"
                required
                className="w-full rounded-lg border border-[#1d1d1b]/20 bg-[#ffffff] px-4 py-3 text-[#1d1d1b] outline-none focus:border-[#468683]"
              >
                <option value="">Selecione um projeto</option>
                {projetos.map((p) => (
                  <option key={p.slug} value={p.nome}>
                    {p.nome}
                  </option>
                ))}
                <option value="Células">Células</option>
                <option value="Outro">Outro</option>
              </select>
            </div>

            <div>
              <label htmlFor="idade" className="mb-1.5 block text-sm font-medium">
                Idade (se for pra você) ou nome e idade da criança (se for
                pra um filho)
              </label>
              <input
                id="idade"
                name="Idade / Participante"
                type="text"
                className="w-full rounded-lg border border-[#1d1d1b]/20 px-4 py-3 text-[#1d1d1b] outline-none focus:border-[#468683]"
              />
            </div>

            <div>
              <label htmlFor="mensagem" className="mb-1.5 block text-sm font-medium">
                Quer contar mais alguma coisa? (opcional)
              </label>
              <textarea
                id="mensagem"
                name="Mensagem"
                rows={4}
                className="w-full rounded-lg border border-[#1d1d1b]/20 px-4 py-3 text-[#1d1d1b] outline-none focus:border-[#468683]"
              />
            </div>

            <button
              type="submit"
              className="rounded-full bg-[#468683] px-8 py-3 text-sm text-[#ffffff] transition-opacity hover:opacity-90"
            >
              Enviar inscrição
            </button>
          </form>
        </FadeInView>
      </main>
      <Footer />
    </>
  );
}
