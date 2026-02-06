# 🚨 DÉPLOIEMENT URGENT - GUIDE RAPIDE

## LE PROBLÈME

Le push Git n'a pas fonctionné. GitHub Actions ne s'est pas lancé car le code n'est pas sur GitHub.

---

## ✅ SOLUTION IMMÉDIATE (3 OPTIONS)

### OPTION 1 : Script Batch (LE PLUS SIMPLE)

**Double-cliquez sur** : `deploy-force.bat`

Ce script va :
1. Vérifier l'état Git
2. Ajouter tous les fichiers
3. Créer un commit
4. Pousser vers GitHub avec --force

⚠️ **ATTENTION** : Vous devrez entrer vos identifiants GitHub :
- **Username** : `gaspard4i`
- **Password** : Votre **Personal Access Token** (PAS votre mot de passe !)

---

### OPTION 2 : GitHub Desktop (TRÈS SIMPLE)

1. **Installer GitHub Desktop** : https://desktop.github.com/
2. **Ouvrir le dossier** : File → Add Local Repository
3. **Sélectionner** : `C:\Users\GaspardCatry\WebstormProjects\LeRefugeGourmand`
4. **Se connecter** avec le compte **gaspard4i**
5. **Commit** : Écrire un message et cliquer "Commit to main"
6. **Push** : Cliquer sur "Push origin"

✅ Interface graphique = plus simple !

---

### OPTION 3 : Upload Manuel via GitHub.com

Si tout le reste échoue :

1. **Créer le repository** (si pas déjà fait) :
   - https://github.com/new
   - Nom : `LeRefugeGourmand`
   - Public
   - Créer

2. **Zipper le projet** :
   - Sélectionner tous les fichiers du dossier
   - Clic droit → Compresser → LeRefugeGourmand.zip
   - ⚠️ NE PAS inclure : `node_modules`, `.next`, `.git`

3. **Upload sur GitHub** :
   - Aller sur le repository
   - Cliquer "Add file" → "Upload files"
   - Glisser tous les fichiers (pas le zip, les fichiers)
   - Commit changes

---

## 🔑 CRÉER UN PERSONAL ACCESS TOKEN

Si vous n'en avez pas :

1. **Aller sur** : https://github.com/settings/tokens
2. **Cliquer** : "Generate new token (classic)"
3. **Nom** : `LeRefugeGourmand Deploy`
4. **Expiration** : 90 days (ou No expiration)
5. **Cocher** : `repo` (toutes les cases sous repo)
6. **Générer** et **COPIER LE TOKEN** ⚠️ Vous ne le reverrez plus !
7. **Utiliser ce token** comme mot de passe Git

---

## 📊 APRÈS LE PUSH (Quelle que soit la méthode)

### 1. Vérifier que le code est sur GitHub
👉 https://github.com/Gaspard4i/LeRefugeGourmand

Vous devriez voir :
- ✅ Tous vos fichiers
- ✅ Le dossier `.github/workflows`
- ✅ Le fichier `deploy.yml` dedans

### 2. Activer GitHub Pages

👉 https://github.com/Gaspard4i/LeRefugeGourmand/settings/pages

- **Source** : Sélectionner **GitHub Actions**
- Sauvegarder

### 3. Vérifier le Déploiement

👉 https://github.com/Gaspard4i/LeRefugeGourmand/actions

- Le workflow "Deploy to GitHub Pages" devrait apparaître
- Attendre 2-3 minutes qu'il devienne vert ✅

### 4. Visiter le Site

👉 https://gaspard4i.github.io/LeRefugeGourmand/

---

## 🎯 RECOMMANDATION

**Utilisez GitHub Desktop** - C'est de loin la méthode la plus simple si vous avez des problèmes avec la ligne de commande !

1. Télécharger : https://desktop.github.com/
2. Installer
3. Se connecter avec **gaspard4i**
4. Ajouter le repository local
5. Commit + Push en 2 clics

---

## ❓ VÉRIFICATION RAPIDE

### Le code est-il sur GitHub ?
- ❌ NON → Utiliser une des 3 options ci-dessus
- ✅ OUI → Passer à l'activation de GitHub Pages

### GitHub Pages est-il activé ?
- ❌ NON → Settings → Pages → GitHub Actions
- ✅ OUI → Attendre 2-3 minutes

### Le workflow s'exécute-t-il ?
- ❌ NON → Vérifier que `.github/workflows/deploy.yml` existe
- ✅ OUI → Attendre qu'il termine

---

## 🆘 EN CAS DE BLOCAGE TOTAL

**Contactez-moi avec** :
1. Une capture d'écran de l'erreur
2. Le résultat de : `git remote -v`
3. Le résultat de : `git status`

---

## 📝 FICHIERS IMPORTANTS

| Fichier | But |
|---------|-----|
| `deploy-force.bat` | Script de déploiement forcé |
| `.github/workflows/deploy.yml` | Workflow GitHub Actions |
| `next.config.ts` | Configuration pour GitHub Pages |
| `.gitignore` | Fichiers à ignorer |

---

**🚀 Le projet est prêt, il faut juste le pousser sur GitHub !**

**Ma recommandation #1** : GitHub Desktop (https://desktop.github.com/)

