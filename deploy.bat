@echo off
cd /d "%~dp0"
echo =========================================================
echo   SOLLOS 40 ANOS - ATUALIZANDO GITHUB & GITHUB PAGES
echo =========================================================
echo.
echo [1/3] Adicionando arquivos modificados...
git add .
echo [2/3] Criando commit...
git commit -m "feat: atualiza metricas m2 (+5MM / +3MM), coluna lideranca e creditos zionsites"
echo [3/3] Enviando para o GitHub (main)...
git push origin main
echo.
echo =========================================================
echo   SUCESSO! O GitHub Pages sera atualizado em instantes.
echo   https://alvesvictor146.github.io/sollos/
echo =========================================================
pause
