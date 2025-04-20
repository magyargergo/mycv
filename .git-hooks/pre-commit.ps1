# PowerShell pre-commit hook
$env:NODE_PATH = $env:NODE_PATH + ":" + (Join-Path $PSScriptRoot "../node_modules")

Write-Host "Running lint-staged..."
& npm.cmd run lint-fix
& npm.cmd run format

if ($LASTEXITCODE -ne 0) {
    Write-Host "Linting or formatting failed. Please fix the issues before committing."
    exit 1
}

exit 0 