<script setup lang="ts">
import { Github, Instagram } from 'lucide-vue-next'

const socials = [
  { icon: Github, href: 'https://github.com/Mr-Pelfox', label: 'GitHub' },
  { icon: Instagram, href: 'https://instagram.com/pelfsox', label: 'Instagram' },
]
</script>

<template>
  <footer class="w-[80%] max-w-[1200px] mt-16 pb-12">
    <div class="text-panel border border-border rounded-2xl p-10 md:p-14">
      <div class="flex flex-col items-center text-center">
        <h3 class="gradient-text text-4xl md:text-5xl font-semibold mb-4">Pelfox</h3>
        <p class="text-white font-light text-base max-w-[400px] mb-8">
          Let's create amazing projects together. Always open to new ideas.
        </p>

        <div class="flex gap-4 mb-10">
          <a
            v-for="social in socials"
            :key="social.href"
            :href="social.href"
            target="_blank"
            :aria-label="social.label"
            class="w-12 h-12 bg-white/10 rounded-xl flex justify-center items-center text-white transition-all duration-300 hover:bg-white hover:text-black"
          >
            <component :is="social.icon" class="w-5 h-5" />
          </a>
        </div>

        <div class="w-full h-px bg-white/10 mb-8" />

        <div class="flex flex-col md:flex-row justify-between items-center w-full gap-4">
          <p class="text-white/40 text-sm">
            © 2025 Pelfox. All rights reserved.
          </p>
          <p class="text-white/40 text-sm">
            Designed by Pelfox. Powered by Nuxt
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
