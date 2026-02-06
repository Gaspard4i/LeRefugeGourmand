import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-night">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-night/90 to-slate-night/70 z-10" />

        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-champagne-gold mb-6">
            Le Refuge Gourmand
          </h1>
          <p className="text-xl md:text-2xl text-cream-light/90 mb-8 max-w-3xl mx-auto">
            Découvrez l&apos;intimité absolue dans nos salles privées insonorisées.
            Une expérience culinaire raffinée où chaque moment vous appartient.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/reservation"
              className="px-8 py-4 bg-champagne-gold text-slate-night font-semibold rounded-lg hover:bg-champagne-gold/90 transition-all transform hover:scale-105"
            >
              Réserver une Table
            </Link>
            <Link
              href="/menus"
              className="px-8 py-4 border-2 border-champagne-gold text-champagne-gold font-semibold rounded-lg hover:bg-champagne-gold/10 transition-all"
            >
              Découvrir nos Menus
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-champagne-gold" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </section>

      {/* Concept Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl text-champagne-gold text-center mb-16">
            Notre Concept
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Privacy */}
            <div className="bg-slate-night/50 border border-champagne-gold/30 rounded-lg p-8 hover:border-champagne-gold transition-all">
              <div className="w-16 h-16 bg-champagne-gold/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-champagne-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif text-champagne-gold mb-4 text-center">Intimité Totale</h3>
              <p className="text-cream-light/80 text-center">
                Salles entièrement insonorisées avec murs physiques. Votre privacy est notre priorité absolue.
              </p>
            </div>

            {/* Ambiance */}
            <div className="bg-slate-night/50 border border-champagne-gold/30 rounded-lg p-8 hover:border-champagne-gold transition-all">
              <div className="w-16 h-16 bg-champagne-gold/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-champagne-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif text-champagne-gold mb-4 text-center">Ambiance Raffinée</h3>
              <p className="text-cream-light/80 text-center">
                Décor inspiré des bureaux chics : bois noble, cuir authentique et lumière tamisée.
              </p>
            </div>

            {/* Cuisine */}
            <div className="bg-slate-night/50 border border-champagne-gold/30 rounded-lg p-8 hover:border-champagne-gold transition-all">
              <div className="w-16 h-16 bg-champagne-gold/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-champagne-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif text-champagne-gold mb-4 text-center">Cuisine Locale</h3>
              <p className="text-cream-light/80 text-center">
                Produits de saison et de nos régions. Un menu éphémère renouvelé chaque semaine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20 px-4 bg-slate-night/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl text-champagne-gold text-center mb-16">
            Nos Établissements
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {['Lille', 'Paris', 'Lyon'].map((city) => (
              <div key={city} className="group relative overflow-hidden rounded-lg border border-champagne-gold/30 hover:border-champagne-gold transition-all">
                <div className="aspect-[4/3] bg-gradient-to-br from-champagne-gold/20 to-slate-night/80 flex items-center justify-center">
                  <span className="text-5xl font-serif text-champagne-gold">{city}</span>
                </div>
                <div className="p-6 bg-slate-night/80">
                  <h3 className="text-2xl font-serif text-champagne-gold mb-2">{city}</h3>
                  <p className="text-cream-light/70 mb-4">
                    Ouvert du mardi au dimanche<br />
                    11h30 - 22h00
                  </p>
                  <Link
                    href={`/reservation?city=${city.toLowerCase()}`}
                    className="inline-block text-champagne-gold hover:text-champagne-gold/80 font-semibold"
                  >
                    Réserver →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capacities Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-champagne-gold mb-8">
            Des Salles Pour Tous Vos Événements
          </h2>
          <p className="text-xl text-cream-light/80 mb-12 max-w-3xl mx-auto">
            De l&apos;intimité d&apos;un dîner en solo aux grandes célébrations,
            nous disposons de salles adaptées de 1 à 30+ personnes.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {[1, 2, 4, 8, 12, 20, '30+'].map((capacity) => (
              <div key={capacity} className="bg-slate-night/50 border border-champagne-gold/30 rounded-lg p-6 hover:border-champagne-gold transition-all">
                <div className="text-3xl font-bold text-champagne-gold mb-2">{capacity}</div>
                <div className="text-sm text-cream-light/70">
                  {capacity === 1 ? 'personne' : 'personnes'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-t from-slate-night via-champagne-gold/10 to-slate-night">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-champagne-gold mb-6">
            Prêt à Vivre l&apos;Expérience ?
          </h2>
          <p className="text-xl text-cream-light/80 mb-8">
            Réservez dès maintenant votre salle privée et découvrez
            une nouvelle façon de savourer l&apos;instant présent.
          </p>
          <Link
            href="/reservation"
            className="inline-block px-10 py-5 bg-champagne-gold text-slate-night font-bold text-lg rounded-lg hover:bg-champagne-gold/90 transition-all transform hover:scale-105"
          >
            Réserver Maintenant
          </Link>
        </div>
      </section>
    </div>
  );
}

