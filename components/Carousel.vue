<script setup lang="ts">
import { defineProps, ref } from 'vue'
import Stars from './Stars.vue'
import emblaCarouselVue from 'embla-carousel-vue'
import Autoplay from 'embla-carousel-autoplay'

// Define props
const props = defineProps<{
  items: {
    title: string
    description: string
    image: string
  }[]
}>()

// Initialize Embla Carousel
const [emblaRef, emblaApi] = emblaCarouselVue({ loop: true }, [Autoplay()])

const scrollPrev = () => emblaApi.value?.scrollPrev()
const scrollNext = () => emblaApi.value?.scrollNext()
</script>

<template>
  <div class="embla overflow-hidden mx-auto" ref="emblaRef">
    <div class="embla__container flex">
      <div v-for="(item, index) in items" :key="index"
           class="embla__slide flex-none w-[90%] md:w-2/5 bg-white rounded-xl md:rounded-[15%] p-8 mx-5 shadow-lg"
      >
        <img
            :src="`/img/content/${item.image}`"
            :alt="item.title + ' ' + ' Vectors from Freepik.com'"
            class="w-32 h-32 md:w-32 md:h-32 rounded-full mb-10 mx-auto"
        />
        <h2 class="text-2xl font-semibold text-gray-900 mb-4 text-center md:text-start">{{ item.title}}</h2>
        <p class="text-gray-700 text-center md:text-start">{{ item.description}}</p>
        <Stars class="mt-5 flex justify-center" :count="5"/>
      </div>
    </div>
  </div>

  <div class="mt-5 embla__controls flex gap-4">
    <!-- Scroll Buttons -->
    <button class="embla__button embla__button--prev cursor-pointer" @click="scrollPrev">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
      </svg>
    </button>
    <button class="embla__button embla__button--next cursor-pointer" @click="scrollNext">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
      </svg>
    </button>
  </div>

</template>

<style scoped>
.embla {
  --slide-height: 19rem;
  --slide-spacing: 1rem;
  --slide-size: 70%;
}
.embla__container {
  touch-action: pan-y pinch-zoom;
  margin-left: calc(var(--slide-spacing) * -1);
}
</style>
