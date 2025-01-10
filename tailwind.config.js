export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        typewriter: "typewriter 1s steps(22) forwards",
        'rotate-cycle': 'rotateCycle 3s infinite ease-in-out',
      },
      keyframes: {
        typewriter: {
          to: {
            left: "100%"
          }
        },
        rotateCycle: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '33%': {
            transform: 'translateY(-100%)',
          },
          '66%': {
            transform: 'translateY(100%)',
          },
        },
      }
    },
  },
  plugins: [],
}