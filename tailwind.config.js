module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        button: "#062638",
        blue: "#000887",
        green: "#002114",
        ash: "#385160",
        light: "#E5E7EB",
        lightBg: "#F9FAFB",
        red: "#CC572F",
        orange: "#FF6D3B",
        text: "#9CA3AF"
      },
      borders:{
        1: "1px"
      }
    },
    screens: {
      'sm': { 'max': '700px' },
      'md': '700px',
      'lg': '1024px',
      'xl': '1280px',
    }
  },
  plugins: [],
}