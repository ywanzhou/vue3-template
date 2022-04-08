module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    ({ addBase }) => {
      addBase({
        '.el-button': {
          'background-color': 'var(--el-button-bg-color,var(--el-color-white))',
        },
      })
    },
  ],
}
