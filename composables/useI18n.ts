import { ref, computed } from 'vue'

export type Locale = 'tr' | 'en'

const currentLocale = ref<Locale>('tr')

const translations = {
  tr: {
    // Header
    nav: {
      hero: 'Ana Sayfa',
      about: 'Hakkımda',
      projects: 'Projeler',
      skills: 'Yetenekler',
      contact: 'İletişim',
      contactMe: 'İletişime Geç'
    },
    // Hero
    hero: {
      title: 'Web Tasarımcı',
      description: 'Modern, minimal ve performans odaklı web arayüzleri tasarlıyorum. Kullanıcı deneyimini ön planda tutan projeler geliştiriyorum.'
    },
    // About
    about: {
      title: 'Benim adım Pelfox',
      description: '11 yaşında tasarım yolculuğuma başladım ve kendimi gerekenden fazla geliştirdim. Oyun oynamayı seviyorum.',
      characterDesc: 'p4lfox benim Minecraft karakterim.'
    },
    // Projects
    projects: {
      view: 'Görüntüle',
      furymine: {
        desc: 'Özel sistemleri, atmosfer odaklı tasarımı ve yapay zeka benzeri mob davranışlarıyla FuryMine, beceri, strateji ve takım çalışmasını ödüllendiren zorlu ama sürükleyici bir Minecraft deneyimi sunmayı hedefliyor.'
      },
      hostigo: {
        desc: 'Performans, güvenlik ve kullanıcı deneyimine odaklanarak oluşturulmuş, oyun sunucularını ve hosting hizmetlerini verimli ve güvenilir bir şekilde yönetmek için temiz, sezgisel ve modern bir arayüz sunar.'
      }
    },
    // Skills
    skills: {
      uiux: { title: 'UI/UX Tasarım', desc: 'Figma, Adobe XD, Sketch ile kullanıcı odaklı arayüz tasarımları' },
      frontend: { title: 'Frontend', desc: 'HTML, CSS, JavaScript, React, Vue.js ile modern web geliştirme' },
      mobile: { title: 'Mobil Tasarım', desc: 'iOS ve Android için native uygulama arayüzleri' },
      animation: { title: 'Animasyon', desc: 'GSAP, Framer Motion, CSS animasyonları ile interaktif deneyimler' },
      graphic: { title: 'Grafik Tasarım', desc: 'Photoshop, Illustrator ile görsel tasarım ve illüstrasyon' },
      performance: { title: 'Performans', desc: 'Web optimizasyonu, SEO ve erişilebilirlik standartları' }
    },
    // Contact
    contact: {
      email: 'E-posta',
      discord: 'Discord'
    },
    // Footer
    footer: {
      tagline: 'Birlikte harika projeler yaratalım. Her zaman yeni fikirlere açığım.',
      rights: 'Tüm hakları saklıdır.',
      powered: 'Pelfox tarafından tasarlandı. Nuxt ile güçlendirildi'
    },
    // Theme
    theme: {
      title: 'Tema Seç',
      active: 'Aktif',
      modern: { name: 'Modern', desc: 'Temiz & minimal koyu tema' },
      retro: { name: 'Retro CRT', desc: 'Klasik yeşil terminal havası' },
      soft: { name: 'Soft Pastel', desc: 'Yumuşak mor koyu tema' },
      ocean: { name: 'Okyanus', desc: 'Derin mavi deniz havası' },
      sunset: { name: 'Gün Batımı', desc: 'Sıcak turuncu & pembe tonlar' },
      forest: { name: 'Orman', desc: 'Doğal yeşil uyumu' }
    }
  },
  en: {
    // Header
    nav: {
      hero: 'Home',
      about: 'About',
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
    // About
    about: {
      title: 'My name is Pelfox',
      description: 'I started my design journey at age 11 and developed myself beyond what was necessary. I enjoy playing games.',
      characterDesc: 'p4lfox is my Minecraft character.'
    },
    // Projects
    projects: {
      view: 'View',
      furymine: {
        desc: 'With its custom systems, atmosphere-driven design, and AI-like mob behaviors, FuryMine aims to deliver a brutal yet immersive Minecraft experience that rewards skill, strategy, and teamwork.'
      },
      hostigo: {
        desc: 'Built with a focus on performance, security, and user experience, it provides a clean, intuitive, and modern interface for managing game servers and hosting services efficiently and reliably.'
      }
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
      rights: 'All rights reserved.',
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
    }
  }
}

export const useI18n = () => {
  const t = computed(() => translations[currentLocale.value])

  const setLocale = (locale: Locale) => {
    currentLocale.value = locale
    if (typeof window !== 'undefined') {
      localStorage.setItem('locale', locale)
      document.documentElement.setAttribute('lang', locale)
    }
  }

  const toggleLocale = () => {
    setLocale(currentLocale.value === 'tr' ? 'en' : 'tr')
  }

  const initLocale = () => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('locale') as Locale | null
      if (saved && ['tr', 'en'].includes(saved)) {
        setLocale(saved)
      }
    }
  }

  return {
    locale: currentLocale,
    t,
    setLocale,
    toggleLocale,
    initLocale
  }
}
