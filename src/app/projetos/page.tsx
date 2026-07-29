import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeInView from "@/components/FadeInView";
import { projetos } from "@/content/projetos";

export const metadata: Metadata = {
  title: "Projetos — Associação Cristã Céus Abertos",
};

export default function ProjetosPage() {
  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-[1200px] px-6 py-20 lg:px-12 lg:py-28">
        <FadeInView>
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#1d1d1b]/50">
            Como atuamos
          </p>
          <h1 className="mb-14 text-3xl font-medium tracking-tight lg:text-5xl">
            Nossos projetos
          </h1>
        </FadeInView>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projetos.map((p, i) => (
            <FadeInView key={p.slug} delay={(i % 3) * 0.08}>
              <Link
                href={`/projetos/${p.slug}`}
                className="block rounded-2xl border border-[#1d1d1b]/10 p-6 transition-colors hover:border-[#468683]/40"
              >
                <h2 className="mb-2 text-xl font-medium">{p.nome}</h2>
                <p className="text-sm text-[#1d1d1b]/60">{p.resumo}</p>
                <span className="mt-4 inline-block text-sm font-medium text-[#468683]">
                  Ver mais →
                </span>
              </Link>
            </FadeInView>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
