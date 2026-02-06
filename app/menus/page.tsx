'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLeaf,
    faStar,
    faSeedling,
    faAppleWhole,
    faExclamationTriangle,
    faUtensils, faMugSaucer, faWineBottle, faChampagneGlasses, faWineGlass
} from '@fortawesome/free-solid-svg-icons';

// Données de démonstration (à remplacer par des appels API)
const MENUS = [
  {
    id: '1',
    name: 'Menu Classique',
    type: 'classic',
    description: 'Notre sélection permanente de plats signature',
    price: 45,
    items: [
      {
        category: 'Entrées',
        dishes: [
          { name: 'Foie gras mi-cuit', description: 'Chutney de figues et pain brioché', price: 18, vegetarian: false, vegan: false },
          { name: 'Carpaccio de Saint-Jacques', description: 'Agrumes et huile d\'olive citronnée', price: 16, vegetarian: false, vegan: false },
          { name: 'Velouté de courge', description: 'Noisettes torréfiées et crème de truffe', price: 12, vegetarian: true, vegan: false },
        ],
      },
      {
        category: 'Plats',
        dishes: [
          { name: 'Magret de canard', description: 'Sauce aux cèpes et purée de céleri', price: 28, vegetarian: false, vegan: false },
          { name: 'Dos de cabillaud', description: 'Risotto crémeux aux herbes fraîches', price: 26, vegetarian: false, vegan: false },
          { name: 'Ravioles végétales', description: 'Légumes de saison et jus de tomate', price: 22, vegetarian: true, vegan: true },
        ],
      },
      {
        category: 'Desserts',
        dishes: [
          { name: 'Tarte Tatin', description: 'Glace vanille de Madagascar', price: 10, vegetarian: true, vegan: false },
          { name: 'Fondant au chocolat', description: 'Coeur coulant et crème anglaise', price: 11, vegetarian: true, vegan: false },
          { name: 'Crème brûlée', description: 'Aux épices douces', price: 9, vegetarian: true, vegan: false },
        ],
      },
    ],
  },
  {
    id: '2',
    name: 'Menu Saison',
    type: 'seasonal',
    description: 'Nos créations inspirées des produits du moment',
    price: 55,
    items: [
      {
        category: 'Entrées',
        dishes: [
          { name: 'Asperges blanches', description: 'Vinaigrette au yuzu et œuf mollet', price: 16, vegetarian: true, vegan: false },
          { name: 'Tartare de thon rouge', description: 'Avocat et sésame noir', price: 19, vegetarian: false, vegan: false },
        ],
      },
      {
        category: 'Plats',
        dishes: [
          { name: 'Agneau de sept heures', description: 'Légumes primeurs glacés', price: 32, vegetarian: false, vegan: false },
          { name: 'Bar de ligne', description: 'Fenouil confit et sauce vierge', price: 30, vegetarian: false, vegan: false },
        ],
      },
      {
        category: 'Desserts',
        dishes: [
          { name: 'Fraisier revisité', description: 'Crème mousseline et basilic', price: 12, vegetarian: true, vegan: false },
          { name: 'Soufflé au Grand Marnier', description: 'Crème glacée à l\'orange', price: 13, vegetarian: true, vegan: false },
        ],
      },
    ],
  },
  {
    id: '3',
    name: 'Menu Éphémère',
    type: 'ephemeral',
    description: 'Création du chef - Renouvelé chaque semaine',
    price: 65,
    badge: 'Cette semaine',
    items: [
      {
        category: 'Mise en bouche',
        dishes: [
          { name: 'Amuse-bouche du chef', description: 'Surprise de la semaine', price: 0, vegetarian: false, vegan: false },
        ],
      },
      {
        category: 'Entrées',
        dishes: [
          { name: 'Homard breton', description: 'Émulsion de bisque et fenouil', price: 24, vegetarian: false, vegan: false },
          { name: 'Ris de veau croustillant', description: 'Jus corsé et girolles', price: 22, vegetarian: false, vegan: false },
        ],
      },
      {
        category: 'Plats',
        dishes: [
          { name: 'Pigeon rosé', description: 'Betterave et jus au café', price: 36, vegetarian: false, vegan: false },
          { name: 'Turbot sauvage', description: 'Beurre blanc au champagne et caviar', price: 38, vegetarian: false, vegan: false },
        ],
      },
      {
        category: 'Desserts',
        dishes: [
          { name: 'Sphère chocolat-passion', description: 'Cœur coulant acidulé', price: 14, vegetarian: true, vegan: false },
          { name: 'Vacherin glacé', description: 'Fruits rouges et meringue', price: 13, vegetarian: true, vegan: false },
        ],
      },
    ],
  },
];

