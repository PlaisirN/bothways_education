<script setup lang="ts">
import { useRoute } from 'vue-router'; // Import the useRoute hook
import AppHeader from './components/AppHeader.vue';
import AppFooter from "~/components/AppFooter.vue";
import ScrollToTop from '~/components/ScrollToTop.vue';

// Get the current route
const route = useRoute();

// Define a computed property to conditionally show the footer
const showFooter = computed(() => {
  // Replace 'page-to-hide-footer' with the actual path or name of the page
  return route.path !== '/contact';
});

useHead({
  title: 'Welkom bij BothWays Education',
  meta: [
    {
      name: 'BothWays Education - Twee Wegen naar Succes: Academisch en Persoonlijk',
      content: 'Twee Wegen naar Succes: Academisch en Persoonlijk',
    },
    { name: 'robots', content: 'index, follow' },
    { property: 'og:title', content: 'BothWays Education' },
    { property: 'og:description', content: 'BothWays Education - Twee Wegen naar Succes: Academisch en Persoonlijk' },
  ],
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - BothWays Education` : 'BothWays Education';
  }
})

useSeoMeta({
  title: 'BothWays Education',
  ogTitle: 'BothWays Education',
  description: 'BothWays Education - Twee Wegen naar Succes: Academisch en Persoonlijk',
  ogDescription: 'BothWays Education - Twee Wegen naar Succes: Academisch en Persoonlijk',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <div>
    <AppHeader />
    <NuxtPage />
    <!-- Conditionally render the footer based on the route -->
    <AppFooter v-if="showFooter" />
    <ScrollToTop />
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
html {
  scroll-behavior: smooth;
}
</style>