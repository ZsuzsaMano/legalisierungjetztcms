// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Legalisierung Jetzt",
    },
  },
  modules: ["@nuxt/content", "@nuxtjs/i18n"],
 i18n: {
    // Supported locales
    locales: [
      { 
        code: 'en', 
        name: 'English', 
        iso: 'en-US', 
        dir: 'ltr',
       
      },
      { 
        code: 'es', 
        name: 'Español', 
        iso: 'es-ES', 
        dir: 'ltr',
     
      },
      { 
        code: 'de', 
        name: 'Deutsch', 
        iso: 'de-DE', 
        dir: 'ltr',
    
      },
      { 
        code: 'ar', 
        name: 'العربية', 
        iso: 'ar-SA', 
        dir: 'rtl',  // Important: Arabic is RTL
      }
    ],
    
    // Default language
    defaultLocale: 'de',
    
    // Routing strategy
    strategy: 'prefix_except_default',
    
    // Browser language detection
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
    },
  },
  content: {
    markdown: {
      // stop the markdownParser from turning headings into anchor tags
      // Alternatively have a read on markdown render options via the Content module at https://content.nuxt.com/get-started/configuration#markdown
      anchorLinks: false,
    },
  },
  runtimeConfig: {
    public: {
      // set your cloudinary env url (used to built responsive assets links)
      cloudinaryEnvUrl: "https://res.cloudinary.com/sailsnake-api-test",
    },
  },
  css: [
    "@/assets/scss/normalize.css",
    "@/assets/scss/fonts.scss",
    "@/assets/scss/main.scss",
    "@/assets/scss/type.scss",
    "@/assets/scss/forms.scss",
    "@/assets/scss/cards.scss",
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            '@use "~/assets/scss/mixins.scss" as *; @use "~/assets/scss/variables.scss" as *;',
        },
      },
    },
  },
  experimental: {
    componentIslands: true,
  },
});