import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Éclat d’Nord - Services de Nettoyage Professionnel de Bureaux",
  description: "Entreprise de nettoyage professionnel de bureaux à Lille. Services sur mesure, devis gratuit en ligne. Expertise et qualité garanties.",
  keywords: "nettoyage bureaux Lille, entreprise nettoyage professionnel, service nettoyage bureau, devis nettoyage gratuit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
