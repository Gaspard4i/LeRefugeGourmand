import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass shadow-lg shadow-black/20">
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center">
            <h1 className="font-serif text-2xl md:text-3xl luxury-gradient group-hover:scale-105 transition-transform duration-300">
              Le Refuge Gourmand
            </h1>
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
            <Link
              href="/account"
              className="ml-4 px-6 py-2.5 border-2 border-champagne-gold text-champagne-gold rounded-lg hover:bg-champagne-gold hover:text-slate-night font-semibold btn-glow hover-lift shadow-lg shadow-champagne-gold/20"
            >
              Mon Compte
            </Link>
          </nav>

          {/* Menu Mobile - Bouton hamburger */}
          <button className="md:hidden p-2 text-champagne-gold hover:bg-champagne-gold/10 rounded-lg transition-all">
            <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}


