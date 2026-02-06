'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMapMarkerAlt, faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons';
import {faClock} from "@fortawesome/free-regular-svg-icons";
import {faInstagram, faXTwitter} from "@fortawesome/free-brands-svg-icons";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    subject: 'general',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulaire envoyé:', formData);
    // Logique d'envoi à implémenter
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-slate-night py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-5xl text-champagne-gold mb-4">
            Contactez-Nous
          </h1>
          <p className="text-cream-light/80 text-lg">
            Une question ? Une demande particulière ? Nous sommes à votre écoute.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Formulaire de contact */}
          <div className="bg-slate-night/50 border border-champagne-gold/30 rounded-lg p-8">
            <h2 className="font-serif text-3xl text-champagne-gold mb-6">
              Envoyez-nous un message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-champagne-gold font-semibold mb-2">
                  Nom complet *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-night border border-champagne-gold/30 rounded-lg text-cream-light focus:border-champagne-gold focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-champagne-gold font-semibold mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-night border border-champagne-gold/30 rounded-lg text-cream-light focus:border-champagne-gold focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-champagne-gold font-semibold mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-night border border-champagne-gold/30 rounded-lg text-cream-light focus:border-champagne-gold focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="city" className="block text-champagne-gold font-semibold mb-2">
                  Établissement concerné
                </label>
                <select
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-night border border-champagne-gold/30 rounded-lg text-cream-light focus:border-champagne-gold focus:outline-none"
                >
                  <option value="">Sélectionnez une ville</option>
                  <option value="lille">Lille</option>
                  <option value="paris">Paris</option>
                  <option value="lyon">Lyon</option>
                </select>
              </div>

              <div>
                <label htmlFor="subject" className="block text-champagne-gold font-semibold mb-2">
                  Sujet *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-night border border-champagne-gold/30 rounded-lg text-cream-light focus:border-champagne-gold focus:outline-none"
                >
                  <option value="general">Question générale</option>
                  <option value="reservation">Réservation (1-4 personnes)</option>
                  <option value="group">Événement de groupe</option>
                  <option value="menu">Question sur les menus</option>
                  <option value="complaint">Réclamation</option>
                  <option value="other">Autre</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-champagne-gold font-semibold mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-night border border-champagne-gold/30 rounded-lg text-cream-light focus:border-champagne-gold focus:outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-champagne-gold text-slate-night font-bold text-lg rounded-lg hover:bg-champagne-gold/90 transition-all transform hover:scale-105"
              >
                Envoyer le Message
              </button>
            </form>
          </div>

          {/* Informations de contact */}
          <div className="space-y-8">
            {/* Réservations téléphoniques */}
            <div className="bg-champagne-gold/10 border border-champagne-gold/30 rounded-lg p-6">
              <h3 className="font-serif text-2xl text-champagne-gold mb-4">
                    <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
              </h3>
              <p className="text-cream-light/80 mb-4">
                Pour les salles de <strong>1 à 4 personnes</strong>, réservez par téléphone
                sans caution (appel non masqué requis).
              </p>
              <div className="space-y-3">
                <div className="bg-slate-night/50 rounded-lg p-4">
                  <div className="text-champagne-gold font-semibold mb-1">Lille</div>
                  <a href="tel:+33300000000" className="text-cream-light hover:text-champagne-gold transition-colors">
                    +33 3 XX XX XX XX
                  </a>
                </div>
                <div className="bg-slate-night/50 rounded-lg p-4">
                  <div className="text-champagne-gold font-semibold mb-1">Paris</div>
                  <a href="tel:+33100000000" className="text-cream-light hover:text-champagne-gold transition-colors">
                    +33 1 XX XX XX XX
                  </a>
                </div>
                <div className="bg-slate-night/50 rounded-lg p-4">
                  <div className="text-champagne-gold font-semibold mb-1">Lyon</div>
                  <a href="tel:+33400000000" className="text-cream-light hover:text-champagne-gold transition-colors">
                    +33 4 XX XX XX XX
                  </a>
                </div>
              </div>
            </div>

            {/* Horaires */}
            <div className="bg-slate-night/50 border border-champagne-gold/30 rounded-lg p-6">
              <h3 className="font-serif text-2xl text-champagne-gold mb-4">
                  <FontAwesomeIcon icon={faClock}></FontAwesomeIcon> Horaires d&apos;Ouverture
              </h3>
              <div className="space-y-2 text-cream-light/80">
                <div className="flex justify-between">
                  <span>Mardi - Dimanche</span>
                  <span className="font-semibold">11h30 - 22h00</span>
                </div>
                <div className="flex justify-between text-champagne-gold/70">
                  <span>Lundi</span>
                  <span className="font-semibold">Fermé</span>
                </div>
              </div>
            </div>

            {/* Adresses */}
            <div className="bg-slate-night/50 border border-champagne-gold/30 rounded-lg p-6">
              <h3 className="font-serif text-2xl text-champagne-gold mb-4 flex items-center gap-2">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                Nos Adresses
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="text-champagne-gold font-semibold mb-1">Lille</div>
                  <div className="text-cream-light/80 text-sm">
                    123 Rue de la République<br />
                    59000 Lille, France
                  </div>
                </div>
                <div>
                  <div className="text-champagne-gold font-semibold mb-1">Paris</div>
                  <div className="text-cream-light/80 text-sm">
                    45 Avenue des Champs-Élysées<br />
                    75008 Paris, France
                  </div>
                </div>
                <div>
                  <div className="text-champagne-gold font-semibold mb-1">Lyon</div>
                  <div className="text-cream-light/80 text-sm">
                    78 Rue de la Bourse<br />
                    69002 Lyon, France
                  </div>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-slate-night/50 border border-champagne-gold/30 rounded-lg p-6">
              <h3 className="font-serif text-2xl text-champagne-gold mb-4 flex items-center gap-2">
                <FontAwesomeIcon icon={faEnvelope} />
                Email
              </h3>
              <a
                href="mailto:contact@lerefugegourmand.fr"
                className="text-cream-light hover:text-champagne-gold transition-colors"
              >
                contact@lerefugegourmand.fr
              </a>
              <p className="text-cream-light/60 text-sm mt-2">
                Réponse sous 24-48h
              </p>
            </div>

            {/* Réseaux sociaux (optionnel) */}
            <div className="bg-slate-night/50 border border-champagne-gold/30 rounded-lg p-6">
              <h3 className="font-serif text-2xl text-champagne-gold mb-4">
                Suivez-nous
              </h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-champagne-gold/20 border border-champagne-gold/30 rounded-lg flex items-center justify-center hover:bg-champagne-gold/30 transition-all"
                  aria-label="Instagram"
                >
                    <span className="text-champagne-gold text-xl"><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></span>
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-champagne-gold/20 border border-champagne-gold/30 rounded-lg flex items-center justify-center hover:bg-champagne-gold/30 transition-all"
                  aria-label="Twitter"
                >
                    <span className="text-champagne-gold text-xl"><FontAwesomeIcon icon={faXTwitter}></FontAwesomeIcon></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

