"use client";

import React from 'react';

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-night text-cream-light">
      <div className="text-center">
        <h1 className="text-6xl font-serif text-champagne-gold mb-4">Une erreur est survenue</h1>
        <p className="mb-4">Désolé, quelque chose s'est mal passé sur le serveur.</p>
        <button onClick={() => reset()} className="px-6 py-3 bg-champagne-gold text-slate-night rounded">Réessayer</button>
      </div>
    </div>
  );
}
