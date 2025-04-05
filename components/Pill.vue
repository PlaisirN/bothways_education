<script setup lang="ts">
const props = withDefaults(defineProps<{
  text: string
  bg?: string
  textColor?: string
}>(), {
  bg: 'bg-purple-100',
  textColor: 'text-purple-800',
})
</script>

<template>
  <span
      :class="`${bg} ${textColor} inline-block font-semibold px-4 py-1 rounded-full mb-4`"
  >
    {{ text }}
  </span>
</template>

<style scoped>
</style>