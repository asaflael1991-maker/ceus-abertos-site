import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FloatingDonateButton from "@/components/FloatingDonateButton";

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "900"],
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
      <body className={`${body.variable} antialiased`}>
        {children}
        <FloatingDonateButton />
      </body>
    </html>
  );
}
