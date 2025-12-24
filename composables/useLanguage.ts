import { ref, onMounted } from 'vue'

export type Language = 'en' | 'tr'

const currentLanguage = ref<Language>('en')

const translations = {
  en: {
    // Header
    nav: {
      hero: 'Hero',
      about: 'Me',
      projects: 'Projects',
      skills: 'Skills',
      contact: 'Contact',
      contactMe: 'Contact Me'
    },
    // Hero
    hero: {
      title: 'Web Designer',
      description: 'I design modern, minimal and performance-focused web interfaces. I develop projects that prioritize user experience.'
    },
    // Buttons
    buttons: {
      explore: 'Explore',
      getInTouch: 'Get in Touch',
      view: 'View'
    },
    // About
    about: {
      title: 'My name is Pelfox',
      description: 'I started my design journey at age 11 and developed myself beyond what was necessary. I enjoy playing games.',
      characterName: 'p4lfox',
      characterDesc: 'p4lfox is my Minecraft character.'
    },
    // Skills
    skills: {
      uiux: { title: 'UI/UX Design', desc: 'User-focused interface designs with Figma, Adobe XD, Sketch' },
      frontend: { title: 'Frontend', desc: 'Modern web development with HTML, CSS, JavaScript, React, Vue.js' },
      mobile: { title: 'Mobile Design', desc: 'Native app interfaces for iOS and Android' },
      animation: { title: 'Animation', desc: 'Interactive experiences with GSAP, Framer Motion, CSS animations' },
      graphic: { title: 'Graphic Design', desc: 'Visual design and illustration with Photoshop, Illustrator' },
      performance: { title: 'Performance', desc: 'Web optimization, SEO and accessibility standards' }
    },
    // Contact
    contact: {
      email: 'Email',
      discord: 'Discord'
    },
    // Footer
    footer: {
      tagline: "Let's create amazing projects together. Always open to new ideas.",
      rights: '© 2025 Pelfox. All rights reserved.',
      powered: 'Designed by Pelfox. Powered by Nuxt'
    },
    // Theme
    theme: {
      title: 'Select Theme',
      active: 'Active',
      modern: { name: 'Modern', desc: 'Clean & minimal dark theme' },
      retro: { name: 'Retro CRT', desc: 'Classic green terminal vibes' },
      soft: { name: 'Soft Pastel', desc: 'Gentle purple dark theme' },
      ocean: { name: 'Ocean', desc: 'Deep blue sea vibes' },
      sunset: { name: 'Sunset', desc: 'Warm orange & pink tones' },
      forest: { name: 'Forest', desc: 'Natural green harmony' }
    },
    // Language
    language: {
      title: 'Language',
      en: 'English',
      tr: 'Türkçe'
    }
  },
  tr: {
    nav: {
      hero: 'Ana',
      about: 'Hakkımda',
      projects: 'Projeler',
      skills: 'Yetenekler',
      contact: 'İletişim',
      contactMe: 'İletişime Geç'
    },
    hero: {
      title: 'Web Tasarımcı',
      description: 'Modern, minimal ve performans odaklı web arayüzleri tasarlıyorum. Kullanıcı deneyimini ön planda tutan projeler geliştiriyorum.'
    },
    buttons: {
      explore: 'Keşfet',
      getInTouch: 'İletişime Geç',
      view: 'Görüntüle'
    },
    about: {
      title: 'Benim adım Pelfox',
      description: '11 yaşında tasarım yolculuğuma başladım ve kendimi gerekenin ötesinde geliştirdim. Oyun oynamayı seviyorum.',
      characterName: 'p4lfox',
      characterDesc: 'p4lfox benim Minecraft karakterim.'
    },
    skills: {
      uiux: { title: 'UI/UX Tasarım', desc: 'Figma, Adobe XD, Sketch ile kullanıcı odaklı arayüz tasarımları' },
      frontend: { title: 'Frontend', desc: 'HTML, CSS, JavaScript, React, Vue.js ile modern web geliştirme' },
      mobile: { title: 'Mobil Tasarım', desc: 'iOS ve Android için native uygulama arayüzleri' },
      animation: { title: 'Animasyon', desc: 'GSAP, Framer Motion, CSS animasyonları ile interaktif deneyimler' },
      graphic: { title: 'Grafik Tasarım', desc: 'Photoshop, Illustrator ile görsel tasarım ve illüstrasyon' },
      performance: { title: 'Performans', desc: 'Web optimizasyonu, SEO ve erişilebilirlik standartları' }
    },
    contact: {
      email: 'E-posta',
      discord: 'Discord'
    },
    footer: {
      tagline: 'Birlikte harika projeler yaratalım. Her zaman yeni fikirlere açığım.',
      rights: '© 2025 Pelfox. Tüm hakları saklıdır.',
      powered: 'Pelfox tarafından tasarlandı. Nuxt ile güçlendirildi'
    },
    theme: {
      title: 'Tema Seç',
      active: 'Aktif',
      modern: { name: 'Modern', desc: 'Temiz ve minimal karanlık tema' },
      retro: { name: 'Retro CRT', desc: 'Klasik yeşil terminal havası' },
      soft: { name: 'Soft Pastel', desc: 'Yumuşak mor karanlık tema' },
      ocean: { name: 'Okyanus', desc: 'Derin mavi deniz havası' },
      sunset: { name: 'Gün Batımı', desc: 'Sıcak turuncu ve pembe tonlar' },
      forest: { name: 'Orman', desc: 'Doğal yeşil uyumu' }
    },
    language: {
      title: 'Dil',
      en: 'English',
      tr: 'Türkçe'
    }
  }
}

export const useLanguage = () => {
  const t = (key: string) => {
    const keys = key.split('.')
    let value: any = translations[currentLanguage.value]
    for (const k of keys) {
      value = value?.[k]
    }
    return value || key
  }

  const setLanguage = (lang: Language) => {
    currentLanguage.value = lang
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang)
      document.documentElement.setAttribute('lang', lang)
    }
  }

  const toggleLanguage = () => {
    setLanguage(currentLanguage.value === 'en' ? 'tr' : 'en')
  }

  const initLanguage = () => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('language') as Language | null
      if (saved && ['en', 'tr'].includes(saved)) {
        setLanguage(saved)
      }
    }
  }

  onMounted(() => {
    initLanguage()
  })

  return { currentLanguage, t, setLanguage, toggleLanguage }
}
