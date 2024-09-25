/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Segoe UI", "Arial", "sans-serif"],
        serif: ["ui-serif", "Georgia"],
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "intro-back": "url('/images/background.png')",
      },
      backgroundColor: {
        primary: "#7844E9",
        secondary: "#2C3E50",
      },
      colors: {
        primaryText: "#ECF0F1",
        secondaryText: "#4F4F4F",
        tersaryText: "#7844E9",
        // 'secondaryText':'#7844E9',
      },
      fontSize: {
        // Define your custom font sizes
        title: "2.5rem",
        navItems: "1.5rem",
        subTitle: "1.25rem",
        description: "1rem",

        // ... add more font sizes as needed
      },
      screens: {
        // => @media (min-width: 640px) { ... }
        sm: "640px",
        // => @media (min-width: 768px) { ... }
        md: "768px",
        // => @media (min-width: 1024px) { ... }
        lg: "1024px",
        // => @media (min-width: 1280px) { ... }
        xl: "1280px",
        // => @media (min-width: 1536px) { ... }
        "2xl": "1536px",
      },
      keyframes: {
        modalFadeIn: {
          "0%": { transform: "scale(0.9)", opacity: 0 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
      },
      animation: {
        modalFadeIn: "modalFadeIn 0.3s ease-out forwards",
      },
    },
  },
  plugins: [],
};
