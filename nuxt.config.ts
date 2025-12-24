export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
  ],
  shadcn: {
    prefix: '',
    componentDir: './components/ui'
  },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      title: 'Pelfox | UI/UX Designer & Web Developer - Modern Web Design',
      titleTemplate: '%s | Pelfox',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: 'Pelfox - Professional UI/UX designer and web developer. Modern, minimal and user-focused web interfaces, mobile app designs and brand identity solutions. Freelance designer based in Turkey.'
        },
        { 
          name: 'keywords', 
          content: 'pelfox, ui design, ux design, ui/ux designer, web design, web developer, freelance designer, mobile app design, user experience, user interface, figma, react, vue, nuxt, frontend developer, turkey, istanbul, portfolio, modern web design, minimal design, responsive design, web developer turkey'
        },
        { name: 'author', content: 'Pelfox' },
        { name: 'creator', content: 'Pelfox' },
        { name: 'publisher', content: 'Pelfox' },
        { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
        { name: 'googlebot', content: 'index, follow' },
        
        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Pelfox' },
        { property: 'og:title', content: 'Pelfox | UI/UX Designer & Web Developer' },
        { property: 'og:description', content: 'Professional UI/UX designer and web developer. I design modern, minimal and user-focused web interfaces.' },
        { property: 'og:image', content: '/og-image.png' },
        { property: 'og:url', content: 'https://pelfox.com' },
        { property: 'og:locale', content: 'en_US' },
        
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@pelfox' },
        { name: 'twitter:creator', content: '@pelfox' },
        { name: 'twitter:title', content: 'Pelfox | UI/UX Designer & Web Developer' },
        { name: 'twitter:description', content: 'Professional UI/UX designer and web developer. I design modern, minimal and user-focused web interfaces.' },
        { name: 'twitter:image', content: '/og-image.png' },
        
        // Additional SEO
        { name: 'theme-color', content: '#000000' },
        { name: 'msapplication-TileColor', content: '#000000' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'geo.region', content: 'TR' },
        { name: 'geo.placename', content: 'Turkey' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'canonical', href: 'https://pelfox.com' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=VT323&family=Quicksand:wght@300;400;500;600;700&family=Nunito:wght@300;400;500;600;700&family=Raleway:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap' },
      ],
    }
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/']
    }
  },
  routeRules: {
    '/': { prerender: true }
  }
})
