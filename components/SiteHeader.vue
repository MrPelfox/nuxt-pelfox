<script setup lang="ts">
import { Menu } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'

const emit = defineEmits(['toggle-menu', 'navigate'])

const navLinks = [
  { href: '#hero', label: 'Hero' },
  { href: '#about', label: 'Me' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

const handleNavClick = (e: Event, href: string) => {
  e.preventDefault()
  emit('navigate', href)
}
</script>

<template>
  <header class="glass-panel w-[80%] max-w-[1200px] p-4 rounded-xl mt-5 flex justify-between items-center">
    <div class="gradient-text text-lg font-semibold">
      <h3>Pelfox</h3>
    </div>

    <nav class="hidden md:flex gap-1">
      <a
        v-for="link in navLinks"
        :key="link.href"
        :href="link.href"
        class="text-white/75 px-4 py-2 rounded-lg hover:bg-white/10 hover:text-white transition-all duration-300"
        @click="handleNavClick($event, link.href)"
      >
        {{ link.label }}
      </a>
    </nav>

    <div class="hidden md:block">
      <Button @click="handleNavClick($event, '#contact')">Contact Me</Button>
    </div>

    <button
      class="md:hidden flex flex-col gap-1 p-2"
      @click="emit('toggle-menu')"
    >
      <Menu class="w-6 h-6 text-white" />
    </button>
  </header>
</template>
