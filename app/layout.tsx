import type { Metadata } from 'next';
import { Geist, Playfair_Display } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { AuthProvider } from '@/context/AuthContext';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Le Refuge Gourmand - Salles Privées Premium',
  description: 'Réservez votre salle privée insonorisée dans nos établissements de Lille, Paris et Lyon. Une expérience culinaire intimiste et raffinée.',
  keywords: ['restaurant privé', 'salle privée', 'gastronomie', 'Lille', 'Paris', 'Lyon'],
  icons: {
    icon: '/LeRefugeGourmand/logo.png',
    shortcut: '/LeRefugeGourmand/logo.png',
    apple: '/LeRefugeGourmand/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${playfair.variable} antialiased`}>
        <AuthProvider>
          <Header />
          <main className="pt-20">
            {children}
          </main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
