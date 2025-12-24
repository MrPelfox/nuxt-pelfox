<script setup lang="ts">
import { ref } from 'vue'
import { ChevronDown } from 'lucide-vue-next'
import { useLanguage } from '~/composables/useLanguage'

const { currentLanguage, setLanguage } = useLanguage()

const isOpen = ref(false)

const languages = [
  { code: 'en', name: 'EN' },
  { code: 'tr', name: 'TR' }
]

const selectLanguage = (code: 'en' | 'tr') => {
  setLanguage(code)
  isOpen.value = false
}

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const closeDropdown = () => {
  isOpen.value = false
}
</script>

<template>
  <div class="lang-dropdown relative" v-click-outside="closeDropdown">
    <button 
      @click="toggleDropdown"
      class="lang-btn-main flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300"
    >
      <span class="text-sm font-medium">{{ currentLanguage.toUpperCase() }}</span>
      <ChevronDown class="w-4 h-4 transition-transform duration-300" :class="{ 'rotate-180': isOpen }" />
    </button>

    <Transition name="dropdown">
      <div v-if="isOpen" class="lang-menu absolute top-full right-0 mt-2 p-1 rounded-lg min-w-[80px] z-50">
        <button
          v-for="lang in languages"
          :key="lang.code"
          @click="selectLanguage(lang.code as 'en' | 'tr')"
          class="lang-item w-full px-3 py-2 text-sm font-medium rounded-md transition-all duration-200"
          :class="{ active: currentLanguage === lang.code }"
        >
          {{ lang.name }}
        </button>
      </div>
    </Transition>
  </div>
</template>

<style>
.lang-btn-main {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: rgba(255, 255, 255, 0.75);
}
.lang-btn-main:hover {
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}

.lang-menu {
  background: rgba(16, 16, 16, 0.95);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
}

.lang-item {
  color: rgba(255, 255, 255, 0.6);
  text-align: center;
}
.lang-item:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
}
.lang-item.active {
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
}

.dropdown-enter-active, .dropdown-leave-active {
  transition: all 0.2s ease;
}
.dropdown-enter-from, .dropdown-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

/* Retro */
[data-theme="retro"] .lang-btn-main { background: rgba(51, 255, 51, 0.1); border-color: rgba(51, 255, 51, 0.25); color: rgba(51, 255, 51, 0.75); }
[data-theme="retro"] .lang-btn-main:hover { background: rgba(51, 255, 51, 0.2); color: #33ff33; }
[data-theme="retro"] .lang-menu { background: rgba(10, 10, 8, 0.95); border-color: rgba(51, 255, 51, 0.2); }
[data-theme="retro"] .lang-item { color: rgba(51, 255, 51, 0.6); }
[data-theme="retro"] .lang-item:hover, [data-theme="retro"] .lang-item.active { background: rgba(51, 255, 51, 0.15); color: #33ff33; }

/* Soft */
[data-theme="soft"] .lang-btn-main { background: rgba(167, 139, 250, 0.1); border-color: rgba(167, 139, 250, 0.2); color: rgba(167, 139, 250, 0.75); }
[data-theme="soft"] .lang-btn-main:hover { background: rgba(167, 139, 250, 0.2); color: #a78bfa; }
[data-theme="soft"] .lang-menu { background: rgba(26, 26, 46, 0.95); border-color: rgba(167, 139, 250, 0.15); }
[data-theme="soft"] .lang-item { color: rgba(167, 139, 250, 0.6); }
[data-theme="soft"] .lang-item:hover, [data-theme="soft"] .lang-item.active { background: rgba(167, 139, 250, 0.15); color: #a78bfa; }

/* Ocean */
[data-theme="ocean"] .lang-btn-main { background: rgba(56, 189, 248, 0.1); border-color: rgba(56, 189, 248, 0.2); color: rgba(56, 189, 248, 0.75); }
[data-theme="ocean"] .lang-btn-main:hover { background: rgba(56, 189, 248, 0.2); color: #38bdf8; }
[data-theme="ocean"] .lang-menu { background: rgba(12, 25, 41, 0.95); border-color: rgba(56, 189, 248, 0.15); }
[data-theme="ocean"] .lang-item { color: rgba(56, 189, 248, 0.6); }
[data-theme="ocean"] .lang-item:hover, [data-theme="ocean"] .lang-item.active { background: rgba(56, 189, 248, 0.15); color: #38bdf8; }

/* Sunset */
[data-theme="sunset"] .lang-btn-main { background: rgba(251, 146, 60, 0.1); border-color: rgba(251, 146, 60, 0.2); color: rgba(251, 146, 60, 0.75); }
[data-theme="sunset"] .lang-btn-main:hover { background: rgba(251, 146, 60, 0.2); color: #fb923c; }
[data-theme="sunset"] .lang-menu { background: rgba(26, 18, 21, 0.95); border-color: rgba(251, 146, 60, 0.15); }
[data-theme="sunset"] .lang-item { color: rgba(251, 146, 60, 0.6); }
[data-theme="sunset"] .lang-item:hover, [data-theme="sunset"] .lang-item.active { background: rgba(251, 146, 60, 0.15); color: #fb923c; }

/* Forest */
[data-theme="forest"] .lang-btn-main { background: rgba(74, 222, 128, 0.1); border-color: rgba(74, 222, 128, 0.2); color: rgba(74, 222, 128, 0.75); }
[data-theme="forest"] .lang-btn-main:hover { background: rgba(74, 222, 128, 0.2); color: #4ade80; }
[data-theme="forest"] .lang-menu { background: rgba(15, 26, 20, 0.95); border-color: rgba(74, 222, 128, 0.15); }
[data-theme="forest"] .lang-item { color: rgba(74, 222, 128, 0.6); }
[data-theme="forest"] .lang-item:hover, [data-theme="forest"] .lang-item.active { background: rgba(74, 222, 128, 0.15); color: #4ade80; }
</style>
