<#
.SYNOPSIS
Publica Site_Publico/ (20 productos + 40 capturas reales + demo.html interactiva) en GitHub Pages.
Uso:
  .\Site_Publico\deploy_github_pages.ps1 -RepoUrl "https://github.com/andrewkrijdjd-max/andrewkrijdjd-max.github.io.git"
#>
param(
    [string]$RepoUrl = "https://github.com/andrewkrijdjd-max/andrewkrijdjd-max.github.io.git",
    [string]$Branch = "main"
)

$ErrorActionPreference = "Stop"
$SiteDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$TmpDir = Join-Path $env:TEMP ("kreta_gh_pages_" + (Get-Date -Format "yyyyMMdd_HHmmss"))

Write-Host "[1/4] Clonando repositorio GitHub Pages en $TmpDir ..."
git clone --depth 1 --branch $Branch $RepoUrl $TmpDir

Write-Host "[2/4] Copiando archivos públicos desde $SiteDir ..."
Get-ChildItem -Path $TmpDir -Force | Where-Object { $_.Name -ne ".git" } | Remove-Item -Recurse -Force
Copy-Item -Path (Join-Path $SiteDir "*") -Destination $TmpDir -Recurse -Force -Exclude "deploy_github_pages.ps1"

Write-Host "[3/4] Commit de actualización (20 productos + demo interactiva)..."
Push-Location $TmpDir
git add -A
$status = git status --short
if (-not $status) {
    Write-Host "Sin cambios respecto a la versión publicada."
    Pop-Location
    Remove-Item -Recurse -Force $TmpDir
    exit 0
}
git commit -m "feat: publish 20-product catalog, 40 UI v3 screenshots and 60s interactive browser demo"

Write-Host "[4/4] Publicando en $RepoUrl ($Branch) ..."
git push origin $Branch
Pop-Location
Remove-Item -Recurse -Force $TmpDir
Write-Host "OK: Sitio publicado en https://andrewkrijdjd-max.github.io/ y https://andrewkrijdjd-max.github.io/demo.html"
