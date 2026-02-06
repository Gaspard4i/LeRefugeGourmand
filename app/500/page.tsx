export default function ServerError() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-night text-cream-light">
      <div className="text-center">
        <h1 className="text-6xl font-serif text-champagne-gold mb-4">500</h1>
        <p className="mb-4">Erreur serveur.</p>
        <a href="/LeRefugeGourmand" className="text-champagne-gold underline">Retour à l'accueil</a>
      </div>
    </div>
  );
}

