<script setup lang="ts">
import { computed } from 'vue'
import { buttonVariants, type ButtonVariants } from '.'
import { cn } from '@/lib/utils'

interface Props {
  variant?: ButtonVariants['variant']
  size?: ButtonVariants['size']
  as?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  size: 'default',
  as: 'button',
})

const classes = computed(() => cn(buttonVariants({ variant: props.variant, size: props.size })))
</script>

<template>
  <component :is="as" :class="classes">
    <slot />
  </component>
</template>
