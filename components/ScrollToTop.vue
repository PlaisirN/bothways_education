<template>
  <div
      v-if="isVisible"
      class="fixed bottom-5 right-5 bg-blue-500 text-white p-3 rounded-full shadow-lg cursor-pointer"
      @click="scrollToTop"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
      <path fill-rule="evenodd" d="M11.47 2.47a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1-1.06 1.06l-2.47-2.47V21a.75.75 0 0 1-1.5 0V4.81L8.78 7.28a.75.75 0 0 1-1.06-1.06l3.75-3.75Z" clip-rule="evenodd" />
    </svg>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isVisible = ref(false)

const checkScrollPosition = () => {
  // Show button after scrolling 100px
  isVisible.value = window.scrollY > 100;
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

onMounted(() => {
  window.addEventListener('scroll', checkScrollPosition)
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkScrollPosition)
})

</script>

<style scoped>
/* Optional: Add any custom styles if needed */
</style>