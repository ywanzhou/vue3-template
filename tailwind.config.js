module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
  // tree shaking
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
    './src/**/*.tsx',
  ],
}
