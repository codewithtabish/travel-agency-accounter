/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}", // Include pages directory
    "./layouts/**/*.{js,jsx,ts,tsx}", // Include layouts directory
    "./features/**/*.{js,jsx,ts,tsx}", // Include features directory
    "./hooks/**/*.{js,jsx,ts,tsx}", // Include hooks directory
    "./utils/**/*.{js,jsx,ts,tsx}", // Include utils directory
    "./public/**/*.{html}", // Include public directory for HTML files
  ],
  theme: {
    extend: {
      colors: {
        light: {
          // Background colors
          'bg-primary': '#ffffff', // White
          'bg-secondary': '#f8f9fa', // Light Gray
          'bg-success': '#d4edda', // Light Green
          'bg-danger': '#f8d7da', // Light Red
          'bg-warning': '#fff3cd', // Light Yellow
          'bg-info': '#d1ecf1', // Light Teal
          'bg-light': '#f8f9fa', // Light Gray
          'bg-dark': '#343a40', // Dark Gray
          // Text colors
          'text-primary': '#007bff', // Blue
          'text-secondary': '#6c757d', // Gray
          'text-success': '#28a745', // Green
          'text-danger': '#dc3545', // Red
          'text-warning': '#ffc107', // Yellow
          'text-info': '#17a2b8', // Teal
          'text-light': '#f8f9fa', // Light Gray
          'text-dark': '#343a40', // Dark Gray
        },
        dark: {
          // Background colors
          'bg-dark-primary': '#212529', // Dark Gray
          'bg-dark-secondary': '#343a40', // Darker Gray
          'bg-dark-success': '#198754', // Dark Green
          'bg-dark-danger': '#dc3545', // Dark Red
          'bg-dark-warning': '#ffc107', // Dark Yellow
          'bg-dark-info': '#0dcaf0', // Dark Teal
          'bg-dark-light': '#495057', // Light Dark Gray
          'bg-dark-dark': '#000000', // Black
          // Text colors
          'text-dark-primary': '#0d6efd', // Dark Blue
          'text-dark-secondary': '#adb5bd', // Dark Gray
          'text-dark-success': '#198754', // Dark Green
          'text-dark-danger': '#dc3545', // Dark Red
          'text-dark-warning': '#ffc107', // Dark Yellow
          'text-dark-info': '#0dcaf0', // Dark Teal
          'text-dark-light': '#ced4da', // Light Gray
          'text-dark-dark': '#ffffff', // White
        },
      },
      fontFamily: {
        pthin: ["Poppins-Thin", "sans-serif"],
        pextralight: ["Poppins-ExtraLight", "sans-serif"],
        plight: ["Poppins-Light", "sans-serif"],
        pregular: ["Poppins-Regular", "sans-serif"],
        pmedium: ["Poppins-Medium", "sans-serif"],
        psemibold: ["Poppins-SemiBold", "sans-serif"],
        pbold: ["Poppins-Bold", "sans-serif"],
        pextrabold: ["Poppins-ExtraBold", "sans-serif"],
        pblack: ["Poppins-Black", "sans-serif"],
        outfit: ['Outfit-Regular', 'Outfit-Bold', 'Outfit-Italic'],
      },
    },
  },
  plugins: [],
};
