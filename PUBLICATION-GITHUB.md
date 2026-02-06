# 🎉 PRÊT POUR GITHUB PAGES !

## ✅ Configuration Complète

Tout est configuré pour publier votre site sur GitHub Pages !

---

## 🚀 COMMANDES RAPIDES

### Option 1 : Script Automatique (Recommandé)

```powershell
.\deploy.ps1
```

Ce script fait tout automatiquement :
- ✅ Initialise Git si nécessaire
- ✅ Ajoute tous les fichiers
- ✅ Crée un commit
- ✅ Configure l'origine GitHub
- ✅ Push vers GitHub
- ✅ Ouvre GitHub Actions

### Option 2 : Commandes Manuelles

```bash
# 1. Initialiser Git
git init
git add .
git commit -m "Initial commit - Le Refuge Gourmand"

# 2. Lier à GitHub
git remote add origin https://github.com/GaspardCatry/LeRefugeGourmand.git
git branch -M main

# 3. Pousser le code
git push -u origin main
```

---

## 📋 ACTIONS REQUISES SUR GITHUB

### 1. Créer le Repository

🔗 https://github.com/new

- **Nom** : `LeRefugeGourmand`
- **Description** : `Plateforme de réservation - Salles privées insonorisées`
- **Visibilité** : Public
- **NE PAS** cocher "Add README" (déjà créé)

### 2. Activer GitHub Pages

Une fois le code poussé :

1. Aller sur : https://github.com/GaspardCatry/LeRefugeGourmand/settings/pages
2. **Build and deployment** → Source : **GitHub Actions**
3. C'est tout ! Le déploiement est automatique

---

## 🌐 URL DU SITE

Une fois déployé (2-3 minutes) :

### **https://gaspardcatry.github.io/LeRefugeGourmand/**

---

## 📁 Fichiers Créés/Modifiés

| Fichier | Description |
|---------|-------------|
| ✅ `next.config.ts` | Configuration export statique + basePath |
| ✅ `.github/workflows/deploy.yml` | GitHub Actions workflow |
| ✅ `README.md` | Documentation complète du projet |
| ✅ `DEPLOYMENT.md` | Guide de déploiement détaillé |
| ✅ `.gitignore` | Fichiers à ignorer par Git |
| ✅ `.env.example` | Exemple de variables d'environnement |
| ✅ `public/.nojekyll` | Désactive Jekyll sur GitHub Pages |
| ✅ `deploy.ps1` | Script PowerShell de déploiement |

---

## 🔧 Configuration Next.js

```typescript
// next.config.ts
{
  output: 'export',                    // Export statique
  basePath: '/LeRefugeGourmand',       // Chemin GitHub Pages
  assetPrefix: '/LeRefugeGourmand/',   // Préfixe pour assets
  images: {
    unoptimized: true                  // Requis pour export statique
  }
}
```

---

## 🤖 GitHub Actions Workflow

Le workflow `.github/workflows/deploy.yml` :

- **Trigger** : Push sur `main` ou manuel
- **Steps** :
  1. Checkout du code
  2. Installation Node.js 20
  3. Installation des dépendances (`npm ci`)
  4. Génération Prisma Client
  5. Build Next.js (`npm run build`)
  6. Upload vers GitHub Pages
  7. Déploiement automatique

---

## ⚡ Test Local Avant Publication

```bash
# Build en mode production
npm run build

# Le dossier /out contient le site statique
```

Si le build réussit localement, il réussira sur GitHub !

---

## 🔄 Workflow de Développement

```bash
# 1. Modifier le code
# 2. Tester localement
npm run dev

# 3. Commiter et pousser
git add .
git commit -m "Description des changements"
git push origin main

# 4. Le site se redéploie automatiquement !
```

---

## 🎯 Prochaines Étapes

1. ✅ **Créer le repository sur GitHub**
   - https://github.com/new
   
2. ✅ **Lancer le script de déploiement**
   ```powershell
   .\deploy.ps1
   ```

3. ✅ **Activer GitHub Pages**
   - Settings → Pages → Source: GitHub Actions

4. ✅ **Attendre 2-3 minutes**
   - Suivre sur : https://github.com/GaspardCatry/LeRefugeGourmand/actions

5. ✅ **Visiter votre site !**
   - https://gaspardcatry.github.io/LeRefugeGourmand/

---

## 💡 Conseils

### Pour Debugging

- **Logs** : https://github.com/GaspardCatry/LeRefugeGourmand/actions
- **Console navigateur** : F12 pour voir les erreurs
- **Vider cache** : Ctrl+Shift+R

### Limitations GitHub Pages

- ❌ Pas de backend (API Routes)
- ❌ Pas de SSR (Server-Side Rendering)
- ✅ Export statique uniquement
- ✅ Pas de base de données en ligne

### Pour Ajouter une BDD

Si vous voulez une vraie BDD :
- Déployer sur **Vercel** (gratuit, supporte Prisma)
- Utiliser **Supabase** pour PostgreSQL gratuit
- Utiliser **PlanetScale** pour MySQL gratuit

---

## 📞 Support

En cas de problème :

1. Vérifier les logs dans **Actions**
2. Consulter `DEPLOYMENT.md` pour le guide détaillé
3. Vérifier la console du navigateur (F12)
4. S'assurer que le build local fonctionne (`npm run build`)

---

## 🎉 C'EST TOUT !

Votre projet est **100% prêt** pour GitHub Pages !

**Commande rapide** :
```powershell
.\deploy.ps1
```

Puis attendez 2-3 minutes et visitez :
**https://gaspardcatry.github.io/LeRefugeGourmand/**

---

**Bonne publication ! 🚀**

