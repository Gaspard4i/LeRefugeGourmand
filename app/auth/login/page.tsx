'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

export default function LoginPage() {
  const { users, login } = useAuth();
  const [selected, setSelected] = useState(users[0]?.id || '');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selected) return;
    login(selected);
    router.push('/account');
  };

  return (
    <div className="min-h-screen bg-slate-night py-12 px-4">
      <div className="max-w-md mx-auto">
        <h1 className="font-serif text-3xl text-champagne-gold mb-4">Connexion</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-champagne-gold block mb-2">Choisir un utilisateur (demo)</label>
            <select value={selected} onChange={(e) => setSelected(e.target.value)} className="w-full px-4 py-3 rounded bg-slate-night border border-champagne-gold/30 text-cream-light">
              {users.map((u) => <option key={u.id} value={u.id}>{u.firstName} {u.lastName} — {u.email}</option>)}
            </select>
          </div>

          <div className="flex gap-3">
            <button className="flex-1 py-3 bg-champagne-gold text-slate-night rounded font-semibold">Se connecter</button>
          </div>
        </form>
      </div>
    </div>
  );
}

