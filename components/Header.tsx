"use client";

import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

export default function Header() {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass shadow-lg shadow-black/20">
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo and brand */}
          <Link href="/" className="group flex items-center gap-3">
            {/* responsive logo: uses public/logo.png */}
            <img src="/LeRefugeGourmand/logo.png" alt="Le Refuge Gourmand" className="w-16 h-16 rounded-full object-contain" />

            {/* Brand text: visible on small+ screens, sr-only fallback for accessibility */}
            <div className="flex flex-col leading-tight">
              <h1 className="sr-only sm:not-sr-only font-serif text-2xl md:text-3xl luxury-gradient group-hover:scale-105 transition-transform duration-300">
                Le Refuge Gourmand
              </h1>
              <span className="sr-only sm:not-sr-only text-cream-light/70 text-sm -mt-1">
                Salles privées
              </span>
            </div>
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link
              href="/"
              className="elegant-underline px-4 py-2 text-cream-light hover:text-champagne-gold font-medium"
            >
              Accueil
            </Link>
            <Link
              href="/reservation"
              className="elegant-underline px-4 py-2 text-cream-light hover:text-champagne-gold font-medium"
            >
              Réserver
            </Link>
            <Link
              href="/menus"
              className="elegant-underline px-4 py-2 text-cream-light hover:text-champagne-gold font-medium"
            >
              Nos Menus
            </Link>
            <Link
              href="/contact"
              className="elegant-underline px-4 py-2 text-cream-light hover:text-champagne-gold font-medium"
            >
              Contact
            </Link>
            {user ? (
              <div className="ml-4 flex items-center gap-3">
                <Link
                  href="/account"
                  className="px-4 py-2 text-cream-light/80 hover:text-champagne-gold"
                >
                  {user.firstName}
                </Link>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 bg-transparent border border-champagne-gold text-champagne-gold rounded hover:bg-champagne-gold/10"
                >
                  Déconnexion
                </button>
              </div>
            ) : (
              <div className="ml-4 flex items-center gap-3">
                <Link
                  href="/auth/login"
                  className="px-4 py-2 text-cream-light hover:text-champagne-gold"
                >
                  Connexion
                </Link>
                <Link
                  href="/auth/register"
                  className="px-4 py-2 bg-champagne-gold text-slate-night rounded font-semibold"
                >
                  Inscription
                </Link>
              </div>
            )}
          </nav>

          {/* Menu Mobile - Bouton hamburger */}
          <button className="md:hidden p-2 text-champagne-gold hover:bg-champagne-gold/10 rounded-lg transition-all">
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
