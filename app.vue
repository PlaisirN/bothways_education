<script setup lang="ts">
import AppHeader from './components/AppHeader.vue';
import AppFooter from "~/components/AppFooter.vue";
</script>

<template>
  <div>
    <AppHeader />
    <NuxtPage />
    <AppFooter />
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
</style>