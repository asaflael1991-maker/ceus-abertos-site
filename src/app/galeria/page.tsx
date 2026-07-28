import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeInView from "@/components/FadeInView";
import { galeria } from "@/content/institucional";

export const metadata: Metadata = {
  title: "Galeria — Associação Cristã Céus Abertos",
};

export default function GaleriaPage() {
  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-[1200px] px-6 py-20 lg:px-12 lg:py-28">
        <FadeInView>
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#1d1d1b]/50">
            Registros
          </p>
          <h1 className="mb-12 text-3xl font-medium tracking-tight lg:text-5xl">
            Galeria
          </h1>
        </FadeInView>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galeria.map((g, i) => (
            <FadeInView key={g.src} delay={Math.min(i * 0.06, 0.6)}>
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
      </main>
      <Footer />
    </>
  );
}
