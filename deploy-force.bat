@echo off
echo ========================================
echo DEPLOIEMENT FORCE - Le Refuge Gourmand
echo ========================================
echo.

cd /d "%~dp0"

echo [1/6] Verification de l'etat Git...
git status

echo.
echo [2/6] Ajout de tous les fichiers...
git add .

echo.
echo [3/6] Creation du commit...
git commit -m "Deploy: Complete website with all features and fixes"

echo.
echo [4/6] Verification du remote...
git remote -v

echo.
echo [5/6] Configuration du remote (si necessaire)...
git remote set-url origin https://github.com/Gaspard4i/LeRefugeGourmand.git

echo.
echo [6/6] Push vers GitHub...
echo ATTENTION: Vous devrez peut-etre entrer vos identifiants GitHub
echo Username: gaspard4i
echo Password: Votre token GitHub (pas votre mot de passe!)
echo.
git push -u origin main --force

echo.
echo ========================================
echo DEPLOIEMENT TERMINE!
echo ========================================
echo.
echo Consultez GitHub Actions:
echo https://github.com/Gaspard4i/LeRefugeGourmand/actions
echo.
echo Votre site sera accessible a:
echo https://gaspard4i.github.io/LeRefugeGourmand/
echo.
pause

