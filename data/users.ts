import type { User } from '@/types';

export const USERS: User[] = [
  {
    id: 'user_1',
    email: 'gaspard@example.com',
    firstName: 'Gaspard',
    lastName: 'Catry',
    phone: '+33 7 00 00 00 01',
    loyaltyPoints: 120,
    newsletterOptIn: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 'user_2',
    email: 'tom@example.com',
    firstName: 'Tom',
    lastName: 'Nguyen',
    phone: '+33 7 00 00 00 02',
    loyaltyPoints: 40,
    newsletterOptIn: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
    {
        id: 'user_3',
        email: 'enzo@example.com',
        firstName: 'Enso',
        lastName: 'Lamour',
        phone: '+33 7 00 00 00 03',
        loyaltyPoints: 500,
        newsletterOptIn: false,
        createdAt: new Date(),
        updatedAt: new Date(),
    },
];

export default USERS;

