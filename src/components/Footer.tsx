import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#468683] text-[#ffffff]">
      <div className="mx-auto max-w-[1440px] px-6 py-16 lg:px-12 lg:py-24">
        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#ffffff]/50">
          Vamos juntos
        </p>
        <h2 className="max-w-3xl text-3xl font-medium tracking-tight lg:text-5xl">
          Manter os céus abertos sobre a comunidade, com amor, cuidado e
          serviço.
        </h2>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/doacoes"
            className="rounded-full bg-[#ffffff] px-6 py-3 text-sm text-[#468683] transition-opacity hover:opacity-90"
          >
            Fazer uma doação
          </Link>
          <Link
            href="/voluntariado"
            className="rounded-full border border-[#ffffff]/25 px-6 py-3 text-sm transition-colors hover:bg-[#ffffff]/10"
          >
            Tornar-se voluntário
          </Link>
          <Link
            href="/atendimento"
            className="rounded-full border border-[#ffffff]/25 px-6 py-3 text-sm transition-colors hover:bg-[#ffffff]/10"
          >
            Solicitar atendimento
          </Link>
        </div>
      </div>

      <div className="border-t border-[#ffffff]/10 px-6 py-8 lg:px-12">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-6 text-sm text-[#ffffff]/50 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <p className="font-medium text-[#ffffff]/80">
              Associação Cristã Céus Abertos
            </p>
            <p className="mt-1">
              Avenida Major Assis, nº 1590, Jardim Guanabara — Fortaleza, CE
            </p>
            <p>CNPJ 42.118.366/0001-00</p>
            <p className="mt-3">
              &copy; {new Date().getFullYear()} Associação Cristã Céus
              Abertos. Todos os direitos reservados.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/quem-somos" className="hover:text-[#ffffff]">
              Quem somos
            </Link>
            <Link href="/areas-de-atuacao" className="hover:text-[#ffffff]">
              Áreas de atuação
            </Link>
            <Link href="/galeria" className="hover:text-[#ffffff]">
              Galeria
            </Link>
            <Link href="/contato" className="hover:text-[#ffffff]">
              Contato
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
