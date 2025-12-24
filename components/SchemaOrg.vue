<script setup lang="ts">
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://pelfox.com/#website",
      "url": "https://pelfox.com",
      "name": "Pelfox",
      "description": "Professional UI/UX designer and web developer",
      "publisher": {
        "@id": "https://pelfox.com/#person"
      },
      "inLanguage": "en-US"
    },
    {
      "@type": "Person",
      "@id": "https://pelfox.com/#person",
      "name": "Pelfox",
      "url": "https://pelfox.com",
      "image": "https://pelfox.com/og-image.png",
      "jobTitle": "UI/UX Designer & Web Developer",
      "description": "Professional UI/UX designer and web developer creating modern, minimal and user-focused web interfaces.",
      "email": "basaranpelfox@gmail.com",
      "sameAs": [
        "https://github.com/Mr.Pelfox",
        "https://instagram.com/pelfsox"
      ],
      "knowsAbout": [
        "UI Design",
        "UX Design",
        "Web Development",
        "Frontend Development",
        "Mobile App Design",
        "Figma",
        "React",
        "Vue.js",
        "Nuxt",
        "JavaScript",
        "TypeScript",
        "HTML",
        "CSS",
        "Tailwind CSS"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "TR"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://pelfox.com/#webpage",
      "url": "https://pelfox.com",
      "name": "Pelfox | UI/UX Designer & Web Developer - Modern Web Design",
      "isPartOf": {
        "@id": "https://pelfox.com/#website"
      },
      "about": {
        "@id": "https://pelfox.com/#person"
      },
      "description": "Pelfox - Professional UI/UX designer and web developer. Modern, minimal and user-focused web interfaces, mobile app designs and brand identity solutions.",
      "inLanguage": "en-US"
    },
    {
      "@type": "ProfilePage",
      "@id": "https://pelfox.com/#profilepage",
      "url": "https://pelfox.com",
      "name": "Pelfox Portfolio",
      "mainEntity": {
        "@id": "https://pelfox.com/#person"
      }
    },
    {
      "@type": "Service",
      "serviceType": "UI/UX Design",
      "provider": {
        "@id": "https://pelfox.com/#person"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Turkey"
      },
      "description": "User interface and user experience design services. Modern and user-focused designs with Figma, Adobe XD."
    },
    {
      "@type": "Service",
      "serviceType": "Web Development",
      "provider": {
        "@id": "https://pelfox.com/#person"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Turkey"
      },
      "description": "Modern web development services. Performant and responsive websites with React, Vue.js, Nuxt."
    }
  ]
}

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(schema)
    }
  ]
})
</script>

<template>
  <div />
</template>
