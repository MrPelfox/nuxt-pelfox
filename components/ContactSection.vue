<script setup lang="ts">
import { Github, Mail, MessageCircle, Instagram } from 'lucide-vue-next'

const contacts = [
  {
    icon: Mail,
    title: 'Email',
    value: 'basaranpelfox@gmail.com',
    href: 'mailto:basaranpelfox@gmail.com',
  },
  {
    icon: Github,
    title: 'GitHub',
    value: 'Mr.Pelfox',
    href: 'https://github.com/@Mr.Pelfox',
  },
  {
    icon: MessageCircle,
    title: 'Discord',
    value: 'pelfox#0001',
    href: '#',
  },
  {
    icon: Instagram,
    title: 'Instagram',
    value: '@pelfsox',
    href: 'https://instagram.com/pelfsox',
  },
]
</script>

<template>
  <section id="contact" class="w-[80%] max-w-[1200px] mt-10 pb-10">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      <a
        v-for="contact in contacts"
        :key="contact.title"
        :href="contact.href"
        target="_blank"
        class="text-panel border border-border rounded-xl p-6 flex items-center gap-4 transition-all duration-300 hover:border-white/40"
      >
        <div class="w-12 h-12 rounded-xl flex justify-center items-center bg-white/10">
          <component :is="contact.icon" class="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 class="text-white font-medium">{{ contact.title }}</h3>
          <p class="text-white font-light text-sm">{{ contact.value }}</p>
        </div>
      </a>
    </div>
  </section>
</template>
