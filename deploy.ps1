# =========================================================
#   SOLLOS 40 ANOS - PUBLICACAO GITHUB & GITHUB PAGES
# =========================================================

$ScriptDir = $PSScriptRoot
$BrainDir = "C:\Users\user0636\.gemini\antigravity-ide\brain\0605ef6f-cb63-4a2c-bafd-4b5aa9a2fad8"
$AssetsDir = Join-Path $ScriptDir "assets\images"

Write-Host "=========================================================" -ForegroundColor Cyan
Write-Host "  SOLLOS 40 ANOS - PUBLICACAO GITHUB & GITHUB PAGES" -ForegroundColor Cyan
Write-Host "=========================================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "[1/4] Organizando pasta assets\images..." -ForegroundColor Yellow
if (-not (Test-Path $AssetsDir)) {
    New-Item -ItemType Directory -Path $AssetsDir -Force | Out-Null
}

Write-Host "[2/4] Copiando imagens geradas..." -ForegroundColor Yellow
Copy-Item (Join-Path $BrainDir "service_securitizacao_1792859082024.jpg") (Join-Path $AssetsDir "securitizacao.jpg") -Force
Copy-Item (Join-Path $BrainDir "service_bts_1792859121382.jpg") (Join-Path $AssetsDir "bts.jpg") -Force
Copy-Item (Join-Path $BrainDir "service_ma_1792859173645.jpg") (Join-Path $AssetsDir "ma.jpg") -Force
Copy-Item (Join-Path $BrainDir "service_diligence_1792859223193.jpg") (Join-Path $AssetsDir "due-diligence.jpg") -Force
Copy-Item (Join-Path $BrainDir "service_valuation_1792859274604.jpg") (Join-Path $AssetsDir "valuation.jpg") -Force
Copy-Item (Join-Path $BrainDir "service_page_reference_1792858155714.jpg") (Join-Path $AssetsDir "sale-leaseback.jpg") -Force
Copy-Item (Join-Path $BrainDir "hero_reference_1792858124919.jpg") (Join-Path $AssetsDir "varejo.jpg") -Force

Write-Host "[3/4] Inicializando repositorio Git e branch main..." -ForegroundColor Yellow
Set-Location $ScriptDir
git init
git remote remove origin 2>$null
git remote add origin https://github.com/alvesvictor146/sollos.git
git branch -M main

Write-Host "[4/4] Adicionando arquivos e enviando para o GitHub..." -ForegroundColor Yellow
git add .
git commit -m "Site institucional SOLLOS 40 Anos (1986-2026)"
git push -u origin main

Write-Host ""
Write-Host "=========================================================" -ForegroundColor Green
Write-Host "  SUCESSO! Projeto enviado para o GitHub." -ForegroundColor Green
Write-Host "  Repositorio:  https://github.com/alvesvictor146/sollos" -ForegroundColor Cyan
Write-Host "  GitHub Pages: https://alvesvictor146.github.io/sollos/" -ForegroundColor Cyan
Write-Host "=========================================================" -ForegroundColor Green
