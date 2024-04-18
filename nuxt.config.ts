// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    app: {
      pageTransition: { name: "page", mode: "out-in" },
      head: {
        htmlAttrs: {
          lang: "en-US",
        },
        title: '🚀 | FAYStarNext',
        link: [
          { rel: 'icon', href: 'https://cdn.rlss.in.th/profile/vtube/7255b71064ecf98bcee2ac98e679f498.png' }
        ],
  
      }
    },
    css: ["/public/assets/css/tailwind.css"],
    routeRules: {
      '/': { prerender: true, cors: true },
      '/*': { cors: true },
    },
    modules: ["@nuxtjs/tailwindcss", '@nuxt/image', "@nuxtjs/sitemap", "nuxt-gtag", "@nuxtjs/robots", "@nuxtjs/i18n"],
    i18n: {
      locales: [
        {
          code: "en",
          iso: "en-US",
          name: "English",
          domain: "/en",
        },
        {
          code: "th",
          iso: "th-TH",
          name: "ไทย",
          domain: "/th",
        },
      ],
      defaultLocale: "en",
      vueI18n: "./i18n.config.ts",
    },
    gtag: {
      id: "G-BPMPTZD5MZ",
    },
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  })