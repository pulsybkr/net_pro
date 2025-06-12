import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://eclat-du-nord.fr'), // Remplacer par votre domaine réel
  title: {
    default: "Éclat d'Nord - Services de Nettoyage Professionnel de Bureaux à Lille",
    template: "%s | Éclat d'Nord"
  },
  description: "Entreprise de nettoyage professionnel de bureaux à Lille et métropole. Services sur mesure, équipe qualifiée, devis gratuit en ligne. Expertise et qualité garanties depuis plus de 10 ans.",
  keywords: [
    "nettoyage bureaux Lille",
    "entreprise nettoyage professionnel",
    "service nettoyage bureau",
    "devis nettoyage gratuit",
    "nettoyage industriel Lille",
    "entretien bureaux Nord",
    "société nettoyage Hauts-de-France",
    "nettoyage immeuble Lille",
    "maintenance bureaux",
    "prestations nettoyage"
  ],
  authors: [{ name: "Éclat d'Nord" }],
  creator: "Éclat d'Nord",
  publisher: "Éclat d'Nord",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://eclat-du-nord.fr',
    siteName: "Éclat d'Nord",
    title: "Éclat d'Nord - Services de Nettoyage Professionnel de Bureaux à Lille",
    description: "Entreprise de nettoyage professionnel de bureaux à Lille et métropole. Services sur mesure, équipe qualifiée, devis gratuit en ligne.",
    images: [
      {
        url: '/og-image.jpg', // Vous devrez ajouter cette image
        width: 1200,
        height: 630,
        alt: "Éclat d'Nord - Nettoyage professionnel de bureaux à Lille",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Éclat d'Nord - Nettoyage Professionnel Bureaux Lille",
    description: "Services de nettoyage professionnel à Lille. Devis gratuit, équipe qualifiée, satisfaction garantie.",
    images: ['/twitter-image.jpg'], // Vous devrez ajouter cette image
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification=ZPZFNWw09xO5KRw2l2RoJIz14knitcAvlsiUM1kifrU', // À remplacer par votre code de vérification Google
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  alternates: {
    canonical: 'https://eclat-du-nord.fr',
    languages: {
      'fr-FR': 'https://eclat-du-nord.fr',
    },
  },
  category: 'business',
  classification: 'Nettoyage professionnel',
  applicationName: "Éclat d'Nord",
  referrer: 'origin-when-cross-origin',
  other: {
    'DC.title': "Éclat d'Nord - Nettoyage Professionnel",
    'DC.creator': "Éclat d'Nord",
    'DC.subject': 'Nettoyage professionnel de bureaux',
    'DC.description': 'Services de nettoyage professionnel à Lille',
    'DC.language': 'fr',
    'geo.region': 'FR-59',
    'geo.placename': 'Lille, France',
    'ICBM': '50.6292,3.0573', // Coordonnées de Lille
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <StructuredData />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
