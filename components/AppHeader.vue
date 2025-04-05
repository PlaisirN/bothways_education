<template>
  <header
      :class="{'-top-full opacity-0': hideNavbar, 'top-10 opacity-100': !hideNavbar}"
      class="mx-auto bg-[#F4F2F2] shadow-md p-4 fixed left-1/2 transform -translate-x-1/2 rounded-full w-[95%] z-50 transition-all duration-500 ease-in-out"
  >
    <nav class="container mx-auto flex justify-between items-center">
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center">
        <img src="/img/logo-no-background.svg" alt="Logo" class="h-10 md:h-16 w-auto" />
      </NuxtLink>

      <!-- Hamburger Menu Button -->
      <button @click="isOpen = !isOpen" class="lg:hidden focus:outline-none">
        <svg class="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>

      <!-- Navigation Links -->
      <div
          ref="dropdownRef"
          :class="{'hidden': !isOpen, 'block': isOpen}"
          class="absolute lg:static top-16 left-0 w-full lg:w-auto lg:flex lg:items-center lg:space-x-6 p-4 lg:p-0 shadow-lg bg-[#F4F2F2] lg:shadow-none"
      >
        <NuxtLink to="/over-ons" class="block lg:inline-block text-gray-700 hover:text-gray-900 px-4 py-2">Over Ons</NuxtLink>
        <NuxtLink to="/producten-en-diensten" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Producten en Diensten</NuxtLink>
        <NuxtLink to="/marktpositie-en-doelgroep" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Marktpositie en Doelgroep</NuxtLink>
        <NuxtLink to="/toekomstige-doelen-en-plannen" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Toekomstige doelen en plannen</NuxtLink>
        <NuxtLink to="/contact" class="block lg:inline-block text-gray-700 hover:text-gray-900 px-4 py-2">Contact</NuxtLink>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { useRouter } from 'vue-router';

const isOpen = ref(false);
const dropdownRef = ref(null);
const dropdownOpen = ref(false);
const hideNavbar = ref(false);
const isLargeScreen = ref(false);
const router = useRouter();
let lastScrollY = 0;
let timeout = null;

const handleScroll = () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY && currentScrollY > 50) {
    hideNavbar.value = true;
    clearTimeout(timeout);
  } else {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      hideNavbar.value = false;
    }, 20);
  }

  lastScrollY = currentScrollY;
};

const handleResize = () => {
  isLargeScreen.value = window.innerWidth >= 1024;
};

const handleClickOutside = (event) => {
  if (
      isOpen.value &&
      dropdownRef.value &&
      !dropdownRef.value.contains(event.target) &&
      !event.target.closest('button')
  ) {
    isOpen.value = false;
  }
};

const handleMouseLeave = () => {
  setTimeout(() => {
    dropdownOpen.value = false;
  }, 200);
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', handleResize);
  router.afterEach(() => {
    isOpen.value = false;
  });

  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  isLargeScreen.value = window.innerWidth >= 1024; // Now runs only on client-side
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('resize', handleResize);
  document.removeEventListener('click', handleClickOutside);
  clearTimeout(timeout);
});
</script>

<style scoped>
.-top-full {
  top: -100px;
  opacity: 0;
}
</style>