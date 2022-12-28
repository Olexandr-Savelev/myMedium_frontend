module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        "HF-color": " #1e293b",
        "bg-color": "#cbd5e1",
        "dark-text": "#0f172a",
        "light-text": "#f1f5f9",
      },
      animation: {
        pulse: "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;",
      },
      keyframes: {
        pulse: {
          "0%, 100%": {
            opacity: 1,
            boxShadow: "0px 10px 25px 5px rgba(0,0,0,0.75)",
          },
          "50%": {
            opacity: 0.6,
            boxShadow: "0px 0px 6px 0px rgba(0,0,0,0.75)",
          },
        },
      },
    },
  },
  plugins: [],
}
