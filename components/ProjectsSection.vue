<script setup lang="ts">
import { Star, Smartphone } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import { useLanguage } from '~/composables/useLanguage'

const { t } = useLanguage()

const projects = [
  {
    image: 'https://media.discordapp.net/attachments/1425919455317196840/1453173921309261925/content.png?ex=694c7d2d&is=694b2bad&hm=bba77e8c037447b3f9d852ead5e91b871208b9bd00ac0e69c6a604c5551f00fe&=&format=webp&quality=lossless&width=1240&height=826',
    title: 'FuryMine',
    desc: 'With its custom systems, atmosphere-driven design, and AI-like mob behaviors, FuryMine aims to deliver a brutal yet immersive Minecraft experience that rewards skill, strategy, and teamwork.',
    badge: 'Game/Java',
    icon: Star,
    year: '2025',
    link: 'https://furymine.com/',
  },
  {
    image: 'https://media.discordapp.net/attachments/1425919455317196840/1453175020095279174/content.png?ex=694c7e33&is=694b2cb3&hm=42764cec143ca1726b3102352616839677825e1839e8e398eb38732de0b37e7c&=&format=webp&quality=lossless&width=1240&height=826',
    title: 'HostiGo V3',
    desc: 'Built with a focus on performance, security, and user experience, it provides a clean, intuitive, and modern interface for managing game servers and hosting services efficiently and reliably.',
    badge: 'Web/UI-UX',
    icon: Star,
    year: '2024',
    link: 'https://hostigo.com.tr/',
  },
]
</script>

<template>
  <section id="projects" class="w-[80%] max-w-[1200px] mt-10 pb-10">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <article
        v-for="project in projects"
        :key="project.title"
        class="rounded-2xl overflow-hidden border border-border flex flex-col"
      >
        <div class="w-full h-[220px] overflow-hidden">
          <img :src="project.image" :alt="project.title" class="w-full h-full object-cover" />
        </div>

        <div class="text-panel p-6 flex-1 flex flex-col">
          <h3 class="text-white text-xl font-medium mb-2">{{ project.title }}</h3>
          <p class="text-white text-sm leading-relaxed mb-4 font-light">
            {{ project.desc }}
          </p>

          <div class="flex gap-2 mb-5">
            <span class="bg-white/10 text-white/80 text-xs px-3 py-1.5 rounded-full flex items-center gap-1">
              <component :is="project.icon" class="w-3 h-3" />
              {{ project.badge }}
            </span>
            <span class="bg-white/10 text-white/80 text-xs px-3 py-1.5 rounded-full">
              {{ project.year }}
            </span>
          </div>

          <a :href="project.link" target="_blank">
            <Button class="w-full mt-auto">{{ t('buttons.view') }}</Button>
          </a>
        </div>
      </article>
    </div>
  </section>
</template>
