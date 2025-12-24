<script setup lang="ts">
import { Palette, Code, Smartphone, Sparkles, PenTool, Rocket } from 'lucide-vue-next'

const skills = [
  {
    icon: Palette,
    title: 'UI/UX Design',
    desc: 'User-focused interface designs with Figma, Adobe XD, Sketch',
  },
  {
    icon: Code,
    title: 'Frontend',
    desc: 'Modern web development with HTML, CSS, JavaScript, React, Vue.js',
  },
  {
    icon: Smartphone,
    title: 'Mobile Design',
    desc: 'Native app interfaces for iOS and Android',
  },
  {
    icon: Sparkles,
    title: 'Animation',
    desc: 'Interactive experiences with GSAP, Framer Motion, CSS animations',
  },
  {
    icon: PenTool,
    title: 'Graphic Design',
    desc: 'Visual design and illustration with Photoshop, Illustrator',
  },
  {
    icon: Rocket,
    title: 'Performance',
    desc: 'Web optimization, SEO and accessibility standards',
  },
]
</script>

<template>
  <section id="skills" class="w-[80%] max-w-[1200px] mt-10 pb-10">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      <div
        v-for="skill in skills"
        :key="skill.title"
        class="text-panel border border-border rounded-xl p-7"
      >
        <div class="w-12 h-12 bg-white/10 rounded-xl flex justify-center items-center mb-5">
          <component :is="skill.icon" class="w-5 h-5 text-white" />
        </div>
        <h3 class="text-white text-lg font-medium mb-2">{{ skill.title }}</h3>
        <p class="text-white font-light text-sm leading-relaxed">{{ skill.desc }}</p>
      </div>
    </div>
  </section>
</template>
