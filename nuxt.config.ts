// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  runtimeConfig: {
    public: {
      facebookPixelId: process.env.FACEBOOK_PIXEL_ID || '724474856914827'
    }
  },
  app: {
    head: {
      title: 'DOGGYWASH – Lave ton chien en 10 minutes',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: 'DOGGYWASH à Villefranche-sur-Saône : lave ton chien en libre-service, sans rendez-vous, sans bazar. -50% sur ton premier lavage !' 
        }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { 
          rel: 'stylesheet', 
          href: 'https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Fraunces:ital,opsz,wght@0,9..144,100..900;1,9..144,100..900&display=swap' 
        }
      ],
      noscript: [
        {
          children: `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=724474856914827&ev=PageView&noscript=1" />`
        }
      ],
      htmlAttrs: {
        lang: 'fr',
        class: 'scroll-smooth'
      }
    }
  }
})

