# 🚀 Guide de Déploiement GitHub Pages

## 📋 Étapes pour Publier le Site

### 1. Initialiser Git (si pas déjà fait)

```bash
cd C:\Users\GaspardCatry\WebstormProjects\LeRefugeGourmand
git init
git add .
git commit -m "Initial commit - Le Refuge Gourmand"
```

### 2. Créer le Dépôt sur GitHub

1. Allez sur https://github.com/new
2. Nom du repository : **LeRefugeGourmand**
3. Description : _Plateforme de réservation - Salles privées insonorisées_
4. Visibilité : **Public**
5. **NE PAS** cocher "Add README" (on en a déjà un)
6. Cliquez sur **Create repository**

### 3. Lier et Pousser le Code

```bash
# Ajouter l'origine Git
git remote add origin https://github.com/GaspardCatry/LeRefugeGourmand.git

# Renommer la branche en main
git branch -M main

# Pousser le code
git push -u origin main
```

### 4. Activer GitHub Pages

1. Aller sur votre repo : https://github.com/GaspardCatry/LeRefugeGourmand
2. Cliquer sur **Settings** (en haut à droite)
3. Dans le menu latéral, cliquer sur **Pages**
4. Sous **Build and deployment** :
   - Source : Sélectionner **GitHub Actions**
5. C'est tout ! Le workflow va se lancer automatiquement

### 5. Attendre le Déploiement

- Le workflow GitHub Actions va se lancer automatiquement
- Aller dans l'onglet **Actions** pour voir la progression
- Le déploiement prend environ 2-3 minutes

### 6. Accéder au Site

Une fois déployé, votre site sera accessible à :

**🌐 https://gaspardcatry.github.io/LeRefugeGourmand/**

---

## 🔄 Mises à Jour Futures

Pour mettre à jour le site après des modifications :

```bash
# Ajouter les fichiers modifiés
git add .

# Créer un commit
git commit -m "Description des modifications"

# Pousser vers GitHub
git push origin main
```

Le site sera automatiquement redéployé à chaque push !

---

## 🛠️ Résolution de Problèmes

### Le workflow échoue

1. Vérifier les logs dans **Actions**
2. S'assurer que `package.json` contient toutes les dépendances
3. Vérifier que `next.config.ts` a bien le `basePath`

### Le site affiche une page blanche

1. Vérifier la console du navigateur (F12)
2. S'assurer que `basePath: '/LeRefugeGourmand'` est correct
3. Vider le cache du navigateur (Ctrl+Shift+R)

### Les styles ne s'affichent pas

1. Vérifier que `assetPrefix: '/LeRefugeGourmand/'` est dans `next.config.ts`
2. Vérifier que le build s'est bien exécuté
3. Attendre quelques minutes (propagation DNS)

### Prisma génération échoue en CI

Le workflow inclut déjà `npx prisma generate`, mais si ça échoue :
- Vérifier que `@prisma/client` est bien dans `package.json`
- Vérifier que `prisma/schema.prisma` est valide

---

## 📝 Configuration Actuelle

### next.config.ts
```typescript
{
  output: 'export',              // Export statique
  basePath: '/LeRefugeGourmand', // Chemin GitHub Pages
  assetPrefix: '/LeRefugeGourmand/', // Préfixe assets
  images: {
    unoptimized: true            // Images non optimisées
  }
}
```

### GitHub Actions Workflow
- **Trigger** : Push sur `main` ou déclenchement manuel
- **Build** : `npm ci` + `npm run build`
- **Deploy** : Automatique vers GitHub Pages

---

## ✅ Checklist Avant Publication

- [x] `next.config.ts` configuré avec `basePath`
- [x] `.github/workflows/deploy.yml` créé
- [x] `.gitignore` configuré
- [x] `README.md` complet
- [x] `.nojekyll` dans `/public`
- [x] Toutes les dépendances dans `package.json`
- [ ] Code testé localement (`npm run build`)
- [ ] Environnement `.env` non commité
- [ ] Repository GitHub créé

---

## 🎉 C'est Tout !

Votre site sera accessible à :
**https://gaspardcatry.github.io/LeRefugeGourmand/**

En cas de problème, consultez :
- Les logs dans **Actions** sur GitHub
- La documentation Next.js : https://nextjs.org/docs/pages/building-your-application/deploying/static-exports
- GitHub Pages : https://docs.github.com/pages

