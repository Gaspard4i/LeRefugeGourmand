'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, faStar, faSeedling, faAppleWhole, faExclamationTriangle, faUtensils, faWineGlass } from '@fortawesome/free-solid-svg-icons';

const MENUS = [
	{ id: '1', name: 'Menu Classique', price: 30, description: 'Notre sélection permanente de plats signature' },
	{ id: '2', name: 'Menu Saison', price: 40, description: "Nos créations inspirées des produits du moment" },
	{ id: '3', name: 'Menu Éphémère', price: 48, description: "Création du chef - Renouvelé chaque semaine", badge: 'Cette semaine' },
];

export default function MenusPage() {
	const [selectedMenu, setSelectedMenu] = useState(MENUS[0].id);

	const currentMenu = MENUS.find((m) => m.id === selectedMenu) || MENUS[0];

	return (
		<main className="min-h-screen bg-slate-night py-12 px-4">
			<div className="max-w-7xl mx-auto">
				<header className="text-center mb-12">
					<h1 className="font-serif text-4xl md:text-6xl text-champagne-gold mb-3">Nos Menus</h1>
					<p className="text-cream-light/80 max-w-3xl mx-auto">Une cuisine raffinée élaborée avec des produits locaux et de saison.</p>
				</header>

				<section className="grid md:grid-cols-3 gap-6 mb-10">
					{MENUS.map((menu) => (
						<button
							key={menu.id}
							onClick={() => setSelectedMenu(menu.id)}
							className={`group p-6 rounded-xl text-left transition-all ${selectedMenu === menu.id ? 'gradient-border scale-105' : 'glass'}`}>
							<div className="flex items-center justify-between">
								<div>
									<h3 className="font-serif text-2xl text-champagne-gold mb-1">{menu.name}</h3>
									<p className="text-cream-light/70 text-sm">{menu.description}</p>
								</div>
								<div className="text-right">
									<div className="text-champagne-gold font-bold text-2xl">{menu.price}€</div>
									<div className="text-cream-light/60 text-xs">par personne</div>
								</div>
							</div>
							{menu.badge && <div className="mt-3 inline-block text-xs font-bold text-slate-night bg-champagne-gold/80 px-3 py-1 rounded-full">{menu.badge}</div>}
						</button>
					))}
				</section>

				<section className="gradient-border p-6 rounded-lg glass">
					<h2 className="font-serif text-3xl text-champagne-gold mb-4">{currentMenu.name}</h2>
					<p className="text-cream-light/70 mb-6">{currentMenu.description}</p>

					<div className="space-y-4">
						<article className="bg-slate-night/50 p-4 rounded">
							<h3 className="font-semibold text-champagne-gold">Exemple de plat</h3>
							<p className="text-cream-light/70">Plat du jour, recette inspirée de produits locaux.</p>
							<div className="mt-2 text-champagne-gold font-bold">12€</div>
						</article>

						<div className="mt-6 pt-4 border-t border-champagne-gold/20">
							<p className="text-cream-light/80"><FontAwesomeIcon icon={faExclamationTriangle} className="mr-2 text-champagne-gold" />Nos plats peuvent contenir des allergènes. Merci de signaler toute allergie.</p>
						</div>
					</div>
				</section>

				<section className="mt-12">
					<div className="text-center mb-4">
						<span className="px-4 py-1 rounded-full glass text-champagne-gold font-semibold text-sm inline-flex items-center gap-2"><FontAwesomeIcon icon={faWineGlass} /> Notre Cave</span>
					</div>
					<div className="grid md:grid-cols-2 gap-6">
						<div className="glass p-4 rounded">
							<h4 className="text-champagne-gold font-semibold">Vins & Champagnes</h4>
							<ul className="mt-2 text-cream-light/80 space-y-2">
								<li className="flex justify-between"><span>Bordeaux Supérieur</span><span className="text-champagne-gold">28€</span></li>
								<li className="flex justify-between"><span>Chablis</span><span className="text-champagne-gold">30€</span></li>
							</ul>
						</div>

						<div className="glass p-4 rounded">
							<h4 className="text-champagne-gold font-semibold">Boissons</h4>
							<ul className="mt-2 text-cream-light/80 space-y-2">
								<li className="flex justify-between"><span>Eau (50cl)</span><span className="text-champagne-gold">3€</span></li>
								<li className="flex justify-between"><span>Café / Thé</span><span className="text-champagne-gold">2€</span></li>
							</ul>
						</div>
					</div>
				</section>

			</div>
		</main>
	);
}
