export default defineNuxtConfig({
  css: ["@/assets/css/tailwind.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  plugins: [
    '~/plugins/pinia.js', // Adicione esse plugin
  ],

});
