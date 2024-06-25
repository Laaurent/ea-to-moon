// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  experimental: {
    renderJsonPayloads: false,
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-lucide-icons",
    "@formkit/auto-animate",
    "shadcn-nuxt",
    "@nuxtjs/color-mode",
    "@pinia/nuxt",
    "@nuxtjs/i18n",
  ],
  css: ["~/assets/css/main.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @use "@/assets/css/_theme.scss" as *;
          `,
        },
      },
    },
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui/test",
  },
  pinia: {
    storesDirs: ["./stores/**"],
  },
  colorMode: {
    classSuffix: "",
  },
  i18n: {
    vueI18n: "./i18n.config.ts", // if you are using custom path, default
    locales: ["en", "fr"], // used in URL path prefix
    defaultLocale: "en", // default locale of your project for Nuxt pages and routings
  },
});
