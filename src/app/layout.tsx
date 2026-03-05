import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Golden Sécurité | Sécurité privée, gardiennage, vidéosurveillance – Bamako Mali",
    template: "%s | Golden Sécurité",
  },
  description:
    "Agence de sécurité à Bamako, Mali : gardiennage, sécurité privée, protection des biens et des personnes, vidéosurveillance, installation de caméras, vente de matériels de sécurité. Devis gratuit.",
  keywords: [
    "sécurité privée Bamako",
    "gardiennage Mali",
    "vidéosurveillance Bamako",
    "agence de sécurité Mali",
    "caméras de sécurité",
    "protection biens et personnes",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
        <BackToTop />
      </body>
    </html>
  );
}
