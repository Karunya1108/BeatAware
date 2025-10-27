/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#6366f1", // indigo-500
          DEFAULT: "#4f46e5", // indigo-600
          dark: "#4338ca", // indigo-700
        },
        secondary: {
          light: "#3b82f6", // blue-500
          DEFAULT: "#2563eb", // blue-600
          dark: "#1d4ed8", // blue-700
        },
        accent: {
          light: "#a78bfa", // purple-400
          DEFAULT: "#8b5cf6", // purple-500
          dark: "#7c3aed", // purple-600
        },
      },
    },
  },
  plugins: [],
};
