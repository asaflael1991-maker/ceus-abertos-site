import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeInView from "@/components/FadeInView";
import { projetos } from "@/content/projetos";
import { galeriaCategorias } from "@/content/institucional";

export function generateStaticParams() {
  return projetos.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const projeto = projetos.find((p) => p.slug === slug);
  return {
    title: projeto
      ? `${projeto.nome} — Associação Cristã Céus Abertos`
      : "Projeto — Associação Cristã Céus Abertos",
  };
}

export default async function ProjetoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const projeto = projetos.find((p) => p.slug === slug);
  if (!projeto) notFound();

  const categoria = galeriaCategorias.find(
    (c) => c.label === projeto.galeriaLabel,
  );

  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-[900px] px-6 py-20 lg:px-12 lg:py-28">
        <FadeInView>
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#1d1d1b]/50">
            Projetos
          </p>
          <h1 className="mb-6 text-3xl font-medium tracking-tight lg:text-5xl">
            {projeto.nome}
          </h1>
          <p className="mb-10 text-lg leading-relaxed text-[#1d1d1b]/70">
            {projeto.resumo}
          </p>
        </FadeInView>

        {projeto.video && (
          <FadeInView className="mb-12">
            <video
              src={projeto.video}
              controls
              playsInline
              className="mx-auto max-h-[70vh] w-full rounded-2xl bg-[#1d1d1b] sm:max-w-sm"
            />
          </FadeInView>
        )}

        <FadeInView className="space-y-5 text-lg leading-relaxed text-[#1d1d1b]/70">
          {projeto.descricao.map((paragrafo, i) => (
            <p key={i}>{paragrafo}</p>
          ))}
        </FadeInView>

        {(projeto.publico || projeto.responsavel) && (
          <FadeInView className="mt-10 grid gap-6 border-t border-[#1d1d1b]/10 pt-8 sm:grid-cols-2">
            {projeto.publico && (
              <div>
                <p className="mb-1 text-xs uppercase tracking-[0.2em] text-[#1d1d1b]/45">
                  Público
                </p>
                <p className="text-[#1d1d1b]/80">{projeto.publico}</p>
              </div>
            )}
            {projeto.responsavel && (
              <div>
                <p className="mb-1 text-xs uppercase tracking-[0.2em] text-[#1d1d1b]/45">
                  Responsável
                </p>
                <p className="text-[#1d1d1b]/80">
                  {projeto.responsavel}
                  {projeto.rede && (
                    <span className="text-[#1d1d1b]/50"> · {projeto.rede}</span>
                  )}
                </p>
              </div>
            )}
          </FadeInView>
        )}

        {categoria && categoria.fotos.length > 0 && (
          <div className="mt-16 border-t border-[#1d1d1b]/10 pt-12">
            <FadeInView>
              <h2 className="mb-6 text-sm uppercase tracking-[0.2em] text-[#1d1d1b]/50">
                Galeria
              </h2>
            </FadeInView>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {categoria.fotos.map((g, i) => (
                <FadeInView key={g.src} delay={Math.min(i * 0.05, 0.5)}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                    <Image
                      src={g.src}
                      alt={g.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
