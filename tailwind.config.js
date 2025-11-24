/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        // Palette from your design
        background: "#ffffff",
        text: "#333333",
        primary: "#fa1768", // The pink/red action color (Color 3)
        secondary: "#fd9248", // The orange accent color (Color 2)
        
        // Semantic aliases
        success: "#22c55e", // standard green
        error: "#ef4444",   // standard red
        gray: {
          100: "#f3f4f6",
          200: "#e5e7eb",
          800: "#1f2937",
        }
      },
    },
  },
  plugins: [],
}