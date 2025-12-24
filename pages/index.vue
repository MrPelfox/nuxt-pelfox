<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const scrollContainer = ref<HTMLElement | null>(null)
const mobileNavOpen = ref(false)

let currentScroll = 0
let targetScroll = 0
const EASE_FACTOR = 0.08
let isMobile = false
let touchStartY = 0

const toggleMobileNav = () => {
  mobileNavOpen.value = !mobileNavOpen.value
}

const closeMobileNav = () => {
  mobileNavOpen.value = false
}

const navigateTo = (href: string) => {
  const targetId = href.replace('#', '')
  const targetElement = document.getElementById(targetId)
  
  if (targetElement && scrollContainer.value) {
    const containerRect = scrollContainer.value.getBoundingClientRect()
    const targetRect = targetElement.getBoundingClientRect()
    const offset = targetRect.top - containerRect.top + currentScroll
    
    targetScroll = Math.max(0, offset - 20)
  }
  
  closeMobileNav()
}

const getMaxScroll = () => {
  if (!scrollContainer.value) return 0
  return Math.max(0, scrollContainer.value.getBoundingClientRect().height - window.innerHeight)
}

const handleWheel = (e: WheelEvent) => {
  if (mobileNavOpen.value) return
  e.preventDefault()
  targetScroll += e.deltaY
  targetScroll = Math.max(0, Math.min(targetScroll, getMaxScroll()))
}

const handleTouchStart = (e: TouchEvent) => {
  if (mobileNavOpen.value) return
  touchStartY = e.touches[0].clientY
}

const handleTouchMove = (e: TouchEvent) => {
  if (mobileNavOpen.value) return
  e.preventDefault()
  const touchY = e.touches[0].clientY
  const deltaY = touchStartY - touchY
  touchStartY = touchY
  
  targetScroll += deltaY * 1.5
  targetScroll = Math.max(0, Math.min(targetScroll, getMaxScroll()))
}

const animateScroll = () => {
  currentScroll += (targetScroll - currentScroll) * EASE_FACTOR
  if (scrollContainer.value) {
    scrollContainer.value.style.transform = `translate3d(0, -${currentScroll}px, 0)`
  }
  requestAnimationFrame(animateScroll)
}

onMounted(() => {
  if (!scrollContainer.value) return

  isMobile = 'ontouchstart' in window

  const updateBodyHeight = () => {
    if (scrollContainer.value) {
      document.body.style.height = `${scrollContainer.value.getBoundingClientRect().height}px`
    }
  }

  setTimeout(updateBodyHeight, 100)
  window.addEventListener('load', updateBodyHeight)
  window.addEventListener('resize', updateBodyHeight)
  window.addEventListener('wheel', handleWheel, { passive: false })
  window.addEventListener('touchstart', handleTouchStart, { passive: true })
  window.addEventListener('touchmove', handleTouchMove, { passive: false })
  
  animateScroll()
})

onUnmounted(() => {
  window.removeEventListener('wheel', handleWheel)
  window.removeEventListener('touchstart', handleTouchStart)
  window.removeEventListener('touchmove', handleTouchMove)
})
</script>

<template>
  <div class="overflow-hidden">
    <div ref="scrollContainer" class="fixed top-0 left-0 w-full flex flex-col items-center will-change-transform">
      <SiteHeader @toggle-menu="toggleMobileNav" @navigate="navigateTo" />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <SiteFooter />
    </div>

    <MobileNav :is-open="mobileNavOpen" @close="closeMobileNav" @navigate="navigateTo" />
  </div>
</template>
