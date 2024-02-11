// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/main.css", "~/assets/fonts/fonts.css"],
  ssr: true,
  site: {
    url: 'https://www.xpandify.agency',
  },

  modules: [
    "@nuxt/image",
    "nuxt-swiper",
    "nuxt-simple-robots",
    "@nuxtjs/sitemap",
  ],
  build: {
    transpile: ["gsap"],
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
