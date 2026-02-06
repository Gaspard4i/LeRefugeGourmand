# ✅ CHECKLIST DE PUBLICATION

## 📋 Avant de Commencer

- [ ] Node.js installé
- [ ] Git installé
- [ ] Compte GitHub actif
- [ ] PowerShell ouvert dans le dossier du projet

---

## 🚀 ÉTAPES DE PUBLICATION

### 1. Créer le Repository sur GitHub

- [ ] Aller sur https://github.com/new
- [ ] Nom du repo : `LeRefugeGourmand`
- [ ] Description : `Plateforme de réservation - Salles privées insonorisées`
- [ ] Visibilité : **Public**
- [ ] NE PAS cocher "Add README"
- [ ] Cliquer sur **Create repository**

### 2. Configurer Git Local

#### Option A : Script Automatique (RECOMMANDÉ)

- [ ] Ouvrir PowerShell dans le dossier
- [ ] Exécuter : `.\deploy.ps1`
- [ ] Suivre les instructions du script
- [ ] Le script ouvre automatiquement GitHub Actions

#### Option B : Commandes Manuelles

```bash
# Si ce n'est pas déjà fait :
- [ ] git init
- [ ] git add .
- [ ] git commit -m "Initial commit - Le Refuge Gourmand"
- [ ] git remote add origin https://github.com/GaspardCatry/LeRefugeGourmand.git
- [ ] git branch -M main
- [ ] git push -u origin main
```

### 3. Activer GitHub Pages

- [ ] Aller sur https://github.com/GaspardCatry/LeRefugeGourmand
- [ ] Cliquer sur **Settings** (en haut)
- [ ] Menu latéral → **Pages**
- [ ] Source : Sélectionner **GitHub Actions**
- [ ] Attendre la confirmation

### 4. Attendre le Déploiement

- [ ] Aller sur l'onglet **Actions**
- [ ] Vérifier que le workflow "Deploy to GitHub Pages" est en cours
- [ ] Attendre que le statut passe à ✅ (2-3 minutes)
- [ ] Une fois terminé, une URL verte apparaît

### 5. Vérifier le Site

- [ ] Visiter https://gaspardcatry.github.io/LeRefugeGourmand/
- [ ] Vérifier que la page d'accueil s'affiche
- [ ] Tester la navigation (Réservation, Menus, Contact)
- [ ] Vérifier que les styles s'affichent correctement
- [ ] Tester sur mobile (responsive)

---

## 🧪 Tests Locaux (Optionnel mais Recommandé)

Avant de pousser sur GitHub :

- [ ] `npm run build` → Vérifier qu'il n'y a pas d'erreurs
- [ ] `npm run dev` → Tester le site localement
- [ ] Vérifier toutes les pages
- [ ] Tester les formulaires
- [ ] Vérifier la console (F12) pour les erreurs

---

## 📊 Vérifications Post-Déploiement

### Fonctionnalités à Tester

- [ ] **Page d'accueil** : Hero, présentation, call-to-action
- [ ] **Réservation** : Formulaire, sélection ville, calendrier
- [ ] **Menus** : Affichage des 3 menus, filtres vegan/végétarien
- [ ] **Contact** : Formulaire de contact, informations
- [ ] **Footer** : Liens fonctionnels, réseaux sociaux
- [ ] **Responsive** : Tester sur mobile/tablet/desktop

### Design à Vérifier

- [ ] Couleurs : Bleu Ardoise (#282F38) + Or Champagne (#D4B473)
- [ ] Effets glass morphism visibles
- [ ] Animations au scroll
- [ ] Hover effects sur les boutons
- [ ] Icônes Font Awesome affichées
- [ ] Police Playfair Display (serif) + Geist (sans)

---

## 🔄 Pour les Mises à Jour Futures

Chaque fois que vous modifiez le site :

- [ ] Modifier le code
- [ ] Tester localement (`npm run dev`)
- [ ] `git add .`
- [ ] `git commit -m "Description du changement"`
- [ ] `git push origin main`
- [ ] Attendre 2-3 minutes
- [ ] Vérifier que le changement est en ligne

---

## ⚠️ Problèmes Courants & Solutions

### Le build échoue sur GitHub

- [ ] Vérifier les logs dans Actions
- [ ] S'assurer que `package.json` est complet
- [ ] Vérifier que Prisma se génère (`npx prisma generate`)
- [ ] Essayer le build localement

### Page blanche sur GitHub Pages

- [ ] Vérifier `basePath: '/LeRefugeGourmand'` dans `next.config.ts`
- [ ] Vider le cache du navigateur (Ctrl+Shift+R)
- [ ] Vérifier la console pour les erreurs
- [ ] Attendre quelques minutes (propagation)

### Styles ne s'affichent pas

- [ ] Vérifier `assetPrefix: '/LeRefugeGourmand/'`
- [ ] Vérifier que le build est terminé
- [ ] Vider cache navigateur
- [ ] Vérifier les erreurs de chemin dans DevTools

### Images ne s'affichent pas

- [ ] Vérifier `images: { unoptimized: true }` dans config
- [ ] Vérifier que les images sont dans `/public`
- [ ] Utiliser des chemins relatifs
- [ ] Pas de `Image` de next/image (utiliser `<img>`)

---

## 📝 Notes Importantes

### Limitations GitHub Pages

- ❌ **Pas de Server-Side Rendering (SSR)**
- ❌ **Pas d'API Routes** (routes /api ne fonctionnent pas)
- ❌ **Pas de base de données en ligne**
- ✅ **Export statique uniquement**
- ✅ **Parfait pour sites vitrine**

### Alternatives si Besoin de Backend

Si vous avez besoin d'un vrai backend :

- **Vercel** : Gratuit, supporte SSR + API Routes + Prisma
- **Netlify** : Gratuit, serverless functions
- **Railway** : Gratuit, supporte PostgreSQL
- **Supabase** : Base de données PostgreSQL gratuite

---

## 🎯 État d'Avancement

### Configuration

- [x] `next.config.ts` configuré
- [x] `.github/workflows/deploy.yml` créé
- [x] `.gitignore` configuré
- [x] `README.md` complet
- [x] `.nojekyll` créé
- [x] `deploy.ps1` créé
- [x] Documentation complète

### Code

- [x] Tailwind CSS v3 fonctionnel
- [x] Font Awesome intégré
- [x] Prisma 7 configuré
- [x] Erreurs d'hydratation corrigées
- [x] Tous les émojis remplacés
- [x] Design premium appliqué

### Déploiement

- [ ] Repository GitHub créé
- [ ] Code poussé sur GitHub
- [ ] GitHub Pages activé
- [ ] Site accessible en ligne
- [ ] Tests post-déploiement réussis

---

## 🎉 UNE FOIS TOUT COCHÉ

**Félicitations ! Votre site est en ligne ! 🚀**

URL : https://gaspardcatry.github.io/LeRefugeGourmand/

N'oubliez pas de :
- ⭐ Mettre une étoile au repo
- 📢 Partager le lien
- 📝 Créer des issues pour les améliorations

---

## 📞 Besoin d'Aide ?

Consultez :
- `DEPLOYMENT.md` - Guide détaillé
- `PUBLICATION-GITHUB.md` - Instructions rapides
- `README.md` - Documentation complète
- GitHub Actions logs - Pour les erreurs de build

---

**Bonne publication ! 🎊**

