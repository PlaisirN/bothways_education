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
            :alt="item.title"
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

/* .embla {
  max-width: 48rem;
  margin: auto;
  --slide-height: 19rem;
  --slide-spacing: 1rem;
  --slide-size: 70%;
}
.embla__viewport {
  overflow: hidden;
}
.embla__container {
  display: flex;
  touch-action: pan-y pinch-zoom;
  margin-left: calc(var(--slide-spacing) * -1);
}
.embla__slide {
  transform: translate3d(0, 0, 0);
  flex: 0 0 var(--slide-size);
  min-width: 0;
  padding-left: var(--slide-spacing);
}
.embla__slide__number {
  box-shadow: inset 0 0 0 0.2rem;
  border-radius: 1.8rem;
  font-size: 4rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  height: var(--slide-height);
  user-select: none;
}
.embla__controls {
  display: grid;
  grid-template-columns: auto 1fr;
  justify-content: space-between;
  gap: 1.2rem;
  margin-top: 1.8rem;
}
.embla__buttons {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.6rem;
  align-items: center;
}
.embla__button {
  -webkit-tap-highlight-color: blue;
  -webkit-appearance: none;
  appearance: none;
  background-color: transparent;
  touch-action: manipulation;
  display: inline-flex;
  text-decoration: none;
  cursor: pointer;
  border: 0;
  padding: 0;
  margin: 0;
  box-shadow: inset 0 0 0 0.2rem yellow;
  width: 3.6rem;
  height: 3.6rem;
  z-index: 1;
  border-radius: 50%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}
.embla__button:disabled {
  color: green;
}
.embla__button__svg {
  width: 35%;
  height: 35%;
}
.embla__dots {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;
  margin-right: calc((2.6rem - 1.4rem) / 2 * -1);
}
.embla__dot {
  -webkit-tap-highlight-color: orange;
  -webkit-appearance: none;
  appearance: none;
  background-color: transparent;
  touch-action: manipulation;
  display: inline-flex;
  text-decoration: none;
  cursor: pointer;
  border: 0;
  padding: 0;
  margin: 0;
  width: 2.6rem;
  height: 2.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}
.embla__dot:after {
  box-shadow: inset 0 0 0 0.2rem purple;
  width: 1.4rem;
  height: 1.4rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  content: '';
}
.embla__dot--selected:after {
  box-shadow: inset 0 0 0 0.2rem pink;
} */
</style>
