<template>
  <nav class="bg-[#F4F2F2] shadow-md p-4 w-full">
    <div class="container mx-auto flex justify-between items-center">
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center">
        <img src="/img/logo-no-background.svg" alt="Logo" class="h-16 w-auto" />
      </NuxtLink>

      <!-- Hamburger Menu Button -->
      <button @click="isOpen = !isOpen" class="lg:hidden focus:outline-none">
        <svg class="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>

      <!-- Navigation Links -->
      <div :class="{'hidden': !isOpen, 'block': isOpen}" class="absolute lg:static top-16 left-0 w-full bg-[#F4F2F2] lg:w-auto lg:flex lg:items-center lg:space-x-6 p-4 lg:p-0 shadow-lg lg:shadow-none">
        <NuxtLink to="/over-ons" class="block lg:inline-block text-gray-700 hover:text-gray-900 px-4 py-2">Over Ons</NuxtLink>

        <!-- Dropdown Menu -->
        <div class="relative group">
          <button @click="dropdownOpen = !dropdownOpen" class="block lg:inline-block text-gray-700 hover:text-gray-900 focus:outline-none px-4 py-2 cursor-pointer">Missie en Visie</button>
          <div :class="{'hidden': !dropdownOpen, 'block': dropdownOpen}" class="lg:absolute lg:right-0 mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg">
            <NuxtLink to="/kernwaarden" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Kernwaarden</NuxtLink>
            <NuxtLink to="/producten-diensten" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Producten en Diensten</NuxtLink>
            <NuxtLink to="/marktpositie-doelgroep" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Marktpositie en Doelgroep</NuxtLink>
            <NuxtLink to="/toekomstige-doelen-plannen" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Toekomstige doelen en plannen</NuxtLink>
          </div>
        </div>

        <NuxtLink to="/contact" class="block lg:inline-block text-gray-700 hover:text-gray-900 px-4 py-2">Contact</NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
const isOpen = ref(false);
const dropdownOpen = ref(false);
</script>
