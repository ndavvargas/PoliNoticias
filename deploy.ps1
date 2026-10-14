# Script para compilar y desplegar a GitHub Pages en un solo paso
Write-Host "Compilando proyecto para GitHub Pages..." -ForegroundColor Cyan
npx ng build --base-href /PoliNoticias/

if ($LASTEXITCODE -ne 0) {
    Write-Error "Fallo en la compilación"
    exit 1
}

$browserDir = "dist/noticias-poli/browser"
Copy-Item "$browserDir/index.html" "$browserDir/404.html" -Force
New-Item -ItemType File -Path "$browserDir/.nojekyll" -Force | Out-Null

Push-Location $browserDir
git init -b gh-pages
git config user.name "Usuario"
git config user.email "usuario@local"
git remote add origin https://github.com/ndavvargas/PoliNoticias.git
git add -A
git commit -m "Actualizacion de despliegue en GitHub Pages"
git push -f origin gh-pages
Pop-Location

Write-Host "¡Despliegue completado con éxito!" -ForegroundColor Green
Write-Host "Disponible en: https://ndavvargas.github.io/PoliNoticias/" -ForegroundColor Yellow
