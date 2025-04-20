module.exports = {
  // Run ESLint and Prettier on JS/TS files
  '*.{js,jsx,ts,tsx}': [
    'eslint --fix',
    'prettier --write'
  ],
  // Run Prettier on various file types
  '*.{json,css,md}': [
    'prettier --write'
  ]
} 