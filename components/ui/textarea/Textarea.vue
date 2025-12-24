<script setup lang="ts">
import { cn } from '@/lib/utils'

defineProps<{
  class?: string
  rows?: number
}>()

const modelValue = defineModel<string>()
</script>

<template>
  <textarea
    v-model="modelValue"
    :rows="rows ?? 3"
    :class="cn(
      'w-full px-4 py-3.5 bg-white/5 border border-white/15 rounded-xl text-white text-sm outline-none transition-all duration-200 placeholder:text-white/40 focus:border-white/40 focus:bg-white/[0.08] resize-y min-h-[120px]',
      $props.class
    )"
  />
</template>
