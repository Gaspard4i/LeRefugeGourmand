'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

export default function RegisterPage() {
  const { register } = useAuth();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const user = register({ firstName, lastName, email, loyaltyPoints: 0, newsletterOptIn: true });
    router.push('/account');
  };

  return (
    <div className="min-h-screen bg-slate-night py-12 px-4">
      <div className="max-w-md mx-auto">
        <h1 className="font-serif text-3xl text-champagne-gold mb-4">Créer un compte</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-champagne-gold block mb-2">Prénom</label>
            <input value={firstName} onChange={(e) => setFirstName(e.target.value)} className="w-full px-4 py-3 rounded bg-slate-night border border-champagne-gold/30 text-cream-light" />
          </div>
          <div>
            <label className="text-champagne-gold block mb-2">Nom</label>
            <input value={lastName} onChange={(e) => setLastName(e.target.value)} className="w-full px-4 py-3 rounded bg-slate-night border border-champagne-gold/30 text-cream-light" />
          </div>
          <div>
            <label className="text-champagne-gold block mb-2">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-3 rounded bg-slate-night border border-champagne-gold/30 text-cream-light" />
          </div>

          <div className="flex gap-3">
            <button className="flex-1 py-3 bg-champagne-gold text-slate-night rounded font-semibold">Créer</button>
          </div>
        </form>
      </div>
    </div>
  );
}

