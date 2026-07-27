import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeInView from "@/components/FadeInView";
import { areasVoluntariado } from "@/content/institucional";

export const metadata: Metadata = {
  title: "Tornar-se voluntário — Associação Cristã Céus Abertos",
};

/**
 * Formulário enviado via FormSubmit (formsubmit.co) — serviço gratuito
 * que recebe o POST do formulário e encaminha por e-mail, sem precisar
 * de backend, conta ou chave de API. NA PRIMEIRA VEZ que alguém
 * enviar este formulário, chega um e-mail de confirmação em
 * sabrinnegarciar@gmail.com — é só clicar no link pra ativar o
 * recebimento (depois disso, todo envio cai direto na caixa de
 * entrada).
 *
 * Quando o domínio definitivo do site estiver no ar, dá pra adicionar
 * um campo <input type="hidden" name="_next" value="https://SEUDOMINIO/voluntariado/obrigado" />
 * pra redirecionar pra uma página de agradecimento própria — por
 * enquanto, sem isso, o FormSubmit mostra a página de confirmação
 * padrão dele.
 */
export default function VoluntariadoPage() {
  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-[700px] px-6 py-20 lg:px-12 lg:py-28">
        <FadeInView>
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#1d1d1b]/50">
            Participe
          </p>
          <h1 className="mb-6 text-3xl font-medium tracking-tight lg:text-5xl">
            Tornar-se voluntário
          </h1>
          <p className="mb-12 text-lg leading-relaxed text-[#1d1d1b]/70">
            Acreditamos que a transformação social acontece pela união de
            pessoas dispostas a servir. Preencha o formulário abaixo e
            entraremos em contato com você.
          </p>
        </FadeInView>

        <FadeInView>
          <form
            action="https://formsubmit.co/sabrinnegarciar@gmail.com"
            method="POST"
            className="space-y-6"
          >
            <input type="hidden" name="_subject" value="Novo voluntário — site Céus Abertos" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            {/* Honeypot anti-spam: campo invisível — se um robô preencher, o FormSubmit descarta o envio */}
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
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                  E-mail
                </label>
                <input
                  id="email"
                  name="E-mail"
                  type="email"
                  required
                  className="w-full rounded-lg border border-[#1d1d1b]/20 px-4 py-3 text-[#1d1d1b] outline-none focus:border-[#1d1d1b]"
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
                  className="w-full rounded-lg border border-[#1d1d1b]/20 px-4 py-3 text-[#1d1d1b] outline-none focus:border-[#1d1d1b]"
                />
              </div>
            </div>

            <div>
              <label htmlFor="area" className="mb-1.5 block text-sm font-medium">
                Área de interesse
              </label>
              <select
                id="area"
                name="Área de interesse"
                required
                className="w-full rounded-lg border border-[#1d1d1b]/20 bg-[#ffffff] px-4 py-3 text-[#1d1d1b] outline-none focus:border-[#1d1d1b]"
              >
                <option value="">Selecione uma área</option>
                {areasVoluntariado.map((area) => (
                  <option key={area} value={area}>
                    {area}
                  </option>
                ))}
                <option value="Outra">Outra</option>
              </select>
            </div>

            <div>
              <label htmlFor="disponibilidade" className="mb-1.5 block text-sm font-medium">
                Disponibilidade (dias e horários)
              </label>
              <input
                id="disponibilidade"
                name="Disponibilidade"
                type="text"
                placeholder="Ex: fins de semana pela manhã"
                className="w-full rounded-lg border border-[#1d1d1b]/20 px-4 py-3 text-[#1d1d1b] outline-none focus:border-[#1d1d1b]"
              />
            </div>

            <div>
              <label htmlFor="mensagem" className="mb-1.5 block text-sm font-medium">
                Conte um pouco sobre você (opcional)
              </label>
              <textarea
                id="mensagem"
                name="Mensagem"
                rows={4}
                className="w-full rounded-lg border border-[#1d1d1b]/20 px-4 py-3 text-[#1d1d1b] outline-none focus:border-[#1d1d1b]"
              />
            </div>

            <button
              type="submit"
              className="rounded-full bg-[#e5192c] px-8 py-3 text-sm text-[#ffffff] transition-opacity hover:opacity-90"
            >
              Enviar cadastro
            </button>
          </form>
        </FadeInView>
      </main>
      <Footer />
    </>
  );
}
