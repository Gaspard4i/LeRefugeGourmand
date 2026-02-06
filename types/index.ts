// Types globaux pour l'application LeRefugeGourmand

export type City = 'lille';

export type RoomCapacity = 1 | 2 | 4 | 8 | 12 | 20 | 30;

export interface Location {
  id: string;
  city: City;
  address: string;
  phone: string;
  email: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface Room {
  id: string;
  locationId: string;
  capacity: RoomCapacity;
  name: string;
  description: string;
  features: string[];
  images: string[];
  pricePerHour: number;
  depositAmount: number;
}

export interface Reservation {
  id: string;
  userId: string;
  roomId: string;
  locationId: string;
  date: Date;
  startTime: string;
  duration: number; // en heures (3-8h)
  numberOfGuests: number;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  depositPaid: boolean;
  depositAmount: number;
  depositRefunded: boolean;
  totalAmount: number;
  specialRequests?: string;
  phoneReservation: boolean;
  phoneNumber?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  loyaltyPoints: number;
  newsletterOptIn: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'starter' | 'main' | 'dessert' | 'drink';
  isEphemeral: boolean;
  allergens: string[];
  isVegetarian: boolean;
  isVegan: boolean;
  images: string[];
  availableAt: City[];
}

export interface Menu {
  id: string;
  name: string;
  description: string;
  type: 'classic' | 'seasonal' | 'ephemeral';
  items: MenuItem[];
  price?: number;
  availableFrom?: Date;
  availableTo?: Date;
}

export interface LoyaltyReward {
  id: string;
  userId: string;
  points: number;
  reason: string;
  createdAt: Date;
}

export interface PromoCode {
  id: string;
  code: string;
  discountType: 'percentage' | 'fixed';
  discountValue: number;
  validFrom: Date;
  validTo: Date;
  usageLimit: number;
  usedCount: number;
  minimumSpend?: number;
  generatedFromLoyaltyPoints: boolean;
}

export interface DepositPolicy {
  capacity: RoomCapacity;
  amount: number;
}

// Politique de caution selon la capacité
export const DEPOSIT_POLICIES: DepositPolicy[] = [
  { capacity: 1, amount: 5 },
  { capacity: 2, amount: 10 },
  { capacity: 4, amount: 12 },
  { capacity: 8, amount: 15 },
  { capacity: 12, amount: 22 },
  { capacity: 20, amount: 30 },
  { capacity: 30, amount: 50 },
];

// Heures d'ouverture
export const OPENING_HOURS = {
  start: '11:30',
  end: '22:00',
  closedDay: 1, // Lundi (0 = Dimanche, 1 = Lundi)
};

// Durées de réservation possibles
export const RESERVATION_DURATIONS = [3, 4, 5, 6, 7, 8]; // en heures

// Délai minimum pour annulation avec remboursement
export const CANCELLATION_DEADLINE_HOURS = 3;

// Points de fidélité par euro dépensé
export const LOYALTY_POINTS_PER_EURO = 10;
