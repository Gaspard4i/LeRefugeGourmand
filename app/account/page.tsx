'use client';

import { useState } from 'react';
import { formatPrice, formatDate, generatePromoCode } from '@/lib/utils';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faCakeCandles,
    faCalendar,
    faEnvelope,
    faSackDollar,
    faUtensils,
    faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import {faClock} from "@fortawesome/free-regular-svg-icons";
import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

// Données de démonstration (à remplacer par des appels API)
const MOCK_USER = {
  firstName: 'Jean',
  lastName: 'Dupont',
  email: 'jean.dupont@example.com',
  phone: '+33 6 12 34 56 78',
  loyaltyPoints: 850,
  newsletterOptIn: true,
};

const MOCK_RESERVATIONS = [
  {
    id: '1',
    date: new Date('2026-03-15'),
    time: '19:30',
    location: 'Lille',
    capacity: 4,
    guests: 4,
    status: 'confirmed',
    depositAmount: 12,
  },
  {
    id: '2',
    date: new Date('2026-02-20'),
    time: '20:00',
    location: 'Lille',
    capacity: 2,
    guests: 2,
    status: 'completed',
    depositAmount: 10,
  },
  {
    id: '3',
    date: new Date('2026-01-10'),
    time: '12:30',
    location: 'Lille',
    capacity: 8,
    guests: 7,
    status: 'completed',
    depositAmount: 15,
  },
];

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState<'reservations' | 'profile' | 'loyalty'>('reservations');
  const { user, logout, updateUser } = useAuth();
  const router = useRouter();

  if (!user) {
    return (
      <div className="min-h-screen bg-slate-night flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl text-cream-light mb-4">Vous n'êtes pas connecté</h2>
          <div className="flex gap-3 justify-center">
            <Link href="/auth/login" className="px-4 py-2 bg-champagne-gold text-slate-night rounded">Se connecter</Link>
            <Link href="/auth/register" className="px-4 py-2 border border-champagne-gold/30 text-cream-light rounded">Créer un compte</Link>
          </div>
        </div>
      </div>
    );
  }

  const pointsToNextReward = 1000 - (user?.loyaltyPoints ?? 0);
  const canGeneratePromo = (user?.loyaltyPoints ?? 0) >= 500;

  const handleGeneratePromo = () => {
    if (canGeneratePromo) {
      const code = generatePromoCode();
      alert(`Code promo généré : ${code}\n10% de réduction sur votre prochaine réservation`);
      // Déduire les points et créer le code promo
    }
  };

  return (
    <div className="min-h-screen bg-slate-night py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="font-serif text-5xl text-champagne-gold mb-2">Mon Compte</h1>
          <p className="text-cream-light/80 text-lg">Bienvenue, {user.firstName} {user.lastName}</p>
          <div className="mt-3">
            <button onClick={() => { logout(); router.push('/'); }} className="px-4 py-2 border border-champagne-gold/30 rounded">Se déconnecter</button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-champagne-gold/30">
          <button
            onClick={() => setActiveTab('reservations')}
            className={`px-6 py-3 font-semibold transition-all ${
              activeTab === 'reservations'
                ? 'text-champagne-gold border-b-2 border-champagne-gold'
                : 'text-cream-light/70 hover:text-champagne-gold'
            }`}
          >
            Mes Réservations
          </button>
          <button
            onClick={() => setActiveTab('loyalty')}
            className={`px-6 py-3 font-semibold transition-all ${
              activeTab === 'loyalty'
                ? 'text-champagne-gold border-b-2 border-champagne-gold'
                : 'text-cream-light/70 hover:text-champagne-gold'
            }`}
          >
            Programme Fidélité
          </button>
          <button
            onClick={() => setActiveTab('profile')}
            className={`px-6 py-3 font-semibold transition-all ${
              activeTab === 'profile'
                ? 'text-champagne-gold border-b-2 border-champagne-gold'
                : 'text-cream-light/70 hover:text-champagne-gold'
            }`}
          >
            Mon Profil
          </button>
        </div>

        {/* Réservations */}
        {activeTab === 'reservations' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-serif text-3xl text-champagne-gold">
                Mes Réservations
              </h2>
              <a
                href="/reservation"
                className="px-6 py-3 bg-champagne-gold text-slate-night font-semibold rounded-lg hover:bg-champagne-gold/90 transition-all"
              >
                + Nouvelle Réservation
              </a>
            </div>

            {MOCK_RESERVATIONS.length === 0 ? (
              <div className="bg-slate-night/50 border border-champagne-gold/30 rounded-lg p-12 text-center">
                <p className="text-cream-light/70 mb-4">
                  Vous n&apos;avez pas encore de réservation
                </p>
                <a
                  href="/reservation"
                  className="inline-block px-6 py-3 bg-champagne-gold text-slate-night font-semibold rounded-lg hover:bg-champagne-gold/90 transition-all"
                >
                  Réserver une Table
                </a>
              </div>
            ) : (
              <div className="space-y-4">
                {MOCK_RESERVATIONS.map((reservation) => (
                  <div
                    key={reservation.id}
                    className="bg-slate-night/50 border border-champagne-gold/30 rounded-lg p-6 hover:border-champagne-gold/60 transition-all"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-serif text-2xl text-champagne-gold">
                            {reservation.location}
                          </h3>
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              reservation.status === 'confirmed'
                                ? 'bg-green-600/30 text-green-400'
                                : reservation.status === 'completed'
                                ? 'bg-blue-600/30 text-blue-400'
                                : 'bg-red-600/30 text-red-400'
                            }`}
                          >
                            {reservation.status === 'confirmed'
                              ? 'Confirmée'
                              : reservation.status === 'completed'
                              ? 'Terminée'
                              : 'Annulée'}
                          </span>
                        </div>
                        <div className="grid md:grid-cols-2 gap-2 text-cream-light/80">
                          <div><FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon> {formatDate(reservation.date)}</div>
                          <div><FontAwesomeIcon icon={faClock}></FontAwesomeIcon>  {reservation.time}</div>
                          <div><FontAwesomeIcon icon={faUserGroup}></FontAwesomeIcon>  {reservation.guests} personnes (salle de {reservation.capacity})</div>
                          <div><FontAwesomeIcon icon={faSackDollar}></FontAwesomeIcon>  Caution : {formatPrice(reservation.depositAmount)}</div>
                        </div>
                      </div>
                      {reservation.status === 'confirmed' && (
                        <div className="flex gap-3">
                          <button className="px-4 py-2 border border-champagne-gold/30 text-cream-light rounded hover:border-champagne-gold transition-all">
                            Modifier
                          </button>
                          <button className="px-4 py-2 border border-red-500/30 text-red-400 rounded hover:border-red-500 transition-all">
                            Annuler
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Programme Fidélité */}
        {activeTab === 'loyalty' && (
          <div className="space-y-6">
            <h2 className="font-serif text-3xl text-champagne-gold mb-6">
              Programme Fidélité
            </h2>

            {/* Points actuels */}
            <div className="bg-gradient-to-br from-champagne-gold/20 to-champagne-gold/5 border border-champagne-gold rounded-lg p-8">
              <div className="text-center mb-6">
                <div className="text-6xl font-bold text-champagne-gold mb-2">
                  {user.loyaltyPoints}
                </div>
                <div className="text-cream-light/80 text-lg">Points de fidélité</div>
              </div>

              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div className="text-cream-light/70 text-sm">Progression</div>
                  <div className="text-champagne-gold text-sm font-semibold">
                    {Math.round((user.loyaltyPoints / 1000) * 100)}%
                  </div>
                </div>
                <div className="overflow-hidden h-3 text-xs flex rounded-full bg-slate-night">
                  <div
                    style={{ width: `${(user.loyaltyPoints / 1000) * 100}%` }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-champagne-gold transition-all"
                  />
                </div>
                <div className="text-cream-light/60 text-sm mt-2 text-center">
                  Plus que {pointsToNextReward} points pour atteindre 1000 points
                </div>
              </div>
            </div>

            {/* Comment gagner des points */}
            <div className="bg-slate-night/50 border border-champagne-gold/30 rounded-lg p-6">
              <h3 className="text-champagne-gold font-semibold text-xl mb-4">
                Comment gagner des points ?
              </h3>
              <div className="space-y-3 text-cream-light/80">
                <div className="flex items-start gap-3">
                  <span className="text-champagne-gold text-xl"><FontAwesomeIcon icon={faUtensils} /></span>
                  <div>
                    <strong className="text-cream-light">10 points par euro dépensé</strong>
                    <p className="text-sm text-cream-light/60">
                      Sur vos repas et boissons
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-champagne-gold text-xl"><FontAwesomeIcon icon={faCakeCandles} /></span>
                  <div>
                    <strong className="text-cream-light">100 points bonus</strong>
                    <p className="text-sm text-cream-light/60">
                      Pour votre anniversaire
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-champagne-gold text-xl"><FontAwesomeIcon icon={faEnvelope} /></span>
                  <div>
                    <strong className="text-cream-light">50 points bonus</strong>
                    <p className="text-sm text-cream-light/60">
                      En vous inscrivant à la newsletter
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Récompenses disponibles */}
            <div className="bg-slate-night/50 border border-champagne-gold/30 rounded-lg p-6">
              <h3 className="text-champagne-gold font-semibold text-xl mb-4">
                Vos Récompenses
              </h3>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-slate-night/50 border border-champagne-gold/30 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-cream-light font-semibold">Code Promo 10%</h4>
                    <span className="text-champagne-gold font-bold">500 pts</span>
                  </div>
                  <p className="text-cream-light/60 text-sm mb-3">
                    10% de réduction sur votre prochaine réservation
                  </p>
                  <button
                    onClick={handleGeneratePromo}
                    disabled={!canGeneratePromo}
                    className={`w-full py-2 rounded font-semibold transition-all ${
                      canGeneratePromo
                        ? 'bg-champagne-gold text-slate-night hover:bg-champagne-gold/90'
                        : 'bg-slate-night/50 text-cream-light/40 cursor-not-allowed'
                    }`}
                  >
                    {canGeneratePromo ? 'Générer' : 'Indisponible'}
                  </button>
                </div>

                <div className="bg-slate-night/50 border border-champagne-gold/30 rounded-lg p-4 opacity-50">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-cream-light font-semibold">Dessert Offert</h4>
                    <span className="text-champagne-gold font-bold">800 pts</span>
                  </div>
                  <p className="text-cream-light/60 text-sm mb-3">
                    Un dessert au choix lors de votre prochaine visite
                  </p>
                  <button
                    disabled
                    className="w-full py-2 rounded font-semibold bg-slate-night/50 text-cream-light/40 cursor-not-allowed"
                  >
                    Indisponible
                  </button>
                </div>

                <div className="bg-slate-night/50 border border-champagne-gold/30 rounded-lg p-4 opacity-50">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-cream-light font-semibold">Code Promo 20%</h4>
                    <span className="text-champagne-gold font-bold">1000 pts</span>
                  </div>
                  <p className="text-cream-light/60 text-sm mb-3">
                    20% de réduction sur votre prochaine réservation
                  </p>
                  <button
                    disabled
                    className="w-full py-2 rounded font-semibold bg-slate-night/50 text-cream-light/40 cursor-not-allowed"
                  >
                    Indisponible
                  </button>
                </div>

                <div className="bg-slate-night/50 border border-champagne-gold/30 rounded-lg p-4 opacity-50">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-cream-light font-semibold">Apéritif Offert</h4>
                    <span className="text-champagne-gold font-bold">1200 pts</span>
                  </div>
                  <p className="text-cream-light/60 text-sm mb-3">
                    Champagne ou cocktail au choix pour 2 personnes
                  </p>
                  <button
                    disabled
                    className="w-full py-2 rounded font-semibold bg-slate-night/50 text-cream-light/40 cursor-not-allowed"
                  >
                    Indisponible
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Profil */}
        {activeTab === 'profile' && (
          <div className="space-y-6">
            <h2 className="font-serif text-3xl text-champagne-gold mb-6">
              Mon Profil
            </h2>

            <div className="bg-slate-night/50 border border-champagne-gold/30 rounded-lg p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-champagne-gold font-semibold mb-2">
                      Prénom
                    </label>
                    <input
                      type="text"
                      value={user.firstName}
                      onChange={(e) => updateUser({ firstName: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-night border border-champagne-gold/30 rounded-lg text-cream-light focus:border-champagne-gold focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-champagne-gold font-semibold mb-2">
                      Nom
                    </label>
                    <input
                      type="text"
                      value={user.lastName}
                      onChange={(e) => updateUser({ lastName: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-night border border-champagne-gold/30 rounded-lg text-cream-light focus:border-champagne-gold focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-champagne-gold font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={user.email}
                    onChange={(e) => updateUser({ email: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-night border border-champagne-gold/30 rounded-lg text-cream-light focus:border-champagne-gold focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-champagne-gold font-semibold mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    value={user.phone}
                    onChange={(e) => updateUser({ phone: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-night border border-champagne-gold/30 rounded-lg text-cream-light focus:border-champagne-gold focus:outline-none"
                  />
                </div>

                <div className="border-t border-champagne-gold/30 pt-6">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={user.newsletterOptIn}
                      onChange={(e) => updateUser({ newsletterOptIn: e.target.checked })}
                      className="w-5 h-5 accent-champagne-gold"
                    />
                    <span className="text-cream-light/80">
                      Recevoir la newsletter et les offres exclusives
                    </span>
                  </label>
                </div>

                <div className="flex gap-4">
                  <button
                    type="submit"
                    className="px-8 py-3 bg-champagne-gold text-slate-night font-semibold rounded-lg hover:bg-champagne-gold/90 transition-all"
                  >
                    Enregistrer les Modifications
                  </button>
                  <button
                    type="button"
                    className="px-8 py-3 border border-champagne-gold/30 text-cream-light rounded-lg hover:border-champagne-gold transition-all"
                  >
                    Annuler
                  </button>
                </div>
              </form>
            </div>

            {/* Changer le mot de passe */}
            <div className="bg-slate-night/50 border border-champagne-gold/30 rounded-lg p-8">
              <h3 className="text-champagne-gold font-semibold text-xl mb-4">
                Changer mon mot de passe
              </h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-champagne-gold font-semibold mb-2">
                    Mot de passe actuel
                  </label>
                  <input
                    type="password"
                    className="w-full px-4 py-3 bg-slate-night border border-champagne-gold/30 rounded-lg text-cream-light focus:border-champagne-gold focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-champagne-gold font-semibold mb-2">
                    Nouveau mot de passe
                  </label>
                  <input
                    type="password"
                    className="w-full px-4 py-3 bg-slate-night border border-champagne-gold/30 rounded-lg text-cream-light focus:border-champagne-gold focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-champagne-gold font-semibold mb-2">
                    Confirmer le nouveau mot de passe
                  </label>
                  <input
                    type="password"
                    className="w-full px-4 py-3 bg-slate-night border border-champagne-gold/30 rounded-lg text-cream-light focus:border-champagne-gold focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="px-8 py-3 bg-champagne-gold text-slate-night font-semibold rounded-lg hover:bg-champagne-gold/90 transition-all"
                >
                  Mettre à Jour le Mot de Passe
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
