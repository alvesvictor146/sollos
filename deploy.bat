@echo off
chcp 65001 > nul
echo =========================================================
echo   SOLLOS 40 ANOS - PUBLICACAO GITHUB & GITHUB PAGES
echo =========================================================
echo.

set "SCRIPT_DIR=%~dp0"
set "BRAIN_DIR=C:\Users\user0636\.gemini\antigravity-ide\brain\0605ef6f-cb63-4a2c-bafd-4b5aa9a2fad8"
set "ASSETS_DIR=%SCRIPT_DIR%assets\images"

echo [1/4] Organizando pasta assets\images...
if not exist "%ASSETS_DIR%" mkdir "%ASSETS_DIR%"

echo [2/4] Copiando imagens geradas para a estrutura do repositorio...
copy /Y "%BRAIN_DIR%\service_securitizacao_1792859082024.jpg" "%ASSETS_DIR%\securitizacao.jpg" > nul
copy /Y "%BRAIN_DIR%\service_bts_1792859121382.jpg" "%ASSETS_DIR%\bts.jpg" > nul
copy /Y "%BRAIN_DIR%\service_ma_1792859173645.jpg" "%ASSETS_DIR%\ma.jpg" > nul
copy /Y "%BRAIN_DIR%\service_diligence_1792859223193.jpg" "%ASSETS_DIR%\due-diligence.jpg" > nul
copy /Y "%BRAIN_DIR%\service_valuation_1792859274604.jpg" "%ASSETS_DIR%\valuation.jpg" > nul
copy /Y "%BRAIN_DIR%\service_page_reference_1792858155714.jpg" "%ASSETS_DIR%\sale-leaseback.jpg" > nul
copy /Y "%BRAIN_DIR%\hero_reference_1792858124919.jpg" "%ASSETS_DIR%\varejo.jpg" > nul

echo [3/4] Inicializando repositorio Git e configurando branch main...
cd /d "%SCRIPT_DIR%"
git init
git remote remove origin 2>nul
git remote add origin https://github.com/alvesvictor146/sollos.git
git branch -M main

echo [4/4] Adicionando arquivos e enviando para o GitHub...
git add .
git commit -m "Site institucional SOLLOS 40 Anos (1986-2026)"
git push -u origin main

echo.
echo =========================================================
echo   SUCESSO! Projeto enviado para o GitHub.
echo   Repositorio:  https://github.com/alvesvictor146/sollos
echo   GitHub Pages: https://alvesvictor146.github.io/sollos/
echo =========================================================
echo.
pause
