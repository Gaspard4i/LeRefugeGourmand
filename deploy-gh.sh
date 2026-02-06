#!/bin/bash
# Script de déploiement avec GitHub CLI

echo "🚀 Déploiement avec GitHub CLI..."
echo ""

# Vérifier si gh est installé
if ! command -v gh &> /dev/null
then
    echo "❌ GitHub CLI n'est pas installé"
    echo "📦 Installation de GitHub CLI..."
    winget install GitHub.cli
    echo "✅ GitHub CLI installé"
    echo ""
    echo "⚠️  Veuillez fermer et rouvrir le terminal, puis relancer ce script"
    exit 1
fi

echo "✅ GitHub CLI détecté"
echo ""

# Vérifier l'authentification
echo "🔐 Vérification de l'authentification..."
gh auth status

if [ $? -ne 0 ]; then
    echo "❌ Non authentifié"
    echo "🔑 Lancement de l'authentification..."
    gh auth login
fi

echo ""
echo "📦 Ajout des fichiers..."
git add .

echo ""
echo "💾 Création du commit..."
git commit -m "Deploy: Complete Le Refuge Gourmand website"

echo ""
echo "🚀 Push vers GitHub avec gh CLI..."
gh repo sync

echo ""
echo "✅ DÉPLOIEMENT TERMINÉ!"
echo ""
echo "📊 Vérifier le déploiement:"
echo "   https://github.com/Gaspard4i/LeRefugeGourmand/actions"
echo ""
echo "🌐 Votre site sera accessible à:"
echo "   https://gaspard4i.github.io/LeRefugeGourmand/"
echo ""

