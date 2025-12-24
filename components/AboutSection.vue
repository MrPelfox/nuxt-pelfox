<script setup lang="ts">
const games = [
  { icon: 'M', title: 'Minecraft' },
  { icon: 'V', title: 'Valorant' },
  { icon: 'B', title: 'Batman Series' },
]
</script>

<template>
  <section id="about" class="w-[80%] max-w-[1200px] flex flex-col md:flex-row gap-4 mt-5">
    <article class="glass-panel w-full md:w-1/2 min-h-[400px] md:h-[55vh] p-6 rounded-xl flex flex-col justify-center items-center">
      <div class="text-center md:text-left w-full">
        <h2 class="text-white font-normal underline mb-2">My name is Pelfox</h2>
        <p class="text-white font-light">
          I started my design journey at age 11 and developed myself beyond what was necessary. I enjoy playing games.
        </p>
      </div>

      <div class="flex flex-col md:flex-row justify-between items-center w-full mt-6 gap-8">
        <div class="flex flex-col gap-5 w-full md:w-auto">
          <div
            v-for="game in games"
            :key="game.title"
            class="flex items-center gap-3"
          >
            <div class="w-12 h-12 border border-border rounded-xl flex justify-center items-center text-white font-semibold">
              {{ game.icon }}
            </div>
            <h4 class="text-white font-medium">{{ game.title }}</h4>
          </div>
        </div>

        <div class="flex-shrink-0">
          <img src="/assets/p4lfox.png" alt="P4lfox Character" class="w-48 object-contain" />
        </div>
      </div>
    </article>

    <aside class="glass-panel w-full md:w-1/2 min-h-[300px] md:h-[55vh] rounded-xl overflow-hidden flex flex-col">
      <img
        src="/assets/me.png"
        alt="Profile Picture"
        class="w-full h-[calc(100%-80px)] object-cover"
      />
      <div class="p-4 text-left">
        <h3 class="text-white font-normal underline mb-1">p4lfox</h3>
        <p class="text-white font-light text-sm">p4lfox is my Minecraft character.</p>
      </div>
    </aside>
  </section>
</template>
