<template>
  <div class="bg-[#F4F2F2]">
    <section class="container mx-auto grid grid-cols-1 gap-40 text-gray-800 py-20 px-6">
      <div class="container mx-auto w-full">
        <span class="text-blue-500">Contact</span>
        <h1 class="text-4xl font-bold mt-2">Let's have a chat.</h1>
        <h4 class="text-lg mt-4">
          Wij staan altijd klaar om uw vragen te beantwoorden en u te helpen met meer informatie over onze diensten.
        </h4>
        <a href="mailto:info@bothwayseducation.com" class="text-blue-500 text-lg hover:text-gray-800 border-b-2 border-transparent hover:border-blue-500 transition">
          info@bothwayseducation.com
        </a>
      </div>
      <div class="container grid grid-cols-3 gap-x-8 gap-y-4">
        <div>
          <div class="">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
              <path fill-rule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" />
            </svg>
          </div>
          <p>BothWays Education</p>
          <p>[Adresstraat en nummer]</p>
          <p>[Postcode en stad]</p>
          <p>[Land]</p>
        </div>
        <div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
              <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clip-rule="evenodd" />
            </svg>
          </div>
          <p>[Telefoonnummer]</p>
          <a href="mailto:info@bothwayseducation.com" class="no-underline hover:underline text-gray-800 hover:text-blue-400">
            info@bothwayseducation.com
          </a>
        </div>
        <div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
              <path d="M5.223 2.25c-.497 0-.974.198-1.325.55l-1.3 1.298A3.75 3.75 0 0 0 7.5 9.75c.627.47 1.406.75 2.25.75.844 0 1.624-.28 2.25-.75.626.47 1.406.75 2.25.75.844 0 1.623-.28 2.25-.75a3.75 3.75 0 0 0 4.902-5.652l-1.3-1.299a1.875 1.875 0 0 0-1.325-.549H5.223Z" />
              <path fill-rule="evenodd" d="M3 20.25v-8.755c1.42.674 3.08.673 4.5 0A5.234 5.234 0 0 0 9.75 12c.804 0 1.568-.182 2.25-.506a5.234 5.234 0 0 0 2.25.506c.804 0 1.567-.182 2.25-.506 1.42.674 3.08.675 4.5.001v8.755h.75a.75.75 0 0 1 0 1.5H2.25a.75.75 0 0 1 0-1.5H3Zm3-6a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75v-3Zm8.25-.75a.75.75 0 0 0-.75.75v5.25c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-5.25a.75.75 0 0 0-.75-.75h-3Z" clip-rule="evenodd" />
            </svg>
          </div>
          <p>Maandag tot en met Vrijdag: 17:00 - 21:00 uur</p>
          <p>Zaterdag: Gesloten</p>
          <p>Zondag: 10:00 - 14:00 uur</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Contact',
});
</script>

<style scoped>
section {
  min-height: 100vh;
}
</style>
