'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarkerAlt,
  faCalendarAlt,
  faUser,
  faUsers,
  faArrowRight,
  faBuilding,
  faLandmark,
  faBridge,
  faClipboardList,
} from '@fortawesome/free-solid-svg-icons';
import { City, RESERVATION_DURATIONS } from '@/types';
import { calculateDeposit, formatPrice, getCityName, formatDuration } from '@/lib/utils';
import { Button } from '@/components/atoms/Button';
import { Input } from '@/components/atoms/Input';
import { Select } from '@/components/atoms/Select';
import { Heading, Text } from '@/components/atoms/Typography';
import { Card } from '@/components/molecules/Card';
import { CapacitySelector } from '@/components/molecules/CapacitySelector';

export default function ReservationPage() {
  const [selectedCity, setSelectedCity] = useState<City | ''>('');
  const [selectedCapacity, setSelectedCapacity] = useState<number>(2);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('12:00');
  const [selectedDuration, setSelectedDuration] = useState<number>(3);
  const [numberOfGuests, setNumberOfGuests] = useState<number>(2);
  const [specialRequests, setSpecialRequests] = useState<string>('');
  const [acceptRules, setAcceptRules] = useState(false);

  // Fonction helper pour obtenir l'icône de la ville
  const getCityIcon = (city: City) => {
    switch(city) {
      case 'lille':
        return faBuilding;
      case 'paris':
        return faLandmark;
      case 'lyon':
        return faBridge;
      default:
        return faMapMarkerAlt;
    }
  };

  const cities: City[] = ['lille', 'paris', 'lyon'];
  const capacities = [1, 2, 4, 8, 12, 20, 30];
  const deposit = calculateDeposit(selectedCapacity);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Réservation soumise:', {
      selectedCity,
      selectedCapacity,
      selectedDate,
      selectedTime,
      selectedDuration,
      numberOfGuests,
      specialRequests,
      deposit,
    });
  };

  return (
    <div className="min-h-screen bg-slate-night py-24 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-champagne-gold/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-champagne-gold/3 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-6">
            <span className="px-6 py-2 rounded-full glass text-champagne-gold text-sm font-semibold tracking-widest">
              ✦ RÉSERVATION ✦
            </span>
          </div>
          <Heading as="h1" gradient align="center" className="mb-6">
            Réserver une Salle Privée
          </Heading>
          <Text size="xl" muted align="center" className="max-w-3xl mx-auto">
            Choisissez votre établissement, la date et la taille de votre salle pour une expérience intimiste
          </Text>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Formulaire principal */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Étape 1: Localisation et Capacité */}
              <Card variant="gradient-border" padding="lg" className="animate-slide-up">
                <div className="mb-8">
                  <Heading as="h3" className="mb-2 flex items-center gap-2">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-champagne-gold" />
                    Localisation & Capacité
                  </Heading>
                  <Text muted>Sélectionnez votre ville et le nombre de personnes</Text>
                </div>

                {/* Sélection de la ville */}
                <div className="mb-8">
                  <Text size="lg" className="mb-4 font-semibold text-champagne-gold">
                    Choisissez votre ville
                  </Text>
                  <div className="grid md:grid-cols-3 gap-4">
                    {cities.map((city) => (
                      <button
                        key={city}
                        type="button"
                        onClick={() => setSelectedCity(city)}
                        className={cn(
                          'p-6 rounded-xl border-2 transition-all transform hover:scale-105 text-center',
                          selectedCity === city
                            ? 'border-champagne-gold bg-champagne-gold/20 scale-105 shadow-lg shadow-champagne-gold/30'
                            : 'border-champagne-gold/30 hover:border-champagne-gold/60 glass'
                        )}
                      >
                        <div className="text-4xl mb-2">
                          <FontAwesomeIcon icon={getCityIcon(city)} />
                        </div>
                        <div
                          className={cn(
                            'text-xl font-bold',
                            selectedCity === city ? 'text-champagne-gold' : 'text-cream-light'
                          )}
                        >
                          {getCityName(city)}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sélection de la capacité */}
                <div>
                  <Text size="lg" className="mb-4 font-semibold text-champagne-gold">
                    Capacité de la salle
                  </Text>
                  <CapacitySelector
                    selected={selectedCapacity}
                    capacities={capacities}
                    onChange={setSelectedCapacity}
                  />
                </div>
              </Card>

              {/* Étape 2: Date et Heure */}
              <Card variant="gradient-border" padding="lg" className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
                <div className="mb-8">
                  <Heading as="h3" className="mb-2 flex items-center gap-2">
                    <FontAwesomeIcon icon={faCalendarAlt} className="text-champagne-gold" />
                    Date & Horaire
                  </Heading>
                  <Text muted>Choisissez votre créneau (3h minimum)</Text>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <Input
                    type="date"
                    label="Date de réservation"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    required
                    variant="glass"
                  />

                  <Select
                    label="Heure d'arrivée"
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    required
                    variant="glass"
                    options={[
                      { value: '11:30', label: '11h30' },
                      { value: '12:00', label: '12h00' },
                      { value: '12:30', label: '12h30' },
                      { value: '13:00', label: '13h00' },
                      { value: '19:00', label: '19h00' },
                      { value: '19:30', label: '19h30' },
                      { value: '20:00', label: '20h00' },
                      { value: '20:30', label: '20h30' },
                      { value: '21:00', label: '21h00' },
                    ]}
                  />
                </div>

                <div className="mt-6">
                  <Select
                    label="Durée de réservation"
                    value={selectedDuration.toString()}
                    onChange={(e) => setSelectedDuration(Number(e.target.value))}
                    required
                    variant="glass"
                    options={RESERVATION_DURATIONS.map((d) => ({
                      value: d.toString(),
                      label: formatDuration(d),
                    }))}
                  />
                </div>
              </Card>

              {/* Étape 3: Informations */}
              <Card variant="gradient-border" padding="lg" className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <div className="mb-8">
                  <Heading as="h3" className="mb-2 flex items-center gap-2">
                    <FontAwesomeIcon icon={faUser} className="text-champagne-gold" />
                    Informations
                  </Heading>
                  <Text muted>Complétez les détails de votre réservation</Text>
                </div>

                <div className="space-y-6">
                  <Input
                    type="number"
                    label="Nombre d'invités"
                    value={numberOfGuests}
                    onChange={(e) => setNumberOfGuests(Number(e.target.value))}
                    min={1}
                    max={selectedCapacity}
                    required
                    variant="glass"
                    helperText={`Maximum: ${selectedCapacity} personnes`}
                    leftIcon={
                      <FontAwesomeIcon icon={faUsers} className="w-5 h-5" />
                    }
                  />

                  <div>
                    <label className="block text-sm font-medium text-cream-light mb-2">
                      Demandes spéciales (optionnel)
                    </label>
                    <textarea
                      value={specialRequests}
                      onChange={(e) => setSpecialRequests(e.target.value)}
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl glass border-2 border-champagne-gold/20 focus:border-champagne-gold text-cream-light placeholder:text-cream-light/40 transition-all focus:outline-none focus:ring-2 focus:ring-champagne-gold/50"
                      placeholder="Allergies, régime alimentaire, occasion spéciale..."
                    />
                  </div>
                </div>
              </Card>

              {/* Règlement et CGV */}
              <Card variant="glass" padding="lg">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={acceptRules}
                    onChange={(e) => setAcceptRules(e.target.checked)}
                    required
                    className="mt-1 w-5 h-5 rounded border-2 border-champagne-gold bg-slate-night/50 checked:bg-champagne-gold focus:ring-2 focus:ring-champagne-gold/50"
                  />
                  <Text size="sm" className="flex-1">
                    J'accepte le{' '}
                    <a href="/legal/rules" target="_blank" className="text-champagne-gold hover:underline">
                      règlement intérieur
                    </a>{' '}
                    et les{' '}
                    <a href="/legal/terms" target="_blank" className="text-champagne-gold hover:underline">
                      conditions générales
                    </a>
                    . Je comprends que la caution sera conservée en cas d'annulation tardive (&lt; 3h).
                  </Text>
                </label>
              </Card>

              {/* Boutons d'action */}
              <div className="flex gap-4">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  fullWidth
                  disabled={!selectedCity || !selectedDate || !acceptRules}
                  rightIcon={
                    <FontAwesomeIcon icon={faArrowRight} className="w-5 h-5" />
                  }
                >
                  Confirmer et Payer
                </Button>
              </div>
            </form>
          </div>

          {/* Sidebar: Récapitulatif */}
          <div className="lg:col-span-1">
            <Card variant="gradient-border" padding="lg" className="sticky top-24">
              <Heading as="h4" className="mb-6 flex items-center gap-2">
                <FontAwesomeIcon icon={faClipboardList} className="text-champagne-gold" />
                Récapitulatif
              </Heading>

              <div className="space-y-4 mb-6">
                {selectedCity && (
                  <div className="flex justify-between items-center pb-3 border-b border-champagne-gold/20">
                    <Text muted>Ville</Text>
                    <Text className="font-semibold">{getCityName(selectedCity)}</Text>
                  </div>
                )}

                <div className="flex justify-between items-center pb-3 border-b border-champagne-gold/20">
                  <Text muted>Capacité</Text>
                  <Text className="font-semibold">{selectedCapacity} pers.</Text>
                </div>

                {selectedDate && (
                  <div className="flex justify-between items-center pb-3 border-b border-champagne-gold/20">
                    <Text muted>Date</Text>
                    <Text className="font-semibold">{new Date(selectedDate).toLocaleDateString('fr-FR')}</Text>
                  </div>
                )}

                <div className="flex justify-between items-center pb-3 border-b border-champagne-gold/20">
                  <Text muted>Heure</Text>
                  <Text className="font-semibold">{selectedTime}</Text>
                </div>

                <div className="flex justify-between items-center pb-3 border-b border-champagne-gold/20">
                  <Text muted>Durée</Text>
                  <Text className="font-semibold">{formatDuration(selectedDuration)}</Text>
                </div>

                <div className="flex justify-between items-center pb-3 border-b border-champagne-gold/20">
                  <Text muted>Invités</Text>
                  <Text className="font-semibold">{numberOfGuests} pers.</Text>
                </div>
              </div>

              <div className="glass p-4 rounded-xl mb-6">
                <div className="flex justify-between items-center mb-2">
                  <Text className="font-semibold">Caution</Text>
                  <Text size="xl" className="font-bold text-champagne-gold">
                    {formatPrice(deposit)}
                  </Text>
                </div>
                <Text size="sm" muted>
                  Remboursée automatiquement si annulation &gt; 3h avant
                </Text>
              </div>

              <div className="space-y-3 text-sm text-cream-light/60">
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-champagne-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Salle insonorisée garantie</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-champagne-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Commande via tablette en salle</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-champagne-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Jeux de société disponibles</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}
