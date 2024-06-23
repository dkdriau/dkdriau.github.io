module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        night: '#0e0e0eff',
        'orange-wheel': '#ff7f05ff',
        'steel-pink': '#c803c4ff',
        'sea-green': '#249461ff',
        'engineering-orange': '#d50003ff',
        'old-gold': '#b6b800ff',
        'celestial-blue': '#029beeff',
        'sea-green-2': '#249461ff',
        amber: '#ffbe00ff',
        amaranth: '#ea0351ff',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
