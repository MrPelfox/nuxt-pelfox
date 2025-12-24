<script setup lang="ts">
import { Button } from '@/components/ui/button'
</script>

<template>
  <section id="hero" class="glass-panel w-[80%] max-w-[1200px] h-[75vh] p-4 mt-5 rounded-xl flex flex-col justify-center items-center">
    <div class="flex flex-col justify-center items-center gap-3 max-w-[600px] text-center">
      <h2 class="gradient-text text-5xl md:text-6xl font-semibold">
        Web Designer - <span class="drop-shadow-[0_0_10px_rgba(255,255,255,0.35)]">Pelfox</span>
      </h2>
      <p class="text-white font-light text-base leading-relaxed">
        I design modern, minimal and performance-focused web interfaces.
        I develop projects that prioritize user experience.
      </p>
    </div>

    <div class="mt-5 flex gap-4 justify-center items-center flex-col sm:flex-row w-full sm:w-auto">
      <Button variant="outline" class="w-full sm:w-auto">Explore</Button>
      <Button class="w-full sm:w-auto">Get in Touch</Button>
    </div>
  </section>
</template>
