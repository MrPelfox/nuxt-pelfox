<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Palette, X, Monitor, Tv, Cloud, Waves, Sunset, TreePine } from 'lucide-vue-next'
import { useLanguage } from '~/composables/useLanguage'

const { t } = useLanguage()

const isOpen = ref(false)
const currentTheme = ref('default')

const themes = [
  { id: 'default', key: 'modern', icon: Monitor, preview: { bg: '#000000', accent: '#ffffff', text: '#999999' } },
  { id: 'retro', key: 'retro', icon: Tv, preview: { bg: '#0a0a0a', accent: '#33ff33', text: '#ffcc00' } },
  { id: 'soft', key: 'soft', icon: Cloud, preview: { bg: '#1a1a2e', accent: '#a78bfa', text: '#c084fc' } },
  { id: 'ocean', key: 'ocean', icon: Waves, preview: { bg: '#0c1929', accent: '#38bdf8', text: '#06b6d4' } },
  { id: 'sunset', key: 'sunset', icon: Sunset, preview: { bg: '#1a1215', accent: '#fb923c', text: '#f43f5e' } },
  { id: 'forest', key: 'forest', icon: TreePine, preview: { bg: '#0f1a14', accent: '#4ade80', text: '#22c55e' } }
]

const togglePanel = () => {
  isOpen.value = !isOpen.value
}

const closePanel = () => {
  isOpen.value = false
}

const selectTheme = (themeId: string) => {
  currentTheme.value = themeId
  document.documentElement.setAttribute('data-theme', themeId)
  localStorage.setItem('theme', themeId)
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme && ['default', 'retro', 'soft', 'ocean', 'sunset', 'forest'].includes(savedTheme)) {
    currentTheme.value = savedTheme
    document.documentElement.setAttribute('data-theme', savedTheme)
  }
})
</script>

<template>
  <!-- Theme Toggle Button -->
  <button class="theme-selector-btn" @click="togglePanel" :title="t('theme.title')">
    <Palette class="w-5 h-5 text-white" />
  </button>

  <!-- Overlay -->
  <div 
    class="theme-panel-overlay" 
    :class="{ open: isOpen }"
    @click="closePanel"
  />

  <!-- Theme Panel -->
  <div class="theme-panel" :class="{ open: isOpen }">
    <div class="flex justify-between items-center mb-6">
      <h3 class="text-white text-lg font-semibold">{{ t('theme.title') }}</h3>
      <button 
        @click="closePanel"
        class="p-2 rounded-lg hover:bg-white/10 transition-colors"
      >
        <X class="w-5 h-5 text-white" />
      </button>
    </div>

    <div class="flex flex-col gap-4">
      <div
        v-for="theme in themes"
        :key="theme.id"
        class="theme-card"
        :class="{ active: currentTheme === theme.id }"
        @click="selectTheme(theme.id)"
      >
        <!-- Preview -->
        <div 
          class="w-full h-20 rounded-lg mb-3 flex items-center justify-center overflow-hidden"
          :style="{ background: theme.preview.bg }"
        >
          <div class="flex gap-2">
            <div 
              class="w-8 h-8 rounded-md"
              :style="{ background: theme.preview.accent }"
            />
            <div 
              class="w-16 h-8 rounded-md"
              :style="{ background: theme.preview.text, opacity: 0.5 }"
            />
          </div>
        </div>

        <!-- Info -->
        <div class="flex items-center gap-3">
          <div 
            class="w-10 h-10 rounded-lg flex items-center justify-center"
            :style="{ background: theme.preview.accent + '20' }"
          >
            <component 
              :is="theme.icon" 
              class="w-5 h-5"
              :style="{ color: theme.preview.accent }"
            />
          </div>
          <div>
            <h4 class="text-white font-medium">{{ t(`theme.${theme.key}.name`) }}</h4>
            <p class="text-white/50 text-sm">{{ t(`theme.${theme.key}.desc`) }}</p>
          </div>
        </div>

        <!-- Active indicator -->
        <div 
          v-if="currentTheme === theme.id"
          class="mt-3 text-center text-xs text-white/60 py-1 bg-white/5 rounded"
        >
          ✓ {{ t('theme.active') }}
        </div>
      </div>
    </div>
  </div>
</template>
