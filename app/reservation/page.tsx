'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faCalendarAlt, faUser, faUsers, faStar } from '@fortawesome/free-solid-svg-icons';
import { City, RESERVATION_DURATIONS } from '@/types';
import { calculateDeposit, formatPrice, getCityName, formatDuration } from '@/lib/utils';
import { CITIES } from '@/data/cities';

export default function ReservationPage() {
  const [city, setCity] = useState<City>(CITIES[0].id as City);
  const [capacity, setCapacity] = useState<number>(2);
  const [date, setDate] = useState<string>('');
  const [time, setTime] = useState<string>('19:00');
  const [duration, setDuration] = useState<number>(3);
  const [guests, setGuests] = useState<number>(2);

  const deposit = calculateDeposit(capacity);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Réservation: ${city} - ${capacity} pers - ${date} ${time} (${duration}h)\nCaution: ${formatPrice(deposit)}`);
  };

  return (
    <div className="min-h-screen bg-slate-night py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-champagne-gold font-semibold"><FontAwesomeIcon icon={faStar} /> RÉSERVATION</span>
          <h1 className="font-serif text-4xl md:text-5xl text-champagne-gold mt-6">Réserver une Salle Privée</h1>
          <p className="text-cream-light/80 mt-3">Choisissez votre établissement, la date, la durée et la capacité.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <label className="block">
              <div className="text-champagne-gold font-semibold mb-2">Ville</div>
              <select value={city} onChange={(e) => setCity(e.target.value as City)} className="w-full px-4 py-3 rounded-lg bg-slate-night border border-champagne-gold/30 text-cream-light">
                {CITIES.map((c) => (
                  <option key={c.id} value={c.id}>{c.name}</option>
                ))}
              </select>
            </label>

            <label className="block">
              <div className="text-champagne-gold font-semibold mb-2">Capacité</div>
              <select value={capacity} onChange={(e) => setCapacity(Number(e.target.value))} className="w-full px-4 py-3 rounded-lg bg-slate-night border border-champagne-gold/30 text-cream-light">
                {[1,2,4,8,12,20,30].map((c) => (
                  <option key={c} value={c}>{c}{c===1 ? ' personne' : ' personnes'}</option>
                ))}
              </select>
            </label>

            <label className="block">
              <div className="text-champagne-gold font-semibold mb-2">Date</div>
              <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full px-4 py-3 rounded-lg bg-slate-night border border-champagne-gold/30 text-cream-light" required />
            </label>

            <label className="block">
              <div className="text-champagne-gold font-semibold mb-2">Heure</div>
              <select value={time} onChange={(e) => setTime(e.target.value)} className="w-full px-4 py-3 rounded-lg bg-slate-night border border-champagne-gold/30 text-cream-light">
                {['11:30','12:00','13:00','19:00','19:30','20:00','21:00'].map(t => (<option key={t} value={t}>{t}</option>))}
              </select>
            </label>

            <label className="block">
              <div className="text-champagne-gold font-semibold mb-2">Durée</div>
              <select value={duration} onChange={(e) => setDuration(Number(e.target.value))} className="w-full px-4 py-3 rounded-lg bg-slate-night border border-champagne-gold/30 text-cream-light">
                {RESERVATION_DURATIONS.map(d => (<option key={d} value={d}>{formatDuration(d)}</option>))}
              </select>
            </label>

            <label className="block">
              <div className="text-champagne-gold font-semibold mb-2">Nombre d'invités</div>
              <input type="number" min={1} max={capacity} value={guests} onChange={(e) => setGuests(Number(e.target.value))} className="w-full px-4 py-3 rounded-lg bg-slate-night border border-champagne-gold/30 text-cream-light" />
            </label>
          </div>

          <div className="bg-slate-night/50 border border-champagne-gold/30 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-cream-light/80">Caution requise</div>
                <div className="text-champagne-gold font-bold text-lg">{formatPrice(deposit)}</div>
              </div>
              <div className="text-cream-light/70 text-sm">Politique: remboursement si annulé &gt; 3h avant</div>
            </div>
          </div>

          <div className="flex gap-4">
            <button type="submit" className="flex-1 py-3 bg-champagne-gold text-slate-night font-bold rounded-lg">Payer & Réserver</button>
            <button type="button" className="py-3 px-4 border border-champagne-gold/30 rounded-lg text-cream-light">Réserver par téléphone</button>
          </div>
        </form>
      </div>
    </div>
  );
}
