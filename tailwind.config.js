module.exports = {
  purge: {
    content: ['./public/index.html', './src/**/*.svelte'],
    safelist:['disabled:opacity-50'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ['Tenor Sans', 'Georgia', 'serif'],
      body: ['Inter', 'system-ui', 'sans-serif'],
    },
    colors: {
      primary: {
        50: '#fafafa',
        100: '#f4f4f5',
        200: '#e4e4e7',
        300: '#d4d4d8',
        400: '#a1a1aa',
        500: '#71717a',
        600: '#52525b',
        700: '#3f3f46',
        800: '#27272a',
        900: '#18181b',
      },
      accent: {
        50: '#fffbeb',
        100: '#fef3c7',
        200: '#fde68a',
        300: '#fcd34d',
        400: '#fbbf24',
        500: '#f59e0b',
        600: '#d97706',
        700: '#b45309',
        800: '#92400e',
        900: '#78350f',
      },
    },
    extend: {
      height: {
        hath: '50vh',
      },
      maxHeight: {
        hath: '50vh',
      },
    },
    variants: {
      extend: {
        opacity: ['disabled'],
      },
    },
  },
}
