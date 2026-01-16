/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,html}",
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        // ===== DE COMPLEMENTAIR GROEP (DCG) =====
        dcg: {
          paars: '#4A2572',        // Hoofdkleur
          geel: '#FBBB00',         // Accentkleur
          lichtpaars: '#9889B3',   // Ondersteunend
          wit: '#FFFFFF',
          antraciet: '#636467',
        },
        // ===== VIJFHART =====
        vijfhart: {
          rood: '#E30613',         // Hoofdkleur
          wit: '#FFFFFF',          // Tekst op rood
          antraciet: '#636467',    // Lopende tekst
          middengrijs: '#CCCDCD',  // Ondersteunend
        },
      },
      fontFamily: {
        // ===== DCG TYPOGRAFIE =====
        'dcg-heading': ['Kanit', 'sans-serif'],     // Koppen en subtitels (SemiBold 600)
        'dcg-body': ['Kanit', 'sans-serif'],        // Platte tekst (Regular 400)
        'dcg-handwritten': ['Caveat', 'cursive'],   // Vrijstaande koptekst (Bold 700)
        
        // ===== VIJFHART TYPOGRAFIE =====
        'vijfhart-heading': ['Open Sans', 'sans-serif'],  // Koppen (Bold 700)
        'vijfhart-body': ['Open Sans', 'sans-serif'],     // Lopende tekst (Regular 400)
      },
      fontWeight: {
        'dcg-semibold': '600',
        'dcg-regular': '400',
        'dcg-bold': '700',
      },
      borderRadius: {
        'vijfhart': '0.375rem',   // 3-5mm afgeronde hoeken
      },
    },
  },
  plugins: [],
}
