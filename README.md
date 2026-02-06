# Le Refuge Gourmand 🍽️

[![Deploy to GitHub Pages](https://github.com/gaspard4i/LeRefugeGourmand/workflows/Deploy%20to%20GitHub%20Pages/badge.svg)](https://github.com/gaspard4i/LeRefugeGourmand/actions)

**Plateforme de réservation pour un concept de restauration haut de gamme basé sur l'intimité et le confort.**

🌐 **[Voir le site en ligne](https://gaspard4i.github.io/LeRefugeGourmand/)**

---

## 🎯 Concept

Le Refuge Gourmand propose des **salles privées insonorisées** dans un cadre intimiste et raffiné. Une expérience culinaire unique dans les villes de **Lille, Paris et Lyon**.

### ✨ Points Forts
- 🏰 Salles privées avec isolation phonique totale
- 🍷 Cuisine locale et de saison
- 📱 Commande via tablettes en salle
- 🎮 Jeux de société disponibles
- 💎 Système de fidélité avec codes promos

---

## 🎨 Design & Technologies

### Direction Artistique
- **Couleur Primaire** : Bleu Ardoise `#282F38`
- **Couleur Secondaire** : Or Champagne `#D4B473`
- **Typographie** : Crème `#F5F5F0`

### Stack Technique
- ⚡ **Next.js 15** (App Router)
- 🎨 **Tailwind CSS v3**
- 🗄️ **Prisma ORM** (PostgreSQL)
- 💳 **Stripe** (Paiements)
- 🎭 **Font Awesome** (Icônes)
- 📱 **Responsive Design**

---

## 🚀 Installation Locale

```bash
# Cloner le repo
git clone https://github.com/GaspardCatry/LeRefugeGourmand.git
cd LeRefugeGourmand

# Installer les dépendances
npm install

# Configurer l'environnement
cp .env.example .env
# Éditer .env avec vos variables

# Générer Prisma Client
npx prisma generate

# Lancer en développement
npm run dev
```

Le site sera accessible sur `http://localhost:3000`

---

## 📁 Structure du Projet

```
LeRefugeGourmand/
├── app/                    # Pages Next.js (App Router)
│   ├── page.tsx           # Page d'accueil
│   ├── reservation/       # Réservation en ligne
│   ├── menus/            # Cartes des menus
│   ├── contact/          # Formulaire de contact
│   └── account/          # Espace client
├── components/
│   ├── atoms/            # Composants de base (Button, Input...)
│   ├── molecules/        # Composants composés (Card, MenuItem...)
│   └── organisms/        # Composants complexes
├── lib/
│   ├── prisma.ts         # Client Prisma
│   ├── stripe.ts         # Configuration Stripe
│   └── utils.ts          # Utilitaires
├── prisma/
│   └── schema.prisma     # Schéma BDD
└── types/
    └── index.ts          # Types TypeScript
```

---

## 🔧 Scripts Disponibles

```bash
npm run dev        # Développement (localhost:3000)
npm run build      # Build production
npm run start      # Serveur production
npm run lint       # Vérification ESLint
npx prisma studio  # Interface BDD
```

---

## 📅 Fonctionnalités

### ✅ Réservation
- Sélection ville, date, heure, durée
- Choix de la capacité (1 à 30+ personnes)
- Caution en ligne via Stripe
- Politique d'annulation (remboursement auto > 3h)

### 📞 Réservation Téléphonique
- Pour salles 1-4 personnes
- Sans caution (appel non masqué requis)

### 🍽️ Menus
- Menu Classique
- Menu Saison
- Menu Éphémère (hebdomadaire)
- Filtres végétarien/vegan
- Carte des vins & boissons

### 👤 Compte Client
- Historique des réservations
- Points de fidélité
- Génération de codes promos
- Newsletter opt-in

---

## 🌐 Déploiement

### GitHub Pages (Automatique)

Le site est déployé automatiquement via **GitHub Actions** à chaque push sur `main`.

**URL de production** : https://gaspard4i.github.io/LeRefugeGourmand/

### Configuration requise sur GitHub

1. Aller dans **Settings** > **Pages**
2. Source : **GitHub Actions**
3. Le workflow `.github/workflows/deploy.yml` s'exécutera automatiquement

---

## 🛡️ Sécurité & Règlement

- ✅ Validation du règlement intérieur obligatoire
- 📹 Vidéosurveillance mentionnée
- 💰 Frais en cas de dégradation
- 🔒 Politique de confidentialité conforme RGPD

---

## 📱 Horaires

**Mardi - Dimanche** : 11h30 - 22h00  
**Lundi** : Fermé

---

## 📍 Établissements

### Lille
123 Rue de la République  
59000 Lille, France

### Paris
45 Avenue des Champs-Élysées  
75008 Paris, France

### Lyon
78 Rue de la Bourse  
69002 Lyon, France

---

## 📄 Licence

Ce projet est sous licence **MIT** - voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

## 👨‍💻 Auteur

**Gaspard Catry**

- GitHub: [@gaspard4i](https://github.com/gaspard4i)
- Projet: [LeRefugeGourmand](https://github.com/gaspard4i/LeRefugeGourmand)

---

## 🙏 Remerciements

- Next.js Team
- Tailwind CSS
- Prisma
- Font Awesome
- Stripe

---

**⭐ N'oubliez pas de mettre une étoile au projet si vous l'appréciez !**