export default function MenusPage() {
  const [selectedMenu, setSelectedMenu] = useState(MENUS[0].id);
  const [filterVegetarian, setFilterVegetarian] = useState(false);
  const [filterVegan, setFilterVegan] = useState(false);

  const currentMenu = MENUS.find((m) => m.id === selectedMenu) || MENUS[0];

  return (
    <div className="min-h-screen bg-slate-night py-24 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-champagne-gold/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-champagne-gold/3 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block mb-6">
            <span className="px-6 py-2 rounded-full glass text-champagne-gold text-sm font-semibold tracking-widest">
              ✦ NOS CARTES ✦
            </span>
          </div>
          <h1 className="font-serif text-6xl md:text-8xl luxury-gradient mb-6">
            Nos Menus
          </h1>
          <p className="text-cream-light/80 text-xl max-w-3xl mx-auto leading-relaxed">
            Une cuisine raffinée élaborée avec des produits locaux et de saison.
            Découvrez nos trois menus, dont un renouvelé chaque semaine.
          </p>
        </div>

        {/* Sélection des menus */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {MENUS.map((menu, index) => (
            <button
              key={menu.id}
              onClick={() => setSelectedMenu(menu.id)}
              className={`group relative p-8 rounded-2xl transition-all text-left hover-lift animate-fade-in ${
                selectedMenu === menu.id
                  ? 'gradient-border shadow-2xl shadow-champagne-gold/20 scale-105'
                  : 'glass hover:scale-102'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {menu.badge && (
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-champagne-gold to-[#E8D4A8] text-slate-night px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse">
                  {menu.badge}
                </div>
              )}
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-champagne-gold/30 to-champagne-gold/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <FontAwesomeIcon
                    icon={menu.type === 'classic' ? faUtensils : menu.type === 'seasonal' ? faLeaf : faStar}
                    className="text-champagne-gold text-3xl"
                  />
                </div>
                <h3 className="font-serif text-3xl text-champagne-gold mb-3 group-hover:luxury-gradient transition-all">
                  {menu.name}
                </h3>
                <p className="text-cream-light/70 mb-6 leading-relaxed">
                  {menu.description}
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-champagne-gold font-bold text-4xl">{menu.price}€</span>
                  <span className="text-cream-light/50 text-sm">par personne</span>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Filtres */}
        <div className="flex flex-wrap gap-4 mb-12 justify-center">
          <button
            onClick={() => {
              setFilterVegetarian(!filterVegetarian);
              if (!filterVegetarian) setFilterVegan(false);
            }}
            className={`group px-8 py-3 rounded-xl border-2 transition-all font-semibold hover-lift ${
              filterVegetarian
                ? 'border-champagne-gold bg-champagne-gold text-slate-night shadow-lg shadow-champagne-gold/30'
                : 'glass border-champagne-gold/30 text-cream-light hover:border-champagne-gold'
            }`}
          >
            <span className="inline-flex items-center gap-2">
              <FontAwesomeIcon icon={faSeedling} />
              Végétarien
            </span>
          </button>
          <button
            onClick={() => {
              setFilterVegan(!filterVegan);
              if (filterVegan) setFilterVegetarian(false);
            }}
            className={`group px-8 py-3 rounded-xl border-2 transition-all font-semibold hover-lift ${
              filterVegan
                ? 'border-champagne-gold bg-champagne-gold text-slate-night shadow-lg shadow-champagne-gold/30'
                : 'glass border-champagne-gold/30 text-cream-light hover:border-champagne-gold'
            }`}
          >
            <span className="inline-flex items-center gap-2">
              <FontAwesomeIcon icon={faAppleWhole} />
              Vegan
            </span>
          </button>
        </div>

        {/* Carte du menu sélectionné */}
        <div className="gradient-border p-10 md:p-16 animate-slide-up">
          <div className="mb-16 text-center">
            <h2 className="font-serif text-5xl md:text-6xl luxury-gradient mb-4">
              {currentMenu.name}
            </h2>
            <p className="text-cream-light/70 text-lg">
              {currentMenu.description}
            </p>
          </div>

          <div className="space-y-16">
            {currentMenu.items.map((section, idx) => (
            <div key={idx} className="border-b border-champagne-gold/20 pb-12 last:border-0">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-champagne-gold/50 to-champagne-gold"></div>
                <h3 className="font-serif text-4xl luxury-gradient text-center px-6">
                  {section.category}
                </h3>
                <div className="h-px flex-1 bg-gradient-to-r from-champagne-gold to-transparent"></div>
              </div>

              <div className="grid gap-6">
                {section.dishes
                  .filter((dish) => {
                    if (filterVegan) return dish.vegan;
                    if (filterVegetarian) return dish.vegetarian;
                    return true;
                  })
                  .map((dish, dishIdx) => (
                    <div
                      key={dishIdx}
                      className="group glass p-6 rounded-xl hover:shadow-xl hover:shadow-champagne-gold/10 transition-all hover-lift"
                    >
                      <div className="flex justify-between items-start gap-6">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h4 className="text-cream-light font-bold text-xl group-hover:text-champagne-gold transition-colors">
                              {dish.name}
                            </h4>
                            {dish.vegetarian && !dish.vegan && (
                              <span className="flex items-center gap-1 text-xs bg-gradient-to-r from-green-600/30 to-green-700/30 text-green-300 px-3 py-1 rounded-full font-semibold">
                                <FontAwesomeIcon icon={faSeedling} className="w-3 h-3" />
                                Végétarien
                              </span>
                            )}
                            {dish.vegan && (
                              <span className="flex items-center gap-1 text-xs bg-gradient-to-r from-green-700/30 to-green-800/30 text-green-200 px-3 py-1 rounded-full font-semibold">
                                <FontAwesomeIcon icon={faAppleWhole} className="w-3 h-3" />
                                Vegan
                              </span>
                            )}
                          </div>
                          <p className="text-cream-light/70 leading-relaxed italic">
                            {dish.description}
                          </p>
                        </div>
                        {dish.price > 0 && (
                          <div className="flex flex-col items-end">
                            <div className="text-champagne-gold font-bold text-2xl whitespace-nowrap">
                              {dish.price}€
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
          </div>
          {/* Informations allergies */}
          <div className="mt-12 pt-8 border-t border-champagne-gold/20">
            <div className="glass p-6 rounded-xl text-center">
              <p className="text-cream-light/80 leading-relaxed">
                <FontAwesomeIcon icon={faExclamationTriangle} className="text-champagne-gold text-2xl mr-2" />
                <strong className="text-champagne-gold">Information allergènes :</strong><br/>
                Nos plats peuvent contenir des allergènes.
                Merci de signaler toute allergie lors de votre réservation ou à votre arrivée.
              </p>
            </div>
          </div>
        </div>

        {/* Carte des boissons */}
        <div className="mt-20 gradient-border p-10 md:p-16">
          <div className="text-center mb-12">
            <div className="inline-block mb-6">
              <span className="px-6 py-2 rounded-full glass text-champagne-gold text-sm font-semibold tracking-widest">
                ✦ NOTRE CAVE ✦
              </span>
            </div>
            <h2 className="font-serif text-5xl luxury-gradient mb-4">
              Carte des Vins & Boissons
            </h2>
            <p className="text-cream-light/70">
              Une sélection soignée pour accompagner votre repas
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="glass p-6 rounded-xl">
              <h3 className="flex items-center gap-3 text-champagne-gold font-bold text-2xl mb-6">
                <span className="text-3xl"><FontAwesomeIcon icon={faWineGlass} /></span>
                Vins Rouges
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-baseline border-b border-champagne-gold/10 pb-3">
                  <div>
                    <span className="text-cream-light font-medium">Bordeaux Supérieur 2020</span>
                    <p className="text-cream-light/50 text-sm">AOC Bordeaux</p>
                  </div>
                  <span className="text-champagne-gold font-bold text-xl">35€</span>
                </div>
                <div className="flex justify-between items-baseline border-b border-champagne-gold/10 pb-3">
                  <div>
                    <span className="text-cream-light font-medium">Bourgogne Pinot Noir 2019</span>
                    <p className="text-cream-light/50 text-sm">AOC Bourgogne</p>
                  </div>
                  <span className="text-champagne-gold font-bold text-xl">45€</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <div>
                    <span className="text-cream-light font-medium">Côtes du Rhône Villages 2021</span>
                    <p className="text-cream-light/50 text-sm">AOC Rhône</p>
                  </div>
                  <span className="text-champagne-gold font-bold text-xl">32€</span>
                </div>
              </div>
            </div>

            <div className="glass p-6 rounded-xl">
              <h3 className="flex items-center gap-3 text-champagne-gold font-bold text-2xl mb-6">
                <span className="text-3xl"><FontAwesomeIcon icon={faChampagneGlasses} /></span>
                Vins Blancs
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-baseline border-b border-champagne-gold/10 pb-3">
                  <div>
                    <span className="text-cream-light font-medium">Chablis 2021</span>
                    <p className="text-cream-light/50 text-sm">AOC Chablis</p>
                  </div>
                  <span className="text-champagne-gold font-bold text-xl">38€</span>
                </div>
                <div className="flex justify-between items-baseline border-b border-champagne-gold/10 pb-3">
                  <div>
                    <span className="text-cream-light font-medium">Sancerre 2022</span>
                    <p className="text-cream-light/50 text-sm">AOC Loire</p>
                  </div>
                  <span className="text-champagne-gold font-bold text-xl">42€</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <div>
                    <span className="text-cream-light font-medium">Pouilly-Fuissé 2020</span>
                    <p className="text-cream-light/50 text-sm">AOC Bourgogne</p>
                  </div>
                  <span className="text-champagne-gold font-bold text-xl">48€</span>
                </div>
              </div>
            </div>

            <div className="glass p-6 rounded-xl">
              <h3 className="flex items-center gap-3 text-champagne-gold font-bold text-2xl mb-6">
                <span className="text-3xl"><FontAwesomeIcon icon={faWineBottle} /></span>
                Champagnes
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-baseline border-b border-champagne-gold/10 pb-3">
                  <div>
                    <span className="text-cream-light font-medium">Champagne Brut</span>
                    <p className="text-cream-light/50 text-sm">Maison réputée</p>
                  </div>
                  <span className="text-champagne-gold font-bold text-xl">65€</span>
                </div>
                <div className="flex justify-between items-baseline border-b border-champagne-gold/10 pb-3">
                  <div>
                    <span className="text-cream-light font-medium">Champagne Rosé</span>
                    <p className="text-cream-light/50 text-sm">Cuvée prestige</p>
                  </div>
                  <span className="text-champagne-gold font-bold text-xl">75€</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <div>
                    <span className="text-cream-light font-medium">Champagne Millésimé 2015</span>
                    <p className="text-cream-light/50 text-sm">Grande réserve</p>
                  </div>
                  <span className="text-champagne-gold font-bold text-xl">95€</span>
                </div>
              </div>
            </div>

            <div className="glass p-6 rounded-xl">
              <h3 className="flex items-center gap-3 text-champagne-gold font-bold text-2xl mb-6">
                <span className="text-3xl"><FontAwesomeIcon icon={faMugSaucer} /></span>
                Boissons
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-baseline border-b border-champagne-gold/10 pb-3">
                  <span className="text-cream-light font-medium">Eau minérale (50cl)</span>
                  <span className="text-champagne-gold font-bold text-xl">5€</span>
                </div>
                <div className="flex justify-between items-baseline border-b border-champagne-gold/10 pb-3">
                  <span className="text-cream-light font-medium">Jus de fruits frais</span>
                  <span className="text-champagne-gold font-bold text-xl">6€</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-cream-light font-medium">Café / Thé</span>
                  <span className="text-champagne-gold font-bold text-xl">4€</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Réservation */}
        <div className="mt-20 text-center">
          <div className="glass p-12 rounded-2xl max-w-3xl mx-auto">
            <h3 className="font-serif text-4xl luxury-gradient mb-4">
              Prêt à Réserver ?
            </h3>
            <p className="text-cream-light/70 mb-8 text-lg">
              Découvrez notre expérience culinaire unique dans l'intimité de nos salles privées
            </p>
            <a
              href="/reservation"
              className="inline-block px-12 py-5 bg-gradient-to-r from-champagne-gold to-[#C4A463] text-slate-night font-bold text-xl rounded-xl hover:shadow-2xl hover:shadow-champagne-gold/50 transition-all transform hover:scale-105 btn-glow"
            >
              Réserver Maintenant
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
