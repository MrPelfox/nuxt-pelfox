<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { useLanguage } from '~/composables/useLanguage'

const { t } = useLanguage()

defineProps<{
  isOpen: boolean
}>()

const emit = defineEmits(['close', 'navigate'])

const navLinks = [
  { href: '#hero', key: 'nav.hero' },
  { href: '#about', key: 'nav.about' },
  { href: '#projects', key: 'nav.projects' },
  { href: '#skills', key: 'nav.skills' },
  { href: '#contact', key: 'nav.contact' },
]

const handleNavClick = (e: Event, href: string) => {
  e.preventDefault()
  emit('navigate', href)
}
</script>

<template>
  <Teleport to="body">
    <div
      class="fixed inset-0 bg-black/60 z-[999] transition-opacity duration-300"
      :class="isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'"
      @click="emit('close')"
    />

    <nav
      class="fixed bottom-0 left-0 right-0 bg-card border-t border-border rounded-t-2xl z-[1000] transition-transform duration-400"
      :class="isOpen ? 'translate-y-0' : 'translate-y-full'"
    >
      <div class="flex flex-col p-6 gap-2">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="text-white px-5 py-4 rounded-xl hover:bg-white/10 transition-colors"
          @click="handleNavClick($event, link.href)"
        >
          {{ t(link.key) }}
        </a>
        <Button class="mt-4" @click="handleNavClick($event, '#contact')">{{ t('nav.contactMe') }}</Button>
      </div>
    </nav>
  </Teleport>
</template>
