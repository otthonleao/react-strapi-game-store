module.exports = {
  // Lint & Prettify TS and JS files
  '*.{js,jsx,ts,tsx}': (filenames) => [
    `prettier --write ${filenames.join(' ')}`,
    // Use Next.js lint command instead of ESLint directly
    `next lint`
  ]
}
