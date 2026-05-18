import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// URL de ton site (à remplacer par la vraie quand tu déploieras)
const SITE_URL = "https://restaurant-landing-page-gica.vercel.app";

export const metadata: Metadata = {
  title:
    "⚠️ Votre restaurant perd des clients chaque jour | Site de réservation RestoDigital",
  description:
    "Chaque jour sans site de réservation vous coûte des clients. Découvrez comment remplir votre restaurant automatiquement. Parlons-en sur WhatsApp.",
  keywords:
    "site réservation restaurant, réservation en ligne restaurant, site web restaurant, menu digital, Google Maps restaurant, restaurant visible en ligne, Cotonou, Bénin",
  
  // Open Graph (Facebook, WhatsApp, LinkedIn, etc.)
  openGraph: {
    title:
      "⚠️ Votre restaurant est invisible en ligne - Chaque jour vous perdez des clients",
    description:
      "89% des clients cherchent leur restaurant sur Google. Sans site de réservation, ils vont chez vos concurrents. Solution en 1 clic.",
    url: SITE_URL,
    siteName: "RestoDigital",
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Abdoulaye Patawala - Expert sites web pour restaurants",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  
  // Twitter
  twitter: {
    card: "summary_large_image",
    title:
      "⚠️ Votre restaurant perd des clients en ce moment même",
    description:
      "Sans site de réservation, vos tables restent vides. Découvrez comment tout changer.",
    images: [`${SITE_URL}/og-image.jpg`],
  },
  
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}