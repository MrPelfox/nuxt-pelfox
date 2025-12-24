<script setup lang="ts">
import { Palette, Code, Smartphone, Sparkles, PenTool, Rocket } from 'lucide-vue-next'
import { useLanguage } from '~/composables/useLanguage'

const { t } = useLanguage()

const skills = [
  { icon: Palette, key: 'uiux' },
  { icon: Code, key: 'frontend' },
  { icon: Smartphone, key: 'mobile' },
  { icon: Sparkles, key: 'animation' },
  { icon: PenTool, key: 'graphic' },
  { icon: Rocket, key: 'performance' },
]
</script>

<template>
  <section id="skills" class="w-[80%] max-w-[1200px] mt-10 pb-10">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      <div
        v-for="skill in skills"
        :key="skill.key"
        class="text-panel border border-border rounded-xl p-7"
      >
        <div class="w-12 h-12 bg-white/10 rounded-xl flex justify-center items-center mb-5">
          <component :is="skill.icon" class="w-5 h-5 text-white" />
        </div>
        <h3 class="text-white text-lg font-medium mb-2">{{ t(`skills.${skill.key}.title`) }}</h3>
        <p class="text-white font-light text-sm leading-relaxed">{{ t(`skills.${skill.key}.desc`) }}</p>
      </div>
    </div>
  </section>
</template>
