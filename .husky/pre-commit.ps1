# PowerShell pre-commit hook for Windows
Write-Output "Running pre-commit checks..."

# Get path to project root
$projectRoot = Split-Path -Parent (Split-Path -Parent $PSScriptRoot)
$nodeModulesPath = Join-Path $projectRoot "node_modules\.bin"

# Check our test file directly with ESLint
Write-Output "Running ESLint on test file..."
& "$nodeModulesPath\eslint.cmd" --fix .\test-lint.tsx
if ($LASTEXITCODE -ne 0) {
    Write-Output "ESLint failed. Fix the issues before committing."
    exit 1
}

# Format the test file with Prettier
Write-Output "Running Prettier on test file..."
& "$nodeModulesPath\prettier.cmd" --write .\test-lint.tsx
if ($LASTEXITCODE -ne 0) {
    Write-Output "Prettier formatting failed. Fix the issues before committing."
    exit 1
}

Write-Output "Pre-commit checks passed."
exit 0 