<template>
  <!--Footer-->
  <footer class="bg-[#F4F2F2] sticky bottom-0 left-0 w-full -z-50">
    <div class="container mx-auto border-t-1  px-8">
      <div class="w-full flex flex-col md:flex-row py-6">
        <div class="flex-1 mb-6 text-black">
          <NuxtLink to="/" class="flex items-center">
            <img src="/img/logo-no-background.svg" alt="Logo" class="w-xl" />
          </NuxtLink>
        </div>
        <div class="flex-1">
          <p class="uppercase text-gray-500 md:mb-6">BothWays Education</p>
          <ul class="list-reset mb-6">
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              Van Oestendestraat 30
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              3083 ME Rotterdam
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              Nederland
            </li>
          </ul>
        </div>
        <div class="flex-1">
          <p class="uppercase text-gray-500 md:mb-6">Contact</p>
          <ul class="list-reset mb-6">
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              [Telefoonnummer]
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a href="mailto:info@bothwayseducation.com" class="no-underline hover:underline cursor-pointer text-gray-800 hover:text-blue-400">
                info@bothwayseducation.com
              </a>
            </li>
          </ul>
        </div>
        <div class="flex-1">
          <p class="uppercase text-gray-500 md:mb-6">Openingstijden</p>
          <ul class="list-reset mb-6">
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              Maa - Vrij: 17:00 - 21:00 uur
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              Zaterdag: gesloten
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              Zondag: 10:00 - 14:00 uur
            </li>
          </ul>
        </div>
        <div class="flex-1">
          <p class="uppercase text-gray-500 md:mb-6">Meer</p>
          <ul class="list-reset mb-6">
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <NuxtLink to="/" class="no-underline hover:underline text-gray-800 hover:text-blue-400">Home</NuxtLink>
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <NuxtLink to="/over-ons" class="no-underline hover:underline text-gray-800 hover:text-blue-400">Over Ons</NuxtLink>
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <NuxtLink to="/contact" class="no-underline hover:underline text-gray-800 hover:text-blue-400">Contact</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
<script setup lang="ts">
</script>