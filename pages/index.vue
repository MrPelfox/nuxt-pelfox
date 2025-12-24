<script setup lang="ts">
import { onMounted, ref } from 'vue'
import gsap from 'gsap'

const scrollContainer = ref<HTMLElement | null>(null)
const mobileNavOpen = ref(false)

let currentScroll = 0
let targetScroll = 0
const EASE_FACTOR = 0.05

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

onMounted(() => {
  if (!scrollContainer.value) return

  const updateBodyHeight = () => {
    document.body.style.height = `${scrollContainer.value?.getBoundingClientRect().height}px`
  }

  const handleWheel = (e: WheelEvent) => {
    if (mobileNavOpen.value) return
    e.preventDefault()
    targetScroll += e.deltaY
    const maxScroll = document.body.scrollHeight - window.innerHeight
    targetScroll = Math.max(0, Math.min(targetScroll, maxScroll))
  }

  const animateScroll = () => {
    currentScroll += (targetScroll - currentScroll) * EASE_FACTOR
    if (scrollContainer.value) {
      scrollContainer.value.style.transform = `translate3d(0, -${currentScroll}px, 0)`
    }
    requestAnimationFrame(animateScroll)
  }

  setTimeout(updateBodyHeight, 100)
  window.addEventListener('load', updateBodyHeight)
  window.addEventListener('resize', updateBodyHeight)
  window.addEventListener('wheel', handleWheel, { passive: false })
  animateScroll()
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
