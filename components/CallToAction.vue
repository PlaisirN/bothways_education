<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: "Klaar om te beginnen?",
  },
  description: {
    type: String,
    default: "Neem contact met ons op en ontdek hoe wij kunnen helpen bij het succes en de persoonlijke groei van uw kind.",
  },
  buttonText: {
    type: String,
    default: "Neem contact op",
  },
  buttonLink: {
    type: String,
    default: "/contact",
  },
  buttonColor: {
    type: String,
    default: 'bg-white',
  },
  textColor: {
    type: String,
    default: 'text-blue-600',
  }
});
</script>

<template>
  <div class="flex flex-col items-center text-center p-16">
    <h2 class="text-2xl font-semibold mb-4">{{ title }}</h2>
    <p class="max-w-2xl mb-4">
      {{ description }}
    </p>
    <NuxtLink
        :to="buttonLink"
        :class="buttonColor + ' ' + textColor"
        class="px-6 py-3 text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-200"
    >
      {{ buttonText }}
    </NuxtLink>
  </div>
</template>
