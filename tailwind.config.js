/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flyonui/dist/js/*.js", // FlyonUI JS components (if using JS)
    "./build/*.html",                    // Scan your HTML files for Tailwind classes
    "./src/**/*.html",                   // If you have files in src folder, add them as well
    "./src/**/*.js",                     // Add JS files to include Tailwind CSS classes in JS files
  ],
  // Add TailwindCSS plugins if needed (e.g., forms, typography, etc.)
  plugins: [
    require("flyonui"),           // Add FlyonUI CSS utilities
    require("flyonui/plugin"),     // Add FlyonUI JS functionality (optional)
  ],
  theme: {
    extend: {
      colors: {
        'white': '#ffffff',
        'purple': '#3f3cbb',
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
        'primary': '#F9FAFB',
        'secondary': '#514AE6',
        'black': '#1F2937',
        'accent': '#1F2937',
        'left': "#6062EF",
        'right': "#534DE7",
      },
    },
  },
  // FlyonUI custom settings if you need to generate vendor-specific CSS
  flyonui: {
    vendors: true,  // Enable vendor-specific CSS generation (if required)
    themes: ["light", "dark"]
  },
  darkMode: ['class'],  // Enables dark mode using a class
};
