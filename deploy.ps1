# =========================================================
#   SOLLOS 40 ANOS - PUBLICACAO GITHUB & GITHUB PAGES
# =========================================================

$ScriptDir = $PSScriptRoot
Set-Location $ScriptDir

Write-Host "=========================================================" -ForegroundColor Cyan
Write-Host "  SOLLOS 40 ANOS - ATUALIZANDO GITHUB & GITHUB PAGES" -ForegroundColor Cyan
Write-Host "=========================================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "[1/3] Adicionando arquivos modificados..." -ForegroundColor Yellow
git add .

Write-Host "[2/3] Criando commit com as atualizacoes..." -ForegroundColor Yellow
git commit -m "feat: atualiza endereco (Rua Sapetuba, 75) e telefone ((11) 3031.2105)"

Write-Host "[3/3] Enviando para o repositorio GitHub (branch main)..." -ForegroundColor Yellow
git push origin main

Write-Host ""
Write-Host "=========================================================" -ForegroundColor Green
Write-Host "  SUCESSO! Projeto enviado para o GitHub." -ForegroundColor Green
Write-Host "  Repositorio:  https://github.com/alvesvictor146/sollos" -ForegroundColor Cyan
Write-Host "  GitHub Pages: https://alvesvictor146.github.io/sollos/" -ForegroundColor Cyan
Write-Host "  (O GitHub Pages sera atualizado automaticamente via Actions)" -ForegroundColor Yellow
Write-Host "=========================================================" -ForegroundColor Green
