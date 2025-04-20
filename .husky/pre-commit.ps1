# PowerShell pre-commit hook for Windows
Write-Output "⚠️  REMINDER: Make sure you've run linting/formatting before committing:"
Write-Output "   npm run check-code"
Write-Output ""
Write-Output "   To skip this reminder, use: git commit --no-verify"
Write-Output ""

# No failure, just a reminder
exit 0 