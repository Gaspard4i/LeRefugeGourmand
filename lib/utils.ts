import { City, RoomCapacity, DEPOSIT_POLICIES } from '@/types';

/**
 * Utility function to merge Tailwind CSS classes
 * Similar to clsx + twMerge
 */
export function cn(...inputs: (string | undefined | null | false)[]): string {
  return inputs.filter(Boolean).join(' ');
}

/**
 * Calcule le montant de la caution en fonction de la capacité de la salle
 */
export function calculateDeposit(capacity: number): number {
  const policy = DEPOSIT_POLICIES.find((p) => p.capacity >= capacity);
  return policy?.amount ?? 50; // 50€ par défaut pour les grandes capacités
}

/**
 * Formate le prix en euros
 */
export function formatPrice(amount: number): string {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
  }).format(amount);
}

/**
 * Vérifie si une date est un lundi (jour de fermeture)
 */
export function isClosedDay(date: Date): boolean {
  return date.getDay() === 1; // Lundi
}

/**
 * Vérifie si l'heure est dans les horaires d'ouverture (11h30 - 22h00)
 */
export function isWithinOpeningHours(time: string): boolean {
  const [hours, minutes] = time.split(':').map(Number);
  const timeInMinutes = hours * 60 + minutes;

  const openingTime = 11 * 60 + 30; // 11h30
  const closingTime = 22 * 60; // 22h00

  return timeInMinutes >= openingTime && timeInMinutes <= closingTime;
}

/**
 * Calcule si une annulation peut être remboursée (> 3h avant)
 */
export function canRefundCancellation(reservationDate: Date, reservationTime: string): boolean {
  const [hours, minutes] = reservationTime.split(':').map(Number);
  const reservationDateTime = new Date(reservationDate);
  reservationDateTime.setHours(hours, minutes, 0, 0);

  const now = new Date();
  const hoursUntilReservation = (reservationDateTime.getTime() - now.getTime()) / (1000 * 60 * 60);

  return hoursUntilReservation > 3;
}

/**
 * Génère un code promo aléatoire
 */
export function generatePromoCode(prefix: string = 'LRG'): string {
  const randomPart = Math.random().toString(36).substring(2, 8).toUpperCase();
  return `${prefix}${randomPart}`;
}

/**
 * Calcule les points de fidélité pour un montant dépensé
 */
export function calculateLoyaltyPoints(amount: number, pointsPerEuro: number = 10): number {
  return Math.floor(amount * pointsPerEuro);
}

/**
 * Valide un email
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Valide un numéro de téléphone français
 */
export function isValidPhoneNumber(phone: string): boolean {
  const phoneRegex = /^(\+33|0)[1-9](\d{2}){4}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
}

/**
 * Formate une date en français
 */
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('fr-FR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

/**
 * Formate une durée en heures
 */
export function formatDuration(hours: number): string {
  return hours === 1 ? '1 heure' : `${hours} heures`;
}

/**
 * Récupère le nom complet d'une ville
 */
export function getCityName(city: City): string {
  const cityNames: Record<City, string> = {
    lille: 'Lille',
    paris: 'Paris',
    lyon: 'Lyon',
  };
  return cityNames[city];
}
