# 🚨 PROBLÈME D'AUTHENTIFICATION GITHUB

## ❌ Erreur Détectée

Vous êtes connecté avec **Gaspard5i** mais le repository est sur **Gaspard4i**.

```
remote: Permission to Gaspard4i/LeRefugeGourmand.git denied to Gaspard5i.
fatal: unable to access
```

---

## ✅ SOLUTIONS

### Solution 1 : GitHub CLI (RECOMMANDÉ)

```powershell
# Installer GitHub CLI si pas déjà fait
winget install GitHub.cli

# Se connecter avec le bon compte (gaspard4i)
gh auth login

# Choisir :
# - GitHub.com
# - HTTPS
# - Yes pour authentification
# - Login avec navigateur

# Puis pousser le code
git push -u origin main
```

### Solution 2 : Personal Access Token

1. **Créer un token** :
   - Aller sur : https://github.com/settings/tokens
   - Cliquer sur "Generate new token (classic)"
   - Nom : `LeRefugeGourmand Deploy`
   - Cocher : `repo` (all)
   - Générer le token
   - **COPIER LE TOKEN** (vous ne le reverrez plus !)

2. **Configurer Git** :
   ```powershell
   # Utiliser HTTPS avec le token
   git remote set-url origin https://github.com/Gaspard4i/LeRefugeGourmand.git
   
   # Push (Git va demander username/password)
   git push -u origin main
   # Username: gaspard4i
   # Password: COLLER_LE_TOKEN_ICI
   ```

### Solution 3 : SSH Key

Si vous avez configuré une clé SSH sur gaspard4i :

```powershell
# Vérifier les clés SSH
ssh -T git@github.com

# Si ça marche, utiliser SSH
git remote set-url origin git@github.com:Gaspard4i/LeRefugeGourmand.git
git push -u origin main
```

### Solution 4 : Changer de Compte dans Credential Manager

```powershell
# Supprimer les credentials stockés
cmdkey /list
cmdkey /delete:git:https://github.com

# Puis re-essayer
git push -u origin main
# Git va redemander les credentials
```

---

## 🎯 ÉTAPES RECOMMANDÉES

### 1. Installer GitHub CLI

```powershell
winget install GitHub.cli
```

### 2. Se Connecter

```powershell
gh auth login
```

Suivez les instructions :
- Compte GitHub.com
- HTTPS
- Authentifiez-vous dans le navigateur
- **Utilisez le compte gaspard4i**

### 3. Pousser le Code

```powershell
git push -u origin main
```

### 4. Activer GitHub Pages

Une fois le push réussi :

1. Aller sur https://github.com/gaspard4i/LeRefugeGourmand/settings/pages
2. Source : **GitHub Actions**
3. Sauvegarder

---

## 🔄 Vérification

Après le push, vérifier :

- ✅ Actions : https://github.com/gaspard4i/LeRefugeGourmand/actions
- ✅ Le workflow "Deploy to GitHub Pages" devrait se lancer
- ✅ Attendre 2-3 minutes
- ✅ Site accessible : https://gaspard4i.github.io/LeRefugeGourmand/

---

## 📝 Alternative : Push Manuel via Interface GitHub

Si les problèmes persistent :

1. **Créer le repo sur GitHub** :
   - https://github.com/new
   - Nom : `LeRefugeGourmand`
   - Public
   - Créer

2. **Upload des fichiers** :
   - Cliquer sur "uploading an existing file"
   - Glisser-déposer tout le dossier
   - Commit

3. **Activer GitHub Pages** :
   - Settings → Pages → GitHub Actions

---

## 🚀 COMMANDES RAPIDES

Une fois l'authentification réglée :

```powershell
# Vérifier le remote
git remote -v

# Pousser
git push -u origin main

# Suivre le déploiement
# https://github.com/gaspard4i/LeRefugeGourmand/actions
```

---

## 💡 Note Importante

Le problème vient de l'authentification Git, pas du code. Le projet est **100% prêt**, il suffit juste de s'authentifier correctement avec **gaspard4i** !

---

**Recommandation** : Utilisez **GitHub CLI** (`gh auth login`) - c'est la méthode la plus simple et sécurisée.

