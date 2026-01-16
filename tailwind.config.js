/** @type {import("tailwindcss").Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // === VIJFHART HUISSTIJL ===
        "vijfhart": {
          "red": "#E30613",
          "white": "#FFFFFF",
          "anthracite": "#636467",
          "grey": "#CCCDCD",
        },

        // === DCG HUISSTIJL ===
        "dcg": {
          "purple": "#4A2572",
          "yellow": "#FBBB00",
          "light-purple": "#9889B3",
        },

        // === GENERIEKE KLEUREN ===
        "brand": {
          "primary": "var(--brand-primary)",
          "secondary": "var(--brand-secondary)",
          "accent": "var(--brand-accent)",
          "text": "var(--brand-text)",
          "text-light": "var(--brand-text-light)",
        },
      },

      fontFamily: {
        // Vijfhart
        "sans": ["Open Sans", "sans-serif"],
        
        // DCG
        "lato": ["Lato", "sans-serif"],
        "playfair": ["Playfair Display", "serif"],
        "handwriting": ["Nothing You Could Do", "cursive"],
      },

      borderRadius: {
        "vijfhart": "0.375rem",
        "dcg": "0.5rem",
      },

      boxShadow: {
        "card": "0 2px 8px rgba(0, 0, 0, 0.08)",
        "card-hover": "0 4px 16px rgba(0, 0, 0, 0.12)",
        "button": "0 2px 4px rgba(0, 0, 0, 0.1)",
      },

      spacing: {
        "section": "4rem",
        "section-lg": "6rem",
      },

      fontSize: {
        "hero": ["3.5rem", { lineHeight: "1.1", fontWeight: "700" }],
        "title": ["2.25rem", { lineHeight: "1.2", fontWeight: "700" }],
        "subtitle": ["1.5rem", { lineHeight: "1.3", fontWeight: "600" }],
      },

      animation: {
        "fade-in": "fadeIn 0.3s ease-in-out",
        "slide-up": "slideUp 0.4s ease-out",
      },

      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
