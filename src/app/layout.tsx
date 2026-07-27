import type { Metadata } from "next";
import { Cormorant, Inter } from "next/font/google";
import "./globals.css";
import FloatingDonateButton from "@/components/FloatingDonateButton";

const display = Cormorant({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "900"],
});

export const metadata: Metadata = {
  title: "Associação Cristã Céus Abertos",
  description:
    "Associação Cristã Céus Abertos — ação social em Fortaleza, Ceará.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${display.variable} ${body.variable} antialiased`}>
        {children}
        <FloatingDonateButton />
      </body>
    </html>
  );
}
