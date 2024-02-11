// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/main.css", "~/assets/fonts/fonts.css"],
  ssr: true,
  site: {
    url: "https://www.xpandify.agency",
    name: 'Xpandify Agency',
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
    },
  },

  nitro: {
    compressPublicAssets: true,
    minify: true,
    rollupConfig: {
      treeshake: true,
    },
  },

  modules: [
    "@nuxt/image",
    "nuxt-swiper",
    "nuxt-simple-robots",
    "@nuxtjs/sitemap",
    "nuxt-schema-org",
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
