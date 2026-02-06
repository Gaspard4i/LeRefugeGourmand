import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="relative border-t border-champagne-gold/20 py-16 px-6 bg-gradient-to-b from-slate-night to-[#1f252b] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-champagne-gold rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-champagne-gold rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* À propos */}
          <div className="space-y-4">
            <h3 className="font-serif text-3xl luxury-gradient mb-4">
              Le Refuge Gourmand
            </h3>
            <p className="text-cream-light/80 text-sm leading-relaxed">
              L&apos;intimité au service de la gastronomie.
              Des salles privées insonorisées pour des moments uniques.
            </p>
            <div className="flex gap-4 pt-4">
              <a href="https://twitter.com/lerefugegourmand" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-champagne-gold/20 hover-lift transition-all">
                <FontAwesomeIcon icon={faXTwitter} className="w-5 h-5 text-champagne-gold" />
              </a>
              <a href="https://instagram.com/lerefugegourmand" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-champagne-gold/20 hover-lift transition-all">
                <FontAwesomeIcon icon={faInstagram} className="w-5 h-5 text-champagne-gold" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-champagne-gold font-semibold mb-6 text-lg">Navigation</h4>
            <ul className="space-y-3 text-cream-light/70">
              <li>
                <Link href="/" className="elegant-underline hover:text-champagne-gold inline-block">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/reservation" className="elegant-underline hover:text-champagne-gold inline-block">
                  Réserver
                </Link>
              </li>
              <li>
                <Link href="/menus" className="elegant-underline hover:text-champagne-gold inline-block">
                  Nos Menus
                </Link>
              </li>
              <li>
                <Link href="/contact" className="elegant-underline hover:text-champagne-gold inline-block">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/account" className="elegant-underline hover:text-champagne-gold inline-block">
                  Mon Compte
                </Link>
              </li>
            </ul>
          </div>

          {/* Établissements */}
          <div>
            <h4 className="text-champagne-gold font-semibold mb-6 text-lg">Nos Villes</h4>
            <ul className="space-y-3 text-cream-light/70">
              <li>
                <Link href="/reservation?city=lille" className="elegant-underline hover:text-champagne-gold inline-block group">
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-champagne-gold opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    Lille
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/reservation?city=paris" className="elegant-underline hover:text-champagne-gold inline-block group">
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-champagne-gold opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    Paris
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/reservation?city=lyon" className="elegant-underline hover:text-champagne-gold inline-block group">
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-champagne-gold opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    Lyon
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Horaires et Contact */}
          <div>
            <h4 className="text-champagne-gold font-semibold mb-6 text-lg">Horaires</h4>
            <div className="text-cream-light/70 space-y-4">
              <div className="glass p-4 rounded-lg">
                <p className="text-champagne-gold font-semibold mb-1">Mardi - Dimanche</p>
                <p className="text-sm">11h30 - 22h00</p>
              </div>
              <p className="text-champagne-gold/70 text-sm italic">
                Fermé le lundi
              </p>
              <div className="pt-2">
                <Link href="/contact" className="text-champagne-gold hover:text-champagne-gold/80 font-medium inline-flex items-center gap-2 group">
                  Nous contacter
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-champagne-gold/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-cream-light/50 text-sm">
            <p>&copy; 2026 Le Refuge Gourmand. Tous droits réservés.</p>
            <div className="flex gap-6">
              <Link href="/legal/terms" className="hover:text-champagne-gold transition-colors elegant-underline">
                Conditions Générales
              </Link>
              <Link href="/legal/privacy" className="hover:text-champagne-gold transition-colors elegant-underline">
                Confidentialité
              </Link>
              <Link href="/legal/rules" className="hover:text-champagne-gold transition-colors elegant-underline">
                Règlement Intérieur
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
