# Script de déploiement automatique pour GitHub Pages

Write-Host "🚀 Déploiement de Le Refuge Gourmand" -ForegroundColor Cyan
Write-Host "======================================" -ForegroundColor Cyan
Write-Host ""

# 1. Vérifier si Git est initialisé
Write-Host "📋 Vérification de Git..." -ForegroundColor Yellow
if (-not (Test-Path .git)) {
    Write-Host "❌ Git n'est pas initialisé. Initialisation..." -ForegroundColor Red
    git init
    Write-Host "✅ Git initialisé" -ForegroundColor Green
}

# 2. Ajouter tous les fichiers
Write-Host ""
Write-Host "📦 Ajout des fichiers..." -ForegroundColor Yellow
git add .

# 3. Créer un commit
Write-Host ""
$commitMessage = Read-Host "💬 Message du commit (ou Enter pour 'Update site')"
if ([string]::IsNullOrWhiteSpace($commitMessage)) {
    $commitMessage = "Update site"
}

git commit -m $commitMessage

# 4. Vérifier l'origine Git
Write-Host ""
Write-Host "🔗 Vérification de l'origine Git..." -ForegroundColor Yellow
$remoteUrl = git remote get-url origin 2>$null

if (-not $remoteUrl) {
    Write-Host "❌ Aucune origine Git configurée" -ForegroundColor Red
    Write-Host "📝 Configuration de l'origine..." -ForegroundColor Yellow
    git remote add origin https://github.com/gaspard4i/LeRefugeGourmand.git
    Write-Host "✅ Origine configurée" -ForegroundColor Green
} else {
    Write-Host "✅ Origine : $remoteUrl" -ForegroundColor Green
}

# 5. Vérifier/Créer la branche main
Write-Host ""
Write-Host "🌿 Vérification de la branche..." -ForegroundColor Yellow
$currentBranch = git branch --show-current

if ($currentBranch -ne "main") {
    Write-Host "📝 Renommage de la branche en 'main'..." -ForegroundColor Yellow
    git branch -M main
    Write-Host "✅ Branche renommée" -ForegroundColor Green
}

# 6. Pousser vers GitHub
Write-Host ""
Write-Host "🚀 Push vers GitHub..." -ForegroundColor Yellow
git push -u origin main

Write-Host ""
Write-Host "✅ Déploiement terminé !" -ForegroundColor Green
Write-Host ""
Write-Host "🌐 Votre site sera disponible à :" -ForegroundColor Cyan
Write-Host "   https://gaspard4i.github.io/LeRefugeGourmand/" -ForegroundColor White
Write-Host ""
Write-Host "📊 Suivez le déploiement sur :" -ForegroundColor Cyan
Write-Host "   https://github.com/gaspard4i/LeRefugeGourmand/actions" -ForegroundColor White
Write-Host ""
Write-Host "⏱️  Le déploiement prend environ 2-3 minutes" -ForegroundColor Yellow
Write-Host ""

# 7. Proposer d'ouvrir le navigateur
$openBrowser = Read-Host "Ouvrir GitHub Actions dans le navigateur ? (O/n)"
if ($openBrowser -ne "n") {
    Start-Process "https://github.com/gaspard4i/LeRefugeGourmand/actions"
}

Write-Host ""
Write-Host "🎉 Terminé !" -ForegroundColor Green

